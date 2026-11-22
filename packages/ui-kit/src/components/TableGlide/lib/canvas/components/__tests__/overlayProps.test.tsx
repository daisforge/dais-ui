import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { GlideThemeForRender } from '../../../../theming/types';

const theme = {} as GlideThemeForRender;
const popover = { content: 'поповер' };
const dropdown = { items: [{ value: 'a', label: 'A' }] };

// Флаг «предупреждение уже выводилось» живёт в модуле, поэтому каждый тест
// загружает модуль заново и не зависит от порядка тестов.
const loadCanvas = async () => import('..');

describe('Canvas: popover и dropdown на одном элементе', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('без конфликта не предупреждает', async () => {
    const { buildCanvasTree, Canvas } = await loadCanvas();
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    buildCanvasTree({ element: <Canvas.Rect key="1" popover={popover} />, theme });
    buildCanvasTree({ element: <Canvas.Rect key="2" dropdown={dropdown} />, theme });

    expect(warn).not.toHaveBeenCalled();
  });

  it('если заданы оба, открывается Popover, предупреждение выводится один раз на процесс', async () => {
    const { buildCanvasTree, Canvas } = await loadCanvas();
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
