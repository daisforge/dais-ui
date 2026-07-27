import { DEFAULT_BREAKPOINT_CONFIG } from './const';
import { Breakpoint, BreakpointConfig, MediaQuery } from './types';

// Функция для создания медиазапросов
const createMediaQuery =
  (breakpoint: string): MediaQuery =>
  (style) =>
    `
    @media ${breakpoint} {
      ${style}
    }
  `;

const mapToRange = (
  breakpoints: BreakpointConfig
): Record<Breakpoint, { min: number; max: number }> => ({
  xs: { min: 0, max: breakpoints.xs - 1 },
  s: { min: breakpoints.xs + 1, max: breakpoints.s },
  m: { min: breakpoints.s + 1, max: breakpoints.m },
  l: { min: breakpoints.m + 1, max: breakpoints.l },
  xl: { min: breakpoints.l + 1, max: breakpoints.xl },
  xxl: { min: breakpoints.xl + 1, max: 100000 }
});

export const mediaUtils = (breakpoints: BreakpointConfig) => {
  const breakpointsRange = mapToRange(breakpoints);
  return {
    up: (token: Breakpoint) =>
      createMediaQuery(`(min-width: ${breakpointsRange[token].max + 1}px)`),
    down: (token: Breakpoint) =>
      createMediaQuery(`(max-width: ${breakpointsRange[token].min - 1}px)`),
    only: (token: Breakpoint) =>
      createMediaQuery(
        `(min-width: ${breakpointsRange[token].min}px) and (max-width: ${breakpointsRange[token].max}px)`
      ),
    not: (token: Breakpoint) =>
      createMediaQuery(
        `(max-width: ${breakpointsRange[token].min - 1}px), (min-width: ${
          breakpointsRange[token].max + 1
        }px)`
      ),
    between: (start: Breakpoint, end: Breakpoint) =>
      createMediaQuery(
        `(min-width: ${breakpointsRange[start].min}px) and (max-width: ${breakpointsRange[end].max}px)`
      ),

    exact: (min: number, max: number) =>
      createMediaQuery(`(min-width: ${min}px) and (max-width: ${max}px)`)
  };
};

export const media = mediaUtils(DEFAULT_BREAKPOINT_CONFIG);
