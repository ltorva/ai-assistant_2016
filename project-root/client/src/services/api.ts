import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (content: string) => {
  try {
    const response = await api.post('/api/chat', { content });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}; 