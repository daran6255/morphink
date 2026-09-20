import type { CSSProperties } from 'react'
import type { TypographyVariantsOptions } from '@mui/material/styles'

// ─── Morphink Architecture Typography System ──────────────────────────────────
// Font pairing philosophy:
//   • HEADINGS: "Lexend" — geometric, precise, architectural. The clean letterforms
//     mirror the structural precision of the Morphink "M" logomark. Exceptional
//     legibility at display sizes. Available from Google Fonts.
//   • BODY: "DM Sans" — rational, neutral, professional. A contemporary geometric
//     sans that complements Lexend without competing. Clear at small sizes.
// Both fonts should be loaded via <link> in index.html or via @fontsource packages.
// ─────────────────────────────────────────────────────────────────────────────

export const FONT_HEADING = "'Lexend', 'Helvetica Neue', Arial, sans-serif"
export const FONT_BODY = "'DM Sans', 'Helvetica Neue', Arial, sans-serif"

declare module '@mui/material/styles' {
  interface TypographyVariants {
    /** Hero-scale display text — largest typographic expression, for hero headlines. */
    display: CSSProperties
    /** ALL-CAPS eyebrow label — spaced uppercase for section labels and category tags. */
    eyebrow: CSSProperties
  }
  interface TypographyVariantsOptions {
    display?: CSSProperties
    eyebrow?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true
    eyebrow: true
  }
}

export const typography: TypographyVariantsOptions = {
  fontFamily: FONT_BODY,
  htmlFontSize: 16,

  // ── Display: Hero-scale — "Parametric Tower" headline sizes ──────────────
  display: {
    fontFamily: FONT_HEADING,
    fontWeight: 700,
    fontSize: 'clamp(3rem, 2.2rem + 3.5vw, 5rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.03em',
  },

  // ── Headings: Architectural grid scale ───────────────────────────────────
  h1: {
    fontFamily: FONT_HEADING,
    fontWeight: 700,
    fontSize: 'clamp(2.25rem, 1.8rem + 2vw, 3.75rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
  },
  h2: {
    fontFamily: FONT_HEADING,
    fontWeight: 700,
    fontSize: 'clamp(1.875rem, 1.5rem + 1.5vw, 2.875rem)',
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: FONT_HEADING,
    fontWeight: 600,
    fontSize: 'clamp(1.5rem, 1.3rem + 0.8vw, 2.25rem)',
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
  },
  h4: {
    fontFamily: FONT_HEADING,
    fontWeight: 600,
    fontSize: 'clamp(1.25rem, 1.1rem + 0.5vw, 1.75rem)',
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
  },
  h5: {
    fontFamily: FONT_HEADING,
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.3,
    letterSpacing: '-0.005em',
  },
  h6: {
    fontFamily: FONT_HEADING,
    fontWeight: 600,
    fontSize: '1.0625rem',
    lineHeight: 1.4,
  },

  // ── Body: Clean, rational body copy ──────────────────────────────────────
  subtitle1: {
    fontFamily: FONT_BODY,
    fontWeight: 500,
    fontSize: '1.125rem',
    lineHeight: 1.55,
    letterSpacing: '0.005em',
  },
  subtitle2: {
    fontFamily: FONT_BODY,
    fontWeight: 500,
    fontSize: '0.9375rem',
    lineHeight: 1.5,
  },
  body1: {
    fontFamily: FONT_BODY,
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.65,
  },
  body2: {
    fontFamily: FONT_BODY,
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  button: {
    fontFamily: FONT_BODY,
    fontWeight: 600,
    fontSize: '0.9375rem',
    lineHeight: 1.5,
    textTransform: 'none' as const,
    letterSpacing: '0.01em',
  },
  caption: {
    fontFamily: FONT_BODY,
    fontWeight: 400,
    fontSize: '0.8125rem',
    lineHeight: 1.45,
  },
  overline: {
    fontFamily: FONT_BODY,
    fontWeight: 700,
    fontSize: '0.6875rem',
    lineHeight: 1.5,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
  },

  // ── Custom Variants ───────────────────────────────────────────────────────
  eyebrow: {
    fontFamily: FONT_BODY,
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: 1.4,
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
  },
}
