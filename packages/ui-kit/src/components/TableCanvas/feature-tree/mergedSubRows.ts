import type { ObjectForExtending } from '../types/utils.type';
import type { SubRows } from './types';

/**
 * subRows со слиянием: потребитель отдаёт дерево (`getSubRows`), а обёртка
 * разворачивает его в плоский список листьев и рисует колонки-предки
 * объединёнными ячейками (как `rowsGrouping.view: 'merged'`), используя тот же
 * механизм объединения. Разница только в источнике структуры: не значения
 * колонок, а готовое дерево от потребителя.
 */

/** Включён ли этот режим (есть view:'merged' и непустой mergedColumns). */
export const isMergedSubRowsView = <
  RowType extends ObjectForExtending,
  RowIdType extends string | number,
>(
  subRows: SubRows<RowType, RowIdType> | undefined,
): boolean =>
  subRows?.view === 'merged' && (subRows.mergedColumns?.length ?? 0) > 0;

/**
 * Разворачивает дерево в плоский список листьев и переносит значения предков в
 * поля колонок `mergedColumns`. На узле уровня `d` берём `node[mergedColumns[d]]`
 * и записываем это значение во все листья ниже. Дальше листья объединяются по
 * ключу пути (`createGroupPathValue`), поэтому одинаковые имена в разных ветках
 * не объединяются. Служебные ключи дерева в листья не добавляем — листья должны
 * рисоваться как обычные строки, без пути дерева и без стрелок.
 */
export function flattenSubRowsToMergedLeaves<
  RowType extends ObjectForExtending,
>(
  rows: readonly RowType[],
  getSubRows: (row: RowType) => RowType[] | undefined,
  mergedColumns: readonly string[],
): RowType[] {
  const out: RowType[] = [];

  const walk = (node: RowType, depth: number, stamp: Partial<RowType>) => {
    const levelKey =
      depth < mergedColumns.length ? mergedColumns[depth] : undefined;
    const nextStamp =
      levelKey !== undefined ? { ...stamp, [levelKey]: node[levelKey] } : stamp;

    const children = getSubRows(node);
    if (children && children.length) {
      children.forEach((child) => walk(child, depth + 1, nextStamp));
    } else {
      // Лист: его собственные поля плюс перенесённые значения предков.
      out.push({ ...node, ...nextStamp });
    }
  };

  rows.forEach((root) => walk(root, 0, {}));
  return out;
}
