import { describe, expect, it } from 'vitest';

import { CellCanvasRoot } from '../../cells/CellCanvasRoot';
import { CanvasContainer } from '../../core/CanvasContainer';
import { DrawBatcher } from '../../core/DrawBatcher';
import { CanvasBadge } from '../CanvasBadge';
import { CanvasText } from '../CanvasText';

const CHAR_WIDTH = 10;

const createCtx = () => {
  const ctx = {
    font: '',
    measureText: (text: string) => ({ width: text.length * CHAR_WIDTH }),
  };
  return ctx as unknown as CanvasRenderingContext2D;
};

const createText = (
  text: string,
  width: number,
  marks?: CanvasText['marks'],
) => {
  const node = new CanvasText('t', text, {
    font: '10px sans-serif',
    lineHeightPx: 20,
    wordWrap: true,
    marks,
  });
  node.style = { width };
  node.rect.width = width;
  return node;
};

type PaintCommand = {
  type: string;
  text?: string;
  x: number;
  y: number;
  width: number;
  fillStyle: string;
};

const paintCommands = (node: CanvasText, ctx: CanvasRenderingContext2D) => {
  const batcher = new DrawBatcher();
  node.onPaint(batcher, ctx);
  return (batcher as unknown as { commands: PaintCommand[] }).commands;
};

const paintedRects = (node: CanvasText, ctx: CanvasRenderingContext2D) =>
  paintCommands(node, ctx).filter((command) => command.type === 'fillRect');

const paintedLines = (node: CanvasText, ctx: CanvasRenderingContext2D) =>
  paintCommands(node, ctx)
    .filter((command) => command.type.startsWith('fillText'))
    .map((command) => command.text);

describe('CanvasText: перенос и подсветка', () => {
  it('без maxLines растёт на все строки переноса', () => {
    const ctx = createCtx();
    const node = createText('aaaa bbbb cccc dddd', 100);
    node.measure(ctx);

    expect(paintedLines(node, ctx)).toEqual(['aaaa bbbb', 'cccc dddd']);
    expect(node.rect.height).toBe(40);
  });

  it('фрагмент в начале второй строки рисуется от её левого края', () => {
    const ctx = createCtx();
    const node = createText('aaaa bbbb cccc dddd', 100, [
      { start: 10, end: 14, color: 'yellow' },
    ]);
    node.measure(ctx);

    const rects = paintedRects(node, ctx);

    expect(rects).toHaveLength(1);
    expect(rects[0]).toMatchObject({ x: 0, y: 20, width: 40 });
  });

  it('диапазон на двух строках рисуется отдельной пластиной на каждой', () => {
    const ctx = createCtx();
    const node = createText('aaaa bbbb cccc dddd', 100, [
      { start: 5, end: 14, color: 'yellow' },
    ]);
    node.measure(ctx);

    const rects = paintedRects(node, ctx);

    expect(rects).toHaveLength(2);
    expect(rects[0]).toMatchObject({ x: 50, width: 40, fillStyle: 'yellow' });
    expect(rects[1]).toMatchObject({ x: 0, width: 40 });
  });

  it('диапазон вне текста пластин не даёт', () => {
    const ctx = createCtx();
    const node = createText('aaaa bbbb', 200, [
      { start: 20, end: 25, color: 'yellow' },
    ]);
    node.measure(ctx);

    expect(paintedRects(node, ctx)).toHaveLength(0);
  });
});

describe('CanvasBadge: подсветка', () => {
  it('пластина под фрагментом рисуется до текста, по центру бейджа', () => {
    const ctx = createCtx();
    const badge = new CanvasBadge('b', 'aaaa bbbb', {
      size: 's',
      theme: { tokens: {} } as never,
      marks: [{ start: 5, end: 9, color: 'yellow' }],
    });
    badge.measure(ctx);
    const batcher = new DrawBatcher();
    badge.onPaint(batcher, ctx);
    const commands = (
      batcher as unknown as {
        commands: { type: string; x: number; width: number }[];
      }
    ).commands;
    const plateIndex = commands.findIndex(
      (command) => command.type === 'fillRect',
    );
    const textIndex = commands.findIndex(
      (command) => command.type === 'fillText',
    );

    expect(plateIndex).toBeGreaterThanOrEqual(0);
    expect(plateIndex).toBeLessThan(textIndex);
    // paddingX бейджа s — 6, ширина символа — 10
    expect(commands[plateIndex]).toMatchObject({ x: 6 + 50, width: 40 });
  });
});

describe('CellCanvasRoot.measureHeight', () => {
  const heightAt = (width: number) => {
    const container = new CanvasContainer('c', { direction: 'column' });
    const text = new CanvasText('t', 'aaaa bbbb cccc dddd', {
      font: '10px sans-serif',
      lineHeightPx: 20,
      wordWrap: true,
    });
    text.style = { width: '100%' };
    container.addChild(text);
    return new CellCanvasRoot(container).measureHeight(createCtx(), width);
  };

  it('высота ячейки с переносимым текстом зависит от ширины', () => {
    expect(heightAt(100)).toBe(40);
    expect(heightAt(400)).toBe(20);
  });

  it('текст без явной ширины в строке с отступами: высота учитывает перенос', () => {
    const container = new CanvasContainer('c', {
      direction: 'row',
      alignItems: 'center',
      padding: { left: 5, right: 5 },
    });
    const text = new CanvasText('t', 'aaaa bbbb cccc dddd', {
      font: '10px sans-serif',
      lineHeightPx: 20,
      wordWrap: true,
    });
    container.addChild(text);

    expect(new CellCanvasRoot(container).measureHeight(createCtx(), 110)).toBe(
      40,
    );
  });
});
