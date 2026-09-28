import { throttleWithLastCall } from '@ui-kit/utils';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { RESIZE_THROTTLE_DELAY } from '../AiAgentPopup.constants';
import type {
  AiAgentPopupDragBoundary,
  AiAgentPopupFrame,
  AiAgentPopupPosition,
  AiAgentPopupPositionState,
} from '../AiAgentPopup.types';
import {
  getFallbackPosition,
  getFrameMetrics,
  getPositionFromTarget,
  resolveFrameElement,
  validatePosition,
} from '../AiAgentPopup.utils';

type UsePopupPositionParams = {
  opened?: boolean;
  /** Элемент, справа от которого открыть окно, если позиция ещё не известна */
  targetRef?: React.RefObject<HTMLElement | null>;
  targetGap: number;
  defaultPosition?: AiAgentPopupPosition;
  /** Позиция, прочитанная из хранилища (localStorage) */
  savedPosition?: AiAgentPopupPosition;
  /** Внешний стейт позиции: если передан, окном управляет потребитель */
  externalPositionState?: AiAgentPopupPositionState;
  dragBoundary?: AiAgentPopupDragBoundary;
  /** Контейнер окна: границы и система координат */
  frame?: AiAgentPopupFrame;
};

/**
 * Позиция окна.
 *
 * Откуда берётся позиция (по убыванию приоритета): сохранённая в хранилище,
 * затем defaultPosition, затем справа от targetRef, иначе отступ от левого
 * верхнего угла экрана. Двум последним вариантам нужен настоящий размер
 * окна (чтобы прижать его к таргету и не выпустить за экран), поэтому
 * вычисление происходит только после появления контейнера в документе.
 * Дальше хук следит за изменением размеров окна браузера и возвращает
 * окно в видимую область, если оно оказалось за краем.
 */
export const usePopupPosition = ({
  opened,
  targetRef,
  targetGap,
  defaultPosition,
  savedPosition,
  externalPositionState,
  dragBoundary,
  frame,
}: UsePopupPositionParams) => {
  // Атомарный Popup вставляет содержимое в документ не сразу, а после
  // собственной подготовки. Обычный ref при этом «молчит»: элемент появился,
  // но повторного рендера нет, и эффект вычисления позиции не просыпается.
  // Поэтому ref здесь функцией: в момент появления элемента она кладёт его
  // в стейт, стейт вызывает рендер, и эффект вычисления позиции срабатывает.
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mountedContainer, setMountedContainer] =
    useState<HTMLDivElement | null>(null);
  const setContainerRef = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node;
    setMountedContainer(node);
  }, []);

  const [internalPosition, setInternalPosition] =
    useState<AiAgentPopupPosition | null>(
      () => savedPosition ?? defaultPosition ?? null,
    );

  // null означает «позиция ещё не вычислена» (окно в этот момент спрятано)
  const popupPosition = externalPositionState
    ? externalPositionState[0]
    : internalPosition;

  const setPopupPosition = useCallback(
    (next: AiAgentPopupPosition) => {
      if (externalPositionState) {
        externalPositionState[1](next);
      } else {
        setInternalPosition(next);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [externalPositionState?.[1]],
  );

  // При открытии вычисляем позицию (если её ещё нет) и зажимаем в границы
  // экрана уже с известным размером отрендеренного окна
  useLayoutEffect(() => {
    if (!opened) return;
    const element = mountedContainer;
    if (!element) return;

    const elementSize = {
      width: element.offsetWidth,
      height: element.offsetHeight,
    };
    const frameMetrics = getFrameMetrics(frame);
    const rawPosition =
      popupPosition ??
      (targetRef?.current
        ? getPositionFromTarget(targetRef.current, targetGap, frameMetrics)
        : getFallbackPosition());
    const validated = validatePosition(
      rawPosition,
      elementSize,
      dragBoundary,
      frameMetrics,
    );

    if (
      !popupPosition ||
      validated.x !== popupPosition.x ||
      validated.y !== popupPosition.y
    ) {
      setPopupPosition(validated);
    }
  }, [
    opened,
    mountedContainer,
    popupPosition,
    targetRef,
    targetGap,
    dragBoundary,
    frame,
    setPopupPosition,
  ]);

  // Обработчик ниже живёт от подписки до отписки и актуальную позицию
  // читает через ref, чтобы не переподписываться на каждое её изменение
  const positionRef = useRef(popupPosition);
  useEffect(() => {
    positionRef.current = popupPosition;
  }, [popupPosition]);

  // Если область окна уменьшилась, возвращаем окно в видимую часть.
  // Область меняется двумя путями: ресайз окна браузера и, при
  // frame-контейнере, изменение размеров самого контейнера (например,
  // анимация соседней панели), за ним следит ResizeObserver
  useEffect(() => {
    if (!opened) return undefined;

    const handleAreaResize = throttleWithLastCall(() => {
      const element = containerRef.current;
      const currentPosition = positionRef.current;
      if (!element || !currentPosition) return;

      const validated = validatePosition(
        currentPosition,
        { width: element.offsetWidth, height: element.offsetHeight },
        dragBoundary,
        getFrameMetrics(frame),
      );
      if (
        validated.x !== currentPosition.x ||
        validated.y !== currentPosition.y
      ) {
        setPopupPosition(validated);
      }
    }, RESIZE_THROTTLE_DELAY);

    window.addEventListener('resize', handleAreaResize);
    const frameElement = resolveFrameElement(frame);
    let frameObserver: ResizeObserver | undefined;
    if (frameElement) {
      frameObserver = new ResizeObserver(handleAreaResize);
      frameObserver.observe(frameElement);
    }
    return () => {
      window.removeEventListener('resize', handleAreaResize);
      frameObserver?.disconnect();
      handleAreaResize.cancel();
    };
  }, [opened, dragBoundary, frame, setPopupPosition]);

  return {
    /** Текущая позиция окна, null пока не вычислена */
    popupPosition,
    setPopupPosition,
    /**
     * Позиция для записи в хранилище: при внешнем управлении позицией
     * не сохраняем ничего, за неё отвечает потребитель
     */
    positionForStorage: externalPositionState
      ? undefined
      : internalPosition ?? undefined,
    containerRef,
    setContainerRef,
  };
};
