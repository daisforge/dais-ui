import type { Meta, StoryObj } from '@storybook/react';
import { ApprovalCenter } from '@ui-kit/components/ApprovalCenter';
import type {
  ApprovalCenterProps,
  HistoryItem,
  LifeCycleItem
} from '@ui-kit/components/ApprovalCenter/ApprovalCenter.types';
import {
  IconFileTextOutline,
  IconLink,
  IconPlus,
  IconStarFill
} from '@ui-kit/icons';
import { textAccent, textPrimary } from '@ui-kit/tokens';

const meta: Meta<ApprovalCenterProps> = {
  title: 'Локальные компоненты/ApprovalCenter',
  component: ApprovalCenter,
  tags: ['!autodocs']
};

export default meta;

type Story = StoryObj<ApprovalCenterProps>;

/**
 * Вариант с превью
 */
export const Preview: Story = {
  args: {
    tabs: {
      active: 'LIFE_CYCLE',
      available: ['LIFE_CYCLE', 'HISTORY']
    },
    preview: {
      button: {
        onClick: () => {},
        text: 'Показать жизненный цикл'
      },
      loading: false
    }
  },
  name: 'Preview'
};

/**
 * Вариант с загружающимся превью
 */
export const LoadingPreview: Story = {
  args: {
    tabs: {
      active: 'LIFE_CYCLE',
      available: ['LIFE_CYCLE', 'HISTORY']
    },
    preview: {
      button: {
        onClick: () => {},
        text: 'Показать жизненный цикл'
      },
      loading: true
    }
  },
  name: 'Loading preview'
};

const lifeCycle: LifeCycleItem[] = [
  {
    status: 'SUCCESSFUL',
    title: 'Черновик',
    stages: [
      {
        status: 'SUCCESSFUL',
        title: 'Этап 1',
        assignee: ['Иванов Иван'],
        open: true,
        comment:
          'Задача поставлена чётко, требования понятны. Предлагаю начать с анализа исходных данных и разработки плана действий. Если есть дополнительные пожелания или уточнения — сообщите',
        actionTitle: 'Отозвано: 01.01.2024 12:00',
        tooltip: { text: 'Согласовано 01.01.2024 12:00' },
        mark: {
          tooltip: { text: 'Согласовано 01.01.2024 12:00' },
          icon: <IconStarFill color={textAccent} size="xs" />
        },
        buttons: [
          {
            contentLeft: <IconFileTextOutline size="xs" color={textPrimary} />,
            text: 'Файлы (2)',
            onClick: () => {}
          },
          {
            contentLeft: <IconLink size="xs" color={textPrimary} />,
            text: 'Ссылки (2)',
            onClick: () => {}
          }
        ]
      },
      {
        status: 'SUCCESSFUL',
        title: 'Этап 2',
        assignee: ['Петров Петр', 'Сидоров Сидор'],
        open: false
      }
    ],
    buttons: [
      {
        contentLeft: <IconPlus size="xs" />,
        text: 'Добавить',
        onClick: () => {}
      },
      {
        contentLeft: <IconPlus size="xs" />,
        text: 'Добавить',
        onClick: () => {}
      }
    ]
  },
  {
    status: 'WAIT',
    title: 'Подготовка документов',
    stages: [
      {
        status: 'WAIT',
        title: 'Этап 3',
        assignee: ['Семенов Семен'],
        open: false
      }
    ]
  },
  {
    status: 'DEFAULT',
    title: 'На согласовании',
    stages: [
      {
        status: 'DEFAULT',
        title: 'Этап 3',
        assignee: ['Семенов Семен'],
        open: false
      }
    ]
  },
  {
    status: 'DEFAULT',
    title: 'Готово в бюджет',
    actionTitle: 'В ожидании',
    buttons: [
      {
        contentLeft: <IconPlus size="xs" />,
        text: 'Добавить',
        onClick: () => {}
      },
      {
        contentLeft: <IconPlus size="xs" />,
        text: 'Добавить',
        onClick: () => {}
      }
    ]
  }
];

