/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { useMemo } from 'react';

const DIRECTIONS = ['row', 'column'] as const;
const ALIGN_ITEMS = ['flex-start', 'center', 'flex-end', 'stretch'] as const;
const JUSTIFY = ['flex-start', 'center', 'flex-end', 'space-between'] as const;

/** Шрифт темы с весом 600: baseFontStyle начинается с веса ('400 normal …') */
const boldFont = (font: string) => font.replace(/^\d+/, '600');

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasContainer',
  tags: ['!autodocs'],
};

export default meta;

interface PlaygroundRow {
  id: number;
  title: string;
  status: string;
}

const playgroundRows: PlaygroundRow[] = [
  { id: 1, title: 'Сверка остатков', status: 'В работе' },
  { id: 2, title: 'Отчёт по кварталу', status: 'Готово' },
  { id: 3, title: 'Импорт выписок', status: 'Новая' },
];

const playgroundCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig<Row>[] = [
  {
    key: 'card',
    name: 'Карточка',
    width: 520,
    renderCell: ({ row, theme }) => (
      // Корневой контейнер занимает всю ячейку: его padding — отступ карточки от границ ячейки
      <Canvas.Container alignItems="center" padding={{ top: 8, right: 12, bottom: 8, left: 12 }}>
        {/* Вложенный контейнер — карточка по размеру содержимого */}
        <Canvas.Container
          direction="row"
          alignItems="center"
          gap={8}
          padding={{ top: 8, right: 12, bottom: 8, left: 12 }}
          backgroundColor={theme.tokens.surfaceAccentMinor}
        >
          <Canvas.Badge text={row.status} view="accent" size="s" />
          <Canvas.Text>{row.title}</Canvas.Text>
          <Canvas.Button view="accent" size="xs">Открыть</Canvas.Button>
        </Canvas.Container>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ rowHeight: 'auto', containerStyle: { height: '240px' } }}
  columnConfig={columnConfig}
  rows={rows}
/>
`;

/** Песочница: свойства карточки (вложенного контейнера) меняются контролами */
export const Default: StoryObj = {
  ...storySourceDoc({ code: playgroundCode, previewSource: 'shown' }),
  name: 'Песочница',
  args: {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    cellPadding: 8,
    padding: 12,
    width: 0,
    height: 0,
    backgroundColor: '',
  },
  argTypes: {
    direction: { control: 'select', options: DIRECTIONS },
    alignItems: { control: 'select', options: ALIGN_ITEMS },
    justifyContent: { control: 'select', options: JUSTIFY },
    gap: { control: { type: 'range', min: 0, max: 24, step: 2 } },
    cellPadding: {
      name: 'cellPadding (корень)',
      control: { type: 'range', min: 0, max: 24, step: 2 },
    },
    padding: {
      name: 'padding (карточка)',
      control: { type: 'range', min: 0, max: 24, step: 2 },
    },
    width: { control: { type: 'range', min: 0, max: 480, step: 10 } },
    height: { control: { type: 'range', min: 0, max: 120, step: 10 } },
    backgroundColor: {
      name: 'backgroundColor (пусто — токен темы)',
      control: 'color',
    },
  },
  render: (args) => {
    const {
      direction,
      alignItems,
      justifyContent,
      gap,
      cellPadding,
      padding,
      width,
      height,
      backgroundColor,
    } = args as {
      direction: (typeof DIRECTIONS)[number];
      alignItems: (typeof ALIGN_ITEMS)[number];
      justifyContent: (typeof JUSTIFY)[number];
      gap: number;
      cellPadding: number;
      padding: number;
      width: number;
      height: number;
      backgroundColor: string;
    };

    const columnConfig = useMemo<readonly ColumnConfig<PlaygroundRow>[]>(
      () => [
        { key: 'id', name: 'id', width: 60 },
        {
          key: 'card',
          name: 'Карточка',
          width: 520,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              alignItems="center"
              padding={{
                top: cellPadding,
                right: cellPadding + 4,
                bottom: cellPadding,
                left: cellPadding + 4,
              }}
            >
              <Canvas.Container
                direction={direction}
                alignItems={alignItems}
                justifyContent={justifyContent}
                gap={gap}
                padding={{
                  top: padding * 0.75,
                  right: padding,
                  bottom: padding * 0.75,
                  left: padding,
                }}
                style={{
                  ...(width > 0 ? { width } : {}),
                  ...(height > 0 ? { height } : {}),
                }}
                backgroundColor={
                  backgroundColor || theme.tokens.surfaceAccentMinor
                }
              >
                <Canvas.Badge text={row.status} view="accent" size="s" />
                <Canvas.Text>{row.title}</Canvas.Text>
                <Canvas.Button view="accent" size="xs">
                  Открыть
                </Canvas.Button>
              </Canvas.Container>
            </Canvas.Container>
          ),
        },
      ],
      [
        direction,
        alignItems,
        justifyContent,
        gap,
        cellPadding,
        padding,
        width,
        height,
        backgroundColor,
      ],
    );

    return (
      <TableCanvas
        tableConfig={{ rowHeight: 'auto', containerStyle: { height: '240px' } }}
        columnConfig={columnConfig}
        rows={playgroundRows}
      />
    );
  },
};

type TaskStatus = 'new' | 'progress' | 'review' | 'done';

interface TaskRow {
  id: number;
  title: string;
  project: string;
  assignee: string;
  role: string;
  status: TaskStatus;
  due: string;
  tags: string[];
}

const STATUS: Record<
  TaskStatus,
  { label: string; view: 'default' | 'accent' | 'warning' | 'positive' }
> = {
  new: { label: 'Новая', view: 'default' },
  progress: { label: 'В работе', view: 'accent' },
  review: { label: 'На проверке', view: 'warning' },
  done: { label: 'Готово', view: 'positive' },
};

const taskRows: TaskRow[] = [
  {
    id: 1,
    title: 'Сверка остатков по счетам',
    project: 'Казначейство · FIN-1204',
    assignee: 'Анна Иванова',
    role: 'Аналитик',
    status: 'progress',
    due: 'до 24 октября',
    tags: ['Срочно', 'Q4'],
  },
  {
    id: 2,
    title: 'Квартальный отчёт для правления',
    project: 'Отчётность · FIN-1187',
    assignee: 'Пётр Смирнов',
    role: 'Руководитель',
    status: 'review',
    due: 'до 31 октября',
    tags: ['Отчёт'],
  },
  {
    id: 3,
    title: 'Импорт банковских выписок',
    project: 'Интеграции · FIN-1250',
    assignee: 'Мария Козлова',
    role: 'Разработчик',
    status: 'new',
    due: 'без срока',
    tags: [],
  },
  {
    id: 4,
    title: 'Закрытие месяца',
    project: 'Бухгалтерия · FIN-1093',
    assignee: 'Игорь Петров',
    role: 'Бухгалтер',
    status: 'done',
    due: 'закрыта 15 октября',
    tags: ['Q3'],
  },
];

const taskCardCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

// baseFontStyle начинается с веса: '400 normal …'
const boldFont = (font: string) => font.replace(/^\\d+/, '600');

const columnConfig: ColumnConfig<TaskRow>[] = [
  {
    key: 'title',
    name: 'Задача',
    width: 380,
    renderCell: ({ row, theme }) => (
      // Строка: аватар + колонка из заголовка и подписи
      <Canvas.Container alignItems="center" gap={12} padding={{ top: 12, right: 12, bottom: 12, left: 12 }}>
        <Canvas.Avatar name={row.assignee} size="m" />
        <Canvas.Container direction="column" gap={4}>
          <Canvas.Text font={boldFont(theme.baseFontStyle)}>{row.title}</Canvas.Text>
          <Canvas.Text color={theme.tokens.textSecondary}>{row.project}</Canvas.Text>
        </Canvas.Container>
      </Canvas.Container>
    ),
  },
  {
    key: 'status',
    name: 'Статус',
    width: 220,
    renderCell: ({ row, theme }) => (
      // Колонка: бейджи в строку, под ними срок
      <Canvas.Container direction="column" justifyContent="center" gap={6} padding={{ left: 12, right: 12 }}>
        <Canvas.Container gap={4}>
          <Canvas.Badge text={STATUS[row.status].label} view={STATUS[row.status].view} size="s" />
          {row.tags.map((tag) => <Canvas.Badge key={tag} text={tag} view="light" size="s" />)}
        </Canvas.Container>
        <Canvas.Text color={theme.tokens.textSecondary}>{row.due}</Canvas.Text>
      </Canvas.Container>
    ),
  },
  {
    key: 'actions',
    name: '',
    width: 220,
    renderCell: ({ row }) => (
      // Кнопки прижаты вправо: justifyContent корневого контейнера
      <Canvas.Container alignItems="center" justifyContent="flex-end" gap={8} padding={{ left: 12, right: 12 }}>
        <Canvas.Button view="secondary" size="xs">Открыть</Canvas.Button>
        {row.status !== 'done' && <Canvas.Button view="accent" size="xs">Взять</Canvas.Button>}
      </Canvas.Container>
    ),
  },
];

<TableCanvas tableConfig={{ rowHeight: 'auto' }} columnConfig={columnConfig} rows={rows} />
`;

/** Составная ячейка: вложенные контейнеры строкой и колонкой, отступы и выравнивание */
export const TaskCard: StoryObj = {
  ...storySourceDoc({ code: taskCardCode, previewSource: 'shown' }),
  name: 'Карточка задачи',
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<TaskRow>[]>(
      () => [
        {
          key: 'title',
          name: 'Задача',
          width: 380,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              alignItems="center"
              gap={12}
              padding={{ top: 12, right: 12, bottom: 12, left: 12 }}
            >
              <Canvas.Avatar name={row.assignee} size="m" />
              <Canvas.Container direction="column" gap={4}>
                <Canvas.Text font={boldFont(theme.baseFontStyle)}>
                  {row.title}
                </Canvas.Text>
                <Canvas.Text color={theme.tokens.textSecondary}>
                  {row.project}
                </Canvas.Text>
              </Canvas.Container>
            </Canvas.Container>
          ),
        },
        {
          key: 'assignee',
          name: 'Исполнитель',
          width: 200,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              direction="column"
              justifyContent="center"
              gap={4}
              padding={{ left: 12, right: 12 }}
            >
              <Canvas.Text>{row.assignee}</Canvas.Text>
              <Canvas.Text color={theme.tokens.textSecondary}>
                {row.role}
              </Canvas.Text>
            </Canvas.Container>
          ),
        },
        {
          key: 'status',
          name: 'Статус',
          width: 220,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              direction="column"
              justifyContent="center"
              gap={6}
              padding={{ left: 12, right: 12 }}
            >
              <Canvas.Container gap={4}>
                <Canvas.Badge
                  text={STATUS[row.status].label}
                  view={STATUS[row.status].view}
                  size="s"
                />
                {row.tags.map((tag) => (
                  <Canvas.Badge key={tag} text={tag} view="light" size="s" />
                ))}
              </Canvas.Container>
              <Canvas.Text color={theme.tokens.textSecondary}>
                {row.due}
              </Canvas.Text>
            </Canvas.Container>
          ),
        },
        {
          key: 'actions',
          name: '',
          width: 220,
          renderCell: ({ row }) => (
            <Canvas.Container
              alignItems="center"
              justifyContent="flex-end"
              gap={8}
              padding={{ left: 12, right: 12 }}
            >
              <Canvas.Button view="secondary" size="xs">
                Открыть
              </Canvas.Button>
              {row.status !== 'done' && (
                <Canvas.Button view="accent" size="xs">
                  Взять
                </Canvas.Button>
              )}
            </Canvas.Container>
          ),
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{ rowHeight: 'auto', containerStyle: { height: '440px' } }}
        columnConfig={columnConfig}
        rows={taskRows}
      />
    );
  },
};

