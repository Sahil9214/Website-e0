/**
 * Canonical site origin for sitemap, robots, and metadata.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.yourdomain.org).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, "")
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return "http://localhost:3000"
}
