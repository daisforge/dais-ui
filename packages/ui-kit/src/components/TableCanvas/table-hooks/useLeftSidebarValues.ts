import { DEFAULT_LEFT_SIDEBAR_WIDTH } from '../feature-sidebar/constants';
import type { LeftSidebarConfig } from '../types';
import { useSidebarOpenState, useSidebarResize } from './useSidebarOpenState';

export const useLeftSidebarState = (
  config?: LeftSidebarConfig,
  refTableContainer?: React.RefObject<HTMLElement>,
) => {
  const { isOpen, toggle } = useSidebarOpenState(config);
  const width = config?.width ?? DEFAULT_LEFT_SIDEBAR_WIDTH;
  useSidebarResize({ isOpen, width, refTableContainer });

  return { isOpen, toggle, width };
};
