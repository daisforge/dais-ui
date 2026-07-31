import type {
  PageTitleAdaptiveSlot,
  PageTitleSlotSizesProps,
} from '../PageTitle.types';

export const getPageTitleSlotSizes = (
  isAdaptive1280: boolean,
): PageTitleSlotSizesProps => ({
  buttonSize: isAdaptive1280 ? 'xs' : 's',
});

export const renderPageTitleSlot = (
  slot: PageTitleAdaptiveSlot | undefined,
  slotSizes: PageTitleSlotSizesProps,
) => (typeof slot === 'function' ? slot(slotSizes) : slot);
