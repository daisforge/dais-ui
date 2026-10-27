import React from 'react';
import { describe, expect, it } from 'vitest';

import { Canvas, type CanvasButtonProps } from '../reexports-for-external';

const popover = { content: 'поповер' };
const dropdown = { items: [{ value: 'a', label: 'A' }] };

describe('публичный Canvas: popover и dropdown', () => {
  it('разрешает что-то одно и запрещает оба сразу', () => {
    const props: CanvasButtonProps = { children: 'Кнопка', popover };
    // @ts-expect-error Popover и Dropdown на одном элементе задать нельзя
    const both: CanvasButtonProps = { children: 'Кнопка', popover, dropdown };
    const elements = [
      <Canvas.Button key="1" dropdown={dropdown}>
        Кнопка
      </Canvas.Button>,
      // @ts-expect-error Popover и Dropdown на одном элементе задать нельзя
      <Canvas.Button key="2" popover={popover} dropdown={dropdown}>
        Кнопка
      </Canvas.Button>,
    ];
    expect([props, both, ...elements]).toHaveLength(4);
  });
});
