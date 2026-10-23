/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Canvas,
  ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { TextField } from '@ui-kit/components/TextField';
import React, { type ReactNode, useMemo, useState } from 'react';

/** Цвет пластины задаёт потребитель — например, цвет совпадения поиска */
const MARK_COLOR = '#ffe27a';

interface CanvasMarkRow {
  id: number;
  text: string;
}

const rows: CanvasMarkRow[] = [
  {
    id: 1,
    text: 'Подсветка фрагмента внутри строки: часть текста выделена пластиной.',
  },
  {
    id: 2,
    text: 'Длинный текст с выделенным фрагментом переносится на несколько строк, и пластина ложится на каждую строку, где есть фрагмент.',
  },
  { id: 3, text: 'Без выделения: обычный текст без Canvas.Mark.' },
];

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/CanvasElements/CanvasMark',
  tags: ['!autodocs'],
};

export default meta;

const canvasMarkCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const MARK_COLOR = '#ffe27a';

const columnConfig: ColumnConfig[] = [
  {
    key: 'text',
    name: 'Текст',
    width: 420,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap>
          Подсветка <Canvas.Mark color={MARK_COLOR}>фрагмента</Canvas.Mark> внутри строки
        </Canvas.Text>
      </Canvas.Container>
    ),
  },
];

<TableCanvas
  tableConfig={{ containerStyle: { height: '320px' }, rowHeight: 'auto' }}
  columnConfig={columnConfig}
  rows={rows}
/>
`;

export const Default: StoryObj = {
  name: 'Canvas.Mark',
  ...storySourceDoc({ code: canvasMarkCode, previewSource: 'shown' }),
  render: () => {
    const columnConfig = useMemo<readonly ColumnConfig<CanvasMarkRow>[]>(
      () => [
        { key: 'id', name: 'id', width: 60 },
        {
          key: 'text',
          name: 'Текст с выделением',
          width: 420,
          renderCell: ({ row, theme }) => (
            <Canvas.Container alignItems="center">
              <Canvas.Text font={theme.baseFontStyle} wordWrap>
                {row.id === 1 && (
                  <>
                    Подсветка{' '}
                    <Canvas.Mark color={MARK_COLOR}>фрагмента</Canvas.Mark>{' '}
                    внутри строки
                  </>
                )}
                {row.id === 2 && (
                  <>
                    Длинный текст с{' '}
                    <Canvas.Mark color={MARK_COLOR}>
                      выделенным фрагментом
                    </Canvas.Mark>{' '}
                    переносится на несколько строк, и пластина ложится на каждую
                    строку, где есть фрагмент.
                  </>
                )}
                {row.id === 3 && row.text}
              </Canvas.Text>
            </Canvas.Container>
          ),
        },
      ],
      [],
    );

    return (
      <TableCanvas
        tableConfig={{
          containerStyle: { height: 320 },
          rowHeight: 'auto',
        }}
        columnConfig={columnConfig}
        rows={rows}
      />
    );
  },
};

interface TribeRow {
  id: number;
  tribe: string;
  report: string;
  note: string;
}

const tribeRows: TribeRow[] = [
  {
    id: 1,
    tribe: 'Трайб «Диджитал вкладов»',
    report: 'Открыть свод',
    note: 'Вклады и накопительные счета: открытие, пополнение, закрытие.',
  },
  {
    id: 2,
    tribe: 'Трайб «Платежи и переводы»',
    report: 'Открыть отчёт по платежам',
    note: 'Переводы по номеру телефона и платежи по реквизитам.',
  },
  {
    id: 3,
    tribe: 'Трайб «Кредитование МСБ»',
    report: 'Открыть свод',
    note: 'Кредиты малому и среднему бизнесу.',
  },
];

/** Текст с совпадениями `query`, обёрнутыми в `Canvas.Mark` */
const withMarks = (text: string, query: string): ReactNode => {
  const needle = query.trim().toLowerCase();
  if (!needle) return text;
  const parts: ReactNode[] = [];
  const lower = text.toLowerCase();
  let cursor = 0;
  for (
    let start = lower.indexOf(needle);
    start >= 0;
    start = lower.indexOf(needle, cursor)
  ) {
    if (start > cursor) parts.push(text.slice(cursor, start));
    const end = start + needle.length;
    parts.push(
      <Canvas.Mark key={start} color={MARK_COLOR}>
        {text.slice(start, end)}
      </Canvas.Mark>,
    );
    cursor = end;
  }
  parts.push(text.slice(cursor));
  return parts;
};

const inLinksAndBadgesCode = `
import { Canvas, ColumnConfig, TableCanvas } from '@daisforge/ui/components/TableCanvas';

