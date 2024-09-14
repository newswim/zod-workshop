import { z } from 'zod'

export const lazySchema = z.lazy(() => z.string())

// More advanced Zod-specific features
const expandingContext = z.addIssueToContext
const customSchema = z.custom

const asyncParsing = z.unknown

const transform = z.string().transform((val) => val.toUpperCase())

const interdependentSchemas = z.object({
  a: z.string(),
  //   b: z.string().refine((val) => val === z.$data.a, {
  //     message: 'b must be equal to a',
  //   }),
})

const customIssue = z.string().refine((val) => val === 'foo', {
  message: 'Value must be "foo"',
})
