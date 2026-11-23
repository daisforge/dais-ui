import {
  CompactSelection,
  type GridSelection,
} from '@daisforge/glide-data-grid';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import type { GlideProps, CellsSelectionMode } from '../../types';
import { findFirstDataColumnIndex } from './rectGeometry';

export const EMPTY_SELECTION: GridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: undefined,
};

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

interface UseNativeGridSelectionParams {
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
  /**
   * Канал для copy/paste (selectionRef потребителя) — вызывается ВСЕГДА на любое
   * изменение выделения, отдельно от controlled-сеттера. Несёт полную картину
   * (включая own-state колонок/строк, которые в gridSelection не пишутся).
   */
  onSelectionEmit?: (selection: GridSelection) => void;
  /**
   * Выделение сменили из кода (controlled `state`), а не действием
   * пользователя. Нужен, чтобы копирование, вставка и протяжка заполнения знали
   * о новом выделении.
   *
   * Подробнее: в `onSelectionEmit` такая смена не идёт, это канал действий
   * пользователя.
   */
  onExternalSelectionChange?: (
    selection: GridSelection,
    /** Первое значение при монтировании, а не смена */
    initial: boolean,
    preserveColumnSelection?: boolean,
  ) => void;
}

/** Одно и то же выделение по содержимому: потребитель мог положить в state копию объекта */
export const sameSelection = (a: GridSelection, b: GridSelection): boolean => {
  if (a === b) return true;
  if (!a.rows.equals(b.rows) || !a.columns.equals(b.columns)) return false;
  const ca = a.current;
  const cb = b.current;
  if (ca === undefined || cb === undefined) return ca === cb;
  return (
    ca.cell[0] === cb.cell[0] &&
    ca.cell[1] === cb.cell[1] &&
    ca.range.x === cb.range.x &&
    ca.range.y === cb.range.y &&
    ca.range.width === cb.range.width &&
    ca.range.height === cb.range.height &&
    ca.rangeStack.length === cb.rangeStack.length &&
    ca.rangeStack.every((r, i) => {
      const o = cb.rangeStack[i];
      return (
        o !== undefined &&
        r.x === o.x &&
        r.y === o.y &&
        r.width === o.width &&
        r.height === o.height
      );
    })
  );
};

export function useNativeGridSelection({
  cellsSelectionMode,
  columns,
  previousLeadingColumns,
  previousControlled,
  gridSelection: gridSelectionExternal,
  onGridSelectionChange: onGridSelectionChangeExternal,
  onSelectionEmit,
  onExternalSelectionChange,
}: UseNativeGridSelectionParams) {
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
  const projectedSelectionRef = useRef<GridSelection>();
  const lastSentRef = useRef<GridSelection | null>(null);
  const lastSentWithAxesRef = useRef(false);
  const axesEchoPendingRef = useRef(false);
  const leadingServiceColumnsCount = findFirstDataColumnIndex(columns);
  const prevLeadingCountRef = useRef(previousLeadingColumns ?? leadingServiceColumnsCount);
  const leadingCountRef = useRef(leadingServiceColumnsCount);
  leadingCountRef.current = leadingServiceColumnsCount;
  const mountedControlled = useRef(previousControlled);
  const onExternalSelectionChangeRef = useRef(onExternalSelectionChange);
  onExternalSelectionChangeRef.current = onExternalSelectionChange;
  useLayoutEffect(() => {
    if (gridSelectionExternal === undefined) {
      if (lastSentRef.current === null) onExternalSelectionChangeRef.current?.(EMPTY_SELECTION, true);
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
    projectedSelectionRef.current = undefined;
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
      projectedSelectionRef.current = undefined;
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
  const applyProjectedSelection = useCallback((next: GridSelection, preserveColumnSelection = false) => {
    prevLeadingCountRef.current = leadingServiceColumnsCount;
    projectedSelectionRef.current = next;
    if (isControlled) {
      lastSentRef.current = next;
      lastSentWithAxesRef.current = false;
      axesEchoPendingRef.current = false;
      onGridSelectionChangeExternal?.(next);
    } else {
      setGridSelectionInternal(next);
    }
    if (preserveColumnSelection) onExternalSelectionChangeRef.current?.(next, false, true);
    else onExternalSelectionChangeRef.current?.(next, false);
  }, [isControlled, onGridSelectionChangeExternal, leadingServiceColumnsCount]);

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
    [handleGridSelectionChange]
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
    applyProjectedSelection,
    isProjectedSelection: projectedSelectionRef.current !== undefined &&
      sameSelection(selection, projectedSelectionRef.current),
    rangeSelect,
    spanRangeBehavior,
  };
}
