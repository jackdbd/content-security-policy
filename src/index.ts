/**
 * Entry point for the documentation of content-security-policy.
 *
 * @packageDocumentation
 */
export { cspDirectives } from './csp-directives.js'

export {
  type DeprecatedDirectiveValue,
  type DeprecatedDirectives
} from './deprecated-directives.js'

export {
  validationErrorOrWarnings,
  type Config as ValidationErrorOrWarningsConfig
} from './errors.js'

export { cspHeader, cspObj } from './outputs.js'

export { starter_policy, recommended_policy } from './policies.js'

export { directives, options } from './schemas/options.js'
export type { Directives, Options } from './schemas/options.js'

export { deprecated_directive } from './schemas/directives.js'
export type { DeprecatedDirective } from './schemas/directives.js'
