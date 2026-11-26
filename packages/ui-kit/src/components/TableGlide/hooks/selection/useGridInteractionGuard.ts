import isEqual from 'lodash.isequal';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import type { MutableRefObject, PointerEvent } from 'react';

import type { SelectionView } from '../../types';

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

/** Блокирует запись из редактора или протяжки, если по старым координатам теперь другие данные. */
export function useGridInteractionGuard<R>(
  view: GridView<R>,
  editor: MutableRefObject<readonly [number, number] | undefined>,
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
  return { staleEditor, staleGesture, staleFill, beginGesture };
}
