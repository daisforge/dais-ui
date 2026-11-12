import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { GlideProps, CellsSelectionMode } from '../../types';
import { findFirstDataColumnIndex } from './rectGeometry';

const EMPTY_SELECTION: GridSelection = {
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
   * Controlled-выделение сменилось снаружи, не через наш сеттер (программно,
   * через `state`). В `onSelectionEmit` такая смена не идёт: это канал действий
   * пользователя, а copy/paste и fill-handle должны знать и о программной.
   */
  onExternalSelectionChange?: (
    selection: GridSelection,
    /** Первое значение при монтировании, а не смена */
    initial: boolean,
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
  gridSelection: gridSelectionExternal,
  onGridSelectionChange: onGridSelectionChangeExternal,
  onSelectionEmit,
  onExternalSelectionChange,
}: UseNativeGridSelectionParams) {
  const [gridSelectionInternal, setGridSelectionInternal] =
    useState<GridSelection>(EMPTY_SELECTION);

  const isControlled = gridSelectionExternal !== undefined;
  const selection = gridSelectionExternal ?? gridSelectionInternal;

  // Последнее выделение, отданное в controlled-сеттер: всё, что приходит снаружи
  // и с ним не совпадает, сменили программно. Потребитель мог положить в state
  // копию объекта, поэтому сравнение по содержимому. Исключение: когда вместе
  // с нативным выделением наружу ушли свои оси (несмежные колонки или строки),
  // нативное пустое, и программное «снять всё» по содержимию от него не
  // отличить; тогда эхо узнаём только по тождеству объекта.
  const lastSentRef = useRef<GridSelection | null>(null);
  const lastSentWithAxesRef = useRef(false);
  const onExternalSelectionChangeRef = useRef(onExternalSelectionChange);
  onExternalSelectionChangeRef.current = onExternalSelectionChange;
  useEffect(() => {
    if (gridSelectionExternal === undefined) return;
    const sent = lastSentRef.current;
    const isEcho =
      sent !== null &&
      (sent === gridSelectionExternal ||
        (!lastSentWithAxesRef.current &&
          sameSelection(sent, gridSelectionExternal)));
    if (isEcho) return;
    const initial = sent === null;
    lastSentRef.current = gridSelectionExternal;
    lastSentWithAxesRef.current = false;
    onExternalSelectionChangeRef.current?.(gridSelectionExternal, initial);
  }, [gridSelectionExternal]);

  // Храним glide selection как источник истины нативного выделения. В controlled-
  // режиме значение владеется снаружи (onGridSelectionChange — сеттер), иначе —
  // внутренний state. Наружу (onSelectionEmit) — ровно один раз за изменение;
  // `emitted` — итог, если он не совпадает с нативным (несмежные колонки/строки
  // рисует оверлей, нативное при этом пустое).
  const handleGridSelectionChange = useCallback(
    (next: GridSelection, emitted: GridSelection = next) => {
      if (isControlled) {
        lastSentRef.current = next;
        lastSentWithAxesRef.current = emitted !== next;
        onGridSelectionChangeExternal?.(next);
      } else {
        setGridSelectionInternal(next);
      }
      onSelectionEmit?.(emitted);
    },
    [isControlled, onGridSelectionChangeExternal, onSelectionEmit],
  );

  // Выделение в glide хранится по индексам колонок. Когда ведущих служебных
  // колонок становится больше или меньше (столбец ошибок появляется вместе с
  // режимом правки и при первых ошибках), колонки данных сдвигаются, а индексы
  // выделения нет: активной оказалась бы соседняя ячейка. Сдвигаем выделение
  // на ту же разницу, чтобы оно осталось на той же ячейке данных.
  const leadingServiceColumnsCount = findFirstDataColumnIndex(columns);
  const prevLeadingCountRef = useRef(leadingServiceColumnsCount);
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
    rangeSelect,
    spanRangeBehavior,
  };
}
