import { clamp, throttleWithLastCall } from '@ui-kit/utils';
import { useCallback, useEffect } from 'react';

import { BREAKPOINT_COLLAPSED_WIDTH } from '../constants';
import { toggleButtonClassNames as cls } from '../LeftPanel.classname';
import type { HookResizeProps } from '../LeftPanel.types';

export const useResize = ({
  setWidth,
  isResizingRef,
  setIsResizing,
  panelRef,
  minWidth,
  maxWidth,
  parentRef,
  isCollapsed,
  onResize
}: HookResizeProps) => {
  const startResizing = useCallback(() => {
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    isResizingRef.current = true;
    setIsResizing(true);
    panelRef.current?.classList.add(cls.leftBlockIsResizing);
  }, [panelRef, isResizingRef, setIsResizing]);

  useEffect(() => {
    const stopResizing = () => {
      document.body.style.cursor = 'auto';
      document.body.style.userSelect = '';
      isResizingRef.current = false;
      setIsResizing(false);
      panelRef.current?.classList.remove(cls.leftBlockIsResizing);

      const panelWidth = panelRef.current?.clientWidth ?? 0;
      const willSnap =
        panelWidth > minWidth && panelWidth < BREAKPOINT_COLLAPSED_WIDTH;
      if (willSnap) {
        setWidth(minWidth);
      }
    };

    const resize = (e: MouseEvent) => {
      if (!isResizingRef.current || !panelRef.current || !parentRef.current)
        return;
      e.preventDefault();
      const parentRect = parentRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const newWidth = mouseX - parentRect.left;
      const clampedWidth = clamp(minWidth, newWidth, maxWidth);
      setWidth(clampedWidth);
      if (!isCollapsed && onResize) {
        onResize(clampedWidth);
      }
    };

    const throttledResize = throttleWithLastCall(resize, 16);
    window.addEventListener('mousemove', throttledResize);
    window.addEventListener('mouseup', stopResizing);

    return () => {
      window.removeEventListener('mousemove', throttledResize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [
    setWidth,
    isResizingRef,
    setIsResizing,
    panelRef,
    minWidth,
    maxWidth,
    parentRef,
    isCollapsed,
    onResize
  ]);
  return { startResizing };
};
