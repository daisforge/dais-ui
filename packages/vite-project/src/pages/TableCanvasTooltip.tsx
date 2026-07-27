import { useMemo, useState } from 'react';

import {
  Canvas,
  TableCanvas,
  type ColumnConfig,
} from '@daisforge/ui/components/TableCanvas';

import { createRows, type Row } from '../shared/tableData';

/**
 * 1. Встроенный тултип (drag-иконка в шапке)
 * >> Наведите на иконку перетаскивания в заголовке любой колонки
 */
const DefaultTooltipExample = () => {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 400 },
        columnsControl: { enable: true, reorderingHeader: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};

/**
 * 2. Колоночный тултип (строка/функция)
 * >> Наведите на ячейку в колонках Title или Developer
 * >> Наведите на заголовок Title или Developer для headerCellTooltip
 */
const ColumnTooltipStringExample = () => {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      {
        key: 'task',
        name: 'Title',
        headerCellTooltip: 'Колонка: Title',
        cellTooltip: ({ row, column }) => `Ячейка: ${column.name} — ${row.id}`,
      },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      {
        key: 'developer',
        name: 'Developer',
        headerCellTooltip: 'Колонка: Developer',
        cellTooltip: ({ row }) =>
          row.developer ? `Разработчик: ${row.developer}` : null,
      },
      { key: 'complete', name: '% Complete' },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 400 },
        columnsControl: { enable: true, reorderingHeader: true },
        tooltip: { enabled: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};

/**
 * 3. Колоночный тултип (объект с placement)
 * >> Наведите на ячейку в колонке % Complete
 * >> >= 80% — тултип сверху, < 80% — снизу
 */
const ColumnTooltipObjectExample = () => {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      { key: 'priority', name: 'Priority' },
      { key: 'issueType', name: 'Issue Type' },
      { key: 'developer', name: 'Developer' },
      {
        key: 'complete',
        name: '% Complete',
        cellTooltip: ({ row }) => {
          const pct = row.complete ?? 0;
          const isHigh = typeof pct === 'number' && pct >= 80;
          return {
            text: isHigh ? `${pct}% — почти готово!` : `Прогресс: ${pct}%`,
            placement: isHigh ? ('top' as const) : ('bottom' as const),
          };
        },
      },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 400 },
        columnsControl: { enable: true, reorderingHeader: true },
        tooltip: { enabled: true },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};

/**
 * 4. Тултип на кнопке (Canvas.Button)
 * >> Наведите на кнопку «Подробнее» в колонке «Действие»
 */
const ButtonWithTooltipExample = () => {
  const [rows] = useState(createRows);

  const columnConfig = useMemo<readonly ColumnConfig<Row>[]>(
    () => [
      { key: 'id', name: 'ID' },
      { key: 'task', name: 'Title' },
      {
        key: 'action',
        name: 'Действие',
        renderCell: () => (
          <Canvas.Container direction="row" gap={8}>
            <Canvas.Button
              portalHoverEnabled
              tooltip="Нажмите для перехода в карточку"
              variant="secondary"
              onClick={() => {}}
            >
              Подробнее
            </Canvas.Button>
          </Canvas.Container>
        ),
      },
    ],
    [],
  );

  return (
    <TableCanvas
      tableConfig={{
        containerStyle: { height: 400 },
      }}
      columnConfig={columnConfig}
      rows={rows}
    />
  );
};

const hints: Record<string, string> = {
  default: 'hover drag-icon in any column header',
  string: 'hover cells in Title or Developer columns',
  object: 'hover cells in % Complete column',
  button: 'hover the button in Action column',
};

export const TableCanvasTooltipExamples = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
    <section>
      <h3>1. Встроенный тултип (drag-иконка в шапке)</h3>
      <p className="hint">{hints.default}</p>
      <DefaultTooltipExample />
    </section>
    <section>
      <h3>2. Колоночный тултип (строка/функция)</h3>
      <p className="hint">{hints.string}</p>
      <ColumnTooltipStringExample />
    </section>
    <section>
      <h3>3. Колоночный тултип (объект с placement)</h3>
      <p className="hint">{hints.object}</p>
      <ColumnTooltipObjectExample />
    </section>
    <section>
      <h3>4. Тултип на кнопке (Canvas.Button)</h3>
      <p className="hint">{hints.button}</p>
      <ButtonWithTooltipExample />
    </section>
  </div>
);
