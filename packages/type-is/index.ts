export const isArray = Array.isArray
export const isObject = (val: unknown): val is object => val !== null && typeof val === 'object'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isNumber = (val: unknown): val is number => typeof val === 'number'