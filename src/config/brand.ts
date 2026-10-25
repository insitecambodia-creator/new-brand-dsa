/**
 * Central brand settings. Every value here is a PLACEHOLDER: the rebrand is confidential and
 * unknown to the project. Replace in one place when Franck supplies approved details.
 * Do not infer a name, domain, logo, palette or contact details.
 */
export const brand = {
  displayName: 'New Brand',
  /** Production URL. Intentionally undefined until confirmed; nothing may emit a placeholder domain. */
  siteUrl: import.meta.env.PUBLIC_SITE_URL as string | undefined,
  /** No logo supplied. The header renders the display name as text. */
  logo: null as null | { src: string; alt: string },
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },
  /** Prototype only: keep every page out of search indexes. Flip deliberately at launch. */
  noindex: true,
} as const;

/** Provisional navigation (docs/information-architecture.md). Hrefs point at sample routes only. */
export const navigation = [
  { label: 'Personal Insurance', href: '/sample/services/sample-service/' },
  { label: 'Employee Benefits', href: '/sample/services/sample-service/' },
  { label: 'Business Insurance', href: '/sample/services/sample-service/' },
  { label: 'Resources', href: '/sample/articles/sample-article/' },
  { label: 'About Us', href: '/#about' },
] as const;
