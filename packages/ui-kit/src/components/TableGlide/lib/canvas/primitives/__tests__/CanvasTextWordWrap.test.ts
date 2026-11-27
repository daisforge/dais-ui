import { split } from 'canvas-hypertxt';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { DrawBatcher } from '../../core/DrawBatcher';
import { CanvasText, invalidateTextCache } from '../CanvasText';
import { splitGraphemes } from '../../utils/textOverflow';

vi.mock('canvas-hypertxt', async (importOriginal) => {
  const original = await importOriginal<typeof import('canvas-hypertxt')>();
  return { ...original, split: vi.fn(original.split) };
});

// Латиница в верхнем регистре и цифры шире остальных символов, как в реальных шрифтах
const WIDE_CHAR_WIDTH = 8;
const CHAR_WIDTH = 5;
const WIDE_CHAR = /[A-Z0-9]/;
const LINE_HEIGHT = 20;
const WIDTHS = [115, 150, 180, 215, 260];
const TEXT = '[Риск-решения ГРС] Контроль кредитного риска по глобальным рынка';

const FAMILY = '👩‍👩‍👦‍👦';
const WIDEST_GLYPH = '﷽';
// Узкие и широкие видимые символы; составной эмодзи — один символ
const GRAPHEME_WIDTHS: Record<string, number> = {
  i: 3,
  [FAMILY]: 16,
  [WIDEST_GLYPH]: 40,
};

const graphemeWidth = (grapheme: string) =>
  GRAPHEME_WIDTHS[grapheme] ??
  (WIDE_CHAR.test(grapheme) ? WIDE_CHAR_WIDTH : CHAR_WIDTH);

const measureWidth = (text: string) => {
  let sum = 0;
  if (text.includes('‍')) {
    for (const grapheme of splitGraphemes(text)) sum += graphemeWidth(grapheme);
    return sum;
  }
  for (const char of text) sum += graphemeWidth(char);
  return sum;
};

const ctx = {
  font: '',
  measureText: (text: string) => ({ width: measureWidth(text) }),
} as unknown as CanvasRenderingContext2D;

const createText = (text: string, width: number) => {
  const node = new CanvasText('text', text, {
    font: '400 13px Test',
    lineHeightPx: LINE_HEIGHT,
    wordWrap: true,
  });
  node.rect.width = width;
  node.measure(ctx);
  return node;
};

const paintedLines = (node: CanvasText) => {
  const batcher = new DrawBatcher();
  node.onPaint(batcher, ctx);
  return (
    batcher as unknown as { commands: { type: string; text?: string }[] }
  ).commands
    .filter((command) => command.type.startsWith('fillText'))
    .map((command) => command.text ?? '');
};

const expectWrapped = (node: CanvasText, width: number) => {
  const lines = paintedLines(node);

  expect(lines.length).toBeGreaterThan(1);
  lines.forEach((line) => {
    expect(measureWidth(line)).toBeLessThanOrEqual(width);
  });
  expect(node.rect.height).toBe(lines.length * LINE_HEIGHT);
  return lines;
};

/**
 * Другая колонка с тем же шрифтом: коды из заглавных букв и цифр. Завышают
 * среднюю ширину символа в canvas-hypertxt, и он отдаёт абзац одной строкой —
 * так включается резервный перенос.
 */
const measureWideCodes = () => {
  for (let i = 0; i < 20; i += 1) {
    createText(`S-ZEUSNT-${1000 + i} S-ZEUSNT-${2000 + i}`, 80);
  }
};

describe('CanvasText: wordWrap', () => {
  beforeEach(() => {
    invalidateTextCache();
    vi.mocked(split).mockClear();
  });

  it.each(WIDTHS)(
    'пустая ячейка с переносом не ломает перенос следующих (%i)',
    (width) => {
      createText('', 200);

      const lines = expectWrapped(createText(TEXT, width), width);

      expect(lines.join(' ')).toBe(TEXT);
    },
  );

  it('пустой абзац не уходит в canvas-hypertxt', () => {
    createText('', 200);
    createText(`Первая строка\n\n${TEXT}\n`, 215);

    expect(vi.mocked(split).mock.calls.map((call) => call[1])).not.toContain(
      '',
    );
  });

  it('пустые строки внутри текста сохраняются', () => {
    const lines = paintedLines(createText(`Первая\n\nВторая`, 215));

    expect(lines).toEqual(['Первая', '', 'Вторая']);
  });

  it.each(WIDTHS)(
    'после текстов с широкими символами строки не шире места (%i)',
    (width) => {
      measureWideCodes();

      const lines = expectWrapped(createText(TEXT, width), width);

      expect(lines.join(' ')).toBe(TEXT);
    },
  );

  it('слово шире места делится по символам', () => {
    createText('', 200);

    const lines = expectWrapped(createText('Сверхдлинноеслово', 40), 40);

    expect(lines.join('')).toBe('Сверхдлинноеслово');
  });

  it('короткий текст остаётся одной строкой', () => {
    createText('', 200);

    expect(paintedLines(createText('Короткий', 215))).toEqual(['Короткий']);
  });

  it('символ шире ячейки не вешает перенос и занимает строку целиком', () => {
    const lines = paintedLines(createText(WIDEST_GLYPH.repeat(2), 30));

    expect(lines).toEqual([WIDEST_GLYPH, WIDEST_GLYPH]);
  });

  describe('резервный перенос', () => {
    beforeEach(() => {
      measureWideCodes();
    });

    it('не разрывает составной эмодзи между строками', () => {
      const text = `${'i'.repeat(11)}${FAMILY.repeat(3)}`;

      const lines = paintedLines(createText(text, 48));

      expect(lines).toEqual(['i'.repeat(11), FAMILY.repeat(3)]);
    });

    it('сохраняет начальные пробелы первой строки', () => {
      const lines = expectWrapped(createText(`    ${'i'.repeat(20)}`, 30), 30);

      // 4 пробела по 5 px и три «i» по 3 px — 29 px из 30
      expect(lines[0]).toBe('    iii');
      expect(lines.join('')).toBe(`    ${'i'.repeat(20)}`);
    });
  });
});
