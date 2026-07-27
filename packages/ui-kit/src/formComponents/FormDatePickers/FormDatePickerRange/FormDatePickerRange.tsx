/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import {
  getPriorityRequired,
  getRuleValue,
  hasValidationRule,
  useChangedFormContext
} from '../../utils';
import { DefaultRightIconButton } from '../lib/ui/RightIconButton';
import { convertToISO } from '../lib/utils/convertToISO';
import { validateRequiredHoс } from './lib/utils';
import { validateRangeDate } from './lib/utils/validateRangeDate';
import type { TMutationDatePickerRangeProps } from './types';
import { DatePickerRangeStyled } from './ui/FormDatePickerRangeStyled';

/**
 * [FormDatePickerRange](url) относится к группе mutation-form элементов. Он расширяет возможности
 * компонента [DatePicker.Range](https://plasma.sberdevices.ru/sdds-finai/components/datepicker/)
 * библиотеки [sdds-finai](https://plasma.sberdevices.ru/sdds-finai/) для работы с диапазонами дат в формах.
 *
 * ### Основные особенности:
 * - Встроенная валидация формата дат (сообщение через `invalidFormatMessage`)
 * - Поддержка обязательного заполнения (`required`)
 * - Контроль допустимых диапазонов дат
 * - Интеграция с react-hook-form
 *
 * ### Валидация диапазонов:
 * Для ограничения выбора дат используйте:
 * ```tsx
 * <FormDatePickerRange
 *   options={{
 *     min: {
 *       value: new Date(2024, 0, 1).getTime(),
 *       message: "Минимальная дата - 1 января 2024"
 *     },
 *     max: {
 *       value: new Date(2024, 11, 31).getTime(),
 *       message: "Максимальная дата - 31 декабря 2024"
 *     }
 *   }}
 * />
 * ```
 *
 * ### Обязательное поле:
 * ```tsx
 * // Простое указание обязательности
 * <FormDatePickerRange options={{ required: true }} />
 *
 * // С кастомным сообщением
 * <FormDatePickerRange
 *   options={{
 *     required: "Пожалуйста, укажите диапазон дат"
 *   }}
 * />
 * ```
 *
 * ### Кастомная валидация:
 * ```tsx
 * <FormDatePickerRange
 *   options={{
 *     validate: {
 *       minDuration: (value) =>
 *         (new Date(value.dateTo) - new Date(value.dateFrom)) < 7 * 86400000
 *           ? "Минимальный период - 7 дней"
 *           : true,
 *       noWeekends: (value) =>
 *         [0, 6].includes(new Date(value.dateFrom).getDay())
 *           ? "Нельзя начинать в выходные"
 *           : true
 *     }
 *   }}
 * />
 * ```
 *
 * ### Приоритеты валидации:
 * 1. Проверка обязательности заполнения
 * 2. Валидация формата дат
 * 3. Проверка минимальных/максимальных значений
 * 4. Кастомные валидаторы
 *
 * @param format Формат даты (по умолчанию 'DD.MM.YYYY')
 * @param invalidFormatMessage Сообщение при неверном формате
 * @param options Параметры валидации (required, min, max, validate)
 * @param min/max Альтернативный способ указания диапазона (перебивает options)
 */
