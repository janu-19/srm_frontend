const API_BASE_URL = 'https://srm-backend-2-7pdn.onrender.com'; // Production backend URL

export const callBfhlApi = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bfhl`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data })
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};