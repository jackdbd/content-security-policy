import assert from 'node:assert'
import { describe, it } from 'node:test'
import { hashesStyleSrcElem } from '../lib/hash.js'
import { PATTERNS } from './constants.mjs'

describe('hashesStyleSrcElem', () => {
  it('produces the expected hashes', async () => {
    const hashes_256 = await hashesStyleSrcElem({
      algorithm: 'sha256',
      patterns: PATTERNS
    })

    const hashes_384 = await hashesStyleSrcElem({
      algorithm: 'sha384',
      patterns: PATTERNS
    })

    const hashes_512 = await hashesStyleSrcElem({
      algorithm: 'sha512',
      patterns: PATTERNS
    })

    assert.equal(hashes_256.length, 1)
    assert.equal(hashes_384.length, 1)
    assert.equal(hashes_512.length, 1)

    hashes_256.forEach((hash_256, i) => {
      const hash_384 = hashes_384[i]
      const hash_512 = hashes_512[i]

      assert.notEqual(hash_384, hash_256)
      assert.notEqual(hash_512, hash_256)
      assert.notEqual(hash_512, hash_384)

      assert.equal(hash_256.length, 51)
      assert.equal(hash_384.length, 71)
      assert.equal(hash_512.length, 95)
    })
  })
})
