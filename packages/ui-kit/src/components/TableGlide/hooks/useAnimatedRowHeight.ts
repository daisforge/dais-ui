import { useEffect, useState } from 'react';

import { RowHeightGlide } from '../types';

function changeNumberSmooth(
  setter: (v: number) => void,
  startValue: number,
  endValue: number,
  duration: number
) {
  const startTime = performance.now(); // High-resolution timestamp

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // Calculate animation progress (0 to 1)

    // Linear interpolation: smoothly calculate current value
    const currentValue = startValue + (endValue - startValue) * progress;

    // Update NUMBER_STATE
    setter(Math.round(currentValue));

    // Continue the animation if not finished
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update); // Start the animation loop
}
export const useAnimatedRowHeight = (
  extRowHeight: RowHeightGlide
): RowHeightGlide => {
  const isCanBeAnimated = typeof extRowHeight === 'number';
  const [rowHeight, setRowHeight] = useState(() =>
    isCanBeAnimated ? extRowHeight : 56
  );
  useEffect(() => {
    if (!isCanBeAnimated) {
      return;
    }
    changeNumberSmooth(setRowHeight, rowHeight, extRowHeight, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extRowHeight]);

  if (!isCanBeAnimated) {
    return extRowHeight;
  }

  return rowHeight;
};
