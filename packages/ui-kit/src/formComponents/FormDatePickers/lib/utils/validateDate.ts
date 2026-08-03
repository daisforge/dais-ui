import { getRuleValue } from '../../../utils';
import { convertToISO } from './convertToISO';
import type { TValidateDateProps } from './types';

export const validateDate = ({
  min,
  max,
  required,
  invalidFormatMessage,
  format,
}: TValidateDateProps) => {
  const maxDate = max && getRuleValue({ rule: max, typeValue: 'number' });
  const minDate = min && getRuleValue({ rule: min, typeValue: 'number' });

  return (value?: Date | string): string | boolean => {
    let isoDate;
    let dateToCheck: Date | null = null;

    // Пытаемся преобразовать строку в дату
    if (typeof value === 'string' && format) {
      isoDate = convertToISO({ date: value, format });
      if (isoDate) {
        dateToCheck = new Date(isoDate);
      }
    }

    // Если value уже Date или строка, которую можно преобразовать в Date
    if (value instanceof Date || (typeof value === 'string' && !format)) {
      dateToCheck = new Date(value);
    }

    const nowDate =
      dateToCheck && !Number.isNaN(dateToCheck.getTime())
        ? dateToCheck.getTime()
        : null;

    if (nowDate !== null) {
      if (typeof minDate === 'number' && nowDate <= minDate) {
        return typeof min === 'object' && 'message' in min
          ? (min?.message as string)
          : false;
      }
      if (typeof maxDate === 'number' && nowDate >= maxDate) {
        return typeof max === 'object' && 'message' in max
          ? (max?.message as string)
          : false;
      }
      return true;
    }

    // Если дата невалидна, но строка не пустая
    if (value && typeof value === 'string' && value.length) {
      return invalidFormatMessage;
    }

    if (!required) {
      return true;
    }

    return typeof required === 'object' && 'message' in required
      ? (required?.message as string)
      : false;
  };
};
