import { Tooltip } from '@ui-kit/components/Tooltip';
import { IconInfoCircleOutline } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import { mergeClasses } from '@ui-kit/utils';

import { analyticalWidgetClassNames as cls } from '../../AnalyticalWidget.constants';
import {
  StyledAfterTitle,
  StyledHeader,
  StyledHeaderActions,
  StyledLeftSlot,
  StyledRightSlot,
  StyledSubTitleWithTooltip,
  StyledTitleContainer,
  StyledTitleLink,
} from './AnalyticalWidgetHeader.styled';
import { AnalyticalWidgetHeaderProps } from './AnalyticalWidgetHeader.types';
import { AnalyticalWidgetTitle } from './AnalyticalWidgetTitle';

export const AnalyticalWidgetHeader = ({
  title,
  titleTooltipProps,
  badge,
  badgeStyles,
  subtitle,
  subtitleTooltipProps,
  infoTooltipText,
  infoTooltipProps,
  rightSlot,
  className,
  titleLinkProps,
}: AnalyticalWidgetHeaderProps) => (
  <StyledHeader className={mergeClasses(cls.header, className)}>
    <StyledLeftSlot>
      <StyledTitleContainer>
        {title && titleLinkProps ? (
          <StyledTitleLink underline="none" {...titleLinkProps}>
            <AnalyticalWidgetTitle
              title={title}
              titleTooltipProps={titleTooltipProps}
            />
          </StyledTitleLink>
        ) : (
          <AnalyticalWidgetTitle
            title={title}
            titleTooltipProps={titleTooltipProps}
          />
        )}
        {badge && (
          <StyledAfterTitle style={badgeStyles}>{badge}</StyledAfterTitle>
        )}
        {infoTooltipText && (
          <StyledHeaderActions>
            <Tooltip
              trigger="hover"
              placement="top"
              text={infoTooltipText}
              target={
                <IconInfoCircleOutline
                  size="xs"
                  style={{
                    cursor: 'pointer',
                    color: textSecondary,
                  }}
                />
              }
              className={mergeClasses(cls.popoverInfo)}
              {...infoTooltipProps}
            />
          </StyledHeaderActions>
        )}
      </StyledTitleContainer>
      {subtitle && (
        <StyledSubTitleWithTooltip
          variant="BodyXS"
          tooltipText={subtitle}
          style={{
            color: textSecondary,
            wordBreak: 'normal',
          }}
          tooltipProps={{
            placement: 'top',
            ...subtitleTooltipProps,
          }}
          lines={1}
        >
          {subtitle}
        </StyledSubTitleWithTooltip>
      )}
    </StyledLeftSlot>
    {rightSlot && <StyledRightSlot>{rightSlot}</StyledRightSlot>}
  </StyledHeader>
);
