import { z } from 'zod'

export const PersonSchema = z.object({
  name: z.string(),
  age: z.number(),
  bio: z.string().optional(),
})
