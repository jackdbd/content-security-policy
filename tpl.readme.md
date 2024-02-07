# content-security-policy

{{badges}}

{{pkg.description}}

<!-- toc -->

## About

A [strict Content-Security-Policy](https://web.dev/strict-csp/) is probably the single most important line of defense against Cross-Site Scripting (XSS) and data injection attacks.

However, writing a good CSP header by hand is a pain. Here is why:

- You might write an invalid CSP directive (e.g. typos, incorrect values).
- You might write a CSP directive which is supported in one browser, but not in another one.
- You might want to allow some inline CSS/JS in your HTML page, but you neither:
  - want to compromise security by using [unsafe-inline](https://content-security-policy.com/unsafe-inline/), nor...
  - want to compute the cryptographic hash of each snippet of CSS/JS that you inlined and whitelisting them by hand.

Also, you should:

- keep your CSP quite visible in your codebase, since it's such an important configuration for your website/app.
- generate your CSP in multiple format (JSON, JS array, plain text), so other tools can easily consume it.

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
// pick the format you prefer: object, header (single string), directives (N strings)
import {
  cspJSON,
  cspHeader,
  cspDirectives
} from '@jackdbd/content-security-policy'

// the Content-Security-Policy header is made of directives.
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

const obj = await cspJSON({ directives, patterns })
console.log(`Content-Security-Policy (as Object)`)
console.log(obj)

const header = await cspHeader({ directives, patterns })
console.log(`Content-Security-Policy (as header)`)
console.log(header)

const strings = await cspDirectives({ directives, patterns })
console.log(`Content-Security-Policy (as strings)`)
console.log(strings)
```

## Configuration

The `cspJSON`, `cspHeader` and `cspDirectives` functions require an object that contains `directives` and `patterns`.

| Parameter | Explanation |
| --- | --- |
| `directives` | [Directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#directives) for the Content-Security-Policy (or Content-Security-Policy-Report-Only) header. |
| `patterns` | glob patterns for your `.html` files. |

{{pkg.docs}}

{{pkg.deps}}

{{engines.node}}

{{troubleshooting}}

## Alternatives

- [netlify-plugin-csp-generator](https://github.com/MarcelloTheArcane/netlify-plugin-csp-generator). It uses [jsdom](https://github.com/jsdom/jsdom) to find all inlined CSS/JS snippets in your website, it computes a SHA-256 for each one of them, then it appends the CSP to your `_headers` file. Really cool, but you have to host you site on Netlify to use it.
- [seespee](https://github.com/papandreou/seespee). It uses [AssetGraph](https://github.com/assetgraph/assetgraph) to build a dependency graph of your website, then it computes hashes for the assets included in such graph.

{{pkg.license}}
