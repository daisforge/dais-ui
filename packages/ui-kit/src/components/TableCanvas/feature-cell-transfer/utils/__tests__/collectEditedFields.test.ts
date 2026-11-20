import { describe, expect, it } from 'vitest';

import { collectEditedFields } from '../collectEditedFields';

const columns = [
  {
    key: 'name',
    name: 'Название',
    subRow: { keyOfColumnInSubRow: 'childName' },
  },
  {
    key: 'qty',
    name: 'Количество',
    subRow: { keyOfColumnInSubRow: 'childQty' },
  },
  { key: 'audit', name: '', isServiceColumn: true },
];

describe('результат пользовательского редактора строки', () => {
  const row = { name: 'A', qty: 1, audit: 0, updatedAt: 0 };
  it('отмечает только изменённые привязанные колонки', () => {
    expect(
      collectEditedFields(
        [row],
        [{ ...row, qty: 2, audit: 1 }],
        [0, 0],
        columns,
      ),
    ).toEqual([{ rowIndex: 0, columnKey: 'qty' }]);
    expect(
      collectEditedFields(
        [row],
        [{ ...row, updatedAt: 1, audit: 1 }],
        [0],
        columns,
      ),
    ).toEqual([]);
  });
  it('сопоставляет поля подстроки с ключами колонок', () => {
    const child = { treeId: '1.subRows.0', childName: 'A', childQty: 1 };
    expect(
      collectEditedFields(
        [child],
        [{ ...child, childName: 'B', childQty: 3 }],
        [0],
        columns,
      ),
    ).toEqual([
      { rowIndex: 0, columnKey: 'name' },
      { rowIndex: 0, columnKey: 'qty' },
    ]);
  });
});
