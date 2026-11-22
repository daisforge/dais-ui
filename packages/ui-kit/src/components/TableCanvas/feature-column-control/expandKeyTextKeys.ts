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

/**
 * Разворачивает скрытые столбцы в оба ключа пары key/text. Пара скрыта, только
 * если в списке есть её исходный ключ (textKey), одинокий ключ keyKey
 * пропускается. Так потребитель, который взял оба ключа из onConfirm.hidden,
 * снимает скрытие пары одним исходным ключом. Если менять нечего, возвращается
 * тот же массив.
 */
export const expandHiddenKeys = (
  keys: string[],
  colsWithKeyTextMap: KeyTextMap,
  tableConfigKeyTextBoolean: boolean,
): string[] => {
  if (!tableConfigKeyTextBoolean || !colsWithKeyTextMap.size) return keys;

  const expanded = new Set<string>();
  keys.forEach((key) => {
    const pair = colsWithKeyTextMap.get(key);
    if (!pair) {
      expanded.add(key);
    } else if (key === pair.textKey) {
      expanded.add(pair.keyKey);
      expanded.add(pair.textKey);
    }
  });

  // Размеров мало: выпавший второй ключ одной пары и добавленный второй ключ
  // другой пары дают тот же размер при другом составе.
  const nothingToChange =
    expanded.size === keys.length && keys.every((key) => expanded.has(key));

  return nothingToChange ? keys : Array.from(expanded);
};

/**
 * Обратное к expandKeyTextKeys: оба ключа пары key/text сводятся к исходному
 * ключу столбца (textKey). Так в состоянии всегда один ключ на пару, и
 * потребитель снимает скрытие одним ключом.
 */
export const collapseKeyTextKeys = (
  keys: string[],
  colsWithKeyTextMap: KeyTextMap,
  tableConfigKeyTextBoolean: boolean,
): string[] => {
  if (!tableConfigKeyTextBoolean || !colsWithKeyTextMap.size) return keys;

  const collapsed = new Set<string>();
  keys.forEach((key) => {
    collapsed.add(colsWithKeyTextMap.get(key)?.textKey ?? key);
  });

  return Array.from(collapsed);
};
