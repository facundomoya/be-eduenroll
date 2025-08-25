import { z } from "zod";

const startsWithUppercase = (str) => {
    return str.charAt(0) === str.charAt(0).toUpperCase();
};

export const studentSchema = z.object({
    student: z.object({
        name: z.string().min(3).max(30).refine(startsWithUppercase, {
            message: "The first letter of the name must be uppercase.",
        }),
        lastname: z.string().min(3).max(30).refine(startsWithUppercase, {
            message: "The first letter of the lastname must be uppercase.",
        }),
        email: z.string().email(),
        studentId: z.number().int().positive().min(3)
    })
});
