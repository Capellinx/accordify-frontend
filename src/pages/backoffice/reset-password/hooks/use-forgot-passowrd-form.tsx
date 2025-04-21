import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { ForgotPassordProps, forgotPasswordSchema } from "../schema/forgot-password.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { resetPasswordGetaway } from "../getaway"

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
      mutationFn: async (email: string) => {
         const { body } = await resetPasswordGetaway.reset({ email })

         return body
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
 
   return {
      form,
      onSubmit: mutate,
      isPending
   }
}
