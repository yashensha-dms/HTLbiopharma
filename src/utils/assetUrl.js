/**
 * Returns the correct public asset path regardless of deployment base.
 * In dev: /images/foo.png
 * In prod (GitHub Pages): /HTLbiopharma/images/foo.png
 */
export const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
