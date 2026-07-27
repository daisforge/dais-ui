/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '@ui-kit/components/TextArea';
import { IconSb } from '@ui-kit/icons';
import type { ComponentProps } from 'react';
import React, { ChangeEvent, useState } from 'react';

type TextAreaProps = ComponentProps<typeof TextArea>;

const meta: Meta<TextAreaProps> = {
  title: 'Локальные компоненты/TextArea',
  component: TextArea,
  tags: ['!autodocs'],
  args: {
    size: 's',
    view: 'default',
    label: 'Лейбл',
    labelPlacement: 'outer',
    placeholder: 'Заполните поле',
    leftHelper: 'Подсказка к полю',
    disabled: false,
    readOnly: false
  },
  argTypes: {
    size: {
      options: ['s'],
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
    }
  }
};

export default meta;

type Story = StoryObj<TextAreaProps>;

const preCode = `
import { TextArea } from '@daisforge/ui';
`;

/**
 * ### Базовый TextArea
 *
 * Обёртка над `TextArea` из `@salutejs/sdds-finai`.
 *
 * При `disabled` или `readOnly` автоматически отображается иконка замка справа.
 */
export const Default: Story = {
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextAreaProps) => {
    const [value, setValue] = useState('Значение поля');

    return (
      <div style={{ width: '400px' }}>
        <TextArea
          {...args}
          value={value}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setValue(e.target.value)
          }
        />
      </div>
    );
  }
};

/**
 * ### Все размеры
 *
 * Демонстрация TextArea во всех доступных размерах: `l`, `m`, `s`, `xs`.
 */
export const Sizes: Story = {
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: TextAreaProps) => {
    const sizes = ['s'] as const;
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
          <TextArea
            {...args}
            key={size}
            size={size}
            label={`Size: ${size}`}
            placeholder="Заполните поле"
            value={values[size]}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
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
  render: (args: TextAreaProps) => {
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
        <TextArea
          {...args}
          label="onClear + value → крестик"
          value={value1}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setValue1(e.target.value)
          }
          onClear={() => setValue1('')}
        />

        <TextArea
          {...args}
          label="onClear + value + contentRight → рядом"
          value={value2}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setValue2(e.target.value)
          }
          onClear={() => setValue2('')}
        />

        <TextArea
          {...args}
          label="Пустое значение — крестик скрыт"
          value={value3}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setValue3(e.target.value)
          }
          onClear={() => setValue3('')}
        />

        <TextArea
          {...args}
          label="ReadOnly — замок вместо крестика и contentRight"
          value="Только для чтения"
          readOnly
          contentRight={<IconSb size="s" />}
          onClear={() => {}}
        />

        <TextArea
          {...args}
          label="Disabled — замок вместо крестика и contentRight"
          value="Заблокировано"
          disabled
          contentRight={<IconSb size="s" />}
          onClear={() => {}}
        />

        <TextArea
          {...args}
          label="Только contentRight, без onClear"
          value={value4}
          contentRight={<IconSb size="s" />}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setValue4(e.target.value)
          }
        />
      </div>
    );
  }
};
