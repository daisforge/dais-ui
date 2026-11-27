import isEqual from 'lodash.isequal';
import type { MutableRefObject, PointerEvent } from 'react';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

import type { GlideProps, SelectionView } from '../../types';

type GridHandlers = Pick<
  GlideProps,
  | 'onGridSelectionChange'
  | 'onSelectionCleared'
  | 'onCellsEdited'
  | 'onFillPattern'
  | 'onFinishedEditing'
>;

interface GridView<R> {
  rows: readonly R[];
  columns: readonly { id?: string }[];
  data?: SelectionView<R>;
}

function sameRecord<R>(before: GridView<R>, after: GridView<R>, index: number) {
  const old = before.rows[index];
  const row = after.rows[index];
  if (old === undefined || row === undefined) return false;
  if (old === row) return true;
  const key = before.data?.rowKey?.(old);
  return key != null && key === after.data?.rowKey?.(row);
}

/**
 * Пропускает события Glide, пока жест или редактор относятся к тем же данным.
 * После смены представления позднее событие по старым координатам могло бы
 * выделить другую запись или записать в неё значение.
 */
export function useGridInteractionGuard<R>(
  view: GridView<R>,
  editor: MutableRefObject<readonly [number, number] | undefined>,
  {
    onGridSelectionChange,
    onSelectionCleared,
    onCellsEdited,
    onFillPattern,
    onFinishedEditing,
  }: GridHandlers,
) {
  const staleEditor = useRef(false);
  const staleGesture = useRef(false);
  const staleFill = useRef(false);
  const committed = useRef(view);
  const gesture = useRef<AbortController>();
  const endGesture = useCallback(() => {
    gesture.current?.abort();
    gesture.current = undefined;
    staleGesture.current = false;
    staleFill.current = false;
  }, []);

  useEffect(() => endGesture, [endGesture]);

  const beginGesture = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (
        event.button !== 0 ||
        !(event.target instanceof Element) ||
        !event.target.closest('.gdg-table')
      )
        return;
      endGesture();
      const controller = new AbortController();
      gesture.current = controller;
      const finish = (e: globalThis.PointerEvent) => {
        if (e.pointerId !== event.pointerId) return;
        // Glide обрабатывает конец протяжки в том же событии pointerup.
        window.setTimeout(() => {
          if (gesture.current === controller) endGesture();
        }, 0);
      };
      const options = { capture: true, signal: controller.signal };
      window.addEventListener('pointerup', finish, options);
      window.addEventListener('pointercancel', finish, options);
      window.addEventListener('blur', endGesture, options);
    },
    [endGesture],
  );

  useLayoutEffect(() => {
    const before = committed.current;
    committed.current = view;
    if (!editor.current && !gesture.current) return;
    const changedData =
      before.data?.page !== view.data?.page ||
      before.data?.perPage !== view.data?.perPage ||
      before.data?.revision !== view.data?.revision ||
      before.data?.loading !== view.data?.loading ||
      !isEqual(before.data?.criteria, view.data?.criteria);
    const cell = editor.current;
    const editorMoved =
      cell &&
      (before.columns[cell[0]]?.id !== view.columns[cell[0]]?.id ||
        !sameRecord(before, view, cell[1]));
    if (cell && (changedData || editorMoved)) staleEditor.current = true;
    if (!gesture.current) return;
    const changedGeometry =
      changedData ||
      before.rows.length !== view.rows.length ||
      (before.columns !== view.columns &&
        (before.columns.length !== view.columns.length ||
          before.columns.some((col, i) => col.id !== view.columns[i]?.id)));
    const replacedRows =
      !changedGeometry &&
      before.rows !== view.rows &&
      before.rows.some((_, i) => !sameRecord(before, view, i));
    // Без ключа выбор мышью позиционный. Запись через протяжку требует
    // уверенности, что под её координатами остались прежние записи.
    if (changedGeometry || replacedRows) staleFill.current = true;
    if (changedGeometry || (replacedRows && view.data?.rowKey))
      staleGesture.current = true;
  });

  const setEditorCell = useCallback(
    (cell: typeof editor.current) => {
      editor.current = cell;
      staleEditor.current = false;
    },
    [editor],
  );

  const changeSelection = useCallback<
    NonNullable<GridHandlers['onGridSelectionChange']>
  >(
    (next) => {
      if (!staleGesture.current) onGridSelectionChange?.(next);
    },
    [onGridSelectionChange],
  );

  const clearSelection = useCallback(() => {
    if (!staleGesture.current) onSelectionCleared?.();
  }, [onSelectionCleared]);

  const editCells = useCallback<NonNullable<GridHandlers['onCellsEdited']>>(
    (edits) => {
      if (staleEditor.current || staleFill.current) return true;
      return onCellsEdited?.(edits);
    },
    [onCellsEdited],
  );

  const fill = useCallback<NonNullable<GridHandlers['onFillPattern']>>(
    (event) => {
      if (staleFill.current) event.preventDefault();
      else onFillPattern?.(event);
    },
    [onFillPattern],
  );

  const finishEditing = useCallback<
    NonNullable<GridHandlers['onFinishedEditing']>
  >(
    (value, movement) => {
      const cancelled = staleEditor.current;
      setEditorCell(undefined);
      onFinishedEditing?.(cancelled ? undefined : value, movement);
    },
    [onFinishedEditing, setEditorCell],
  );

  return {
    beginGesture,
    setEditorCell,
    handlers: {
      onGridSelectionChange: changeSelection,
      onSelectionCleared: clearSelection,
      onCellsEdited: editCells,
      onFillPattern: fill,
      onFinishedEditing: finishEditing,
    },
  };
}
