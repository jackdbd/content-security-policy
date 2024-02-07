import assert from 'node:assert'
import { describe, it } from 'node:test'
import {
  csp_hash_source,
  csp_scheme_source,
  csp_source_value,
  csp_source_values
} from '../lib/schemas.js'

describe('schemas', () => {
  describe('csp_scheme_source', () => {
    it('is not valid for `foo`', () => {
      const res = csp_scheme_source.safeParse('foo')

      assert.notEqual(res.error, undefined)
      assert.match(res.error.message, /Invalid input/)
    })

    it('is valid for each one of the supported schemes`', () => {
      const schemes = [
        'http:',
        'https:',
        'blob:',
        'data:',
        'filesystem:',
        'mediastream:'
      ]

      schemes.forEach((scheme) => {
        const res = csp_scheme_source.safeParse(scheme)

        assert.equal(res.error, undefined)
        assert.equal(res.data, scheme)
      })
    })
  })

  describe('csp_hash_source', () => {
    it('is valid for a sha256-* value', () => {
      const expected = 'sha256-K8ITDHA9dtdAedwtkjos9BCZYSdFMrGkfxc9Ge+GJWI='
      const res = csp_hash_source.safeParse(expected)

      assert.equal(res.error, undefined)
      assert.equal(res.data, expected)
    })

    it('is valid for a sha512-* value', () => {
      const expected =
        'sha512-db9b1cd3262dee37756a09b9064973589847caa8e53d31a9d142ea2701b1b28abd97838bb9a27068ba305dc8d04a45a1fcf079de54d607666996b3cc54f6b67c'
      const res = csp_hash_source.safeParse(expected)

      assert.equal(res.error, undefined)
      assert.equal(res.data, expected)
    })
  })

  describe('csp_source_value', () => {
    it('is valid for a sha256-* value', () => {
      const expected = 'sha256-K8ITDHA9dtdAedwtkjos9BCZYSdFMrGkfxc9Ge+GJWI='
      const res = csp_source_value.safeParse(expected)

      assert.equal(res.error, undefined)
      assert.equal(res.data, expected)
    })

    it('is valid for a sha512-* value', () => {
      const expected =
        'sha512-db9b1cd3262dee37756a09b9064973589847caa8e53d31a9d142ea2701b1b28abd97838bb9a27068ba305dc8d04a45a1fcf079de54d607666996b3cc54f6b67c'
      const res = csp_hash_source.safeParse(expected)

      assert.equal(res.error, undefined)
      assert.equal(res.data, expected)
    })
  })

  describe('csp_source_values', () => {
    it('must contain at least one item', () => {
      const res = csp_source_values.safeParse([])

      assert.notEqual(res.error, undefined)
      assert.match(res.error.message, /at least 1/)
    })

    it('is valid for each one of the supported CSP source values', () => {
      const source_values = [
        ['self'],
        ['unsafe-eval'],
        ['unsafe-hashes'],
        ['self', 'unsafe-inline']
      ]

      source_values.forEach((source_value) => {
        const res = csp_source_values.safeParse(source_value)

        assert.equal(res.error, undefined)
        assert.equal(JSON.stringify(res.data), JSON.stringify(source_value))
      })
    })
  })
})
