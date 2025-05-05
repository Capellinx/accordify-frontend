import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { AxiosError } from "axios"
import { useState } from "react"
import { useDecodeToken } from "@/hooks/use-decode-token"
import { newUserSchema, NewUserSchema } from "../schema/new-user-schema"
import { newUserGetaway } from "../gateway"


export function useCreateUserForm() {
   const { access_token: accessToken } = useDecodeToken()
   const [error, setError] = useState<string | null>(null)

   const key = 'create-user-id'

   const form = useForm<NewUserSchema>({
      resolver: zodResolver(newUserSchema),
      defaultValues: {
         name: "",
         surname: "",
         email: "",
         password: "",
         state: "",
         active: false,
         clientId: "",
         permission: "",
         position: ""
      }
   })

   const { mutate, isPending } = useMutation({
      mutationKey: [key],
      mutationFn: async (data: NewUserSchema) => {
         console.log(data);
         // return await newUserGetaway.create({
         //    ...data,
         //    accessToken
         // })

      },
      onMutate: () => {
         const toastId = toast.loading('Criando cliente...')
         return { toastId }
      },
      onError: (error, _variables, context) => {
         if (context?.toastId) {
            toast.error('Erro ao criar cliente.', { id: context.toastId })
         }

         if (error instanceof AxiosError) {
            setError(error.response?.data)
         }
      },
      onSuccess: (_data, _variables, context) => {
         if (context?.toastId) {
            toast.success('Usuário criado com sucesso!', { id: context.toastId })
         }

         // queryClient.invalidateQueries({
         //    queryKey: ['fetch-all-clients']
         // })

         form.reset()
         close()
      }
   })

   return {
      form,
      onSubmit: mutate,
      isPending,
      error
   }
}