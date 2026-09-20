/**
 * MORPHINK ARCHITECTS — Color Palette System
 * Brand, light mode, and dark mode design tokens.
 * All color values strictly in hex.
 */

export const palette = {
  brand: {
    lime: '#8DC21F', // Logo M green — primary brand
    limeLight: '#A8D840', // Hover/highlight lime
    limeDark: '#6A9A14', // Deep lime for dark surfaces
    amber: '#E8A020', // Pen nib gold — accent energy
    amberLight: '#F5BC50', // Light amber for gradients
    amberDark: '#B87A10', // Deep amber for dark mode accent
    ink: '#1A1A2E', // Deep architectural ink — near-black
    inkSoft: '#2D2D44', // Slightly lifted ink
    concrete: '#F0F0EC', // Off-white architectural paper tone
    fog: '#E4E4DC', // Muted light surface
  },
  light: {
    background: {
      default: '#F7F7F3', // warm architectural paper
      paper: '#FFFFFF',
      surface: '#EEEEE8',
      elevated: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E', // brand.ink
      secondary: '#4A4A5E',
      disabled: '#9A9AAE',
      inverse: '#FFFFFF',
      accent: '#8DC21F', // lime for highlights
    },
    border: {
      default: '#D4D4CC',
      subtle: '#E8E8E0',
      strong: '#8DC21F', // lime border emphasis
    },
    status: {
      success: '#4CAF50',
      warning: '#E8A020', // reuse amber
      error: '#D32F2F',
      info: '#1976D2',
    },
  },
  dark: {
    background: {
      default: '#0F0F1A', // deep ink base
      paper: '#1A1A2E', // brand.ink
      surface: '#22223A',
      elevated: '#2D2D4A',
    },
    text: {
      primary: '#F0F0EC', // brand.concrete
      secondary: '#AAAABB',
      disabled: '#555566',
      inverse: '#1A1A2E',
      accent: '#A8D840', // brighter lime for dark mode
    },
    border: {
      default: '#3A3A52',
      subtle: '#2D2D44',
      strong: '#8DC21F',
    },
    status: {
      success: '#66BB6A',
      warning: '#F5BC50',
      error: '#EF5350',
      info: '#42A5F5',
    },
  },
} as const;

export type Palette = typeof palette;
export type BrandColors = typeof palette.brand;
export type ColorMode = 'light' | 'dark';
export type ModePalette = typeof palette.light;
export type BackgroundTokens = typeof palette.light.background;
export type TextTokens = typeof palette.light.text;
export type BorderTokens = typeof palette.light.border;
export type StatusTokens = typeof palette.light.status;
