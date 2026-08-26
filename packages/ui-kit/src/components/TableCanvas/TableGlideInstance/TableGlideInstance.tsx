import {
  type ColumnGlideLast,
  GridCell,
  ProvideEditorCallback,
  SpanAlignment,
  TableGlide,
  TableGlideProps,
  Theme,
} from '@ui-kit/components/TableGlide';
import { useCallback, useMemo } from 'react';

import {
  HeaderContextValueTypeInstance,
  useColumnGroupContext,
  useExpandedRowsContext,
  useHeaderContext,
  useRowContext,
} from '../contexts';
import type { TransferColumnConfig } from '../feature-cell-transfer/types';
import { resolveBlock } from '../feature-cell-transfer/utils/resolveBlockOrigin';
import { TableContentStateOverlay } from '../feature-content-state';
import { useRowDetailHandlerContext } from '../feature-row-detail/ctx';
import { useSelectingRowContext } from '../feature-select-row/selecting-contexts';
import { CtxsType } from '../types/ctxs.type';
import { ObjectForExtending } from '../types/utils.type';
import { adaptColumn } from './adapters';
import type { CanvasEl, ContentFormat, TableGlideInstanceProps } from './type';
import { isGroupColumn } from './typeGuards';

export const TableGlideInstance = <R extends ObjectForExtending, SR = unknown>({
  columns,
  className,
  headerHeight = 33,
  onColumnResize,
  onVisibleRegionChanged,
  refTable,
  onCellContextMenu,
  onHeaderContextMenu,
  rows,
  portalEventTargetRef,
  containerProps,
  contentStateOverlay,
  renderOverlayFeatures,
  fullScreened,
  onRowsChange,
  CellReadOnlyEditor,
  onCellClicked: onCellClickedExternal,
  ...rest
}: TableGlideInstanceProps<R, SR>) => {
  const { columnsGlide, columnsInGlideOrder, frozenColsCount, groupMaxLength } =
    useMemo(() => {
      const frozenColumns: ColumnGlideLast<R, SR>[] = [];
      // Исходные колонки в порядке columnsGlide (frozen — в начало). Индексы от
      // glide маппим в конфиг через него, иначе при пине colInd укажет на чужую.
      const frozenOriginal: (typeof columns)[number][] = [];
      const restOriginal: (typeof columns)[number][] = [];
      let groupMaxLength = 0;

      const columnsGlide = columns.reduce<ColumnGlideLast<R, SR>[]>(
        (acc, column, _i) => {
          if (isGroupColumn(column)) {
            // не отрабатывает поскольку с уровня выше передается только последний уровень
            // Пропускаем группы колонок, они обрабатываются через Symbol
            return acc;
          }

          // Адаптируем колонку: преобразуем из ColumnGlideInstance в ColumnGlideLast
          const {
            column: glideColumn,
            groupLength,
            wasFrozen,
          } = adaptColumn({
            column,
          });

          // Обновляем максимальную длину группы
          if (groupLength > groupMaxLength) {
            groupMaxLength = groupLength;
          }

          if (wasFrozen) {
            frozenColumns.push(glideColumn);
            frozenOriginal.push(column);
            // не добавляем в acc сейчас, чтобы после reduce запушить вперед (чтобы не сортировать после)
            return acc;
          }

          acc.push(glideColumn);
          restOriginal.push(column);

          return acc;
        },
        [],
      );

      columnsGlide.unshift(...frozenColumns);

      return {
        frozenColsCount: frozenColumns.length,
        columnsGlide,
        columnsInGlideOrder: [...frozenOriginal, ...restOriginal],
        groupMaxLength,
      };
    }, [columns]);

  // ctxs
  const expandedRowsCtx = useExpandedRowsContext();
  const rowCtx = useRowContext();
  const headerCtx =
    useHeaderContext<HeaderContextValueTypeInstance<ObjectForExtending>>();
  const rowDetailCtx = useRowDetailHandlerContext();
  const selectingRowCtx = useSelectingRowContext();

  const { allGroupsMap } = useColumnGroupContext();

  // Выравнивание слитой шапки по ключу группы для getGroupDetails в TableGlide.
  const groupAlignMap = useMemo(() => {
    const map = new Map<string, SpanAlignment>();
    allGroupsMap.forEach((groupCfg, groupKey) => {
      if (groupCfg?.squashedHeaderAlign) {
        map.set(groupKey, groupCfg.squashedHeaderAlign);
      }
    });
    return map;
  }, [allGroupsMap]);

  const expandedRowsCtxMerged = useMemo(
    () => ({ ...expandedRowsCtx, ...rowDetailCtx }),
    [expandedRowsCtx, rowDetailCtx],
  );

  const ctxs: CtxsType = useMemo(
    () => ({
      headerCtx,
      expandedRowsCtx: expandedRowsCtxMerged,
      selectingRowCtx,
      rowCtx,
      headerHeight,
      groupHeaderLevels: groupMaxLength,
    }),
    [
      headerCtx,
      expandedRowsCtxMerged,
      selectingRowCtx,
      rowCtx,
      headerHeight,
      groupMaxLength,
    ],
  );

  const groupHeaderHeightArr = useMemo(
    () => Array.from({ length: groupMaxLength }, () => headerHeight),
    [groupMaxLength, headerHeight],
  );
  const shouldRenderFullContentState =
    contentStateOverlay?.displayMode === 'full-content';
  const contentStateTopOffset = useMemo(
    () =>
      shouldRenderFullContentState
        ? 0
        : headerHeight +
          groupHeaderHeightArr.reduce((acc, item) => acc + item, 0),
    [groupHeaderHeightArr, headerHeight, shouldRenderFullContentState],
  );

  const renderGroupHeader = useCallback<
    NonNullable<TableGlideProps<R, SR>['renderGroupHeader']>
  >(
    (args) => {
      const { groupName } = args;
      const column = allGroupsMap.get(groupName);
      if (!column) return 'default';

      const isStringName = typeof column?.name === 'string';
      if (isStringName) {
        return { defaultWithCustomGroupName: column.name };
      }

      return column?.name as CanvasEl;
    },
    [allGroupsMap],
  );

  const handleHeaderContextMenu = useCallback<
    NonNullable<TableGlideProps<R, SR>['onHeaderContextMenu']>
  >(
    (colIndex, event) => {
      const currentColumn = columnsInGlideOrder[colIndex];
      if (currentColumn) {
        onHeaderContextMenu?.(colIndex, event, {
          column: currentColumn,
          ctxs,
          refTable,
        });
      }
    },
    [columnsInGlideOrder, onHeaderContextMenu, ctxs, refTable],
  );

  const handleCellContextMenu = useCallback<
    NonNullable<TableGlideProps<R, SR>['onCellContextMenu']>
  >(
    (cell, event) => {
      const currentColumn = columnsInGlideOrder[cell[0]];
      const currentRow = rows[cell[1]];
      if (currentColumn && currentRow) {
        onCellContextMenu?.(cell, event, {
          column: currentColumn,
          row: currentRow,
          ctxs,
          refTable,
        });
      }
    },
    [columnsInGlideOrder, rows, onCellContextMenu, ctxs, refTable],
  );

  const handleCellClicked = useCallback<
    NonNullable<TableGlideProps<R, SR>['onCellClicked']>
  >(
    (cell, _event) => {
      if (!onCellClickedExternal) return;
      const currentColumn = columnsInGlideOrder[cell[0]];
      const currentRow = rows[cell[1]];
      if (currentColumn && currentRow) {
        onCellClickedExternal(cell, {
          column: currentColumn,
          row: currentRow,
          ctxs,
          refTable,
        });
      }
    },
    [columnsInGlideOrder, rows, onCellClickedExternal, ctxs, refTable],
  );

  const onCellsEdited = useMemo<TableGlideProps<R, SR>['onCellsEdited']>(() => {
    if (!onRowsChange) return undefined; // фича не активна
    return (newValues) => {
      /* в рамках даного коллбэка return true - досрочно прерывает и не дает вызываться onCellEdited */
      if (typeof newValues[0] === 'undefined') {
        return true;
      }
      const firstChangedRowColumnInd = newValues[0].location[0];
      const firstChangedRowColumnColumn =
        columnsInGlideOrder[firstChangedRowColumnInd];

      if (!firstChangedRowColumnColumn) {
        return true;
      }

      const { column, changedAllRows, indexes } = newValues.reduce(
        (acc, item) => {
          const colInd = item.location[0];
          const rowInd = item.location[1];
          const column = columnsInGlideOrder[colInd];
          if (!column) {
            return acc;
          }
          const newRow = item.value.data;

          /* row должен быть extends ObjectForExtending */
          if (typeof newRow !== 'object') {
            return acc;
          }

          // Правка ячейки слитого блока пишет значение во ВСЕ ячейки блока
          // (паритет с paste/fill): блок остаётся блоком, данные под ним
          // совпадают с экраном. Одиночная ячейка идёт обычным путём.
          // resolveBlock читает только key/colSpan/rowSpan; несовместимость
          // типов только в дженерике строки (R vs ObjectForExtending).
          const block = resolveBlock(
            colInd,
            rowInd,
            columnsInGlideOrder as unknown as readonly TransferColumnConfig[],
            rows,
          );
          if (block) {
            const editedValue = (newRow as ObjectForExtending)[column.key];
            for (let ri = block.startRow; ri <= block.endRow; ri += 1) {
              const base =
                ri === rowInd ? (newRow as R) : acc.changedAllRows[ri];
              if (base) {
                const updated: ObjectForExtending = { ...base };
                for (let ci = block.startCol; ci <= block.endCol; ci += 1) {
                  const key = columnsInGlideOrder[ci]?.key;
                  if (key !== undefined) {
                    updated[key] = editedValue;
                  }
                }
                acc.indexes.push(ri);
                acc.changedAllRows.splice(ri, 1, updated as R);
              }
            }
            return acc;
          }

          acc.indexes.push(rowInd);
          acc.changedAllRows.splice(rowInd, 1, newRow as R);

          return acc;
        },
        {
          column: firstChangedRowColumnColumn,
          indexes: [] as number[],
          changedAllRows: [...rows] satisfies R[],
        },
      );

      if (typeof indexes[0] === 'undefined') {
        return true;
      }

      onRowsChange(changedAllRows, { column, indexes, type: 'edit' });
      return true;
    };
  }, [columnsInGlideOrder, onRowsChange, rows]);

  const provideEditor = useCallback<ProvideEditorCallback<GridCell>>(
    (gridCell) => {
      const { location } = gridCell;

      if (!location) return undefined;
      const [colInd, rowInd] = location;
      const column = columnsInGlideOrder[colInd];
      const row = rows[rowInd];

      if (!row) return undefined;
      if (!column) return undefined;
      const EditCellComp = column.renderEditCell;
      const { readonly } = gridCell as { readonly?: boolean };

      /* ------------------- render preview cell ------------------- */
      if (readonly) {
        const preview = column.renderCellPreview;

        if (preview === 'none') return undefined;

        if (preview === 'cellEditorAsPreview' && EditCellComp) {
          return {
            // eslint-disable-next-line react/no-unstable-nested-components
            editor: (props) => {
              const {
                theme,
                target,
                initialValue,
                portalElementRef,
                activation,
              } = props;

              return (
                <EditCellComp
                  readOnly
                  cellWidth={target.width}
                  cellHeight={target.height}
                  colInd={colInd}
                  activation={activation}
                  initialValue={initialValue}
                  rowInd={rowInd}
                  column={column}
                  portalElementRef={portalElementRef}
                  ctxs={ctxs}
                  row={row}
                  theme={theme as Theme}
                  onRowChange={() => {}}
                />
              );
            },
            disablePadding: true,
          };
        }

        if (typeof preview === 'function') {
          return {
            // eslint-disable-next-line react/no-unstable-nested-components
            editor: (props) => {
              const {
                theme,
                target,
                initialValue,
                portalElementRef,
                activation,
              } = props;

              return preview({
                readOnly: true,
                cellWidth: target.width,
                cellHeight: target.height,
                colInd,
                activation,
                initialValue,
                rowInd,
                column,
                portalElementRef,
                ctxs,
                row,
                theme: theme as Theme,
              });
            },
            disablePadding: true,
          };
        }

        return {
          // eslint-disable-next-line react/no-unstable-nested-components
          editor: (props) => {
            const {
              theme,

              target,
              initialValue,
              portalElementRef,

              activation,
            } = props;

            const contentAlign = column.contentAlign ?? 'left';
            const { contentFormat } = column as unknown as {
              contentFormat?: ContentFormat;
            };

            return (
              <CellReadOnlyEditor
                readOnly // !!!! важно readOnly=true
                formatOptions={contentFormat}
                contentAlign={contentAlign}
                disableLeftOffset={false}
                cellWidth={target.width}
                cellHeight={target.height}
                colInd={colInd}
                activation={activation}
                initialValue={initialValue}
                rowInd={rowInd}
                column={column}
                portalElementRef={portalElementRef}
                ctxs={ctxs}
                row={row}
                theme={theme as Theme}
                onRowChange={() => {}}
              />
            );
          },
          disablePadding: true,
        };
      }

      if (EditCellComp) {
        return {
          // eslint-disable-next-line react/no-unstable-nested-components
          editor: (props) => {
            const {
              theme,
              /* оба метода тригерят */
              onChange,
              onFinishedEditing,
              target,
              initialValue,
              portalElementRef,

              activation,
            } = props;

            return (
              <EditCellComp
                readOnly={readonly}
                cellWidth={target.width}
                cellHeight={target.height}
                colInd={colInd}
                activation={activation}
                initialValue={initialValue}
                rowInd={rowInd}
                column={column}
                portalElementRef={portalElementRef}
                ctxs={ctxs}
                row={row}
                theme={theme as Theme}
                onRowChange={(newData, closeEditor) => {
                  const changeHandler = closeEditor
                    ? onFinishedEditing
                    : onChange;
                  changeHandler({ ...gridCell, data: newData } as GridCell);
                }}
              />
            );
          },
          disablePadding: true,
        };
      }

      return undefined;
    },
    [CellReadOnlyEditor, columnsInGlideOrder, ctxs, rows],
  );

  const isOutsideClick = useMemo((): TableGlideProps<
    R,
    SR
  >['isOutsideClick'] => {
    if (!onCellsEdited) {
      return undefined;
    }
    return (e) => {
      const target = e.target as HTMLElement;
      // если клик внутри вашего portal / dropdown — не считать его “вне”
      return !target.closest('#portal') && !target.closest('#portal2');
    };
  }, [onCellsEdited]);
  const contentStateNode = useMemo(() => {
    if (!contentStateOverlay) {
      return undefined;
    }

    return (
      <TableContentStateOverlay
        overlay={contentStateOverlay}
        topOffset={contentStateTopOffset}
      />
    );
  }, [contentStateOverlay, contentStateTopOffset]);

  return (
    <TableGlide
      isOutsideClick={isOutsideClick}
      provideEditor={provideEditor}
      onCellClicked={handleCellClicked}
      onCellsEdited={onCellsEdited}
      /* editOnType при вводе сразу редактирование начианается или нет */
      editOnType
      columns={columnsGlide}
      className={`gdg-table ${className}`}
      headerHeight={headerHeight}
      freezeColumns={frozenColsCount}
      ctxs={ctxs}
      groupHeaderHeight={groupHeaderHeightArr}
      renderGroupHeader={renderGroupHeader}
      groupAlignMap={groupAlignMap}
      onColumnResize={onColumnResize}
      onVisibleRegionChanged={onVisibleRegionChanged}
      refTable={refTable}
      height="100%"
      onHeaderContextMenu={handleHeaderContextMenu}
      onCellContextMenu={handleCellContextMenu}
      portalEventTargetRef={portalEventTargetRef}
      containerRef={containerProps?.ref}
      containerClassName={containerProps?.className}
      containerStyle={containerProps?.style}
      contentStateNode={contentStateNode}
      renderOverlayFeatures={renderOverlayFeatures}
      hideGrid={shouldRenderFullContentState}
      fullScreened={fullScreened}
      rows={rows}
      {...rest}
    />
  );
};
