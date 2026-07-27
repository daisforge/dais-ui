import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { useCallback, useMemo } from 'react';

import type {
  ColumnGlideLast,
  GlideProps,
  HighlightActiveType,
  ObjectForExtending,
  CellsSelectionMode,
} from '../../types';
import { useActiveRowHighlight } from './useActiveRowHighlight';
import { useColumnAxisSelection } from './useColumnAxisSelection';
import { useRowAxisSelection } from './useRowAxisSelection';

/** Событие клика по шапке (второй аргумент glide onHeaderClicked). */
type HeaderClickEvent = Parameters<
  NonNullable<GlideProps['onHeaderClicked']>
>[1];

interface UseTableSelectionSystemParams<
  R extends ObjectForExtending,
  SR = unknown
> {
  columns: readonly ColumnGlideLast<R, SR>[];
  selection: GridSelection;
  cellsSelectionMode: CellsSelectionMode;
  /** Визуальная подсветка строки: 'row' включает sticky-подсветку по клику. */
  highlightActiveType: HighlightActiveType;
  enableColumnSelection: boolean;
  /** Выделение строк по клику/драгу на колонке нумерации. */
  enableRowSelection: boolean;
  /** Выделение всей таблицы кликом по шапке колонки нумерации (левый верхний угол). */
  enableSelectAll: boolean;
  /** Кол-во ведущих сервисных колонок (= индекс первой колонки данных). */
  leadingServiceColumnsCount: number;
  /** Всего строк (данные + summary) — высота нативного range при column-select. */
  dataRowCount: number;
  /** Базовый обработчик glide-выделения (из useNativeGridSelection). */
  handleGridSelectionChange: (next: GridSelection) => void;
  /** Базовый обработчик сброса выделения (из useNativeGridSelection). */
  handleSelectionCleared: () => void;
  /** Канал наружу: отдаём выделенные колонки/строки потребителю для copy/paste. */
  onSelectionEmit?: (next: GridSelection) => void;
  /** Controlled-значение подсвеченной строки (highlightActiveType='row'). */
  highlightActiveRow?: number;
  /** Сеттер/эмиттер подсвеченной строки. Вызывается на каждый коммит подсветки. */
  onHighlightActiveRowChange?: (row: number | undefined) => void;
  /**
   * Подсветка строки controlled (значением владеют снаружи). Если не задан —
   * fallback на старое правило (controlled = задан сеттер).
   */
  isHighlightActiveRowControlled?: boolean;
}

/**
 * Оркестратор трёх независимых от glide осей выделения TableCanvas:
 *  - выделение КОЛОНОК по клику на шапку (`useColumnAxisSelection`);
 *  - выделение СТРОК по клику/драгу на колонке нумерации (`useRowAxisSelection`);
 *  - визуальная подсветка активной строки (`useActiveRowHighlight`).
 *
 * Состояние каждой оси владеется своим хуком; здесь — общая логика клика/драга и
 * ЕДИНОЕ место инварианта взаимоисключения: выбор одной оси (или обычное
 * выделение ячеек) сбрасывает остальные. Рендер осей — собственным оверлеем
 * (см. `useColumnRowHighlightRegions`); наружу для copy/paste отдаём через
 * `onSelectionEmit`.
 */
export function useTableSelectionSystem<
  R extends ObjectForExtending,
  SR = unknown
