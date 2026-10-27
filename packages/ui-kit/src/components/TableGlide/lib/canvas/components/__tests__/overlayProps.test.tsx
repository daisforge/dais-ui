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

  it('типы разрешают что-то одно и запрещают оба сразу', () => {
    const elements = [
      <Canvas.Rect key="1" popover={popover} />,
      <Canvas.Rect key="2" dropdown={dropdown} />,
      <Canvas.Rect key="3" tooltip="подсказка" />,
      <Canvas.Button key="4" popover={undefined}>Кнопка</Canvas.Button>,
      // @ts-expect-error Popover и Dropdown на одном элементе задать нельзя
      <Canvas.Button key="5" popover={popover} dropdown={dropdown}>
        Кнопка
      </Canvas.Button>,
      // @ts-expect-error Popover и Dropdown на одном элементе задать нельзя
      <Canvas.Image key="6" src="" popover={popover} dropdown={dropdown} />,
    ];
    expect(elements).toHaveLength(6);
  });

  it('в режиме разработки предупреждает, если заданы оба', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const props = { popover, dropdown } as unknown as Record<string, never>;

    const node = buildCanvasTree({
      element: <Canvas.Rect id="rect" {...props} />,
      theme,
    });

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0]?.[0]).toContain('popover');
    expect(node.popover).toBe(popover);
  });

  it('без конфликта не предупреждает', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    buildCanvasTree({ element: <Canvas.Rect key="1" popover={popover} />, theme });
    buildCanvasTree({ element: <Canvas.Rect key="2" dropdown={dropdown} />, theme });

    expect(warn).not.toHaveBeenCalled();
  });
});
