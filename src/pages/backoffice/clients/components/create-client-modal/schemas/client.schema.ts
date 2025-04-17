import { z } from "zod";

export const clientSchema = z.object({
   socialReason: z
      .string({ required_error: "Razão social é obrigatória" })
      .min(3, { message: "Razão social é obrigatória" }),
   cnpj: z
      .string({ required_error: "CNPJ é obrigatório" })
      .min(14, { message: "CNPJ inválido" }),
   email: z
      .string({ required_error: "E-mail é obrigatório" })
      .email({ message: "E-mail inválido" })
      .min(1, { message: "E-mail inválido" }),
})

export type Client = z.infer<typeof clientSchema>