export const FormDatePickerRange = <TFieldValues extends FieldValues>({
  name,
  options,
  portal,
  onChange: handleChange,
  textHint,
  format = 'DD.MM.YYYY',
  invalidFormatMessage = 'Формат даты указан не верно',
  ref,
  min: propsMin,
  max: propsMax,
  onChangeFirstValue,
  onChangeSecondValue,
  defaultFirstDate,
  defaultSecondDate,
  required: propsRequired,
  ...rest
}: TMutationDatePickerRangeProps<TFieldValues>) => {
  const [opened, setOpened] = useState(false);

  const newOptions: typeof options = {
    ...options,
    required: getPriorityRequired({ options, ruleName: 'required' })
      ? options?.required
      : propsRequired
  };

  // Обработка min/max из пропсов и options
  const validateArgs = {
    min: (() => {
      if (propsMin) {
        const minValue = propsMin.getTime();
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
    invalidFormatMessage
  };

  const validateRange = validateRangeDate({ ...validateArgs, format });
  const validators = validateRequiredHoс({
    required: newOptions?.required,
    validateRange,
    externalValidates: newOptions?.validate
  });

  const formCtx = useChangedFormContext({
    ...newOptions,
    validate: (value: unknown) => {
      const safeValue = value
        ? {
            dateFrom: (value as any).dateFrom,
            dateTo: (value as any).dateTo
          }
        : { dateFrom: undefined, dateTo: undefined };
      return validators(safeValue, formCtx.getValues());
    }
  });

  const { control, rules, remOptions, clearErrors } = formCtx;

  const maxTime =
    propsMax?.getTime() ??
    getRuleValue({ rule: newOptions?.max, typeValue: 'number' });
  const minTime =
    propsMin?.getTime() ??
    getRuleValue({ rule: newOptions?.min, typeValue: 'number' });

  const handleDateCommit = (
    value: string | Date,
    error: boolean | undefined,
    changeCb: (...event: any[]) => void,
    fieldName: 'dateFrom' | 'dateTo'
  ) => {
    if (!value) return;

    if (error) {
      formCtx.setError(`${name}`, {
        type: 'custom',
        message: `Ошибка значения`
      });
      setOpened(false);
      return;
    }

    const currentValue = formCtx.getValues(name) || {};
    const updatedDate = convertToISO({
      date: typeof value === 'string' ? value : value.toDateString(),
      format
    });

    if (updatedDate) {
      changeCb({
        ...currentValue,
        [fieldName]: value
      });
    }
  };

  const onCommitFirstDateHandler = (
    value: string | Date,
    error: boolean | undefined,
    changeCb: (...event: any[]) => void
  ) => handleDateCommit(value, error, changeCb, 'dateFrom');

  const onCommitSecondDateHandler = (
    value: string | Date,
    error: boolean | undefined,
    changeCb: (...event: any[]) => void
  ) => handleDateCommit(value, error, changeCb, 'dateTo');

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...remOptions}
      render={({
        field: { value, ref: rhfRef, ...fieldRest },
        fieldState: { error }
      }) => {
        // При form.reset() value станет undefined - не используем defaultDate
        // DatePickerRange ожидает пустую строку для очистки, а не undefined
        const { dateFrom, dateTo } = value || { dateFrom: '', dateTo: '' };
        const firstDateValue =
          dateFrom !== undefined && dateFrom !== null && dateFrom !== ''
            ? dateFrom
            : '';
        const secondDateValue =
          dateTo !== undefined && dateTo !== null && dateTo !== ''
            ? dateTo
            : '';

        const errorText =
          error?.message ||
          (error as any)?.dateFrom?.message ||
          (error as any)?.dateTo?.message;

        return (
          <DatePickerRangeStyled
            {...fieldRest}
            ref={rhfRef}
            isDoubleCalendar
            closeOnOverlayClick
            contentRight={<DefaultRightIconButton datePickerSize={rest.size} />}
            // defaultFirstDate={firstDateValue}
            // defaultSecondDate={secondDateValue}
            value={[firstDateValue, secondDateValue]}
            firstValueError={!!error}
            format={format}
            frame={portal}
            label={rest.label}
            max={(maxTime && new Date(maxTime)) || undefined}
            min={(minTime && new Date(minTime)) || undefined}
            name={name}
            // ВАЖНО: если в обертке задавать offset - возникает проблема, пикер уезжает в левый верхний угол
            // если offset необходим, то нужно дополнительно указываться placement, тогда работает корректно.
            // offset={[0, 2]}
            // placement="top"
            opened={opened}
            maskWithFormat
            required={(rest.label && !!newOptions.required) || undefined}
            requiredPlacement="right"
            hasRequiredIndicator={
              (rest.label && !!newOptions.required) || undefined
            }
            secondValueError={!!error}
            usePortal={!!portal}
            onChange={({ target }) => {
              if ('value' in target) {
                handleChange?.(target.value || '');
                if (error) clearErrors(name);
              }
            }}
            onChangeFirstValue={(e, date = '') => {
              const currentValue = formCtx.getValues(name) || {};
              // const updatedDate = convertToISO({ date, format });
              const newValue = {
                ...currentValue,
                dateFrom: date
              };
              fieldRest.onChange(newValue);
              onChangeFirstValue?.(e);
            }}
            onChangeSecondValue={(e, date = '') => {
              const currentValue = formCtx.getValues(name) || {};
              // const updatedDate = convertToISO({ date, format });
              const newValue = {
                ...currentValue,
                dateTo: date
              };
              fieldRest.onChange(newValue);
              onChangeSecondValue?.(e);
            }}
            onCommitSecondDate={(val, err) =>
              onCommitSecondDateHandler(val, err.error, fieldRest.onChange)
            }
            onCommitFirstDate={(val, err) =>
              onCommitFirstDateHandler(val, err.error, fieldRest.onChange)
            }
            onToggle={(value) => {
              setOpened(value);
            }}
            leftHelper={
              errorText || textHint ? errorText || textHint : undefined
            }
            {...rest}
          />
        );
      }}
    />
  );
};
