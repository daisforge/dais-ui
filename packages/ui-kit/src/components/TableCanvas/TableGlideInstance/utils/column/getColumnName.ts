/**
 * Утилита для получения имени колонки с правильным приоритетом.
 * Приоритет: name (если строка) → nameAsString → fallback
 */
export const getColumnName = ({
  name,
  nameAsString,
  fallback,
}: {
  name: string | unknown;
  nameAsString?: string;
  fallback: string;
}): string => {
  // Приоритет 1: name (если строка)
  if (typeof name === 'string') {
    return name;
  }

  // Приоритет 2: nameAsString (фоллбэк если name - JSX)
  if (typeof nameAsString === 'string') {
    return nameAsString;
  }

  // Приоритет 3: fallback значение
  return fallback;
};
