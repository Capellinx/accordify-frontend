import { z } from "zod";

export const newUserSchema = z.object({
   name: z
      .string({ required_error: "Nome é obrigatório" })
      .nonempty({ message: "Nome é obrigatório" }),
   surname: z
      .string({ required_error: "Sobrenome é obrigatório" })
      .nonempty({ message: "Sobrenome é obrigatório" }),
   email: z
      .string({ required_error: "E-mail é obrigatório" })
      .email({ message: "E-mail inválido" }),
   password: z
      .string(),
   state: z
      .string(),
   position: z
      .string(),
   active: z
      .boolean(),
   clientId: z
      .string(),
   permission: z
      .string(),
})


export type NewUserSchema = z.infer<typeof newUserSchema>