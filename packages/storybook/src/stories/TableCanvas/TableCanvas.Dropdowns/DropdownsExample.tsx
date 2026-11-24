import { ColumnConfig, TableCanvas } from '@ui-kit/components/TableCanvas';
import { SIZE } from '@ui-kit/components/TableCanvas/styles';
import { DataEditorRef } from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import { IconDownload } from '@ui-kit/icons';
import React, { useId, useState } from 'react';

const priorities = ['Высокий', 'Средний', 'Низкий'];
const statuses = [
  'В работе',
  'На согласовании у ответственного за выполнение задачи подразделения',
  'Завершено',
];
const rows = priorities.map((priority, i) => ({
  priority,
  status: statuses[i] ?? '',
}));
type Row = (typeof rows)[number];

const filterColumn = (
  key: keyof Row,
  name: string,
  values: string[],
  multiple: boolean,
): ColumnConfig<Row> => ({
  key,
  name,
  width: 280,
  filtering: {
    component: 'select',
    keyInFilterState: key,
    selectOptions: {
      type: 'constant',
      options: values.map((value) => ({ value, text: value })),
    },
    valueInRow: (row) => row[key],
    filter: multiple
      ? {
          typeOfValue: 'multiple',
          filteringType: (v, r) => !v.length || v.includes(r),
        }
      : { typeOfValue: 'single', filteringType: (v, r) => !v || v === r },
  },
});

const columns = [
  filterColumn('priority', 'Приоритет', priorities, false),
  filterColumn('status', 'Статус', statuses, true),
];

export function DropdownsExample({
  size = 'medium',
  narrow = false,
  tableRef,
}: {
  size?: SIZE;
  narrow?: boolean;
  tableRef?: React.RefObject<DataEditorRef>;
}) {
  const compactId = useId();
  const filtering = useState({
    priority: priorities[0],
    status: [statuses[0]],
  });
  const [compact, setCompact] = useState(narrow);
  const [action, setAction] = useState('');
  return (
    <div>
      <label htmlFor={compactId}>
        <input
          id={compactId}
          type="checkbox"
          checked={compact}
          onChange={(e) => setCompact(e.target.checked)}
        />
        Узкая панель
      </label>
      <div style={{ maxWidth: compact ? 168 : 600, marginTop: 16 }}>
        <TableCanvas
          refTable={tableRef}
          columnConfig={columns}
          rows={rows}
          tableConfig={{
            rowSize: { default: size, showInControl: true },
            fullScreenEnabled: true,
            containerStyle: { height: 380 },
            filtering: {
              state: filtering,
              filtersInfo: {
                priority: { label: 'Приоритет', clearedValue: '' },
                status: { label: 'Статус', clearedValue: [] },
              },
            },
            controlBlock: {
              rightSideInner: [
                { text: 'Обновить', onClick: () => setAction('Обновить') },
                { text: 'Загрузить', onClick: () => setAction('Загрузить') },
                {
                  text: 'Экспорт',
                  'aria-label': 'Экспорт',
                  contentLeft: <IconDownload />,
                  dropdown: {
                    items: [
                      { value: 'csv', label: 'CSV' },
                      { value: 'xlsx', label: 'Excel' },
                    ],
                    onItemSelect: (item) => setAction(item.label),
                  },
                },
              ],
            },
            onCellContextMenuDropdown: {
              type: 'dropdown',
              getDropdownItems: () => [
                { value: 'copy', label: 'Копировать' },
                {
                  value: 'details',
                  label: 'Открыть подробную информацию о выбранной записи',
                },
              ],
              onItemSelect: (item) => setAction(item.label),
            },
          }}
        />
      </div>
      <output>{action}</output>
    </div>
  );
}
