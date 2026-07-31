/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '@ui-kit/components/Autocomplete';
import { IconCalendarOutline } from '@ui-kit/icons';
import type { ComponentProps } from 'react';
import React, { ChangeEvent, useState } from 'react';

type AutocompleteProps = ComponentProps<typeof Autocomplete>;

const mockData = [
  { label: 'Алексей Смирнов' },
  { label: 'Екатерина Иванова' },
  { label: 'Дмитрий Петров' },
  { label: 'Ольга Васильева' },
  { label: 'Сергей Сидоров' },
  { label: 'Мария Кузнецова' },
  { label: 'Андрей Попов' },
  { label: 'Анна Николаева' },
];

const meta: Meta<AutocompleteProps> = {
  title: 'Локальные компоненты/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: {
      toc: true,
    },
  },
  tags: ['!autodocs'],
  args: {
    size: 's',
    view: 'default',
    label: 'Лейбл',
    labelPlacement: 'outer',
    placeholder: 'Начните вводить',
    leftHelper: 'Подсказка к полю',
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    size: {
      options: ['s', 'xs'],
      control: { type: 'select' },
    },
    view: {
      options: ['default', 'positive', 'warning', 'negative'],
      control: { type: 'select' },
    },
    labelPlacement: {
      options: ['outer', 'inner'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<AutocompleteProps>;

const preCode = `
import { Autocomplete } from '@daisforge/ui';
`;

/**
 * ### Базовый Autocomplete
 *
 * Обёртка над `Autocomplete` из `@salutejs/sdds-finai`.
 *
 * При `disabled` или `readOnly` автоматически отображается иконка замка справа.
 */
export const Default: Story = {
  name: 'Default',
  ...storySourceDoc({
    preCode,
  }),
  render: (args: AutocompleteProps) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '400px', minHeight: '300px' }}>
        <Autocomplete
          {...args}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onSuggestionSelect={(item) => setValue(item.label)}
          suggestions={mockData}
        />
      </div>
    );
  },
};

/**
 * ### Все размеры
 *
 * Демонстрация Autocomplete во всех доступных размерах: `l`, `m`, `s`, `xs`.
 */
export const Sizes: Story = {
  name: 'Размеры',
  ...storySourceDoc({
    preCode,
  }),
  render: (args: AutocompleteProps) => {
    const sizes = ['s', 'xs'] as const;
    const [values, setValues] = useState<Record<string, string>>({
      l: '',
      m: '',
      s: '',
      xs: '',
    });

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '400px',
          minHeight: '300px',
        }}
      >
        {sizes.map((size) => (
          <Autocomplete
            {...args}
            key={size}
            size={size}
            label={`Size: ${size}`}
            placeholder="Начните вводить"
            value={values[size]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValues((prev) => ({ ...prev, [size]: e.target.value }))
            }
            onSuggestionSelect={(item) =>
              setValues((prev) => ({ ...prev, [size]: item.label }))
            }
            suggestions={mockData}
          />
        ))}
      </div>
    );
  },
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
    preCode,
  }),
  render: (args: AutocompleteProps) => {
    const [value1, setValue1] = useState('Алексей');
    const [value2, setValue2] = useState('Екатерина');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('Дмитрий');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '400px',
          minHeight: '300px',
        }}
      >
        {/* Сценарий 3: onClear + value → только крестик */}
        <Autocomplete
          {...args}
          label="onClear + value → крестик"
          value={value1}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue1(e.target.value)
          }
          onSuggestionSelect={(item) => setValue1(item.label)}
          onClear={() => setValue1('')}
          suggestions={mockData}
        />

        {/* Сценарий 2: onClear + value + contentRight → [крестик | иконка] рядом */}
        <Autocomplete
          {...args}
          label="onClear + value + contentRight → рядом"
          value={value2}
          contentRight={<IconCalendarOutline size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue2(e.target.value)
          }
          onSuggestionSelect={(item) => setValue2(item.label)}
          onClear={() => setValue2('')}
          suggestions={mockData}
        />

        {/* Сценарий 4: onClear без value → крестик скрыт, contentRight как есть */}
        <Autocomplete
          {...args}
          label="Пустое значение — крестик скрыт"
          value={value3}
          contentRight={<IconCalendarOutline size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue3(e.target.value)
          }
          onSuggestionSelect={(item) => setValue3(item.label)}
          onClear={() => setValue3('')}
          suggestions={mockData}
        />

        {/* Сценарий 1: readOnly → замок (заменяет всё) */}
        <Autocomplete
          {...args}
          label="ReadOnly — замок вместо крестика и contentRight"
          value="Только для чтения"
          readOnly
          contentRight={<IconCalendarOutline size="s" />}
          onClear={() => {}}
          suggestions={mockData}
        />

        {/* Сценарий 1: disabled → замок (заменяет всё) */}
        <Autocomplete
          {...args}
          label="Disabled — замок вместо крестика и contentRight"
          value="Заблокировано"
          disabled
          contentRight={<IconCalendarOutline size="s" />}
          onClear={() => {}}
          suggestions={mockData}
        />

        {/* Сценарий 4: только contentRight, без onClear */}
        <Autocomplete
          {...args}
          label="Только contentRight, без onClear"
          value={value4}
          contentRight={<IconCalendarOutline size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue4(e.target.value)
          }
          onSuggestionSelect={(item) => setValue4(item.label)}
          suggestions={mockData}
        />
      </div>
    );
  },
};
