import type { RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import type {
  CanvasPortalHoverDetail,
  CanvasPortalSource,
} from '../../TableGlideInstance';
import {
  subscribeToCanvasPortalHover,
  subscribeToPortalHoverLock,
} from '../../TableGlideInstance';

export interface PortalHoverState<T = unknown> {
  visible: boolean;
  leaving: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  nodeId: string | null;
  data: T | null;
}

export interface UsePortalHoverOptions<T = unknown> {
  source?: CanvasPortalSource;
  filter: (detail: CanvasPortalHoverDetail) => T | null;
  leaveAnimationDuration?: number;
  /**
   * Ref на контейнер таблицы.
   * Подписка идёт на containerRef.current (для нескольких таблиц на странице у каждой свой ref).
   */
  containerRef?: RefObject<EventTarget | null>;
  /** Глобальный mouseEnterDelay по умолчанию (мс). */
  defaultMouseEnterDelay?: number;
  /** Глобальный mouseLeaveDelay по умолчанию (мс). */
  defaultMouseLeaveDelay?: number;
  /** Извлечь per-node задержки из data (переопределяют глобальные). */
  getDelays?: (data: T) => {
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
  };
}

const DEFAULT_LEAVE_DURATION = 200;

function createInitialState<T>(): PortalHoverState<T> {
  return {
    visible: false,
    leaving: false,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    nodeId: null,
    data: null,
  };
}

export function usePortalHover<T = unknown>(
  options: UsePortalHoverOptions<T>,
): PortalHoverState<T> {
  const {
    source,
    filter,
    leaveAnimationDuration = DEFAULT_LEAVE_DURATION,
    containerRef,
    defaultMouseEnterDelay = 0,
    defaultMouseLeaveDelay = 0,
    getDelays,
  } = options;

  const [state, setState] = useState<PortalHoverState<T>>(createInitialState);
  const leaveTimeoutRef = useRef<number | null>(null);
  const showTimeoutRef = useRef<number | null>(null);
  const hideDelayTimeoutRef = useRef<number | null>(null);
  const initialStateRef = useRef(createInitialState<T>());
  const lockedRef = useRef(false);
  const currentNodeIdRef = useRef<string | null>(null);
  const currentDataRef = useRef<T | null>(null);
  const currentPriorityRef = useRef(0);

  const clearAllTimers = useCallback(() => {
    if (leaveTimeoutRef.current !== null) {
      window.clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (showTimeoutRef.current !== null) {
      window.clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
    if (hideDelayTimeoutRef.current !== null) {
      window.clearTimeout(hideDelayTimeoutRef.current);
      hideDelayTimeoutRef.current = null;
    }
  }, []);

  const hideImmediately = useCallback(() => {
    clearAllTimers();
    currentNodeIdRef.current = null;
    currentDataRef.current = null;
    currentPriorityRef.current = 0;
    setState(initialStateRef.current);
  }, [clearAllTimers]);

  const startLeaveAnimation = useCallback(() => {
    setState((prev) => {
      if (!prev.visible || prev.leaving) return prev;
      return { ...prev, leaving: true };
    });

    leaveTimeoutRef.current = window.setTimeout(() => {
      setState(initialStateRef.current);
      leaveTimeoutRef.current = null;
      currentNodeIdRef.current = null;
      currentDataRef.current = null;
      currentPriorityRef.current = 0;
    }, leaveAnimationDuration);
  }, [leaveAnimationDuration]);

  useEffect(() => {
    const eventTarget = containerRef?.current ?? undefined;

    const unsubscribeHover = subscribeToCanvasPortalHover(
      (detail: CanvasPortalHoverDetail) => {
        if (source && detail.source !== source) return;
        if (lockedRef.current) return;

        if (!detail.visible) {
          // Игнорируем устаревшие hide-события от другого элемента
          const hideOrigin = detail.originId ?? detail.nodeId ?? null;
          if (
            hideOrigin &&
            currentNodeIdRef.current &&
            hideOrigin !== currentNodeIdRef.current
          ) {
            return;
          }

          // Если show ещё не произошёл (ожидает enterDelay) — просто отменяем его
          if (showTimeoutRef.current !== null) {
            window.clearTimeout(showTimeoutRef.current);
            showTimeoutRef.current = null;
            currentNodeIdRef.current = null;
            currentDataRef.current = null;
            currentPriorityRef.current = 0;
            return;
          }

          // Вычисляем leaveDelay из текущих данных
          const delays =
            currentDataRef.current && getDelays
              ? getDelays(currentDataRef.current)
              : undefined;
          const leaveDelay = delays?.mouseLeaveDelay ?? defaultMouseLeaveDelay;

          // Очищаем предыдущие таймеры hide
          if (hideDelayTimeoutRef.current !== null) {
            window.clearTimeout(hideDelayTimeoutRef.current);
            hideDelayTimeoutRef.current = null;
          }
          if (leaveTimeoutRef.current !== null) {
            window.clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
          }

          // Сбрасываем приоритет при начале скрытия, чтобы тултип с меньшим приоритетом
          // (колоночный) мог появиться, не дожидаясь окончания leave-анимации.
          currentPriorityRef.current = 0;

          if (leaveDelay > 0) {
            hideDelayTimeoutRef.current = window.setTimeout(() => {
              hideDelayTimeoutRef.current = null;
              startLeaveAnimation();
            }, leaveDelay);
          } else {
            startLeaveAnimation();
          }
          return;
        }

        // visible === true — показываем тултип
        const data = filter(detail);
        if (data === null) return;

        const eventPriority = detail.priority ?? 0;

        // Не заменяем тултип с бо́льшим приоритетом (canvas-нода > колоночный)
        if (eventPriority < currentPriorityRef.current) {
          return;
        }

        // Дедупликация: тот же тултип с тем же приоритетом — пропускаем (избегаем лишних ре-рендеров)
        const incomingOriginId = detail.originId ?? detail.nodeId ?? null;
        if (
          incomingOriginId === currentNodeIdRef.current &&
          eventPriority === currentPriorityRef.current
        ) {
          return;
        }

        // Очищаем все таймеры при новом show
        clearAllTimers();
        currentNodeIdRef.current = incomingOriginId;
        currentDataRef.current = data;
        currentPriorityRef.current = eventPriority;

        // Вычисляем enterDelay
        const delays = getDelays ? getDelays(data) : undefined;
        const enterDelay = delays?.mouseEnterDelay ?? defaultMouseEnterDelay;

        const showNow = () => {
          setState({
            visible: true,
            leaving: false,
            x: detail.x,
            y: detail.y,
            width: detail.width,
            height: detail.height,
            nodeId: detail.nodeId ?? null,
            data,
          });
        };

        if (enterDelay > 0) {
          showTimeoutRef.current = window.setTimeout(() => {
            showTimeoutRef.current = null;
            showNow();
          }, enterDelay);
        } else {
          showNow();
        }
      },
      eventTarget,
    );

    const unsubscribeLock = subscribeToPortalHoverLock((locked: boolean) => {
      lockedRef.current = locked;
      if (locked) {
        hideImmediately();
      }
    });

    return () => {
      unsubscribeHover();
      unsubscribeLock();
      clearAllTimers();
    };
  }, [
    source,
    filter,
    leaveAnimationDuration,
    containerRef,
    defaultMouseEnterDelay,
    defaultMouseLeaveDelay,
    getDelays,
    clearAllTimers,
    hideImmediately,
    startLeaveAnimation,
  ]);

  return state;
}
