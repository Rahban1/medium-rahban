import z from "zod";

export const signupInput = z.object({
    email: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }),
    password: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }).min(6, { message: "password must be 6 or more characters long"}),
    name: z.string().optional()
})

export const signinInput = z.object({
    email: z.string({
        required_error: "email is required",
        invalid_type_error: "email must be a string",
      }),
    password: z.string({
        required_error: "password is required",
        invalid_type_error: "password must be a string",
      }).min(6, { message: "Must be 6 or more characters long"}),
})

export const createBlogInput = z.object({
    title: z.string({
        required_error: "title is required",
        invalid_type_error: "title must be a string",
      }),
    content: z.string({
        required_error: "content is required"
      })
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})


export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>