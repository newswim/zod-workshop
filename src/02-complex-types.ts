import { z } from 'zod'

// Not "complex" in the sense of being difficult to understand, but only
// in the sense of being made up of more than just a single value.

export const objectSchema = z.object({})
export const arraySchema = z.array(z.string())
export const tupleSchema = z.tuple([z.string(), z.number()])
export const recordSchema = z.record(z.number())
export const mapSchema = z.map(z.string(), z.number())
export const setSchema = z.set(z.string())

export const promiseSchema = z.promise(z.string())
