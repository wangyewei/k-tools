import { isSameArray } from "../array";
import { isObject, isArray } from "../type-is";
// Determine whether two objects are equal
export function isSameObject(
  raw: Record<string, unknown>,
  target: Record<string, unknown>): boolean {
  const raw_keys: Array<string> = Object.keys(raw)
  const tar_keys: Array<string> = Object.keys(target)

  if (raw_keys.length !== tar_keys.length) return false

  if (isSameArray(raw_keys, tar_keys)) {
    return raw_keys.every((key: string) => {
      if (isArray(raw[key]) && isArray(target[key])) {
        return isSameArray(
          raw[key] as Array<unknown>,
          target[key] as Array<unknown>
        )
      }

      if (isObject(raw[key]) && isObject(target[key])) {
        return isSameObject(
          raw[key] as Record<string, unknown>,
          target[key] as Record<string, unknown>
        )
      }

      return raw[key] === target[key]

    })
  } else {
    return false
  }


}