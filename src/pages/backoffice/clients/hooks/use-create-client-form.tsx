import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { AxiosError } from "axios"
import { useState } from "react"
import { Client, clientSchema } from "../schemas/client.schema"
import { useModal } from "@/hooks/use-modal"
import { useDecodeToken } from "@/hooks/use-decode-token"
import { createClientGetaway } from "../getaways"


export function useCreateClientForm() {
   const { id: managerId, access_token: accessToken } = useDecodeToken()
   const [error, setError] = useState<string | null>(null)
   
   const key = 'create-client-id'

   const queryClient = useQueryClient()

   const { close } = useModal()

   const form = useForm<Client>({
      resolver: zodResolver(clientSchema),
      defaultValues: {
         socialReason: "",
         cnpj: "",
         email: "",
      }
   })

   const { mutate, isPending } = useMutation({
      mutationKey: [key],
      mutationFn: async (data: Client) => {
         const { body } = await createClientGetaway.create({
            ...data,
            managerId,
            accessToken
         })

         return body
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
            toast.success('Cliente criado com sucesso!', { id: context.toastId })
         }

         queryClient.invalidateQueries({
            queryKey: ['fetch-all-clients']
         })
         
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