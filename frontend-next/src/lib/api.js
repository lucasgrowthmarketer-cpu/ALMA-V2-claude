// Toutes les requetes passent par le proxy /api (rewrite defini dans next.config.js).
// Avantage : same-origin. Pas de CORS, pas d'appel vers un domaine tiers
// (*.up.railway.app) susceptible d'etre bloque par un adblocker ou un firewall d'entreprise.
const API_BASE = '/api';

export { API_BASE as API_URL };

export async function submitForm(endpoint, data) {
  // Normalisation : accepte '/contact' comme '/api/contact' (evite le double /api).
  const path = endpoint.startsWith('/api/') ? endpoint.slice(4) : endpoint;

  const response = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Erreur serveur' }));
    throw new Error(error.detail || "Erreur lors de l'envoi");
  }

  return response.json();
}
