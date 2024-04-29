import defDebug from 'debug'
import { DEBUG_PREFIX } from './constants.js'
import type { Options } from './schemas/options.js'
import {
  cspSourceValuesStyleAttr,
  cspSourceValuesScriptElem,
  cspSourceValuesScriptAttr,
  cspSourceValuesStyleElem
} from './source-values.js'
import { stringReplacer } from './utils.js'

const debug = defDebug(`${DEBUG_PREFIX}:csp-directives`)

/**
 * @public
 */
export const cspDirectives = async ({ directives, patterns }: Options) => {
  const m = { ...directives }

  const [
    script_src,
    script_src_attr,
    script_src_elem,
    style_src,
    style_src_attr,
    style_src_elem
  ] = await Promise.all([
    cspSourceValuesScriptElem({
      directive: 'script-src',
      directives,
      patterns
    }),
    cspSourceValuesScriptAttr({
      directive: 'script-src-attr',
      directives,
      patterns
    }),
    cspSourceValuesScriptElem({
      directive: 'script-src-elem',
      directives,
      patterns
    }),
    cspSourceValuesStyleElem({
      directives,
      directive: 'style-src',
      patterns
    }),
    cspSourceValuesStyleAttr({
      directives,
      directive: 'style-src-attr',
      patterns
    }),
    cspSourceValuesStyleElem({
      directives,
      directive: 'style-src-elem',
      patterns
    })
  ])

  if (script_src) {
    m['script-src'] = script_src
  }

  if (script_src_attr) {
    m['script-src-attr'] = script_src_attr
  }

  if (script_src_elem) {
    m['script-src-elem'] = script_src_elem
  }

  if (style_src) {
    m['style-src'] = style_src
  }

  if (style_src_attr) {
    m['style-src-attr'] = style_src_attr
  }

  if (style_src_elem) {
    m['style-src-elem'] = style_src_elem
  }

  const arr = Object.entries(m).map(([key, value]) => {
    debug(`${key} %o`, value)
    if ((value as any) === true) {
      return key
    }
    const strings = (value as any).map(stringReplacer)
    return `${key} ${strings.join(' ')}`
  })
  debug('CSP directives that represent the policy %O', arr)

  return arr
}
