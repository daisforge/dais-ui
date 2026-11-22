import { ChipCompProps } from '@ui-kit/components/Chip';
import { Collapse } from '@ui-kit/components/Collapse';
import { useDebouncedValue } from '@ui-kit/utils';
import React, { useRef } from 'react';

import { analyticalWidgetClassNames as cls } from '../../AnalyticalWidget.constants';
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

  const lastNonEmptyChipsRef = useRef(chips);
  if (chips.length > 0) {
    lastNonEmptyChipsRef.current = chips;
  }
  const renderedChips = chips.length > 0 ? chips : lastNonEmptyChipsRef.current;

  return (
    <div className={cls.selfSpacedTopSlot}>
      <Collapse isOpen={debouncedOpened} unMountOnClose>
        <StyledChipGroup
          view={commonView}
          size={commonSize}
          isCommonChipStyles={false}
          {...groupProps}
        >
          {renderedChips.map(({ key, view, ...chipProps }, index) => (
            <StyledChip
              size="xs"
              appearance={'transparent' as unknown as 'default'}
              {...(chipProps as Omit<ChipCompProps, 'appearance'>)}
              key={key ?? `${chipProps?.name}-${index}`}
            />
          ))}
        </StyledChipGroup>
      </Collapse>
    </div>
  );
};
