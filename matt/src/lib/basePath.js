/** Resolved at build time from `next.config.mjs` → `env.NEXT_PUBLIC_BASE_PATH`. */
export function publicUrl(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
