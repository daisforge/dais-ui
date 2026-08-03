/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { IconSearch } from '@ui-kit/icons';
import React, { useMemo } from 'react';

type CanvasTextOverflowMode = 'visible' | 'hidden';
type CanvasTextOverflow = 'clip' | 'ellipsis';

interface CanvasTextStoryArgs {
  text: string;
  color: string;
  font: string;
  wordWrap: boolean;
  overflow: CanvasTextOverflowMode;
  textOverflow: CanvasTextOverflow;
  ellipsis: string;
  maxLines: number;
  lineHeight: number;
}

interface CanvasTextRow {
  id: number;
  longText: string;
  iconText: string;
  shortText: string;
  unicode: string;
}

const rows: CanvasTextRow[] = [
  {
    id: 1,
    longText: [
      'Очень длинный русский текст переносится на несколько строк внутри узкой canvas-ячейки.',
      'При maxLines нужно показать только разрешенное количество строк и поставить многоточие в конце последней видимой строки.',
    ].join(' '),
    iconText: [
      'Длинное значение рядом с иконкой поиска должно занимать оставшееся место',
      'и не налезать на правый графический элемент.',
    ].join(' '),
    shortText: 'Короткий текст помещается полностью',
    unicode: [
      'Unicode и emoji 👨‍👩‍👧‍👦 🇷🇺 café должны обрезаться без разрыва видимых символов.',
      'Последняя строка получает аккуратный ellipsis.',
    ].join(' '),
  },
  {
    id: 2,
    longText: [
      'Табличная ячейка может содержать длинное описание на русском языке,',
      'которое пользователь ожидает увидеть в одну или две строки без налезания на соседние колонки.',
    ].join(' '),
    iconText: [
      'Значение статуса операции длиннее доступной области,',
      'но иконка справа должна оставаться видимой.',
    ].join(' '),
    shortText: 'Две короткие строки',
    unicode: 'Короткий Unicode 👋 помещается',
  },
  {
    id: 3,
    longText: [
      'Select-like trigger оставляет справа место под управляющие элементы.',
      'Текст переносится и clamp-ится внутри своей области, не уходя под иконку.',
    ].join(' '),
    iconText: [
      'Поиск по контрагентам возвращает длинное название,',
      'которое нужно показать рядом с иконкой без визуального конфликта.',
    ].join(' '),
    shortText: 'Без обрезки',
    unicode: 'Комбинируемые символы: З͑͗͒ӓ́͐м̈́͋е͑͝т́͗к͂̈́а͆͝ проверяют grapheme split',
  },
];

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasText',
  tags: ['!autodocs'],
};

export default meta;

const canvasTextCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const columnConfig: ColumnConfig[] = [
  {
    key: 'description',
    name: 'Описание',
    width: 230,
    renderCell: ({ row, theme }) => (
      <Canvas.Container padding={8} alignItems="center">
        <Canvas.Text
          color={theme.textDark}
          font={theme.baseFontStyle}
          wordWrap
          overflow="hidden"
          textOverflow="ellipsis"
          maxLines={2}
          lineHeight={1.2}
          style={{ flexGrow: 1 }}
        >
          {row.description}
        </Canvas.Text>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{
    containerStyle: { height: '320px' },
    rowHeight: () => 72,
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`;

const treeChevronEllipsisPreCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

`;

export const Default: StoryObj = {
  name: 'Canvas.Text',
  args: {
    text: rows[0]?.longText ?? '',
    color: '#13181BF5',
    font: '14px',
    wordWrap: true,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    ellipsis: '…',
    maxLines: 2,
    lineHeight: 1.2,
  },
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    font: { control: 'text' },
    wordWrap: { control: 'boolean' },
    overflow: {
      control: 'radio',
      options: ['visible', 'hidden'],
    },
    textOverflow: {
      control: 'radio',
      options: ['ellipsis', 'clip'],
    },
    ellipsis: { control: 'text' },
    maxLines: {
      control: { type: 'number', min: 0, step: 1 },
    },
    lineHeight: {
      control: { type: 'number', min: 1, max: 2, step: 0.1 },
    },
  },
  ...storySourceDoc({ code: canvasTextCode, previewSource: 'shown' }),
  render: (args) => {
    const {
      text,
      color,
      font,
      wordWrap,
      overflow,
      textOverflow,
      ellipsis,
      maxLines,
      lineHeight,
    } = args as CanvasTextStoryArgs;
    const resolvedMaxLines = maxLines > 0 ? maxLines : undefined;

    const columnConfig = useMemo<readonly ColumnConfig<CanvasTextRow>[]>(
      () => [
        {
          key: 'longText',
          name: 'Длинный текст',
          width: 230,
          renderCell: ({ row, theme }) => (
            <Canvas.Container padding={8} alignItems="center">
              <Canvas.Text
                color={color || theme.textDark}
                font={font || theme.baseFontStyle}
                wordWrap={wordWrap}
                overflow={overflow}
                textOverflow={textOverflow}
                ellipsis={ellipsis}
                maxLines={resolvedMaxLines}
                lineHeight={lineHeight}
                style={{ flexGrow: 1 }}
                autoTooltip={{
                  enabled: true,
                }}
              >
                {row.id === 1 ? text : row.longText}
              </Canvas.Text>
            </Canvas.Container>
          ),
        },
        {
          key: 'iconText',
          name: 'Текст + иконка',
          width: 240,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              direction="row"
              alignItems="center"
              columnGap={8}
              padding={8}
              style={{ width: '100%' }}
            >
              <Canvas.Text
                color={color || theme.textDark}
                font={font || theme.baseFontStyle}
                wordWrap={wordWrap}
                overflow={overflow}
                textOverflow={textOverflow}
                ellipsis={ellipsis}
                maxLines={resolvedMaxLines}
                lineHeight={lineHeight}
                style={{ flexGrow: 1 }}
              >
                {row.iconText}
              </Canvas.Text>
              <Canvas.Icon
                icon={<IconSearch />}
                size={16}
                color={theme.tokens.textAccent}
                style={{ flexShrink: 0 }}
              />
            </Canvas.Container>
          ),
        },
        {
          key: 'shortText',
          name: 'Короткий текст',
          width: 190,
          renderCell: ({ row, theme }) => (
            <Canvas.Container padding={8} alignItems="center">
              <Canvas.Text
                color={color || theme.textDark}
                font={font || theme.baseFontStyle}
                wordWrap={wordWrap}
                overflow={overflow}
                textOverflow={textOverflow}
                ellipsis={ellipsis}
                maxLines={resolvedMaxLines}
                lineHeight={lineHeight}
                style={{ flexGrow: 1 }}
              >
                {row.shortText}
              </Canvas.Text>
            </Canvas.Container>
          ),
        },
        {
          key: 'unicode',
          name: 'Unicode',
          width: 230,
          renderCell: ({ row, theme }) => (
            <Canvas.Container padding={8} alignItems="center">
              <Canvas.Text
                color={color || theme.textDark}
                font={font || theme.baseFontStyle}
                wordWrap={wordWrap}
                overflow={overflow}
                textOverflow={textOverflow}
                ellipsis={ellipsis}
                maxLines={resolvedMaxLines}
                lineHeight={lineHeight}
                style={{ flexGrow: 1 }}
              >
                {row.unicode}
              </Canvas.Text>
            </Canvas.Container>
          ),
        },
      ],
      [
        text,
        color,
        font,
        wordWrap,
        overflow,
        textOverflow,
        ellipsis,
        resolvedMaxLines,
        lineHeight,
      ],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '320px' },
          rowHeight: () => 72,
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

type CanvasTextTreeRow = {
  id: string;
  shortName: string;
  departPath: string;
  subRows?: CanvasTextTreeRow[];
};

type CanvasTextTreeRenderCell = NonNullable<
  ColumnConfig<CanvasTextTreeRow>['renderCell']
>;
type CanvasTextTreeSubRowRenderCell = NonNullable<
  NonNullable<ColumnConfig<CanvasTextTreeRow>['subRow']>['renderSubRowCell']
>;
type CanvasTextTreeCellTheme = Parameters<CanvasTextTreeRenderCell>[0]['theme'];

const treeEllipsisRows: CanvasTextTreeRow[] = [
  {
    id: '1',
    shortName: 'СКМ Премьер',
    departPath:
      'Территориальный банк / Аппарат ТБ / Подразделение по работе с проблемными активами / Очень длинный хвост / Дополнительный участок проверки',
    subRows: [
      {
        id: '1-1',
        shortName: 'Дочерняя роль',
        departPath:
          'Территориальный банк / ГОСБ / ВСП / Еще одно очень длинное подразделение для проверки ellipsis / Финальный отдел сопровождения',
      },
    ],
  },
  {
    id: '2',
    shortName: 'Руководитель ВСП',
    departPath:
      'Территориальный банк / Аппарат ТБ / Подразделение по работе с проблемными активами / Дополнительный длинный участок',
    subRows: [
      {
        id: '2-1',
        shortName: 'Заместитель руководителя',
        departPath:
          'Территориальный банк / Аппарат ТБ / Еще более длинная организационная цепочка / Подразделение методологии и контроля',
      },
    ],
  },
];

// Регрессия: встроенный шеврон не должен ломать ellipsis.
export const BuiltInTreeChevronEllipsisRegression: StoryObj = {
  ...storySourceDoc({
    preCode: treeChevronEllipsisPreCode,
    previewSource: 'shown',
  }),
  name: 'Canvas.Text / built-in tree chevron ellipsis',
  render: () => {
    const columnConfig = useMemo<
      readonly ColumnConfig<CanvasTextTreeRow>[]
    >(() => {
      const renderCellContent = (
        row: CanvasTextTreeRow,
        theme: CanvasTextTreeCellTheme,
      ) => (
        <Canvas.Container
          direction="column"
          gap={10}
          padding={{ top: theme.cellVerticalPadding }}
          style={{
            width: '100%',
          }}
        >
          <Canvas.Link>{row.shortName}</Canvas.Link>

          <Canvas.Text
            color={theme.tokens.textSecondary}
            wordWrap
            overflow="hidden"
            textOverflow="ellipsis"
            maxLines={1}
            style={{ width: '100%' }}
          >
            {row.departPath}
          </Canvas.Text>
        </Canvas.Container>
      );

      const renderCell: CanvasTextTreeRenderCell = ({ row, theme }) =>
        renderCellContent(row, theme);

      const renderSubRowCell: CanvasTextTreeSubRowRenderCell = ({
        row,
        theme,
      }) =>
        renderCellContent(
          row as CanvasTextTreeRow,
          theme as CanvasTextTreeCellTheme,
        );

      return [
        {
          key: 'shortName',
          name: 'Краткое название',
          width: 360,
          renderCell,
          subRow: {
            isColumnWithArrow: true,
            renderSubRowCell,
          },
        },
      ];
    }, []);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '320px' },
          rowHeight: () => 72,
          subRows: {
            getSubRows: (row) => row.subRows,
            rowKeyGetter: (row) => row.id,
          },
        }}
        columnConfig={columnConfig}
        rows={treeEllipsisRows}
      />
    );
  },
};