const MARK_COLOR = '#ffe27a';

// withMarks(text, query) оборачивает совпадения в <Canvas.Mark color={MARK_COLOR}>

const columnConfig: ColumnConfig[] = [
  {
    key: 'tribe',
    name: 'Бейдж',
    renderCell: ({ row }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        {/* разметка — в children */}
        <Canvas.Badge size="s" view="accent" transparent>
          {withMarks(row.tribe, query)}
        </Canvas.Badge>
      </Canvas.Container>
    ),
  },
  {
    key: 'report',
    name: 'Ссылка',
    renderCell: ({ row }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Link onClick={openReport}>{withMarks(row.report, query)}</Canvas.Link>
      </Canvas.Container>
    ),
  },
];

// Бейдж принимает разметку и в text:
<Canvas.Badge text={withMarks(row.tribe, query)} />
`;

export const InLinksAndBadges: StoryObj = {
  name: 'В ссылках и бейджах',
  ...storySourceDoc({ code: inLinksAndBadgesCode, previewSource: 'shown' }),
  render: () => {
    const [query, setQuery] = useState('откр');

    const columnConfig = useMemo<readonly ColumnConfig<TribeRow>[]>(
      () => [
        {
          key: 'tribe',
          name: 'Бейдж (children)',
          width: 260,
          renderCell: ({ row }) => (
            <Canvas.Container
              alignItems="center"
              padding={{ left: 8, right: 8 }}
            >
              <Canvas.Badge size="s" view="accent" transparent>
                {withMarks(row.tribe, query)}
              </Canvas.Badge>
            </Canvas.Container>
          ),
        },
        {
          key: 'tribeText',
          name: 'Бейдж (text)',
          width: 260,
          renderCell: ({ row }) => (
            <Canvas.Container
              alignItems="center"
              padding={{ left: 8, right: 8 }}
            >
              <Canvas.Badge
                size="s"
                view="positive"
                transparent
                text={withMarks(row.tribe, query)}
              />
            </Canvas.Container>
          ),
        },
        {
          key: 'report',
          name: 'Ссылка',
          width: 220,
          renderCell: ({ row }) => (
            <Canvas.Container
              alignItems="center"
              padding={{ left: 8, right: 8 }}
            >
              <Canvas.Link>{withMarks(row.report, query)}</Canvas.Link>
            </Canvas.Container>
          ),
        },
        {
          key: 'note',
          name: 'Ссылка с переносом',
          width: 240,
          renderCell: ({ row }) => (
            <Canvas.Container
              alignItems="center"
              padding={{ left: 8, right: 8 }}
            >
              <Canvas.Link wordWrap>{withMarks(row.note, query)}</Canvas.Link>
            </Canvas.Container>
          ),
        },
      ],
      [query],
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ width: 320 }}>
          <TextField
            size="s"
            label="Поиск"
            labelPlacement="outer"
            placeholder="Например: откр"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <TableCanvas
          tableConfig={{
            containerStyle: { height: 320 },
            rowHeight: 'auto',
          }}
          columnConfig={columnConfig}
          rows={tribeRows}
        />
      </div>
    );
  },
};
