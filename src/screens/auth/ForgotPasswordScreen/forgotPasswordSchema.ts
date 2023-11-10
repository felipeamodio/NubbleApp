import {z} from 'zod';

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>

export const forgotPasswordSchema = z.object({
    email: z.string().email('email inválido'),
})