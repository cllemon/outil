import {
  isPrimitive,
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isString,
  isFunction,
  isArray,
  isObject,
  isPromise,
  toTypeString,
  toRawType,
  isPlainObject,
} from '../src'

describe('Type judgment related utility functions', () => {
  test('isPrimitive', () => {
    expect(isPrimitive(1)).toBe(true)
    expect(isPrimitive('1')).toBe(true)
    expect(isPrimitive(false)).toBe(true)
    expect(isPrimitive(Symbol(''))).toBe(true)
    expect(isPrimitive([])).toBe(false)
    expect(isPrimitive({})).toBe(false)
  })

  test('isUndef', () => {
    expect(isUndef(undefined)).toBe(true)
    expect(isUndef(null)).toBe(true)
    expect(isUndef(true)).toBe(false)
  })

  test('isDef', () => {
    expect(isDef({})).toBe(true)
    expect(isDef([])).toBe(true)
    expect(isDef(undefined)).toBe(false)
    expect(isDef(null)).toBe(false)
  })

  test('isTrue', () => {
    expect(isTrue(false)).toBe(false)
    expect(isTrue(true)).toBe(true)
  })

  test('isFalse', () => {
    expect(isFalse(true)).toBe(false)
    expect(isFalse(false)).toBe(true)
  })

  test('isString', () => {
    expect(isString('')).toBe(true)
    expect(isString(false)).toBe(false)
  })

  test('isFunction', () => {
    expect(isFunction(() => [])).toBe(true)
    expect(isFunction(true)).toBe(false)
  })

  test('isArray', () => {
    expect(isArray({})).toBe(false)
    expect(isArray([])).toBe(true)
  })

  test('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(null)).toBe(false)
    expect(isObject(0)).toBe(false)
  })

  test('isPromise', () => {
    expect(isPromise({})).toBe(false)
    expect(
      isPromise({
        then: () => [],
      })
    ).toBe(false)
    expect(isPromise(Promise.resolve())).toBe(true)
  })

  test('toTypeString', () => {
    expect(toTypeString(Symbol())).toBe('[object Symbol]')
    expect(toTypeString(1)).toBe('[object Number]')
    expect(toTypeString('')).toBe('[object String]')
    expect(toTypeString(true)).toBe('[object Boolean]')
    expect(toTypeString([])).toBe('[object Array]')
    expect(toTypeString({})).toBe('[object Object]')
  })

  test('toRawType', () => {
    expect(toRawType(Symbol())).toBe('Symbol')
    expect(toRawType(1)).toBe('Number')
    expect(toRawType('')).toBe('String')
    expect(toRawType(true)).toBe('Boolean')
    expect(toRawType([])).toBe('Array')
    expect(toRawType({})).toBe('Object')
  })

  test('isPlainObject', () => {
    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject({})).toBe(true)
  })
})
