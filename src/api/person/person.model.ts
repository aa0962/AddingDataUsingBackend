import { z } from "zod";

export const personSchema = z.object({
    name: z.string(),
    age: z.number(),
    gender: z.string(),
    mobile: z.string().max(10),
});

export const requestPersonSchema = z.object({
    id: z.string(),
});

export type Person = z.infer<typeof personSchema>;