import { describe, expect, it } from 'vitest';

import { resolveBorders } from '../resolveBorders';

describe('resolveBorders: линии сетки с учётом appearance.variant', () => {
  it('default: конфиг отдаётся как есть, той же ссылкой', () => {
    const borders = { vertical: true, getVerticalBorder: () => undefined };
    expect(resolveBorders('default', borders)).toBe(borders);
    expect(resolveBorders('default', undefined)).toBeUndefined();
  });

  it('clean без конфига: вертикали и горизонтали выключены', () => {
    expect(resolveBorders('clean', undefined)).toEqual({
      vertical: false,
      horizontal: false,
    });
  });

  it('clean: явный true возвращает линии', () => {
    expect(resolveBorders('clean', { vertical: true })).toEqual({
      vertical: true,
      horizontal: false,
    });
  });

  it('clean: undefined в конфиге не возвращает линии', () => {
    expect(resolveBorders('clean', { vertical: undefined })).toEqual({
      vertical: false,
      horizontal: false,
    });
  });

  it('clean: точечные колбэки передаются как есть', () => {
    const getCellBorder = () => undefined;
    expect(resolveBorders('clean', { getCellBorder })).toEqual({
      vertical: false,
      horizontal: false,
      getCellBorder,
    });
  });
});
