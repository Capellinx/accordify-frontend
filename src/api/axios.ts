import axios from 'axios';

export const baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:3333"

export const api = axios.create({
   baseURL,
   headers: {
      'Content-Type': 'application/json',
   },
});

