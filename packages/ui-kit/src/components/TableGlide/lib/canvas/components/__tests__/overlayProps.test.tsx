import { afterEach, describe, expect, it, vi } from 'vitest';

import type { GlideThemeForRender } from '../../../../theming/types';
import { buildCanvasTree, Canvas } from '..';

const theme = {} as GlideThemeForRender;
const popover = { content: 'поповер' };
const dropdown = { items: [{ value: 'a', label: 'A' }] };

describe('Canvas: popover и dropdown на одном элементе', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('без конфликта не предупреждает', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    buildCanvasTree({ element: <Canvas.Rect key="1" popover={popover} />, theme });
    buildCanvasTree({ element: <Canvas.Rect key="2" dropdown={dropdown} />, theme });

    expect(warn).not.toHaveBeenCalled();
  });

  it('если заданы оба, открывается Popover, предупреждение выводится один раз на процесс', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    const node = buildCanvasTree({
      element: <Canvas.Rect id="rect" popover={popover} dropdown={dropdown} />,
      theme,
    });
    buildCanvasTree({
      element: <Canvas.Button popover={popover} dropdown={dropdown}>Кнопка</Canvas.Button>,
      theme,
    });

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0]?.[0]).toContain('popover');
    expect(node.popover).toBe(popover);
    expect(node.dropdown).toBe(dropdown);
  });
});