const history: HistoryItem[] = [
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Иван Петров согласовал заявку',
    actionDate: '2026-06-30T09:12:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Анна Смирнова прикрепила файл «Договор.pdf»',
    actionDate: '2026-06-30T09:47:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle:
      'Сергей Кузнецов оставил комментарий «Прошу проверить сумму договора»',
    actionDate: '2026-06-30T11:23:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Мария Иванова отправила документ на согласование',
    actionDate: '2026-06-30T14:18:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Алексей Волков согласовал этап «Юридическая проверка»',
    actionDate: '2026-06-30T16:41:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle:
      'Елена Соколова загрузила файл «Коммерческое предложение.docx»',
    actionDate: '2026-06-29T09:05:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle:
      'Дмитрий Орлов добавил комментарий «Исправлены замечания по документу»',
    actionDate: '2026-06-29T10:54:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Ольга Морозова отклонила согласование с комментарием',
    actionDate: '2026-06-29T13:37:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Иван Петров повторно отправил документ на согласование',
    actionDate: '2026-06-29T15:12:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Анна Смирнова согласовала документ',
    actionDate: '2026-06-29T17:26:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Сергей Кузнецов прикрепил файл «Смета.xlsx»',
    actionDate: '2026-06-28T08:44:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle:
      'Мария Иванова добавила комментарий «Необходимо обновить реквизиты»',
    actionDate: '2026-06-28T10:16:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Алексей Волков согласовал финансовую часть заявки',
    actionDate: '2026-06-28T11:59:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Елена Соколова прикрепила файл «Приложение №1.pdf»',
    actionDate: '2026-06-28T14:31:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Дмитрий Орлов отправил документ на повторное согласование',
    actionDate: '2026-06-28T17:08:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Ольга Морозова согласовала изменения',
    actionDate: '2026-06-27T09:21:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Иван Петров добавил комментарий «Все замечания устранены»',
    actionDate: '2026-06-27T10:48:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Анна Смирнова прикрепила файл «Акт выполненных работ.pdf»',
    actionDate: '2026-06-27T13:12:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Сергей Кузнецов согласовал документ без замечаний',
    actionDate: '2026-06-27T15:56:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Мария Иванова загрузила новую версию документа',
    actionDate: '2026-06-27T17:42:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle:
      'Алексей Волков оставил комментарий «Необходимо уточнить сроки исполнения»',
    actionDate: '2026-06-26T08:57:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Елена Соколова согласовала этап «Финансовый контроль»',
    actionDate: '2026-06-26T10:35:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Дмитрий Орлов прикрепил файл «Протокол согласования.pdf»',
    actionDate: '2026-06-26T12:28:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle:
      'Ольга Морозова добавила комментарий «Прошу проверить приложение»',
    actionDate: '2026-06-26T14:49:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Иван Петров согласовал окончательную редакцию документа',
    actionDate: '2026-06-26T17:14:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Анна Смирнова прикрепила файл «Спецификация.xlsx»',
    actionDate: '2026-06-25T09:33:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle:
      'Сергей Кузнецов отправил документ на согласование руководителю',
    actionDate: '2026-06-25T11:18:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle:
      'Мария Иванова добавила комментарий «Исправлена сумма по договору»',
    actionDate: '2026-06-25T13:52:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Алексей Волков согласовал заявку',
    actionDate: '2026-06-25T15:37:00.000Z'
  },
  {
    status: 'SUCCESSFUL',
    actionTitle: 'Елена Соколова прикрепила файл «Заключение экспертизы.pdf»',
    actionDate: '2026-06-25T17:11:00.000Z'
  }
];

/**
 * Вариант со вкладками
 */
export const WithTabs: Story = {
  args: {
    tabs: {
      active: 'LIFE_CYCLE',
      available: ['LIFE_CYCLE', 'HISTORY']
    },
    lifeCycle,
    history
  },
  name: 'With tabs'
};

/**
 * Вариант без вкладок
 */
export const WithoutTabs: Story = {
  args: {
    tabs: {
      active: 'LIFE_CYCLE',
      available: ['LIFE_CYCLE']
    },
    lifeCycle,
    history
  },
  name: 'Without tabs'
};

export const WithScroll: Story = {
  args: {
    tabs: {
      active: 'LIFE_CYCLE',
      available: ['LIFE_CYCLE', 'HISTORY']
    },
    lifeCycle,
    history
  },
  decorators: [
    (Story) => (
      <div style={{ height: 400, width: 400 }}>
        <Story />
      </div>
    )
  ],
  name: 'With scroll'
};
