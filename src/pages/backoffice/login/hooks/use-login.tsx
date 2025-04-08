import { useAuthBackOffice } from "@/hooks/useAuthBackoffice"
import { api } from "@/services"
import { ENDPOINTS } from "@/shared/endpoints"
import { Paths } from "@/shared/paths"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

interface LoginRequest {
   email: string
   password: string
}

interface LoginResponse {
   manager: {
      name: string
   },
   access_token: string
}

export function useBackofficeLogin() {
   const { setInformationOnLocalStorage } = useAuthBackOffice()
   const navigate = useNavigate()

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
      },
      onSuccess: ({ manager: { name }, access_token }: LoginResponse) => {
         setInformationOnLocalStorage({
            name,
            access_token
         })
         navigate(Paths.backoffice.dashboard)
      }
   })

   return {
      submitLogin: mutate
   }
}