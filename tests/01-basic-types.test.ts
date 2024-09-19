import { expect, it, describe } from 'vitest'
import { z } from 'zod'

///////////////////////////////// Legend //////////////////////////////////
// ❓ = question / task
// 🕵️ = hint
// 💀 = extra / bonus / fun
//
//////////////
// Strings //
/////////////

// 🕵️ Zod provides a `string` method to create a schema for strings
const stringSchema = z.never()

// ❓ How would we provide a default value?
const stringSchemaWithDefault = z.never()

// ❓ How would we make the string optional?
const stringSchemaWithOptional = z.never()

// ❓ How would we make the string nullable?
const stringSchemaWithNullable = z.never()

// ❓ How would we make the string nullable *and* optional?
const stringSchemaWithNullish = z.never()

// ❓ How would we enforce a minimum length of 3?
const stringSchemaWithMinLength = z.never()

// ❓ How would we enforce a maximum length of 10?
const stringSchemaWithMaxLength = z.never()

// ❓ How would we enforce a length between 3 and 10?
const stringSchemaWithMinAndMaxLength = z.never()

// ❓ How would we validate an email address?
const emailSchema = z.never()

// ❓ How would we validate a UUID?
const uuidSchema = z.never()

// ❓ How would we validate that a string begins with a specific substring?
const stringSchemaStartsWith = z.never()

// 🔖 More built-in options can be found here: https://zod.dev/?id=strings

/////////////
// Numbers //
/////////////

// 🕵️ Zod provides a `number` method to create a schema for numbers
const numberSchema = z.never()

// ❓ How would we enforce that a number is an integer?
const numberIntSchema = z.never()

// ❓ How would we provide a default value?
const numberSchemaWithDefault = z.never()

// ❓ How would we enforce a positive number? (greater than 0)
const numberSchemaPositive = z.never()

// ❓ How would we enforce a negative number? (less than 0)
const numberSchemaNegative = z.never()

// ❓ How would we enforce a non-positive number? (less than or equal to 0)
const numberSchemaNonPositive = z.never()

// ❓ How would we enforce a non-negative number? (greater than or equal to 0)
const numberSchemaNonNegative = z.never()

// ❓ How would we enforce a number between 5 and 10? (inclusive)
const numberSchemaGte5Lte10 = z.never()

// ❓ How would we enforce a number that is a multiple of 3? (e.g. 3, 6, 9, 12, ...)
const numberSchemaMultipleOf3 = z.never()

///////////
// Dates //
///////////

// 🕵️ Zod provides a `date` method to create a schema for the Date class
const dateSchema = z.never()

// 🕵️ We can also parse strings in date formats, e.g. YYYY-MM-DD
const dateStringSchema = z.never()

// ❓ How would we enforce a minimum date?
const dateSchemaBefore = z.never()

// ❓ How would we enforce a maximum date?
const dateSchemaAfter = z.never()
// ❓ How would we enforce a date between two dates?

// 🕵️ Tip: you can use `pipe` to compose the last two schemas
const dateSchemaBetween = dateSchemaBefore.pipe(z.never())

///////////////////////////
// Custom Error Messages //
///////////////////////////

// 💡 We can use the `includes` method to validate a string that includes a specific substring.
// 💡 We can also provide a custom error message when the validation fails in the "options" parameter.

const stringIncludesAlign = z.never()

///////////////////////////////////////////////////////////
//////// ! Do not edit the code below this line 🙏 ////////
///////////////////////////////////////////////////////////

