import { z } from 'zod'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isUnique = (items: any[]) => new Set(items).size === items.length

// I'm including a 2 in this regex because top level domains have at least 2 characters.
export const host_source_with_no_protocol = z
  .string()
  .regex(/^((?!https?).)+(.*\..{2,})$/)
  .describe('CSP host source value that does not specify a protocol')

export const host_source_with_protocol = z
  .string()
  .regex(/^https?:\/\/.*$/)
  .describe('CSP host source value that specify a protocol')

export const hash_source_to_compute = z.union([
  z.literal('sha256'),
  z.literal('sha384'),
  z.literal('sha512')
])

export type HashSourceToCompute = z.infer<typeof hash_source_to_compute>

export const hash_source = z
  .string()
  .regex(/^sha(256|384|512)-.*$/, {
    message: 'Invalid hash source'
  })
  .describe('CSP hash source value')

const nonce_source = z
  .string()
  .regex(/^nonce-.*$/, {
    message: 'Invalid nonce source'
  })
  .describe('CSP nonce source value')

export const scheme_source = z.union([
  z.literal('http:'),
  z.literal('https:'),
  // data schemes are possible, but not recommended
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#scheme-source
  z.string().regex(/^blob:/),
  z.string().regex(/^data:/),
  z.string().regex(/^filesystem:/),
  z.string().regex(/^mediastream:/)
])

export type SchemeSource = z.infer<typeof scheme_source>

/**
 * Content-Security-Policy source value.
 *
 * @see [developer.mozilla.org - Content-Security-Policy Sources](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources)
 */
export const source_value = z
  .union([
    host_source_with_no_protocol,
    host_source_with_protocol,
    scheme_source,
    hash_source_to_compute,
    hash_source,
    nonce_source,
    z.literal('none'),
    z.literal('report-sample'),
    z.literal('self'),
    z.literal('strict-dynamic'),
    z.literal('unsafe-eval'),
    z.literal('unsafe-hashes'),
    z.literal('unsafe-inline'),
    z.literal('wasm-unsafe-eval')
  ])
  .describe('Content-Security-Policy source value')

export type SourceValue = z.infer<typeof source_value>

export const source_values = z.array(source_value).min(1).refine(isUnique, {
  message: 'Must be an array of unique Content-Security-Policy sources'
})

export type SourceValues = z.infer<typeof source_values>

export const src_keys = z.union([
  z.literal('script-src'),
  z.literal('script-src-attr'),
  z.literal('script-src-elem'),
  z.literal('style-src'),
  z.literal('style-src-attr'),
  z.literal('style-src-elem')
])

export type SrcKey = z.infer<typeof src_keys>
