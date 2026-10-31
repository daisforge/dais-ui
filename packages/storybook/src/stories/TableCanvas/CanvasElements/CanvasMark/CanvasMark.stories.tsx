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

const columnConfig: ColumnConfig[] = [
  {
    key: 'text',
    name: 'Текст',
    width: 420,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap>
          Подсветка <Canvas.Mark color={theme.tokens.surfaceWarningMinor56}>фрагмента</Canvas.Mark> внутри строки
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
                    <Canvas.Mark color={theme.tokens.surfaceWarningMinor56}>
                      фрагмента
                    </Canvas.Mark>{' '}
                    внутри строки
                  </>
                )}
                {row.id === 2 && (
                  <>
                    Длинный текст с{' '}
                    <Canvas.Mark color={theme.tokens.surfaceWarningMinor56}>
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

/** Текст с совпадениями `query`, обёрнутыми в `Canvas.Mark` цвета `color` */
const withMarks = (text: string, query: string, color: string): ReactNode => {
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
      <Canvas.Mark key={start} color={color}>
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

// withMarks(text, query, color) оборачивает совпадения в <Canvas.Mark color={color}>

const columnConfig: ColumnConfig[] = [
  {
    key: 'tribe',
    name: 'Бейдж',
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        {/* разметка — в children */}
        <Canvas.Badge size="s" view="accent" transparent>
          {withMarks(row.tribe, query, theme.tokens.surfaceWarningMinor56)}
        </Canvas.Badge>
      </Canvas.Container>
    ),
  },
  {
    key: 'report',
    name: 'Ссылка',
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Link onClick={openReport}>
          {withMarks(row.report, query, theme.tokens.surfaceWarningMinor56)}
        </Canvas.Link>
      </Canvas.Container>
    ),
  },
];

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
          name: 'Бейдж',
          width: 260,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              alignItems="center"
              padding={{ left: 8, right: 8 }}
            >
              <Canvas.Badge size="s" view="accent" transparent>
                {withMarks(
                  row.tribe,
                  query,
                  theme.tokens.surfaceWarningMinor56,
                )}
              </Canvas.Badge>
            </Canvas.Container>
          ),
        },
        {
          key: 'report',
          name: 'Ссылка',
          width: 220,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              alignItems="center"
              padding={{ left: 8, right: 8 }}
            >
              <Canvas.Link>
                {withMarks(
                  row.report,
                  query,
                  theme.tokens.surfaceWarningMinor56,
                )}
              </Canvas.Link>
            </Canvas.Container>
          ),
        },
        {
          key: 'note',
          name: 'Ссылка с переносом',
          width: 240,
          renderCell: ({ row, theme }) => (
            <Canvas.Container
              alignItems="center"
              padding={{ left: 8, right: 8 }}
            >
              <Canvas.Link wordWrap>
                {withMarks(row.note, query, theme.tokens.surfaceWarningMinor56)}
              </Canvas.Link>
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

type HugeRow = { id: number };

const HUGE_ROWS = 1_000_000;
const HUGE_COLUMNS = 1000;
const HUGE_TEXTS = [
  'Открыть свод',
  'Отчёт по платежам',
  'Вклады и накопительные счета: открытие, пополнение, закрытие',
  'Кредиты малому и среднему бизнесу, отчёт за квартал',
];

const createHugeRows = (): HugeRow[] =>
  Array.from({ length: HUGE_ROWS }, (_, index) => ({ id: index + 1 }));

const hugeCode = `
// Строка — только id, текст ячейки считается при отрисовке
const rows = Array.from({ length: 1_000_000 }, (_, index) => ({ id: index + 1 }));

const columnConfig = [
  { key: 'id', name: '№', width: 100 },
  ...Array.from({ length: 999 }, (_, index) => ({
    key: \`c\${index}\`,
    name: \`Колонка \${index + 1}\`,
    width: 220,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={theme.baseFontStyle} wordWrap={index % 10 === 0}>
          {withMarks(TEXTS[(row.id + index) % TEXTS.length], query, theme.tokens.surfaceWarningMinor56)}
        </Canvas.Text>
      </Canvas.Container>
    ),
  })),
];

<TableCanvas tableConfig={{ rowHeight: 'auto' }} columnConfig={columnConfig} rows={rows} />
`;

/** Миллион строк и тысяча колонок с подсветкой: разметка строится только для видимых ячеек */
export const Huge: StoryObj = {
  name: '1 000 000 строк × 1000 колонок',
  ...storySourceDoc({ code: hugeCode, previewSource: 'shown' }),
  render: () => {
    const [query, setQuery] = useState('отч');
    const [rows] = useState(createHugeRows);

    const columnConfig = useMemo<readonly ColumnConfig<HugeRow>[]>(
      () => [
        { key: 'id', name: '№', width: 100 },
        ...Array.from(
          { length: HUGE_COLUMNS - 1 },
          (_, index): ColumnConfig<HugeRow> => ({
            key: `c${index}`,
            name: `Колонка ${index + 1}`,
            width: 220,
            renderCell: ({ row, theme }) => (
              <Canvas.Container
                alignItems="center"
                padding={{ left: 8, right: 8 }}
              >
                <Canvas.Text
                  font={theme.baseFontStyle}
                  wordWrap={index % 10 === 0}
                >
                  {withMarks(
                    HUGE_TEXTS[(row.id + index) % HUGE_TEXTS.length]!,
                    query,
                    theme.tokens.surfaceWarningMinor56,
                  )}
                </Canvas.Text>
              </Canvas.Container>
            ),
          }),
        ),
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
            placeholder="Например: отч"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <TableCanvas
          tableConfig={{ containerStyle: { height: 700 }, rowHeight: 'auto' }}
          columnConfig={columnConfig}
          rows={rows}
        />
      </div>
    );
  },
};
