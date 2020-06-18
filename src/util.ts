import { isArray, isPlainObject, objectToString } from './type'

const hasOwnProperty = Object.prototype.hasOwnProperty

export const hasOwn = (
  val: Record<string, unknown> | Window,
  key: string | symbol
): key is keyof typeof val => hasOwnProperty.call(val, key)

export const extend = <
  T extends Record<string, unknown>,
  U extends Record<string, unknown>
>(
  to: T,
  _from: U
): T & U => {
  for (const key in _from) {
    if (hasOwn(_from, key)) {
      ;(to as any)[key] = _from[key]
    }
  }
  return to as T & U
}

export function cacheStringFunction<T extends (str: string) => string>(
  fn: T
): T {
  const cache: Record<string, string> = Object.create(null)
  return ((str: string) => {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }) as any
}

const camelizeRE = /-(\w)/g
export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
})

export const capitalize = cacheStringFunction((str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

export const hasChanged = (value: unknown, oldValue: unknown): boolean =>
  value !== oldValue && (value === value || oldValue === oldValue)

export const invokeArrayFns = (
  fns: ((arg: unknown) => unknown)[],
  arg?: unknown
): void => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg)
  }
}

export const toDisplayString = (val: unknown): string => {
  return val == null
    ? ''
    : isArray(val) || (isPlainObject(val) && val.toString === objectToString)
    ? JSON.stringify(val, null, 2)
    : String(val)
}

export const def = (
  obj: Record<string, unknown> | Window,
  key: string | symbol,
  config: Record<string, unknown>
): void => {
  Object.defineProperty(obj, key, config)
}
