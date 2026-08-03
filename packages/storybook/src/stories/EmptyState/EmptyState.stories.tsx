import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '@ui-kit/components/EmptyState';
import type { EmptyStateProps } from '@ui-kit/components/EmptyState/EmptyState.types';

const meta: Meta<EmptyStateProps> = {
  title: 'Композиции/EmptyState',
  component: EmptyState,
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<EmptyStateProps>;

/**
 * Компактный вариант (без иконки)
 */
export const SizeS: Story = {
  args: {
    size: 's',
    title: 'Ничего не нашлось',
    subtitle: 'Попробуйте изменить или сбросить фильтры',
    variant: 'no-content',
    buttons: [
      {
        type: 'link',
        props: {
          text: 'Сбросить фильтры',
          view: 'accent',
        },
      },
    ],
  },
  name: 'Small (s)',
};

/**
 * Стандартный вариант с иконкой
 */
export const SizeM: Story = {
  args: {
    size: 'm',
    title: 'Ничего не нашлось',
    subtitle: 'Попробуйте изменить параметры поиска',
    variant: 'not-found',
    buttons: [
      {
        type: 'button',
        props: {
          text: 'Сбросить фильтры',
          view: 'secondary', // Кнопка secondary
        },
      },
    ],
  },
  name: 'Medium (m)',
};

/**
 * Расширенный вариант с несколькими действиями
 */
export const SizeL: Story = {
  args: {
    size: 'l',
    title: 'Отчётов пока нет',
    variant: 'no-content',
    subtitle: 'Здесь вы можете создавать отчёты и работать над ними   ',
    buttons: [
      {
        type: 'button',
        props: {
          text: 'Обновить',
          view: 'secondary', // Первая кнопка secondary
        },
      },
      {
        type: 'button',
        props: {
          text: 'Создать отчёт',
          view: 'accent', // Вторая кнопка accent
        },
      },
    ],
    extraButton: {
      type: 'link',
      props: {
        text: 'Справка',
        view: 'default',
      },
    },
  },
  name: 'Large (l)',
};
