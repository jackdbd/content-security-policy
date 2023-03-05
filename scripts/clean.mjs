#!/usr/bin/env zx

/**
 * Usage
 *
 * From the repo root:
 * ./scripts/clean.mjs
 */
import 'zx/globals'

const package_root = process.env.PWD

const patterns = [
  path.join(package_root, '.ae', 'doc'),
  path.join(package_root, '.ae', 'temp'),
  path.join(package_root, 'coverage/'),
  path.join(package_root, 'lib/'),
  path.join(package_root, 'tsconfig.tsbuildinfo')
]

await $`rimraf ${patterns}`
