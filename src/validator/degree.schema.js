import { z } from "zod";

const startsWithUppercase = (str) => {
    return str.charAt(0) === str.charAt(0).toUpperCase();
};

export const degreeSchema = z.object({
    degree: z.object({
        name: z.string().max(50).refine(startsWithUppercase, {
            message: "The first letter of the name must be uppercase.",
        }),
        degreeId: z.number().int().positive().min(3)
    })
});