>({
  columns,
  selection,
  cellsSelectionMode,
  highlightActiveType,
  enableColumnSelection,
  enableRowSelection,
  enableSelectAll,
  leadingServiceColumnsCount,
  dataRowCount,
  handleGridSelectionChange,
  handleSelectionCleared,
  onSelectionEmit,
  highlightActiveRow,
  onHighlightActiveRowChange,
  isHighlightActiveRowControlled,
}: UseTableSelectionSystemParams<R, SR>) {
  const {
    selectedColumns,
    setSelectedColumns,
    selectedColumnIndexes,
    selectedColumnSet,
    lastSelectedColumnRef,
    isNativeColumnSelection,
    setIsNativeColumnSelection,
  } = useColumnAxisSelection<R, SR>({ columns });

  const {
    setSelectedRows,
    headerSelectedRowIndexes,
    ctrlGestureRef,
    ctrlBaseRowsRef,
    pointerGestureRef,
  } = useRowAxisSelection();

  const { activeRow, commitActiveRow } = useActiveRowHighlight({
    highlightActiveRow,
    onHighlightActiveRowChange,
    isHighlightActiveRowControlled,
  });

  // Индекс колонки нумерации (id === её key; держим в синхроне с
  // ROW_MARKER_COLUMN_KEY; импорт нельзя — обратная зависимость/цикл чанков).
  const numberingColumnIndex = useMemo(
    () =>
      columns.findIndex(
        (column) => column.isServiceColumn && column.id === 'row-markers'
      ),
    [columns]
  );

  // Сервисные колонки не должны попадать в выделение ячеек/диапазона: заехавшее
  // слева выделение обрезаем к данным (числа не обводятся синей рамкой).
  const clampSelectionToData = useCallback(
    (next: GridSelection): GridSelection => {
      const { current } = next;
      if (!current) return next;
      const firstDataCol = leadingServiceColumnsCount;
      const { range } = current;
      if (range.x >= firstDataCol) return next;
      const nextWidth = range.x + range.width - firstDataCol;
      if (nextWidth <= 0) {
        return {
          current: undefined,
          rows: CompactSelection.empty(),
          columns: CompactSelection.empty(),
        };
      }
      return {
        ...next,
        current: {
          ...current,
          cell: [Math.max(current.cell[0], firstDataCol), current.cell[1]],
          range: { ...range, x: firstDataCol, width: nextWidth },
        },
      };
    },
    [leadingServiceColumnsCount]
  );

  const handleGridSelectionWithColumnReset = useCallback(
    (raw: GridSelection) => {
      const current = raw.current;
      // Выделение СТРОК по колонке нумерации. Из range glide берём строки в свой
      // selectedRows и рисуем их СВОИМ оверлеем (заливка + рамка, как у колонок).
      // Сам диапазон glide схлопываем в НУЛЕВУЮ ширину в области данных: тогда
      // glide ничего не рисует для current (ни рамки на нумерации при драге, ни
      // двойной заливки), а cell-якорь НЕ трогаем — нативный drag glide (он
      // ведётся от позиции мыши) продолжает работать.
      if (
        enableRowSelection &&
        numberingColumnIndex >= 0 &&
        current &&
        current.cell[0] === numberingColumnIndex
      ) {
        const firstDataCol = leadingServiceColumnsCount;
        const startRow = current.range.y;
        const endRow = startRow + Math.max(current.range.height, 1);

        // Ctrl/Meta → НЕсмежный накопительный выбор строк. Одного нативного
        // range для разрозненных строк не существует → рисуем СВОИМ оверлеем
        // (без fill-handle), а current.range glide схлопываем в ноль. Базовый
        // набор снят на pointerdown — поэтому сужение протяжки корректно.
        if (ctrlGestureRef.current) {
          const isSingleRow = endRow - startRow <= 1;
          // Перенос одиночной НАТИВНОЙ строки в overlay-набор при входе в Ctrl-
          // мультивыбор: если строка была выбрана обычным кликом, она живёт в
          // current.range, а не в selectedRows, и без переноса потеряется. Сеем
          // ОДИН раз и фиксируем в ctrlBaseRowsRef, чтобы драг не пере-сеивал.
          let base = ctrlBaseRowsRef.current;
          if (
            base.length === 0 &&
            selection.current &&
            selection.current.cell[0] === numberingColumnIndex
          ) {
            const prevRange = selection.current.range;
            base = CompactSelection.empty().add([
              prevRange.y,
              prevRange.y + Math.max(prevRange.height, 1),
            ]);
            ctrlBaseRowsRef.current = base;
          }
          let rows: CompactSelection;
          if (isSingleRow) {
            rows = base.hasIndex(startRow)
              ? base.remove(startRow)
              : base.add(startRow);
          } else {
            rows = base.add([startRow, endRow]);
          }
          setSelectedColumns(CompactSelection.empty());
          setSelectedRows(rows);
          commitActiveRow(undefined);
          setIsNativeColumnSelection(false);
          handleGridSelectionChange({
            ...raw,
            current: {
              ...current,
              range: {
                x: firstDataCol,
                y: current.range.y,
                width: 0,
                height: current.range.height,
              },
            },
          });
          onSelectionEmit?.({
            current: undefined,
            rows,
            columns: CompactSelection.empty(),
          });
          return;
        }

        // Без Ctrl — смежный диапазон строк: задаём РЕАЛЬНЫЙ current.range на всю
        // ширину данных. glide рисует нативно (заливка + рамка + fill-handle),
        // copy идёт по current.range. Якорь current.cell (в колонке нумерации) НЕ
        // трогаем — нативный drag продолжает работать; focus-ring на нём выключен
        // (drawFocusRing). Сервисные колонки в range не входят (x = firstDataCol).
        const dataWidth = Math.max(columns.length - firstDataCol, 0);
        setSelectedColumns(CompactSelection.empty());
        setSelectedRows(CompactSelection.empty());
        commitActiveRow(undefined);
        setIsNativeColumnSelection(false);
        handleGridSelectionChange({
          ...raw,
          current: {
            ...current,
            range: {
              x: firstDataCol,
              y: current.range.y,
              width: dataWidth,
              height: current.range.height,
            },
          },
        });
        return;
      }

      // Иначе: исключаем сервисные колонки + сбрасываем выделение колонок/строк.
      const next = clampSelectionToData(raw);
      if (next.current !== undefined || next.rows.length > 0) {
        setSelectedColumns(CompactSelection.empty());
        setSelectedRows(CompactSelection.empty());
      }
      // Обычное выделение ячеек/диапазона — это не column-select.
      setIsNativeColumnSelection(false);
      // Sticky-подсветка строки (highlightActiveType='row'): обновляем строку
      // ТОЛЬКО на клик мышью (pointerGestureRef), чтобы навигация стрелками её
      // не двигала. Источник — строка активной (кликнутой) ячейки.
      if (highlightActiveType === 'row') {
        if (pointerGestureRef.current && next.current) {
          commitActiveRow(next.current.cell[1]);
        }
      } else {
        commitActiveRow(undefined);
      }
      handleGridSelectionChange(next);
    },
    [
      columns,
      selection,
      handleGridSelectionChange,
      clampSelectionToData,
      numberingColumnIndex,
      enableRowSelection,
      leadingServiceColumnsCount,
      highlightActiveType,
      onSelectionEmit,
      commitActiveRow,
      ctrlGestureRef,
      ctrlBaseRowsRef,
      pointerGestureRef,
      setSelectedColumns,
      setSelectedRows,
      setIsNativeColumnSelection,
    ]
  );

  const handleSelectionClearedWithColumns = useCallback(() => {
    setSelectedColumns(CompactSelection.empty());
    setSelectedRows(CompactSelection.empty());
    commitActiveRow(undefined);
    setIsNativeColumnSelection(false);
    handleSelectionCleared();
  }, [
    handleSelectionCleared,
    commitActiveRow,
    setSelectedColumns,
    setSelectedRows,
    setIsNativeColumnSelection,
  ]);

  // Объединённое множество выделенных КОЛОНОК (ключи) для внешних потребителей
  // (например «Закрепить столбцы» в контрл-блоке). Два канала выделения колонок:
  //  - Ctrl/Meta-мультивыбор → кастомный selectedColumns (→ selectedColumnIndexes);
  //  - одиночный клик / Shift-диапазон / select-all → нативный current.range
  //    (флаг isNativeColumnSelection). Обычное выделение ячеек сюда не попадает:
  //    при нём isNativeColumnSelection === false.
  // Отдаём КЛЮЧИ (column.id === исходный key), а не индексы: индексы здесь — в
  // пространстве glide-колонок (frozen вынесены вперёд), наружу оно бессмысленно.
  const selectedColumnKeysAll = useMemo(() => {
    const indexSet = new Set<number>(selectedColumnIndexes);
    if (isNativeColumnSelection && selection.current) {
      const { x, width } = selection.current.range;
      for (let columnIndex = x; columnIndex < x + width; columnIndex += 1) {
        if (!columns[columnIndex]?.isServiceColumn) {
          indexSet.add(columnIndex);
        }
      }
    }
    return Array.from(indexSet)
      .sort((a, b) => a - b)
      .map((columnIndex) => columns[columnIndex]?.id)
      .filter((key): key is string => Boolean(key));
  }, [selectedColumnIndexes, isNativeColumnSelection, selection, columns]);

  // focus-ring рисуем в range-cell / multi-range-cell, КРОМЕ случая, когда
  // активный якорь — в сервисной колонке (выделение строк по нумерации): иначе
  // glide рисует яркую рамку на ячейке-якоре нумерации.
  const drawFocusRing =
    (cellsSelectionMode === 'range-cell' ||
      cellsSelectionMode === 'multi-range-cell') &&
    !isNativeColumnSelection &&
    !(
      selection.current !== undefined &&
      selection.current.cell[0] < leadingServiceColumnsCount
    );

  // Выделение столбца по клику на голую шапку (вызывается из onHeaderClicked
  // после того, как клик по canvas-кнопкам шапки уже обработан). Работает при
  // любом highlightActiveType — это независимая ось.
  const selectColumnFromHeader = useCallback(
    (columnIndex: number, event: HeaderClickEvent) => {
      // Клик по «нулевой» ячейке — шапке колонки нумерации (левый верхний угол) →
      // выделить ВСЮ таблицу одним реальным current.range (все строки × все
      // колонки данных). glide рисует нативно, copy/paste идут по current.range.
      // Доступно только при включённой нумерации и активном cellsSelectionMode.
      if (
        enableSelectAll &&
        numberingColumnIndex >= 0 &&
        columnIndex === numberingColumnIndex &&
        cellsSelectionMode !== 'disabled'
      ) {
        const firstDataCol = leadingServiceColumnsCount;
        const dataWidth = Math.max(columns.length - firstDataCol, 0);
        if (dataWidth === 0 || dataRowCount === 0) return;
        setSelectedColumns(CompactSelection.empty());
        setSelectedRows(CompactSelection.empty());
        commitActiveRow(undefined);
        setIsNativeColumnSelection(true); // гасим focus-ring на якоре
        handleGridSelectionChange({
          current: {
            cell: [firstDataCol, 0],
            range: {
              x: firstDataCol,
              y: 0,
              width: dataWidth,
              height: dataRowCount,
            },
            rangeStack: [],
          },
          rows: CompactSelection.empty(),
          columns: CompactSelection.empty(),
        });
        return;
      }

      if (!enableColumnSelection) return;
      const column = columns[columnIndex];
      if (!column || column.isServiceColumn) return;

      const isRange = event.shiftKey;
      const isMulti = event.ctrlKey || event.metaKey;

      // Ctrl/Meta → НЕсмежный выбор колонок: одного нативного range нет → держим
      // в своём selectedColumns и рисуем оверлеем (без fill-handle). Внутреннее
      // glide-выделение чистим, наружу отдаём columns для copy/paste.
      if (isMulti) {
        // Перенос одиночной/Shift НАТИВНОЙ колонки в overlay-набор при входе в
        // Ctrl-мультивыбор: иначе Ctrl+клик сбросит первый выбор (он живёт в
        // current.range, а не в selectedColumns).
        let baseColumns = selectedColumns;
        if (
          baseColumns.length === 0 &&
          isNativeColumnSelection &&
          selection.current
        ) {
          const prevRange = selection.current.range;
          baseColumns = baseColumns.add([
            prevRange.x,
            prevRange.x + prevRange.width,
          ]);
        }
        const nextColumns = baseColumns.hasIndex(columnIndex)
          ? baseColumns.remove(columnIndex)
          : baseColumns.add(columnIndex);
        lastSelectedColumnRef.current = columnIndex;
        setSelectedColumns(nextColumns);
        setSelectedRows(CompactSelection.empty());
        commitActiveRow(undefined);
        setIsNativeColumnSelection(false);
        handleGridSelectionChange({
          current: undefined,
          rows: CompactSelection.empty(),
          columns: CompactSelection.empty(),
        });
        onSelectionEmit?.({
          current: undefined,
          rows: CompactSelection.empty(),
          columns: nextColumns,
        });
        return;
      }

      // Одиночный клик / Shift (смежный блок) → РЕАЛЬНЫЙ вертикальный
      // current.range по всем строкам. glide рисует нативно (заливка + рамка +
      // fill-handle снизу), copy идёт по current.range. Шапка темнеет через
      // isActiveHeaderColumn (не ярким accentColor — selection.columns пуст).
      // focus-ring на якоре гасим через isNativeColumnSelection.
      let fromCol: number;
      let toCol: number;
      if (isRange && lastSelectedColumnRef.current !== undefined) {
        fromCol = Math.min(lastSelectedColumnRef.current, columnIndex);
        toCol = Math.max(lastSelectedColumnRef.current, columnIndex);
      } else {
        fromCol = columnIndex;
        toCol = columnIndex;
        lastSelectedColumnRef.current = columnIndex;
      }
      setSelectedColumns(CompactSelection.empty());
      setSelectedRows(CompactSelection.empty());
      commitActiveRow(undefined);
      setIsNativeColumnSelection(true);
      handleGridSelectionChange({
        current: {
          cell: [fromCol, 0],
          range: {
            x: fromCol,
            y: 0,
            width: toCol - fromCol + 1,
            height: dataRowCount,
          },
          rangeStack: [],
        },
        rows: CompactSelection.empty(),
        columns: CompactSelection.empty(),
      });
    },
    [
      enableColumnSelection,
      enableSelectAll,
      numberingColumnIndex,
      cellsSelectionMode,
      leadingServiceColumnsCount,
      columns,
      selection,
      isNativeColumnSelection,
      selectedColumns,
      dataRowCount,
      handleGridSelectionChange,
      onSelectionEmit,
      commitActiveRow,
      lastSelectedColumnRef,
      setSelectedColumns,
      setSelectedRows,
      setIsNativeColumnSelection,
    ]
  );

  // Программно выделить колонки по ключам (после реордера от закрепления):
  // непрерывный блок → нативный range (как одиночный/Shift), разрозненно →
  // selectedColumns-оверлей (как Ctrl). Пустой набор → снять выделение колонок.
  const selectColumnsByKeys = useCallback(
    (keys: string[]) => {
      const keySet = new Set(keys);
      const indexes = columns
        .map((column, index) =>
          !column.isServiceColumn && keySet.has(column.id) ? index : -1
        )
        .filter((index) => index >= 0);

      setSelectedRows(CompactSelection.empty());
      commitActiveRow(undefined);

      if (indexes.length === 0) {
        setSelectedColumns(CompactSelection.empty());
        setIsNativeColumnSelection(false);
        handleGridSelectionChange({
          current: undefined,
          rows: CompactSelection.empty(),
          columns: CompactSelection.empty(),
        });
        return;
      }

      const fromCol = indexes[0];
      const toCol = indexes[indexes.length - 1];
      if (fromCol === undefined || toCol === undefined) {
        return;
      }
      const isContiguous = toCol - fromCol === indexes.length - 1;
      lastSelectedColumnRef.current = toCol;

      if (isContiguous) {
        setSelectedColumns(CompactSelection.empty());
        setIsNativeColumnSelection(true);
        handleGridSelectionChange({
          current: {
            cell: [fromCol, 0],
            range: {
              x: fromCol,
              y: 0,
              width: toCol - fromCol + 1,
              height: dataRowCount,
            },
            rangeStack: [],
          },
          rows: CompactSelection.empty(),
          columns: CompactSelection.empty(),
        });
        return;
      }

      let nextColumns = CompactSelection.empty();
      indexes.forEach((index) => {
        nextColumns = nextColumns.add(index);
      });
      setSelectedColumns(nextColumns);
      setIsNativeColumnSelection(false);
      handleGridSelectionChange({
        current: undefined,
        rows: CompactSelection.empty(),
        columns: CompactSelection.empty(),
      });
    },
    [
      columns,
      dataRowCount,
      handleGridSelectionChange,
      setSelectedColumns,
      setSelectedRows,
      setIsNativeColumnSelection,
      commitActiveRow,
      lastSelectedColumnRef,
    ]
  );

  return {
    selectedColumnIndexes,
    selectedColumnKeysAll,
    selectColumnsByKeys,
    selectedColumnSet,
    headerSelectedRowIndexes,
    activeRow,
    numberingColumnIndex,
    drawFocusRing,
    selectColumnFromHeader,
    handleGridSelectionWithColumnReset,
    handleSelectionClearedWithColumns,
  };
}
