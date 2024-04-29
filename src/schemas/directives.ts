import { z } from 'zod'

export const experimental_directive = z.union([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src
  z.literal('fenced-frame-src'),
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
  z.literal('require-trusted-types-for'),
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
  z.literal('trusted-types')
])

export type ExperimentalDirective = z.infer<typeof experimental_directive>

export const experimental_directive_set = z.set(experimental_directive)

export type ExperimentalDirectiveSet = z.infer<
  typeof experimental_directive_set
>

/**
 * @see [Deprecated directives - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#deprecated_directives)
 */
export const deprecated_directive = z.union([
  z.literal('block-all-mixed-content'),
  z.literal('plugin-types'),
  z.literal('prefetch-src'),
  z.literal('referrer'),
  z.literal('report-uri'),
  // https://github.com/w3c/webappsec-subresource-integrity/pull/82
  z.literal('require-sri-for')
])

export type DeprecatedDirective = z.infer<typeof deprecated_directive>

export const deprecated_directive_set = z.set(deprecated_directive)

export type DeprecatedDirectiveSet = z.infer<typeof deprecated_directive_set>

/**
 * @see [Directives - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives)
 */
export const supported_directive = z.union([
  z.literal('base-uri'),
  z.literal('child-src'),
  z.literal('connect-src'),
  z.literal('default-src'),
  z.literal('font-src'),
  z.literal('form-action'),
  z.literal('frame-ancestors'),
  z.literal('frame-src'),
  z.literal('img-src'),
  z.literal('manifest-src'),
  z.literal('media-src'),
  z.literal('navigate-to'),
  z.literal('object-src'),
  z.literal('report-to'),
  z.literal('sandbox'),
  z.literal('script-src'),
  z.literal('script-src-attr'),
  z.literal('script-src-elem'),
  z.literal('source-values'),
  z.literal('style-src'),
  z.literal('style-src-attr'),
  z.literal('style-src-elem'),
  z.literal('upgrade-insecure-requests'),
  z.literal('worker-src')
])

export type SupportedDirective = z.infer<typeof supported_directive>

export const supported_directive_set = z.set(supported_directive)

export type SupportedDirectiveSet = z.infer<typeof supported_directive_set>

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to
export const groupname = z.string().min(1)

export const groupnames = z.array(groupname).min(1)

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
export const require_trusted_types_for_value = z.literal('script')

/**
 * Value for the Content-Security-Policy `sandbox` directive.
 *
 * @see [developer.mozilla.org - Content-Security-Policy/sandbox](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox)
 */
export const sandbox_value = z
  .union([
    z.literal('allow-downloads'),
    z.literal('allow-downloads-without-user-activation'),
    z.literal('allow-forms'),
    z.literal('allow-modals'),
    z.literal('allow-orientation-lock'),
    z.literal('allow-pointer-lock'),
    z.literal('allow-popups'),
    z.literal('allow-popups-to-escape-sandbox'),
    z.literal('allow-presentation'),
    z.literal('allow-same-origin'),
    z.literal('allow-scripts'),
    z.literal('allow-storage-access-by-user-activation'),
    z.literal('allow-top-navigation'),
    z.literal('allow-top-navigation-by-user-activation'),
    z.literal('allow-top-navigation-to-custom-protocol')
  ])
  .describe('Value for the Content-Security-Policy `sandbox` directive.')

export type SandboxValue = z.infer<typeof sandbox_value>

/**
 * Value for the Content-Security-Policy `trusted-types` directive.
 *
 * @see [developer.mozilla.org - Content-Security-Policy/trusted-types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)
 */
export const trusted_types_value = z
  .string()
  .min(1)
  .describe('Value for the Content-Security-Policy `trusted-types` directive.')
