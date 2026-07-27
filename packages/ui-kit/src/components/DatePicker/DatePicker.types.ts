import type { DatePicker, DatePickerRange } from '@salutejs/sdds-finai';
import { ComponentProps } from 'react';

export type {
  DatePickerPlacement,
  DatePickerPlacementBasic,
  DatePickerProps,
  DatePickerRangePlacement,
  DatePickerRangeProps
} from '@salutejs/sdds-finai';

export type DatePickerCompProps = ComponentProps<typeof DatePicker>;
export type DatePickerRangeCompProps = ComponentProps<typeof DatePickerRange>;
