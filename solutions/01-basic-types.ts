//
//
//
//
//
//
//
//
// ARE YOU SURE YOU WANT TO SEE THE SOLUTION?
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Okay, fine
//
//
//
//
//
//

import { expect, it, describe } from 'vitest'
import { z } from 'zod'

///////////////////////////////// Legend //////////////////////////////////
// ❓ = question / task
// 🕵️ = hint
// 💡 = solution
// 💀 = extra / bonus / fun
//
//////////////
// Strings //
/////////////

// 🕵️ Zod provides a `string` method to create a schema for strings
const stringSchema = z.string()

// ❓ How would we provide a default value?
const stringSchemaWithDefault = stringSchema.default('hello')

// ❓ How would we make the string optional?
const stringSchemaWithOptional = stringSchema.optional()

// ❓ How would we make the string nullable?
const stringSchemaWithNullable = stringSchema.nullable()

// ❓ How would we make the string nullable *and* optional?
const stringSchemaWithNullish = stringSchema.nullish()

// ❓ How would we enforce a minimum length of 3?
const stringSchemaWithMinLength = stringSchema.min(3)

// ❓ How would we enforce a maximum length of 10?
const stringSchemaWithMaxLength = stringSchema.max(10)

// ❓ How would we enforce a length between 3 and 10?
const stringSchemaWithMinAndMaxLength = stringSchema.min(3).max(10)

// ❓ How would we validate an email address?
const emailSchema = z.string().email()

// ❓ How would we validate a UUID?
const uuidSchema = z.string().uuid()

// ❓ How would we validate that a string begins with a specific substring?
const stringSchemaStartsWith = z.string().startsWith('hello')

// 🔖 More built-in options can be found here: https://zod.dev/?id=strings

/////////////
// Numbers //
/////////////

// 🕵️ Zod provides a `number` method to create a schema for numbers
const numberSchema = z.number()

// ❓ How would we enforce that a number is an integer?
const numberIntSchema = z.number().int()

// ❓ How would we provide a default value?
const numberSchemaWithDefault = numberSchema.default(42)

// ❓ How would we enforce a positive number? (greater than 0)
const numberSchemaPositive = z.number().positive()

// ❓ How would we enforce a negative number? (less than 0)
const numberSchemaNegative = z.number().negative()

// ❓ How would we enforce a non-positive number? (less than or equal to 0)
const numberSchemaNonPositive = z.number().nonpositive()

// ❓ How would we enforce a non-negative number? (greater than or equal to 0)
const numberSchemaNonNegative = z.number().nonnegative()

// ❓ How would we enforce a number between 5 and 10? (inclusive)
const numberSchemaGte5Lte10 = z.number().gte(5).lte(10)

// ❓ How would we enforce a number that is a multiple of 3? (e.g. 3, 6, 9, 12, ...)
const numberSchemaMultipleOf3 = z.number().multipleOf(3)

///////////
// Dates //
///////////

// 🕵️ Zod provides a `date` method to create a schema for the Date class
const dateSchema = z.date()

// 🕵️ We can also parse strings in date formats, e.g. YYYY-MM-DD
const dateStringSchema = z.string().date()

// ❓ How would we enforce a minimum date?
const dateSchemaBefore = z.date().min(new Date('2021-01-01'))

// ❓ How would we enforce a maximum date?
const dateSchemaAfter = z.date().max(new Date('2021-12-31'))
// ❓ How would we enforce a date between two dates?

// 🕵️ Tip: you can use `pipe` to compose the last two schemas
const dateSchemaBetween = dateSchemaBefore.pipe(dateSchemaAfter)

///////////////////////////
// Custom Error Messages //
///////////////////////////

// 💡 We can use the `includes` method to validate a string that includes a specific substring.
// 💡 We can also provide a custom error message when the validation fails in the "options" parameter.

const stringIncludesAlign = z
  .string()
  .includes('align', { message: "You forgot to include 'align'!" })
