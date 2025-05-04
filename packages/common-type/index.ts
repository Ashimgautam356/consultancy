
import z from 'zod'


export const Signup = z.object({
    email: z.string().email().max(30).min(3).trim().toLowerCase(),
    password:z.string().min(6),
    firstName:z.string().trim().max(40),
    lastName:z.string().trim().max(40),
    phone:z.string().length(10).optional()
})