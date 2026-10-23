/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryTableConfigComp } from '@ui-kit/components/StoriesUtils';
import {
  Canvas,
  ColumnConfig,
  RowHeightFunc,
  SIZES,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import React, { ComponentType, useCallback, useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/RowHeight',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
  component: StoryTableConfigComp as ComponentType<unknown>,
};

export default meta;
const preCode = `
import { ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const RowHeight: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Row height',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        {
          key: 'id',
          name: 'id',
        },
        {
          key: 'task',
          name: 'Title',
        },
        {
          key: 'priority',
          name: 'Priority',
        },
        {
          key: 'loremIpsum',
          name: 'Длинный текст',
          width: 500,
          renderCell: ({ row, theme }) => (
            <Canvas.Container padding={8}>
              <Canvas.Container>
                <Canvas.Text
                  font={theme.baseFontStyle}
                  lineHeight={1.85}
                  wordWrap
                >
                  {row.loremIpsum}
                </Canvas.Text>
              </Canvas.Container>
            </Canvas.Container>
          ),
        },
        {
          key: 'complete',
          name: '% Complete',
        },
      ],
      [],
    );

    const rowHeight: RowHeightFunc<Row> = useCallback((r, currenRowSize) => {
      const symbolWidth = 11.5;

      const paddingInline = 16;
      const widthOfLoremCol = 500 - paddingInline * 2;
      const symbolsInOneLine = Math.round(widthOfLoremCol / symbolWidth);
      const heightOfLineInitial = 22; // в css
      const heightOfLine = heightOfLineInitial - 2; // скорректированный

      const allSymbols = r.loremIpsum.length;

      const countOfLine = Math.ceil(allSymbols / symbolsInOneLine);
      const paddingBlock = Number(
        SIZES[currenRowSize.rowSizeName].cell['padding-block'].slice(0, -2),
      );

      const neededHeight = heightOfLine * countOfLine + paddingBlock * 2;

      return neededHeight > currenRowSize.rowSizeValue
        ? neededHeight
        : currenRowSize.rowSizeValue;
    }, []);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          rowHeight,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

export const AutoRowHeight: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Auto row height (перенос текста)',
  render: () => {
    const [rows] = useState(createRows);

    const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
      () => [
        { key: 'id', name: 'id' },
        { key: 'task', name: 'Title' },
        {
          key: 'loremIpsum',
          name: 'Длинный текст',
          width: 360,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              alignItems="center"
              padding={{ left: 8, right: 8 }}
            >
              <Canvas.Text font={theme.baseFontStyle} wordWrap>
                {row.loremIpsum}
              </Canvas.Text>
            </Canvas.Container>
          ),
        },
        {
          key: 'short',
          name: 'Без переноса',
          width: 160,
          renderCell: ({ row }) => row.task,
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          rowHeight: 'auto',
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

type TaskRow = {
  id: string;
  title: string;
  description: string;
  status: 'Новая' | 'В работе' | 'Готово';
  tags: string[];
};

const STATUS_VIEW = {
  Новая: 'default',
  'В работе': 'accent',
  Готово: 'positive',
} as const;

const TAGS = [
  'дизайн',
  'frontend',
  'релиз',
  'backend',
  'аналитика',
  'тестирование',
];

const createTaskRows = (): TaskRow[] =>
  Array.from({ length: 60 }, (_, index) => ({
    id: String(index + 1),
    title: `Задача ${
      index + 1
    }: ${'согласовать макет и уточнить требования '.repeat((index % 3) + 1)}`,
    description:
      index % 4 === 0
        ? 'Короткое описание'
        : 'Подробное описание задачи: что нужно сделать, кого позвать на ревью и какие риски учесть до релиза.',
    status: (['Новая', 'В работе', 'Готово'] as const)[index % 3]!,
    tags: TAGS.slice(0, TAGS.length - (index % TAGS.length)),
  }));

export const FlexLayoutCell: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Вёрстка ячейки на flex (кнопки, бейджи, перенос, wrap)',
  render: () => {
    const [rows] = useState(createTaskRows);

    const columnConfig = useMemo<readonly ColumnConfig<TaskRow>[]>(
      () => [
        { key: 'id', name: '#', width: 56 },
        {
          key: 'title',
          name: 'Задача',
          width: 480,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              direction="column"
              justifyContent="center"
              gap={6}
              padding={{ left: 8, right: 8 }}
              style={{ width: '100%' }}
            >
              <Canvas.Container
                direction="row"
                alignItems="center"
                gap={8}
                style={{ width: '100%' }}
              >
                <Canvas.Text
                  font={theme.baseFontStyle}
                  wordWrap
                  style={{ flexGrow: 1, flexShrink: 1 }}
                >
                  {row.title}
                </Canvas.Text>
                <Canvas.Badge
                  text={row.status}
                  view={STATUS_VIEW[row.status]}
                  size="s"
                  style={{ flexShrink: 0 }}
                />
              </Canvas.Container>
              <Canvas.Text
                font={theme.baseFontStyle}
                color={theme.textLight}
                wordWrap
              >
                {row.description}
              </Canvas.Text>
              <Canvas.Container
                direction="row"
                alignItems="center"
                gap={8}
                style={{ width: '100%' }}
              >
                <Canvas.Container
                  wrap="wrap"
                  gap={6}
                  style={{ flexGrow: 1, flexShrink: 1 }}
                >
                  {row.tags.map((tag) => (
                    <Canvas.Badge key={tag} text={tag} view="light" size="xs" />
                  ))}
                </Canvas.Container>
                <Canvas.Button
                  view="accent"
                  size="xs"
                  style={{ flexShrink: 0 }}
                  // eslint-disable-next-line no-console
                  onClick={() => console.debug('open', row.id)}
                >
                  Открыть
                </Canvas.Button>
                <Canvas.Button
                  view="secondary"
                  size="xs"
                  style={{ flexShrink: 0 }}
                  // eslint-disable-next-line no-console
                  onClick={() => console.debug('assign', row.id)}
                >
                  Назначить
                </Canvas.Button>
              </Canvas.Container>
            </Canvas.Container>
          ),
        },
        {
          key: 'status',
          name: 'Статус',
          width: 120,
          renderCell: ({ row }) => row.status,
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          rowHeight: 'auto',
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

type ReportRow = {
  id: number;
  direction: string;
  division: string;
  comment: string;
  values: number[];
};

const REPORT_METRICS = 120;
const DIRECTIONS = [
  'Цифровизация',
  'Стратегическое направление «Розничный бизнес»',
  'Развитие корпоративного сегмента и работа с ключевыми клиентами',
  'ИТ',
];
const DIVISIONS = [
  'Центральный аппарат',
  'Территориальный банк: Северо-Западный',
  'Управление по работе с крупнейшими клиентами и холдингами',
];

const createReportRows = (): ReportRow[] =>
  Array.from({ length: 5000 }, (_, id) => ({
    id,
    direction: DIRECTIONS[id % DIRECTIONS.length]!,
    division: DIVISIONS[id % DIVISIONS.length]!,
    comment:
      id % 5 === 0
        ? 'Плановое значение пересмотрено после квартального комитета, факт уточняется'
        : '',
    values: Array.from(
      { length: REPORT_METRICS },
      (__, index) => (id * 7919 + index * 104729) % 1_000_000,
    ),
  }));

type ReportCellRender = NonNullable<ColumnConfig<ReportRow>['renderCell']>;

/** Текст строки с переносом по словам */
const wrappedText =
  (key: 'direction' | 'division' | 'comment'): ReportCellRender =>
  ({ row, theme }) =>
    (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap>
          {row[key]}
        </Canvas.Text>
      </Canvas.Container>
    );

export const AutoRowHeightWideTable: StoryObj = {
  ...storySourceDoc({
    preCode,
    previewSource: 'shown',
  }),
  name: 'Auto row height: широкая таблица (120 показателей)',
  render: () => {
    const [rows] = useState(createReportRows);

    const columnConfig = useMemo<readonly ColumnConfig<ReportRow>[]>(
      () => [
        {
          key: 'direction',
          name: 'Направление',
          width: 220,
          renderCell: wrappedText('direction'),
        },
        {
          key: 'division',
          name: 'Подразделение',
          width: 200,
          renderCell: wrappedText('division'),
        },
        ...Array.from(
          { length: REPORT_METRICS },
          (_, index): ColumnConfig<ReportRow> => ({
            key: `metric${index}`,
            name: `Показатель ${index + 1}`,
            width: 120,
            renderCell: ({ row }) => (
              <Canvas.Container
                alignItems="center"
                justifyContent="flex-end"
                padding={{ left: 8, right: 8 }}
              >
                <Canvas.Text>
                  {row.values[index]!.toLocaleString('ru-RU')}
                </Canvas.Text>
              </Canvas.Container>
            ),
          }),
        ),
        // Колонка с переносом в конце таблицы: строки дорастут, когда до неё прокрутят
        {
          key: 'comment',
          name: 'Комментарий',
          width: 240,
          renderCell: wrappedText('comment'),
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 700 },
          rowHeight: 'auto',
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};
