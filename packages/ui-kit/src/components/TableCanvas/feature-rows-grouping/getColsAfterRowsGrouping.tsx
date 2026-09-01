import { ColumnConfig, ObjectForExtending, RenderCellProps } from '../types';
import { KEY_GROUPED_COL } from './constants';
import { RowsGroupingRenderCell } from './RowsGroupingRenderCell';
import { RowsGrouping } from './types';

export function getColsAfterRowsGrouping<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  rowsGroupingIsActiveInConfig,
  groupByArr,
  columnConfig,
  tableConfigGroupedColumnProps,
  pinnedCols,
  mergedView,
}: {
  rowsGroupingIsActiveInConfig: boolean;
  groupByArr: string[];
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  tableConfigGroupedColumnProps: RowsGrouping<
    RowType,
    SummaryRowType
  >['groupedColumnProps'];
  pinnedCols: string[];
  /** Вид со слиянием: колонки не трогаем — блоки рисует внутреннее объединение. */
  mergedView?: boolean;
}) {
  if (
    !rowsGroupingIsActiveInConfig ||
    !groupByArr ||
    groupByArr.length === 0 ||
    mergedView
  ) {
    return columnConfig;
  }
  const { renderCell, rowsGrouping, ...restTableConfigGroupedColumnProps } =
    tableConfigGroupedColumnProps ?? {};
  const groupedColRenderers = { renderCell, rowsGrouping };

  const groupCol = {
    key: KEY_GROUPED_COL,
    name: 'Группировка',
    frozen: pinnedCols.length > 0,
    dragable: false,

    ...restTableConfigGroupedColumnProps,
  } as ColumnConfig<RowType, SummaryRowType>;

  // добавляем колонку с группировкой и удаляем все сгруппированные
  const cols = [groupCol, ...columnConfig].filter(
    (c) => !groupByArr.some((k) => k === c.key),
  );

  return cols.map((col) => {
    const { rowsGrouping, renderCell, ...restCol } = col;

    return {
      ...restCol,
      renderCell: (renderCellProps: RenderCellProps<RowType, SummaryRowType>) =>
        RowsGroupingRenderCell({
          renderCellProps,
          rowsGrouping,
          col,
          groupByArr,
          groupedColRenderers,
        }),
      subRow: {
        isColumnWithArrow: col.key === groupCol.key,
        renderSubRowCell: (
          renderSubRowCellProps: RenderCellProps<RowType, SummaryRowType>,
        ) =>
          RowsGroupingRenderCell({
            renderCellProps: renderSubRowCellProps,
            rowsGrouping,
            col,
            groupByArr,
            groupedColRenderers,
          }),
      },
    };
  }) as readonly ColumnConfig<RowType, SummaryRowType>[];
}