interface AlignRow {
  id: number;
  justifyContent: (typeof JUSTIFY)[number];
}

const alignRows: AlignRow[] = JUSTIFY.map((justifyContent, index) => ({
  id: index + 1,
  justifyContent,
}));

const alignmentCode = `
// Корневой контейнер растягивается на всю ячейку, поэтому justifyContent
// и alignItems выравнивают содержимое внутри ячейки
renderCell: ({ row, theme }) => (
  <Canvas.Container
    justifyContent={row.justifyContent}
    alignItems="center"
    gap={8}
    padding={{ left: 12, right: 12 }}
    backgroundColor={theme.tokens.surfaceTransparentSecondary}
  >
    <Canvas.Badge text="Badge" view="accent" size="s" />
    <Canvas.Text>Text</Canvas.Text>
    <Canvas.Button view="accent" size="xs">Button</Canvas.Button>
  </Canvas.Container>
)
`;

/** Корневой контейнер равен ячейке: justifyContent раскладывает содержимое по её ширине */
export const Alignment: StoryObj = {
  ...storySourceDoc({ code: alignmentCode, previewSource: 'shown' }),
  name: 'Выравнивание в ячейке',
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<AlignRow>[]>(
      () => [
        {
          key: 'justifyContent',
          name: 'justifyContent',
          width: 160,
          renderCell: ({ row, theme }) => (
            <Canvas.Container alignItems="center" padding={{ left: 12 }}>
              <Canvas.Text color={theme.tokens.textSecondary}>
                {row.justifyContent}
              </Canvas.Text>
            </Canvas.Container>
          ),
        },
        {
          key: 'content',
          name: 'Содержимое',
          width: 480,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              justifyContent={row.justifyContent}
              alignItems="center"
              gap={8}
              padding={{ left: 12, right: 12 }}
              backgroundColor={theme.tokens.surfaceTransparentSecondary}
            >
              <Canvas.Badge text="Badge" view="accent" size="s" />
              <Canvas.Text>Text</Canvas.Text>
              <Canvas.Button view="accent" size="xs">
                Button
              </Canvas.Button>
            </Canvas.Container>
          ),
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{ rowHeight: 48, containerStyle: { height: '260px' } }}
        columnConfig={columnConfig}
        rows={alignRows}
      />
    );
  },
};
