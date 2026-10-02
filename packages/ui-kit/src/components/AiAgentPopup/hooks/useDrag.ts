import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { DRAG_THRESHOLD, NO_DRAG_SELECTOR } from '../AiAgentPopup.constants';
import type {
  AiAgentPopupDragBoundary,
  AiAgentPopupFrame,
  AiAgentPopupFrameMetrics,
  AiAgentPopupPosition,
} from '../AiAgentPopup.types';
import { getFrameMetrics } from '../AiAgentPopup.utils';

type UseDragParams = {
  /** Элемент, который перетаскиваем (контейнер окна) */
  elementRef: React.RefObject<HTMLElement | null>;
  setPosition: (position: AiAgentPopupPosition) => void;
  dragBoundary?: AiAgentPopupDragBoundary;
  onPositionChange?: (position: AiAgentPopupPosition) => void;
  /** Дополнительный селектор зон, с которых перетаскивание не начинается */
  ignoreSelector?: string;
  /** Контейнер окна: границы перетаскивания и система координат */
  frame?: AiAgentPopupFrame;
};

/**
 * Перетаскивание окна за контейнер.
 *
 * Как отличаем перетаскивание от обычных действий с содержимым:
 * - нажатие на интерактивных элементах (кнопки, поля ввода) и в зонах
 *   с data-no-drag или из ignoreSelector не начинает перетаскивание;
 * - смещения меньше DRAG_THRESHOLD считаются кликом, а не перетаскиванием,
 *   поэтому клики по «пустым» местам окна работают как обычно.
 *
 * Позиция на каждом шаге зажимается в границах экрана с учётом dragBoundary.
 */
export const useDrag = ({
  elementRef,
  setPosition,
  dragBoundary,
  onPositionChange,
  ignoreSelector,
  frame,
}: UseDragParams) => {
  // Кнопка мыши или палец сейчас зажаты (порог мог быть ещё не пройден)
  const [isDragging, setIsDragging] = useState(false);
  // Порог пройден, окно действительно перемещается
  const [dragActive, setDragActive] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const wasDragged = useRef(false);
  // Метрики области снимаются один раз на старте: во время перетаскивания
  // ни окно браузера, ни frame не меняются, а замер на каждое движение
  // мыши это принудительный layout
  const frameMetricsRef = useRef<AiAgentPopupFrameMetrics | null>(null);

  const noDragSelector = useMemo(
    () =>
      ignoreSelector
        ? `${NO_DRAG_SELECTOR}, ${ignoreSelector}`
        : NO_DRAG_SELECTOR,
    [ignoreSelector],
  );

  const startDrag = useCallback(
    (clientX: number, clientY: number) => {
      if (!elementRef.current) return;

      wasDragged.current = false;
      dragStartPos.current = { x: clientX, y: clientY };
      frameMetricsRef.current = getFrameMetrics(frame);

      // Запоминаем, за какую точку окна схватились, чтобы при движении
      // окно не прыгало левым верхним углом под курсор
      const rect = elementRef.current.getBoundingClientRect();
      dragOffset.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };

      setIsDragging(true);
    },
    [elementRef, frame],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Только левая кнопка: правая открывает контекстное меню, средняя
      // включает автоскролл, окно они таскать не должны
      if (e.button !== 0) return;
      if ((e.target as HTMLElement).closest(noDragSelector)) return;
      startDrag(e.clientX, e.clientY);
    },
    [startDrag, noDragSelector],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if ((e.target as HTMLElement).closest(noDragSelector)) return;
      const touch = e.touches[0];
      if (touch) {
        startDrag(touch.clientX, touch.clientY);
      }
    },
    [startDrag, noDragSelector],
  );

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging || !elementRef.current) return;

      const dx = Math.abs(clientX - dragStartPos.current.x);
      const dy = Math.abs(clientY - dragStartPos.current.y);

      if (!wasDragged.current && dx < DRAG_THRESHOLD && dy < DRAG_THRESHOLD) {
        return;
      }

      if (!wasDragged.current) {
        wasDragged.current = true;
        setDragActive(true);
        // Выделение текста, начатое до порога, мешает перетаскиванию
        window.getSelection()?.removeAllRanges();
      }

      const { offsetWidth, offsetHeight } = elementRef.current;
      // Координаты мыши всегда от вьюпорта, позиция окна в системе области
      const frameMetrics = frameMetricsRef.current ?? getFrameMetrics(frame);
      const { top = 0, right = 0, bottom = 0, left = 0 } = dragBoundary || {};

      const newX = Math.max(
        left,
        Math.min(
          clientX - dragOffset.current.x - frameMetrics.left,
          frameMetrics.width - offsetWidth - right,
        ),
      );
      const newY = Math.max(
        top,
        Math.min(
          clientY - dragOffset.current.y - frameMetrics.top,
          frameMetrics.height - offsetHeight - bottom,
        ),
      );

      const newPosition = { x: newX, y: newY };
      setPosition(newPosition);
      onPositionChange?.(newPosition);
    },
    [
      isDragging,
      elementRef,
      dragBoundary,
      setPosition,
      onPositionChange,
      frame,
    ],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    },
    [handleMove],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;

      handleMove(touch.clientX, touch.clientY);
    },
    [handleMove],
  );

  const endDrag = useCallback(() => {
    setIsDragging(false);
    setDragActive(false);
  }, []);

  // Движение и завершение слушаем на документе: курсор и палец при
  // перетаскивании легко уходят за пределы окна AI-помощника. touchcancel
  // обязателен: браузер шлёт его, когда перехватывает жест под скролл
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', endDrag);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', endDrag);
      document.addEventListener('touchcancel', endDrag);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', endDrag);
      document.removeEventListener('touchcancel', endDrag);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, endDrag]);

  return {
    /** Порог пройден, окно перемещается: стили grabbing и запрет выделения */
    dragActive,
    /** Готовый набор обработчиков для контейнера окна */
    dragHandlers: {
      onMouseDown: handleMouseDown,
      onTouchStart: handleTouchStart,
    },
  };
};
