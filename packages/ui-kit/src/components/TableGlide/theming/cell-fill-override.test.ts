import { describe, expect, it } from 'vitest';

import {
  resolveActiveRowBg,
  resolveCellFill,
  resolveCellFillOverride,
} from './cell-fill-override';
import type { TableColorTheme } from './table-colors.generated';

const STATES = {
  rest: 'rest',
  hover: 'hover',
  hover2: 'hover2',
  active: 'active',
  hoverActive: 'hoverActive',
};

describe('resolveCellFillOverride: выбор цвета ячейки со своим цветом', () => {
  it('покой: цвет покоя, на случай выделения — active', () => {
    expect(
      resolveCellFillOverride(STATES, { rowHover: false, rowActive: false }),
    ).toEqual({ bgCell: 'rest', accentLight: 'active' });
  });

  it('строка под курсором: hover, на случай выделения — hoverActive', () => {
    expect(
      resolveCellFillOverride(STATES, { rowHover: true, rowActive: false }),
    ).toEqual({ bgCell: 'hover', accentLight: 'hoverActive' });
  });

  it('выбранная строка: на ступень глубже покоя (hover)', () => {
    expect(
      resolveCellFillOverride(STATES, { rowHover: false, rowActive: true }),
    ).toEqual({ bgCell: 'hover', accentLight: 'active' });
  });

  it('выбранная строка под курсором: на две ступени (hover2)', () => {
    expect(
      resolveCellFillOverride(STATES, { rowHover: true, rowActive: true }),
    ).toEqual({ bgCell: 'hover2', accentLight: 'hoverActive' });
  });

  it('без посчитанных hover/hover2 подставляет ближайшую ступень', () => {
    const onlyRest = {
      rest: 'rest',
      hover: null,
      hover2: null,
      active: null,
      hoverActive: null,
    };
    expect(
      resolveCellFillOverride(onlyRest, { rowHover: true, rowActive: true }),
    ).toEqual({ bgCell: 'rest' });
  });
});

describe('resolveActiveRowBg: фон выбранной строки', () => {
  const THEME = {
    selectionCheckboxBg: 'step0',
    bgSelectedRowHovered: 'step1',
    bgSelectedRowActiveHovered: 'step2',
  };

  it('без курсора и без нажатого чекбокса — первая ступень', () => {
    expect(
      resolveActiveRowBg(THEME, { rowHover: false, checkboxChecked: false }),
    ).toBe('step0');
  });

  it('только курсор — вторая ступень', () => {
    expect(
      resolveActiveRowBg(THEME, { rowHover: true, checkboxChecked: false }),
    ).toBe('step1');
  });

  it('только нажатый чекбокс — тоже вторая ступень', () => {
    expect(
      resolveActiveRowBg(THEME, { rowHover: false, checkboxChecked: true }),
    ).toBe('step1');
  });

  it('курсор и нажатый чекбокс — третья ступень', () => {
    expect(
      resolveActiveRowBg(THEME, { rowHover: true, checkboxChecked: true }),
    ).toBe('step2');
  });
});

describe('resolveCellFill: чей фон у ячейки', () => {
  const EDITABLE_THEME = {
    bgEditableCell: 'editable',
    bgEditableCellHovered: 'editableHover',
    bgEditableCellRowActiveHovered: 'editableHover2',
    bgEditableCellActive: 'editableActive',
    bgEditableCellActiveHovered: 'editableHoverActive',
  };
  const CONTEXT = { rowHover: false, rowActive: false };
  const fill = (consumerBg: string | undefined, isEditable: boolean) =>
    resolveCellFill({
      consumerBg,
      isEditable,
      editableTheme: EDITABLE_THEME,
      colorTheme: {} as TableColorTheme,
      context: CONTEXT,
    });

  it('фон потребителя сильнее фона редактируемой ячейки', () => {
    expect(fill('var(--changed)', true)).toEqual({ bgCell: 'var(--changed)' });
  });

  it('без фона потребителя редактируемая ячейка — жёлтая', () => {
    expect(fill(undefined, true)).toEqual({
      bgCell: 'editable',
      accentLight: 'editableActive',
    });
  });

  it('обычная ячейка без фона потребителя — своего цвета нет', () => {
    expect(fill(undefined, false)).toBeUndefined();
  });
});
