import { z } from 'zod'

export const unionSchema = z.union([z.string(), z.number()])
export const intersectionSchema = z.intersection(
  z.object({ a: z.string() }),
  z.object({ b: z.number() })
)
