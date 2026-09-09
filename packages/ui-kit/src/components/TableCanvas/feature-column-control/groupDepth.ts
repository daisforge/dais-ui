/**
 * Высота полосы индикатора скрытых столбцов в сгруппированной шапке.
 *
 * Форк ждёт число `groupDepth` — сколько ВЕРХНИХ групп-рядов пропустить сверху (не
 * рисовать на них полосу). Модель высоты — минимум из двух ограничений:
 *  - «хотелка» скрытого набора: если среди скрытых есть большая колонка (без группы,
 *    рисуется во всю высоту) — хочет на всю высоту; если все скрытые это листья внутри
 *    групп — хочет маленькую (только листовой ряд);
 *  - «разрешение» соседей: насколько высок разделитель между двумя видимыми соседями
 *    (по непрерывности их групп).
 *
 * В терминах groupDepth это выражается так:
 *  - нет большой (все листья) → пропускаем ВСЕ групп-ряды (полоса в листовом ряду);
 *  - есть большая → пропускаем общий префикс групп двух соседей (полоса от низа общей
 *    группы вниз; если общей группы нет — 0, на всю высоту).
 */

type AnyColumnOrGroup = {
  key: string;
  children?: readonly AnyColumnOrGroup[];
};

/**
 * Карта «ключ листа -> путь групп над ним» (ключи групп сверху вниз) по дереву
 * конфигурации колонок. Листья без групп получают пустой путь.
 */
export const buildGroupPathByKey = (
  columnConfig: readonly AnyColumnOrGroup[],
): Map<string, string[]> => {
  const result = new Map<string, string[]>();

  const walk = (nodes: readonly AnyColumnOrGroup[], path: string[]) => {
    nodes.forEach((node) => {
      if (node.children && node.children.length > 0) {
        walk(node.children, [...path, node.key]);
      } else {
        result.set(node.key, path);
      }
    });
  };

  walk(columnConfig, []);
  return result;
};

/** Максимальная глубина групп в таблице (сколько групп-рядов в шапке). */
export const getMaxGroupLevels = (
  groupPathByKey: ReadonlyMap<string, string[]>,
): number => {
  let max = 0;
  groupPathByKey.forEach((path) => {
    if (path.length > max) max = path.length;
  });
  return max;
};

/**
 * Сколько верхних групп-рядов пропустить для полосы на данной границе.
 * hiddenKeys — скрытые столбцы промежутка; leftKey/rightKey — видимые соседи слева и
 * справа от линии (undefined на краю таблицы); levels — всего групп-рядов.
 */
export const computeGroupDepth = ({
  hiddenKeys,
  leftKey,
  rightKey,
  groupPathByKey,
  levels,
}: {
  hiddenKeys: readonly string[];
  leftKey: string | undefined;
  rightKey: string | undefined;
  groupPathByKey: ReadonlyMap<string, string[]>;
  levels: number;
}): number => {
  // Есть ли среди скрытых большая колонка (без группы, во всю высоту).
  const hasBig = hiddenKeys.some(
    (key) => (groupPathByKey.get(key) ?? []).length === 0,
  );
  // Все скрытые — листья: полоса только в листовом ряду (пропускаем все групп-ряды).
  if (!hasBig) return levels;

  // Есть большая: пропускаем общий префикс групп двух видимых соседей (полоса тянется
  // вверх до низа общей группы; если общей нет — 0, на всю высоту).
  const leftPath =
    leftKey !== undefined ? groupPathByKey.get(leftKey) ?? [] : [];
  const rightPath =
    rightKey !== undefined ? groupPathByKey.get(rightKey) ?? [] : [];
  let k = 0;
  while (
    k < leftPath.length &&
    k < rightPath.length &&
    leftPath[k] === rightPath[k]
  ) {
    k += 1;
  }
  return k;
};
