/**
 * MORPHINK ARCHITECTS — Global Styles
 * Production-ready global styles function that outputs CSS custom properties,
 * resets, typography defaults, scrollbar, and interactive element styles.
 */

import { palette } from './palette';
import { GOOGLE_FONTS_URL } from './typography';

export const getGlobalStyles = (mode: 'light' | 'dark' = 'light'): string => {
  const activePalette = palette[mode];
  const surfaceColor = activePalette.background.surface;

  return `
@import url('${GOOGLE_FONTS_URL}');

:root {
  /* Brand Constants */
  --color-brand-lime: ${palette.brand.lime};
  --color-brand-lime-light: ${palette.brand.limeLight};
  --color-brand-lime-dark: ${palette.brand.limeDark};
  --color-brand-amber: ${palette.brand.amber};
  --color-brand-amber-light: ${palette.brand.amberLight};
  --color-brand-amber-dark: ${palette.brand.amberDark};
  --color-brand-ink: ${palette.brand.ink};
  --color-brand-ink-soft: ${palette.brand.inkSoft};
  --color-brand-concrete: ${palette.brand.concrete};
  --color-brand-fog: ${palette.brand.fog};

  /* Light Theme Palette Tokens */
  --color-bg-default: ${palette.light.background.default};
  --color-bg-paper: ${palette.light.background.paper};
  --color-bg-surface: ${palette.light.background.surface};
  --color-bg-elevated: ${palette.light.background.elevated};

  --color-text-primary: ${palette.light.text.primary};
  --color-text-secondary: ${palette.light.text.secondary};
  --color-text-disabled: ${palette.light.text.disabled};
  --color-text-inverse: ${palette.light.text.inverse};
  --color-text-accent: ${palette.light.text.accent};

  --color-border-default: ${palette.light.border.default};
  --color-border-subtle: ${palette.light.border.subtle};
  --color-border-strong: ${palette.light.border.strong};

  --color-status-success: ${palette.light.status.success};
  --color-status-warning: ${palette.light.status.warning};
  --color-status-error: ${palette.light.status.error};
  --color-status-info: ${palette.light.status.info};

  color-scheme: light;
}

[data-theme="dark"],
.dark {
  /* Dark Theme Palette Tokens */
  --color-bg-default: ${palette.dark.background.default};
  --color-bg-paper: ${palette.dark.background.paper};
  --color-bg-surface: ${palette.dark.background.surface};
  --color-bg-elevated: ${palette.dark.background.elevated};

  --color-text-primary: ${palette.dark.text.primary};
  --color-text-secondary: ${palette.dark.text.secondary};
  --color-text-disabled: ${palette.dark.text.disabled};
  --color-text-inverse: ${palette.dark.text.inverse};
  --color-text-accent: ${palette.dark.text.accent};

  --color-border-default: ${palette.dark.border.default};
  --color-border-subtle: ${palette.dark.border.subtle};
  --color-border-strong: ${palette.dark.border.strong};

  --color-status-success: ${palette.dark.status.success};
  --color-status-warning: ${palette.dark.status.warning};
  --color-status-error: ${palette.dark.status.error};
  --color-status-info: ${palette.dark.status.info};

  color-scheme: dark;
}

/* Box Sizing Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

/* HTML Base */
html {
  scroll-behavior: smooth;
  font-size: 16px;
}

/* Body Styling */
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: var(--color-bg-default, ${activePalette.background.default});
  color: var(--color-text-primary, ${activePalette.text.primary});
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  min-height: 100vh;
}

/* Selection */
::selection {
  background-color: rgba(141, 194, 31, 0.25);
  color: ${palette.brand.ink};
}

/* Scrollbar Styling */
* {
  scrollbar-width: thin;
  scrollbar-color: ${palette.brand.lime} ${surfaceColor};
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-surface, ${surfaceColor});
}

::-webkit-scrollbar-thumb {
  background: ${palette.brand.lime};
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${palette.brand.limeLight};
}

/* Focus-Visible Ring */
:focus-visible {
  outline: 2px solid ${palette.brand.lime};
  outline-offset: 2px;
}

/* Media Elements */
img, video {
  max-width: 100%;
  display: block;
}
`.trim();
};

export default getGlobalStyles;
