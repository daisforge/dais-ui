import type { TValidateDateProps } from '../../../lib/utils/types';
import { validateDate } from '../../../lib/utils/validateDate';
import type {
  TDatePickerRangeData,
  TValidateDatePickerRange,
} from '../../types';

export const validateRangeDate = ({
  min,
  max,
  required,
  invalidFormatMessage,
  format,
}: TValidateDateProps): TValidateDatePickerRange => {
  const validatorRange = validateDate({
    min,
    max,
    required,
    invalidFormatMessage,
    format,
  });
  return (value?: TDatePickerRangeData) => {
    const { dateFrom = undefined, dateTo = undefined } = value || {};

    const resultDateFrom = validatorRange(dateFrom);
    if (typeof resultDateFrom === 'string') return resultDateFrom;

    const resultDateTo = validatorRange(dateTo);
    if (typeof resultDateTo === 'string') return resultDateTo;
    return true;
  };
};
