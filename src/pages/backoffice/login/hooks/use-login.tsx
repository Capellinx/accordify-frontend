import { useAuthBackOffice } from "@/hooks/useAuthBackoffice"
import { Paths } from "@/shared/paths"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { LoginManagerGetaway } from "../gateway/login-manager-getaway"
import { httClientFactory } from "@/api/httpClient"
import { loginSchema, LoginSchema } from "../schema/login-schema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

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

   const form = useForm<LoginSchema>({
      defaultValues: {
         email: "",
         password: ""
      },
      resolver: zodResolver(loginSchema)
   })

   const { mutate, isPending } = useMutation({
      mutationKey: ['backoffice-login'],
      mutationFn: async ({ email, password }: LoginRequest) => {
         const loginGetaway = new LoginManagerGetaway(httClientFactory())
         const { body } = await loginGetaway.login({
            email,
            password
         })

         return body
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
         form.reset()
      },
      onError: (error) => {
         if (error instanceof AxiosError) {
            toast.error('Login failed. Please try again.')
            setError(error.response?.data)
         }
         form.reset()
      }
   })

   return {
      submitLogin: mutate,
      isPending,
      error,
      form
   }
}
