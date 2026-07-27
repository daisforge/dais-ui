/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import type {
  FieldName,
  FieldPathValue,
  FieldValues,
  Validate,
  ValidationRule
} from 'react-hook-form';

import { getIsRequired } from '../../../../utils';
import type { TValidateDatePickerRange } from '../../types';

export const validateRequiredHoс =
  ({
    required,
    validateRange,
    externalValidates
  }: {
    required?: ValidationRule<boolean> | string;
    validateRange: TValidateDatePickerRange;
    externalValidates?:
      | Validate<
          FieldPathValue<FieldValues, FieldName<FieldValues>>,
          FieldValues
        >
      | Record<
          string,
          Validate<
            FieldPathValue<FieldValues, FieldName<FieldValues>>,
            FieldValues
          >
        >;
  }): TValidateDatePickerRange =>
  (value, formValues) => {
    const { dateFrom, dateTo } = value;
    const isRequired = getIsRequired({ required });

    if (!isRequired) {
      return true;
    }

    let requiredMessage = 'поле обязательно';
    if (typeof required === 'string') {
      requiredMessage = required;
    } else if (typeof required === 'object' && required.message) {
      requiredMessage = required.message;
    }

    if (!dateFrom && !dateTo) return requiredMessage;
    if ((dateFrom && !dateTo) || (!dateFrom && dateTo)) {
      return 'Заполните обе даты диапазона';
    }

    const resultRange = validateRange(value, formValues);
    if (typeof resultRange === 'string') return resultRange;

    if (typeof externalValidates === 'function') {
      return externalValidates(value, formValues);
    }

    if (externalValidates) {
      for (const key in externalValidates) {
        if (Object.prototype.hasOwnProperty.call(externalValidates, key)) {
          const validator = externalValidates[key];
          if (validator) {
            const result = validator(value, formValues);
            if (typeof result === 'string') return result;
          }
        }
      }
    }

    return true;
  };
