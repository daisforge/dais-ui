import type { MutableRefObject, RefObject } from 'react';
import { useEffect, useRef } from 'react';

import type { TablePopoverState } from '../../feature-popover-table/context';
import {
  type CanvasPortalHoverDetail,
  subscribeToCanvasPortalHover,
  subscribeToCanvasPortalReset,
  subscribeToPortalHoverLock,
} from '../../TableGlideInstance';
import {
  type CanvasOverlayDefaults,
  getOpenHoverPopover,
  type ResolvedCanvasOverlay,
} from '../types';
import {
  getLastPointer,
  getPopoverSourceKey,
  isEditingInTable,
  isPointInRect,
  type PopoverRect,
  resolveCanvasOverlay,
  trackPointer,
} from '../utils';

/** Поля события клика или наведения, нужные для открытия поповера. */
export type CanvasPopoverAnchorDetail = Pick<
  CanvasPortalHoverDetail,
  'x' | 'y' | 'width' | 'height' | 'tooltipContext'
>;

/** Открыть поповер или дропдаун по событию: общий путь с кликом в CanvasPopoverListener. */
export type OpenCanvasPopover = (
  detail: CanvasPopoverAnchorDetail,
  overlay: ResolvedCanvasOverlay,
  sourceKey: string,
) => void;

interface HoverCandidate {
  sourceKey: string;
  originId: string;
  detail: CanvasPortalHoverDetail;
  rect: PopoverRect;
  overlay: ResolvedCanvasOverlay;
}

export interface UseHoverPopoverOpenParams {
  /** Контейнер таблицы: на нём слушаем наведение на canvas-элементы. */
  containerRef: RefObject<HTMLElement | null>;
  /** Дефолты из tableConfig.popover и tableConfig.dropdown. */
  configRef: MutableRefObject<CanvasOverlayDefaults>;
  stateRef: MutableRefObject<TablePopoverState>;
  /** Открыт ли сейчас какой-нибудь поповер таблицы: после закрытия пересматриваем наведение. */
  isOpen: boolean;
  /** Строки грида: при смене данных запомненное наведение устарело. */
  rows?: readonly unknown[];
  openPopover: OpenCanvasPopover;
}

/**
 * Открывает поповер или дропдаун с `trigger: 'hover'` по наведению на
 * canvas-элемент.
 *
 * Слушает ту же шину, что тултипы: show приходит от CanvasHoverController с
 * `popoverFromNode` или `dropdownFromNode`. Поповер открывается через mouseEnterDelay, если к этому
 * моменту курсор всё ещё над якорем и открытию ничего не мешает. Закрытие по
 * уходу курсора делает сам поповер.
 *
 * Не открывает поповер:
 * - пока открыт поповер по клику или фильтр шапки (проверка и при show, и при
 *   срабатывании таймера: клик мог случиться во время задержки);
 * - пока пользователь печатает в своей таблице (поле ввода, редактор ячейки).
 *
 * Последнее наведение запоминается: когда мешавший поповер закрылся, а курсор
 * всё ещё над элементом, поповер открывается без повторного show (нода шлёт
 * show один раз при входе курсора). Поповер, закрытый, пока курсор над якорем
 * (Esc, кнопка в содержимом, смена данных), заново не открывается, пока курсор
 * не уйдёт с элемента.
 */
