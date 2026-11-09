import {
  type CanvasPortalHoverDetail,
  isPortalHoverLocked,
  subscribeToCanvasPortalHover,
  subscribeToCanvasPortalReset,
  subscribeToPortalHoverLock,
} from '@ui-kit/components/TableGlide/lib/canvas/utils/portalHoverEvents';
import type { MutableRefObject, RefObject } from 'react';
import { useEffect, useRef } from 'react';

import type { TablePopoverState } from '../../../context';
import type { CanvasOverlayDefaults, ResolvedCanvasOverlay } from '../types';
import { getOverlaySourceKey } from '../utils/anchor';
import { isEditingInTable } from '../utils/floatingContainer';
import { isPointInRect, type PopoverRect } from '../utils/geometry';
import { getOpenHoverOverlay } from '../utils/overlayState';
import { getLastPointer, trackPointer } from '../utils/pointerPosition';
import { resolveCanvasOverlay } from '../utils/resolveCanvasOverlay';

/** Поля события клика или наведения, нужные для открытия Popover. */
export type CanvasOverlayAnchorDetail = Pick<
  CanvasPortalHoverDetail,
  'x' | 'y' | 'width' | 'height' | 'tooltipContext'
>;

/** Открывает Popover или Dropdown так же, как по клику в CanvasOverlayListener. */
export type OpenCanvasOverlay = (
  detail: CanvasOverlayAnchorDetail,
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

export interface UseHoverOverlayOpenParams {
  /** Контейнер таблицы: на нём слушаем наведение на canvas-элементы. */
  containerRef: RefObject<HTMLElement | null>;
  /** Значения по умолчанию из tableConfig.popover и tableConfig.dropdown. */
  configRef: MutableRefObject<CanvasOverlayDefaults>;
  stateRef: MutableRefObject<TablePopoverState>;
  /** Открыт ли сейчас любой Popover таблицы: после закрытия снова проверяем наведение. */
  isOpen: boolean;
  /** Строки таблицы: при смене данных запомненное наведение устарело. */
  rows?: readonly unknown[];
  openOverlay: OpenCanvasOverlay;
}

/**
 * Открывает Popover или Dropdown с `trigger: 'hover'` по наведению на
 * canvas-элемент. Открываем через mouseEnterDelay, если курсор всё ещё над
 * элементом, не открыт Popover по клику или фильтр шапки и пользователь не
 * печатает в таблице.
 *
 * Наведение запоминается: когда мешавший Popover закрылся, а курсор на месте,
 * открываем без нового события. Popover, закрытый под курсором (Esc, кнопка в
 * содержимом), снова откроется только после того, как курсор уйдёт и вернётся.
 */
export function useHoverOverlayOpen({
  containerRef,
  configRef,
  stateRef,
  isOpen,
  rows,
  openOverlay,
}: UseHoverOverlayOpenParams) {
  const openOverlayRef = useRef(openOverlay);
  openOverlayRef.current = openOverlay;
  // Функции создаются внутри эффекта, другим эффектам отдаём их через ref.
  const reconsiderRef = useRef<() => void>(() => {});
  const resetRef = useRef<() => void>(() => {});

  useEffect(() => {
    const target = containerRef.current;
    let pending: (HoverCandidate & { timer: number }) | null = null;
    // Последнее наведение на элемент с Popover по наведению.
    let candidate: HoverCandidate | null = null;
    // Наведение, по которому открыли Popover.
    let opened: HoverCandidate | null = null;
    // Popover закрылся, пока курсор над элементом: ждём, когда курсор уйдёт.
    let dismissed: HoverCandidate | null = null;
    let locked = isPortalHoverLocked(target);
    // За курсором следим, только если в таблице есть Popover по наведению.
    let releasePointer: (() => void) | null = null;

    const isPointerOver = (rect: PopoverRect) => {
      const pointer = getLastPointer();
      return !pointer || isPointInRect(pointer.x, pointer.y, rect, 1);
    };

    const canOpen = (next: HoverCandidate) => {
      if (locked || isEditingInTable(target)) return false;
      const state = stateRef.current;
      if (!state.isOpen) return true;
      // Открытый Popover по наведению сменяется наведением на другой элемент.
      return !!getOpenHoverOverlay(state) && state.sourceKey !== next.sourceKey;
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
        openOverlayRef.current(next.detail, next.overlay, next.sourceKey);
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
      const sourceKey = getOverlaySourceKey({
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

    // Курсор ушёл с элемента. id элемента одинаковый во всех строках, поэтому
    // проверяем координаты курсора. Скрытие без id не учитываем: оно приходит и
    // при переходе внутри ячейки, а положение курсора потом проверит таймер.
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

    // Прокрутка: запомненные координаты элементов устарели. Сбрасываем сразу,
    // без троттлинга: отложенный сброс стёр бы наведение, пришедшее после
    // последнего кадра прокрутки, и окно не открылось бы. Сам сброс дешёвый.
    target?.addEventListener('scroll', reset, true);

    // Ширину колонки поменяли или колонку переставили.
    const unsubscribeReset = subscribeToCanvasPortalReset(reset, target);

    // Колонку перетаскивают или меняют ширину: наведение не обрабатываем.
    const unsubscribeLock = subscribeToPortalHoverLock((isLocked) => {
      locked = isLocked;
      if (isLocked) reset();
    }, target);

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

  // Любой Popover закрылся: можно открыть тот, которому он мешал.
  useEffect(() => {
    if (!isOpen) reconsiderRef.current();
  }, [isOpen]);

  useEffect(() => {
    resetRef.current();
  }, [rows]);
}
