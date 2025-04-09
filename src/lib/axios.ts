import axios from 'axios';

// todo: implementar middleware de captura de error
export const api = axios.create({
   baseURL: 'http://localhost:3333',
   headers: {
      'Content-Type': 'application/json',
   },
});

