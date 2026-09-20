/**
 * MORPHINK ARCHITECTS — Typography System
 * Google Fonts:
 *   - Heading: Allerta Stencil (400)
 *   - Subtitle: Space Grotesk (300, 400, 500, 600)
 *   - Body: Inter (300, 400, 500)
 * All font weights strictly <= 600.
 */

export const FONT_HEADING = "'Allerta Stencil', sans-serif" as const;
export const FONT_SUBTITLE = "'Space Grotesk', sans-serif" as const;
export const FONT_BODY = "'Inter', sans-serif" as const;
export const FONT_CODE = "monospace" as const;

export const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Space+Grotesk:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap' as const;

export const typography = {
  displayXl: {
    fontFamily: FONT_HEADING,
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: 400,
    lineHeight: 1.05,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  displayLg: {
    fontFamily: FONT_HEADING,
    fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
    fontWeight: 400,
    lineHeight: 1.08,
    letterSpacing: '0.035em',
    textTransform: 'uppercase',
  },
  h1: {
    fontFamily: FONT_HEADING,
    fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
    fontWeight: 400,
    lineHeight: 1.1,
    letterSpacing: '0.03em',
  },
  h2: {
    fontFamily: FONT_HEADING,
    fontSize: 'clamp(1.5rem, 2.8vw, 2.125rem)',
    fontWeight: 400,
    lineHeight: 1.15,
    letterSpacing: '0.025em',
  },
  h3: {
    fontFamily: FONT_HEADING,
    fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '0.02em',
  },
  h4: {
    fontFamily: FONT_HEADING,
    fontSize: 'clamp(1.1rem, 1.8vw, 1.375rem)',
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: '0.018em',
  },
  h5: {
    fontFamily: FONT_HEADING,
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: '0.015em',
  },
  h6: {
    fontFamily: FONT_HEADING,
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.35,
    letterSpacing: '0.012em',
  },
  subtitle1: {
    fontFamily: FONT_SUBTITLE,
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  subtitle2: {
    fontFamily: FONT_SUBTITLE,
    fontSize: '0.9375rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  subtitle3: {
    fontFamily: FONT_SUBTITLE,
    fontSize: '0.8125rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.015em',
  },
  bodyLg: {
    fontFamily: FONT_BODY,
    fontSize: '1.0625rem',
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.008em',
    maxWidth: '68ch',
  },
  body: {
    fontFamily: FONT_BODY,
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.7,
    letterSpacing: '0.008em',
    maxWidth: '68ch',
  },
  bodySm: {
    fontFamily: FONT_BODY,
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.65,
    letterSpacing: '0.01em',
  },
  caption: {
    fontFamily: FONT_BODY,
    fontSize: '0.8125rem',
    fontWeight: 300,
    lineHeight: 1.6,
    letterSpacing: '0.015em',
  },
  overline: {
    fontFamily: FONT_SUBTITLE,
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: FONT_SUBTITLE,
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  buttonSm: {
    fontFamily: FONT_SUBTITLE,
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  label: {
    fontFamily: FONT_BODY,
    fontSize: '0.8125rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.02em',
  },
  code: {
    fontFamily: FONT_CODE,
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0em',
  },
} as const;

export type Typography = typeof typography;
export type TypographyVariant = keyof typeof typography;
export type TypographyStyle = Typography[TypographyVariant];
