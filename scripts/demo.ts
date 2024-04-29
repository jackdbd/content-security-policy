import path from 'node:path'
import PrettyError from 'pretty-error'
import yargs from 'yargs'
import { cspDirectives, cspHeader, cspObj } from '../lib/index.js'
import { starter_policy, recommended_policy } from '../lib/policies.js'

const pe = new PrettyError()

interface Argv {
  format: string
  policy: string
}

const DEFAULT: Argv = {
  format: 'object',
  policy: 'recommeded'
}

const main = async () => {
  const argv = yargs(process.argv.slice(2))
    .choices('format', ['directives', 'header', 'object'])
    .describe('policy', 'which CSP to use')
    .choices('policy', ['starter', 'recommeded', 'custom'])
    .default(DEFAULT).argv as Argv

  let directives = {}
  switch (argv.policy) {
    case 'custom': {
      directives = {
        'base-uri': ['self'],

        'connect-src': [
          'self',
          'cloudflareinsights.com',
          'plausible.io',
          'res.cloudinary.com'
        ],

        'default-src': ['none'],

        'font-src': ['self'],

        'frame-src': [
          'https://www.youtube.com/embed/',
          'https://www.youtube-nocookie.com/',
          'https://player.vimeo.com/video/'
        ],

        'img-src': [
          'self',
          'github.com',
          'raw.githubusercontent.com',
          'res.cloudinary.com'
        ],

        // In fixtures/html/index.html there is the following event handler: onclick="alert('hello')"
        // We can allow this one event handler by setting unsafe-hashes and letting this library calculare the SHA256 for us.
        // https://makandracards.com/makandra/503862-using-inline-event-handlers-with-a-strict-content-security-policy-csp
        'script-src-attr': ['self', 'unsafe-hashes', 'sha256'],

        'script-src-elem': [
          'self',
          'https://plausible.io/js/plausible.js',
          'https://static.cloudflareinsights.com/beacon.min.js',
          'https://unpkg.com/htm/preact/standalone.module.js'
        ],

        // https://content-security-policy.com/examples/allow-inline-style/
        'style-src-attr': ['self', 'unsafe-hashes', 'sha256'],

        'style-src-elem': ['self', 'sha256'],

        'worker-src': ['self']
      }
      break
    }

    case 'recommended': {
      directives = recommended_policy
      break
    }

    case 'starter': {
      directives = starter_policy
      break
    }

    default: {
      directives = recommended_policy
    }
  }

  const patterns = [path.join('fixtures', 'html', '**/*.html')]

  if (argv.format === 'object') {
    try {
      const obj = await cspObj({ directives, patterns })
      console.log(
        `\nHere is your Content-Security-Policy as JS object literal\n`
      )
      console.log(obj)
    } catch (err: any) {
      console.log(pe.render(err))
    }
  } else if (argv.format === 'directives') {
    try {
      const strings = await cspDirectives({ directives, patterns })
      console.log(
        `\nHere is your Content-Security-Policy as array of directives\n`
      )
      console.log(strings)
    } catch (err: any) {
      console.log(pe.render(err))
    }
  } else if (argv.format === 'header') {
    try {
      const header = await cspHeader({ directives, patterns })
      console.log(
        `\nHere is your Content-Security-Policy as plain text header\n`
      )
      console.log(header)
    } catch (err: any) {
      console.log(pe.render(err))
    }
  } else {
    throw new Error(`format ${argv.format} not implemented`)
  }
}

main()
