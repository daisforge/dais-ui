/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import { FormAutocomplete } from '@ui-kit/formComponents/FormAutocomplete';
import { FormCheckbox } from '@ui-kit/formComponents/FormCheckbox';
import { FormCombobox } from '@ui-kit/formComponents/FormCombobox';
import {
  FormDatePicker,
  FormDatePickerRange
} from '@ui-kit/formComponents/FormDatePickers';
import { FormMask } from '@ui-kit/formComponents/FormMask';
import { FormNumberFormat } from '@ui-kit/formComponents/FormNumberFormat';
import {
  FormRadiobox,
  FormRadioGroup
} from '@ui-kit/formComponents/FormRadioGroupBox';
import { FormSegmentGroup } from '@ui-kit/formComponents/FormSegments';
import { FormSelect } from '@ui-kit/formComponents/FormSelect';
import { FormSwitch } from '@ui-kit/formComponents/FormSwitch';
import { FormTextArea } from '@ui-kit/formComponents/FormTextArea';
import { FormTextField } from '@ui-kit/formComponents/FormTextField';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { items, mockData } from './data';

const meta: Meta = {
  title: 'Формы/Компоненты формы',
  tags: ['!autodocs'],
  component: () => null
};

export default meta;

type Story = StoryObj<object>;

const SchemaForValues = z.object({
  textfield: z
    .string()
    .min(1, 'Заполните обязательное поле')
    .min(3, 'обязательное больше 3'),
  mask: z
    .string()
    .min(1, 'Заполните обязательное поле')
    .min(3, 'обязательное больше 3'),
  textarea: z
    .string()
    .min(1, 'Заполните обязательное поле')
    .min(3, 'обязательное больше 3'),
  switch: z.boolean(),
  checkbox: z.boolean(),
  autocomplete: z
    .string()
    .min(1, 'Заполните обязательное поле')
    .min(3, 'обязательное больше 3'),
  combobox: z.string().min(1, 'Заполните обязательное поле'),
  comboboxMultiple: z.array(z.string()).min(1, 'Заполните обязательное поле'),
  select: z.string().min(1, 'Заполните обязательное поле'),
  selectMulti: z.array(z.string()).min(1, 'Заполните обязательное поле'),
  numberFormat: z.string().min(1, 'Заполните обязательное поле'),
  date: z
    .string()
    .min(1, 'Заполните обязательное поле')
    .min(7, 'Неверно введённая дата'),
  dateRange: z
    .object({
      dateFrom: z.string().min(1, 'Укажите начальную дату'),
      dateTo: z.string().min(1, 'Укажите конечную дату')
    })
    .refine((data) => {
      if (!data.dateFrom || !data.dateTo) return true;
      const parseDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('.');
        return new Date(`${year}-${month}-${day}`);
      };
      const fromDate = parseDate(data.dateFrom);
      const toDate = parseDate(data.dateTo);

      if (Number.isNaN(fromDate.getTime()) || Number.isNaN(toDate.getTime())) {
        return true;
      }
      return toDate >= fromDate;
    }),
  gender: z.string().min(1, 'Заполните обязательное поле'),
  status: z
    .array(z.string())
    .min(1, { message: 'Заполните хотя бы одно поле.' })
    .refine((arr) => arr.every((str) => str.trim().length > 0), {
      message: 'Значения не должны быть пустыми.'
    })
});
type FormValues = z.infer<typeof SchemaForValues>;

const preCode = `
import {
  FormAutocomplete,
  FormCheckbox,
  FormCombobox,
  FormSelect,
  FormSwitch,
  FormTextArea,
  FormTextField,
  FormNumberFormat,
  FormDatePicker,
  FormDatePickerRange,
  FormRadioGroup,
  FormRadiobox,
  FormSegmentGroup,
  Button
} from '@dais-ui/ui-kit';
import { FormProvider, useForm } from 'react-hook-form';
`;

