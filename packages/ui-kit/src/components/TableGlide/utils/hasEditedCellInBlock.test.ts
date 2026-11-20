import { expect, it, vi } from 'vitest';

import { createBlockEditedLookup } from './hasEditedCellInBlock';

it('находит отметку покрытой ячейки по горизонтали и вертикали', () => {
  const rows = [1, 2];
  const cols = [
    { id: 'a' },
    { id: 'b' },
    { id: 'service', isServiceColumn: true },
  ];
  const edited = (row: number, key: string) => row === 2 && key === 'b';
  const predicate = vi.fn(edited);
  const lookup = createBlockEditedLookup(rows, cols, predicate);
  expect(lookup([1, 1], [0, 1])).toBe(true);
  predicate.mockClear();
  expect(lookup([1, 1], [0, 1])).toBe(true);
  expect(predicate).not.toHaveBeenCalled();
  expect(lookup([0, 1], [1, 1])).toBe(true);
  expect(lookup([0, 0], [0, 1])).toBe(false);
  expect(
    createBlockEditedLookup(
      rows,
      cols,
      (_, key) => key === 'service',
    )([0, 1], [0, 2]),
  ).toBe(false);
});
