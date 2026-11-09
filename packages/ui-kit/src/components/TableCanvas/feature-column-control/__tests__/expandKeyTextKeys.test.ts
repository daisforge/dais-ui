import { describe, expect, it } from 'vitest';

import type { KeyTextMap } from '../../feature-key-text/types';
import { collapseKeyTextKeys, expandKeyTextKeys } from '../expandKeyTextKeys';

// Карта key/text содержит обе записи пары, как в useColsWithKeyTextMap:
// исходный ключ столбца совпадает с textKey.
const pair = { keyKey: 'name_key', textKey: 'name' };
const map: KeyTextMap = new Map([
  [pair.keyKey, pair],
  [pair.textKey, pair],
]);

describe('expandKeyTextKeys', () => {
  it('без key/text возвращает тот же массив', () => {
    const keys = ['a', 'name'];
    expect(expandKeyTextKeys(keys, map, false)).toBe(keys);
    expect(expandKeyTextKeys(keys, new Map(), true)).toBe(keys);
  });

  it('исходный ключ разворачивается в оба ключа пары', () => {
    expect(expandKeyTextKeys(['a', 'name'], map, true)).toEqual([
      'a',
      'name_key',
      'name',
    ]);
  });

  it('уже развёрнутая пара не удваивается и возвращается та же ссылка', () => {
    const keys = ['name_key', 'name', 'a'];
    expect(expandKeyTextKeys(keys, map, true)).toBe(keys);
  });

  it('повторы убираются', () => {
    expect(expandKeyTextKeys(['name', 'name'], map, true)).toEqual([
      'name_key',
      'name',
    ]);
    expect(expandKeyTextKeys(['a', 'a'], map, true)).toEqual(['a']);
  });
});

describe('collapseKeyTextKeys', () => {
  it('без key/text возвращает тот же массив', () => {
    const keys = ['a', 'name_key'];
    expect(collapseKeyTextKeys(keys, map, false)).toBe(keys);
    expect(collapseKeyTextKeys(keys, new Map(), true)).toBe(keys);
  });

  it('оба ключа пары сводятся к исходному ключу без повторов', () => {
    expect(collapseKeyTextKeys(['a', 'name_key', 'name'], map, true)).toEqual([
      'a',
      'name',
    ]);
  });

  it('один ключ пары тоже сводится к исходному', () => {
    expect(collapseKeyTextKeys(['name_key'], map, true)).toEqual(['name']);
  });
});
