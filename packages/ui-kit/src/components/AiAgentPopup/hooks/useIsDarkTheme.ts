import { useEffect, useState } from 'react';

const readIsDark = () =>
  Boolean(
    document.documentElement
      .getAttribute('data-theme')
      ?.toLowerCase()
      .includes('dark'),
  );

/**
 * Тёмная ли сейчас тема. Признак: значение data-theme на html содержит
 * «dark», это накрывает и обычную тёмную тему, и бета-тёмную (betaCoreDark).
 * Общий хелпер getActiveTheme из '@ui-kit/utils' здесь не подходит:
 * бета-тёмную тему он не знает и считает её светлой.
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
