import { useCallback, useEffect, useRef, useState } from 'react';

import { DRAG_THRESHOLD } from '../AiAgentPopover.constants';
import {
  AiAgentPopoverDragBoundary,
  AiAgentPopoverPositionState
} from '../AiAgentPopover.types';

export const useDrag = (
  positionState: AiAgentPopoverPositionState,
  elementRef?: React.RefObject<HTMLElement | null>,
  dragBoundary?: AiAgentPopoverDragBoundary,
  onPositionChange?: (pos: { x: number; y: number }) => void,
  checkOverflow?: () => void
) => {
  const [position, setPosition] = positionState;
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const wasDragged = useRef(false);
  const lastPosition = useRef(position);

  // Общая функция для начала перетаскивания
  const startDrag = useCallback(
    (clientX: number, clientY: number) => {
      if (!elementRef?.current) return;

      wasDragged.current = false;
      dragStartPos.current = { x: clientX, y: clientY };
      lastPosition.current = position;

      const rect = elementRef.current.getBoundingClientRect();
      dragOffset.current = {
        x: clientX - rect.left,
        y: clientY - rect.top
      };

      setIsDragging(true);
    },
    [elementRef, position]
  );

  // Обработчик мыши
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      startDrag(e.clientX, e.clientY);
    },
    [startDrag]
  );

  // Обработчик касания (версия без идентификаторов)
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        startDrag(touch.clientX, touch.clientY);
      }
    },
    [startDrag]
  );

  // Общая функция перемещения
  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging || !elementRef?.current) return;

      const dx = Math.abs(clientX - dragStartPos.current.x);
      const dy = Math.abs(clientY - dragStartPos.current.y);

      if (!wasDragged.current && dx < DRAG_THRESHOLD && dy < DRAG_THRESHOLD) {
        return;
      }

      wasDragged.current = true;

      const { offsetWidth, offsetHeight } = elementRef.current;
      const { innerWidth, innerHeight } = window;
      const { top = 0, right = 0, bottom = 0, left = 0 } = dragBoundary || {};

      const newX = Math.max(
        left,
        Math.min(
          clientX - dragOffset.current.x,
          innerWidth - offsetWidth - right
        )
      );
      const newY = Math.max(
        top,
        Math.min(
          clientY - dragOffset.current.y,
          innerHeight - offsetHeight - bottom
        )
      );

      const newPosition = { x: newX, y: newY };
      setPosition(newPosition);
      onPositionChange?.(newPosition);
      checkOverflow?.();
    },
    [
      isDragging,
      elementRef,
      dragBoundary,
      setPosition,
      onPositionChange,
      checkOverflow
    ]
  );

  // Обработчики событий
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    },
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      // первый touch (упрощенный подход)
      const touch = e.touches[0];
      if (!touch) return;

      handleMove(touch.clientX, touch.clientY);
    },
    [handleMove]
  );

  const endDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      // Для мыши
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', endDrag);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', endDrag);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, endDrag]);

  return {
    position,
    handleMouseDown,
    isDragging,
    wasDragged: wasDragged.current,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove as unknown as React.TouchEventHandler,
      onTouchEnd: endDrag as unknown as React.TouchEventHandler
    }
  };
};
