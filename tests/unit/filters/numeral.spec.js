import { formatNumber } from '@/filters/numeral'

describe('filters/numeral.js', () => {
  test('Returns 0 when no params passed', () => {
    expect(formatNumber()).toBe(0)
  })

  test('Returns 0 when `null` passed as param', () => {
    expect(formatNumber(null)).toBe(0)
  })

  test('Returns 0 when `undefined` passed as param', () => {
    expect(formatNumber(undefined)).toBe(0)
  })
})
