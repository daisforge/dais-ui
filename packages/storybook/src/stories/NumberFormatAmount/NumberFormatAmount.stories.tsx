/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { NumberFormatAmount } from '@ui-kit/components/NumberFormatAmount';
import { IconSb } from '@ui-kit/icons';
import type { ComponentProps } from 'react';
import React, { useState } from 'react';

type NumberFormatAmountProps = ComponentProps<typeof NumberFormatAmount>;

const meta: Meta<NumberFormatAmountProps> = {
  title: 'Локальные компоненты/NumberFormatAmount',
  component: NumberFormatAmount,
  parameters: {
    docs: {
      toc: true
    }
  },
  tags: ['!autodocs'],
  args: {
    size: 's',
    placeholder: 'Сумма',
    disabled: false,
    readOnly: false,
    thousandSeparator: ' ',
    decimalSeparator: '.',
    decimalScale: 2
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

type Story = StoryObj<NumberFormatAmountProps>;

const preCode = `
import { NumberFormatAmount } from '@dais-ui/ui-kit';
`;

/**
 * ### Базовый NumberFormatAmount
 *
 * Поле ввода суммы с жирным шрифтом и опциональной кнопкой очистки.
 */
export const Default: Story = {
  name: 'Default',
  ...storySourceDoc({
    preCode
  }),
  render: (args: NumberFormatAmountProps) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ padding: '20px', width: '500px' }}>
        <NumberFormatAmount
          {...args}
          value={value}
          onChange={(e) => setValue(e?.target?.value ?? '')}
          onClear={() => setValue('')}
        />
      </div>
    );
  }
};

/**
 * ### Все размеры
 */
export const Sizes: Story = {
  name: 'Размеры',
  ...storySourceDoc({
    preCode
  }),
  render: (args: NumberFormatAmountProps) => {
    const sizes = ['s', 'xs'] as const;
    const [values, setValues] = useState<Record<string, string>>({
      s: '123456.78',
      xs: '123456.78'
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
          <NumberFormatAmount
            {...args}
            key={size}
            size={size}
            placeholder={`Size: ${size}`}
            value={values[size]}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                [size]: e?.target?.value ?? ''
              }))
            }
            onClear={() => setValues((prev) => ({ ...prev, [size]: '' }))}
          />
        ))}
      </div>
    );
  }
};

/**
 * ### С кнопкой очистки (onClear) и contentRight
 *
 * При передаче `onClear` автоматически появляется крестик, если поле содержит значение.
 * Если одновременно передан `contentRight`, он отображается правее крестика.
 */
export const WithClear: Story = {
  name: 'Различные варианты',
  ...storySourceDoc({
    preCode
  }),
  render: (args: NumberFormatAmountProps) => {
    const [value1, setValue1] = useState('123456.78');
    const [value2, setValue2] = useState('999.99');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('500');

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
        <NumberFormatAmount
          {...args}
          placeholder="onClear + value → крестик"
          value={value1}
          onChange={(e) => setValue1(e?.target?.value ?? '')}
          onClear={() => setValue1('')}
        />

        <NumberFormatAmount
          {...args}
          placeholder="onClear + value + contentRight → рядом"
          value={value2}
          contentRight={<IconSb size="s" />}
          onChange={(e) => setValue2(e?.target?.value ?? '')}
          onClear={() => setValue2('')}
        />

        <NumberFormatAmount
          {...args}
          placeholder="Пустое значение — крестик скрыт"
          value={value3}
          contentRight={<IconSb size="s" />}
          onChange={(e) => setValue3(e?.target?.value ?? '')}
          onClear={() => setValue3('')}
        />

        <NumberFormatAmount
          {...args}
          placeholder="ReadOnly — замок"
          value="1000"
          readOnly
          contentRight={<IconSb size="s" />}
          onClear={() => {}}
        />

        <NumberFormatAmount
          {...args}
          placeholder="Disabled — замок"
          value="1000"
          disabled
          contentRight={<IconSb size="s" />}
          onClear={() => {}}
        />

        <NumberFormatAmount
          {...args}
          placeholder="Только contentRight, без onClear"
          value={value4}
          contentRight={<IconSb size="s" />}
          onChange={(e) => setValue4(e?.target?.value ?? '')}
        />
      </div>
    );
  }
};
