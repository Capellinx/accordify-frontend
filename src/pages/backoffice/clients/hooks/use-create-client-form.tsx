import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import axios, { AxiosError } from "axios"
import { LOCALSTORAGE } from "@/shared/local-storage-keys"
import { useState } from "react"
import { Client, clientSchema } from "../components/create-client-modal/schemas/client.schema"
import { useModal } from "@/hooks/use-modal"


export function useCreateClientForm() {
   const access_token = localStorage.getItem(LOCALSTORAGE.BACKOFFICE.LOGIN)
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
         return onSubmit(data)
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

   async function onSubmit(client: Client) {
      const { data } = await axios.post("http://localhost:3333/backoffice/client", client, {
         headers: {
            Authorization: `Bearer ${access_token}`
         }
      })

      return data
   }

   return {
      form,
      onSubmit: mutate,
      isPending,
      error
   }
}