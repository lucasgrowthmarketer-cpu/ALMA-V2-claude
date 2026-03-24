// API URL detection
// Railway: frontend = alma-v2-claude-production.up.railway.app
// Backend = alma-v2-claude-production-backend.up.railway.app
// Production: both behind alma-machines-outils.fr with /api/ proxy
function getApiUrl() {
  // If env var is set at build time, use it
  if (process.env.REACT_APP_API_URL) return process.env.REACT_APP_API_URL;
  
  // Auto-detect: replace frontend hostname with backend pattern
  const host = window.location.hostname;
  
  // Production domain with nginx proxy
  if (host === 'alma-machines-outils.fr' || host === 'www.alma-machines-outils.fr') {
    return 'https://alma-v2-claude-production-backend.up.railway.app/api';
  }
  
  // Railway staging
  if (host.includes('railway.app')) {
    return host.replace('production', 'production-backend').replace(/^/, 'https://') + '/api';
  }
  
  // Local dev
  return 'http://localhost:8000/api';
}

export const API_URL = getApiUrl();

export async function submitForm(endpoint, data) {
  const response = await fetch(`${API_URL}${endpoint}`, {
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
