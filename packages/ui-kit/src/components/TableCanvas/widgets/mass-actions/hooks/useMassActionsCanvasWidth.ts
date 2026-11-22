import { useCallback } from 'react';

import { useRefTableContainerContext } from '../../../contexts';

export const useMassActionsCanvasWidth = () => {
  const canvasRef = useRefTableContainerContext();

  // Ширина canvas уже учитывает обе панели, проценты, calc() и сжатие flex.
  return useCallback(
    () => canvasRef?.current?.getBoundingClientRect().width ?? null,
    [canvasRef],
  );
};
