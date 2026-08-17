import { truncateText } from '@ui-kit/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { usePopoverCleanup } from './hooks/usePopoverCleanup';
import { Typography, TypographyProps } from './Typography';
import {
  StyledTooltip,
  StyleTooltipWrapper,
} from './TypographyWithAutoTooltip.styled';
import type { TypographyWithAutoTooltipComp } from './TypographyWithAutoTooltip.types';

// Порог переполнения для Range-детекта — в ДЕВАЙС-пикселях. При дробном зуме / системном
// масштабе (HiDPI) float-ширины текста (range) и контейнера (getBoundingClientRect)
// снапятся к девайс-сетке разными путями и расходятся на доли пикселя — текст считается
// «переполненным» без реального троеточия. Шум ограничен ~1 девайс-пикселем, но в CSS-px
// его размер зависит от масштаба: на zoom-out (dpr<1) один девайс-пиксель «стоит» больше
// CSS-px, поэтому фиксированный CSS-порог там не спасал. Порог в девайс-пикселях стабилен
// на любом зуме.
const OVERFLOW_THRESHOLD_DEVICE_PX = 1;

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

    /** Переполнение (для ellipsis) детектим по float-ширинам, а НЕ по целочисленным
    scrollWidth/clientWidth: последние округляются (scrollWidth вверх, clientWidth вниз)
    и на дробном зуме дают scrollWidth = clientWidth + 1 ЛОЖНО, когда бокс ужат по тексту
    (flex shrink-to-fit, короткий текст) — тултип выскакивал без троеточия, скачками по зуму.

    Range API даёт float: range — сколько текст хочет занять (без обрезки),
    getBoundingClientRect — сколько доступно. Разницу переводим в девайс-пиксели (× dpr)
    и сравниваем с порогом — шум замеров при дробном зуме/DPR (особенно zoom-out) не
    триггерит тултип. Range только читает DOM (в отличие от прежнего micro-scroll со
    scrollLeft, который мигал текстом) — визуальных артефактов нет. * */
    try {
      const range = document.createRange();
      // Выбираем всё содержимое элемента (полный текст)
      range.selectNodeContents(el);
      // float-ширина текста (сколько он хочет занять)
      const contentWidth = range.getBoundingClientRect().width;
      // float-ширина контейнера (сколько доступно)
      const containerWidth = el.getBoundingClientRect().width;
      range.detach();
      const dpr = window.devicePixelRatio || 1;
      return (
        (contentWidth - containerWidth) * dpr > OVERFLOW_THRESHOLD_DEVICE_PX
      );
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
