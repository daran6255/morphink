/**
 * MORPHINK ARCHITECTS — Breakpoints System
 * Screen breakpoints values and CSS media query helpers.
 */

export const values = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type BreakpointKey = keyof typeof values;
export type BreakpointValue = BreakpointKey | number;

const resolveBreakpointValue = (key: BreakpointValue): number => {
  if (typeof key === 'number') return key;
  return values[key];
};

export const up = (key: BreakpointValue): string => {
  const value = resolveBreakpointValue(key);
  return `@media (min-width: ${value}px)`;
};

export const down = (key: BreakpointValue): string => {
  const value = resolveBreakpointValue(key);
  return `@media (max-width: ${value - 0.02}px)`;
};

export const between = (start: BreakpointValue, end: BreakpointValue): string => {
  const startVal = resolveBreakpointValue(start);
  const endVal = resolveBreakpointValue(end);
  return `@media (min-width: ${startVal}px) and (max-width: ${endVal - 0.02}px)`;
};

export const breakpoints = {
  values,
  up,
  down,
  between,
} as const;

export type Breakpoints = typeof breakpoints;
export default breakpoints;
