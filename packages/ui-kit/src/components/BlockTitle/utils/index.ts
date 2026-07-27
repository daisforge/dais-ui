import type {
  BlockTitleAdaptiveSlot,
  BlockTitleProps,
  BlockTitleSlotSizesProps
} from '../BlockTitle.types';

type TitleSlotSizes = Pick<
  BlockTitleSlotSizesProps,
  'titleBadgeSize' | 'titleIconSize'
>;

const DEFAULT_TITLE_SLOT_SIZES: TitleSlotSizes = {
  titleBadgeSize: 'm',
  titleIconSize: 's'
};

const getAdaptive1280TitleSlotSizes = (
  titleSize: BlockTitleProps['titleSize']
): TitleSlotSizes => {
  if (titleSize === 'H4' || titleSize === 'H5') {
    return {
      titleBadgeSize: 's',
      titleIconSize: 'xs'
    };
  }

  return DEFAULT_TITLE_SLOT_SIZES;
};

export const getBlockTitleSlotSizes = (
  titleSize: BlockTitleProps['titleSize'],
  isAdaptive1280: boolean
): BlockTitleSlotSizesProps => {
  const titleSlotSizes = isAdaptive1280
    ? getAdaptive1280TitleSlotSizes(titleSize)
    : DEFAULT_TITLE_SLOT_SIZES;
  const buttonSize: BlockTitleSlotSizesProps['buttonSize'] = isAdaptive1280
    ? 'xs'
    : 's';
  const actionIconSize: BlockTitleSlotSizesProps['actionIconSize'] =
    isAdaptive1280 ? 'xs' : 's';

  return {
    ...titleSlotSizes,
    buttonSize,
    actionIconSize
  };
};

export const getBlockTitleBackButtonSize = (
  isAdaptive1280: boolean
): 'xxs' | 'xs' => (isAdaptive1280 ? 'xxs' : 'xs');

export const renderBlockTitleSlot = (
  slot: BlockTitleAdaptiveSlot | undefined,
  slotSizes: BlockTitleSlotSizesProps
) => (typeof slot === 'function' ? slot(slotSizes) : slot);
