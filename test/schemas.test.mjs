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
      assert.match(res.error.message, /Invalid/)
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
    it('is valid for any "special" CSP source value', () => {
      const sources = [
        'none',
        'report-sample',
        'self',
        'strict-dynamic',
        'unsafe-eval',
        'unsafe-hashes',
        'unsafe-inline',
        'wasm-unsafe-eval'
      ]

      sources.forEach((source) => {
        const res = csp_source_value.safeParse(source)

        assert.equal(res.error, undefined)
        assert.equal(res.data, source)
      })
    })

    it('is valid when the source value is a data URL', () => {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
      const sources = [
        `data:,Hello%2C%20World%21`,
        `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`,
        `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`,
        `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`,
        `data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.7549 11.255H11.9649L11.6849 10.985C12.6649 9.845 13.2549 8.365 13.2549 6.755C13.2549 3.165 10.3449 0.255005 6.75488 0.255005C3.16488 0.255005 0.254883 3.165 0.254883 6.755C0.254883 10.345 3.16488 13.255 6.75488 13.255C8.36488 13.255 9.84488 12.665 10.9849 11.685L11.2549 11.965V12.755L16.2549 17.745L17.7449 16.255L12.7549 11.255ZM6.75488 11.255C4.26488 11.255 2.25488 9.245 2.25488 6.755C2.25488 4.26501 4.26488 2.255 6.75488 2.255C9.24488 2.255 11.2549 4.26501 11.2549 6.755C11.2549 9.245 9.24488 11.255 6.75488 11.255Z' fill='%23000000'/%3E%3C/svg%3E%0A`
      ]

      sources.forEach((source) => {
        const res = csp_source_value.safeParse(source)

        assert.equal(res.error, undefined)
        assert.equal(res.data, source)
      })
    })

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
