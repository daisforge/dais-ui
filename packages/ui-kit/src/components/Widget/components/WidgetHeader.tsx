import { Badge } from '@ui-kit/components/Badge';
import { BoxProps } from '@ui-kit/components/Box';
import type { IconButton } from '@ui-kit/components/IconButton';
import {
  TypographyWithAutoTooltip,
  type TypographyWithAutoTooltipProps,
} from '@ui-kit/components/Typography';
import { TypographyVariant } from '@ui-kit/components/Typography/Typography';
import { mergeClasses } from '@ui-kit/utils';
import { ComponentProps, ReactNode } from 'react';

import { widgetClassNames as cls } from '../Widget.classNames';
import { StyledBadge, StyledHeader } from '../Widget.styled';
import { WidgetDivider } from './WidgetDivider';
import { WidgetIconButtonBack } from './WidgetIconButtonBack';
import { WidgetServiceButtons } from './WidgetServiceButtons';

export function WidgetHeader({
  title,
  titleSize,
  titleLeftSlot,
  titleRightSlot,
  badge,
  badgeMarginTop,
  subTitle,
  rightBlock,
  bottomBlock,
  onBackClick,
  showBackButton = false,
  fullScreened,
  toggleFullScreened,
  onClose,
  iconButtonsPin,
  titleTooltipProps,
  ...rest
}: {
  titleLeftSlot?: ReactNode;
  /** Контент справа от заголовка (и badge, если есть). Например, Chips или другие компоненты */
  titleRightSlot?: ReactNode;
  title?: ReactNode;
  titleSize?: TypographyVariant;
  badge?: ComponentProps<typeof Badge>;
  badgeMarginTop?: number;
  subTitle?: ReactNode;
  rightBlock?: ReactNode;
  bottomBlock?: ReactNode;
  onBackClick?: () => void;
  showBackButton?: boolean;
  fullScreened?: boolean | null;
  toggleFullScreened?: () => void;
  onClose?: () => void;
  dividerBottom?: boolean;
  iconButtonsPin?: ComponentProps<typeof IconButton>['pin'];
  titleTooltipProps?: Omit<
    TypographyWithAutoTooltipProps<'H4'>,
    'variant' | 'children'
  >;
} & Omit<BoxProps, 'children'>) {
  const badgeMarginTopResult = badgeMarginTop ?? (!titleSize ? 2 : undefined);

  return (
    <StyledHeader {...rest}>
      <div className={cls.headerTitlesContainer}>
        {showBackButton && <WidgetIconButtonBack onClick={onBackClick} />}
        {titleLeftSlot && (
          <div className={cls.headerSlotToTheLeftOfTitle}>{titleLeftSlot}</div>
        )}
        <div className={cls.headerTitlesBox}>
          {title && (
            <div className={cls.headerTitle}>
              <TypographyWithAutoTooltip
                variant={titleSize ?? 'H4'}
                bold
                lines={2}
                tooltipText={typeof title === 'string' ? title : undefined}
                {...titleTooltipProps}
              >
                {title}
              </TypographyWithAutoTooltip>
              {typeof titleRightSlot === 'undefined' && badge && (
                <StyledBadge
                  $badgeMarginTop={badgeMarginTopResult}
                  view="default"
                  {...badge}
                  className={mergeClasses(cls.headerBadge, badge.className)}
                />
              )}
              {titleRightSlot}
            </div>
          )}
          {subTitle && <p className={cls.headerSubTitle}>{subTitle}</p>}
        </div>
      </div>
      <div className={cls.headerRightBlock}>
        {rightBlock}

        {rightBlock && (onClose || typeof fullScreened === 'boolean') && (
          <WidgetDivider />
        )}

        <WidgetServiceButtons
          onClose={onClose}
          fullScreened={fullScreened}
          toggleFullScreened={toggleFullScreened}
          iconButtonsPin={iconButtonsPin}
        />
      </div>
      {bottomBlock && (
        <div className={cls.headerBottomBlock}>{bottomBlock}</div>
      )}
    </StyledHeader>
  );
}
