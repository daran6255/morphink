/**
 * MORPHINK ARCHITECTS — Design Tokens & Gradients
 * Production-ready tokens for radius, border width, box shadows,
 * spacing, transitions, z-index, and linear/radial gradients.
 */

export const tokens = {
  radius: {
    none: '0px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    pill: '9999px',
    circle: '50%',
  },
  borderWidth: {
    none: '0px',
    thin: '1px',
    base: '1.5px',
    medium: '2px',
    thick: '3px',
    heavy: '4px',
  },
  shadow: {
    xs: '0 1px 2px rgba(26,26,46,0.06)',
    sm: '0 2px 6px rgba(26,26,46,0.08), 0 1px 2px rgba(26,26,46,0.04)',
    md: '0 4px 16px rgba(26,26,46,0.10), 0 2px 4px rgba(26,26,46,0.06)',
    lg: '0 8px 32px rgba(26,26,46,0.12), 0 4px 8px rgba(26,26,46,0.06)',
    xl: '0 16px 48px rgba(26,26,46,0.14), 0 8px 16px rgba(26,26,46,0.06)',
    '2xl': '0 24px 64px rgba(26,26,46,0.18), 0 12px 24px rgba(26,26,46,0.08)',
    inner: 'inset 0 2px 6px rgba(26,26,46,0.08)',
    lime: '0 4px 24px rgba(141,194,31,0.30)',
    amber: '0 4px 24px rgba(232,160,32,0.30)',
    limeLg: '0 8px 40px rgba(141,194,31,0.40)',
    amberLg: '0 8px 40px rgba(232,160,32,0.40)',
  },
  dark: {
    shadow: {
      xs: '0 1px 2px rgba(0,0,0,0.3)',
      sm: '0 2px 6px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)',
      md: '0 4px 16px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
      lg: '0 8px 32px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.3)',
      xl: '0 16px 48px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.3)',
      lime: '0 4px 24px rgba(141,194,31,0.45)',
      amber: '0 4px 24px rgba(232,160,32,0.45)',
    },
  },
  shadowDark: {
    xs: '0 1px 2px rgba(0,0,0,0.3)',
    sm: '0 2px 6px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)',
    md: '0 4px 16px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
    lg: '0 8px 32px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.3)',
    xl: '0 16px 48px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.3)',
    lime: '0 4px 24px rgba(141,194,31,0.45)',
    amber: '0 4px 24px rgba(232,160,32,0.45)',
  },
  spacing: {
    0: '0px',
    0.5: '4px',
    1: '8px',
    1.5: '12px',
    2: '16px',
    2.5: '20px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    8: '64px',
    10: '80px',
    12: '96px',
    16: '128px',
    20: '160px',
    24: '192px',
  },
  transition: {
    fast: '150ms ease-out',
    base: '250ms ease-out',
    slow: '400ms ease-out',
    spring: '350ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  zIndex: {
    below: -1,
    base: 0,
    raised: 10,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    toast: 500,
  },
} as const;

export const gradients = {
  linear: {
    limeToAmber: 'linear-gradient(135deg, #8DC21F 0%, #E8A020 100%)',
    amberToLime: 'linear-gradient(135deg, #E8A020 0%, #8DC21F 100%)',
    limeVertical: 'linear-gradient(180deg, #A8D840 0%, #6A9A14 100%)',
    amberVertical: 'linear-gradient(180deg, #F5BC50 0%, #B87A10 100%)',
    inkToSurface: 'linear-gradient(180deg, #0F0F1A 0%, #1A1A2E 100%)',
    surfaceToInk: 'linear-gradient(180deg, #FFFFFF 0%, #E4E4DC 100%)',
    heroDark: 'linear-gradient(135deg, #0F0F1A 0%, #22223A 60%, #1A1A2E 100%)',
    heroLight: 'linear-gradient(135deg, #FFFFFF 0%, #EEEEE8 60%, #E4E4DC 100%)',
    limeGlow: 'linear-gradient(135deg, rgba(141,194,31,0.15) 0%, rgba(141,194,31,0) 70%)',
    amberGlow: 'linear-gradient(135deg, rgba(232,160,32,0.15) 0%, rgba(232,160,32,0) 70%)',
    diagonal: 'linear-gradient(115deg, #8DC21F 0%, #A8D840 30%, #E8A020 70%, #F5BC50 100%)',
    diagonalSubtle: 'linear-gradient(115deg, rgba(141,194,31,0.2) 0%, rgba(232,160,32,0.2) 100%)',
  },
  radial: {
    limeSpot: 'radial-gradient(circle at 50% 50%, #A8D840 0%, #8DC21F 40%, transparent 70%)',
    amberSpot: 'radial-gradient(circle at 50% 50%, #F5BC50 0%, #E8A020 40%, transparent 70%)',
    limeGlow: 'radial-gradient(circle at 30% 30%, rgba(141,194,31,0.35) 0%, transparent 65%)',
    amberGlow: 'radial-gradient(circle at 70% 30%, rgba(232,160,32,0.35) 0%, transparent 65%)',
    inkDepth: 'radial-gradient(circle at 50% 0%, #22223A 0%, #0F0F1A 70%)',
    surfaceDepth: 'radial-gradient(circle at 50% 0%, #FFFFFF 0%, #F0F0EC 70%)',
    brandBurst: 'radial-gradient(circle at 50% 50%, #8DC21F 0%, #E8A020 50%, transparent 80%)',
    dualSpot: 'radial-gradient(circle at 20% 50%, rgba(141,194,31,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(232,160,32,0.3) 0%, transparent 50%)',
  },
} as const;

export type Tokens = typeof tokens;
export type Gradients = typeof gradients;
export type BorderRadius = typeof tokens.radius;
export type BorderWidth = typeof tokens.borderWidth;
export type BoxShadow = typeof tokens.shadow;
export type Spacing = typeof tokens.spacing;
export type Transition = typeof tokens.transition;
export type ZIndex = typeof tokens.zIndex;

import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

export const buildMuiTheme = (mode: 'light' | 'dark') => {
  const modeTokens = palette[mode];
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? palette.brand.lime : palette.brand.limeLight,
        light: palette.brand.limeLight,
        dark: palette.brand.limeDark,
        contrastText: '#1A1A2E',
      },
      secondary: {
        main: mode === 'light' ? palette.brand.amber : palette.brand.amberLight,
        light: palette.brand.amberLight,
        dark: palette.brand.amberDark,
        contrastText: '#1A1A2E',
      },
      accent: {
        main: modeTokens.text.accent,
        light: palette.brand.limeLight,
        dark: palette.brand.limeDark,
        contrastText: '#1A1A2E',
      },
      inverse: {
        main: palette.brand.ink,
        light: palette.brand.inkSoft,
        dark: '#0F0F1A',
        contrastText: palette.brand.concrete,
      },
      background: {
        default: modeTokens.background.default,
        paper: modeTokens.background.paper,
      },
      text: {
        primary: modeTokens.text.primary,
        secondary: modeTokens.text.secondary,
        disabled: modeTokens.text.disabled,
      },
      divider: modeTokens.border.default,
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      display: typography.displayLg,
      eyebrow: typography.overline,
      ...typography,
    },
    breakpoints: {
      values: breakpoints.values,
    },
    shape: { borderRadius: 8 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          section: {
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: mode === 'dark' ? modeTokens.background.default : '#FFFFFF',
            color: modeTokens.text.primary,
          },
        },
      },
    },
  });
};

export const buildTheme = buildMuiTheme;

