import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'
import { describe, it } from 'node:test'
import { cspHeader } from '../lib/index.js'
import { HTML_DIR } from './constants.mjs'

const HTML = fs.readFileSync(path.join(HTML_DIR, 'index.html')).toString()

describe('e2e CSP header', () => {
  it('contains 2 expected sha256 hashes if `sha256` is in `script-src-attr` and the HTML has 2 expected snippets of inline JS', async () => {
    // In fixtures/html/index.html there are 2 onclick handlers: "alert('hello')"
    // and "alert('world')". We can allow these event handlers by setting
    // unsafe-hashes and letting this library calculare the sha256 hashes for us.
    const directives = {
      'script-src-attr': ['self', 'unsafe-hashes', 'sha256']
    }
    const patterns = [path.join(HTML_DIR, '**/*.html')]
    assert.match(HTML, /alert\('hello'\)/) // => sha256-vIsp2avtxDy0157AryO+jEJVpLdmka7PI7o7C4q5ABE=
    assert.match(HTML, /alert\('world'\)/) // => sha256-Y2Bk2CRMWdAwmRnaVwOu4/k/8AANW7TA5bzcS4RzH2c=

    const header = await cspHeader({ directives, patterns })

    assert.match(header, /'self'/)
    assert.match(header, /'unsafe-hashes'/)
    assert.match(
      header,
      /'sha256-vIsp2avtxDy0157AryO\+jEJVpLdmka7PI7o7C4q5ABE='/
    )
    assert.match(
      header,
      /'sha256-Y2Bk2CRMWdAwmRnaVwOu4\/k\/8AANW7TA5bzcS4RzH2c='/
    )
  })

  it('does not contain any sha256 hashes if the `sha256` value is not in `script-src-attr`', async () => {
    const directives = {
      'script-src-attr': ['self']
    }
    const patterns = [path.join(HTML_DIR, '**/*.html')]

    const header = await cspHeader({ directives, patterns })

    assert.match(header, /'self'/)
    assert.doesNotMatch(
      header,
      /'sha256-vIsp2avtxDy0157AryO\+jEJVpLdmka7PI7o7C4q5ABE='/
    )
    assert.doesNotMatch(
      header,
      /'sha256-Y2Bk2CRMWdAwmRnaVwOu4\/k\/8AANW7TA5bzcS4RzH2c='/
    )
  })
})
