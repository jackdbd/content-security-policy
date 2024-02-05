/**
 * Entry point for the documentation of content-security-policy.
 *
 * @packageDocumentation
 */
export {
  cspDirectives,
  cspHeader,
  cspJSON,
  type Config
} from './csp-directives.js'

export {
  type DeprecatedDirectiveValue,
  type DeprecatedDirectives
} from './deprecated-directives.js'

export {
  validationErrorOrWarnings,
  type Config as ValidationErrorOrWarningsConfig
} from './errors.js'

export { starter_policy, recommended_policy } from './policies.js'

export {
  deprecated_directive_key,
  type DeprecatedDirectiveKey,
  directives,
  type Directives
} from './schemas.js'
