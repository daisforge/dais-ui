import { createContext } from 'react';

import { DEFAULT_BREAKPOINT, DEFAULT_BREAKPOINT_CONFIG } from './const';
import { IBreakpointContext } from './types';

export const BreakpointContext = createContext<IBreakpointContext>({
  breakpoint: DEFAULT_BREAKPOINT,
  breakpointConfig: DEFAULT_BREAKPOINT_CONFIG,
});
