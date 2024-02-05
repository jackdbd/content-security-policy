import assert from 'node:assert'
import { describe, it } from 'node:test'
import {
  cspSourceValuesScriptAttr,
  cspSourceValuesScriptElem,
  cspSourceValuesStyleAttr,
  cspSourceValuesStyleElem
} from '../lib/source-values.js'
import {
  hashesScriptSrcAttr,
  hashesStyleSrcAttr,
  hashesStyleSrcElem
} from '../lib/hash.js'
import { DIRECTIVES, PATTERNS } from './constants.mjs'

describe('cspSourceValuesScriptAttr', () => {
  it('returns an array of N elements, where N is the length of the values allowed for the specified CSP directive', async () => {
    const directive = 'script-src-attr'

    const arr = await cspSourceValuesScriptAttr({
      directive,
      directives: DIRECTIVES,
      patterns: PATTERNS
    })

    assert.equal(arr.length, DIRECTIVES[directive].length)
  })

  it('computes the hash using the specified algorithm', async () => {
    const directive = 'script-src-attr'

    const arr = await cspSourceValuesScriptAttr({
      directive,
      directives: DIRECTIVES,
      patterns: PATTERNS
    })

    const hash_algorithm = DIRECTIVES[directive][2]
    assert.match(arr[2], new RegExp(hash_algorithm))

    const hashes_256 = await hashesScriptSrcAttr({
      algorithm: hash_algorithm,
      patterns: PATTERNS
    })

    assert.equal(arr[2], hashes_256[0])
  })
})

describe('cspSourceValuesScriptElem', () => {
  it('returns an array of N elements, where N is the length of the values allowed for the specified CSP directive', async () => {
    const directive = 'script-src-elem'

    const arr = await cspSourceValuesScriptElem({
      directive,
      directives: DIRECTIVES,
      patterns: PATTERNS
    })

    assert.equal(arr.length, DIRECTIVES[directive].length)
  })
})

describe('cspSourceValuesStyleAttr', () => {
  it('returns an array of N elements, where N is the length of the values allowed for the specified CSP directive', async () => {
    const directive = 'style-src-attr'

    const arr = await cspSourceValuesStyleAttr({
      directive,
      directives: DIRECTIVES,
      patterns: PATTERNS
    })

    assert.equal(arr.length, DIRECTIVES[directive].length)
  })

  it('computes the hash using the specified algorithm', async () => {
    const directive = 'style-src-attr'

    const arr = await cspSourceValuesStyleAttr({
      directive,
      directives: DIRECTIVES,
      patterns: PATTERNS
    })

    const hash_algorithm = DIRECTIVES[directive][2]
    assert.match(arr[2], new RegExp(hash_algorithm))

    const hashes_256 = await hashesStyleSrcAttr({
      algorithm: hash_algorithm,
      patterns: PATTERNS
    })

    assert.equal(arr[2], hashes_256[0])
  })
})

describe('cspSourceValuesStyleElem', () => {
  it('returns an array of N elements, where N is the length of the values allowed for the specified CSP directive', async () => {
    const directive = 'style-src-elem'

    const arr = await cspSourceValuesStyleElem({
      directive,
      directives: DIRECTIVES,
      patterns: PATTERNS
    })

    assert.equal(arr.length, DIRECTIVES[directive].length)
  })

  it('computes the hash using the specified algorithm', async () => {
    const directive = 'style-src-elem'

    const arr = await cspSourceValuesStyleElem({
      directive,
      directives: DIRECTIVES,
      patterns: PATTERNS
    })

    assert.equal(arr[0], DIRECTIVES[directive][0])
    const hash_algorithm = DIRECTIVES[directive][1]
    assert.match(arr[1], new RegExp(hash_algorithm))

    const hashes_256 = await hashesStyleSrcElem({
      algorithm: hash_algorithm,
      patterns: PATTERNS
    })

    assert.equal(arr[1], hashes_256[0])
  })
})
