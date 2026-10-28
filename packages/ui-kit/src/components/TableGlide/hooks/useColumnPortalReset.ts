import type { RefObject } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import {
  dispatchCanvasPortalReset,
  lockPortalHover
} from '../lib/canvas/utils/portalHoverEvents';

/** Сколько ждать после последнего изменения ширины колонки, чтобы снять блокировку (мс). */
export const RESIZE_LOCK_RELEASE_MS = 300;

/**
 * Тултипы и Popover таблицы при ресайзе и перестановке колонок.
 *
 * Ресайз: на первом шаге сбрасываем тултипы и Popover этой таблицы, пока
 * колонку тянут, наведение в ней выключено (якорь за границей колонки не
 * двигается). Glide не сообщает о конце изменения ширины, поэтому блокировку
 * снимаем, когда события перестали приходить, или при размонтировании.
 *
 * Перестановка: только сброс, блокировка не нужна.
 */
export function useColumnPortalReset(
  portalEventTargetRef?: RefObject<HTMLElement | null>
) {
  const lockRef = useRef<{ release: () => void; timer: number } | null>(null);

  useEffect(
    () => () => {
      if (lockRef.current) {
        window.clearTimeout(lockRef.current.timer);
        lockRef.current.release();
        lockRef.current = null;
      }
    },
    []
  );

  const onColumnResizeStep = useCallback(() => {
    const target = portalEventTargetRef?.current ?? null;
    if (!lockRef.current) dispatchCanvasPortalReset(target);
    const lock = lockRef.current ?? {
      release: lockPortalHover(target),
      timer: 0
    };
    window.clearTimeout(lock.timer);
    lock.timer = window.setTimeout(() => {
      lock.release();
      lockRef.current = null;
    }, RESIZE_LOCK_RELEASE_MS);
    lockRef.current = lock;
  }, [portalEventTargetRef]);

  const onColumnMoved = useCallback(() => {
    dispatchCanvasPortalReset(portalEventTargetRef?.current ?? null);
  }, [portalEventTargetRef]);

  return { onColumnResizeStep, onColumnMoved };
}
