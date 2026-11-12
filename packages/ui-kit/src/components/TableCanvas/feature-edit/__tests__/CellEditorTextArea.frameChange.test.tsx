import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  EDITOR_BLOCK_BOTTOM_VAR,
  EDITOR_BOTTOM_LINE_VAR,
  EDITOR_FRAME_CHANGE_EVENT,
} from '../../../TableGlide/constants';
import { CellEditorTextArea } from '../CellEditorTextArea';
import { getTextEditorMaxHeight } from '../getTextEditorMaxHeight';

vi.mock('../getTextEditorMaxHeight', () => ({
  getTextEditorMaxHeight: vi.fn(() => 100),
}));

const maxHeightMock = vi.mocked(getTextEditorMaxHeight);
const lastArg = () => maxHeightMock.mock.lastCall?.[0];

const renderInOverlay = (vars: Record<string, string> = {}) => {
  const overlay = document.createElement('div');
  overlay.id = 'gdg-overlay-1';
  for (const [name, value] of Object.entries(vars)) {
    overlay.style.setProperty(name, value);
  }
  document.body.appendChild(overlay);
  const view = render(
    <CellEditorTextArea
      cellHeight={40}
      cellWidth={200}
      value=""
      onChange={() => undefined}
    />,
    { container: overlay },
  );
  return { overlay, view };
};

const notifyFrameChange = (overlay: HTMLElement) =>
  act(() => {
    overlay.dispatchEvent(new Event(EDITOR_FRAME_CHANGE_EVENT));
  });

const moveBlockBottom = (overlay: HTMLElement, bottom: number) => {
  overlay.style.setProperty(EDITOR_BOTTOM_LINE_VAR, '1px');
  overlay.style.setProperty(EDITOR_BLOCK_BOTTOM_VAR, `${bottom}px`);
  notifyFrameChange(overlay);
};

const separateFromBlock = (overlay: HTMLElement) => {
  overlay.style.removeProperty(EDITOR_BOTTOM_LINE_VAR);
  overlay.style.removeProperty(EDITOR_BLOCK_BOTTOM_VAR);
  notifyFrameChange(overlay);
};

beforeEach(() => {
  maxHeightMock.mockClear();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  document.body.innerHTML = '';
});

describe('CellEditorTextArea: предел высоты редактора', () => {
  it('одиночная ячейка: без низа блока', () => {
    renderInOverlay();
    expect(maxHeightMock).toHaveBeenCalledTimes(1);
    expect(lastArg()?.blockBottom).toBeUndefined();
  });

  it('пересчитывает предел по новому низу блока', () => {
    const { overlay } = renderInOverlay({
      [EDITOR_BOTTOM_LINE_VAR]: '1px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '400px',
    });
    expect(lastArg()?.blockBottom).toBe(400);

    moveBlockBottom(overlay, 300);
    expect(maxHeightMock).toHaveBeenCalledTimes(2);
    expect(lastArg()?.blockBottom).toBe(300);
  });

  it('низ блока ушёл за область данных: без низа блока', () => {
    const { overlay } = renderInOverlay({
      [EDITOR_BOTTOM_LINE_VAR]: '1px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '400px',
    });
    overlay.style.setProperty(EDITOR_BOTTOM_LINE_VAR, '0px');
    notifyFrameChange(overlay);
    expect(lastArg()?.blockBottom).toBeUndefined();
  });

  it('редактор разошёлся с блоком: держит последний низ блока', () => {
    const { overlay } = renderInOverlay({
      [EDITOR_BOTTOM_LINE_VAR]: '1px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '400px',
    });
    moveBlockBottom(overlay, 450);
    separateFromBlock(overlay);
    expect(lastArg()?.blockBottom).toBe(450);
  });

  it('смена высоты ячейки после расхождения с блоком не теряет последний низ', () => {
    const { overlay, view } = renderInOverlay({
      [EDITOR_BOTTOM_LINE_VAR]: '1px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '400px',
    });
    moveBlockBottom(overlay, 450);
    separateFromBlock(overlay);

    view.rerender(
      <CellEditorTextArea
        cellHeight={60}
        cellWidth={200}
        value=""
        onChange={() => undefined}
      />,
    );
    expect(lastArg()?.cellHeight).toBe(60);
    expect(lastArg()?.blockBottom).toBe(450);
  });

  it('верх поля берёт замер при открытии, а не текущий', () => {
    const rect = vi
      .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
      .mockReturnValue({ top: 100 } as DOMRect);
    const { overlay } = renderInOverlay();
    rect.mockReturnValue({ top: 300 } as DOMRect);

    moveBlockBottom(overlay, 500);
    expect(maxHeightMock.mock.calls.map(([arg]) => arg.editorTop)).toEqual([
      100, 100,
    ]);
  });

  it('смена размера окна пересчитывает предел по новой высоте окна', () => {
    renderInOverlay();
    const innerHeight = vi
      .spyOn(window, 'innerHeight', 'get')
      .mockReturnValue(500);
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(maxHeightMock).toHaveBeenCalledTimes(2);
    expect(lastArg()?.windowHeight).toBe(500);
    innerHeight.mockRestore();
  });

  it('после закрытия редактора не слушает ни оверлей, ни окно', () => {
    const { overlay, view } = renderInOverlay();
    view.unmount();
    maxHeightMock.mockClear();

    moveBlockBottom(overlay, 300);
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(maxHeightMock).not.toHaveBeenCalled();
  });
});
