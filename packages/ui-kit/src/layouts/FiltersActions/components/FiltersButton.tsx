import { Button, type ButtonCompProps } from '@ui-kit/components/Button';
import { Icon, IconSettingsFilter } from '@ui-kit/icons';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import { Circle } from './Circle';

export type FiltersActionsFiltersButtonProps = ButtonCompProps & {
  redSquare?: boolean;
  hideLabel?: boolean;
  iconSize?: ComponentProps<typeof Icon>['size'];
};

export const FiltersActionsFiltersButton = styled(Button).attrs(
  ({
    redSquare,
    hideLabel = false,
    size,
    iconSize,
    children,
    ...props
  }: FiltersActionsFiltersButtonProps) => ({
    view: 'secondary',
    size: size ?? 's',
    type: 'button',
    contentLeft: !hideLabel && <IconSettingsFilter size={iconSize ?? 's'} />,
    children: (
      <>
        {children ?? (!hideLabel && (props.text ?? 'Ещё фильтры'))}
        {hideLabel && <IconSettingsFilter size={iconSize ?? 's'} />}
        <Circle visible={redSquare} />
      </>
    ),
    ...props
  })
)<{
  redSquare?: boolean;
}>`
  position: relative;
  white-space: nowrap;
`;
