<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@jackdbd/content-security-policy](./content-security-policy.md) &gt; [directives](./content-security-policy.directives.md)

## directives variable

**Signature:**

```typescript
directives: z.ZodObject<{
    'base-uri': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'child-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'connect-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'default-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'font-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'form-action': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'frame-ancestors': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'frame-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'img-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'manifest-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'media-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'navigate-to': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'object-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'report-to': z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    sandbox: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodLiteral<"allow-downloads">, z.ZodLiteral<"allow-downloads-without-user-activation">, z.ZodLiteral<"allow-forms">, z.ZodLiteral<"allow-modals">, z.ZodLiteral<"allow-orientation-lock">, z.ZodLiteral<"allow-pointer-lock">, z.ZodLiteral<"allow-popups">, z.ZodLiteral<"allow-popups-to-escape-sandbox">, z.ZodLiteral<"allow-presentation">, z.ZodLiteral<"allow-same-origin">, z.ZodLiteral<"allow-scripts">, z.ZodLiteral<"allow-storage-access-by-user-activation">, z.ZodLiteral<"allow-top-navigation">, z.ZodLiteral<"allow-top-navigation-by-user-activation">, z.ZodLiteral<"allow-top-navigation-to-custom-protocol">]>, "many">>;
    'script-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'script-src-attr': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'script-src-elem': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'source-values': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'style-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'style-src-attr': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'style-src-elem': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
    'upgrade-insecure-requests': z.ZodOptional<z.ZodBoolean>;
    'worker-src': z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodString, z.ZodUnion<[z.ZodLiteral<"http:">, z.ZodLiteral<"https:">, z.ZodString, z.ZodString, z.ZodString, z.ZodString]>, z.ZodUnion<[z.ZodLiteral<"sha256">, z.ZodLiteral<"sha384">, z.ZodLiteral<"sha512">]>, z.ZodString, z.ZodString, z.ZodLiteral<"none">, z.ZodLiteral<"report-sample">, z.ZodLiteral<"self">, z.ZodLiteral<"strict-dynamic">, z.ZodLiteral<"unsafe-eval">, z.ZodLiteral<"unsafe-hashes">, z.ZodLiteral<"unsafe-inline">, z.ZodLiteral<"wasm-unsafe-eval">]>, "many">, string[], string[]>>;
}, "strip", z.ZodTypeAny, {
    'base-uri'?: string[] | undefined;
    'child-src'?: string[] | undefined;
    'connect-src'?: string[] | undefined;
    'default-src'?: string[] | undefined;
    'font-src'?: string[] | undefined;
    'form-action'?: string[] | undefined;
    'frame-ancestors'?: string[] | undefined;
    'frame-src'?: string[] | undefined;
    'img-src'?: string[] | undefined;
    'manifest-src'?: string[] | undefined;
    'media-src'?: string[] | undefined;
    'navigate-to'?: string[] | undefined;
    'object-src'?: string[] | undefined;
    'report-to'?: string[] | undefined;
    sandbox?: ("allow-downloads" | "allow-downloads-without-user-activation" | "allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation" | "allow-top-navigation-to-custom-protocol")[] | undefined;
    'script-src'?: string[] | undefined;
    'script-src-attr'?: string[] | undefined;
    'script-src-elem'?: string[] | undefined;
    'source-values'?: string[] | undefined;
    'style-src'?: string[] | undefined;
    'style-src-attr'?: string[] | undefined;
    'style-src-elem'?: string[] | undefined;
    'upgrade-insecure-requests'?: boolean | undefined;
    'worker-src'?: string[] | undefined;
}, {
    'base-uri'?: string[] | undefined;
    'child-src'?: string[] | undefined;
    'connect-src'?: string[] | undefined;
    'default-src'?: string[] | undefined;
    'font-src'?: string[] | undefined;
    'form-action'?: string[] | undefined;
    'frame-ancestors'?: string[] | undefined;
    'frame-src'?: string[] | undefined;
    'img-src'?: string[] | undefined;
    'manifest-src'?: string[] | undefined;
    'media-src'?: string[] | undefined;
    'navigate-to'?: string[] | undefined;
    'object-src'?: string[] | undefined;
    'report-to'?: string[] | undefined;
    sandbox?: ("allow-downloads" | "allow-downloads-without-user-activation" | "allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation" | "allow-top-navigation-to-custom-protocol")[] | undefined;
    'script-src'?: string[] | undefined;
    'script-src-attr'?: string[] | undefined;
    'script-src-elem'?: string[] | undefined;
    'source-values'?: string[] | undefined;
    'style-src'?: string[] | undefined;
    'style-src-attr'?: string[] | undefined;
    'style-src-elem'?: string[] | undefined;
    'upgrade-insecure-requests'?: boolean | undefined;
    'worker-src'?: string[] | undefined;
}>
```
