import { deprecatedDirectives } from './deprecated-directives.js'
import type { DeprecatedDirective } from './schemas/directives.js'

/**
 * @public
 */
export interface Config {
  allowDeprecatedDirectives: boolean
  error: any
}

/**
 * @public
 */
export const validationErrorOrWarnings = ({
  allowDeprecatedDirectives,
  error
}: Config) => {
  // This code is coupled with the structure of the error generated by the
  // validation library. It's not ideal, but Joi and Zod use a very similar
  // structure fot the error, so I guess it's not that bad.
  // const detail = error.details[0] // Joi
  const detail = error.issues[0] // Zod

  const warnings: string[] = []

  if (detail.path.length === 2) {
    const directive = detail.path[1] as DeprecatedDirective

    const deprecatedDirective = deprecatedDirectives[directive]

    if (deprecatedDirective) {
      const message = [
        `CSP directive ${directive} is deprecated`,
        `Instead, ${deprecatedDirective.whatToDoInstead}`,
        `Learn more: ${deprecatedDirective.hrefs.join(' ')}`
      ].join('. ')

      if (allowDeprecatedDirectives) {
        warnings.push(message)
        return { warnings }
      } else {
        const tip = `Remove the deprecated directives, or set allowDeprecatedDirectives: true if you want to allow them.`
        return {
          error: new Error(`invalid configuration: ${message}. ${tip}`),
          warnings
        }
      }
    } else {
      // This is an error about a CSP directives, but it's not related to a
      // deprecated directive.
      return {
        error: new Error(`invalid configuration: ${error.message}`),
        warnings
      }
    }
  } else {
    // This is an error about something else.
    // TODO: Zod errors do not have a `context` property. This code was written for Joi.
    if (detail.context && detail.context.message) {
      return {
        error: new Error(`invalid configuration: ${detail.context.message}`),
        warnings
      }
    } else {
      return {
        error: new Error(`invalid configuration: ${error.message}`),
        warnings
      }
    }
  }
}
