import type { DataEditorRef } from '@glideappsfinal/glide-data-grid';
import { type RefObject, useEffect, useLayoutEffect, useRef } from 'react';

/** Сколько держать цель после смены активной ячейки: высоты успевают устояться за пару кадров */
export const KEEP_CELL_IN_VIEW_MS = 1000;

/** Действия пользователя, после которых таблица не должна возвращать его к ячейке */
const USER_SCROLL_EVENTS = ['wheel', 'touchstart', 'pointerdown'] as const;

interface Target {
  col: number;
  row: number;
  until: number;
}

interface Params {
  enabled: boolean;
  dataEditorRef: RefObject<DataEditorRef | null>;
  cell: readonly [number, number] | undefined;
  rowHeights: unknown;
}

/**
 * Держит активную ячейку в кадре, пока высоты строк по содержимому устаиваются.
 *
 * Glide прокручивает к ячейке один раз и считает позицию по высотам, известным в этот
 * момент. Строки, которые ещё не рисовались, считаются базовой высоты: после прыжка
 * (Ctrl+↓, Ctrl+End) они дорастают и выталкивают ячейку за экран. После каждого коммита
 * высот прокрутка повторяется уже по настоящим высотам; если ячейка видна, glide ничего
 * не делает. Цель живёт `KEEP_CELL_IN_VIEW_MS` и сбрасывается прокруткой колесом,
 * касанием и кликом.
 */
export function useKeepCellInView({
  enabled,
  dataEditorRef,
  cell,
  rowHeights,
}: Params) {
  const targetRef = useRef<Target | null>(null);
  const [col, row] = cell ?? [];

  useEffect(() => {
    targetRef.current =
      enabled && col !== undefined && row !== undefined
        ? { col, row, until: Date.now() + KEEP_CELL_IN_VIEW_MS }
        : null;

  }, [enabled, col, row]);

  useEffect(() => {
    if (!enabled) return undefined;
    const forget = () => {
      targetRef.current = null;
    };

    USER_SCROLL_EVENTS.forEach((type) =>
      window.addEventListener(type, forget, { capture: true, passive: true }),
    );

    return () =>
      USER_SCROLL_EVENTS.forEach((type) =>
        window.removeEventListener(type, forget, { capture: true }),
      );
  }, [enabled]);

  useLayoutEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    if (Date.now() > target.until) {
      targetRef.current = null;
      return;
    }
    dataEditorRef.current?.scrollTo(target.col, target.row);
  }, [rowHeights, dataEditorRef]);
}
