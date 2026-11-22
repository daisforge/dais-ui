import { describe, expect, it } from 'vitest';

import { mergeThemeOverrides } from '../mergeThemeOverrides';

describe('mergeThemeOverrides', () => {
  it('переопределять нечего — undefined, а не пустая тема', () => {
    expect(mergeThemeOverrides()).toBeUndefined();
    expect(mergeThemeOverrides(undefined, undefined)).toBeUndefined();
    expect(mergeThemeOverrides({}, undefined, {})).toBeUndefined();
  });

  it('следующая тема перекрывает предыдущую', () => {
    expect(
      mergeThemeOverrides({ bgCell: 'red', textDark: 'black' }, undefined, {
        bgCell: 'blue',
      }),
    ).toEqual({ bgCell: 'blue', textDark: 'black' });
  });

  it('не меняет переданные темы', () => {
    const column = { bgCell: 'red' };
    mergeThemeOverrides(column, { bgCell: 'blue' });
    expect(column).toEqual({ bgCell: 'red' });
  });
});
