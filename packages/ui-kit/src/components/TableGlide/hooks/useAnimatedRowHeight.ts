import { useEffect, useRef, useState } from 'react';

import { RowHeightGlide } from '../types';

const ANIMATION_DURATION_MS = 300;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const useAnimatedRowHeight = (
  extRowHeight: RowHeightGlide,
): RowHeightGlide => {
  const [rowHeight, setRowHeight] = useState<number | null>(
    typeof extRowHeight === 'number' ? extRowHeight : null,
  );
  const shownRef = useRef(rowHeight);

  useEffect(() => {
    const show = (value: number | null) => {
      shownRef.current = value;
      setRowHeight(value);
    };

    if (typeof extRowHeight !== 'number') {
      show(null);
      return;
    }

    const from = shownRef.current;
    if (from === null || from === extRowHeight || prefersReducedMotion()) {
      show(extRowHeight);
      return;
    }

    const startTime = performance.now();
    let frame = 0;
    const update = () => {
      const progress = Math.min(
        (performance.now() - startTime) / ANIMATION_DURATION_MS,
        1,
      );
      show(Math.round(from + (extRowHeight - from) * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };
    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, [extRowHeight]);

  return typeof extRowHeight === 'number'
    ? rowHeight ?? extRowHeight
    : extRowHeight;
};
