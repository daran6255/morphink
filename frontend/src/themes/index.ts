/**
 * MORPHINK ARCHITECTS — Unified Theme System Entry Point
 * Exports palette, typography, tokens, gradients, breakpoints,
 * global styles, and ThemeModeProvider per specifications.
 */

export { palette } from './palette';
export type {
  Palette,
  BrandColors,
  ColorMode,
  ModePalette,
  BackgroundTokens,
  TextTokens,
  BorderTokens,
  StatusTokens,
} from './palette';

export {
  typography,
  FONT_HEADING,
  FONT_SUBTITLE,
  FONT_BODY,
  FONT_CODE,
  GOOGLE_FONTS_URL,
} from './typography';
export type {
  Typography,
  TypographyVariant,
  TypographyStyle,
} from './typography';

export { tokens, gradients } from './theme';
export type {
  Tokens,
  Gradients,
  BorderRadius,
  BorderWidth,
  BoxShadow,
  Spacing,
  Transition,
  ZIndex,
} from './theme';

export { breakpoints, values as breakpointValues, up, down, between } from './breakpoints';
export type { Breakpoints, BreakpointKey, BreakpointValue } from './breakpoints';

export { getGlobalStyles } from './globalStyles';

export {
  default as ThemeModeProvider,
  AppThemeProvider,
  useThemeMode,
  ThemeModeContext,
} from './ThemeModeProvider';
export type { ThemeModeContextValue, ThemeModeProviderProps } from './ThemeModeProvider';
