import React, { useEffect, useMemo, useState } from 'react';

import { BreakpointContext } from './BreackpointContext';
import { DEFAULT_BREAKPOINT, DEFAULT_BREAKPOINT_CONFIG } from './const';
import { MediaProvider } from './MediaProvider';
import { Breakpoint, BreakpointProviderProps } from './types';

export const BreakpointProvider: React.FC<BreakpointProviderProps> = ({
  children,
  breakpointConfig = DEFAULT_BREAKPOINT_CONFIG
}) => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(DEFAULT_BREAKPOINT);

  // Подписка на изменение ширины экрана с помощью matchMedia (срабатывает только при пересечении определенных границ)
  useEffect(() => {
    const mediaQueryLists = Object.entries(breakpointConfig).map(
      ([key, value]) => ({
        key: key as Breakpoint,
        mql: window.matchMedia(`(max-width: ${value}px)`)
      })
    );

    const handleBreakpointChange = () => {
      const newBreakpoint =
        mediaQueryLists.find(({ mql }) => mql.matches)?.key ||
        DEFAULT_BREAKPOINT;
      setBreakpoint(newBreakpoint);
    };

    handleBreakpointChange();

    mediaQueryLists.forEach(({ mql }) => {
      mql.addEventListener('change', handleBreakpointChange);
    });

    return () => {
      mediaQueryLists.forEach(({ mql }) => {
        mql.removeEventListener('change', handleBreakpointChange);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const providerValue = useMemo(
    () => ({ breakpoint, breakpointConfig }),
    [breakpoint, breakpointConfig]
  );

  return (
    <BreakpointContext.Provider value={providerValue}>
      <MediaProvider breakpointConfig={breakpointConfig}>
        {children}
      </MediaProvider>
    </BreakpointContext.Provider>
  );
};
