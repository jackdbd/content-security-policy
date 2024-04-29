# content-security-policy

{{badges}}

{{pkg.description}}

<!-- toc -->

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

## Installation

```sh
npm install @jackdbd/content-security-policy
```

## Usage

Let's suppose you have an Eleventy site that has the following characteristics:

- fonts self-hosted on your origin
- stylesheets self-hosted on your origin. No CSS inlined in the `<head>`
- a few event handlers inlined in the HTML
- a few images hosted on a CDN

If your Eleventy site was generated in the `_site` folder, you could generate a `Content-Security-Policy` header with this code:

```js
import path from 'node:path'
import { cspHeader } from '@jackdbd/content-security-policy'

const directives = {
  'base-uri': ['self'],
  'default-src': ['none'],
  'font-src': ['self'],
  'img-src': ['self', 'cdn.example.com'],
  'script-src-attr': ['self', 'unsafe-hashes', 'sha256'],
  'style-src-elem': ['self']
}

const patterns = [path.join('_site', '**/*.html')]

const header = await cspHeader({ directives, patterns })
```

The Content-Security-Policy header is made of directives. If you don't know where to start, use one of the following policies:

```js
import {
  starter_policy,
  recommended_policy
} from '@jackdbd/content-security-policy/policies'

const directives = recommended_policy
```

{{configuration}}

{{pkg.docs}}

{{pkg.deps}}

{{engines.node}}

{{troubleshooting}}

## Alternatives

- [netlify-plugin-csp-generator](https://github.com/MarcelloTheArcane/netlify-plugin-csp-generator). It uses [jsdom](https://github.com/jsdom/jsdom) to find all inlined CSS/JS snippets in your website, it computes a SHA-256 for each one of them, then it appends the CSP to your `_headers` file. Really cool, but you have to host you site on Netlify to use it.
- [seespee](https://github.com/papandreou/seespee). It uses [AssetGraph](https://github.com/assetgraph/assetgraph) to build a dependency graph of your website, then it computes hashes for the assets included in such graph.

{{pkg.license}}