// Регрессия: две строки тоже должны ограничиваться шириной после шеврона.
export const BuiltInTreeChevronTwoLineEllipsisRegression: StoryObj = {
  ...storySourceDoc({
    preCode: treeChevronEllipsisPreCode,
    previewSource: 'shown',
  }),
  name: 'Canvas.Text / built-in tree chevron two-line ellipsis',
  render: () => {
    const columnConfig = useMemo<
      readonly ColumnConfig<CanvasTextTreeRow>[]
    >(() => {
      const renderCellContent = (
        row: CanvasTextTreeRow,
        theme: CanvasTextTreeCellTheme,
      ) => (
        <Canvas.Container
          direction="column"
          gap={10}
          padding={{ top: theme.cellVerticalPadding }}
          style={{
            width: '100%',
          }}
        >
          <Canvas.Link>{row.shortName}</Canvas.Link>

          <Canvas.Text
            color={theme.tokens.textSecondary}
            wordWrap
            overflow="hidden"
            textOverflow="ellipsis"
            maxLines={2}
            style={{ width: '100%' }}
          >
            {row.departPath}
          </Canvas.Text>
        </Canvas.Container>
      );

      const renderCell: CanvasTextTreeRenderCell = ({ row, theme }) =>
        renderCellContent(row, theme);

      const renderSubRowCell: CanvasTextTreeSubRowRenderCell = ({
        row,
        theme,
      }) =>
        renderCellContent(
          row as CanvasTextTreeRow,
          theme as CanvasTextTreeCellTheme,
        );

      return [
        {
          key: 'shortName',
          name: 'Краткое название',
          width: 360,
          renderCell,
          subRow: {
            isColumnWithArrow: true,
            renderSubRowCell,
          },
        },
      ];
    }, []);

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: '380px' },
          rowHeight: () => 96,
          subRows: {
            getSubRows: (row) => row.subRows,
            rowKeyGetter: (row) => row.id,
          },
        }}
        columnConfig={columnConfig}
        rows={treeEllipsisRows}
      />
    );
  },
};
