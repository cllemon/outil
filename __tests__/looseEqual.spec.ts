import { looseEqual } from '../src/'

describe('Loose equality judgment', () => {
  test('Primitive type value', () => {
    expect(looseEqual(0, 0)).toBe(true)
    expect(looseEqual(0, 1)).toBe(false)
    expect(looseEqual('0', '0')).toBe(true)
    expect(looseEqual('0', '1')).toBe(false)
    expect(looseEqual(true, true)).toBe(true)
    expect(looseEqual(true, false)).toBe(false)
    expect(looseEqual(null, undefined)).toBe(false)
    expect(looseEqual(undefined, undefined)).toBe(true)
    expect(looseEqual(null, null)).toBe(true)
  })

  test('Reference type value', () => {
    expect(looseEqual({}, {})).toBe(true)
    expect(looseEqual({ a: 1 }, {})).toBe(false)
    expect(looseEqual([], [])).toBe(true)
    expect(looseEqual([0], [])).toBe(false)
  })
})
