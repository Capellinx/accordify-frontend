import { useAuthBackOffice } from "@/hooks/useAuthBackoffice"
import { api } from "@/services"
import { ENDPOINTS } from "@/shared/endpoints"
import { Paths } from "@/shared/paths"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useState } from "react"
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
   const [error, setError] = useState<string | null>(null)
   const { setInformationOnLocalStorage } = useAuthBackOffice()
   
   const navigate = useNavigate()

   const { mutate, isPending } = useMutation({
      mutationKey: ['backoffice-login'],
      mutationFn: async ({ email, password }: LoginRequest) => {
         const { data } = await api.post(ENDPOINTS.BACKOFFICE.LOGIN, {
            email,
            password
         })

         setError(null)

         return data
      },
      onSuccess: ({ manager: { name }, access_token }: LoginResponse) => {
         setInformationOnLocalStorage({
            name,
            access_token
         })
         navigate(Paths.backoffice.dashboard)
      },
      onError: (error) => {
         if(error instanceof AxiosError){
            setError(error.response?.data)
         }

         console.log(error)
      }
   })

   return {
      submitLogin: mutate,
      isPending,
      error
   }
}