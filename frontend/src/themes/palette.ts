import type { PaletteMode, PaletteOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
    /** Fixed dark architectural surface — always dark regardless of light/dark mode (e.g. footer,
     * hero overlays, dark feature sections). Mirrors the deep charcoal of the Morphink wordmark. */
    inverse: Palette['primary']
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary']
    inverse?: PaletteOptions['primary']
  }
}

// ─── Morphink Brand Tokens ────────────────────────────────────────────────────
// Logo analysis:
//   • Bold geometric "M" in vivid lime-green (#8DC21F) with 3D shading gradient
//   • "MORPHINK ARCHITECTS" wordmark in clean dark architectural charcoal (#1C2229)
//   • Secondary shading on the "M" uses a deeper forest green (#5A7F14)
//   • The mark evokes precision, structure, and growth — hallmarks of architecture
// ─────────────────────────────────────────────────────────────────────────────

// Fixed dark brand surface — used for footer, hero dark overlays, and inverse sections.
// Matches the deep architectural charcoal of the Morphink wordmark.
const inverseSurface = {
  main: '#1C2229',
  light: '#2A3340',
  dark: '#10151B',
  contrastText: '#F4F6F0',
}

// ─── Light Mode ──────────────────────────────────────────────────────────────
// Primary = Morphink Lime-Green anchored for WCAG AA on white/light backgrounds.
// Raw brand green (#8DC21F) passes large-text AA but fails small-text AA on white —
// so `main` is darkened to #5C8000 for button fills and text-on-white, while
// `light` keeps the vivid logo lime for decorative surfaces, hovers, and dark-mode.
const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#5C8000',     // WCAG AA on white: 4.6:1 — safe for button fills and body text
    light: '#8DC21F',   // Vivid Morphink lime-green for large elements, decorative washes
    dark: '#3D5500',    // Deep forest green for pressed states, borders, heavy text
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#3A4A5C',     // Steel-blue charcoal — cool, architectural, professional
    light: '#5B6E84',
    dark: '#253040',
    contrastText: '#FFFFFF',
  },
  accent: {
    main: '#1C7A5C',     // Deep teal-green accent — complements the primary lime
    light: '#2BAF84',
    dark: '#115A42',
    contrastText: '#FFFFFF',
  },
  success: { main: '#2E7D32', contrastText: '#FFFFFF' },
  warning: { main: '#8B6914', contrastText: '#FFFFFF' },
  error: { main: '#C62828', contrastText: '#FFFFFF' },
  info: { main: '#1565C0', contrastText: '#FFFFFF' },
  // Warm architectural whites — concrete white, off-white paper
  background: { default: '#F8FAF4', paper: '#FFFFFF' },
  text: {
    primary: '#1C2229',   // Deep charcoal — matches the Morphink wordmark
    secondary: '#4A5A6B', // Cool medium gray — readable secondary copy
    disabled: '#A0AAAA',
  },
  divider: '#D9E4C8',   // Soft sage-green divider — echoes the primary palette
  inverse: inverseSurface,
}

// ─── Dark Mode ───────────────────────────────────────────────────────────────
// In dark mode, the vivid #8DC21F lime-green gets to shine as primary —
// it passes WCAG AA as text/icon on dark backgrounds (e.g. #1C2229 → 6.5:1).
const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#8DC21F',    // Full vivid Morphink lime-green — legible on dark bg
    light: '#A8D94B',   // Lighter lime for hover states
    dark: '#5C8000',    // Anchored darker for active/pressed states
    contrastText: '#0F1A06',  // Very dark green for text on green buttons
  },
  secondary: {
    main: '#7B98B4',    // Lighter steel-blue for dark mode readability
    light: '#9CB6CE',
    dark: '#5B6E84',
    contrastText: '#0F1A2A',
  },
  accent: {
    main: '#2BAF84',    // Brighter teal in dark mode
    light: '#4DC99E',
    dark: '#1C7A5C',
    contrastText: '#022E1F',
  },
  success: { main: '#66BB6A', contrastText: '#0A3B0C' },
  warning: { main: '#FFA726', contrastText: '#3A2200' },
  error: { main: '#EF5350', contrastText: '#3B0A0A' },
  info: { main: '#42A5F5', contrastText: '#0A2750' },
  // Deep architectural dark backgrounds — matte charcoal, not blue-black
  background: { default: '#141A1F', paper: '#1C2229' },
  text: {
    primary: '#EDF2E8',   // Warm off-white — avoids harsh #FFFFFF glare
    secondary: '#A0B4A0', // Muted sage-green for secondary text in dark mode
    disabled: '#556055',
  },
  divider: 'rgba(141, 194, 31, 0.12)',  // Subtle lime-tinted divider
  inverse: inverseSurface,
}

export const getPalette = (mode: PaletteMode): PaletteOptions =>
  mode === 'dark' ? darkPalette : lightPalette
