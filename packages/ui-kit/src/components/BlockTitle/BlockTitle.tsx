import { Box } from '@ui-kit/components/Box';
import { IconButton } from '@ui-kit/components/IconButton';
import { TypographyWithAutoTooltip } from '@ui-kit/components/Typography';
import { IconChevronLeft } from '@ui-kit/icons';
import { useBreakpoint } from '@ui-kit/utils';

import { blockTitleClassNames as cls } from './BlockTitle.classname';
import type { BlockTitleProps } from './BlockTitle.types';
import {
  BlockTitleBackButtonContainer,
  BlockTitleBlock,
  BlockTitleContainer,
  BlockTitleContentLeft,
  BlockTitleCustomBlock,
  BlockTitleDescription,
  BlockTitleLeftBlock,
  BlockTitleRightBlock
} from './styled';
import {
  getBlockTitleBackButtonSize,
  getBlockTitleSlotSizes,
  renderBlockTitleSlot
} from './utils';

export const BlockTitle = ({
  title,
  titleSize = 'H2',
  titleLeftSlot,
  titleRightSlot,
  description,
  topSlot,
  rightSlot,
  disableMediaAdaptive = false,
  containerProps,
  onBackButtonClick
}: BlockTitleProps) => {
  const { down } = useBreakpoint();
  const isAdaptive1280 = !disableMediaAdaptive && down('xl');
  const slotSizes = getBlockTitleSlotSizes(titleSize, isAdaptive1280);

  return (
    <Box
      {...containerProps}
      className={`${cls.container} ${containerProps?.['className'] ?? ''}`}
    >
      <BlockTitleCustomBlock className={cls.topBlock}>
        {renderBlockTitleSlot(topSlot, slotSizes)}
      </BlockTitleCustomBlock>
      <BlockTitleContainer>
        <BlockTitleContentLeft className={cls.contentLeft}>
          {onBackButtonClick && (
            <BlockTitleBackButtonContainer className={cls.backButton}>
              <IconButton
                size={getBlockTitleBackButtonSize(isAdaptive1280)}
                view="secondary"
                pin="circle-circle"
                onClick={onBackButtonClick}
              >
                <IconChevronLeft size="xs" color="inherit" />
              </IconButton>
            </BlockTitleBackButtonContainer>
          )}
          <BlockTitleLeftBlock>
            <BlockTitleBlock className={cls.titleBlock}>
              {renderBlockTitleSlot(titleLeftSlot, slotSizes)}
              <TypographyWithAutoTooltip
                tooltipText={typeof title === 'string' ? title : undefined}
                variant={titleSize}
                className={cls.title}
                lines={2}
              >
                {title}
              </TypographyWithAutoTooltip>
              {renderBlockTitleSlot(titleRightSlot, slotSizes)}
            </BlockTitleBlock>
            {description && (
              <BlockTitleDescription
                variant="BodyS"
                className={cls.description}
                $hasLeftSlot={!!titleLeftSlot}
              >
                {description}
              </BlockTitleDescription>
            )}
          </BlockTitleLeftBlock>
        </BlockTitleContentLeft>
        <BlockTitleRightBlock className={cls.rightBlock}>
          {renderBlockTitleSlot(rightSlot, slotSizes)}
        </BlockTitleRightBlock>
      </BlockTitleContainer>
    </Box>
  );
};
