import { expect, test, describe } from 'vitest'
import { stringSchema } from '../src/01-primitive-types.js'

describe('Basic types', () => {
  test('stringSchema', () => {
    expect(() => {
      stringSchema.parse('hello')
    }).not.to.throw()

    expect(() => {
      stringSchema.parse(42)
    }).to.throw()
  })
})
