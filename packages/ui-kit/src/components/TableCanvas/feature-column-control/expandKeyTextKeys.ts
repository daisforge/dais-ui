import { KeyTextMap } from '../feature-key-text/types';

/**
 * Разворачивает ключи столбцов с парой key/text в оба ключа пары. Повторы
 * убираются. Если разворачивать нечего, возвращается тот же массив, чтобы не
 * менять ссылку и не запускать лишние пересчёты.
 */
export const expandKeyTextKeys = (
  keys: string[],
  colsWithKeyTextMap: KeyTextMap,
  tableConfigKeyTextBoolean: boolean,
): string[] => {
  if (!tableConfigKeyTextBoolean || !colsWithKeyTextMap.size) return keys;

  const expanded = new Set<string>();
  keys.forEach((key) => {
    const pair = colsWithKeyTextMap.get(key);
    if (pair) {
      expanded.add(pair.keyKey);
      expanded.add(pair.textKey);
    } else {
      expanded.add(key);
    }
  });

  const nothingToExpand =
    expanded.size === keys.length && new Set(keys).size === keys.length;

  return nothingToExpand ? keys : Array.from(expanded);
};
