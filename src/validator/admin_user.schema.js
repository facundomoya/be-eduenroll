import { z } from "zod";

const startsWithUppercase = (str) => {
    return str.charAt(0) === str.charAt(0).toUpperCase();
};

export const admin_userSchema = z.object({
    user: z.object({
        user_name: z.string().min(3).max(20),
        password: z.string().min(6).max(20)
    }),
    admin: z.object({
        name: z.string().min(3).max(30).refine(startsWithUppercase, {
            message: "The first letter of the name must be uppercase.",
        }),
        lastname: z.string().min(3).max(30).refine(startsWithUppercase, {
            message: "The first letter of the lastname must be uppercase.",
        }),
        email: z.string().email(),
        age: z.number().min(1).max(99),
        administratorId: z.number().int().positive().min(3)
    })
});
