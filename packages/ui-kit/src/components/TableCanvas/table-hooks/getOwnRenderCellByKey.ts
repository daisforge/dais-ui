import { KEY_GROUPED_COL } from '../feature-rows-grouping';

/**
 * Есть ли у колонки своя отрисовка, по ключу колонки.
 * Группировка подменяет renderCell у всех колонок из настроек, поэтому признак
 * берём из настроек до группировки. Колонку группировки рисует свой renderCell
 * из groupedColumnProps, если он задан.
 */
export const getOwnRenderCellByKey = (
  columnConfig: readonly { key: unknown; renderCell?: unknown }[],
  groupedColumnRenderCell: unknown,
) => {
  const byKey = new Map<unknown, boolean>(
    columnConfig.map((c) => [c.key, c.renderCell !== undefined]),
  );
  byKey.set(KEY_GROUPED_COL, groupedColumnRenderCell !== undefined);
  return byKey;
};

/**
 * Своя ли отрисовка у ячейки подстроки. Без группировки её задаёт renderSubRowCell
 * колонки. Группировка ставит свой renderSubRowCell каждой колонке, а ячейку данных
 * он рисует renderCell из настроек, поэтому признак берём из настроек.
 */
export const getSubRowHasOwnRenderCell = ({
  columnsRegrouped,
  ownRenderCellByKey,
  key,
  renderSubRowCell,
}: {
  columnsRegrouped: boolean;
  ownRenderCellByKey: ReadonlyMap<unknown, boolean>;
  key: unknown;
  renderSubRowCell: unknown;
}) =>
  columnsRegrouped
    ? ownRenderCellByKey.get(key) === true
    : renderSubRowCell !== undefined;
