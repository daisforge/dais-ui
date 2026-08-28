import {
  CompactSelection,
  type GridSelection,
} from '@glideappsfinal/glide-data-grid';
import { useEffect, useRef, useState } from 'react';

import type { ProjectionResetSignal } from '../../TableGlide/types';

// Декларативный сброс нативного выделения при смене «проекции данных» (состав или
// порядок строк): сортировка, фильтры, поиск, группировка, версия данных. Смена
// только фокуса или колонок выделение не сбрасывает. Все проверки O(1).

const EMPTY_SELECTION: GridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: undefined,
};

export type { ProjectionResetSignal };

/** Версия данных: явная от потребителя, иначе сам массив строк (сравнение по ссылке). */
export function resolveDataRevision(
  dataRevision: unknown,
  rows: readonly unknown[],
): unknown {
  return dataRevision !== undefined ? dataRevision : rows;
}

/** Изменилась ли проекция: поэлементное сравнение сигналов через ===. */
export function projectionChanged(
  prev: readonly unknown[],
  next: readonly unknown[],
): boolean {
  return prev.length !== next.length || next.some((v, i) => v !== prev[i]);
}

export function useSelectionProjectionReset({
  projectionParts,
  controlledSetter,
}: {
  /** Сигналы проекции: [sortColumns, filters, searchQuery, groupedCols, revision]. */
  projectionParts: readonly unknown[];
  /** Сеттер controlled-выделения потребителя; undefined в uncontrolled-режиме. */
  controlledSetter?: React.Dispatch<React.SetStateAction<GridSelection>>;
}): { projectionResetSignal: ProjectionResetSignal | undefined } {
  const prevPartsRef = useRef<readonly unknown[] | null>(null);
  const tokenRef = useRef(0);
  const [projectionResetSignal, setProjectionResetSignal] =
    useState<ProjectionResetSignal>();

  // Ссылка на актуальный сеттер, чтобы смена его identity не считалась сменой проекции.
  const controlledSetterRef = useRef(controlledSetter);
  controlledSetterRef.current = controlledSetter;

  useEffect(() => {
    const prev = prevPartsRef.current;
    prevPartsRef.current = projectionParts;
    // Маунт — не сбрасываем (controlled-выделение могло прийти готовым).
    if (prev === null) return;
    if (!projectionChanged(prev, projectionParts)) return;

    const setter = controlledSetterRef.current;
    if (setter) {
      setter(EMPTY_SELECTION);
    } else {
      tokenRef.current += 1;
      setProjectionResetSignal({ token: tokenRef.current });
    }
    // Сравнение по элементам массива, identity самого массива не важна.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, projectionParts as unknown[]);

  return { projectionResetSignal };
}
