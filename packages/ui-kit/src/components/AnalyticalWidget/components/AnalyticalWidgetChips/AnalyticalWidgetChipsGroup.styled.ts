import { Chip } from '@ui-kit/components/Chip';
import { ChipGroup } from '@ui-kit/components/ChipGroup';
import styled from 'styled-components';

export const StyledChip: typeof Chip = styled(Chip)`
  max-height: 20px;
  max-width: 180px;
  border-radius: 12px;
  padding-inline: 8px;
`;

export const StyledChipGroup = styled(
  ChipGroup as React.ForwardRefExoticComponent<
    React.ComponentProps<typeof ChipGroup> & React.RefAttributes<HTMLDivElement>
  >,
)`
  --analytical-widget-chips-gap: 4px;
  gap: var(--analytical-widget-chips-gap);
  padding-top: 8px;
`;
