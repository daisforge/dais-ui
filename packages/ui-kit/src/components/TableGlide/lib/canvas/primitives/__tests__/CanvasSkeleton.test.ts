import { describe, expect, it } from 'vitest';

import { getTokens } from '../../../../tokens';
import type { DrawBatcher } from '../../core/DrawBatcher';
import { CanvasSkeleton } from '../CanvasSkeleton';

// Скелетон красится токенами своей темы: в тёмной теме градиент не
// остаётся светлым.

type Stop = { offset: number; color: string };

const paintStops = (skeleton: CanvasSkeleton): Stop[] => {
  let stops: Stop[] = [];
  const batcher = {
    getAnimationContext: () => undefined,
    linearGradientRect: (
      _x: number,
      _y: number,
      _w: number,
      _h: number,
      _r: number,
      gradientStops: Stop[]
    ) => {
      stops = gradientStops;
    },
  } as unknown as DrawBatcher;
  skeleton.style = { width: 100, height: 20 };
  skeleton.measure({} as CanvasRenderingContext2D);
  skeleton.onPaint(batcher, {} as CanvasRenderingContext2D);
  return stops;
};

describe('CanvasSkeleton', () => {
  it('градиент идёт от surface-transparent-secondary к surface-transparent-tertiary темы', () => {
    const tokens = getTokens('dark');
    const stops = paintStops(
      new CanvasSkeleton('s', { theme: { tokens } as never })
    );
    expect(stops[0]?.color).toBe(tokens.surfaceTransparentSecondary);
    expect(stops[1]?.color).toBe(tokens.surfaceTransparentTertiary);
    expect(stops[stops.length - 1]?.color).toBe(
      tokens.surfaceTransparentSecondary
    );
  });

  it('контрастный вариант берёт surface-transparent-deep', () => {
    const tokens = getTokens('light');
    const stops = paintStops(
      new CanvasSkeleton('s', { lighter: true, theme: { tokens } as never })
    );
    expect(stops[1]?.color).toBe(tokens.surfaceTransparentDeep);
  });

  it('без темы берёт светлую тему', () => {
    const stops = paintStops(new CanvasSkeleton('s'));
    expect(stops[0]?.color).toBe(
      getTokens('light').surfaceTransparentSecondary
    );
  });
});
