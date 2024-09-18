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

// Easy: Validate a string and convert it to a number.
// There are several ways of doing this in Zod, but the simplest is to use the `.coerce` function.
const stringToNumberSchema = z.coerce.number()

// Easy-Medium: Create a schema to that validates and coerces a string.
// Valid input: "123" -> 123
// Invalid input: "1234" -> Error: "String must contain exactly 3 character(s)"
//
// 🕵️ Hint: There are several ways of doing this, try using the `.pipe` function.
const stringToThreeDigitNumberSchema = z
  .string()
  .length(3)
  .pipe(z.coerce.number())

// Medium: Create a PasswordSchema that ensures the "password" and "confirmPassword" fields match.
const PasswordSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters long'),
  })
  // 🕵️ check out the `.refine` function
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'], // Specify which field the error should be associated with
  })

// Hard: implement `JsonSchema`, a function which takes a JSON string and returns the
// parsed JSON output. If the JSON string is invalid, it should throw a runtime error
// with a message saying, "Invalid JSON".
//
// 🕵️ Hint: This function may need use a generic type argument.
// 🕵️ Hint: Check out the `.transform` function!
const JsonSchema = <T>(schema: z.ZodSchema<T>) =>
  z.string().transform((str, ctx) => {
    try {
      const jsonData = JSON.parse(str)
      return schema.parse(jsonData)
    } catch (error) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid JSON',
      })
    }
  })
