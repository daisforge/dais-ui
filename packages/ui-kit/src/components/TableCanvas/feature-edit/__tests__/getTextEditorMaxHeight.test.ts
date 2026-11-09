import { describe, expect, it } from 'vitest';

import { getTextEditorMaxHeight } from '../getTextEditorMaxHeight';

const base = {
  cellHeight: 33,
  editorTop: 100,
  windowHeight: 1000,
};

describe('getTextEditorMaxHeight', () => {
  it('четверть высоты окна', () => {
    expect(getTextEditorMaxHeight(base)).toBe(250);
  });

  it('у низа окна меньше четверти: не выходит за окно', () => {
    expect(getTextEditorMaxHeight({ ...base, editorTop: 890 })).toBe(100);
  });

  it('блок, видимый целиком, можно заполнить до низа, даже выше четверти окна', () => {
    expect(getTextEditorMaxHeight({ ...base, blockBottom: 700 })).toBe(600);
  });

  it('низкий блок не уменьшает четверть окна', () => {
    expect(getTextEditorMaxHeight({ ...base, blockBottom: 200 })).toBe(250);
  });

  it('блок ниже окна: не выходит за окно', () => {
    expect(getTextEditorMaxHeight({ ...base, blockBottom: 1500 })).toBe(890);
  });

  it('не меньше самой ячейки', () => {
    expect(getTextEditorMaxHeight({ ...base, windowHeight: 100 })).toBe(33);
    expect(getTextEditorMaxHeight({ ...base, editorTop: 990 })).toBe(33);
  });
});
