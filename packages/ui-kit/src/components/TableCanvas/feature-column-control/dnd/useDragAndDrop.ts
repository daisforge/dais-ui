import React, { useState } from 'react';

export const useDragAndDrop = ({
  columnsOrder,
  onColumnsReorder,
  setDroppedAsHovered,
}: {
  columnsOrder: string[];
  onColumnsReorder: (sourceKey: string, targetKey: string) => void;
  setDroppedAsHovered: (droppedId: string) => void;
}) => {
  const [draggingId, setDraggingId] = useState('');

  const [draggingOverId, setDraggingOverId] = useState('');
  const [borderPlacement, setBorderPlacement] = useState<'top' | 'bottom'>(
    'bottom',
  );

  const handleDragging = (draggingId: string) => setDraggingId(draggingId);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.dropEffect = 'move';
    setDraggingOverId('');
    handleDragging((e.target as unknown as { id: string })?.id ?? '');
  };

  const handleDragEnd = () => handleDragging('');

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    const { id } = e.target as unknown as { id: string };

    if (id && id !== draggingOverId) {
      setDraggingOverId(id ?? '');
    }

    if (draggingId && draggingOverId) {
      const tmp = new Map(columnsOrder.map((key, ind) => [key, ind]));

      const borderPlacementX =
        (tmp.get(draggingId) ?? 0) < (tmp.get(draggingOverId) ?? 0)
          ? 'bottom'
          : 'top';

      if (borderPlacementX && borderPlacementX !== borderPlacement) {
        setBorderPlacement(borderPlacementX);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (draggingId && draggingOverId && draggingId !== draggingOverId) {
      onColumnsReorder(draggingId, draggingOverId);
    }

    // under clearing

    setDroppedAsHovered(draggingId);

    handleDragging('');
    setDraggingOverId('');
  };

  return {
    draggingId,

    draggingOverId,
    borderPlacement,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop,
  };
};
