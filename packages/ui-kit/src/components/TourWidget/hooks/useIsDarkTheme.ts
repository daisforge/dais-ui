import { useEffect, useState } from 'react';

const readIsDark = () =>
  Boolean(
    document.documentElement
      .getAttribute('data-theme')
      ?.toLowerCase()
      .includes('dark'),
  );

/** Общий getActiveTheme пока не распознаёт betaCoreDark и highContrastDark. */
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
