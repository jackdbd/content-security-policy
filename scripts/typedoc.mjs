#!/usr/bin/env zx

/**
 * Usage
 *
 * From the repo root:
 * ./scripts/typedoc.mjs
 */
import "zx/globals";
// import { unscopedPackageName } from "./utils.mjs";

// const unscoped_name = await unscopedPackageName(process.env.PWD);

const package_root = process.env.PWD;
const library_entrypoint = path.join(package_root, "src", "index.ts");
const docs_out = path.join(package_root, "docs");

await $`typedoc ${library_entrypoint} \
--excludeInternal \
--excludePrivate \
--out ${docs_out} \
--theme default`;
