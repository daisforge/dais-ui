/* eslint-disable */
/**
 * Сгенерировано build-catalog.mjs из MCP-индекса (1.30.1).
 * Не редактировать вручную: перегенерировать скриптом.
 */
export const MCP_CATALOG = {
  PageLayout: {
    name: 'PageLayout',
    kind: 'composition',
    description:
      'Обёртка страницы: отступ под fixed-шапку, центрирование, адаптивные паддинги',
    importStatement: "import { PageLayout } from '@daisforge/ui';",
    props: [],
  },
  PageTitle: {
    name: 'PageTitle',
    kind: 'composition',
    description:
      'Заголовок страницы с хлебными крошками, кнопкой назад и блоком действий справа',
    importStatement: "import { PageTitle } from '@daisforge/ui';",
    props: [
      {
        name: 'subtitle',
        kind: 'string',
        description: 'Подзаголовок/описание страницы (текст)',
      },
      {
        name: 'showBackButton',
        kind: 'boolean',
        description: 'Показывать ли кнопку со стрелкой назад слева от title',
      },
    ],
  },
  Box: {
    name: 'Box',
    kind: 'standalone',
    description:
      'Базовый div-контейнер с пропсами отступов, размеров и рамки вместо инлайн-стилей',
    importStatement: "import { Box } from '@daisforge/ui';",
    props: [],
  },
  Widget: {
    name: 'Widget',
    kind: 'composition',
    description:
      'Карточка-виджет с шапкой, контентом и футером — для панелей дашборда.',
    importStatement: "import { Widget } from '@daisforge/ui';",
    props: [],
  },
  Typography: {
    name: 'Typography',
    kind: 'wrapper',
    description:
      'Универсальная обёртка над всеми размерами шрифтов SDDS через проп variant.',
    importStatement: "import { Typography } from '@daisforge/ui';",
    props: [
      {
        name: 'variant',
        kind: 'enum',
        options: [
          'BodyL',
          'BodyM',
          'BodyS',
          'BodyXS',
          'BodyXXS',
          'DsplL',
          'DsplM',
          'DsplS',
          'H1',
          'H2',
          'H3',
          'H4',
          'H5',
          'TextL',
          'TextM',
          'TextS',
          'TextXS',
        ],
        description: '',
        required: true,
      },
      {
        name: 'size',
        kind: 'enum',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'l', 'm', 's', 'xs', 'xxs'],
        description: '',
      },
      {
        name: 'bold',
        kind: 'boolean',
        description: 'Полужирное начертание.',
      },
    ],
  },
  Button: {
    name: 'Button',
    kind: 'wrapper',
    description:
      'Стандартная кнопка действия с вариантами размера, цвета, иконкой и состоянием загрузки',
    importStatement: "import { Button } from '@daisforge/ui';",
    props: [
      {
        name: 'text',
        kind: 'string',
        description: '',
      },
      {
        name: 'view',
        kind: 'enum',
        options: [
          'accent',
          'black',
          'clear',
          'dark',
          'default',
          'gradient',
          'negative',
          'positive',
          'secondary',
          'warning',
          'white',
        ],
        description: '',
      },
      {
        name: 'size',
        kind: 'enum',
        options: ['s', 'xs', 'xxs'],
        description: '',
      },
      {
        name: 'stretch',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'outlined',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'disabled',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'stretching',
        kind: 'enum',
        options: ['auto', 'filled', 'fixed'],
        description: '',
      },
    ],
  },
  IconButton: {
    name: 'IconButton',
    kind: 'wrapper',
    description:
      'Кнопка только с иконкой без текста, разных размеров и цветовых вариантов',
    importStatement: "import { IconButton } from '@daisforge/ui';",
    props: [
      {
        name: 'text',
        kind: 'string',
        description: '',
      },
      {
        name: 'view',
        kind: 'enum',
        options: [
          'accent',
          'black',
          'clear',
          'dark',
          'default',
          'gradient',
          'negative',
          'positive',
          'secondary',
          'warning',
          'white',
        ],
        description: '',
      },
      {
        name: 'size',
        kind: 'enum',
        options: ['s', 'xs', 'xxs'],
        description: '',
      },
      {
        name: 'stretch',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'outlined',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'disabled',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'stretching',
        kind: 'enum',
        options: ['auto', 'filled', 'fixed'],
        description: '',
      },
    ],
  },
  TextField: {
    name: 'TextField',
    kind: 'wrapper',
    description: 'Однострочное поле ввода текста с кнопкой очистки значения.',
    importStatement: "import { TextField } from '@daisforge/ui';",
    props: [
      {
        name: 'label',
        kind: 'string',
        description: 'Метка-подпись к элементу',
      },
      {
        name: 'placeholder',
        kind: 'string',
        description:
          'Выводит текст внутри поля формы, который исчезает при получении фокуса',
      },
      {
        name: 'view',
        kind: 'enum',
        options: ['default', 'edited', 'negative', 'positive', 'warning'],
        description: '',
      },
      {
        name: 'size',
        kind: 'enum',
        options: ['s', 'xs'],
        description: '',
        default: "'s'",
      },
      {
        name: 'labelPlacement',
        kind: 'enum',
        options: ['inner', 'outer'],
        description: 'Расположение лейбла.',
      },
      {
        name: 'disabled',
        kind: 'boolean',
        description: 'Компонент неактивен',
      },
      {
        name: 'hasRequiredIndicator',
        kind: 'boolean',
        description: 'Флаг наличия индикатора обязательности поля',
        default: 'false',
      },
      {
        name: 'optional',
        kind: 'boolean',
        description: 'Флаг необязательности поля',
      },
      {
        name: 'optionalText',
        kind: 'string',
        description: 'Подпись для указания необязательности поля',
      },
      {
        name: 'readOnly',
        kind: 'boolean',
        description: 'Элемент формы не может изменяться пользователем',
      },
    ],
  },
  TextArea: {
    name: 'TextArea',
    kind: 'wrapper',
    description: 'Многострочное текстовое поле с кнопкой очистки содержимого.',
    importStatement: "import { TextArea } from '@daisforge/ui';",
    props: [
      {
        name: 'view',
        kind: 'enum',
        options: ['default', 'edited', 'negative', 'positive', 'warning'],
        description: '',
      },
      {
        name: 'size',
        kind: 'enum',
        options: ['s', 'xs'],
        description: '',
        default: "'s'",
      },
      {
        name: 'labelPlacement',
        kind: 'enum',
        options: ['inner', 'outer'],
        description: '',
      },
      {
        name: 'hintText',
        kind: 'string',
        description: '',
      },
      {
        name: 'autoResize',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'hasDivider',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'hasRequiredIndicator',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'helperText',
        kind: 'string',
        description: '',
      },
      {
        name: 'hintHasArrow',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'hintOpened',
        kind: 'boolean',
        description: '',
      },
    ],
  },
  Checkbox: {
    name: 'Checkbox',
    kind: 'wrapper',
    description: 'Флажок для переключения параметра между включено и выключено',
    importStatement: "import { Checkbox } from '@daisforge/ui';",
    props: [
      {
        name: 'placeholder',
        kind: 'string',
        description:
          'Выводит текст внутри поля формы, который исчезает при получении фокуса',
      },
      {
        name: 'view',
        kind: 'enum',
        options: [
          'accent',
          'default',
          'negative',
          'paragraph',
          'positive',
          'secondary',
          'tertiary',
          'warning',
        ],
        description: 'Вид компонента',
      },
      {
        name: 'size',
        kind: 'enum',
        options: ['l', 'm', 's'],
        description: 'Размер компонента',
      },
      {
        name: 'disabled',
        kind: 'boolean',
        description: 'Компонент неактивен',
      },
      {
        name: 'indeterminate',
        kind: 'boolean',
        description:
          'Неопределенное состояние компонента - когда часть потомков не выбрана.',
      },
      {
        name: 'required',
        kind: 'boolean',
        description: 'Флаг обязательности поля',
      },
      {
        name: 'defaultChecked',
        kind: 'boolean',
        description: '',
      },
    ],
  },
  Switch: {
    name: 'Switch',
    kind: 'wrapper',
    description:
      'Тумблер для мгновенного переключения состояния вкл/выкл в интерфейсе.',
    importStatement: "import { Switch } from '@daisforge/ui';",
    props: [
      {
        name: 'size',
        kind: 'enum',
        options: ['l', 'm', 's'],
        description: 'Размер компонента.',
      },
      {
        name: 'description',
        kind: 'string',
        description: 'Дополнительное описание',
      },
      {
        name: 'hasBackground',
        kind: 'boolean',
        description: 'Отображение подложки у switch',
      },
      {
        name: 'labelPosition',
        kind: 'enum',
        options: ['after', 'before'],
        description: 'Расположение подпись',
      },
      {
        name: 'toggleSize',
        kind: 'enum',
        options: ['l', 's'],
        description: 'Размер toggle.',
      },
    ],
  },
  Badge: {
    name: 'Badge',
    kind: 'wrapper',
    description:
      'Небольшая цветная метка со счётчиком или статусом рядом с элементом интерфейса',
    importStatement: "import { Badge } from '@daisforge/ui';",
    props: [
      {
        name: 'text',
        kind: 'string',
        description: 'Текстовая надпись',
      },
      {
        name: 'view',
        kind: 'enum',
        options: [
          'accent',
          'dark',
          'default',
          'light',
          'negative',
          'positive',
          'warning',
        ],
        description: 'Вид Badge',
        default: 'default',
      },
      {
        name: 'size',
        kind: 'enum',
        options: ['l', 'm', 's', 'xs'],
        description: 'Размер Badge',
        default: 'm',
      },
      {
        name: 'pilled',
        kind: 'boolean',
        description: 'Компонент c округлым border-radius',
        default: 'false',
      },
      {
        name: 'clear',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'transparent',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'truncate',
        kind: 'boolean',
        description: '',
      },
    ],
  },
  Note: {
    name: 'Note',
    kind: 'wrapper',
    description:
      'Блок с информационным, предупреждающим или обычным текстовым примечанием',
    importStatement: "import { Note } from '@daisforge/ui';",
    props: [
      {
        name: 'view',
        kind: 'enum',
        options: ['default', 'info', 'negative', 'positive', 'warning'],
        description: '',
      },
      {
        name: 'size',
        kind: 'enum',
        options: ['l', 'm', 's', 'xs'],
        description: '',
      },
      {
        name: 'stretch',
        kind: 'boolean',
        description: '',
      },
      {
        name: 'orientation',
        kind: 'enum',
        options: ['horizontal', 'vertical'],
        description: '',
      },
      {
        name: 'hasClose',
        kind: 'boolean',
        description: '',
      },
    ],
  },
  EmptyState: {
    name: 'EmptyState',
    kind: 'composition',
    description:
      'Экран-заглушка с иллюстрацией, заголовком и кнопками для пустых или ошибочных состояний',
    importStatement: "import { EmptyState } from '@daisforge/ui';",
    props: [
      {
        name: 'size',
        kind: 'enum',
        options: ['l', 'm', 's'],
        description: 'Размер компонента (small, medium, large)',
        required: true,
      },
      {
        name: 'centered',
        kind: 'boolean',
        description: 'Центрировать контент по вертикали и горизонтали',
        default: 'false',
      },
    ],
  },
  TableCanvas: {
    name: 'TableCanvas',
    kind: 'standalone',
    description:
      'Основная канвасная таблица: сортировка, фильтры, группировка, редактирование ячеек.',
    importStatement: "import { TableCanvas } from '@daisforge/ui';",
    props: [],
  },
  Divider: {
    name: 'Divider',
    kind: 'wrapper',
    description:
      'Разделительная линия между блоками контента, гориз. или верт.',
    importStatement: "import { Divider } from '@daisforge/ui';",
    props: [
      {
        name: 'view',
        kind: 'enum',
        options: ['dark', 'default', 'inverse', 'light'],
        description: 'Вид разделителя',
        default: "'default'",
      },
      {
        name: 'orientation',
        kind: 'enum',
        options: ['horizontal', 'vertical'],
        description: 'Направление разделителя',
        default: "'horizontal'",
      },
    ],
  },
} as const;
