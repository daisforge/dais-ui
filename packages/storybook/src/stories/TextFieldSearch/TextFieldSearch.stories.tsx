/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { IconSb } from '@ui-kit/icons';
import type { ComponentProps } from 'react';
import React, { ChangeEvent, useState } from 'react';

type TextFieldSearchProps = ComponentProps<typeof TextFieldSearch>;

const meta: Meta<TextFieldSearchProps> = {
  title: 'Локальные компоненты/TextFieldSearch',
  component: TextFieldSearch,
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

type Story = StoryObj<TextFieldSearchProps>;

const preCode = `
import { TextFieldSearch } from '@daisforge/ui';
`;

/**
 * ### Базовый TextFieldSearch
 *
 * Поле поиска с иконкой лупы слева и крестиком очистки справа.
 */
export const Default: Story = {
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldSearchProps) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: '20px', width: '500px' }}>
        <TextFieldSearch
          {...args}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onClear={() => setValue('')}
        />
      </div>
    );
  }
};

/**
 * ### Все размеры
 *
 * Демонстрация TextFieldSearch в доступных размерах: `s`, `xs`.
 */
export const Sizes: Story = {
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextFieldSearchProps) => {
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
          width: '500px'
        }}
      >
        {sizes.map((size) => (
          <TextFieldSearch
            {...args}
            key={size}
            size={size}
            placeholder={`Size: ${size}`}
            value={values[size]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValues((prev) => ({ ...prev, [size]: e.target.value }))
            }
            onClear={() => setValues((prev) => ({ ...prev, [size]: '' }))}
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
  render: (args: TextFieldSearchProps) => {
    const [value1, setValue1] = useState('Поисковый запрос');
    const [value2, setValue2] = useState('С иконкой');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('Текст');

    return (
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '500px'
        }}
      >
        <TextFieldSearch
          {...args}
          placeholder="onClear + value → крестик"
          value={value1}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue1(e.target.value)
          }
          onClear={() => setValue1('')}
        />

        <TextFieldSearch
          {...args}
          placeholder="onClear + value + contentRight → рядом"
          value={value2}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue2(e.target.value)
          }
          onClear={() => setValue2('')}
        />

        <TextFieldSearch
          {...args}
          placeholder="Пустое значение — крестик скрыт"
          value={value3}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue3(e.target.value)
          }
          onClear={() => setValue3('')}
        />

        <TextFieldSearch
          {...args}
          placeholder="ReadOnly — замок"
          value="Только для чтения"
          readOnly
          contentRight={<IconSb size="s" />}
          onClear={() => {}}
        />

        <TextFieldSearch
          {...args}
          placeholder="Disabled — замок"
          value="Заблокировано"
          disabled
          contentRight={<IconSb size="s" />}
          onClear={() => {}}
        />

        <TextFieldSearch
          {...args}
          placeholder="Только contentRight, без onClear"
          value={value4}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue4(e.target.value)
          }
        />
      </div>
    );
  }
};