export const ExampleWithoutValidator: Story = {
  name: 'Компоненты формы',
  ...storySourceDoc({
    preCode,
    previewSource: 'shown'
  }),
  render: () => {
    const form = useForm<FormValues>({
      reValidateMode: 'onBlur',
      defaultValues: {
        textfield: '',
        mask: '',
        textarea: '',
        checkbox: false,
        switch: true,
        autocomplete: '',
        combobox: '',
        comboboxMultiple: [],
        select: '',
        selectMulti: [],
        numberFormat: '',
        date: '',
        dateRange: {
          dateFrom: '05.05.2024',
          dateTo: '07.05.2024'
        },
        gender: 'male',
        status: ['ready']
      }
    });

    const onSubmit = (data: unknown) => {
      alert(JSON.stringify(data, undefined, 2));
    };

    return (
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}
      >
        <FormProvider {...form}>
          <FormTextField
            label="FormTextField"
            name="textfield"
            options={{
              minLength: {
                value: 3,
                message: 'значение должно быть длиннее 3'
              },
              required: true
            }}
          />
          <FormMask
            label="FormMask"
            name="mask"
            mask="*-*-*"
            options={{
              minLength: {
                value: 3,
                message: 'значение должно быть длиннее 3'
              },
              required: true
            }}
          />
          <FormTextArea
            label="FormTextArea"
            name="textarea"
            autoResize
            options={{
              validate: (v) => {
                if (!(v ?? '').includes('@')) {
                  return 'должен содержаться символ @';
                }
                return true;
              },
              maxLength: 50,
              required: 'Заполните обязательное поле'
            }}
          />
          <FormCheckbox<FormValues>
            name="checkbox"
            label="Checkbox"
            size="m"
            options={{
              required: 'Заполните обязательное поле'
            }}
          />
          <FormSwitch
            name="switch"
            label="Switch"
            labelPosition="after"
            options={{
              validate: (v) => {
                if (!v) {
                  return 'Заполните обязательное поле';
                }
                return true;
              }
            }}
          />

          <FormAutocomplete
            name="autocomplete"
            suggestions={mockData}
            label="FormAutocomplete"
            options={{
              minLength: {
                value: 2,
                message: 'обязательное больше 2'
              },
              required: 'Заполните обязательное поле'
            }}
          />
          <FormCombobox
            name="combobox"
            label="FormCombobox"
            items={items}
            options={{
              required: 'Заполните обязательное поле'
            }}
          />
          <FormCombobox
            label="FormCombobox multiple"
            name="comboboxMultiple"
            multiple
            items={items}
            options={{
              validate: (v) => {
                if (v.length < 3) {
                  return 'минимум три выбранных элемента';
                }
                return true;
              },
              required: 'Заполните обязательное поле'
            }}
          />
          <FormSelect
            style={{
              maxWidth: '50%'
            }}
            label="FormSelect"
            name="select"
            items={items}
            options={{
              required: 'Заполните обязательное поле'
            }}
          />
          <FormSelect
            label="FormSelect multiple"
            name="selectMulti"
            multiselect
            items={items}
            options={{
              validate: (v) => {
                if (v.length < 3) {
                  return 'минимум три выбранных элемента';
                }
                return true;
              },
              required: 'Заполните обязательное поле'
            }}
          />
          <FormNumberFormat
            name="numberFormat"
            label="FormNumberFormat"
            size="s"
            thousandSeparator=" "
            decimalSeparator="."
            options={{
              minLength: {
                value: 3,
                message: 'значение должно быть длиннее 3'
              },
              required: 'Заполните обязательное поле'
            }}
          />
          <FormDatePicker
            name="date"
            label="Date"
            invalidFormatMessage="некорректно"
            size="s"
            options={{
              required: 'обязательное поле',
              max: {
                value: new Date().getTime(),
                message: 'указанная дата за пределами максимально доступной'
              },
              min: {
                value: new Date().getTime() - 20 * 24 * 60 * 60 * 1000,
                message: 'указанная дата за пределами минимально доступной'
              }
            }}
            placement={['left', 'top']}
            placeholder="выберите дату"
            onChange={(data) => {
              // eslint-disable-next-line no-console
              console.debug('FormDatePicker data', data);
            }}
            style={{
              maxWidth: '559px'
            }}
          />
          <FormDatePickerRange
            name="dateRange"
            label="DateRange"
            isDoubleCalendar
            size="s"
            invalidFormatMessage="incorrect date"
            options={{
              required: 'обязательное поле',
              min: {
                value: new Date(2024, 0, 1).getTime(),
                message: 'мероприятия доступны с 2024 года'
              },
              max: {
                value: new Date(2024, 11, 31).getTime(),
                message: 'только события 2024 года'
              },
              validate: {
                minDuration: (value) => {
                  if (!value?.dateFrom || !value?.dateTo) return true;
                  const start = new Date(
                    value.dateFrom.split('.').reverse().join('-')
                  );
                  const end = new Date(
                    value.dateTo.split('.').reverse().join('-')
                  );
                  if (
                    Number.isNaN(start.getTime()) ||
                    Number.isNaN(end.getTime())
                  )
                    return true;
                  return end.getTime() - start.getTime() < 7 * 86400000
                    ? 'Минимальный период - 7 дней'
                    : true;
                },
                noWeekends: (value) => {
                  const start = new Date(
                    value.dateFrom.split('.').reverse().join('-')
                  );
                  return [0, 6].includes(start.getDay())
                    ? 'Нельзя начинать в выходные'
                    : true;
                }
              }
            }}
            style={{
              maxWidth: '559px'
            }}
          />
          <FormRadioGroup
            hintText="Подсказка"
            label="Label"
            titleCaption="TitleCaption"
            name="gender"
            options={{
              required: 'Заполните обязательное поле'
            }}
            size="s"
          >
            <FormRadiobox value="male" label="Мужской" size="m" />
            <FormRadiobox value="female" label="Женский" size="m" />
          </FormRadioGroup>
          <FormSegmentGroup
            name="status"
            label="Статус документа"
            titleCaption="Выберите один"
            options={{
              required: 'Выберите статус'
            }}
            size="s"
            hasBackground
            stretch
            pilled
            onChange={(val) =>
              // eslint-disable-next-line no-console
              console.debug('[FormSegmentGroup]:onChange:', val)
            }
            hintHasArrow
            hintText="Статус документа"
            items={[
              { label: 'draft', value: 'draft', view: 'secondary' },
              { label: 'ready', value: 'ready', view: 'secondary' },
              { label: 'signed', value: 'signed', view: 'secondary' }
            ]}
          />
          <Button type="submit">Отправить</Button>
        </FormProvider>
      </form>
    );
  }
};

