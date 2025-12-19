import { z } from "zod";

export const signUpSchema = z
  .object({
    fullname: z
      .string({ message: "Nome completo é obrigatório" })
      .min(5, "Nome muito curto"),
    email: z
      .string({ message: "E-mail é obrigatório" })
      .email("E-mail inválido"),
    password: z
      .string({ message: "Senha é obrigatória" })
      .min(6, "Senha muito curta"),
    confirmPassword: z
      .string({ message: "Confirmação de senha é obrigatória" })
      .min(6, "Senha muito curta"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
