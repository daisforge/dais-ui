/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { TypographyWithAutoTooltip } from '@ui-kit/components/Typography';
import { TypographyVariant } from '@ui-kit/components/Typography/Typography';
import { useState } from 'react';

const meta: Meta<typeof TypographyWithAutoTooltip> = {
  title: 'Локальные компоненты/TypographyWithAutoTooltip',
  component: TypographyWithAutoTooltip,
  tags: ['!autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'DsplL',
        'DsplM',
        'DsplS',
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'BodyL',
        'BodyM',
        'BodyS',
        'BodyXS',
        'BodyXXS',
        'TextL',
        'TextM',
        'TextS',
        'TextXS'
      ] satisfies TypographyVariant[]
    },
    bold: { control: 'boolean' },
    lines: { control: { type: 'number', min: 1, max: 5, step: 1 } }
  },
  args: {
    variant: 'BodyM',
    bold: false,
    lines: 1,
    tooltipText: 'Это всплывающая подсказка для обрезанного текста',
    children:
      'Очень длинный текст, который не помещается в отведённую ширину и будет обрезан с многоточием'
  }
};

export default meta;
type Story = StoryObj<typeof TypographyWithAutoTooltip>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '200px' }}>
      <TypographyWithAutoTooltip {...args} />
    </div>
  )
};

export const InteractiveDemo: Story = {
  render: (args) => {
    const [width, setWidth] = useState(200);
    const [lines, setLines] = useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            maxWidth: '400px'
          }}
        >
          <label htmlFor="widthRange">Ширина контейнера: {width}px </label>
          <input
            id="widthRange"
            type="range"
            min="100"
            max="500"
            step="10"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            style={{ width: '100%' }}
          />

          <label htmlFor="linesRange">Макс. количество строк: {lines}</label>
          <input
            id="linesRange"
            type="range"
            min="1"
            max="10"
            step="1"
            value={lines}
            onChange={(e) => setLines(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
        <div
          style={{
            width: `${width}px`,
            border: '1px dashed #ccc',
            padding: 8
          }}
        >
          <TypographyWithAutoTooltip {...args} lines={lines}>
            Этот текст будет обрезаться в зависимости от выбранной ширины
            контейнера и количества строк. Наведите курсор на текст, чтобы
            увидеть подсказку, если текст обрезан
          </TypographyWithAutoTooltip>
        </div>
      </div>
    );
  }
};
