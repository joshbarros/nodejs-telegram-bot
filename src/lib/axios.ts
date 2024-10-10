import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Create a base Axios instance for Gemini API
export const geminiApiClient = axios.create({
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create a base Axios instance for Exchange Rate API
export const exchangeRateApiClient = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_API_KEY}`,
});
