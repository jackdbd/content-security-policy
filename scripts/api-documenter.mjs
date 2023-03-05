#!/usr/bin/env zx

/**
 * Usage
 *
 * From the repo root:
 * ./scripts/api-documenter.mjs
 */
import 'zx/globals'

const package_root = process.env.PWD
const input_folder = path.join(package_root, '.ae', 'doc')
const output_folder = path.join(package_root, 'api-docs')

await $`api-documenter markdown --input-folder ${input_folder} --output-folder ${output_folder}`
