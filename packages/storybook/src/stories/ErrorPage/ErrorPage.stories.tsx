import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage, ErrorPageProps } from '@ui-kit/layouts/ErrorPage';
import React from 'react';

const meta: Meta<ErrorPageProps> = {
  title: 'Композиции/ErrorPage-Страницы ошибок',
  tags: ['!autodocs'],
  excludeStories: ['CANVAS'],
  component: ErrorPage,
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['s', 'm', 'l'],
      description: 'Размерная сетка (по умолчанию l)'
    }
  }
};

export default meta;

type Story = StoryObj<ErrorPageProps>;

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const Default: Story = {
  name: '400',
  args: {
    statusCode: 400
  },
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S401: Story = {
  name: '401',
  args: {
    statusCode: 401
  },
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};
/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S403: Story = {
  args: {
    statusCode: 403
  },
  name: '403',
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S403WithTwoButtons: Story = {
  args: {
    statusCode: 403,
    customStatuses: {
      403: {
        title: 'Доступ к странице ограничен',
        description:
          'Вы можете запросить право доступа в Друге или вернуться на главную страницу',
        buttons: [
          // Используем buttons вместо button
          {
            label: 'Запросить доступ',
            view: 'secondary'
          },
          {
            label: 'Вернуться назад',
            view: 'accent'
          }
        ]
      }
    },
    buttonHandler: (statusCode, statusObj, e) => {
      const buttonText = e.currentTarget.textContent;
      // eslint-disable-next-line no-alert
      alert(
        `Нажата кнопка "${buttonText}" для статуса ${statusCode} info ${statusObj}`
      );
    }
  },
  name: '403 - Две кнопки',
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S404: Story = {
  args: {
    statusCode: 404
  },
  name: '404',

  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S409: Story = {
  args: {
    statusCode: 409
  },
  name: '409',

  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};
/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S500: Story = {
  args: {
    statusCode: 500
  },
  name: '500',

  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};
/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S502: Story = {
  args: {
    statusCode: 502
  },
  name: '502',

  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};
/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S503: Story = {
  args: {
    statusCode: 503
  },
  name: '503',

  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

/**
 * ##### 503 с кодом ошибки в заголовке
 *
 * Пример с `showStatusCode` и кастомным текстом для 503.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const S503WithStatusCode: Story = {
  args: {
    statusCode: 503,
    showStatusCode: true,
    customStatuses: {
      503: {
        title: (
          <>
            Сервис временно недоступен.
            <br />
            Попробуйте зайти позже
          </>
        ),
        description: 'Обновите страницу или зайдите позже'
      }
    }
  },
  name: '503 - с кодом ошибки',
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};
/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const SUnknown: Story = {
  args: {
    statusCode: 'unknown'
  },
  name: 'Неизвестная ошибка - заполнение по умолчанию',

  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};
/**
 * #### Описание неизвестной ошибки.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const UnknownError: Story = {
  args: {
    unknownStatus: {
      title: 'Unknown Error',
      description: 'Unknown Error description'
    }
  },
  name: 'Неизвестная ошибка - кастомное заполнение',

  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

/**
 * #### В дополнение к существующим статусам можно добавлять свои статусы
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const CustomError: Story = {
  args: {
    customStatuses: {
      501: {
        title: 'Метод запроса не поддерживается сервером',
        description:
          'Метод запроса не поддерживается сервером и поэтому он не может быть обработан.',
        button: { label: 'На главную' }
      },
      405: {
        title: 'Метод запроса известен серверу',
        description:
          'Метод запроса известен серверу, но не поддерживается целевым ресурсом. Например, API может не разрешать вызов DELETE для удаления ресурса.'
      }
    }
  },
  name: 'Дополнительные статусы и их заполнение',

  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

export const WithErrorId: Story = {
  args: {
    statusCode: 500,
    errorId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
  },
  name: '500 - с идентификатором ошибки',
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

export const WithErrorIdNoButtons: Story = {
  args: {
    statusCode: 503,
    errorId: 'err-timeout-xyz-9876'
  },
  name: '503 - идентификатор без кнопок',
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

/**
 * #### Размер `m`
 *
 * По умолчанию `size` = `l`. Компонент поддерживает также `m` и `s` —
 * размерная сетка та же, что у `EmptyState`, меняется изображение ошибки.
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const SizeM: Story = {
  args: {
    statusCode: 404,
    size: 'm'
  },
  name: 'Размер m',
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};

/**
 * #### Размер `s`
 *
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const SizeS: Story = {
  args: {
    statusCode: 404,
    size: 's'
  },
  name: 'Размер s',
  render: (args) => (
    <ErrorPage {...args} containerProps={{ $css: { minHeight: 600 } }} />
  )
};
