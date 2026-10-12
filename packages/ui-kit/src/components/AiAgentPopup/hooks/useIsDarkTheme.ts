import { useEffect, useState } from 'react';

const readIsDark = () =>
  Boolean(
    document.documentElement
      .getAttribute('data-theme')
      ?.toLowerCase()
      .includes('dark'),
  );

/**
 * Тёмная ли активная тема (в data-theme на html есть «dark»).
 * Общий getActiveTheme не подходит: betaCoreDark он пока не знает.
 */
export const useIsDarkTheme = () => {
  const [isDark, setIsDark] = useState(readIsDark);

  useEffect(() => {
    setIsDark(readIsDark());

    const observer = new MutationObserver(() => setIsDark(readIsDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};
