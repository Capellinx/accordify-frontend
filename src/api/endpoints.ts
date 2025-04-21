import { baseURL } from "@/api/axios";

export const endpoints = {
   backoffice: {
      login: `${baseURL}/backoffice/session`,
      resetPassword: `${baseURL}/backoffice/forgot-password`,
      getAllClientsOfManager: (managerId: string | number) => `${baseURL}/backoffice/clients?id=${managerId}`,
      create: `${baseURL}/backoffice/client`
   }
}