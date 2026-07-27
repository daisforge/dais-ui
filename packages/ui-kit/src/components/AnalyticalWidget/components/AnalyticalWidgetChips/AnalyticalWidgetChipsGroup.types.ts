import { ChipCompProps } from '@ui-kit/components/Chip';

import { StyledChipGroup } from './AnalyticalWidgetChipsGroup.styled';

export type AnalyticalWidgetFixedChipProps = ChipCompProps & {
  key?: string | number;
};

export type AnalyticalWidgetChipsGroupProps = Omit<
  React.ComponentProps<typeof StyledChipGroup>,
  'children'
> & {
  /**
   * Пропсы для чипов
   */
  chips: AnalyticalWidgetFixedChipProps[];
  commonView?: 'default' | 'accent' | 'clear';
  commonSize?: 's' | 'm' | 'xs';
  opened: boolean;
};
