import { api } from "@/services"
import { ENDPOINTS } from "@/shared/endpoints"
import { useMutation } from "@tanstack/react-query"

interface LoginRequest {
   email: string
   password: string
}

export function useBackofficeLogin() {

   const { mutate } = useMutation({
      mutationKey: ['backoffice-login'],
      mutationFn: async ({ email, password }: LoginRequest) => {
         try {
            const { data } = await api.post(ENDPOINTS.BACKOFFICE.LOGIN, {
               email,
               password
            })

            console.log(data)
            return data
         } catch (error) {
            console.log(error)
         }
      }
   })

   return {
      submitLogin: mutate
   }
}