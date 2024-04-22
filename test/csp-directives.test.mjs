import assert from 'node:assert'
import { describe, it } from 'node:test'
import { DIRECTIVES, DEPRECATED_DIRECTIVES,EXPERIMENTAL_DIRECTIVES, PATTERNS } from './constants.mjs'
import { cspDirectives } from '../lib/csp-directives.js'

describe('cspDirectives', () => {
  it('is an array', async () => {
    const directives = DIRECTIVES
    const patterns = PATTERNS
    const arr = await cspDirectives({ directives, patterns })

    assert.notEqual(arr, undefined)
    assert.equal(arr.length, Object.keys(directives).length)
  })

  it('allows to specify deprecated directives', async () => {
    const directives = DEPRECATED_DIRECTIVES
    const patterns = PATTERNS
    const arr = await cspDirectives({ directives, patterns })

    assert.notEqual(arr, undefined)
    assert.equal(arr.length, Object.keys(directives).length)
  })

  it('allows to specify experimental directives', async () => {
    const directives = EXPERIMENTAL_DIRECTIVES
     const patterns = PATTERNS
     const arr = await cspDirectives({ directives, patterns })

     assert.notEqual(arr, undefined)
     assert.equal(arr.length, Object.keys(directives).length)
  })
})
