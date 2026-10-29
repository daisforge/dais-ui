import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getTheme } from '../../../../theming';
import { getIconSprite, preloadIconSprites } from '../../cells/iconSprites';
import { buildCanvasTree, Canvas } from '../../components';
import { DrawBatcher } from '../../core/DrawBatcher';
import { type BadgeSize, CanvasBadge } from '../CanvasBadge';

vi.mock('../../cells/iconSprites', async (importOriginal) => ({
  ...(await importOriginal<typeof import('../../cells/iconSprites')>()),
  preloadIconSprites: vi.fn(),
  getIconSprite: vi.fn(() => document.createElement('canvas')),
}));

const ctx = {
  font: '',
  measureText: (text: string) => ({ width: text.length * 8 }),
} as CanvasRenderingContext2D;
const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" />';
const tableSizes = [
  { rowSize: 'small', size: 'xs', height: 16, iconSize: 10 },
  { rowSize: 'medium', size: 'm', height: 24, iconSize: 14 },
  { rowSize: 'big', size: 'l', height: 28, iconSize: 16 },
] as const;
const explicitSizes = [
  { size: 'xs', height: 16, iconSize: 10 },
  { size: 's', height: 20, iconSize: 12 },
  { size: 'm', height: 24, iconSize: 14 },
  { size: 'l', height: 28, iconSize: 16 },
] as const;

describe('Canvas.Badge: размер таблицы', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const checkBadge = (
    rowSize: (typeof tableSizes)[number]['rowSize'],
    expected: { size: BadgeSize; height: number; iconSize: number },
    explicitSize?: BadgeSize,
  ) => {
    const badge = buildCanvasTree({
      element: (
        <Canvas.Badge
          text="Label"
          leftIcon={icon}
          rightIcon={icon}
          size={explicitSize}
        />
      ),
      theme: { ...getTheme(rowSize), baseFontFull: '14px sans-serif' },
    }) as CanvasBadge;
    badge.measure(ctx);
    expect(badge.size).toBe(expected.size);
    expect(badge.rect.height).toBe(expected.height);
    expect(preloadIconSprites).toHaveBeenCalledTimes(1);
    expect(preloadIconSprites).toHaveBeenCalledWith([icon, icon], {
      size: expected.iconSize,
    });

    const batcher = new DrawBatcher();
    const background = vi.spyOn(batcher, 'roundedRect');
    badge.onPaint(batcher, ctx);
    expect(background.mock.calls[0]?.[3]).toBe(expected.height);
    expect(getIconSprite).toHaveBeenCalledTimes(2);
    for (const call of vi.mocked(getIconSprite).mock.calls) {
      expect(call[1]).toBe(expected.iconSize);
    }
  };

  it.each(tableSizes)(
    '$rowSize: высота $height px и согласованные иконки',
    (config) => {
      checkBadge(config.rowSize, config);
    },
  );

  describe.each(tableSizes)(
    'явный размер при rowSize=$rowSize',
    ({ rowSize }) => {
      it.each(explicitSizes)('$size сохраняет высоту $height px', (config) => {
        checkBadge(rowSize, config, config.size);
      });
    },
  );

  it('без темы или rowSize сохраняет размер s (20 px)', () => {
    const themeWithoutRowSize = getTheme();
    Reflect.deleteProperty(themeWithoutRowSize, 'rowSize');
    for (const theme of [undefined, themeWithoutRowSize]) {
      const badge = new CanvasBadge('badge', 'Label', { theme });
      badge.measure(ctx);
      expect(badge.size).toBe('s');
      expect(badge.rect.height).toBe(20);
    }
  });

  it('при смене темы обновляет размер для того же JSX', () => {
    const element = <Canvas.Badge text="Label" />;
    const heights = [...tableSizes, tableSizes[0]].map(({ rowSize }) => {
      const badge = buildCanvasTree({
        element,
        theme: { ...getTheme(rowSize), baseFontFull: '14px sans-serif' },
      });
      badge.measure(ctx);
      return badge.rect.height;
    });
    expect(heights).toEqual([16, 24, 28, 16]);
  });
});
