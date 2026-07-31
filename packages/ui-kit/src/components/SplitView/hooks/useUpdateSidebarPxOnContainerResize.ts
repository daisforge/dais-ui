import { clamp, debounce } from '@ui-kit/utils';
import { RefObject, useEffect } from 'react';

import { splitViewConstants as c } from '../SplitView.constants';
import { percentToPx } from '../SplitView.handlers';
import { SplVSizes } from '../SplitView.type';

export const useUpdateSidebarPxOnContainerResize = ({
  setSizes,
  containerRef,
  sidebarMinWidthPx,
  sidebarMaxWidthPercent,
  onResize,
}: {
  containerRef: RefObject<HTMLDivElement | null>;
  setSizes: React.Dispatch<React.SetStateAction<SplVSizes>>;
  sidebarMinWidthPx: number;
  sidebarMaxWidthPercent: number;
  onResize?: (sizes: SplVSizes) => void;
}) => {
  useEffect(() => {
    const resizeCb = (entry: ResizeObserverEntry) => {
      const containerWidth = entry.contentRect.width;
      const fullWidth = containerWidth - c.separatorDefaultWidth;

      setSizes((prev): SplVSizes => {
        const calculatedSidebarPx = percentToPx(prev.sidebar, fullWidth);
        const sidebarMaxWidthPx = percentToPx(
          sidebarMaxWidthPercent,
          fullWidth,
        );

        const calculatedSidebarPxLast = clamp(
          sidebarMinWidthPx,
          calculatedSidebarPx,
          sidebarMaxWidthPx,
        );

        const newSplSizes = {
          ...prev,
          sidebarPx: calculatedSidebarPxLast,
        };

        onResize?.(newSplSizes);

        return newSplSizes;
      });
    };
    const debouncedResizeCb = debounce(resizeCb, 1000);

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(debouncedResizeCb);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, setSizes, sidebarMaxWidthPercent, sidebarMinWidthPx]);
};
