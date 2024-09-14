import { date, z } from 'zod'

const dateSchema = z.date({ coerce: true })

const coerceDate = (maybeDate: unknown): Date => {
  const result = dateSchema.safeParse(maybeDate)
  if (result.success) {
    return result.data
  }
  throw result.error
}
