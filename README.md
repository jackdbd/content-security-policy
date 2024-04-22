# content-security-policy

[![npm package badge](https://badge.fury.io/js/@jackdbd%2Fcontent-security-policy.svg)](https://badge.fury.io/js/@jackdbd%2Fcontent-security-policy)
[![install size badge](https://packagephobia.com/badge?p=@jackdbd/content-security-policy)](https://packagephobia.com/result?p=@jackdbd/content-security-policy)
[![CI GitHub workflow badge](https://github.com/jackdbd/content-security-policy/actions/workflows/ci.yaml/badge.svg)](https://github.com/jackdbd/content-security-policy/actions/workflows/ci.yaml)
[![CodeCov badge](https://codecov.io/gh/jackdbd/content-security-policy/graph/badge.svg?token=9jddzo5Dt3)](https://codecov.io/gh/jackdbd/content-security-policy)
[![CodeFactor badge](https://www.codefactor.io/repository/github/jackdbd/content-security-policy/badge)](https://www.codefactor.io/repository/github/jackdbd/content-security-policy)
[![Socket badge](https://socket.dev/api/badge/npm/package/@jackdbd/content-security-policy)](https://socket.dev/npm/package/@jackdbd/content-security-policy)
[![Conventional Commits badge](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

Write your Content-Security-Policy header in JavaScript, so you can have validation and automatic hashes.

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Docs](#docs)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)
- [Alternatives](#alternatives)
- [License](#license)

## About

A [strict Content-Security-Policy](https://web.dev/articles/strict-csp) is probably the single most important line of defense against Cross-Site Scripting (XSS) attacks.

Unfortunately, writing a good CSP header by hand is a pain. Here is why:

- You might write an invalid CSP directive (e.g. typos, incorrect values).
- You might write a CSP directive which is supported in one browser, but not in another one.
- You might want to allow some inline CSS/JS in your HTML page, but you neither:
  - want to compromise security by using [unsafe-inline](https://content-security-policy.com/unsafe-inline/), nor...
  - want to compute the cryptographic hash of each snippet of CSS/JS that you inlined and whitelist them by hand.

Also, you should:

- keep your CSP quite visible in your codebase, since it's such an important configuration for your website/app.
- generate your CSP in multiple format (JS object literal, JS array, plain text), so other tools can easily consume it.

This package validates your Content-Security-Policy [directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) and computes a cryptographic hash (SHA-256, SHA-384 or SHA-512) for each snippet of CSS/JS that you inline in your HTML file.

> 🛈 **Note:**
>
> If your website is built with [Eleventy](https://www.11ty.dev/), have a look at [@jackdbd/eleventy-plugin-content-security-policy](https://www.npmjs.com/package/@jackdbd/eleventy-plugin-content-security-policy), which also takes care of writing the Content-Security-Policy header in a `_headers` file (useful if you website/app is hosted on [Netlify](https://docs.netlify.com/routing/headers/) or [Cloudflare Pages](https://developers.cloudflare.com/pages/platform/headers/)).

## Installation

```sh
npm install @jackdbd/content-security-policy
```

## Usage

Write something like this in your build script:

```js
import path from 'node:path'
// pick the format you prefer: JS object literal, header (single string), directives (N strings)
import {
  cspObj,
  cspHeader,
  cspDirectives
} from '@jackdbd/content-security-policy'

// The Content-Security-Policy header is made of directives.
// If you don't know where to start, use one of the following policies:
import {
  starter_policy,
  recommended_policy
} from '@jackdbd/content-security-policy/policies'

const directives = recommended_policy

const patterns = [
  // e.g. for a Eleventy website
  path.join('_site', '**/*.html')
]

const obj = await cspObj({ directives, patterns })
console.log(`Content-Security-Policy (as JS object literal)`)
console.log(obj)

const header = await cspHeader({ directives, patterns })
console.log(`Content-Security-Policy (as header)`)
console.log(header)

const strings = await cspDirectives({ directives, patterns })
console.log(`Content-Security-Policy (as strings)`)
console.log(strings)
```

## Configuration

The `cspObj`, `cspHeader` and `cspDirectives` functions require an object that contains `directives` and `patterns`.

| Parameter | Explanation |
| --- | --- |
| `directives` | [Directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) for the Content-Security-Policy (or Content-Security-Policy-Report-Only) header. |
| `patterns` | glob patterns for your `.html` files. |

## Docs

[Docs generated by TypeDoc](https://jackdbd.github.io/content-security-policy/)

> 📖 **API Docs**
>
> This project uses [API Extractor](https://api-extractor.com/) and [api-documenter markdown](https://api-extractor.com/pages/commands/api-documenter_markdown/) to generate a bunch of markdown files and a `.d.ts` rollup file containing all type definitions consolidated into a single file. I don't find this `.d.ts` rollup file particularly useful. On the other hand, the markdown files that api-documenter generates are quite handy when reviewing the public API of this project.
>
> *See [Generating API docs](https://api-extractor.com/pages/setup/generating_docs/) if you want to know more*.

## Dependencies

| Package | Version |
|---|---|
| [debug](https://www.npmjs.com/package/debug) | `^4.3.4` |
| [globby](https://www.npmjs.com/package/globby) | `^14.0.1` |
| [himalaya](https://www.npmjs.com/package/himalaya) | `^1.1.0` |
| [zod](https://www.npmjs.com/package/zod) | `^3.23.0` |

This project is tested on Node.js >=14.21.3.

You can use a Node.js version manager like [nvm](https://github.com/nvm-sh/nvm), [asdf](https://github.com/asdf-vm/asdf) or [volta](https://github.com/volta-cli/volta) to manage your Node.js versions.

## Troubleshooting

This project uses the [debug](https://github.com/debug-js/debug) library for logging.
You can control what's logged using the `DEBUG` environment variable.

For example, if you set your environment variables in a `.envrc` file, you can do:

```sh
# print all logging statements
export DEBUG=csp:*
```

## Alternatives

- [netlify-plugin-csp-generator](https://github.com/MarcelloTheArcane/netlify-plugin-csp-generator). It uses [jsdom](https://github.com/jsdom/jsdom) to find all inlined CSS/JS snippets in your website, it computes a SHA-256 for each one of them, then it appends the CSP to your `_headers` file. Really cool, but you have to host you site on Netlify to use it.
- [seespee](https://github.com/papandreou/seespee). It uses [AssetGraph](https://github.com/assetgraph/assetgraph) to build a dependency graph of your website, then it computes hashes for the assets included in such graph.

## License

&copy; 2022 - 2024 [Giacomo Debidda](https://www.giacomodebidda.com/) // [MIT License](https://spdx.org/licenses/MIT.html)
