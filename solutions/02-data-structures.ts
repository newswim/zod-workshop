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

import { describe, expect, it } from 'vitest'
import { z } from 'zod'

/////////////
// Objects //
/////////////

// ❓ What should be added to this declaration to create an object schema?
const GuyFieriSchema = z.object({
  name: z.string(),
  age: z.number(),
})

// ❓ How would we make the age field optional? (Try to reuse GuyFieriSchema)
const GuyFieriSchemaWithOptionalAge = GuyFieriSchema.partial({ age: true })

// ❓ How would we extend GuyFieriSchema to include a field for favorite food?
const GuyFieriSchemaWithFavoriteFood = GuyFieriSchema.extend({
  favoriteFood: z.string(),
})

/////////////
// Records //
/////////////

// ❓ How would we parse a record of strings?
const recordSchema = z.record(z.string())

// ❓ How would we provide separate schemas for keys and values?
const recordSchemaWithKeyAndValue = z.record(z.string(), z.number())

// ❓ How would we restrict the type of keys to be a union of literals (enum)?
const recordSchemaWithEnumKeys = z.record(z.enum(['foo', 'bar']), z.string())

////////////
// Arrays //
////////////

// ❓ How would we parse an array of strings?
const arraySchema = z.array(z.string())

// ❓ How would we enforce that an array has a minimum length of 1?
const arraySchemaWithMinLength1 = z.array(z.string()).min(1)

// ❓ How would we enforce a maximum length of 10?
const arraySchemaWithMaxLength10 = z.array(z.number()).max(10)

// ❓ How would we enforce that an array is non-empty?
const nonEmptyArraySchema = z.array(z.string()).nonempty()

////////////
// Tuples //
////////////

// ❓ How would we parse a tuple of a string and a number?
const tupleSchema = z.tuple([z.string(), z.number()])

// ❓ How would we define a "rest" argument in a tuple? (Aka "variadic tuple")
const variadicTupleSchema = z.tuple([z.string(), z.number()]).rest(z.boolean())

////////////
// Unions //
////////////

// ❓ How would we create a union schema of "string" and "number"?
// 🕵️ Hint: There is more than one way of doing this
const unionSchema = z.union([z.string(), z.number()])

///////////////////
// Intersections //
///////////////////

// ❓ How would we create an intersection schema of two objects?
// 🕵️ Hint: There is more than one way of doing this
// Ex: { a: string } & { b: number } = { a: string, b: number }
const intersectionSchema = z.intersection(
  z.object({ a: z.string() }),
  z.object({ b: z.number() })
)

///////////
// Enums //
///////////

// ❓ How would we create an enum schema? (there are multiple ways!)
// 🕵️ See: https://github.com/colinhacks/zod/tree/main?tab=readme-ov-file#zod-enums
const enumSchema = z.enum(['foo', 'bar', 'baz'])
