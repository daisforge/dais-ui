import { describe, expect, it } from 'vitest';

import { isSelectEditingCell } from '../withSelectIcon';

describe('isSelectEditingCell', () => {
  const customEditor = () => null;

  it('встроенный select — шеврон есть', () => {
    expect(
      isSelectEditingCell({
        component: 'select',
        options: { type: 'constant', options: [] },
      }),
    ).toBe(true);
  });

  it('кастомный редактор с showSelectIcon: true — шеврон есть', () => {
    expect(
      isSelectEditingCell({ component: customEditor, showSelectIcon: true }),
    ).toBe(true);
  });

  it('кастомный редактор без showSelectIcon — шеврона нет', () => {
    expect(isSelectEditingCell({ component: customEditor })).toBe(false);
    expect(
      isSelectEditingCell({ component: customEditor, showSelectIcon: false }),
    ).toBe(false);
  });

  it('showSelectIcon у инпутов игнорируется', () => {
    expect(
      isSelectEditingCell({ component: 'inputString', showSelectIcon: true }),
    ).toBe(false);
  });

  it('нет editingCell — шеврона нет', () => {
    expect(isSelectEditingCell(undefined)).toBe(false);
    expect(isSelectEditingCell(null)).toBe(false);
  });
});
