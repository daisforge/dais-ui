import { ChipCompProps } from '@ui-kit/components/Chip';
import { Collapse } from '@ui-kit/components/Collapse';
import { useDebouncedValue } from '@ui-kit/utils';
import React from 'react';

import {
  StyledChip,
  StyledChipGroup,
} from './AnalyticalWidgetChipsGroup.styled';
import { AnalyticalWidgetChipsGroupProps } from './AnalyticalWidgetChipsGroup.types';

export const AnalyticalWidgetChipsGroup = ({
  chips,
  commonView = 'default',
  commonSize = 'xs',
  opened = false,
  ...groupProps
}: AnalyticalWidgetChipsGroupProps) => {
  const debouncedOpened = useDebouncedValue(opened, 300, false);
  return (
    <Collapse isOpen={debouncedOpened} unMountOnClose>
      <StyledChipGroup
        view={commonView}
        size={commonSize}
        isCommonChipStyles={false}
        {...groupProps}
      >
        {chips.map(({ key, view, ...chipProps }, index) => (
          <StyledChip
            size="xs"
            appearance={'transparent' as unknown as 'default'}
            {...(chipProps as Omit<ChipCompProps, 'appearance'>)}
            key={key ?? `${chipProps?.name}-${index}`}
          />
        ))}
      </StyledChipGroup>
    </Collapse>
  );
};
