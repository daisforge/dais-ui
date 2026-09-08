import { Dropdown } from '@ui-kit/components/Dropdown';
import {
  EmbeddedButtonBeta,
  EmbeddedButtonBetaCompProps,
} from '@ui-kit/components/EmbeddedButtonBeta';
import {
  Icon,
  IconDotsHorizontalOutline,
  IconDotsVerticalOutline,
} from '@ui-kit/icons';
import { textPrimary } from '@ui-kit/tokens';
import React, { ComponentProps, forwardRef } from 'react';

import { StyledAbsoluteDots } from './AnalyticalWidgetIconButtonDots.styled';

type AnalyticalWidgetIconButtonDotsProps = Omit<
  EmbeddedButtonBetaCompProps,
  'children' | 'ref'
> & {
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof Icon>['size'];
  iconOrientation?: 'horizontal' | 'vertical';
  /**
   * Позиционировать кнопку абсолютом в правом верхнем углу ближайшего
   * relative-контейнера. Для потребителей (напр. GridDND рабочих столов),
   * у которых нет доступа к контенту виджета.
   */
  absolute?: boolean;
  /**
   * Отступ (top/right) при `absolute`.
   * @default 12
   */
  absoluteOffset?: number;
};

export const AnalyticalWidgetIconButtonDots = forwardRef<
  HTMLButtonElement,
  AnalyticalWidgetIconButtonDotsProps
>(
  (
    {
      dropdownProps,
      iconSize,
      iconOrientation = 'vertical',
      view = 'secondary',
      size = 'm',
      absolute = false,
      absoluteOffset = 12,
      style,
      ...props
    },
    ref,
  ) => {
    const DotsIcon =
      iconOrientation === 'vertical'
        ? IconDotsVerticalOutline
        : IconDotsHorizontalOutline;

    const jsx = (
      <EmbeddedButtonBeta
        ref={ref}
        view={view}
        size={size}
        style={style}
        {...props}
      >
        <DotsIcon size={iconSize ?? 's'} color={textPrimary} />
      </EmbeddedButtonBeta>
    );

    const content = dropdownProps ? (
      <Dropdown {...dropdownProps}>{jsx}</Dropdown>
    ) : (
      jsx
    );

    if (absolute) {
      return (
        <StyledAbsoluteDots $offset={absoluteOffset}>
          {content}
        </StyledAbsoluteDots>
      );
    }

    return content;
  },
);

AnalyticalWidgetIconButtonDots.displayName = 'AnalyticalWidgetIconButtonDots';
