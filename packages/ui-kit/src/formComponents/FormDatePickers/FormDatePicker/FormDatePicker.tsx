import { DatePickerCompProps } from '@ui-kit/components/DatePicker';
import React, { useState } from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import {
  getPriorityRequired,
  getRuleValue,
  hasValidationRule,
  useChangedFormContext,
} from '../../utils';
// import { convertToISO } from '../lib/utils/convertToISO';
import type { TValidateDateProps } from '../lib/utils/types';
import { validateDate } from '../lib/utils/validateDate';
import type { FormDatePickerProps } from './types';
import { DatePickerStyled } from './ui/DatePickerStyled';

type DatePickerEvent = {
  target: {
    value?: string;
    name?: string;
    originalDate?: Date;
    isoDate?: string;
  };
};

/**
 *  [FormDatePicker](url) относится к группе mutation-form элементов. Он расширяет возможности
 *  компонента [DatePicker](https://plasma.sberdevices.ru/sdds-finai/components/datepicker/)
 *  библиотеки [sdds-finai](https://plasma.sberdevices.ru/sdds-finai/) для использования в формах.
 *  Компонент имеет встроенную валидацию введенных данных как значения даты, сообщение, которое будет показано
 *  пользователю в случае ошибки, задается через параметр `invalidFormatMesssage`.
 *
 *  Умеет контролировать пользовательский ввод в разрешенном диапазоне дат, для ограничения выбора дат надо указать в `options.min/max`, либо передать пропсы `min/max` (type Date) которые перебивают `options.min/max`.
 * значения дат выраженные в миллисекундах, например:
 * ```
 * ...
 * options: {
 *  max: {
 *      value: new Date().getTime(),
 *      message: "Указанная дата за пределами максимально доступной"
 *  }
 * }
 *```
 */
export const FormDatePicker = <TFieldValues extends FieldValues>({
  name,
  options,
  portal,
  onChange: handleChange,
  textHint,
  format = 'DD.MM.YYYY',
  invalidFormatMessage = 'Формат даты указан не верно',
  size = 's',
  requiredPlacement = 'right',
  maskWithFormat = true,
  offset = [0, 2],
  leftHelper,
  defaultDate,
  ref,
  min: propsMin,
  max: propsMax,
  opened: propsOpened,
  required: propsRequired,
  ...rest
}: FormDatePickerProps<TFieldValues>) => {
  const [opened, setOpened] = useState(propsOpened ?? false);

  const newOptions: typeof options = {
    ...options,
    required: getPriorityRequired({ options, ruleName: 'required' })
      ? options?.required
      : propsRequired,
  };

  // Так как у DatePicker можно задать пропсы min и max, то нужно учитывать их в случаях, когда
  // заданы min и max y пропса options и не было расхождений. Приоритет над пропсами
  // min и max компонента DatePicker, далее по приоритету идут значения из options.
  const validateArgs: TValidateDateProps = {
    min: (() => {
      if (propsMin) {
        const minValue = propsMin.getTime();
        // Если в options.min есть message — используем его, иначе просто число
        return typeof newOptions?.min === 'object' &&
          'message' in newOptions.min
          ? { value: minValue, message: newOptions.min.message }
          : minValue;
      }
      return hasValidationRule({ options: newOptions, ruleName: 'min' })
        ? newOptions?.min
        : undefined;
    })(),
    max: (() => {
      if (propsMax) {
        const maxValue = propsMax.getTime();
        // Если в newOptions.max есть message — используем его, иначе просто число
        return typeof newOptions?.max === 'object' &&
          'message' in newOptions.max
          ? { value: maxValue, message: newOptions.max.message }
          : maxValue;
      }
      return hasValidationRule({ options: newOptions, ruleName: 'max' })
        ? newOptions?.max
        : undefined;
    })(),
    required: newOptions?.required,
    invalidFormatMessage,
    format,
  };

  const validateRange = validateDate(validateArgs);

  const formCtx = useChangedFormContext({
    ...newOptions,
    validate: (value: Date | string) => {
      // Если задана функция внешней валидации - исполняем ее
      const externalValidate = newOptions?.validate as
        | ((val: unknown) => string | boolean)
        | undefined;
      if (externalValidate) {
        return externalValidate(value);
      }
      // Если внешняя функция не задана - используем внутреннюю проверку
      const rangeValidation = validateRange(value);
      if (rangeValidation !== true) return rangeValidation;
      return true;
    },
  });

  const { control, rules, remOptions, clearErrors } = formCtx;

  const maxTime =
    propsMax?.getTime() ??
    getRuleValue({ rule: newOptions?.max, typeValue: 'number' });

  const minTime =
    propsMin?.getTime() ??
    getRuleValue({ rule: newOptions?.min, typeValue: 'number' });

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...remOptions}
      render={({
        field: {
          name: _fieldName,
          ref: rhfRef,
          onBlur,
          onChange: onChangeRhf,
          ...fieldRest
        },
        fieldState: { error },
      }) => {
        // Используем defaultDate только при первом рендере, когда value еще не задан
        // При form.reset() value станет undefined - не используем defaultDate
        const fieldValue = fieldRest?.value;
        const dateValue =
          fieldValue !== undefined && fieldValue !== null && fieldValue !== ''
            ? fieldValue
            : '';
        return (
          <DatePickerStyled
            {...fieldRest}
            ref={rhfRef}
            maskWithFormat={maskWithFormat}
            value={dateValue}
            format={format}
            frame={portal}
            max={(maxTime && new Date(maxTime)) || undefined}
            min={(minTime && new Date(minTime)) || undefined}
            offset={offset}
            opened={opened}
            required={(rest.label && !!newOptions.required) || undefined}
            requiredPlacement={requiredPlacement}
            hasRequiredIndicator={
              (rest.label && !!newOptions.required) || undefined
            }
            includeEdgeDates
            size={size}
            usePortal={!!portal}
            valueError={!!error}
            onChange={(data) => {
              // Проверяем, что data - это объект с target
              if (typeof data === 'object' && data && 'target' in data) {
                const datePickerEvent = data as DatePickerEvent;
                const eventLike = {
                  target: {
                    value: datePickerEvent.target.value,
                    name: datePickerEvent.target.name,
                    originalDate: datePickerEvent.target.originalDate,
                    isoDate: datePickerEvent.target.isoDate,
                  },
                };
                handleChange?.(eventLike);
                onChangeRhf(eventLike);
              }
              // Иначе считаем это React событием
              else {
                const reactEvent = data as React.FormEvent<HTMLDivElement>;
                handleChange?.(reactEvent);
                onChangeRhf(reactEvent);
              }
            }}
            onCommitDate={(date) => {
              clearErrors(name);
              onChangeRhf(date);
              setOpened(false);
            }}
            onToggle={(value) => setOpened(value)}
            leftHelper={
              error?.message || textHint
                ? error?.message || textHint
                : undefined
            }
            {...(rest as DatePickerCompProps)}
          />
        );
      }}
    />
  );
};
