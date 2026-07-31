/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '@ui-kit/components/Combobox';
import { TooltipList } from '@ui-kit/components/Tooltip';
import { Typography } from '@ui-kit/components/Typography';
import { useState } from 'react';

const meta: Meta<typeof TooltipList> = {
  title: 'Локальные компоненты/TooltipList',
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<typeof TooltipList>;

export const WithCombobox: Story = {
  render: () => {
    const mockOptions = [
      { label: 'Блок 1', value: '1' },
      { label: 'Блок 2', value: '2' },
      { label: 'Блок 3', value: '3' },
      { label: 'Блок 4', value: '4' },
      { label: 'Блок 5', value: '5' },
    ];

    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const selectedLabels = selectedValues
      .map((value) => mockOptions.find((opt) => opt.value === value)?.label)
      .filter((label): label is string => Boolean(label));

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          maxWidth: 300,
        }}
      >
        <Typography variant="BodyM" bold>
          Пример с выпадающим списком
        </Typography>

        <TooltipList
          groupLabel="Выбранные блоки"
          items={selectedLabels}
          trigger={selectedValues.length > 0 ? 'hover' : 'none'}
        >
          <Combobox
            size="s"
            multiple
            value={selectedValues}
            onChange={setSelectedValues}
            items={mockOptions}
            placeholder="Выберите блоки"
            style={{ width: '100%' }}
          />
        </TooltipList>

        <Typography variant="BodyM" bold>
          Как это работает
        </Typography>
        <ul
          style={{
            marginTop: 0,
          }}
        >
          <li>
            <Typography variant="BodyS">
              Выберите несколько элементов в Combobox
            </Typography>
          </li>
          <li>
            <Typography variant="BodyS">
              Наведите на поле ввода - увидите Tooltip с выбранными значениями
            </Typography>
          </li>
          <li>
            <Typography variant="BodyS">
              Если ничего не выбрано - Tooltip не показывается
            </Typography>
          </li>
        </ul>
      </div>
    );
  },
};
