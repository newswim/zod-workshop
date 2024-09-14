import { assert, expect, test } from 'vitest'
import { PersonSchema } from '../src/01-basic-types.js'

test('Basic types', () => {
  expect(() => {
    PersonSchema.parse({
      name: 'John',
      age: '30',
    })
  }).toThrow()
})
