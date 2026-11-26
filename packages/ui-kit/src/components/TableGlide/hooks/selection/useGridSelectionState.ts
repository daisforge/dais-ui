import type { GridSelection } from '@daisforge/glide-data-grid';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { GlideProps, CellsSelectionMode } from '../../types';
import { EMPTY_SELECTION, sameSelection } from './gridSelection';
import { findFirstDataColumnIndex } from './rectGeometry';

/**
 * Сдвигает индексы колонок в выделении на `delta`. Возвращает исходный объект,
 * если сдвигать нечего или после сдвига выделение ушло бы в отрицательные
 * индексы.
 */
export const shiftSelectionColumns = (
  selection: GridSelection,
  delta: number,
): GridSelection => {
  const { current } = selection;
  const hasColumns = selection.columns.length > 0;
  if (delta === 0 || (current === undefined && !hasColumns)) {
    return selection;
  }
  const minColumn = Math.min(
    current?.cell[0] ?? Infinity,
    current?.range.x ?? Infinity,
    ...(current?.rangeStack.map((r) => r.x) ?? []),
    ...(hasColumns ? [selection.columns.first() ?? Infinity] : []),
  );
  if (minColumn + delta < 0) {
    return selection;
  }
  return {
    ...selection,
    columns: hasColumns ? selection.columns.offset(delta) : selection.columns,
    current:
      current === undefined
        ? undefined
        : {
            ...current,
            cell: [current.cell[0] + delta, current.cell[1]],
            range: { ...current.range, x: current.range.x + delta },
            rangeStack: current.rangeStack.map((r) => ({
              ...r,
              x: r.x + delta,
            })),
          },
  };
};

interface UseGridSelectionStateParams {
  previousLeadingColumns?: number;
  previousControlled?: GridSelection;
  cellsSelectionMode: CellsSelectionMode;
  /**
   * Колонки грида в текущем порядке. Нужны, чтобы при появлении и исчезновении
   * ведущих служебных колонок сдвигать индексы выделения.
   */
  columns: readonly { isServiceColumn?: boolean }[];
  /** Controlled-значение нативного выделения (current/rows/columns). */
  gridSelection?: GridSelection;
  /** Controlled-сеттер нативного выделения (вызывается только в controlled-режиме). */
  onGridSelectionChange?: (newSelection: GridSelection) => void;
  /** Передаёт итог пользовательского выбора или автоматического сброса. */
  onSelectionEmit?: (selection: GridSelection) => void;
  resetSelectionAxes?: () => void;
  /** Синхронизирует выбор, явно заданный продуктом через controlled state. */
  onExternalSelectionChange?: (
    selection: GridSelection,
    /** Первое значение при монтировании, а не смена */
    initial: boolean,
  ) => void;
}

