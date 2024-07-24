// src/services/ask.ts ou src/services/ask.js
import axios from 'axios';

export const sendQuestion = async (question: string) => {
  try {
    const response = await axios.post('http://localhost:5000/ask', { question });
    return response.data.response;
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
    throw error;
  }
};