describe('01 - Basic types - string', () => {
  describe.skip('strings', () => {
    it('should not throw when parsing a string', () => {
      expect(() => {
        stringSchema.parse('hello')
      }).not.to.throw()
    })

    it('should throw a runtime error when called with a number', () => {
      expect(() => {
        stringSchema.parse(42)
      }).toThrow('Expected string, received number')
    })

    it('can be provided a default value', () => {
      expect(stringSchemaWithDefault.parse(undefined)).toBe('hello')
    })

    it('can be made optional', () => {
      expect(stringSchemaWithOptional.parse(undefined)).toBe(undefined)
    })

    it('can be made nullable', () => {
      expect(stringSchemaWithNullable.parse(null)).toBe(null)
    })

    it('can be made nullish', () => {
      expect(stringSchemaWithNullish.parse(null)).toBe(null)
      expect(stringSchemaWithNullish.parse(undefined)).toBe(undefined)
    })

    it('can enforce minimum length', () => {
      expect(() => {
        stringSchemaWithMinLength.parse('hi')
      }).toThrow('String must contain at least 3 character(s)')
    })

    it('can enforce maximum length', () => {
      expect(() => {
        stringSchemaWithMaxLength.parse('supercalifragilisticexpialidocious')
      }).toThrow('String must contain at most 10 character(s)')
    })

    it('can validate a string with a length between 3 and 10', () => {
      expect(stringSchemaWithMinAndMaxLength.parse('hello')).toBe('hello')
      expect(stringSchemaWithMinAndMaxLength.parse('hello')).toBe('hello')
    })

    it('can validate an email address', () => {
      expect(emailSchema.parse('help@atlassian.com')).toBe('help@atlassian.com')
    })

    it('should throw a runtime error when called with an invalid email address', () => {
      expect(() => {
        emailSchema.parse('help@atlassian')
      }).toThrow('Invalid email')
    })

    it('can validate a UUID', () => {
      expect(uuidSchema.parse('3e574cc7-d468-4ee2-9b8d-66b637ed48ad')).toBe(
        '3e574cc7-d468-4ee2-9b8d-66b637ed48ad'
      )
    })

    it('should throw a runtime error when called with an invalid UUID', () => {
      expect(() => {
        uuidSchema.parse('550e8400-e29b-41d4-a716-44665544000')
      }).toThrow('Invalid uuid')
    })

    it('can validate a string that starts with "hello"', () => {
      expect(stringSchemaStartsWith.parse('hello world')).toBe('hello world')
    })
  })

  describe.skip('numbers', () => {
    it('should not throw when parsing a number', () => {
      expect(() => {
        numberSchema.parse(42)
      }).not.to.throw()
    })

    it('should throw a runtime error when called with a string', () => {
      expect(() => {
        numberSchema.parse('42')
      }).toThrow('Expected number, received string')
    })

    it('can enforce an integer', () => {
      expect(() => {
        numberIntSchema.parse(42.5)
      }).toThrow('Expected integer, received float')
    })

    it('can be provided a default value', () => {
      expect(numberSchemaWithDefault.parse(undefined)).toBe(42)
    })

    it('can enforce a positive number', () => {
      expect(() => {
        numberSchemaPositive.parse(-42)
      }).toThrow('Number must be greater than 0')
    })

    it('can enforce a negative number', () => {
      expect(() => {
        numberSchemaNegative.parse(42)
      }).toThrow('Number must be less than 0')
    })

    it('can enforce a non-positive number', () => {
      expect(() => {
        numberSchemaNonPositive.parse(42)
      }).toThrow('Number must be less than or equal to 0')
    })

    it('can enforce a non-negative number', () => {
      expect(() => {
        numberSchemaNonNegative.parse(-42)
      }).toThrow('Number must be greater than or equal to 0')
    })

    it('can enforce a number between 5 and 10', () => {
      expect(() => {
        numberSchemaGte5Lte10.parse(4)
      }).toThrow('Number must be greater than or equal to 5')
      expect(() => {
        numberSchemaGte5Lte10.parse(11)
      }).toThrow('Number must be less than or equal to 10')
    })

    it('can enforce a number that is a multiple of 3', () => {
      expect(() => {
        numberSchemaMultipleOf3.parse(5)
      }).toThrow('Number must be a multiple of 3')
    })
  })

  describe.skip('dates', () => {
    it('should not throw when parsing YYYY-MM-DD date format', () => {
      expect(dateSchema.parse(new Date())).toBeInstanceOf(Date)
    })

    it('should throw a runtime error when called with a string', () => {
      expect(() => {
        dateSchema.parse('2021-10-10')
      }).toThrow('Expected date, received string')
    })

    it('should not throw when parsing a valid date string', () => {
      expect(dateStringSchema.parse('2021-01-01')).toBeTypeOf('string')
    })

    it('should throw a runtime error when called with an invalid date string', () => {
      expect(() => {
        dateStringSchema.parse('01-01-2021')
      }).toThrow('Invalid date')
    })

    it('can enforce a minimum date', () => {
      expect(() => {
        dateSchemaBefore.parse(new Date('2020-01-01'))
      }).toThrow(
        'Date must be greater than or equal to Thu Dec 31 2020 18:00:00 GMT-0600 (Central Standard Time)'
      )
    })

    it('can enforce a maximum date', () => {
      expect(() => {
        dateSchemaAfter.parse(new Date('2022-01-01'))
      }).toThrow(
        'Date must be smaller than or equal to Thu Dec 30 2021 18:00:00 GMT-0600 (Central Standard Time)'
      )
    })

    it('can enforce a date between two dates', () => {
      expect(() => {
        dateSchemaBetween.parse(new Date('2020-01-01'))
      }).toThrow(
        'Date must be greater than or equal to Thu Dec 31 2020 18:00:00 GMT-0600 (Central Standard Time)'
      )

      expect(() => {
        dateSchemaBetween.parse(new Date('2022-01-01'))
      }).toThrow(
        'Date must be smaller than or equal to Thu Dec 30 2021 18:00:00 GMT-0600 (Central Standard Time)'
      )

      expect(dateSchemaBetween.parse(new Date('2021-10-10'))).toBeInstanceOf(
        Date
      )
    })
  })

  describe.skip('custom error messages', () => {
    it('can validate a string that includes the word "align"', () => {
      expect(stringIncludesAlign.parse('i love align')).toBe('i love align')
    })

    it('should throw a runtime error when called with a string that does not include "align"', () => {
      expect(() => {
        stringIncludesAlign.parse('i love confluence')
      }).toThrow("You forgot to include 'align'!")
    })
  })
})
