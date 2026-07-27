/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@ui-kit/components/TextField';
import { IconCalendarOutline } from '@ui-kit/icons';
import type { ComponentProps } from 'react';
import React, { ChangeEvent, useState } from 'react';

type TextFieldProps = ComponentProps<typeof TextField>;

const meta: Meta<TextFieldProps> = {
  title: 'Локальные компоненты/TextField',
  component: TextField,
  tags: ['!autodocs'],
  args: {
    size: 's',
    view: 'default',
    label: 'Лейбл',
    labelPlacement: 'outer',
    placeholder: 'Заполните поле',
    leftHelper: 'Подсказка к полю',
    disabled: false,
    readOnly: false,
    required: false,
    optional: false
  },
  argTypes: {
    size: {
      options: ['s', 'xs'],
      control: { type: 'select' }
    },
    view: {
      options: ['default', 'positive', 'warning', 'negative'],
      control: { type: 'select' }
    },
    labelPlacement: {
      options: ['outer', 'inner'],
      control: { type: 'inline-radio' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    readOnly: {
      control: { type: 'boolean' }
    },
    required: {
      control: { type: 'boolean' }
    },
    optional: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;

type Story = StoryObj<TextFieldProps>;

const preCode = `
import { TextField } from '@daisforge/ui';
`;

/**
 * ### Базовый TextField
 *
 * Обёртка над `TextField` из `@salutejs/sdds-finai`.
 *
 * При `disabled` или `readOnly` автоматически отображается иконка замка справа.
 */
export const Default: Story = {
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldProps) => {
    const [value, setValue] = useState('Значение поля');

    return (
      <div style={{ width: '400px' }}>
        <TextField
          {...args}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </div>
    );
  }
};

export const Sizes: Story = {
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldProps) => {
    const sizes = ['s', 'xs'] as const;
    const [values, setValues] = useState<Record<string, string>>({
      l: '',
      m: '',
      s: '',
      xs: ''
    });

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '400px'
        }}
      >
        {sizes.map((size) => (
          <TextField
            {...args}
            key={size}
            size={size}
            label={`Size: ${size}`}
            placeholder="Заполните поле"
            value={values[size]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValues((prev) => ({ ...prev, [size]: e.target.value }))
            }
          />
        ))}
      </div>
    );
  }
};

/**
 * ### С кнопкой очистки (onClear)
 *
 * Приоритет contentRight:
 * 1. `disabled`/`readOnly` → замок (заменяет всё)
 * 2. `onClear` + `value` + `contentRight` → [крестик | contentRight] рядом
 * 3. `onClear` + `value` → только крестик
 * 4. иначе → `contentRight` как есть
 */
export const WithClear: Story = {
  name: 'Различные варианты',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldProps) => {
    const [value1, setValue1] = useState('Текст для очистки');
    const [value2, setValue2] = useState('Текст с иконкой');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('Текст');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '400px'
        }}
      >
        {/* Сценарий 3: onClear + value → только крестик */}
        <TextField
          {...args}
          label="onClear + value → крестик"
          value={value1}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue1(e.target.value)
          }
          onClear={() => setValue1('')}
        />

        {/* Сценарий 2: onClear + value + contentRight → [крестик | иконка] рядом */}
        <TextField
          {...args}
          label="onClear + value + contentRight → рядом"
          value={value2}
          contentRight={<IconCalendarOutline size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue2(e.target.value)
          }
          onClear={() => setValue2('')}
        />

        {/* Сценарий 4: onClear без value → крестик скрыт, contentRight как есть */}
        <TextField
          {...args}
          label="Пустое значение — крестик скрыт"
          value={value3}
          contentRight={<IconCalendarOutline size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue3(e.target.value)
          }
          onClear={() => setValue3('')}
        />

        {/* Сценарий 1: readOnly → замок (заменяет всё) */}
        <TextField
          {...args}
          label="ReadOnly — замок вместо крестика и contentRight"
          value="Только для чтения"
          readOnly
          contentRight={<IconCalendarOutline size="s" />}
          onClear={() => {}}
        />

        {/* Сценарий 1: disabled → замок (заменяет всё) */}
        <TextField
          {...args}
          label="Disabled — замок вместо крестика и contentRight"
          value="Заблокировано"
          disabled
          contentRight={<IconCalendarOutline size="s" />}
          onClear={() => {}}
        />

        {/* Сценарий 4: только contentRight, без onClear */}
        <TextField
          {...args}
          label="Только contentRight, без onClear"
          value={value4}
          contentRight={<IconCalendarOutline size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue4(e.target.value)
          }
        />
      </div>
    );
  }
};
