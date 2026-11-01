import { describe, expect, it } from 'vitest';

import { formatCellValue } from './formatCellContent';
import { getAlignment } from './getAlignment';

describe('contentFormat только с выравниванием', () => {
  it('значение выводится как есть', () => {
    expect(formatCellValue(1234.5, { alignContent: 'center' })).toBe('1234.5');
    expect(formatCellValue('текст', { alignContent: 'center' })).toBe('текст');
  });

  it('выравнивание берётся из alignContent', () => {
    expect(getAlignment({ alignContent: 'center' })).toBe('center');
    expect(getAlignment({ type: 'number', alignContent: 'left' })).toBe('left');
  });

  it('без alignContent: число вправо, остальное влево', () => {
    expect(getAlignment({ type: 'number' })).toBe('right');
    expect(getAlignment({})).toBe('left');
  });
});
