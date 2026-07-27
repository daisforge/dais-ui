import { useContext, useMemo } from 'react';

import { BreakpointContext } from './BreackpointContext';
import { Breakpoint, BreakpointReturn } from './types';

export const useBreakpoint = (): BreakpointReturn => {
  const { breakpoint, breakpointConfig } = useContext(BreakpointContext);

  const methods = useMemo(
    () => ({
      up: (token: Breakpoint) =>
        breakpointConfig[breakpoint] > breakpointConfig[token],
      down: (token: Breakpoint) =>
        breakpointConfig[breakpoint] < breakpointConfig[token],
      only: (token: Breakpoint) =>
        breakpointConfig[breakpoint] === breakpointConfig[token],
      not: (token: Breakpoint) =>
        breakpointConfig[breakpoint] !== breakpointConfig[token],
      between: (start: Breakpoint, end: Breakpoint) =>
        breakpointConfig[breakpoint] > breakpointConfig[start] &&
        breakpointConfig[breakpoint] < breakpointConfig[end]
    }),
    [breakpoint, breakpointConfig]
  );

  return { breakpoint, ...methods };
};
