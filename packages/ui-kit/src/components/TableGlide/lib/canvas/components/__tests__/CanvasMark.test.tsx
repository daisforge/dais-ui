import { describe, expect, it } from 'vitest';

import type { GlideThemeForRender } from '../../../../theming/types';
import type { CanvasBadge } from '../../primitives/CanvasBadge';
import { CanvasText } from '../../primitives/CanvasText';
import { Canvas, buildCanvasTree } from '../index';

const theme = {
  baseFontStyle: '12px',
  fontFamily: 'sans-serif',
} as unknown as GlideThemeForRender;

const build = (element: React.ReactElement) =>
  buildCanvasTree({ element, idPrefix: 't', theme }) as CanvasText;

describe('Canvas.Mark', () => {
  it('фрагмент внутри Canvas.Text становится диапазоном по исходному тексту', () => {
    const node = build(
      <Canvas.Text>
        до <Canvas.Mark color="yellow">фрагмент</Canvas.Mark> после
      </Canvas.Text>,
    );

    expect(node.text).toBe('до фрагмент после');
    expect(node.marks).toEqual([{ start: 3, end: 11, color: 'yellow' }]);
  });

  it('несколько фрагментов', () => {
    const node = build(
      <Canvas.Text>
        {'a'}
        <Canvas.Mark color="red">b</Canvas.Mark>
        {'c'}
        <Canvas.Mark color="blue">d</Canvas.Mark>
      </Canvas.Text>,
    );

    expect(node.text).toBe('abcd');
    expect(node.marks).toEqual([
      { start: 1, end: 2, color: 'red' },
      { start: 3, end: 4, color: 'blue' },
    ]);
  });

  it('без Canvas.Mark подсветки нет', () => {
    expect(
      build(<Canvas.Text>просто текст</Canvas.Text>).marks,
    ).toBeUndefined();
  });
});

describe('Canvas.Mark во фрагментах', () => {
  it('фрагмент React внутри Canvas.Text разворачивается, а Mark в нём подсвечивается', () => {
    const node = build(
      <Canvas.Text>
        <>
          до <Canvas.Mark color="yellow">фрагмент</Canvas.Mark> после
        </>
      </Canvas.Text>,
    );

    expect(node.text).toBe('до фрагмент после');
    expect(node.marks).toEqual([{ start: 3, end: 11, color: 'yellow' }]);
  });
});

describe('Canvas.Mark в Canvas.Link', () => {
  it('фрагмент ссылки подсвечивается так же, как в тексте', () => {
    const node = build(
      <Canvas.Link>
        до <Canvas.Mark color="yellow">фрагмент</Canvas.Mark>
      </Canvas.Link>,
    );

    expect(node.text).toBe('до фрагмент');
    expect(node.marks).toEqual([{ start: 3, end: 11, color: 'yellow' }]);
  });
});

describe('Canvas.Mark в Canvas.Badge', () => {
  const buildBadge = (element: React.ReactElement) =>
    buildCanvasTree({ element, idPrefix: 't', theme }) as CanvasBadge;

  it('фрагмент в children бейджа подсвечивается', () => {
    const node = buildBadge(
      <Canvas.Badge>
        Трайб <Canvas.Mark color="yellow">вклад</Canvas.Mark>ов
      </Canvas.Badge>,
    );

    expect(node.text).toBe('Трайб вкладов');
    expect(node.marks).toEqual([{ start: 6, end: 11, color: 'yellow' }]);
  });

  it('разметка в text работает так же, как children', () => {
    const node = buildBadge(
      <Canvas.Badge
        text={
          <>
            Трайб <Canvas.Mark color="yellow">вклад</Canvas.Mark>ов
          </>
        }
      />,
    );

    expect(node.text).toBe('Трайб вкладов');
    expect(node.marks).toEqual([{ start: 6, end: 11, color: 'yellow' }]);
  });

  it('children приоритетнее text; строка в text — без подсветки', () => {
    expect(
      buildBadge(<Canvas.Badge text="из text">из children</Canvas.Badge>).text,
    ).toBe('из children');
    expect(buildBadge(<Canvas.Badge text="строка" />).marks).toBeUndefined();
  });
});
