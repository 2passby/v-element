import { expect, test } from 'vitest'

test('test-common-matcher', () => {
  const name = 'viking'
  expect(name).toBe('viking')
  expect(2 + 2).toBe(4)
  expect(4).not.toBe(5)
})

test('test-true-or-false', () => {
  const name = true
  expect(name).toBeTruthy()
  expect(name).not.toBeFalsy()
})
test('test-number', () => {
  const num = 4
  expect(num).toBeLessThan(5)
  expect(num).toBeGreaterThan(3)
})
test('test-object', () => {
  const obj = {
    name: '123',
  }
  //这条不通过
  expect(obj).toBe({ name: '123' })
  expect(obj).toEqual({ name: '123' })
})
