import { useMemo } from 'react';

import { frozenFirst } from '../feature-column-control/columnsRenderOrder';
import type { BordersConfig } from '../types/table-config.type';
import type { ObjectForExtending } from '../types/utils.type';
import {
  type BorderCallbacks,
  buildBorderCallbacks,
} from './buildBorderCallbacks';

/**
 * Готовит колбэки управления рамками (verticalBorder, horizontalBorder,
 * getCellBorder) для передачи в glide. Колонки идут в том же порядке, в котором
 * их рисует grid (закреплённые в начале). Точечная настройка вертикали приходит
 * из tableConfig.borders.getVerticalBorder. rowsRef с отображаемыми строками
 * читается в момент отрисовки, поэтому колбэки не пересоздаются при смене данных.
 */
export const useBorders = <RowType extends ObjectForExtending>({
  borders,
  reorderedColumns,
  rowsRef,
}: {
  borders: BordersConfig<RowType> | undefined;
  reorderedColumns: ReadonlyArray<{
    key: string;
    frozen?: boolean;
  }>;
  rowsRef: { readonly current: readonly RowType[] };
}): BorderCallbacks => {
  // Порядок отрисовки колонок (закреплённые в начале) берём из общей функции
  // frozenFirst - того же источника, что useColumns и индикатор скрытых колонок,
  // чтобы правило жило в одном месте.
  const orderedColumnKeys = useMemo<string[]>(
    () => frozenFirst(reorderedColumns, (c) => !!c.frozen).map((c) => c.key),
    [reorderedColumns],
  );

  return useMemo(
    () => buildBorderCallbacks({ borders, orderedColumnKeys, rowsRef }),
    [borders, orderedColumnKeys, rowsRef],
  );
};
