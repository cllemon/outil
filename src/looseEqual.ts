import { isObject, isArray } from './type'

export function looseEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = isArray(a)
      const isArrayB = isArray(b)
      if (isArrayA && isArrayB) {
        return (
          (a as Array<unknown>).length === (b as Array<unknown>).length &&
          (a as Array<unknown>).every((e: any, i: number) =>
            looseEqual(e, (b as Array<unknown>)[i])
          )
        )
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a as Record<string, unknown>)
        const keysB = Object.keys(b as Record<string, unknown>)
        return (
          keysA.length === keysB.length &&
          keysA.every((key: string) =>
            looseEqual(
              (a as Record<string, unknown>)[key],
              (b as Record<string, unknown>)[key]
            )
          )
        )
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
