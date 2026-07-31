import { describe, expect, it } from 'vitest';

import type { TransferColumnConfig } from '../types';
import { applyValuesToRows } from './applyValuesToRows';

// --- Моки колонок/строк ------------------------------------------------------
const numFormat = {
  type: 'number',
  decimalSeparator: ',',
  thousandSeparator: ' ',
} as const;

/** Служебная колонка (нумерация) — всегда пропускается. */
const svc = (): TransferColumnConfig =>
  ({
    key: 'svc',
    isServiceColumn: true,
    editable: false,
  } as unknown as TransferColumnConfig);

/** Data-колонка: editable управляет правом записи, extra — editingCell/contentFormat. */
const dcol = (
  key: string,
  editable = true,
  extra: Record<string, unknown> = {},
): TransferColumnConfig =>
  ({ key, editable, ...extra } as unknown as TransferColumnConfig);

const numCol = (key: string): TransferColumnConfig =>
  dcol(key, true, {
    editingCell: { component: 'inputNumber' },
    contentFormat: numFormat,
  });

/** Значение из буфера по смещениям (paste-стиль). */
const fromBuffer =
  (buf: string[][]) => (rowOffset: number, colOffset: number) =>
    buf[rowOffset]?.[colOffset] ?? '';

const BASE = {
  allowSubRows: false,
  readonlyBehavior: 'skip' as const,
  validation: 'none' as const,
  validateContexts: {},
};

describe('applyValuesToRows — paste в прямоугольник', () => {
  it('записывает буфер 2×2 в целевые ячейки, отдаёт affectedIndexes и firstAffectedColumn', () => {
    const columns = [svc(), dcol('a'), dcol('b')];
    const rows = [
      { a: '', b: '' },
      { a: '', b: '' },
      { a: '', b: '' },
    ];

    const res = applyValuesToRows({
      ...BASE,
      rows,
      columns,
      rowTargets: [0, 1],
      colTargets: [1, 2],
      getValue: fromBuffer([
        ['A0', 'B0'],
        ['A1', 'B1'],
      ]),
    });

    expect(res.newRows[0]).toEqual({ a: 'A0', b: 'B0' });
    expect(res.newRows[1]).toEqual({ a: 'A1', b: 'B1' });
    expect(res.newRows[2]).toEqual({ a: '', b: '' }); // не в таргете
    expect(res.affectedIndexes).toEqual([0, 1]);
    expect(res.firstAffectedColumn?.key).toBe('a');
    expect(res.aborted).toBe(false);
  });

  it('broadcast: одно значение тиражируется на все целевые строки', () => {
    const columns = [svc(), dcol('a')];
    const rows = [{ a: '' }, { a: '' }, { a: '' }];

    const res = applyValuesToRows({
      ...BASE,
      rows,
      columns,
      rowTargets: [0, 1, 2],
      colTargets: [1],
      getValue: () => 'X', // одинаково для всех смещений
    });

    expect(res.newRows.map((r) => r.a)).toEqual(['X', 'X', 'X']);
    expect(res.affectedIndexes).toEqual([0, 1, 2]);
  });

  it('не мутирует исходные строки (чистая функция)', () => {
    const columns = [svc(), dcol('a')];
    const original = { a: 'orig' };
    const rows = [original];

    const res = applyValuesToRows({
      ...BASE,
      rows,
      columns,
      rowTargets: [0],
      colTargets: [1],
      getValue: () => 'new',
    });

    expect(original.a).toBe('orig'); // исходный объект не тронут
    expect(res.newRows[0]).not.toBe(original); // новая ссылка
    expect(res.newRows[0]?.a).toBe('new');
  });
});

describe('applyValuesToRows — служебные и readonly ячейки', () => {
  it('служебная колонка пропускается', () => {
    const columns = [svc(), dcol('a')];
    const rows = [{ a: '' }];

    const res = applyValuesToRows({
      ...BASE,
      rows,
      columns,
      rowTargets: [0],
      colTargets: [0, 1], // 0 — служебная
      getValue: () => 'V',
    });

    expect(res.newRows[0]).toEqual({ a: 'V' });
    expect(res.newRows[0]).not.toHaveProperty('svc');
  });

  it('readonlyBehavior "skip": readonly-колонка пропущена, editable — записана', () => {
    const columns = [svc(), dcol('a', true), dcol('ro', false)];
    const rows = [{ a: '', ro: 'keep' }];

    const res = applyValuesToRows({
      ...BASE,
      rows,
      columns,
      rowTargets: [0],
      colTargets: [1, 2],
      getValue: () => 'V',
    });

    expect(res.newRows[0]).toEqual({ a: 'V', ro: 'keep' });
    expect(res.affectedIndexes).toEqual([0]);
    expect(res.aborted).toBe(false);
  });

  it('readonlyBehavior "abort": readonly в зоне отменяет всю операцию', () => {
    const columns = [svc(), dcol('a', true), dcol('ro', false)];
    const rows = [{ a: '', ro: 'keep' }];

    const res = applyValuesToRows({
      ...BASE,
      readonlyBehavior: 'abort',
      rows,
      columns,
      rowTargets: [0],
      colTargets: [1, 2],
      getValue: () => 'V',
    });

    expect(res.aborted).toBe(true);
    expect(res.affectedIndexes).toEqual([]);
    expect(res.newRows[0]).toEqual({ a: '', ro: 'keep' }); // ничего не записано
  });
});

describe('applyValuesToRows — валидация type-check', () => {
  it('невалидное для числовой колонки значение пропускается и попадает в skippedByValidation', () => {
    const columns = [svc(), numCol('n')];
    const rows = [{ n: 'orig' }];

    const res = applyValuesToRows({
      ...BASE,
      validation: 'type-check',
      rows,
      columns,
      rowTargets: [0],
      colTargets: [1],
      getValue: () => 'abc', // не число
    });

    expect(res.affectedIndexes).toEqual([]);
    expect(res.newRows[0]?.n).toBe('orig');
    expect(res.skippedByValidation).toHaveLength(1);
    expect(res.skippedByValidation[0]).toMatchObject({
      col: 1,
      row: 0,
      value: 'abc',
      columnKey: 'n',
    });
  });

  it('валидное число нормализуется (разделители → number)', () => {
    const columns = [svc(), numCol('n')];
    const rows = [{ n: 0 }];

    const res = applyValuesToRows({
      ...BASE,
      validation: 'type-check',
      rows,
      columns,
      rowTargets: [0],
      colTargets: [1],
      getValue: () => '1 234,56',
    });

    expect(res.newRows[0]?.n).toBe(1234.56);
    expect(res.skippedByValidation).toHaveLength(0);
  });
});

describe('applyValuesToRows — fill handle (source range)', () => {
  it('ячейки внутри source не перезаписываются (они источник)', () => {
    const columns = [svc(), dcol('a')];
    const rows = [{ a: 'src' }, { a: '' }];

    const res = applyValuesToRows({
      ...BASE,
      rows,
      columns,
      rowTargets: [0, 1],
      colTargets: [1],
      getValue: () => 'F',
      // source = ячейка (col 1, row 0) — исходная, её не трогаем
      source: { x: 1, y: 0, width: 1, height: 1 },
    });

    expect(res.newRows[0]?.a).toBe('src'); // внутри source — пропущена
    expect(res.newRows[1]?.a).toBe('F'); // ниже source — заполнена
    expect(res.affectedIndexes).toEqual([1]);
  });
});
