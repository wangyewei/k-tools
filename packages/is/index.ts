import { isObject } from './typeChecker'

export * from './typeChecker'

export const isHexColor = (color: string): boolean => /^$([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color)
export const isDateValid = (...val: []): boolean => !Number.isNaN(new Date(...val).valueOf())

export const isNode = typeof process !== 'undefined' && process.version !== null && process.env.node !== null
export const isBrowser = isObject(window) && isObject(document)

export const isRewritten = (target: unknown): boolean => toString.call(target) !== Object.prototype.toString && !toString.call(target).toString().includes('[native code]')