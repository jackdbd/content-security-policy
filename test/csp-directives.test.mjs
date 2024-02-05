import assert from 'node:assert'
import { describe, it } from 'node:test'
import { DIRECTIVES, PATTERNS } from './constants.mjs'
import { cspDirectives, cspHeader, cspJSON } from '../lib/csp-directives.js'
import { isObject, isString } from '../lib/utils.js'

describe('cspDirectives', () => {
  it('is an array', async () => {
    const directives = DIRECTIVES
    const patterns = PATTERNS
    const arr = await cspDirectives({ directives, patterns })

    assert.notEqual(arr, undefined)
    assert.equal(arr.length, Object.keys(directives).length)
  })
})

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

describe('cspJSON', () => {
  it('is a JS object', async () => {
    const json = await cspJSON({
      directives: DIRECTIVES,
      patterns: PATTERNS
    })

    assert.notEqual(json, undefined)
    assert.equal(isObject(json), true)
  })
})
