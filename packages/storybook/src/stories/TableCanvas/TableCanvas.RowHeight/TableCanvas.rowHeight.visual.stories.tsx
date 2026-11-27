/**
 * Регрессия переноса Canvas.Text (wordWrap).
 *
 * canvas-hypertxt хранит среднюю ширину символа на шрифт. Пустой абзац (текст с
 * `\n` в конце или пустой строкой внутри) мерился как '' и превращал её в NaN:
 * все следующие тексты этим шрифтом вставали в одну строку, пока кэш не сбросится.
 *
 * Перенос в canvas не прочитать из DOM, поэтому таблица с `rowHeight: 'auto'`:
 * перенесённый текст растит строку, а без переноса она остаётся высотой контрольной.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { expect, waitFor } from '@storybook/test';
import {
  Canvas,
  type ColumnConfig,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import type { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import { createRef } from 'react';

import { gridReady } from '../visual-helpers';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/RowHeight/Визуальные тесты',
  tags: ['!autodocs'],
};
export default meta;

type WrapRow = { id: number; note: string; team: string };

const tableRef = createRef<DataEditorRef>();

const LONG_TEXT =
  '[Риск-решения ГРС] Контроль кредитного риска по глобальным рынкам';

const ROWS: WrapRow[] = [
  // Пустой абзац в конце — так приходит текст с переводом строки из данных.
  // Строка рисуется первой; сама она растёт из-за пустой второй строки примечания.
  { id: 1, note: 'Комментарий\n', team: 'Коротко' },
  { id: 2, note: '', team: LONG_TEXT },
  { id: 3, note: '', team: 'Коротко' },
];

const TEAM_COL = 1;
const LONG_ROW = 1;
const CONTROL_ROW = 2;

const COLUMNS: readonly ColumnConfig<WrapRow>[] = [
  {
    key: 'note',
    name: 'Примечание',
    width: 160,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        {/* Шрифт не встречается в других историях: статистика canvas-hypertxt
            общая для страницы и после 20 000 символов шрифта больше не меняется */}
        <Canvas.Text font={`500 15px ${theme.fontFamily}`} wordWrap>
          {row.note}
        </Canvas.Text>
      </Canvas.Container>
    ),
  },
  {
    key: 'team',
    name: 'Команда',
    width: 220,
    renderCell: ({ row, theme }) => (
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text font={`500 15px ${theme.fontFamily}`} wordWrap>
          {row.team}
        </Canvas.Text>
      </Canvas.Container>
    ),
  },
];

const rowHeightOf = (row: number) =>
  tableRef.current?.getBounds(TEAM_COL, row)?.height ?? 0;

export const WordWrapAfterEmptyParagraph: StoryObj = {
  name: 'Перенос текста после пустого абзаца',
  render: () => (
    <div style={{ padding: 8 }}>
      <TableCanvas
        refTable={tableRef}
        tableConfig={{
          containerStyle: { height: 260, width: 420 },
          rowHeight: 'auto',
        }}
        columnConfig={COLUMNS}
        rows={ROWS}
      />
    </div>
  ),
  play: async () => {
    await gridReady(tableRef);

    // Строка с длинным текстом выше контрольной, только если текст перенесён
    await waitFor(
      () => {
        expect(rowHeightOf(LONG_ROW)).toBeGreaterThan(rowHeightOf(CONTROL_ROW));
      },
      { timeout: 5000 },
    );
  },
};
