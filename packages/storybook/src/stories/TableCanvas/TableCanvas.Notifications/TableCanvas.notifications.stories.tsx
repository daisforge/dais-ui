/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
import { createRows, type Row } from '@df-storybook/data/tableData';
import DocStoryTemplate from '@df-storybook/templates/DocStoryTemplate.mdx';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import {
  type ColumnConfig,
  TableCanvas,
  type TableNotification,
} from '@ui-kit/components/TableCanvas';
import { useMemo, useState } from 'react';

const meta: Meta = {
  title: 'Локальные компоненты/TableCanvas/Notifications',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: DocStoryTemplate,
    },
  },
};

export default meta;

type Story = StoryObj;

const COLUMNS: readonly ColumnConfig<Row>[] = [
  { key: 'id', name: 'ID (readonly)', width: 120 },
  {
    key: 'task',
    name: 'Задача',
    width: 260,
    editingCell: { editable: true, component: 'inputString' },
  },
  {
    key: 'priority',
    name: 'Приоритет',
    width: 160,
    editingCell: { editable: true, component: 'inputString' },
  },
  {
    key: 'complete',
    name: '% (число)',
    width: 140,
    editingCell: { editable: true, component: 'inputNumber' },
  },
];

const LEVEL_COLOR: Record<TableNotification['level'], string> = {
  error: '#d64545',
  warning: '#c98a00',
  info: '#3b7dd8',
};

export const Notifications: Story = {
  name: 'Подписка на события (onNotification)',
  ...storySourceDoc({ previewSource: 'shown' }),
  render: () => {
    const [rows, setRows] = useState(createRows);
    const columnConfig = useMemo(() => COLUMNS, []);
    const [log, setLog] = useState<TableNotification[]>([]);

    return (
      <div>
        <p style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
          Режим <b>multi-range-cell</b>. Как спровоцировать события:
          <br />• <b>copy / multi-range-scattered</b> — Ctrl-выдели ячейки в
          РАЗНЫХ строках и колонках → Ctrl+C.
          <br />• <b>paste / multi-range-scattered</b> — тот же 2D-выбор →
          Ctrl+V.
          <br />• <b>paste / readonly-abort</b> — вставь в диапазон, задевающий
          колонку ID.
          <br />• <b>paste / overflow-abort</b> — вставь большой блок у
          нижнего/правого края.
          <br />• <b>paste / validation-skipped</b> — вставь текст в колонку «%
          (число)».
          <br />• <b>fill / readonly-abort</b>, <b>fill / validation-skipped</b>
          — то же протаскиванием fill-handle.
        </p>

        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <TableCanvas
              tableConfig={{
                containerStyle: { height: '520px' },
                cellsSelection: { mode: 'multi-range-cell' },
                rowMarkers: { startIndex: 1 },
                cellTransfer: {
                  enabled: true,
                  paste: {
                    readonlyBehavior: 'abort',
                    overflowBehavior: 'abort',
                  },
                },
                editing: {
                  onRowsChange: setRows,
                  rowKeyGetter: (r) => `${r.id}`,
                  defaultEnabled: true,
                },
                notifications: {
                  onNotification: (event) =>
                    setLog((prev) => [event, ...prev].slice(0, 20)),
                },
              }}
              columnConfig={columnConfig}
              rows={rows}
            />
          </div>

          <div style={{ width: 340, fontSize: 12 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <b>Полученные события ({log.length})</b>
              <button
                type="button"
                onClick={() => setLog([])}
                style={{
                  padding: '4px 10px',
                  borderRadius: 8,
                  border: '1px solid #c7d2e0',
                  background: '#fff',
                  cursor: 'pointer',
                }}
              >
                Очистить
              </button>
            </div>
            {log.length === 0 && (
              <div style={{ color: '#8893a5' }}>Пока пусто</div>
            )}
            {log.map((event, i) => (
              <div
                key={i}
                style={{
                  borderLeft: `3px solid ${LEVEL_COLOR[event.level]}`,
                  padding: '6px 10px',
                  marginBottom: 6,
                  background: '#fafbfc',
                }}
              >
                <div
                  style={{ color: LEVEL_COLOR[event.level], fontWeight: 600 }}
                >
                  {event.type} · {event.code} · {event.level}
                </div>
                <div style={{ color: '#556' }}>{event.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
