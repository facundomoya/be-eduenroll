import { z } from "zod";

const startsWithUppercase = (str) => {
    return str.charAt(0) === str.charAt(0).toUpperCase();
};

export const degree_userSchema = z.object({
    degree: z.object({
        name: z.string().max(20).refine(startsWithUppercase, {
            message: "La primera letra del nombre debe estar en mayúscula",
        }),
        degreeId: z.number().int().positive().min(3)
    })
});
