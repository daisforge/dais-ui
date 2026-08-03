import { ADAPTIVE_1280_MIN_WIDTH, MIN_WIDTH } from '../constants';
import type {
  LeftPanelAdaptiveSlot,
  LeftPanelSlotSizesProps,
} from '../LeftPanel.types';

export const getLeftPanelSlotSizes = (
  isAdaptive1280: boolean,
): LeftPanelSlotSizesProps => ({
  buttonSize: isAdaptive1280 ? 'xs' : 's',
});

export const getLeftPanelMinWidth = (
  isAdaptive1280: boolean,
  minWidth?: number,
): number => minWidth ?? (isAdaptive1280 ? ADAPTIVE_1280_MIN_WIDTH : MIN_WIDTH);

export const renderLeftPanelSlot = (
  slot: LeftPanelAdaptiveSlot | undefined,
  slotSizes: LeftPanelSlotSizesProps,
) => (typeof slot === 'function' ? slot(slotSizes) : slot);
