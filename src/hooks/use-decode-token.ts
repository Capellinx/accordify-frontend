import { LOCALSTORAGE } from "@/shared/local-storage-keys";
import { jwtDecode } from "jwt-decode";

interface tokenResponse {
   id: {
      value: string
   }
}

export function useDecodeToken() {
   const access_token = localStorage.getItem(LOCALSTORAGE.BACKOFFICE.LOGIN);

   if (!access_token) {
      throw new Error("Token não foi localizado");
   }

   const { id: { value } } = jwtDecode(access_token) as tokenResponse

   try {
      return {
         id: value,
         access_token,
      };
   } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      throw new Error("Token inválido");
   }
}
