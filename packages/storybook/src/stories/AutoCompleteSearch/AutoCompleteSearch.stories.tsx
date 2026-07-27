/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { AutocompleteSearch } from '@ui-kit/components/AutocompleteSearch';
import { IconSb } from '@ui-kit/icons';
import type { ComponentProps } from 'react';
import React, { ChangeEvent, useState } from 'react';

type AutocompleteSearchProps = ComponentProps<typeof AutocompleteSearch>;

const mockData = [
  { label: 'Алексей Смирнов' },
  { label: 'Екатерина Иванова' },
  { label: 'Дмитрий Петров' },
  { label: 'Ольга Васильева' },
  { label: 'Сергей Сидоров' },
  { label: 'Мария Кузнецова' },
  { label: 'Андрей Попов' },
  { label: 'Анна Николаева' },
  { label: 'Иван Федоров' },
  { label: 'Наталья Морозова' }
];

const meta: Meta<AutocompleteSearchProps> = {
  title: 'Локальные компоненты/AutocompleteSearch',
  component: AutocompleteSearch,
  parameters: {
    docs: {
      toc: true
    }
  },
  tags: ['!autodocs'],
  args: {
    size: 's',
    placeholder: 'Поиск',
    disabled: false,
    readOnly: false
  },
  argTypes: {
    size: {
      options: ['s', 'xs'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    readOnly: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;

type Story = StoryObj<AutocompleteSearchProps>;

const preCode = `
import { AutocompleteSearch } from '@daisforge/ui';
`;

/**
 * ### Базовый AutocompleteSearch
 *
 * Поле поиска с автодополнением, иконкой лупы слева и крестиком очистки справа.
 */
export const Default: Story = {
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: AutocompleteSearchProps) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: '20px', minHeight: '500px', width: '500px' }}>
        <AutocompleteSearch
          {...args}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onSuggestionSelect={(item) => setValue(item.label)}
          onClear={() => setValue('')}
          suggestions={mockData}
          beforeListTotal
          beforeListTotalEntity="[сущность]"
        />
      </div>
    );
  }
};

/**
 * ### Все размеры
 *
 * Демонстрация AutocompleteSearch в доступных размерах: `s`, `xs`.
 */
export const Sizes: Story = {
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: AutocompleteSearchProps) => {
    const sizes = ['s', 'xs'] as const;
    const [values, setValues] = useState<Record<string, string>>({
      s: '',
      xs: ''
    });

    return (
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '500px',
          minHeight: '500px'
        }}
      >
        {sizes.map((size) => (
          <AutocompleteSearch
            {...args}
            key={size}
            size={size}
            placeholder={`Size: ${size}`}
            value={values[size]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValues((prev) => ({ ...prev, [size]: e.target.value }))
            }
            onSuggestionSelect={(item) =>
              setValues((prev) => ({ ...prev, [size]: item.label }))
            }
            onClear={() => setValues((prev) => ({ ...prev, [size]: '' }))}
            suggestions={mockData}
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
  render: (args: AutocompleteSearchProps) => {
    const [value1, setValue1] = useState('Алексей');
    const [value2, setValue2] = useState('Екатерина');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('Дмитрий');

    return (
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '500px',
          minHeight: '500px'
        }}
      >
        {/* Сценарий 3: onClear + value → только крестик */}
        <AutocompleteSearch
          {...args}
          placeholder="onClear + value → крестик"
          value={value1}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue1(e.target.value)
          }
          onSuggestionSelect={(item) => setValue1(item.label)}
          onClear={() => setValue1('')}
          suggestions={mockData}
        />

        {/* Сценарий 2: onClear + value + contentRight → [крестик | иконка] рядом */}
        <AutocompleteSearch
          {...args}
          placeholder="onClear + value + contentRight → рядом"
          value={value2}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue2(e.target.value)
          }
          onSuggestionSelect={(item) => setValue2(item.label)}
          onClear={() => setValue2('')}
          suggestions={mockData}
        />

        {/* Сценарий 4: onClear без value → крестик скрыт, contentRight как есть */}
        <AutocompleteSearch
          {...args}
          placeholder="Пустое значение — крестик скрыт"
          value={value3}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue3(e.target.value)
          }
          onSuggestionSelect={(item) => setValue3(item.label)}
          onClear={() => setValue3('')}
          suggestions={mockData}
        />

        {/* Сценарий 1: readOnly → замок (заменяет всё) */}
        <AutocompleteSearch
          {...args}
          placeholder="ReadOnly — замок"
          value="Только для чтения"
          readOnly
          contentRight={<IconSb size="s" />}
          onClear={() => {}}
          suggestions={mockData}
        />

        {/* Сценарий 1: disabled → замок (заменяет всё) */}
        <AutocompleteSearch
          {...args}
          placeholder="Disabled — замок"
          value="Заблокировано"
          disabled
          contentRight={<IconSb size="s" />}
          onClear={() => {}}
          suggestions={mockData}
        />

        {/* Сценарий 4: только contentRight, без onClear */}
        <AutocompleteSearch
          {...args}
          placeholder="Только contentRight, без onClear"
          value={value4}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue4(e.target.value)
          }
          onSuggestionSelect={(item) => setValue4(item.label)}
          suggestions={mockData}
        />
      </div>
    );
  }
};
