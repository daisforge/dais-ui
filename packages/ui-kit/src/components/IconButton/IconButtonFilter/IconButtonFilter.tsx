import { Dropdown } from '@ui-kit/components/Dropdown';
import { Icon, IconSettingsFilter } from '@ui-kit/icons';
import { mergeClasses } from '@ui-kit/utils';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import { IconButton, type IconButtonProps } from '../IconButton';
import { Circle } from './Circle';

const StyledIconButton = styled(IconButton)<{ redSquare?: boolean }>`
  position: relative;
`;

type IconButtonFilterProps = IconButtonProps & {
  redSquare?: boolean;
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof Icon>['size'];
};

export const iconButtonFilterClassNames = {
  root: 'IconButtonFilter__root',
} as const;

export const IconButtonFilter = ({
  redSquare,
  dropdownProps,
  iconSize,
  className,
  ...props
}: IconButtonFilterProps) => {
  const jsx = (
    <StyledIconButton
      view="secondary"
      size="s"
      redSquare={redSquare}
      {...props}
    >
      <IconSettingsFilter size={iconSize ?? 's'} />
      <Circle visible={redSquare} />
    </StyledIconButton>
  );

  if (!dropdownProps) {
    return jsx;
  }

  return (
    <Dropdown
      className={mergeClasses(iconButtonFilterClassNames.root, className)}
      {...dropdownProps}
    >
      {jsx}
    </Dropdown>
  );
};
