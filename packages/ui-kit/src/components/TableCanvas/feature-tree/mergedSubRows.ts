import type { ObjectForExtending } from '../types/utils.type';
import type { SubRows } from './types';

/**
 * Merged-вид для subRows: потребитель отдаёт дерево (`getSubRows`), а обёртка
 * разворачивает его в листья и рисует колонки-предки слитыми ячейками (как
 * `rowsGrouping.view: 'merged'`), переиспользуя ту же merge-машинерию. Отличие
 * только в источнике структуры: не значения колонок, а явное дерево потребителя.
 */

/** Активен ли merged-вид subRows (есть view:'merged' и непустой mergedColumns). */
export const isMergedSubRowsView = <
  RowType extends ObjectForExtending,
  RowIdType extends string | number,
>(
  subRows: SubRows<RowType, RowIdType> | undefined,
): boolean =>
  subRows?.view === 'merged' && (subRows.mergedColumns?.length ?? 0) > 0;

/**
 * Разворачивает дерево в ЛИСТЬЯ, денормализуя значения предков в поля колонок
 * `mergedColumns`. На узле уровня `d` берём `node[mergedColumns[d]]` и штампуем
 * его во все листья-потомки. Дальше эти листья сливаются grouping-merged путём
 * (по составному ключу пути `createGroupPathValue`), поэтому одинаковые имена в
 * разных ветках НЕ сливаются. Служебные tree-ключи НЕ инжектим — листья должны
 * рендериться как обычные строки (без tree-пути и шевронов).
 */
export function flattenSubRowsToMergedLeaves<RowType extends ObjectForExtending>(
  rows: readonly RowType[],
  getSubRows: (row: RowType) => RowType[] | undefined,
  mergedColumns: readonly string[],
): RowType[] {
  const out: RowType[] = [];

  const walk = (node: RowType, depth: number, stamp: Partial<RowType>) => {
    const levelKey = depth < mergedColumns.length ? mergedColumns[depth] : undefined;
    const nextStamp =
      levelKey !== undefined
        ? { ...stamp, [levelKey]: node[levelKey] }
        : stamp;

    const children = getSubRows(node);
    if (children && children.length) {
      children.forEach((child) => walk(child, depth + 1, nextStamp));
    } else {
      // Лист: собственные поля листа + денормализованные значения предков.
      out.push({ ...node, ...nextStamp });
    }
  };

  rows.forEach((root) => walk(root, 0, {}));
  return out;
}
