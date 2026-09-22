import { useCallback, useEffect, useRef, useState } from 'react';

import { DRAG_THRESHOLD } from '../AiAgentPopup.constants';
import type {
  AiAgentPopupDragBoundary,
  AiAgentPopupPosition,
} from '../AiAgentPopup.types';

type UseDragParams = {
  elementRef: React.RefObject<HTMLElement | null>;
  setPosition: (position: AiAgentPopupPosition) => void;
  dragBoundary?: AiAgentPopupDragBoundary;
  onPositionChange?: (position: AiAgentPopupPosition) => void;
};

/**
 * Перетаскивание окна за контейнер. Позиция зажимается в границах вьюпорта
 * с учётом dragBoundary. Смещения меньше DRAG_THRESHOLD считаются кликом,
 * а не перетаскиванием, поэтому клики по контенту продолжают работать.
 */
export const useDrag = ({
  elementRef,
  setPosition,
  dragBoundary,
  onPositionChange,
}: UseDragParams) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const wasDragged = useRef(false);

  const startDrag = useCallback(
    (clientX: number, clientY: number) => {
      if (!elementRef.current) return;

      wasDragged.current = false;
      dragStartPos.current = { x: clientX, y: clientY };

      const rect = elementRef.current.getBoundingClientRect();
      dragOffset.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };

      setIsDragging(true);
    },
    [elementRef],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      startDrag(e.clientX, e.clientY);
    },
    [startDrag],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        startDrag(touch.clientX, touch.clientY);
      }
    },
    [startDrag],
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
        // выделение текста, начатое до порога, мешает перетаскиванию
        window.getSelection()?.removeAllRanges();
      }

      const { offsetWidth, offsetHeight } = elementRef.current;
      const { innerWidth, innerHeight } = window;
      const { top = 0, right = 0, bottom = 0, left = 0 } = dragBoundary || {};

      const newX = Math.max(
        left,
        Math.min(
          clientX - dragOffset.current.x,
          innerWidth - offsetWidth - right,
        ),
      );
      const newY = Math.max(
        top,
        Math.min(
          clientY - dragOffset.current.y,
          innerHeight - offsetHeight - bottom,
        ),
      );

      const newPosition = { x: newX, y: newY };
      setPosition(newPosition);
      onPositionChange?.(newPosition);
    },
    [isDragging, elementRef, dragBoundary, setPosition, onPositionChange],
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

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', endDrag);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', endDrag);
    };
  }, [isDragging, handleMouseMove, endDrag]);

  return {
    handleMouseDown,
    isDragging,
    dragActive,
    wasDragged,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove as unknown as React.TouchEventHandler,
      onTouchEnd: endDrag as unknown as React.TouchEventHandler,
    },
  };
};
