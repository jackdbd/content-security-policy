import { z } from 'zod'
import {
  groupnames,
  require_trusted_types_for_value,
  sandbox_value,
  trusted_types_value
} from './directives.js'
import { source_values } from './sources.js'

export const experimental_directives = z.object({
  'fenced-frame-src': source_values.optional(),
  'require-trusted-types-for': z
    .array(require_trusted_types_for_value)
    .min(1)
    .optional(),
  'trusted-types': z.array(trusted_types_value).min(1).optional()
})

export type ExperimentalDirectives = z.input<typeof experimental_directives>

/**
 * @see [Directives - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives)
 */
export const directives = z
  .object({
    'base-uri': source_values.optional(),
    'child-src': source_values.optional(),
    'connect-src': source_values.optional(),
    'default-src': source_values.optional(),
    //   'fenced-frame-src': source_values.optional(),
    'font-src': source_values.optional(),
    'form-action': source_values.optional(),
    'frame-ancestors': source_values.optional(),
    'frame-src': source_values.optional(),
    'img-src': source_values.optional(),
    'manifest-src': source_values.optional(),
    'media-src': source_values.optional(),
    'navigate-to': source_values.optional(),
    'object-src': source_values.optional(),
    'report-to': groupnames.optional(),
    // 'require-trusted-types-for': z
    //   .array(require_trusted_types_for_value)
    //   .min(1)
    //   .optional(),
    sandbox: z.array(sandbox_value).min(1).optional(),
    'script-src': source_values.optional(),
    'script-src-attr': source_values.optional(),
    'script-src-elem': source_values.optional(),
    'source-values': source_values.optional(),
    'style-src': source_values.optional(),
    'style-src-attr': source_values.optional(),
    'style-src-elem': source_values.optional(),
    // 'trusted-types': z.array(trusted_types_value).min(1).optional(),
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
    'upgrade-insecure-requests': z.boolean().optional(),
    'worker-src': source_values.optional()
  })
  .describe(
    'Directives for your `Content-Security-Policy` (or `Content-Security-Policy-Report-Only`).'
  )

export type Directives = z.input<typeof directives>

export const glob_pattern = z.string().min(1).describe('A glob pattern')

export const patterns = z
  .array(glob_pattern)
  // .default(['_site/**/*.html', 'build/**/*.html', 'dist/**/*.html'])
  .describe('Glob patterns for your `.html` files.')

export const options = z
  .object({ directives, patterns })
  .describe('Configuration options')

/**
 * @public
 */
export type Options = z.input<typeof options>
