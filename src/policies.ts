/**
 * Starter policy.
 *
 * @see [content-security-policy.com - Content Security Policy Reference](https://content-security-policy.com/)
 *
 * @public
 */
export const starter_policy = {
  'base-uri': ['self'],
  'connect-src': ['self'],
  'default-src': ['none'],
  'form-action': ['self'],
  'img-src': ['self'],
  'script-src': ['self'],
  'style-src': ['self']
}

/**
 * Recommended policy for most sites.
 *
 * @see [content-security-policy.com - Content Security Policy Reference](https://content-security-policy.com/)
 *
 * @remarks
 * Here are the differences with the starter policy:
 * - font-src is set to 'self', to allow self-hosted fonts
 * - frame-ancestors is set to 'none'
 * - manifest-src is set to 'self', to allow a self-hosted web application
 *   manifest,so the website can be installed as Progressive Web App.
 *   Learn more: https://developer.mozilla.org/en-US/docs/Web/Manifest
 * - object-src is set to 'none' as recommended here: https://csp.withgoogle.com/docs/strict-csp.html
 * - upgrade-insecure-requests is set to true, even if I am not sure it's
 *   really necessary, since it does NOT replace HSTS.
 *   Learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
 *
 * @public
 */
export const recommended_policy = {
  ...starter_policy,
  'font-src': ['self'],
  'frame-ancestors': ['none'],
  'manifest-src': ['self'],
  'object-src': ['none'],
  'upgrade-insecure-requests': true
}
