import { createDebugLogger } from '@ui-kit/shared/utils/debug';
import { useCallback, useMemo, useRef, useState } from 'react';

import type {
  TablePopoverContextValue,
  TablePopoverState,
} from '../context/TablePopoverContext';

const PFX = '[useTablePopoverState]';
// Диагностика: общий флаг фильтра window.__TABLE_CANVAS_FILTER_DEBUG__ = true.
const popoverDebug = createDebugLogger('TABLE_CANVAS_FILTER');

/**
 * Страховочный сброс защёлки переоткрытия, если после закрытия по клику-мимо
 * open() так и не пришёл (например, кликнули по пустому месту). pointerdown и
 * mouseup одного жеста укладываются в это окно с запасом.
 */
const REOPEN_GUARD_MS = 300;

/**
 * Хук для создания значения контекста поповера.
 * Вызывается в TableCanvas и передаётся в TablePopoverProvider.
 *
 * Защёлка переоткрытия (justClosedByOutsidePress) реализует toggle-закрытие
 * поповера фильтра при повторном клике по той же иконке. Иконка нарисована на
 * canvas (glide), поэтому floating-ui useDismiss считает клик по ней «кликом мимо»
 * и закрывает поповер уже на pointerdown. Сам клик по иконке приходит позже, на
 * mouseup, и без защёлки снова открыл бы поповер. Поэтому при закрытии по
 * клику-мимо запоминаем колонку и гасим следующий open() для неё.
 */
export const useTablePopoverState = (): TablePopoverContextValue => {
  const [state, setState] = useState<TablePopoverState>({
    isOpen: false,
    position: null,
    contentType: null,
    contentData: undefined,
    columnId: null,
  });

  // Колонка, для которой поповер открыт сейчас.
  const openColumnIdRef = useRef<string | null>(null);
  // Поповер только что закрылся по клику-мимо (floating-ui useDismiss).
  const justClosedByOutsidePressRef = useRef(false);
  // Колонка, для которой сработало это закрытие.
  const lastClosedColumnIdRef = useRef<string | null>(null);
  const guardTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const disarmReopenGuard = useCallback(() => {
    justClosedByOutsidePressRef.current = false;
    if (guardTimerRef.current !== null) {
      clearTimeout(guardTimerRef.current);
      guardTimerRef.current = null;
    }
  }, []);

  const open = useCallback(
    ({
      position,
      contentType,
      contentData,
      columnId,
    }: {
      position: { x: number; y: number };
      contentType: 'filter' | 'custom';
      contentData?: unknown;
      columnId?: string;
    }) => {
      const nextColumnId = columnId ?? null;

      // Повторный клик по той же иконке: поповер уже закрыт на pointerdown, а этот
      // open() пришёл на mouseup. Оставляем закрытым (toggle).
      if (
        justClosedByOutsidePressRef.current &&
        nextColumnId !== null &&
        lastClosedColumnIdRef.current === nextColumnId
      ) {
        disarmReopenGuard();
        return;
      }
      disarmReopenGuard();

      popoverDebug(PFX, 'OPEN called', { position, contentType, columnId });
      openColumnIdRef.current = nextColumnId;
      setState({
        isOpen: true,
        position,
        contentType,
        contentData,
        columnId: nextColumnId,
      });
    },
    [disarmReopenGuard],
  );

  const close = useCallback((options?: { outsidePress?: boolean }) => {
    if (options?.outsidePress) {
      // Взводим защёлку: запоминаем колонку, чтобы догоняющий open() для неё
      // не переоткрыл поповер.
      lastClosedColumnIdRef.current = openColumnIdRef.current;
      justClosedByOutsidePressRef.current = true;
      if (guardTimerRef.current !== null) {
        clearTimeout(guardTimerRef.current);
      }
      guardTimerRef.current = setTimeout(() => {
        justClosedByOutsidePressRef.current = false;
        guardTimerRef.current = null;
      }, REOPEN_GUARD_MS);
    }
    openColumnIdRef.current = null;
    setState((prev: TablePopoverState) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const updatePosition = useCallback((position: { x: number; y: number }) => {
    popoverDebug(PFX, 'UPDATE POSITION called', { position });
    setState((prev: TablePopoverState) => ({
      ...prev,
      position,
    }));
  }, []);

  return useMemo(
    () => ({
      state,
      open,
      close,
      updatePosition,
    }),
    [state, open, close, updatePosition],
  );
};