const preCodeWithZod = `
import {
  FormAutocomplete,
  FormCheckbox,
  FormCombobox,
  FormSelect,
  FormSwitch,
  FormTextArea,
  FormTextField,
  FormNumberFormat,
  FormDatePicker,
  FormDatePickerRange,
  FormRadioGroup,
  FormRadiobox,
  FormSegmentGroup,
  Button
} from '@dais-ui/ui-kit';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
`;

export const WithZod: Story = {
  name: 'Пример формы заполнения c использованием библиотеки Zod для валидации',
  ...storySourceDoc({
    preCode: preCodeWithZod,
    previewSource: 'shown'
  }),
  render: () => {
    const form = useForm<FormValues>({
      reValidateMode: 'onSubmit',
      defaultValues: {
        textfield: '',
        mask: '',
        textarea: '',
        switch: true,
        autocomplete: '',
        combobox: '',
        comboboxMultiple: [],
        select: '',
        selectMulti: [],
        numberFormat: '',
        date: '',
        dateRange: {
          dateFrom: '',
          dateTo: ''
        },
        gender: 'male',
        status: ['ready']
      },
      resolver: zodResolver(SchemaForValues)
    });

    const onSubmit = (data: unknown) => {
      alert(JSON.stringify(data, undefined, 2));
    };

    return (
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}
      >
        <FormProvider {...form}>
          <FormTextField label="FormTextField" name="textfield" />
          <FormMask label="FormMask" name="mask" mask="*-*-*" />
          <FormTextArea label="FormTextArea" name="textarea" autoResize />
          <FormCheckbox<FormValues> name="checkbox" label="Checkbox" size="m" />
          <FormSwitch name="switch" label="Switch" labelPosition="after" />

          <FormAutocomplete
            name="autocomplete"
            suggestions={mockData}
            label="FormAutocomplete"
          />
          <FormCombobox name="combobox" label="FormCombobox" items={items} />
          <FormCombobox
            label="FormCombobox multiple"
            name="comboboxMultiple"
            multiple
            items={items}
          />
          <FormSelect label="FormSelect" name="select" items={items} />
          <FormSelect
            style={{
              maxWidth: '50%'
            }}
            label="FormSelect multiple"
            name="selectMulti"
            multiselect
            items={items}
          />
          <FormNumberFormat
            name="numberFormat"
            label="FormNumberFormat"
            size="s"
            thousandSeparator=" "
            decimalSeparator="."
          />
          <FormDatePicker
            name="date"
            label="Date"
            invalidFormatMessage="incorrect date"
            onChange={(data) => {
              // eslint-disable-next-line no-console
              console.debug('FormDatePicker data', data);
            }}
            style={{
              maxWidth: '559px'
            }}
          />
          <FormDatePickerRange
            name="dateRange"
            label="DateRange"
            invalidFormatMessage="incorrect date"
            isDoubleCalendar
            max={new Date(new Date().setDate(new Date().getDate() + 2))}
            size="s"
            style={{
              maxWidth: '559px'
            }}
          />
          <FormRadioGroup
            name="gender"
            label="Лейбл группы"
            radioGroupMode="row"
            hintText="Подсказка"
          >
            <FormRadiobox value="male" label="Мужской" size="m" />
            <FormRadiobox value="female" label="Женский" size="m" />
          </FormRadioGroup>
          <FormSegmentGroup
            name="status"
            label="Статус документа"
            titleCaption="Выберите один"
            size="s"
            hasBackground
            stretch
            pilled
            onChange={(val) =>
              // eslint-disable-next-line no-console
              console.debug('[FormSegmentGroup]:onChange', val)
            }
            hintHasArrow
            hintText="Статус документа"
            items={[
              { label: 'draft', value: 'draft', view: 'secondary', size: 's' },
              { label: 'ready', value: 'ready', view: 'secondary', size: 's' },
              {
                label: 'signed',
                value: 'signed',
                view: 'secondary',
                size: 's'
              }
            ]}
          />
          <Button type="submit">Отправить</Button>
        </FormProvider>
      </form>
    );
  }
};
