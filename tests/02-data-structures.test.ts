import { describe, expect, it } from 'vitest'
import { z } from 'zod'

/////////////
// Objects //
/////////////

// ❓ What should be added to this declaration to create an object schema?
const GuyFieriSchema = z.never()

// ❓ How would we make the age field optional?
// 🕵️ Hint: try reusing "GuyFieriSchema"
const GuyFieriSchemaWithOptionalAge = z.never()

// ❓ How would we extend GuyFieriSchema to include a field for favorite food?
const GuyFieriSchemaWithFavoriteFood = z.never()

/////////////
// Records //
/////////////

// ❓ How would we parse a record of strings?
const recordSchema = z.never()

// ❓ How would we provide separate schemas for keys and values?
const recordSchemaWithKeyAndValue = z.never()

// ❓ How would we restrict the type of keys to be a union of literals (enum)?
const recordSchemaWithEnumKeys = z.never()

////////////
// Arrays //
////////////

// ❓ How would we parse an array of strings?
// 🕵️ Hint: There are multiple ways of doing this, including a convenience method.
const arraySchema = z.never()

// ❓ How would we enforce that an array has a minimum length of 1?
const arraySchemaWithMinLength1 = z.never()

// ❓ How would we enforce a maximum length of 10?
const arraySchemaWithMaxLength10 = z.never()

// ❓ How would we enforce that an array is non-empty?
const nonEmptyArraySchema = z.never()

////////////
// Tuples //
////////////

// ❓ How would we parse a tuple of a string and a number?
const tupleSchema = z.never()

// ❓ How would we define a "rest" argument in a tuple? (AKA "variadic tuple")
const variadicTupleSchema = z.never()

////////////
// Unions //
////////////

// ❓ How would we create a union schema of "string" and "number"?
// 🕵️ Hint: There is more than one way of doing this
const unionSchema = z.never()

///////////////////
// Intersections //
///////////////////

// ❓ How would we create an intersection schema of two objects?
// 🕵️ Hint: There is more than one way of doing this
// Ex: { a: string } & { b: number } = { a: string, b: number }
const intersectionSchema = z.never()

///////////
// Enums //
///////////

// ❓ How would we create an enum schema? (there are multiple ways!)
// 🕵️ See: https://github.com/colinhacks/zod/tree/main?tab=readme-ov-file#zod-enums
const enumSchema = z.never()

///////////////////////////////////////////////////////////
//////// ! Do not edit the code below this line 🙏 ////////
///////////////////////////////////////////////////////////

describe('02 - Data Structures', () => {
  describe.skip('objects', () => {
    it('should not throw when parsing a valid object', () => {
      expect(() => {
        GuyFieriSchema.parse({
          name: 'Guy Fieri',
          age: 56,
        })
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid object', () => {
      expect(() => {
        GuyFieriSchema.parse({
          name: 'Guy Fieri',
          age: '56',
        })
      }).toThrow('Expected number, received string')
    })

    it('should throw a runtime error when called with an object missing a required field', () => {
      expect(() => {
        GuyFieriSchema.parse({
          name: 'Guy Fieri',
        })
      }).toThrow('Required')
    })

    it('should not throw when called with an object missing an optional field', () => {
      expect(() => {
        GuyFieriSchema.parse({
          name: 'Guy Fieri',
          age: 56,
        })
      }).not.toThrow()
    })

    it('should not throw when called with an object missing an optional field', () => {
      expect(() => {
        GuyFieriSchemaWithOptionalAge.parse({
          name: 'Guy Fieri',
        })
      }).not.toThrow()
    })

    it('should not throw when we include favorite food', () => {
      expect(() => {
        GuyFieriSchemaWithFavoriteFood.parse({
          name: 'Guy Fieri',
          age: 56,
          favoriteFood: 'donkey sauce',
        })
      }).not.toThrow()
    })
  })

  describe.skip('records', () => {
    it('should not throw when parsing a valid record of strings', () => {
      expect(() => {
        recordSchema.parse({ foo: 'bar', baz: 'qux' })
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid record of strings', () => {
      expect(() => {
        recordSchema.parse({ foo: 'bar', baz: 42 })
      }).toThrow('Expected string, received number')
    })

    it('should not throw when parsing a valid record with separate key and value schemas', () => {
      expect(() => {
        recordSchemaWithKeyAndValue.parse({ foo: 42, bar: 56 })
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid record with separate key and value schemas', () => {
      expect(() => {
        recordSchemaWithKeyAndValue.parse({ foo: 'bar', baz: 'qux' })
      }).toThrow('Expected number, received string')
    })

    it('should throw a runtime error when called with an invalid record with enum keys', () => {
      expect(() => {
        recordSchemaWithEnumKeys.parse({ foo: 'bar', baz: 'qux' })
      }).toThrow('Invalid enum value')
    })
  })

  describe.skip('arrays', () => {
    it('should not throw when parsing a valid array', () => {
      expect(() => {
        arraySchema.parse(['foo', 'bar'])
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid array', () => {
      expect(() => {
        arraySchema.parse(['foo', 42])
      }).toThrow('Expected string, received number')
    })

    it('should throw a runtime error when called with an empty array', () => {
      expect(() => {
        arraySchemaWithMinLength1.parse([])
      }).toThrow('Array must contain at least 1 element(s)')
    })

    it('should throw a runtime error when called with an array that is too long', () => {
      expect(() => {
        arraySchemaWithMaxLength10.parse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      }).toThrow('Array must contain at most 10 element(s)')
    })

    it('should throw a runtime error when called with an empty array', () => {
      expect(() => {
        nonEmptyArraySchema.parse([])
      }).toThrow('Array must contain at least 1 element(s)')
    })
  })

  describe.skip('tuples', () => {
    it('should not throw when parsing a valid tuple', () => {
      expect(() => {
        tupleSchema.parse(['foo', 42])
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid tuple', () => {
      expect(() => {
        tupleSchema.parse([42, 'foo'])
      }).toThrow('Expected string, received number')
    })

    it('should not throw when parsing a valid variadic tuple', () => {
      expect(() => {
        variadicTupleSchema.parse(['foo', 42, true, false])
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid variadic tuple', () => {
      expect(() => {
        variadicTupleSchema.parse(['foo', 42, true, false, 'hello'])
      }).toThrow('Expected boolean, received string')
    })
  })

  describe.skip('unions', () => {
    it('should not throw when parsing a valid union value', () => {
      expect(() => {
        unionSchema.parse('foo')
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid union value', () => {
      expect(() => {
        unionSchema.parse(true)
      }).toThrow('Invalid input')
    })
  })

  describe.skip('intersections', () => {
    it('should not throw when parsing a valid intersection value', () => {
      expect(() => {
        intersectionSchema.parse({ a: 'hello', b: 42 })
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid intersection value', () => {
      expect(() => {
        intersectionSchema.parse({ a: 'hello', b: 'world' })
      }).toThrow('Expected number, received string')
    })
  })

  describe.skip('enums', () => {
    it('should not throw when parsing a valid enum value', () => {
      expect(() => {
        enumSchema.parse('foo')
      }).not.toThrow()
    })

    it('should throw a runtime error when called with an invalid enum value', () => {
      expect(() => {
        enumSchema.parse('hello')
      }).toThrow('Invalid enum value')
    })
  })
})
