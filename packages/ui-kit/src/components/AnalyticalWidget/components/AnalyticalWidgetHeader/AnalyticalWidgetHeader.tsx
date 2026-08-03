import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { Link } from '@ui-kit/components/Link';
import { Tooltip } from '@ui-kit/components/Tooltip';
import { IconArrowDiagRightUp, IconInfoCircleOutline } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import { createSafeResizeObserver, mergeClasses } from '@ui-kit/utils';
import { useLayoutEffect, useRef, useState } from 'react';

import { analyticalWidgetClassNames as cls } from '../../AnalyticalWidget.constants';
import {
  StyledActionsContainer,
  StyledActionsWrapper,
  StyledAfterTitle,
  StyledHeader,
  StyledLeftSlot,
  StyledLinkIconButton,
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
  href,
  hrefProps,
  rightSlot,
  className,
  titleLinkProps,
}: AnalyticalWidgetHeaderProps) => {
  const actionsContainerRef = useRef<HTMLDivElement>(null);
  const actionsWrapperRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useLayoutEffect(() => {
    const updateTranslation = () => {
      if (actionsContainerRef.current && actionsWrapperRef.current) {
        const containerWidth = actionsContainerRef.current.offsetWidth;
        const wrapperWidth = actionsWrapperRef.current.offsetWidth;
        // Вычисляем насколько не хватает места
        const overflow = wrapperWidth - containerWidth;
        // Если не хватает места - двигаем влево, иначе 0
        setTranslateX(overflow > 0 ? -overflow - 4 : 0);
      }
    };

    const observer = createSafeResizeObserver(updateTranslation);

    if (actionsContainerRef.current) {
      observer.observe(actionsContainerRef.current);
    }
    if (actionsWrapperRef.current) {
      observer.observe(actionsWrapperRef.current);
    }

    // Первоначальный расчет
    updateTranslation();

    return () => observer.disconnect();
  }, []);

  return (
    <StyledHeader className={mergeClasses(cls.header, className)}>
      <StyledLeftSlot>
        <StyledTitleContainer>
          {/* Если будут возникать сложности с StyledTitleWithTooltip можно вернуть старую реализацию без тултипа */}
          {/* {title && <StyledTitle>{title}</StyledTitle>} */}
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
          <StyledActionsContainer ref={actionsContainerRef}>
            <StyledActionsWrapper
              ref={actionsWrapperRef}
              $translateX={translateX}
            >
              {infoTooltipText && (
                <Tooltip
                  trigger="hover"
                  placement="top"
                  text={infoTooltipText}
                  target={
                    <EmbedIconButton>
                      <IconInfoCircleOutline
                        size="xs"
                        style={{
                          cursor: 'pointer',
                          color: textSecondary,
                        }}
                      />
                    </EmbedIconButton>
                  }
                  className={mergeClasses(cls.popoverInfo)}
                  {...infoTooltipProps}
                />
              )}
              {href && (
                <Link
                  href={href}
                  style={{
                    flexShrink: 0,
                  }}
                  size="xs"
                  {...hrefProps}
                >
                  <StyledLinkIconButton view="clear" size="xs">
                    <IconArrowDiagRightUp size="xs" />
                  </StyledLinkIconButton>
                </Link>
              )}
            </StyledActionsWrapper>
          </StyledActionsContainer>
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
};
