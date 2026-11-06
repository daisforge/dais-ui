import { describe, expect, it } from 'vitest';

import { getTextEditorMaxHeight } from '../getTextEditorMaxHeight';

const base = {
  cellHeight: 33,
  tableHeight: 800,
  editorTop: 100,
  windowHeight: 1000,
};

describe('getTextEditorMaxHeight', () => {
  it('четверть высоты таблицы', () => {
    expect(getTextEditorMaxHeight(base)).toBe(200);
  });

  it('у низа окна меньше четверти: не выходит за окно', () => {
    expect(getTextEditorMaxHeight({ ...base, editorTop: 890 })).toBe(100);
  });

  it('не меньше самой ячейки', () => {
    expect(getTextEditorMaxHeight({ ...base, tableHeight: 100 })).toBe(33);
    expect(getTextEditorMaxHeight({ ...base, editorTop: 990 })).toBe(33);
  });

  it('таблица неизвестна: ограничивает только окно', () => {
    expect(getTextEditorMaxHeight({ ...base, tableHeight: undefined })).toBe(
      890,
    );
  });
});
