import { z } from "zod";


export const forgotPasswordSchema = z.object({
   email: z.string({ required_error: "E-mail é obrigatório" }).email({ message: "E-mail inválido" })
})

export type ForgotPassordProps = z.infer<typeof forgotPasswordSchema>