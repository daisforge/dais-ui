/* eslint-disable react-hooks/rules-of-hooks */
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@ui-kit/components/Button';
import {
  CompactSelection,
  type GridSelection,
  type SortColumn,
  TableCanvas,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

export default {
  title: 'Локальные компоненты/TableCanvas/CellsSelection/Смена данных',
  tags: ['!autodocs'],
} satisfies Meta;

export const ServerSort: StoryObj<{
  replaceOnLoad: boolean;
  extraRows: number;
}> = {
  args: { replaceOnLoad: false, extraRows: 0 },
  argTypes: {
    replaceOnLoad: { name: 'Заменить таблицу оверлеем на время запроса' },
    extraRows: {
      name: 'Дополнительные строки',
      control: { type: 'select' },
      options: [0, 100],
    },
  },
  name: 'Серверная сортировка',
  ...storySourceDoc({
    preCode: `import { useMemo, useState } from 'react';
import { Button, TableCanvas } from '@daisforge/ui';
import { CompactSelection, type GridSelection, type SortColumn } from '@daisforge/ui/components/TableCanvas';`,
    previewSource: 'shown',
  }),
  render: ({ replaceOnLoad, extraRows }) => {
    const [reversed, setReversed] = useState(false);
    const rows = useMemo(() => {
      const records = [
        { id: 10, department: 'Учёт', name: 'Анна' },
        { id: 20, department: 'Учёт', name: 'Борис' },
        { id: 30, department: 'Склад', name: 'Вера' },
        { id: 40, department: 'Склад', name: 'Глеб' },
        ...Array.from({ length: extraRows }, (_, i) => ({
          id: 50 + i,
          department: `Отдел ${i}`,
          name: `Сотрудник ${i}`,
        })),
      ];
      return reversed ? records.reverse() : records;
    }, [extraRows, reversed]);
    const selection = useState<GridSelection>({
      rows: CompactSelection.empty(),
      columns: CompactSelection.empty(),
    });
    const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
    const [waiting, setWaiting] = useState(false);
    const [nameFirst, setNameFirst] = useState(false);
    const columns = useMemo(() => {
      const department = { key: 'department', name: 'Отдел', width: 130 };
      const name = { key: 'name', name: 'Имя', width: 150 };
      const id = {
        key: 'id',
        name: 'ID',
        width: 100,
        sortingType: 'numberSort' as const,
      };
      return nameFirst ? [name, department, id] : [department, name, id];
    }, [nameFirst]);
    const { current } = selection[0];
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <p>
          Выделите несколько ячеек. Запросите сортировку, затем примените ответ
          сервера.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button
            disabled={waiting}
            onClick={() => {
              setSortColumns([
                {
                  columnKey: 'id',
                  direction:
                    sortColumns[0]?.direction === 'DESC' ? 'ASC' : 'DESC',
                },
              ]);
              setWaiting(true);
            }}
          >
            Запросить сортировку
          </Button>
          <Button
            disabled={!waiting}
            onClick={() => {
              setReversed((prev) => !prev);
              setWaiting(false);
            }}
          >
            Применить ответ
          </Button>
          <Button onClick={() => setNameFirst((prev) => !prev)}>
            {nameFirst ? 'Вернуть порядок колонок' : 'Переместить имя в начало'}
          </Button>
        </div>
        <output>
          {current
            ? `ID ${rows[current.cell[1]]?.id}, колонка ${
                current.cell[0] + 1
              }, диапазон ${current.range.width} × ${current.range.height}`
            : 'Выделение пусто'}
        </output>
        <TableCanvas
          rows={rows}
          columnConfig={columns}
          tableConfig={{
            containerStyle: { height: 280 },
            loadingOverlay: { active: replaceOnLoad && waiting },
            sorting: {
              state: [sortColumns, setSortColumns],
              manualSorting: true,
            },
            mergeCells: { mergeByCellValues: ['department'] },
            cellsSelection: { rowKeyGetter: (row) => row.id, state: selection },
          }}
        />
      </div>
    );
  },
};
