import { isString, isNumber, isArray, isObject, isRewritten } from "../is"

export function createCls(): string {
  // Attribute comes from itself rather than the prototype
  const hasOwn = {}.hasOwnProperty

  const classnames: Array<string | number> = []

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i]
    if (!arg) continue

    if (isString(arg) || isNumber(arg)) {
      classnames.push(arg)
    } else if (isArray(arg)) {
      if (!arg.length) return
      const inner = createCls.apply(null, arg)
      if (inner) {
        classnames.push(inner)
      }
    } else if (isObject(arg)) {
      if (isRewritten(arg)) {
        classnames.push(arg.toString())
        continue
      }

      for (let key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classnames.push(key)
        }
      }
    }
  }



  return classnames.join(' ')
}