export function useHoverPopoverOpen({
  containerRef,
  configRef,
  stateRef,
  isOpen,
  rows,
  openPopover,
}: UseHoverPopoverOpenParams) {
  const openPopoverRef = useRef(openPopover);
  openPopoverRef.current = openPopover;
  // Функции живут внутри эффекта подписки, наружу — через ref.
  const reconsiderRef = useRef<() => void>(() => {});
  const resetRef = useRef<() => void>(() => {});

  useEffect(() => {
    const target = containerRef.current;
    let pending: (HoverCandidate & { timer: number }) | null = null;
    // Последнее наведение на элемент с поповером по наведению.
    let candidate: HoverCandidate | null = null;
    // Наведение, чей поповер открыли мы.
    let opened: HoverCandidate | null = null;
    // Поповер закрылся, пока курсор над якорем: ждём ухода курсора.
    let dismissed: HoverCandidate | null = null;
    let locked = false;
    // За курсором следим, только если в таблице встретился поповер по наведению.
    let releasePointer: (() => void) | null = null;

    const isPointerOver = (rect: PopoverRect) => {
      const pointer = getLastPointer();
      return !pointer || isPointInRect(pointer.x, pointer.y, rect, 1);
    };

    const canOpen = (next: HoverCandidate) => {
      if (locked || isEditingInTable(target)) return false;
      const state = stateRef.current;
      if (!state.isOpen) return true;
      // Открытый поповер по наведению сменяется наведением на другой элемент.
      return !!getOpenHoverPopover(state) && state.sourceKey !== next.sourceKey;
    };

    const cancelPending = () => {
      if (!pending) return;
      window.clearTimeout(pending.timer);
      pending = null;
    };

    const schedule = (next: HoverCandidate) => {
      cancelPending();
      const timer = window.setTimeout(() => {
        pending = null;
        if (!isPointerOver(next.rect) || !canOpen(next)) return;
        opened = next;
        openPopoverRef.current(next.detail, next.overlay, next.sourceKey);
      }, next.overlay.config.mouseEnterDelay);
      pending = { ...next, timer };
    };

    const reset = () => {
      cancelPending();
      candidate = null;
      opened = null;
      dismissed = null;
    };

    const handleShow = (detail: CanvasPortalHoverDetail) => {
      const originId = detail.originId ?? detail.nodeId;
      const sourceKey = getPopoverSourceKey({
        originId: originId ?? '',
        tooltipContext: detail.tooltipContext,
      });
      if (!originId || !sourceKey) return;

      if (dismissed && !isPointerOver(dismissed.rect)) dismissed = null;
      if (pending?.sourceKey === sourceKey) return;
      if (dismissed?.sourceKey === sourceKey) return;

      const overlay = resolveCanvasOverlay(detail, configRef.current);
      if (!overlay || overlay.config.trigger !== 'hover') return;

      releasePointer = releasePointer ?? trackPointer();
      candidate = {
        sourceKey,
        originId,
        detail,
        rect: {
          x: detail.x,
          y: detail.y,
          width: detail.width,
          height: detail.height,
        },
        overlay,
      };
      if (canOpen(candidate)) schedule(candidate);
    };

    // Скрытие источника: курсор ушёл. Явный id ноды одинаковый во всех строках,
    // поэтому решает геометрия: пока курсор над прямоугольником, наведение живо.
    // Скрытие без источника (сброс тултипа) не трогаем: оно приходит и при
    // переходе внутрь ячейки, а положение курсора проверит таймер.
    const handleHide = (detail: CanvasPortalHoverDetail) => {
      const origin = detail.originId ?? detail.nodeId;
      if (!origin) return;
      if (dismissed?.originId === origin && !isPointerOver(dismissed.rect)) {
        dismissed = null;
      }
      if (candidate?.originId === origin && !isPointerOver(candidate.rect)) {
        candidate = null;
      }
      if (pending?.originId === origin && !isPointerOver(pending.rect)) {
        cancelPending();
      }
    };

    const unsubscribeHover = subscribeToCanvasPortalHover((detail) => {
      if (detail.visible) handleShow(detail);
      else handleHide(detail);
    }, target);

    // Прокрутка: якорь ожидания и запомненного наведения устарел.
    target?.addEventListener('scroll', reset, true);

    // Ресайз или перестановка колонки в этой таблице.
    const unsubscribeReset = subscribeToCanvasPortalReset(reset, target);

    // Перетаскивание или ресайз колонки: наведение не обрабатываем.
    const unsubscribeLock = subscribeToPortalHoverLock((isLocked) => {
      locked = isLocked;
      if (isLocked) reset();
    });

    reconsiderRef.current = () => {
      if (opened) {
        if (candidate?.sourceKey === opened.sourceKey) candidate = null;
        if (isPointerOver(opened.rect)) dismissed = opened;
        opened = null;
      }
      if (
        !pending &&
        candidate &&
        isPointerOver(candidate.rect) &&
        canOpen(candidate)
      ) {
        schedule(candidate);
      }
    };
    resetRef.current = reset;

    return () => {
      unsubscribeHover();
      unsubscribeLock();
      unsubscribeReset();
      target?.removeEventListener('scroll', reset, true);
      cancelPending();
      releasePointer?.();
      reconsiderRef.current = () => {};
      resetRef.current = () => {};
    };
  }, [containerRef, configRef, stateRef]);

  // Поповер (любой) закрылся: наведение, которому он мешал, можно показать.
  useEffect(() => {
    if (!isOpen) reconsiderRef.current();
  }, [isOpen]);

  // Новые данные: строка в запомненном наведении устарела.
  useEffect(() => {
    resetRef.current();
  }, [rows]);
}
