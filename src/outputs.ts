import defDebug from 'debug'
import { DEBUG_PREFIX } from './constants.js'
import { cspDirectives } from './csp-directives.js'
import type { Options } from './schemas/options.js'

const debug = defDebug(`${DEBUG_PREFIX}:outputs`)

/**
 * @public
 */
export const cspHeader = async ({ directives, patterns }: Options) => {
  debug(`output CSP directives as plain text header`)
  const arr = await cspDirectives({
    directives,
    patterns
  })

  return arr.join('; ')
}

/**
 * @public
 */
export const cspObj = async ({ directives, patterns }: Options) => {
  debug(`output CSP directives as JavaScript object literal`)
  const arr = await cspDirectives({
    directives,
    patterns
  })

  return arr.reduce((acc, cv) => {
    const [k, ...rest] = cv.split(' ')
    return { ...acc, [k]: rest }
  }, {})
}
