import assert from 'node:assert'
import { describe, it } from 'node:test'
import { DIRECTIVES, PATTERNS } from './constants.mjs'
import { cspHeader, cspObj } from '../lib/outputs.js'
import { isObject, isString } from '../lib/utils.js'

describe('outputs', () => {
  describe('cspHeader', () => {
    it('is a string', async () => {
      const header = await cspHeader({
        directives: DIRECTIVES,
        patterns: PATTERNS
      })
  
      assert.notEqual(header, undefined)
      assert.equal(isString(header), true)
    })
  })
  
  describe('cspObj', () => {
    it('is a JS object', async () => {
      const obj = await cspObj({
        directives: DIRECTIVES,
        patterns: PATTERNS
      })
  
      assert.notEqual(obj, undefined)
      assert.equal(isObject(obj), true)
    })
  })
})

