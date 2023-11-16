import {z} from 'zod';

export type LoginSchema = z.infer<typeof loginSchema>

export const loginSchema = z.object({
    email: z.string().email('email inválido'),
    password: z.string().min(1, 'campo obrigatório'),
});
