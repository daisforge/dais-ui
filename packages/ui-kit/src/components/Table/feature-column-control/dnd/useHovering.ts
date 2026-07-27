import { useState } from 'react';

const DROPPED_1 = '$$dropped:1:';

export const useHovering = () => {
  const [hoveredId, setHoveredId] = useState('');

  const handleHovering = (newHovered: string) => {
    setHoveredId((prev) => {
      if (prev.startsWith(DROPPED_1)) {
        const droppedId = prev.split(':')[2] ?? '';

        return droppedId;
      }

      return newHovered;
    });
  };

  const setDroppedAsHovered = (droppedId: string) => {
    if (!hoveredId) {
      return;
    }

    setHoveredId(`${DROPPED_1}${droppedId}`);
  };
  const onDragIconHoverStart = (itemKey: string, draggingId: string) => {
    if (!draggingId && itemKey !== hoveredId) {
      handleHovering(itemKey);
    }
  };
  const onDragIconHoverEnd = (_itemKey: string, draggingId: string) => {
    if (!draggingId && hoveredId) {
      handleHovering('');
    }
  };

  return {
    hoveredId,
    setDroppedAsHovered,
    onDragIconHoverStart,
    onDragIconHoverEnd
  };
};
