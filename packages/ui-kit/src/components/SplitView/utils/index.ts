import { splitViewConstants as c } from '../SplitView.constants';
import type {
  SplitViewAdaptiveContent,
  SplitViewSlotSizesProps
} from '../SplitView.type';

export const getSplitViewSlotSizes = (
  isAdaptive1280: boolean
): SplitViewSlotSizesProps => ({
  avatarSize: isAdaptive1280 ? 'm' : 'l'
});

export const getSplitViewSidebarMinWidthPx = (
  isAdaptive1280: boolean,
  minWidthPx?: number
): number =>
  minWidthPx ??
  (isAdaptive1280
    ? c.sidebarWidths.adaptive1280MinWidthPx
    : c.sidebarWidths.minWidthPx);

export const renderSplitViewContent = (
  content: SplitViewAdaptiveContent | undefined,
  slotSizes: SplitViewSlotSizesProps
) => (typeof content === 'function' ? content(slotSizes) : content);
