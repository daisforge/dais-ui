import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ChartsReportDemo } from './ChartsReportDemo';
import { SAMPLE_FILES } from './data/sampleFiles';

const meta: Meta<typeof ChartsReportDemo> = {
  title: 'AI-демо/Отчёты с графиками',
  component: ChartsReportDemo,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    screenshot: {
      skip: true,
      skipReason:
        'Демо-прототип, а не компонент библиотеки: ответы агента появляются по таймерам, кадр недетерминирован',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChartsReportDemo>;

/** Свободный режим: свой CSV или пример, запросы словами */
export const Demo: Story = {
  name: 'Демо',
  render: () => <ChartsReportDemo />,
};

/** Сценарий для показа: сообщения отправляются сами, как будто их печатает человек */
export const Autoplay: Story = {
  name: 'Автосценарий',
  render: () => (
    <ChartsReportDemo
      script={[
        `Взять пример: ${SAMPLE_FILES[0]?.title}`,
        ...(SAMPLE_FILES[0]?.prompts ?? []),
      ]}
    />
  ),
};
