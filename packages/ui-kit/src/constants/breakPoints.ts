export const breakPoints = {
  xs: 376,
  s: 768,
  m: 960,
  l: 1280,
  xl: 1920,
  xxl: 2560,
} as const;
export const breakP = breakPoints;
export type BreakPointsKeys = keyof typeof breakP;
export type BreakPointsObj = typeof breakP;
