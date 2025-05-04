
import z from 'zod'

export const SignupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    phone: z
      .string()
      .min(10, "Phone must be 10 digits")
      .max(10, "Phone must be 10 digits"),
    country: z.string().min(1, "Country is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must agree to the terms" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })


export type SignupSchemaForm = z.infer<typeof SignupSchema>



export const SigninSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
   password: z.string().min(6, "Password must be at least 6 characters"),
})

export type SigninSchemaForm = z.infer<typeof SigninSchema>

