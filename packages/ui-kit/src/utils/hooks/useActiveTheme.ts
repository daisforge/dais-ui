import { useEffect, useState } from 'react';

import { getActiveTheme } from '../getActiveTheme';

// const queueMacrotask = (cb: () => void) => setTimeout(cb, 1);

/**
 * @returns значение активной темы
 */
export const useActiveTheme = () => {
  const [theme, setTheme] = useState(() => getActiveTheme() ?? 'light');

  useEffect(() => {
    setTheme(getActiveTheme());

    const observer = new MutationObserver(() => setTheme(getActiveTheme()));

    observer.observe(document.documentElement, {
      childList: false,
      attributes: true,
      attributeFilter: ['data-theme'],
      subtree: false,
    });

    return () => observer?.disconnect?.();
  }, []);

  return theme;
};
