import defDebug from 'debug'
import { DEBUG_PREFIX } from './constants.js'
import {
  type Algorithm,
  hashAlgorithmMap,
  noHashSpecifiedMessage,
  hashesScriptSrcAttr,
  hashesScriptSrcElem,
  hashesStyleSrcAttr,
  hashesStyleSrcElem
} from './hash.js'
import type { Directives } from './schemas/options.js'
import type { SrcKey } from './schemas/sources.js'

const debug = defDebug(`${DEBUG_PREFIX}:source-values`)

interface CspSourceValuesConfigOne {
  algorithm: Algorithm
  hashes: string[]
  values: string[]
}

/**
 * @internal
 */
const cspSourceValues = ({
  algorithm,
  hashes,
  values
}: CspSourceValuesConfigOne) => {
  const i = values.indexOf(algorithm)
  if (i !== -1) {
    debug(`Found ${algorithm} at index ${i}.`)
    return [...values.slice(0, i), ...values.slice(i + 1), ...hashes]
  } else {
    return values
  }
}

interface Config {
  directive: SrcKey
  directives: Directives
  patterns: string[]
}

interface AlgorithmConfig {
  directive: SrcKey
  directives: Directives
}

const hashAlgorithm = ({ directive, directives }: AlgorithmConfig) => {
  const hash_algo = hashAlgorithmMap(directives)
  return hash_algo[directive] as Algorithm | undefined
}

/**
 * @internal
 */
export const cspSourceValuesScriptAttr = async ({
  directive,
  directives,
  patterns
}: Config) => {
  const algorithm = hashAlgorithm({ directive, directives })

  if (!algorithm) {
    debug(noHashSpecifiedMessage(directive))
    return directives[directive]
  }

  debug(
    `CSP directive ${directive}: parse HTML and compute ${algorithm} hashes`
  )

  const hashes = await hashesScriptSrcAttr({ algorithm, patterns })

  debug(`CSP directive ${directive}: allow hashes %O`, hashes)

  return cspSourceValues({
    algorithm,
    hashes,
    values: directives[directive] || []
  })
}

/**
 * @internal
 */
export const cspSourceValuesScriptElem = async ({
  directive,
  directives,
  patterns
}: Config) => {
  const algorithm = hashAlgorithm({ directive, directives })

  if (!algorithm) {
    debug(noHashSpecifiedMessage(directive))
    return directives[directive]
  }

  debug(
    `CSP directive ${directive}: parse HTML and compute ${algorithm} hashes`
  )

  const hashes = await hashesScriptSrcElem({
    algorithm,
    patterns
  })

  debug(`CSP directive ${directive}: allow hashes %O`, hashes)

  return cspSourceValues({
    algorithm,
    hashes,
    values: directives[directive] || []
  })
}

/**
 * @internal
 */
export const cspSourceValuesStyleAttr = async ({
  directive,
  directives,
  patterns
}: Config) => {
  const algorithm = hashAlgorithm({ directive, directives })

  if (!algorithm) {
    debug(noHashSpecifiedMessage(directive))
    return directives[directive]
  }

  debug(
    `CSP directive ${directive}: parse HTML and compute ${algorithm} hashes`
  )

  const hashes = await hashesStyleSrcAttr({ algorithm, patterns })

  debug(`CSP directive ${directive}: allow hashes %O`, hashes)

  return cspSourceValues({
    algorithm,
    hashes,
    values: directives[directive] || []
  })
}

/**
 * @internal
 */
export const cspSourceValuesStyleElem = async ({
  directive,
  directives,
  patterns
}: Config) => {
  const algorithm = hashAlgorithm({ directive, directives })

  if (!algorithm) {
    debug(noHashSpecifiedMessage(directive))
    return directives[directive]
  }

  debug(
    `CSP directive ${directive}: parse HTML and compute ${algorithm} hashes`
  )

  const hashes = await hashesStyleSrcElem({
    algorithm,
    patterns
  })

  debug(`CSP directive ${directive}: allow hashes %O`, hashes)

  return cspSourceValues({
    algorithm,
    hashes,
    values: directives[directive] || []
  })
}
