import { createDebugLogger } from '@ui-kit/shared/utils/debug';
import { useCallback, useMemo, useRef, useState } from 'react';

import type {
  TablePopoverContextValue,
  TablePopoverOpenParams,
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
 * клику-мимо запоминаем ключ источника и гасим следующий open() для него.
 * Так же работает canvas-поповер по клику: его якорь пропускает клики на canvas.
 */
export const useTablePopoverState = (): TablePopoverContextValue => {
  const [state, setState] = useState<TablePopoverState>({
    isOpen: false,
    position: null,
    anchorSize: null,
    contentType: null,
    contentData: undefined,
    render: undefined,
    behavior: null,
    sourceKey: null,
  });

  // Источник, для которого поповер открыт сейчас.
  const openSourceKeyRef = useRef<string | null>(null);
  // Поповер только что закрылся по клику-мимо (floating-ui useDismiss).
  const justClosedByOutsidePressRef = useRef(false);
  // Источник, для которого сработало это закрытие.
  const lastClosedSourceKeyRef = useRef<string | null>(null);
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
      anchorSize,
      contentType,
      contentData,
      render,
      behavior,
      sourceKey,
    }: TablePopoverOpenParams) => {
      const nextSourceKey = sourceKey ?? null;

      // Повторный клик по той же иконке: поповер уже закрыт на pointerdown, а этот
      // open() пришёл на mouseup. Оставляем закрытым (toggle).
      if (
        justClosedByOutsidePressRef.current &&
        nextSourceKey !== null &&
        lastClosedSourceKeyRef.current === nextSourceKey
      ) {
        disarmReopenGuard();
        return;
      }
      disarmReopenGuard();

      popoverDebug(PFX, 'OPEN called', { position, contentType, sourceKey });
      openSourceKeyRef.current = nextSourceKey;
      setState({
        isOpen: true,
        position,
        anchorSize: anchorSize ?? null,
        contentType,
        contentData,
        render,
        behavior: behavior ?? null,
        sourceKey: nextSourceKey,
      });
    },
    [disarmReopenGuard],
  );

  const close = useCallback((options?: { outsidePress?: boolean }) => {
    if (options?.outsidePress) {
      // Взводим защёлку: запоминаем колонку, чтобы догоняющий open() для неё
      // не переоткрыл поповер.
      lastClosedSourceKeyRef.current = openSourceKeyRef.current;
      justClosedByOutsidePressRef.current = true;
      if (guardTimerRef.current !== null) {
        clearTimeout(guardTimerRef.current);
      }
      guardTimerRef.current = setTimeout(() => {
        justClosedByOutsidePressRef.current = false;
        guardTimerRef.current = null;
      }, REOPEN_GUARD_MS);
    }
    openSourceKeyRef.current = null;
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
