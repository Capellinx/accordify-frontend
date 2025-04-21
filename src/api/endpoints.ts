import { baseURL } from "@/api/axios";

export const endpoints = {
   backoffice: {
      login: `${baseURL}/backoffice/session`,
      resetPassword: `${baseURL}/backoffice/forgot-password`,
      getAllClientsOfManager: (managerId: string | number) => `${baseURL}/backoffice/client?id=${managerId}`,
      create: `${baseURL}/backoffice/client`
   }
}