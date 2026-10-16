import { describe, expect, it } from 'vitest';

import { CanvasContainer } from '../../core/CanvasContainer';
import { getMinEllipsisWidth } from '../../utils/textOverflow';
import { CanvasRect } from '../CanvasRect';
import { CanvasText } from '../CanvasText';

// Ширина символа в поддельном контексте: каждый видимый символ по 10 px.
const CHAR_WIDTH = 10;
const FONT = 'bold 14px Test';

function createCtx() {
  const measured: string[] = [];
  const ctx = {
    font: '',
    measureText: (text: string) => {
      measured.push(text);
      return { width: Array.from(text).length * CHAR_WIDTH };
    },
  } as unknown as CanvasRenderingContext2D;
  return { ctx, measured };
}

function createEllipsisText(text: string, minWidthByContent: boolean) {
  return new CanvasText('text', text, {
    font: FONT,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidthByContent,
  });
}

describe('getMinEllipsisWidth', () => {
  it('считает ширину первой буквы с многоточием', () => {
    const { ctx } = createCtx();

    expect(getMinEllipsisWidth(ctx, 'Название', FONT, '…')).toBe(
      2 * CHAR_WIDTH,
    );
  });

  it('для пустой строки остаётся одно многоточие', () => {
    const { ctx } = createCtx();

    expect(getMinEllipsisWidth(ctx, '', FONT, '…')).toBe(CHAR_WIDTH);
  });

  it('эмодзи берётся целиком, а не половиной суррогатной пары', () => {
    const { ctx, measured } = createCtx();

    getMinEllipsisWidth(ctx, '👍 текст', FONT, '…');

    expect(measured).toContain('👍…');
  });
});

describe('CanvasText: minContentWidth', () => {
  it('выставляется только при включённом minWidthByContent', () => {
    const { ctx } = createCtx();
    const withMin = createEllipsisText('Название', true);
    const withoutMin = createEllipsisText('Название', false);

    withMin.measure(ctx);
    withoutMin.measure(ctx);

    expect(withMin.minContentWidth).toBe(2 * CHAR_WIDTH);
    expect(withoutMin.minContentWidth).toBeUndefined();
  });

  it('не выставляется без overflow hidden и ellipsis', () => {
    const { ctx } = createCtx();
    const text = new CanvasText('text', 'Название', {
      font: FONT,
      minWidthByContent: true,
    });

    text.measure(ctx);

    expect(text.minContentWidth).toBeUndefined();
  });

  it('не выставляется для пустого текста', () => {
    const { ctx } = createCtx();
    const text = createEllipsisText('', true);

    text.measure(ctx);

    expect(text.minContentWidth).toBeUndefined();
  });
});

// Раскладка в контейнере: текст сжимается, но не ниже первой буквы с
// многоточием, а явный style.minWidth важнее собственного минимума текста.
describe('CanvasContainer: minContentWidth текста в раскладке', () => {
  const CONTAINER_WIDTH = 60;
  const FIXED_WIDTH = 50;

  function layout(text: CanvasText) {
    const { ctx } = createCtx();
    const container = new CanvasContainer('root', { direction: 'row' });
    container.style = { width: CONTAINER_WIDTH, height: 24 };

    const fixed = new CanvasRect('fixed');
    fixed.rect.width = FIXED_WIDTH;
    fixed.rect.height = 24;
    fixed.style = { flexShrink: 0 };

    container.addChild(text);
    container.addChild(fixed);
    container.performLayout(ctx);
    return { text, fixed };
  }

  it('текст без минимума сжимается до остатка', () => {
    const { text } = layout(createEllipsisText('Название', false));

    expect(text.rect.width).toBe(CONTAINER_WIDTH - FIXED_WIDTH);
  });

  it('текст с minWidthByContent не сжимается ниже буквы с многоточием', () => {
    const { text, fixed } = layout(createEllipsisText('Название', true));

    expect(text.rect.width).toBe(2 * CHAR_WIDTH);
    expect(fixed.rect.width).toBe(FIXED_WIDTH);
  });

  it('явный style.minWidth важнее minContentWidth', () => {
    const text = createEllipsisText('Название', true);
    text.style = { minWidth: 35 };
    layout(text);

    expect(text.rect.width).toBe(35);
  });
});
