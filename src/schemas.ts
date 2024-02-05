import { z } from 'zod'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isUnique = (items: any[]) => new Set(items).size === items.length

// I'm including a 2 in this regex because top level domains have at least 2 characters.
export const csp_host_source_with_no_protocol = z
  .string()
  .regex(/^((?!https?).)+(.*\..{2,})$/, {
    message: 'Invalid host with no protocol'
  })
  .describe('CSP host source value that does not specify a protocol')

export const csp_host_source_with_protocol = z
  .string()
  .regex(/^https?:\/\/.*$/, {
    message: 'Invalid host with protocol'
  })
  .describe('CSP host source value that specify a protocol')

export const csp_hash_source_to_compute = z.union([
  z.literal('sha256'),
  z.literal('sha384'),
  z.literal('sha512')
])

export type CSPHashSourceToCompute = z.infer<typeof csp_hash_source_to_compute>

export const csp_hash_source = z
  .string()
  .regex(/^sha-(256|384|512).*$/, {
    message: 'Invalid hash source'
  })
  .describe('CSP hash source value')

const csp_nonce_source = z
  .string()
  .regex(/^nonce-.*$/, {
    message: 'Invalid nonce source'
  })
  .describe('CSP nonce source value')

export const csp_scheme_source = z.union([
  z.literal('http:'),
  z.literal('https:'),
  // data schemes are possible, but not recommended
  z.literal('blob:'),
  z.literal('data:'),
  z.literal('filesystem:'),
  z.literal('mediastream:')
])

export type CSPSchemeSource = z.infer<typeof csp_scheme_source>

/**
 * Content-Security-Policy source value.
 *
 * @see [developer.mozilla.org - Content-Security-Policy Sources](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources)
 */
export const csp_source_value = z
  .union([
    csp_host_source_with_no_protocol,
    csp_host_source_with_protocol,
    csp_scheme_source,
    csp_hash_source_to_compute,
    csp_hash_source,
    csp_nonce_source,
    z.union([
      z.literal('none'),
      z.literal('report-sample'),
      z.literal('self'),
      z.literal('strict-dynamic'),
      z.literal('unsafe-eval'),
      z.literal('unsafe-hashes'),
      z.literal('unsafe-inline')
    ])
  ])
  .describe('Content-Security-Policy source value')

export type CSPSourceValue = z.infer<typeof csp_source_value>

// https://joi.dev/api/?v=17.6.0#arrayuniquecomparator-options
export const hashAlgorithmComparator = (a: string, b: string) => {
  if (a === 'sha256' && (b === 'sha384' || b === 'sha512')) {
    return true
  }
  if (a === 'sha384' && (b === 'sha256' || b === 'sha512')) {
    return true
  }
  if (a === 'sha512' && (b === 'sha256' || b === 'sha384')) {
    return true
  }
  return false
}

export const csp_source_values = z
  .array(csp_source_value)
  .min(1)
  .refine(isUnique, {
    message: 'Must be an array of Content-Security-Policy sources'
  })

export type CSPSourceValues = z.infer<typeof csp_source_values>

// export const csp_source_values = Joi.array()
//   .items(csp_source_value)
//   .min(1)
//   .unique()
//   .unique(hashAlgorithmComparator)

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

export const src_keys = z.union([
  z.literal('script-src'),
  z.literal('script-src-attr'),
  z.literal('script-src-elem'),
  z.literal('style-src'),
  z.literal('style-src-attr'),
  z.literal('style-src-elem')
])

export type SrcKey = z.infer<typeof src_keys>

export const deprecated_directive_key = z.union([
  z.literal('block-all-mixed-content'),
  z.literal('plugin-types'),
  z.literal('prefetch-src'),
  z.literal('referrer'),
  z.literal('report-uri'),
  z.literal('require-sri-for')
])

export type DeprecatedDirectiveKey = z.infer<typeof deprecated_directive_key>

const deprecated_directive_set = z.set(deprecated_directive_key)

export type DeprecatedDirectiveSet = z.infer<typeof deprecated_directive_set>

export const supported_directive_key = z.union([
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
  z.literal('require-trusted-types-for'),
  z.literal('sandbox'),
  z.literal('script-src'),
  z.literal('script-src-attr'),
  z.literal('script-src-elem'),
  z.literal('source-values'),
  z.literal('style-src'),
  z.literal('style-src-attr'),
  z.literal('style-src-elem'),
  z.literal('trusted-types'),
  z.literal('upgrade-insecure-requests'),
  z.literal('worker-src')
])

export type SupportedDirectiveKey = z.infer<typeof supported_directive_key>

const supported_directive_set = z.set(supported_directive_key)

export type SupportedDirectiveSet = z.infer<typeof supported_directive_set>

export const directives = z.object({
  'base-uri': csp_source_values.optional(),
  'child-src': csp_source_values.optional(),
  'connect-src': csp_source_values.optional(),
  'default-src': csp_source_values.optional(),
  'font-src': csp_source_values.optional(),
  'form-action': csp_source_values.optional(),
  'frame-ancestors': csp_source_values.optional(),
  'frame-src': csp_source_values.optional(),
  'img-src': csp_source_values.optional(),
  'manifest-src': csp_source_values.optional(),
  'media-src': csp_source_values.optional(),
  'navigate-to': csp_source_values.optional(),
  'object-src': csp_source_values.optional(),
  'report-to': groupnames.optional(),
  'require-trusted-types-for': z
    .array(require_trusted_types_for_value)
    .min(1)
    .optional(),
  sandbox: z.array(sandbox_value).min(1).optional(),
  'script-src': csp_source_values.optional(),
  'script-src-attr': csp_source_values.optional(),
  'script-src-elem': csp_source_values.optional(),
  'source-values': csp_source_values.optional(),
  'style-src': csp_source_values.optional(),
  'style-src-attr': csp_source_values.optional(),
  'style-src-elem': csp_source_values.optional(),
  'trusted-types': z.array(trusted_types_value).min(1).optional(),
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
  'upgrade-insecure-requests': z.boolean().optional(),
  'worker-src': csp_source_values.optional()
})

export type Directives = z.input<typeof directives>
