import { DeprecatedDirectiveKey } from './schemas.js'
export interface DeprecatedDirectiveValue {
  hrefs: string[]
  whatToDoInstead: string
}

export type DeprecatedDirectives = {
  [key in DeprecatedDirectiveKey]: DeprecatedDirectiveValue
}

/**
 * @see [Deprecated directives - MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#deprecated_directives)
 */
export const deprecatedDirectives: DeprecatedDirectives = {
  'block-all-mixed-content': {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content'
    ],
    whatToDoInstead: 'use the upgrade-insecure-requests directive'
  },
  'plugin-types': {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/plugin-types'
    ],
    whatToDoInstead: 'use the object-src directive to disallow all plugins'
  },
  'prefetch-src': {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/prefetch-src'
    ],
    whatToDoInstead: 'avoid using it'
  },
  referrer: {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/referrer'
    ],
    whatToDoInstead: 'use the Referrer-Policy header'
  },
  'report-uri': {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri'
    ],
    whatToDoInstead: 'use the report-to directive'
  },
  'require-sri-for': {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for'
    ],
    whatToDoInstead: 'avoid using it'
  }
}
