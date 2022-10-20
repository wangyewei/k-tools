// Determine whether two arrays are equal
import { isArray, isObject } from "@/is"
import { isSameObject } from "@/object"

export function isSameArray(raw: Array<unknown>, target: Array<unknown>): boolean {
  if (raw.length !== target.length) return false

  return raw.every((v: unknown, i: number) => {
    if (isArray(v) && isArray(target[i])) {
      return isSameArray(v, target[i] as Array<unknown>)
    }

    if (isObject(v) && isObject(target[i])) {
      return isSameObject(
        v as Record<string, unknown>,
        target[i] as Record<string, unknown>
      )
    }

    return v === target[i]
  })
}