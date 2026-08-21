import { Dropdown } from '@ui-kit/components/Dropdown';
import {
  EmbeddedButtonBeta,
  EmbeddedButtonBetaCompProps,
} from '@ui-kit/components/EmbeddedButtonBeta';
import {
  Icon,
  IconDotsHorizontalOutline,
  IconDotsVerticalCenteredOutline,
} from '@ui-kit/icons';
import { textPrimary } from '@ui-kit/tokens';
import React, { ComponentProps } from 'react';

type AnalyticalWidgetIconButtonDotsProps = Omit<
  EmbeddedButtonBetaCompProps,
  'children'
> & {
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof Icon>['size'];
  iconOrientation?: 'horizontal' | 'vertical';
};

export const AnalyticalWidgetIconButtonDots = ({
  dropdownProps,
  iconSize,
  iconOrientation = 'vertical',
  view = 'secondary',
  size = 'm',
  position = 'center-right',
  style,
  ...props
}: AnalyticalWidgetIconButtonDotsProps) => {
  const DotsIcon =
    iconOrientation === 'vertical'
      ? IconDotsVerticalCenteredOutline
      : IconDotsHorizontalOutline;

  const jsx = (
    <EmbeddedButtonBeta
      view={view}
      size={size}
      position={position}
      style={{ width: 32, height: 32, ...style }}
      {...props}
    >
      <DotsIcon size={iconSize ?? 's'} color={textPrimary} />
    </EmbeddedButtonBeta>
  );

  if (!dropdownProps) {
    return jsx;
  }

  return <Dropdown {...dropdownProps}>{jsx}</Dropdown>;
};
