/**
 * API utility functions for calling the backend
 */

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export interface HealthResponse {
  status: string;
}

export interface TranslateResponse {
  message: string;
}

/**
 * Health check endpoint
 */
export const checkHealth = async (): Promise<HealthResponse> => {
  const response = await fetch(`${API_BASE_URL}/health`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

/**
 * Translate subtitle endpoint
 */
export const translateSubtitle = async (): Promise<TranslateResponse> => {
  const response = await fetch(`${API_BASE_URL}/translate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
