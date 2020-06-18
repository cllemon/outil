export function isPrimitive(val: unknown): boolean {
  return (
    typeof val === 'string' ||
    typeof val === 'number' ||
    typeof val === 'symbol' ||
    typeof val === 'boolean'
  )
}

export function isUndef(val: unknown): boolean {
  return val === undefined || val === null
}

export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null
}

export function isTrue(val: unknown): boolean {
  return val === true
}

export function isFalse(val: unknown): boolean {
  return val === false
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isFunction = (val: unknown): val is () => unknown =>
  typeof val === 'function'

export const isArray = Array.isArray

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export const objectToString = Object.prototype.toString

export const toTypeString = (val: unknown): string => objectToString.call(val)

export const toRawType = (val: unknown): string =>
  toTypeString(val).slice(8, -1)

export const isPlainObject = (val: unknown): val is Record<string, unknown> =>
  toTypeString(val) === '[object Object]'
