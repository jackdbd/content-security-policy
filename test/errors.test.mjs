import assert from 'node:assert'
import { describe, it } from 'node:test'
import { z } from 'zod'
import { validationErrorOrWarnings } from '../lib/errors.js'

describe('validationErrorOrWarnings', () => {
  it('is defined when the configuration is invalid', () => {
    const message = 'this is a validation error'
    const deprecated_directive = 'block-all-mixed-content'
    const zod_issues = [
      {
        message,
        code: 'custom',
        path: ['foo', deprecated_directive]
      }
    ]
    const error = new z.ZodError(zod_issues)

    const res = validationErrorOrWarnings({
      error,
      allowDeprecatedDirectives: false
    })

    assert.notEqual(res.error, undefined)
    assert.match(res.error.message, /invalid configuration/)
  })

  it('is an error (and no warnings) when the configuration is valid but it is used a deprecated CSP directive and allowDeprecatedDirectives is false. Also, outputs an error message that offers some guidance.', () => {
    const deprecated_directives = [
      'block-all-mixed-content',
      'plugin-types',
      'prefetch-src',
      'referrer',
      'report-uri',
      'require-sri-for'
    ]

    deprecated_directives.forEach((deprecated_directive) => {
      const message = 'this is a validation error'
      const zod_issues = [
        { message, code: 'custom', path: ['foo', deprecated_directive] }
      ]

      const { error, warnings } = validationErrorOrWarnings({
        error: new z.ZodError(zod_issues),
        allowDeprecatedDirectives: false
      })

      assert.notEqual(error, undefined)

      assert.match(error.message, /invalid configuration/)
      assert.match(error.message, new RegExp('CSP directive'))
      assert.match(error.message, new RegExp(deprecated_directive))
      assert.match(error.message, new RegExp('deprecated'))
      assert.match(error.message, new RegExp('Instead'))
      assert.match(error.message, new RegExp('Learn more:'))
      assert.equal(warnings.length, 0)
    })
  })

  it('is a warning (and no error) when the configuration is valid but it is used a deprecated CSP directive and allowDeprecatedDirectives is true', () => {
    const message = 'this is a validation error'
    const deprecated_directive = 'block-all-mixed-content'
    const zod_issues = [
      {
        message,
        code: 'custom',
        path: ['foo', deprecated_directive]
      }
    ]

    const { error, warnings } = validationErrorOrWarnings({
      error: new z.ZodError(zod_issues),
      allowDeprecatedDirectives: true
    })

    assert.equal(error, undefined)
    assert.equal(warnings.length, 1)
    const warning = warnings[0]
    assert.match(warning, /deprecated/)
    assert.match(warning, new RegExp(deprecated_directive))
  })
})
