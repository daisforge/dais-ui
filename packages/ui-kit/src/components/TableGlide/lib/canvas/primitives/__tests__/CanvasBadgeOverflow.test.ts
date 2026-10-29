import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { Theme } from '../../../../theming/types';
import { drawIcon } from '../../cells/buttons';
import { CanvasContainer } from '../../core/CanvasContainer';
import { DrawBatcher } from '../../core/DrawBatcher';
import { invalidateOverflowTextCache } from '../../utils/textOverflow';
import { CanvasBadge, type CanvasBadgeOptions } from '../CanvasBadge';

vi.mock('../../cells/buttons', () => ({ drawIcon: vi.fn() }));

const ctx = {
  font: '',
  measureText: (text: string) => ({ width: Array.from(text).length * 10 }),
} as CanvasRenderingContext2D;
const theme = { tokens: {} } as Theme;

function renderBadge(
  width: number,
  options: CanvasBadgeOptions = {},
  text = 'Long status',
) {
  const container = new CanvasContainer('cell', { padding: 8 });
  container.style.width = width;
  container.style.height = 48;
  const badge = new CanvasBadge('badge', text, { theme, ...options });
  container.addChild(badge);
  container.performLayout(ctx);
  const batcher = new DrawBatcher();
  const fillText = vi.spyOn(batcher, 'fillText');
  const clippedText = vi.spyOn(batcher, 'fillTextClipped');
  badge.onPaint(batcher, ctx);
  return { badge, clippedText, fillText, batcher, container };
}

beforeEach(() => {
  vi.clearAllMocks();
  invalidateOverflowTextCache();
});

describe('CanvasBadge overflow', () => {
  it.each(['xs', 's', 'm', 'l'] as const)(
    'сокращает текст в узкой колонке, size=%s',
    (size) => {
      const { badge, clippedText, fillText } = renderBadge(100, { size });
      const [text, x, , , , clip] = clippedText.mock.calls[0]!;

      expect(badge.rect.width).toBe(84);
      expect(text).toMatch(/…$/);
      expect(x).toBeGreaterThan(badge.rect.x);
      expect(clip.x + clip.width).toBeLessThan(badge.rect.x + badge.rect.width);
      expect(ctx.measureText(text).width).toBeLessThanOrEqual(clip.width);
      expect(fillText).not.toHaveBeenCalled();
    },
  );

  it('оставляет место под обе иконки', () => {
    const { badge, clippedText } = renderBadge(100, {
      leftIcon: '<svg/>',
      rightIcon: '<svg/>',
    });
    const [text, x, , , , clip] = clippedText.mock.calls[0]!;
    const [, , rightX, , iconSize] = vi.mocked(drawIcon).mock.calls[1]!;

    expect(text).toBe('Lo…');
    expect(x).toBe(badge.rect.x + 6 + 12 + 6);
    expect(clip.width).toBe(36);
    expect(rightX).toBe(x + ctx.measureText(text).width + 6);
    expect(rightX + iconSize).toBeLessThanOrEqual(
      badge.rect.x + badge.rect.width - 6,
    );
  });

  it('не рисует текст, если не помещается даже многоточие', () => {
    const { clippedText, fillText } = renderBadge(32);
    expect(clippedText).not.toHaveBeenCalled();
    expect(fillText).not.toHaveBeenCalled();
  });

  it('возвращает полный текст после расширения колонки', () => {
    const { badge, clippedText, batcher, container } = renderBadge(100);
    container.style.width = 300;
    container.performLayout(ctx);
    badge.onPaint(batcher, ctx);

    expect(clippedText.mock.calls[0]![0]).toMatch(/…$/);
    expect(clippedText.mock.calls[1]![0]).toBe('Long status');
    expect(badge.rect.width).toBe(122);
  });

  it.each(['leftIcon', 'rightIcon'] as const)(
    'не добавляет отступ к бейджу без текста, %s',
    (side) => {
      const { badge, clippedText } = renderBadge(100, { [side]: '<svg/>' }, '');
      const [, , x, , iconSize] = vi.mocked(drawIcon).mock.calls[0]!;

      expect(badge.rect.width).toBe(24);
      expect(x).toBe(badge.rect.x + 6);
      expect(x + iconSize).toBe(badge.rect.x + badge.rect.width - 6);
      expect(clippedText).not.toHaveBeenCalled();
    },
  );
});
