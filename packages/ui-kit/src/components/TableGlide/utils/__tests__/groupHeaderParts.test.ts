import { describe, expect, it } from 'vitest';

import { GroupHeaderParts } from '../groupHeaderParts';

describe('GroupHeaderParts', () => {
  it('клик находит canvas-часть группы по колонке', () => {
    const parts = new GroupHeaderParts<string>();
    parts.set('work', [0, 2], 'root');

    expect(parts.rootAt('work', 1)).toBe('root');
    expect(parts.rootAt('work', 3)).toBeUndefined();
    expect(parts.rootAt('other', 1)).toBeUndefined();
  });

  it('заголовок группы стал обычным — прежняя canvas-цель клика удаляется', () => {
    const parts = new GroupHeaderParts<string>();
    parts.set('work', [0, 2], 'button');

    parts.drop('work', [0, 2]);

    expect(parts.rootAt('work', 1)).toBeUndefined();
  });

  it('обычная отрисовка одной части не трогает закреплённую часть той же группы', () => {
    const parts = new GroupHeaderParts<string>();
    parts.set('work', [0, 1], 'frozen');
    parts.set('work', [2, 4], 'scrolled');

    parts.drop('work', [2, 4]);

    expect(parts.rootAt('work', 0)).toBe('frozen');
    expect(parts.rootAt('work', 3)).toBeUndefined();
  });

  it('новая часть заменяет перекрытую (перестановка колонок)', () => {
    const parts = new GroupHeaderParts<string>();
    parts.set('work', [0, 2], 'old');
    parts.set('work', [5, 6], 'frozen');

    parts.set('work', [1, 3], 'new');

    expect(parts.rootAt('work', 0)).toBeUndefined();
    expect(parts.rootAt('work', 2)).toBe('new');
    expect(parts.rootAt('work', 5)).toBe('frozen');
  });

  it('retain отбрасывает группы, которых больше нет в колонках', () => {
    const parts = new GroupHeaderParts<string>();
    parts.set('work', [0, 1], 'work');
    parts.set('gone', [2, 3], 'gone');

    parts.retain(new Set(['work']));

    expect(parts.rootAt('work', 0)).toBe('work');
    expect(parts.rootAt('gone', 2)).toBeUndefined();
  });
});
