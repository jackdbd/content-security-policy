import { ExperimentalDirective } from './schemas/directives.js'
export interface ExperimentalDirectiveValue {
  hrefs: string[]
}

export type ExperimentalDirectives = {
  [key in ExperimentalDirective]: ExperimentalDirectiveValue
}

export const experimentalDirectives: ExperimentalDirectives = {
  'fenced-frame-src': {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src'
    ]
  },
  'require-trusted-types-for': {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for'
    ]
  },
  'trusted-types': {
    hrefs: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types'
    ]
  }
}