export function useGridSelectionState({
  cellsSelectionMode,
  columns,
  previousLeadingColumns,
  previousControlled,
  gridSelection: gridSelectionExternal,
  onGridSelectionChange: onGridSelectionChangeExternal,
  onSelectionEmit,
  onExternalSelectionChange,
  resetSelectionAxes,
}: UseGridSelectionStateParams) {
  const [gridSelectionInternal, setGridSelectionInternal] =
    useState<GridSelection>(EMPTY_SELECTION);

  const isControlled = gridSelectionExternal !== undefined;
  const selection = gridSelectionExternal ?? gridSelectionInternal;

  // Узнаём, что выделение сменили из кода, а не через onGridSelectionChange.
  // Подробнее: запоминаем последнее выделение, отданное наружу через
  // onGridSelectionChange. Если снаружи вернулось оно же (наш же ответ), это
  // наша смена. Если пришло другое, выделение сменили из кода. Сравниваем по
  // содержимому: потребитель мог положить в state копию объекта (redux, immer,
  // setSel({ ...s })).
  //
  // Исключение: Ctrl-выбор колонок или строк. Он хранится у нас, а наружу
  // уходит пустое нативное выделение, и «снять всё» из кода по содержимому от
  // него не отличить. Поэтому после такой отправки нашим же ответом считаем
  // только первое совпавшее по содержимому значение (это значение, которое
  // вернул потребитель, копия или тот же объект), а дальше сравниваем по
  // тождеству с ним.
  const lastViewSelectionRef = useRef<GridSelection>();
  const lastSentRef = useRef<GridSelection | null>(null);
  const lastSentWithAxesRef = useRef(false);
  const axesEchoPendingRef = useRef(false);
  const leadingServiceColumnsCount = findFirstDataColumnIndex(columns);
  const prevLeadingCountRef = useRef(
    previousLeadingColumns ?? leadingServiceColumnsCount,
  );
  const leadingCountRef = useRef(leadingServiceColumnsCount);
  leadingCountRef.current = leadingServiceColumnsCount;
  const mountedControlled = useRef(previousControlled);
  const onExternalSelectionChangeRef = useRef(onExternalSelectionChange);
  onExternalSelectionChangeRef.current = onExternalSelectionChange;
  useLayoutEffect(() => {
    if (gridSelectionExternal === undefined) {
      if (lastSentRef.current === null)
        onExternalSelectionChangeRef.current?.(EMPTY_SELECTION, true);
      return;
    }
    const sent = lastSentRef.current;
    const isEcho =
      sent !== null &&
      (sent === gridSelectionExternal ||
        ((!lastSentWithAxesRef.current || axesEchoPendingRef.current) &&
          sameSelection(sent, gridSelectionExternal)));
    if (isEcho) {
      lastSentRef.current = gridSelectionExternal;
      axesEchoPendingRef.current = false;
      return;
    }
    lastViewSelectionRef.current = undefined;
    const initial = sent === null;
    const before = initial ? mountedControlled.current : sent;
    // Внешнее выделение уже задано в координатах нового набора колонок.
    if (before && !sameSelection(before, gridSelectionExternal)) {
      prevLeadingCountRef.current = leadingCountRef.current;
    }
    lastSentRef.current = gridSelectionExternal;
    lastSentWithAxesRef.current = false;
    axesEchoPendingRef.current = false;
    onExternalSelectionChangeRef.current?.(gridSelectionExternal, initial);
  }, [gridSelectionExternal]);

  // Храним glide selection как источник истины нативного выделения. В controlled-
  // режиме значение владеется снаружи (onGridSelectionChange — сеттер), иначе —
  // внутренний state. Наружу (onSelectionEmit) — ровно один раз за изменение;
  // `emitted` — итог, если он не совпадает с нативным (несмежные колонки/строки
  // рисует оверлей, нативное при этом пустое).
  const handleGridSelectionChange = useCallback(
    (next: GridSelection, emitted: GridSelection = next) => {
      lastViewSelectionRef.current = undefined;
      if (isControlled) {
        lastSentRef.current = next;
        lastSentWithAxesRef.current = emitted !== next;
        axesEchoPendingRef.current = emitted !== next;
        onGridSelectionChangeExternal?.(next);
      } else {
        setGridSelectionInternal(next);
      }
      onSelectionEmit?.(emitted);
    },
    [isControlled, onGridSelectionChangeExternal, onSelectionEmit],
  );

  // Координаты уже приведены к отображаемым колонкам, включая служебные.
  const applyViewSelection = useCallback(
    (next: GridSelection, preserveColumnSelection = false) => {
      prevLeadingCountRef.current = leadingServiceColumnsCount;
      lastViewSelectionRef.current = next;
      if (isControlled) {
        lastSentRef.current = next;
        lastSentWithAxesRef.current = false;
        axesEchoPendingRef.current = false;
        onGridSelectionChangeExternal?.(next);
      } else {
        setGridSelectionInternal(next);
      }
      if (!preserveColumnSelection) resetSelectionAxes?.();
      onSelectionEmit?.(next);
    },
    [
      isControlled,
      onGridSelectionChangeExternal,
      resetSelectionAxes,
      leadingServiceColumnsCount,
      onSelectionEmit,
    ],
  );

  // Выделение в glide хранится по индексам колонок. Когда ведущих служебных
  // колонок становится больше или меньше (столбец ошибок появляется вместе с
  // режимом правки и при первых ошибках), колонки данных сдвигаются, а индексы
  // выделения нет: активной оказалась бы соседняя ячейка. Сдвигаем выделение
  // на ту же разницу, чтобы оно осталось на той же ячейке данных.
  const selectionRef = useRef(selection);
  selectionRef.current = selection;
  useEffect(() => {
    const delta = leadingServiceColumnsCount - prevLeadingCountRef.current;
    prevLeadingCountRef.current = leadingServiceColumnsCount;
    if (delta === 0) {
      return;
    }
    const shifted = shiftSelectionColumns(selectionRef.current, delta);
    if (shifted === selectionRef.current) {
      return;
    }
    if (isControlled) {
      lastSentRef.current = shifted;
      lastSentWithAxesRef.current = false;
      axesEchoPendingRef.current = false;
      onGridSelectionChangeExternal?.(shifted);
    } else {
      setGridSelectionInternal(shifted);
    }
    onSelectionEmit?.(shifted);
  }, [
    leadingServiceColumnsCount,
    isControlled,
    onGridSelectionChangeExternal,
    onSelectionEmit,
  ]);

  const handleSelectionCleared = useCallback(
    () => handleGridSelectionChange(EMPTY_SELECTION),
    [handleGridSelectionChange],
  );

  const rangeSelect = useMemo<GlideProps['rangeSelect']>(() => {
    // range-cell → нативный rect-selection; multi-range-cell → несколько
    // диапазонов через Ctrl (rangeStack); cell → одиночная ячейка;
    // disabled → выделение ячеек отключено.
    if (cellsSelectionMode === 'range-cell') return 'rect';
    if (cellsSelectionMode === 'multi-range-cell') return 'multi-rect';
    if (cellsSelectionMode === 'disabled') return 'none';
    return 'cell';
  }, [cellsSelectionMode]);

  // Glide растягивает выбор ячейки до объединённого блока, и без рамки фокуса
  // такой диапазон заливает блок. Когда выделение ячеек выключено, одиночная
  // ячейка не заливается, поэтому и блок не растягиваем.
  const spanRangeBehavior: GlideProps['spanRangeBehavior'] =
    cellsSelectionMode === 'disabled' ? 'allowPartial' : 'default';

  return {
    selection,
    handleGridSelectionChange,
    handleSelectionCleared,
    applyViewSelection,
    isViewSelection:
      lastViewSelectionRef.current !== undefined &&
      sameSelection(selection, lastViewSelectionRef.current),
    rangeSelect,
    spanRangeBehavior,
  };
}
