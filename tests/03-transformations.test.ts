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

///////////////////////////////////////////////////////////
//////// ! Do not edit the code below this line 🙏 ////////
///////////////////////////////////////////////////////////

describe.skip('03 - Transformations', () => {
  describe('stringToNumberSchema', () => {
    it('should parse a valid number string', () => {
      expect(stringToNumberSchema.parse('42')).toBe(42)
    })

    it('should throw a runtime error when called with an invalid number string', () => {
      expect(() => stringToNumberSchema.parse('hello')).toThrow(
        'Expected number, received nan'
      )
    })
  })

  describe('stringToThreeDigitNumberSchema', () => {
    it('should parse a valid three-digit number string', () => {
      expect(stringToThreeDigitNumberSchema.parse('123')).toBe(123)
    })

    it('should throw a runtime error when called with an invalid three-digit number string', () => {
      expect(() => stringToThreeDigitNumberSchema.parse('1234')).toThrow(
        'String must contain exactly 3 character(s)'
      )
    })
  })

  describe('PasswordSchema', () => {
    it('should not throw when parsing a valid password', () => {
      expect(() =>
        PasswordSchema.parse({
          password: 'password',
          confirmPassword: 'password',
        })
      ).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid password', () => {
      expect(() =>
        PasswordSchema.parse({
          password: 'password',
          confirmPassword: 'password123',
        })
      ).toThrow('Passwords must match')
    })
  })

  describe('JsonSchema', () => {
    const fooSchema = z.object({ foo: z.string() })
    it('should parse a valid JSON string', () => {
      expect(JsonSchema(fooSchema).parse('{"foo": "bar"}')).toEqual({
        foo: 'bar',
      })
    })

    it('should throw a runtime error when called with an invalid JSON string', () => {
      expect(() => JsonSchema(fooSchema).parse('{foo: "bar"}')).toThrow(
        'Invalid JSON'
      )
    })
  })
})
