/**
 * MORPHINK ARCHITECTS — Theme Mode Provider & Hook
 * Manages light / dark mode state, persistence in localStorage ("morphink-theme"),
 * and system preference detection with zero third-party dependencies beyond React.
 */

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { getGlobalStyles } from './globalStyles';
import type { ColorMode } from './palette';

const STORAGE_KEY = 'morphink-theme';

export interface ThemeModeContextValue {
  mode: ColorMode;
  toggleMode: () => void;
  setMode: (mode: ColorMode) => void;
}

export const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

const getInitialMode = (): ColorMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // Fallback if localStorage or matchMedia is restricted
  }

  return 'light';
};

export interface ThemeModeProviderProps {
  children: ReactNode;
  initialMode?: ColorMode;
}

export const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({
  children,
  initialMode,
}) => {
  const [mode, setModeState] = useState<ColorMode>(() => initialMode || getInitialMode());

  const setMode = (newMode: ColorMode) => {
    setModeState(newMode);
  };

  const toggleMode = () => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore write errors in restricted environments
    }

    const root = document.documentElement;
    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
    } else {
      root.removeAttribute('data-theme');
      root.classList.remove('dark');
    }
  }, [mode]);

  // Listen to system preference changes when not explicitly overridden
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          setModeState(e.matches ? 'dark' : 'light');
        }
      } catch {
        setModeState(e.matches ? 'dark' : 'light');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else if ('addListener' in mediaQuery) {
      // Deprecated fallback for older browsers
      (mediaQuery as any).addListener(handleChange);
      return () => (mediaQuery as any).removeListener(handleChange);
    }
  }, []);

  const value = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      toggleMode,
      setMode,
    }),
    [mode]
  );

  const globalStyles = useMemo(() => getGlobalStyles(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <style id="morphink-global-theme-styles" dangerouslySetInnerHTML={{ __html: globalStyles }} />
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = (): ThemeModeContextValue => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};

// Aliased export for backwards compatibility
export const AppThemeProvider = ThemeModeProvider;

export default ThemeModeProvider;
