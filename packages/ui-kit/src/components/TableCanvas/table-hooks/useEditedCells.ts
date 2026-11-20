import { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { SKELETON_ROW_KEY } from '../feature-infinity-scroll';
import { isDetailPanelRow } from '../feature-row-detail/typeGuards';
import { isGroupRow } from '../feature-rows-grouping/typeGuards';
import type {
  EditingConfig,
  ObjectForExtending,
  TableCanvasChangedCell,
  TableCanvasEditedCells,
} from '../types';

export function useEditedCells<R extends ObjectForExtending, Id>(
  enabled: boolean,
  rowKeyGetter?: (row: R) => Id,
  controlled?: EditingConfig<R, Id, unknown>['editedCellsState'],
) {
  const [internal, setInternal] = useState<TableCanvasEditedCells<Id>>(
    () => new Map(),
  );
  const [cells, setCells] = controlled ?? [internal, setInternal];
  const session = useRef<{
    setCells: typeof setCells;
    external?: typeof cells;
  }>();
  const external = controlled?.[0];
  // При закрытии таблицы очищаем только отметки её сессии.
  // Родитель может в одном событии принять последнюю правку и закрыть таблицу.
  // Запоминаем предложенные карты, чтобы отличить их от новой карты родителя.
  const [proposed] = useState(() => new WeakSet<typeof cells>());

  const clearSession = useCallback(() => {
    session.current?.setCells((previous) =>
      previous.size ? new Map() : previous,
    );
    session.current = undefined;
  }, []);

  useLayoutEffect(() => {
    if (enabled) session.current = { setCells, external };
    else clearSession();
  }, [enabled, setCells, external, clearSession]);

  const mounted = useRef(false);
  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      const active = session.current;
      if (active?.external) {
        // Ждём конца текущего вызова React, чтобы отличить закрытие таблицы
        // от проверки StrictMode, при которой эффект сразу запускается снова.
        queueMicrotask(() => {
          if (!mounted.current) {
            active.setCells((current) =>
              current.size &&
              (current === active.external || proposed.has(current))
                ? new Map()
                : current,
            );
          }
        });
      }
    };
  }, [proposed]);

  const markEditedCells = useCallback(
    (
      changes: readonly TableCanvasChangedCell<Id>[],
      renamed?: ReadonlyMap<Id, Id>,
    ) => {
      if (!enabled || (!changes.length && !renamed?.size)) return;
      setCells((previous) => {
        // Если rowKeyGetter зависит от редактируемого значения, прежние отметки
        // должны перейти на новый идентификатор вместе со строкой.
        let base = previous;
        if (renamed?.size) {
          const moved = new Map(previous);
          for (const oldId of renamed.keys()) moved.delete(oldId);
          for (const [oldId, newId] of renamed) {
            const keys = previous.get(oldId);
            if (keys) moved.set(newId, keys);
          }
          base = moved;
        }
        const updatedRows = new Map<Id, Set<string>>();
        changes.forEach(({ rowId, columnKey }) => {
          if (base.get(rowId)?.has(columnKey)) return;
          const keys = updatedRows.get(rowId) ?? new Set(base.get(rowId));
          keys.add(columnKey);
          updatedRows.set(rowId, keys);
        });
        if (!updatedRows.size) {
          if (base !== previous) proposed.add(base);
          return base;
        }
        const next = new Map(base);
        for (const [rowId, keys] of updatedRows) next.set(rowId, keys);
        proposed.add(next);
        return next;
      });
    },
    [enabled, setCells, proposed],
  );

  const isCellEdited = useCallback(
    (row: R, columnKey: string) =>
      !!rowKeyGetter &&
      !row[SKELETON_ROW_KEY] &&
      !isGroupRow(row) &&
      !isDetailPanelRow(row) &&
      cells.get(rowKeyGetter(row))?.has(columnKey) === true,
    [cells, rowKeyGetter],
  );

  return {
    markEditedCells,
    clearSession,
    isCellEdited: enabled && cells.size ? isCellEdited : undefined,
  };
}
