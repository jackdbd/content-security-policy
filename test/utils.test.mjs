import assert from 'node:assert'
import { describe, it } from 'node:test'
import { isObject, isString } from '../lib/utils.js'

describe('utils', () => {
  describe('isObject', () => {
    it('is true for `{}`', () => {
      assert.equal(isObject({}), true)
    })

    it('is false for `123`', () => {
      assert.equal(isObject(123), false)
    })
  })

  describe('isString', () => {
    it('is true for `"hello"`', () => {
      assert.equal(isString('hello'), true)
    })

    it('is false for `123`', () => {
      assert.equal(isString(123), false)
    })
  })
})
