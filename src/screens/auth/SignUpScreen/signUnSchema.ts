import {z} from 'zod';

//extrair o type atráves do que já temos
// infer ele define o tipo para mim inferindo(reaproveitando) o que já temos
export type SignUpSchema = z.infer<typeof signUpSchema>;

//esse regex tem algumas regras como o nome não pode começar com um carctere especial, etc
const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
    username: z
        .string()
        .regex(userNameRegex, 'username inválido')
        .toLowerCase()
        .transform(value => { //fazendo regra para passar a primeira letra maiúscula e o restando minúscula
            return value
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }),
    fullName: z.string().min(5, 'nome muito curto').max(50, 'nome muito longo'),
    //email já tem uma regex própria
    email: z.string().email('email inválido'),
    password: z.string().min(8, 'senha deve ter no mínimo 8 caracteres'),
});


