import { describe, expect, it } from 'vitest';

import type { GlideThemeForRender } from '../../../../theming/types';
import { CellCanvasRoot } from '../../cells/CellCanvasRoot';
import type { CanvasContainer } from '../../core/CanvasContainer';
import { DrawBatcher } from '../../core/DrawBatcher';
import type { CanvasText } from '../../primitives/CanvasText';
import { Canvas, buildCanvasTree } from '../index';

const CHAR_WIDTH = 7;
const CELL_WIDTH = 480;
const theme = {
  baseFontStyle: '12px',
  fontFamily: 'sans-serif',
} as unknown as GlideThemeForRender;
const ctx = {
  font: '',
  measureText: (text: string) => ({ width: text.length * CHAR_WIDTH }),
} as unknown as CanvasRenderingContext2D;

const LONG =
  'Подробное описание задачи: что нужно сделать, кого позвать на ревью и какие риски учесть до релиза.';
const TITLE =
  'Задача 14: согласовать макет и уточнить требования согласовать макет и уточнить требования';

const build = (element: React.ReactElement) =>
  buildCanvasTree({ element, idPrefix: 't', theme }) as CanvasContainer;

/** Раскладка как при отрисовке ячейки: корень получает прямоугольник ячейки */
const layoutAsPaint = (element: React.ReactElement, height = 200) => {
  const root = build(element);
  root.rect.width = CELL_WIDTH;
  root.rect.height = height;
  root.performLayout(ctx);
  return root;
};

/** Сколько строк текст нарисует при текущей раскладке */
const linesOf = (node: unknown) => {
  const batcher = new DrawBatcher();
  (node as CanvasText).onPaint(batcher, ctx);
  return (
    batcher as unknown as { commands: { type: string }[] }
  ).commands.filter((command) => command.type.startsWith('fillText')).length;
};

const card = (description: string) => (
  <Canvas.Container direction="column" gap={6} padding={{ left: 8, right: 8 }}>
    <Canvas.Container
      direction="row"
      alignItems="center"
      gap={8}
      style={{ width: '100%' }}
    >
      <Canvas.Text wordWrap style={{ flexGrow: 1, flexShrink: 1 }}>
        {TITLE}
      </Canvas.Text>
      <Canvas.Container style={{ width: 50, height: 16, flexShrink: 0 }} />
    </Canvas.Container>
    <Canvas.Text wordWrap>{description}</Canvas.Text>
  </Canvas.Container>
);

