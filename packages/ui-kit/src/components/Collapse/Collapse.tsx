import { Box } from '@ui-kit/components/Box';
import { useDebouncedValue } from '@ui-kit/utils';
import type { Property } from 'csstype';
import React, { PropsWithChildren, useRef } from 'react';
import { CSSObject, CSSProperties } from 'styled-components';

export type CollapseProps = PropsWithChildren & {
  /**
   * Состояние открытия/закрытия
   */
  isOpen?: boolean;
  /**
   * Длительность анимации в секундах
   */
  duration?: number;
  /**
   * Тип анимации [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
   */
  animation?:
    | Property.TransitionTimingFunction
    | {
        open: Property.TransitionTimingFunction;
        close: Property.TransitionTimingFunction;
      };
  /**
   * Размер контейнера в закрытом состоянии
   */
  sizeOnClose?: CSSProperties['width'];
  /**
   * Размер контейнера в открытом состоянии
   */
  sizeOnOpen?: CSSProperties['width'];
  /**
   * Размонтирование элемента при закрытии
   */
  unMountOnClose?: boolean;
  /**
   * Ориентация анимации
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * CSS стили внешнего контейнера
   */
  extContainerCss?: CSSObject;
  /**
   * CSS стили внутреннего контейнера. `always` - применение стилей в любом состоянии.
   * `onOpen` - применение стилей в открытом состоянии.
   */
  intContainerCss?: { always?: CSSObject; onOpen?: CSSObject };
};

export const Collapse = ({
  orientation = 'vertical',
  isOpen,
  children,
  duration = 0.5,
  animation = 'linear',
  sizeOnClose = '0px',
  sizeOnOpen,
  unMountOnClose,
  intContainerCss,
  extContainerCss,
}: CollapseProps) => {
  const refInnerContainer = useRef<HTMLDivElement | null>(null);

  // waiting animation for unmounting
  const isOpenDebouncedForClosing = useDebouncedValue(isOpen, duration * 1000);
  // set another state for starting animation
  const isOpenDebouncedForOpening = useDebouncedValue(isOpen, 0);

  const isFinallyClosed = !isOpen && !isOpenDebouncedForClosing;

  if (unMountOnClose && isFinallyClosed) {
    return null;
  }

  const maxSizeOnOpen =
    sizeOnOpen ??
    refInnerContainer.current?.[
      orientation === 'vertical' ? 'clientHeight' : 'clientWidth'
    ] ??
    '200px';

  const size =
    orientation === 'vertical'
      ? ({ reactCssKey: 'height', cssKey: 'height' } as const)
      : ({ reactCssKey: 'width', cssKey: 'width' } as const);
  const maxSize =
    orientation === 'vertical'
      ? ({ reactCssKey: 'maxHeight', cssKey: 'max-height' } as const)
      : ({ reactCssKey: 'maxWidth', cssKey: 'max-width' } as const);

  return (
    <Box
      className="ext-container"
      $css={{
        [size.reactCssKey]: maxSizeOnOpen,
        [maxSize.reactCssKey]: sizeOnClose,
        transition: `${maxSize.cssKey} ${duration}s ${
          animation !== null && typeof animation === 'object'
            ? animation.close
            : animation
        }`,
        overflow: 'hidden',

        ...(isOpenDebouncedForOpening && {
          [maxSize.reactCssKey]: maxSizeOnOpen,
          transition: `${maxSize.cssKey} ${duration}s ${
            animation !== null && typeof animation === 'object'
              ? animation.open
              : animation
          }`,
        }),
        ...extContainerCss,
      }}
    >
      <Box
        ref={refInnerContainer}
        className="int-container"
        $css={{
          [size.reactCssKey]: 'fit-content',

          ...intContainerCss?.always,
          ...(isOpenDebouncedForOpening && intContainerCss?.onOpen),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
