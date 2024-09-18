import { z } from 'zod'

export const stringSchema = z.string()
export const numberSchema = z.number()
export const booleanSchema = z.boolean()
export const dateSchema = z.date()
export const bigintSchema = z.bigint()
export const symbolSchema = z.symbol()
export const functionSchema = z.function()

export const unknownSchema = z.unknown()
export const nullSchema = z.null()
export const undefinedSchema = z.undefined()
export const voidSchema = z.void()
export const anySchema = z.any()
export const neverSchema = z.never()

export const optionalSchema = z.string().optional()
export const nullableSchema = z.string().nullable()
export const nullableOptionalSchema = z.string().nullable().optional()
export const nullishSchema = z.string().nullish()
