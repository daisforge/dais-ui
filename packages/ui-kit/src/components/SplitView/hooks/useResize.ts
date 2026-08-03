import { clamp, throttleWithLastCall } from '@ui-kit/utils';
import { RefObject, useCallback, useEffect } from 'react';

import {
  splitViewClassNames as cls,
  splitViewConstants as c,
} from '../SplitView.constants';
import { pxToPercent } from '../SplitView.handlers';
import { SplVSizes } from '../SplitView.type';

export const useResize = ({
  setSizes,
  isResizingRef,
  containerRef,
  sidebarMinWidthPx,
  sidebarMaxWidthPercent,
  onResize,
}: {
  setSizes: React.Dispatch<React.SetStateAction<SplVSizes>>;
  isResizingRef: React.MutableRefObject<boolean>;
  containerRef: RefObject<HTMLDivElement | null>;
  sidebarMinWidthPx: number;
  sidebarMaxWidthPercent: number;
  onResize?: (sizes: SplVSizes) => void;
}) => {
  const startResizing = useCallback(() => {
    document.body.style.cursor = 'col-resize';
    isResizingRef.current = true;
    containerRef.current?.classList.toggle(cls.sidebarBlockIsResizing, true);
  }, [containerRef, isResizingRef]);

  useEffect(() => {
    const stopResizing = () => {
      document.body.style.cursor = 'auto';
      isResizingRef.current = false;
      containerRef.current?.classList.toggle(cls.sidebarBlockIsResizing, false);
    };
    const resize = (e: MouseEvent) => {
      if (!isResizingRef.current || !containerRef.current) return;

      e.preventDefault();

      const mouseX = e.clientX;
      const containerRect = containerRef.current.getBoundingClientRect();

      const containerWidth = containerRect.width;
      const fullWidth = containerWidth - c.separatorDefaultWidth;

      const sidebarWidthCalcPercent =
        ((containerRect.right - mouseX - c.separatorButtonDefaultWidth / 2) /
          fullWidth) *
        100;

      const min = pxToPercent(sidebarMinWidthPx, fullWidth);
      const max = sidebarMaxWidthPercent;

      const sidebarWidthPercent = clamp(min, sidebarWidthCalcPercent, max);
      const mainWidthPercent = 100 - sidebarWidthPercent;

      const sidebarWidthPx = (sidebarWidthPercent * fullWidth) / 100;
      const mainWidthPx = (mainWidthPercent * fullWidth) / 100;

      const splValues = {
        main: mainWidthPercent,
        mainPx: mainWidthPx,
        sidebar: sidebarWidthPercent,
        sidebarPx: sidebarWidthPx,
      };

      setSizes(splValues);

      onResize?.(splValues);
    };

    const throttledResize = throttleWithLastCall(resize, 150);
    window.addEventListener('mousemove', throttledResize);
    window.addEventListener('mouseup', stopResizing);

    return () => {
      window.removeEventListener('mousemove', throttledResize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [
    containerRef,
    isResizingRef,
    onResize,
    setSizes,
    sidebarMaxWidthPercent,
    sidebarMinWidthPx,
  ]);
  return { startResizing };
};
