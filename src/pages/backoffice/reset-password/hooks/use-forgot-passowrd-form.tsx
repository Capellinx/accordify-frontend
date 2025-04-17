import { useMutation } from "@tanstack/react-query"
import axios  from "axios"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ForgotPassordProps, forgotPasswordSchema } from "../schema/forgot-password.schema"
import { zodResolver } from "@hookform/resolvers/zod"


export function useForgotPasswordForm() {
   const key = 'forgot-password'

   const form = useForm<ForgotPassordProps>({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
         email: ""
      }
   })

   const { mutate, isPending } = useMutation({
      mutationKey: [key],
      mutationFn: async (email: ForgotPassordProps) => {
         return onSubmit(email)
      },
      onMutate: () => {
         const toastId = toast.loading('Enviando email...')
         return { toastId }
      },
      onError: (_error, _variables, context) => {
         if (context?.toastId) {
            toast.error('Erro ao enviar email.', { id: context.toastId })
         }
      },
      onSuccess: (_data, _variables, context) => {
         if (context?.toastId) {
            toast.success('E-mail enviado com sucesso!', { id: context.toastId })
         }

         form.reset()
      }
   })

   async function onSubmit(email: ForgotPassordProps) {
      const { data } = await axios.post('http://localhost:3333/backoffice/forgot-password', email)

      return data
   }
   return {
      form,
      onSubmit: mutate,
      isPending
   }
}