describe('Раскладка колонки', () => {
  it('длинный текст в колонке не раздвигает её: растянутые соседи получают ширину контейнера', () => {
    const root = layoutAsPaint(card(LONG));
    const [titleRow, description] = root.children;
    const [title, badge] = titleRow!.children;

    expect(root.rect.width).toBe(CELL_WIDTH);
    expect(titleRow!.rect.width).toBe(CELL_WIDTH - 16);
    expect(description!.rect.width).toBe(CELL_WIDTH - 16);
    expect(linesOf(description)).toBeGreaterThan(1);
    expect(linesOf(title)).toBeGreaterThan(1);
    expect(badge!.rect.x + badge!.rect.width).toBeLessThanOrEqual(
      CELL_WIDTH - 8,
    );
  });

  it('раскладка не зависит от длины соседнего текста', () => {
    const short = layoutAsPaint(card('Короткое описание'));
    const long = layoutAsPaint(card(LONG));

    expect(long.children[0]!.rect.width).toBe(short.children[0]!.rect.width);
    expect(linesOf(long.children[0]!.children[0])).toBe(
      linesOf(short.children[0]!.children[0]),
    );
  });

  it('высота строки по содержимому (measureHeight) учитывает перенос и совпадает с отрисовкой', () => {
    const element = card(LONG);
    const measured = new CellCanvasRoot(build(element), 'x').measureHeight(
      ctx,
      CELL_WIDTH,
    );
    const painted = layoutAsPaint(element, measured);

    const contentBottom = Math.max(
      ...painted.children.map((child) => child.rect.y + child.rect.height),
    );
    expect(linesOf(painted.children[1])).toBeGreaterThan(1);
    expect(measured).toBeCloseTo(contentBottom, 5);
  });

  it('колонка без заданной высоты растёт под перенесённый текст и не съедает отступы', () => {
    const row = (text: string) => (
      <Canvas.Container direction="row" style={{ width: '100%' }}>
        <Canvas.Text wordWrap style={{ flexGrow: 1, flexShrink: 1 }}>
          {text}
        </Canvas.Text>
      </Canvas.Container>
    );
    const root = layoutAsPaint(
      <Canvas.Container direction="column" gap={6} style={{ width: '100%' }}>
        {row(TITLE)}
        {row(LONG)}
      </Canvas.Container>,
      0,
    );
    const [first, second] = root.children;

    expect(linesOf(first!.children[0])).toBeGreaterThan(1);
    expect(second!.rect.y).toBeCloseTo(
      first!.rect.y + first!.rect.height + 6,
      5,
    );
    expect(root.rect.height).toBeCloseTo(
      second!.rect.y + second!.rect.height,
      5,
    );
  });

  it('элементы с переносом (wrap) переходят на новую строку, и высота ячейки это учитывает', () => {
    const element = (
      <Canvas.Container direction="column" style={{ width: '100%' }}>
        <Canvas.Container direction="row" gap={8} style={{ width: '100%' }}>
          <Canvas.Container
            wrap="wrap"
            gap={6}
            style={{ flexGrow: 1, flexShrink: 1 }}
          >
            {Array.from({ length: 8 }, (_, index) => (
              <Canvas.Container key={index} style={{ width: 80, height: 16 }} />
            ))}
          </Canvas.Container>
          <Canvas.Container style={{ width: 70, height: 24, flexShrink: 0 }} />
        </Canvas.Container>
      </Canvas.Container>
    );
    const measured = new CellCanvasRoot(build(element), 'x').measureHeight(
      ctx,
      CELL_WIDTH,
    );
    const painted = layoutAsPaint(element, measured);
    const tags = painted.children[0]!.children[0]!;
    const lineTops = new Set(tags.children.map((tag) => tag.rect.y));

    expect(lineTops.size).toBeGreaterThan(1);
    expect(tags.rect.x + tags.rect.width).toBeLessThanOrEqual(
      CELL_WIDTH - 70 - 8,
    );
    expect(measured).toBeGreaterThanOrEqual(tags.rect.y + tags.rect.height);
  });

  it('контейнер с числовой шириной не растёт под широкого ребёнка', () => {
    const root = layoutAsPaint(
      <Canvas.Container
        direction="column"
        alignItems="flex-start"
        style={{ width: 200 }}
      >
        <Canvas.Container style={{ width: 300, height: 10 }} />
      </Canvas.Container>,
    );

    expect(root.rect.width).toBe(200);
  });

  it('колонка без заданной ширины по-прежнему подстраивается под самого широкого ребёнка', () => {
    const root = build(
      <Canvas.Container direction="column" alignItems="flex-start">
        <Canvas.Container style={{ width: 120, height: 10 }} />
        <Canvas.Container style={{ width: 60, height: 10 }} />
      </Canvas.Container>,
    );
    root.performLayout(ctx);

    expect(root.rect.width).toBe(120);
  });

  it('высота строки по-прежнему растёт под перенесённый текст', () => {
    const root = layoutAsPaint(
      <Canvas.Container direction="row" style={{ width: '100%' }}>
        <Canvas.Text wordWrap style={{ flexGrow: 1, flexShrink: 1 }}>
          {LONG}
        </Canvas.Text>
      </Canvas.Container>,
      0,
    );

    expect(linesOf(root.children[0])).toBeGreaterThan(1);
    expect(root.rect.height).toBeGreaterThanOrEqual(
      root.children[0]!.rect.height,
    );
  });

  it('перенесённый текст по центру ряда: высота ряда не растёт на сдвиг выравнивания', () => {
    const height = 400;
    const root = build(
      <Canvas.Container alignItems="center" padding={{ left: 8, right: 8 }}>
        <Canvas.Text wordWrap>{LONG.repeat(4)}</Canvas.Text>
      </Canvas.Container>,
    );
    // Как при отрисовке ячейки: размер корню задаёт ячейка
    root.style = { width: CELL_WIDTH, height };
    root.rect.width = CELL_WIDTH;
    root.rect.height = height;
    root.performLayout(ctx);
    const text = root.children[0]!;

    expect(text.rect.height).toBeLessThan(height);
    expect(root.rect.height).toBe(height);
    expect(text.rect.y).toBeCloseTo((height - text.rect.height) / 2);
  });
});
