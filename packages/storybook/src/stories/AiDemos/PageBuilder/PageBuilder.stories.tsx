import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { PageBuilderDemo } from './PageBuilderDemo';

const meta: Meta<typeof PageBuilderDemo> = {
  title: 'AI-демо/Конструктор страниц',
  component: PageBuilderDemo,
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

type Story = StoryObj<typeof PageBuilderDemo>;

/** Свободный режим: запросы словами, клик по элементу, палитра и панель свойств */
export const Demo: Story = {
  name: 'Демо',
  render: () => <PageBuilderDemo />,
};

/** Сценарий для показа: реестр, правки и автоисправления по гайдам */
export const Autoplay: Story = {
  name: 'Автосценарий',
  render: () => (
    <PageBuilderDemo
      script={[
        'Собери реестр платежей с фильтрами по дате и статусу',
        'Добавь кнопку «Импорт»',
        'Добавь кнопку «Синхронизировать»',
        'Добавь кнопку «Удалить»',
        'Добавь колонку «Комментарий»',
        'Собери новую страницу: форма создания заявки',
        'Добавь поле «Код проекта»',
      ]}
    />
  ),
};
