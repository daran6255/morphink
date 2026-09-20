import type { CSSProperties } from 'react';
import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    inverse: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    inverse?: PaletteOptions['primary'];
  }
  interface TypographyVariants {
    display: CSSProperties;
    eyebrow: CSSProperties;
  }
  interface TypographyVariantsOptions {
    display?: CSSProperties;
    eyebrow?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true;
    eyebrow: true;
  }
}
