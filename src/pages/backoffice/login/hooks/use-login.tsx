import { useAuthBackOffice } from "@/hooks/useAuthBackoffice"
import { api } from "@/lib/axios"
import { ENDPOINTS } from "@/shared/endpoints"
import { Paths } from "@/shared/paths"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useState } from "react"
import { toast } from "sonner"
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

         toast.success('Logged in successfully!', {
            duration: 3000,
            position: 'top-right'
         })
      },
      onError: (error) => {
         if (error instanceof AxiosError) {
               toast.error('Login failed. Please try again.')
            setError(error.response?.data)
         }
      }
   })

   return {
      submitLogin: mutate,
      isPending,
      error
   }
}
