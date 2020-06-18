import {
  hasOwn,
  extend,
  camelize,
  capitalize,
  hasChanged,
  invokeArrayFns,
  toDisplayString,
} from '../src/'

describe('Utility function', () => {
  test('hasOwn', () => {
    const obj = {
      key: 'key',
    }
    expect(hasOwn(obj, 'key')).toBe(true)
    expect(hasOwn(obj, 'toString')).toBe(false)
  })

  test('extend', () => {
    const to = { a: 'a' }
    const _from = { b: 'b' }
    const res = extend(to, _from)
    expect(res.b).toBe('b')
  })

  test('camelize', () => {
    expect(camelize('smart-component')).toBe('smartComponent')
  })

  test('capitalize', () => {
    expect(capitalize('smartComponent')).toBe('SmartComponent')
  })

  test('hasChanged', () => {
    expect(hasChanged(0, 0)).toBe(false)
    expect(hasChanged(NaN, NaN)).toBe(false)
    expect(hasChanged({}, {})).toBe(true)
  })

  test('invokeArrayFns', () => {
    const res: unknown[] = []
    const fns = [
      (val: unknown) => res.push(val),
      (val: unknown) => res.push(val),
      (val: unknown) => res.push(val),
    ]
    invokeArrayFns(fns, 0)
    expect(JSON.stringify(res)).toBe('[0,0,0]')
  })

  test('toDisplayString', () => {
    expect(toDisplayString([])).toBe('[]')
    expect(toDisplayString({})).toBe('{}')
    expect(toDisplayString(null)).toBe('')
    expect(toDisplayString(undefined)).toBe('')
    expect(toDisplayString('')).toBe('')
    expect(toDisplayString(0)).toBe('0')
    expect(toDisplayString(false)).toBe('false')
    expect(toDisplayString(Symbol())).toBe('Symbol()')
    expect(toDisplayString(Symbol)).toBe('function Symbol() { [native code] }')
  })
})
