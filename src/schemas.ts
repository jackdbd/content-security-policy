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

/**
 * Value for the Content-Security-Policy `trusted-types` directive.
 *
 * @see [developer.mozilla.org - Content-Security-Policy/trusted-types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)
 */
export const trusted_types_value = z
  .string()
  .min(1)
  .describe('Value for the Content-Security-Policy `trusted-types` directive.')

export const directives = z.object({
  'base-uri': csp_source_values,
  'child-src': csp_source_values,
  'connect-src': csp_source_values,
  'default-src': csp_source_values,
  'font-src': csp_source_values,
  'form-action': csp_source_values,
  'frame-ancestors': csp_source_values,
  'frame-src': csp_source_values,
  'img-src': csp_source_values,
  'manifest-src': csp_source_values,
  'media-src': csp_source_values,
  'navigate-to': csp_source_values,
  'object-src': csp_source_values,
  'report-to': groupnames,
  'require-trusted-types-for': z.array(require_trusted_types_for_value).min(1),
  sandbox: z.array(sandbox_value).min(1),
  'script-src': csp_source_values,
  'script-src-attr': csp_source_values,
  'script-src-elem': csp_source_values,
  'source-values': csp_source_values,
  'style-src': csp_source_values,
  'style-src-attr': csp_source_values,
  'style-src-elem': csp_source_values,
  'trusted-types': z.array(trusted_types_value).min(1),
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
  'upgrade-insecure-requests': z.boolean(),
  'worker-src': csp_source_values
})
