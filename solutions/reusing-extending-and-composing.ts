import { z } from 'zod'

export const unionSchema = z.union([z.literal('foo'), z.literal('bar')])
export const intersectionSchema = z.intersection(
  z.object({ a: z.string() }),
  z.object({ b: z.number() })
)
