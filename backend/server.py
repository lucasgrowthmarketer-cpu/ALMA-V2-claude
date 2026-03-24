from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Brevo API
BREVO_API_KEY = os.environ.get('BREVO_API_KEY', '')
BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'
RECIPIENT_EMAIL = 'jean-baptiste@alma-machines-outils.fr'
RECIPIENT_NAME = 'Jean-Baptiste BORRON'
SENDER_EMAIL = 'noreply@alma-machines-outils.fr'
SENDER_NAME = 'Alma Machines-Outils - Site Web'

app = FastAPI(title="Alma Machines-Outils API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ============ MODELS ============

class ContactForm(BaseModel):
    nom: str
    entreprise: Optional[str] = ''
    email: str
    telephone: Optional[str] = ''
    categorie: Optional[str] = 'Demande generale'
    message: str

class OccasionVenteForm(BaseModel):
    nom: str
    entreprise: Optional[str] = ''
    email: str
    telephone: Optional[str] = ''
    marque: str
    modele: str
    annee: Optional[str] = ''
    etat: Optional[str] = ''
    localisation: Optional[str] = ''
    description: Optional[str] = ''

class OccasionRechercheForm(BaseModel):
    nom: str
    entreprise: Optional[str] = ''
    email: str
    telephone: Optional[str] = ''
    categorie: str
    marque: Optional[str] = ''
    description: Optional[str] = ''

class BrochureForm(BaseModel):
    nom: str
    email: str
    telephone: Optional[str] = ''
    entreprise: Optional[str] = ''


# ============ BREVO HELPER ============

async def send_brevo_email(subject, html_content, reply_to_email=None, reply_to_name=None):
    if not BREVO_API_KEY:
        logger.error("BREVO_API_KEY not configured")
        raise HTTPException(status_code=500, detail="Service email non configure")
    
    payload = {
        "sender": {"name": SENDER_NAME, "email": SENDER_EMAIL},
        "to": [{"email": RECIPIENT_EMAIL, "name": RECIPIENT_NAME}],
        "subject": subject,
        "htmlContent": html_content
    }
    
    if reply_to_email:
        payload["replyTo"] = {"email": reply_to_email, "name": reply_to_name or reply_to_email}
    
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": BREVO_API_KEY
    }
    
    async with httpx.AsyncClient() as client:
        response = await client.post(BREVO_API_URL, json=payload, headers=headers, timeout=10.0)
    
    if response.status_code in (200, 201):
        logger.info(f"Email sent: {subject}")
        return True
    else:
        logger.error(f"Brevo error {response.status_code}: {response.text}")
        raise HTTPException(status_code=500, detail="Erreur lors de l envoi")


def email_template(title, content_rows, accent_color="#ef6110"):
    rows_html = ""
    for label, value in content_rows:
        if value:
            rows_html += f'<tr><td style="padding:8px 12px;font-weight:600;color:#555;width:160px;vertical-align:top;border-bottom:1px solid #f0f0f0;">{label}</td><td style="padding:8px 12px;color:#333;border-bottom:1px solid #f0f0f0;">{value}</td></tr>'
    
    return f'''<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:{accent_color};padding:20px 24px;border-radius:8px 8px 0 0;">
            <h1 style="color:white;margin:0;font-size:20px;">{title}</h1>
            <p style="color:rgba(255,255,255,0.8);margin:5px 0 0;font-size:13px;">{datetime.now().strftime("%d/%m/%Y a %H:%M")} - alma-machines-outils.fr</p>
        </div>
        <div style="background:white;padding:20px 0;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">{rows_html}</table>
        </div>
        <p style="color:#999;font-size:11px;text-align:center;margin-top:16px;">Email automatique - alma-machines-outils.fr</p>
    </div>'''


# ============ ROUTES ============

@api_router.get("/")
async def root():
    return {"message": "Alma Machines-Outils API", "status": "ok"}

@api_router.get("/health")
async def health():
    return {"status": "ok", "brevo": "configured" if BREVO_API_KEY else "not configured"}

@api_router.post("/contact")
async def submit_contact(form: ContactForm):
    subject = f"[Contact] {form.categorie} - {form.nom}"
    html = email_template("Nouvelle demande de contact", [
        ("Nom", form.nom), ("Entreprise", form.entreprise), ("Email", form.email),
        ("Telephone", form.telephone), ("Type", form.categorie),
        ("Message", form.message.replace('\n', '<br>')),
    ])
    await send_brevo_email(subject, html, reply_to_email=form.email, reply_to_name=form.nom)
    return {"success": True, "message": "Votre demande a ete envoyee avec succes."}

@api_router.post("/occasion/vente")
async def submit_occasion_vente(form: OccasionVenteForm):
    subject = f"[Occasion - Vente] {form.marque} {form.modele} - {form.nom}"
    html = email_template("Depot machine occasion - VENTE", [
        ("Nom", form.nom), ("Entreprise", form.entreprise), ("Email", form.email),
        ("Telephone", form.telephone), ("Marque", form.marque), ("Modele", form.modele),
        ("Annee", form.annee), ("Etat", form.etat), ("Localisation", form.localisation),
        ("Description", form.description.replace('\n', '<br>') if form.description else ''),
    ], accent_color="#1a1c1b")
    await send_brevo_email(subject, html, reply_to_email=form.email, reply_to_name=form.nom)
    return {"success": True, "message": "Votre annonce a ete envoyee avec succes."}

@api_router.post("/occasion/recherche")
async def submit_occasion_recherche(form: OccasionRechercheForm):
    subject = f"[Occasion - Recherche] {form.categorie} - {form.nom}"
    html = email_template("Demande machine occasion - RECHERCHE", [
        ("Nom", form.nom), ("Entreprise", form.entreprise), ("Email", form.email),
        ("Telephone", form.telephone), ("Categorie", form.categorie),
        ("Marque souhaitee", form.marque),
        ("Details", form.description.replace('\n', '<br>') if form.description else ''),
    ], accent_color="#1a1c1b")
    await send_brevo_email(subject, html, reply_to_email=form.email, reply_to_name=form.nom)
    return {"success": True, "message": "Votre recherche a ete envoyee avec succes."}

@api_router.post("/brochures")
async def submit_brochure(form: BrochureForm):
    subject = f"[Brochures] Demande de catalogues - {form.nom}"
    html = email_template("Demande de brochures", [
        ("Nom", form.nom), ("Entreprise", form.entreprise),
        ("Email", form.email), ("Telephone", form.telephone),
    ])
    await send_brevo_email(subject, html, reply_to_email=form.email, reply_to_name=form.nom)
    return {"success": True, "message": "Votre demande de brochures a ete envoyee."}


app.include_router(api_router)

allowed_origins = os.environ.get('CORS_ORIGINS', '*').split(',')
app.add_middleware(
    CORSMiddleware, allow_credentials=True, allow_origins=allowed_origins,
    allow_methods=["*"], allow_headers=["*"],
)
