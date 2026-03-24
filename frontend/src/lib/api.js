const API_URL = 'https://alma-v2-claude-production-a977.up.railway.app/api';

export { API_URL };

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
