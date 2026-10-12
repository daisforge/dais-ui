import { bubble } from '@ui-kit/utils';
import { useCallback, useEffect, useRef, useState } from 'react';

import { TABLE_BUBBLES } from '../constants';
import { SIDEBAR_DURATION } from '../feature-sidebar/constants';
import type { TableCanvasSidebarConfig } from '../types';

const BUBBLE_DELAY = 100;

export const useSidebarOpenState = (
  config?: Pick<TableCanvasSidebarConfig, 'defaultOpen' | 'openState'>,
) => {
  const internalOpenState = useState(config?.defaultOpen ?? false);
  const [isOpen, setIsOpen] = config?.openState ?? internalOpenState;
  const toggle = useCallback(() => setIsOpen((open) => !open), [setIsOpen]);

  return { isOpen, toggle };
};

export const useSidebarResize = ({
  isOpen,
  width,
  refTableContainer,
}: {
  isOpen: boolean;
  width: string | number;
  refTableContainer?: React.RefObject<HTMLElement>;
}) => {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return undefined;
    }

    // Учитываем также внешнее открытие и изменение ширины после анимации.
    const timeoutId = setTimeout(() => {
      if (refTableContainer?.current) {
        bubble(refTableContainer.current, TABLE_BUBBLES.recalculateWidth);
      }
    }, SIDEBAR_DURATION * 1000 + BUBBLE_DELAY);

    return () => clearTimeout(timeoutId);
  }, [isOpen, width, refTableContainer]);
};
