import { truncateText } from '@ui-kit/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { usePopoverCleanup } from './hooks/usePopoverCleanup';
import { Typography, TypographyProps } from './Typography';
import {
  StyledTooltip,
  StyleTooltipWrapper,
} from './TypographyWithAutoTooltip.styled';
import type { TypographyWithAutoTooltipComp } from './TypographyWithAutoTooltip.types';

export const TypographyWithAutoTooltip: TypographyWithAutoTooltipComp = ({
  tooltipText,
  tooltipProps,
  lines = 1,
  className,
  children,
  ...typographyProps
}) => {
  const {
    mouseEnterDelay = 500,
    mouseLeaveDelay = 0,
    ...otherTooltipProps
  } = tooltipProps || {};

  const textRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const timerBeforeShow = useRef<ReturnType<typeof setTimeout>>();

  const { schedule, getContainerId, createContainer } = usePopoverCleanup();

  const checkIsOverflowed = useCallback(() => {
    if (!textRef.current) return false;
    const el = textRef.current;

    if (lines > 1) {
      return (
        el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth
      );
    }

    if (el.scrollWidth > el.clientWidth) return true;

    /** Sub-pixel overflow: CSS рисует ellipsis даже при переполнении < 1px,
    но scrollWidth/clientWidth это целые числа, и при округлении оба
    могут дать одинаковое значение, т.е. scrollWidth > clientWidth вернет false.
  
    Range API решает это: range.getBoundingClientRect().width возвращает float,
    реальную ширину которую текст хочет занять (без обрезки).
    el.getBoundingClientRect().width тоже float, доступная ширина контейнера.
    Сравнение float vs float корректно учитывает субпиксельное переполнение.
  
    Раньше использовали micro-scroll (scrollLeft = 1, проверка, scrollLeft = 0),
    но браузер мог успеть отрисовать кадр с измененным scrollLeft,
    что вызывало видимое мигание текста. Range API только читает DOM,
    ничего не меняет, визуальных артефактов нет. * */
    try {
      const range = document.createRange();
      // Выбираем всё содержимое элемента (полный текст)
      range.selectNodeContents(el);
      // float-ширина текста (сколько он хочет занять)
      const contentWidth = range.getBoundingClientRect().width;
      // float-ширина контейнера (сколько доступно)
      const containerWidth = el.getBoundingClientRect().width;
      range.detach();
      return contentWidth > containerWidth;
    } catch {
      return false;
    }
  }, [lines]);

  const handleMouseEnter = useCallback(() => {
    if (!checkIsOverflowed()) return;
    timerBeforeShow.current = setTimeout(() => {
      setShowTooltip(true);
    }, mouseEnterDelay);
  }, [checkIsOverflowed, mouseEnterDelay]);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(timerBeforeShow.current);
    setTimeout(() => {
      setShowTooltip(false);
      schedule();
    }, mouseLeaveDelay);
  }, [mouseLeaveDelay, schedule]);

  const { variant, bold, size, ...restTypographyProps } = typographyProps;

  const typographyComponentProps: TypographyProps<'BodyM'> = {
    variant: variant as TypographyProps<'BodyM'>['variant'],
    ...(bold !== undefined && {
      bold: bold as unknown as undefined,
    }),
    ...(size !== undefined && {
      size: size as TypographyProps<'BodyM'>['size'],
    }),
    ...(restTypographyProps as Partial<TypographyProps<'BodyM'>>),
    refTypography: textRef,
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
      restTypographyProps['onMouseEnter']?.(e);
    },
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
      restTypographyProps['onMouseLeave']?.(e);
    },
    style: {
      ...truncateText({ lines }),
      ...(restTypographyProps['style'] || {}),
    },
    children,
  };

  const textElement = (
    <Typography {...typographyComponentProps}>{children}</Typography>
  );

  useEffect(() => {
    const cleanup = createContainer();
    return cleanup;
  }, [createContainer]);

  useEffect(
    () => () => {
      clearTimeout(timerBeforeShow.current);
      schedule();
    },
    [schedule],
  );

  return (
    <StyleTooltipWrapper
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showTooltip ? (
        <StyledTooltip
          opened={showTooltip}
          text={tooltipText ?? ''}
          target={textElement}
          frame={getContainerId()}
          {...otherTooltipProps}
        />
      ) : (
        textElement
      )}
    </StyleTooltipWrapper>
  );
};
