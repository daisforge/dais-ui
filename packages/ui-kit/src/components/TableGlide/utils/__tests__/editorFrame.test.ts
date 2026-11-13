import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  EDITOR_BLOCK_BOTTOM_VAR,
  EDITOR_BLOCK_TOP_VAR,
  EDITOR_BOTTOM_LINE_VAR,
  EDITOR_FRAME_CHANGE_EVENT,
  EDITOR_TOP_LINE_VAR,
} from '../../constants';
import {
  type EditorFrame,
  getEditorFrameVars,
  syncEditorFrame,
} from '../editorFrame';

// Блок 100..400, данные 50..500, при открытии прокрутка 0.
const frame: EditorFrame = {
  blockTop: 100,
  blockBottom: 400,
  dataTop: 50,
  dataBottom: 500,
  scrollTop: 0,
};

// Оверлей редактора стоит у верха блока: 100..140.
const createOverlay = () => {
  const overlay = document.createElement('div');
  vi.spyOn(overlay, 'getBoundingClientRect').mockReturnValue({
    top: 100,
    bottom: 140,
  } as DOMRect);
  document.body.appendChild(overlay);
  return overlay;
};

const varsOf = (overlay: HTMLElement) =>
  Object.fromEntries(
    [
      EDITOR_BLOCK_TOP_VAR,
      EDITOR_BLOCK_BOTTOM_VAR,
      EDITOR_TOP_LINE_VAR,
      EDITOR_BOTTOM_LINE_VAR,
    ].map((name) => [name, overlay.style.getPropertyValue(name)]),
  );

afterEach(() => {
  vi.restoreAllMocks();
  document.body.innerHTML = '';
});

describe('getEditorFrameVars', () => {
  it('блок внутри данных: края блока и обе линии', () => {
    expect(getEditorFrameVars(frame, 0)).toEqual({
      [EDITOR_BLOCK_TOP_VAR]: '100px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '400px',
      [EDITOR_TOP_LINE_VAR]: '1px',
      [EDITOR_BOTTOM_LINE_VAR]: '1px',
    });
  });

  it('край ушёл за область данных: обрезан по ней и без линии', () => {
    const tallBlock = { ...frame, blockBottom: 600 };
    expect(getEditorFrameVars(tallBlock, 0)).toMatchObject({
      [EDITOR_BLOCK_BOTTOM_VAR]: '500px',
      [EDITOR_BOTTOM_LINE_VAR]: '0px',
    });
    expect(getEditorFrameVars(frame, 80)).toMatchObject({
      [EDITOR_BLOCK_TOP_VAR]: '50px',
      [EDITOR_TOP_LINE_VAR]: '0px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '320px',
    });
  });
});

describe('syncEditorFrame', () => {
  it('прокрутка сдвигает края блока и сообщает редактору', () => {
    const overlay = createOverlay();
    const onChange = vi.fn(() => varsOf(overlay));
    overlay.addEventListener(EDITOR_FRAME_CHANGE_EVENT, onChange);

    syncEditorFrame(overlay, frame, 100);

    expect(onChange).toHaveBeenCalledTimes(1);
    // К событию переменные уже стоят: редактор читает новый низ.
    expect(onChange.mock.results[0]?.value).toEqual({
      [EDITOR_BLOCK_TOP_VAR]: '50px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '300px',
      [EDITOR_TOP_LINE_VAR]: '0px',
      [EDITOR_BOTTOM_LINE_VAR]: '1px',
    });
  });

  it('блок уехал от редактора: переменные снимает и всё равно сообщает', () => {
    const overlay = createOverlay();
    syncEditorFrame(overlay, frame, 0);
    const onChange = vi.fn();
    overlay.addEventListener(EDITOR_FRAME_CHANGE_EVENT, onChange);

    syncEditorFrame(overlay, frame, 350);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(varsOf(overlay)).toEqual({
      [EDITOR_BLOCK_TOP_VAR]: '',
      [EDITOR_BLOCK_BOTTOM_VAR]: '',
      [EDITOR_TOP_LINE_VAR]: '',
      [EDITOR_BOTTOM_LINE_VAR]: '',
    });
  });
});
