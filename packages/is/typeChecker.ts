import { getReferenceDataType } from '../.core'

export const isArray = (val: unknown): val is Array<unknown> => getReferenceDataType(val) === '[object Array]'
export const isObject = (val: unknown): val is Record<string, unknown> => getReferenceDataType(val) === '[object Object]'

export const isString = (val: unknown): val is string => typeof val === 'string'
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isBollean = (val: unknown): val is boolean => typeof val === 'boolean'
export const isFunction = (val: unknown): val is Function => typeof val === 'function'
export const isPromise = (val: Promise<unknown>): val is Promise<unknown> => !!val && (isObject(val) || isFunction(val)) && isFunction(val.then)