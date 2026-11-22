import { afterEach, describe, expect, it } from 'vitest';

import {
  EDITOR_BLOCK_BOTTOM_VAR,
  EDITOR_BOTTOM_LINE_VAR,
} from '../../../TableGlide/constants';
import { getBlockBottom, getEditorOverlay } from '../editorOverlay';

const mountInOverlay = (vars: Record<string, string> = {}) => {
  const overlay = document.createElement('div');
  overlay.id = 'gdg-overlay-1';
  for (const [name, value] of Object.entries(vars)) {
    overlay.style.setProperty(name, value);
  }
  const field = document.createElement('div');
  overlay.appendChild(field);
  document.body.appendChild(overlay);
  return { overlay, field };
};

afterEach(() => {
  document.body.innerHTML = '';
});

describe('getEditorOverlay', () => {
  it('находит оверлей Glide над полем', () => {
    const { overlay, field } = mountInOverlay();
    expect(getEditorOverlay(field)).toBe(overlay);
  });

  it('поле вне оверлея и пустая ссылка: null', () => {
    const field = document.createElement('div');
    document.body.appendChild(field);
    expect(getEditorOverlay(field)).toBeNull();
    expect(getEditorOverlay(null)).toBeNull();
  });
});

describe('getBlockBottom', () => {
  it('низ блока виден: отдаёт его', () => {
    const { field } = mountInOverlay({
      [EDITOR_BOTTOM_LINE_VAR]: '1px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '412.5px',
    });
    expect(getBlockBottom(field)).toEqual({ kind: 'visible', bottom: 412.5 });
  });

  it('низ блока за областью данных', () => {
    const { field } = mountInOverlay({
      [EDITOR_BOTTOM_LINE_VAR]: '0px',
      [EDITOR_BLOCK_BOTTOM_VAR]: '412px',
    });
    expect(getBlockBottom(field)).toEqual({ kind: 'beyondData' });
  });

  it('нижняя линия есть, но низ не число: как за областью данных', () => {
    const { field } = mountInOverlay({ [EDITOR_BOTTOM_LINE_VAR]: '1px' });
    expect(getBlockBottom(field)).toEqual({ kind: 'beyondData' });
  });

  it('переменные сняты (редактор разошёлся с блоком или не в блоке)', () => {
    const { field } = mountInOverlay();
    expect(getBlockBottom(field)).toEqual({ kind: 'noFrame' });
  });

  it('вне оверлея', () => {
    expect(getBlockBottom(null)).toEqual({ kind: 'noFrame' });
  });
});
