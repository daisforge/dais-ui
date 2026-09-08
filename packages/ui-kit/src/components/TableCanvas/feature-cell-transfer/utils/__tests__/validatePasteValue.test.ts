import { describe, expect, it } from 'vitest';

import type { TransferColumnConfig } from '../../types';
import { normalizePasteValue, validatePasteValue } from '../validatePasteValue';

/** Конструктор колонки: component/options задают editingCell, contentFormat — формат. */
const col = (opts: {
  component?: string;
  options?: unknown;
  contentFormat?: unknown;
  readonly?: boolean;
}): TransferColumnConfig => {
  const { component, options, contentFormat, readonly } = opts;
  return {
    key: 'c',
    editingCell: readonly
      ? undefined
      : { component, ...(options ? { options } : {}) },
    contentFormat,
  } as unknown as TransferColumnConfig;
};

const NO_CTX = {};

// contentFormat вида `{ type: 'number', decimalSeparator: ',', thousandSeparator: ' ' }`
const numFormat = {
  type: 'number',
  decimalSeparator: ',',
  thousandSeparator: ' ',
} as const;

describe('validatePasteValue — readonly / прочие', () => {
  it('readonly-колонка (нет editingCell) → невалидно', () => {
    expect(validatePasteValue('x', col({ readonly: true }), NO_CTX)).toBe(
      false,
    );
  });

  it('inputString принимает любое значение', () => {
    const c = col({ component: 'inputString' });
    expect(validatePasteValue('что угодно', c, NO_CTX)).toBe(true);
    expect(validatePasteValue('', c, NO_CTX)).toBe(true);
  });
});

describe('validatePasteValue — числовые колонки', () => {
  it('inputNumber: целое/дробное валидно, текст и пусто — нет', () => {
    const c = col({ component: 'inputNumber' });
    expect(validatePasteValue('123', c, NO_CTX)).toBe(true);
    expect(validatePasteValue('12.5', c, NO_CTX)).toBe(true);
    expect(validatePasteValue('abc', c, NO_CTX)).toBe(false);
    expect(validatePasteValue('', c, NO_CTX)).toBe(false);
    expect(validatePasteValue('   ', c, NO_CTX)).toBe(false);
  });

  it('inputNumber с разделителями: "1 234,56" валидно, "1,2,3" — нет', () => {
    const c = col({ component: 'inputNumber', contentFormat: numFormat });
    // thousandSep=' ' убираем, decimalSep=',' → '.', итог 1234.56
    expect(validatePasteValue('1 234,56', c, NO_CTX)).toBe(true);
    // после замены единственной запятой останется '1.2,3' → NaN
    expect(validatePasteValue('1,2,3', c, NO_CTX)).toBe(false);
  });

  it('contentFormat "number" (строкой) валидирует как число', () => {
    const c = col({ component: 'inputNumber', contentFormat: 'number' });
    expect(validatePasteValue('42', c, NO_CTX)).toBe(true);
    expect(validatePasteValue('nope', c, NO_CTX)).toBe(false);
  });
});

describe('validatePasteValue — select (членство в опциях)', () => {
  const constantOptions = {
    type: 'constant',
    options: [
      { value: 'High', text: 'Высокий' },
      { value: 'Low', text: 'Низкий' },
    ],
  };

  it('значение из опций (по value или text) валидно, чужое — нет', () => {
    const c = col({ component: 'select', options: constantOptions });
    expect(validatePasteValue('High', c, NO_CTX)).toBe(true); // по value
    expect(validatePasteValue('Низкий', c, NO_CTX)).toBe(true); // по text
    expect(validatePasteValue('Unknown', c, NO_CTX)).toBe(false);
  });

  it('опции из rowContext (stateInRowContext) резолвятся из ctxs', () => {
    const c = col({
      component: 'select',
      options: {
        type: 'stateInRowContext',
        optionsKeyInRowContext: 'tribeOptions',
      },
    });
    const ctxs = {
      rowContextValue: {
        tribeOptions: [{ value: 'T1', text: 'Трайб 1' }],
      },
    } as never;
    expect(validatePasteValue('T1', c, ctxs)).toBe(true);
    expect(validatePasteValue('T2', c, ctxs)).toBe(false);
  });

  it('если опции достать не удалось — валидация не блокирует (true)', () => {
    const c = col({
      component: 'select',
      options: { type: 'stateInRowContext', optionsKeyInRowContext: 'missing' },
    });
    expect(validatePasteValue('что угодно', c, {} as never)).toBe(true);
  });
});

describe('normalizePasteValue', () => {
  it('числовая колонка: строка с разделителями → number', () => {
    const c = col({ component: 'inputNumber', contentFormat: numFormat });
    expect(normalizePasteValue('1 234,56', c)).toBe(1234.56);
  });

  it('числовая колонка: непарсящееся значение → исходная строка', () => {
    const c = col({ component: 'inputNumber' });
    expect(normalizePasteValue('abc', c)).toBe('abc');
  });

  it('нечисловая колонка (inputString) → значение как есть', () => {
    const c = col({ component: 'inputString' });
    expect(normalizePasteValue('123', c)).toBe('123');
  });

  it('select не нормализуется как число (остаётся строкой)', () => {
    const c = col({ component: 'select', contentFormat: 'number' });
    expect(normalizePasteValue('High', c)).toBe('High');
  });
});
