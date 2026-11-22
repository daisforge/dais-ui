import { describe, expect, it } from 'vitest';

import {
  calculateMinColumnWidth,
  getHeaderButtonsBlockWidth,
  HEADER_ICONS_GAP,
  HEADER_TEXT_TO_ICONS_GAP,
} from '../calculateMinColumnWidth';

// Квадрат кнопки xs в шапке, px.
const BUTTON_SIZE = 24;
// Отступы ячейки с двух сторон по размеру строки, px.
const PADDING_SIDES = { small: 8, medium: 12, big: 32 } as const;
// Место под букву с многоточием, px.
const TEXT_MIN = 24;

const noIcons = {
  isHaveFiltering: false,
  isHaveSorting: false,
  columnIsPinned: false,
  subRowIsActiveAndColumnWithArrow: false,
};

describe('getHeaderButtonsBlockWidth', () => {
  it('без кнопок ширина нулевая', () => {
    expect(getHeaderButtonsBlockWidth(0)).toBe(0);
  });

  it('одна кнопка: отступ от текста и квадрат', () => {
    expect(getHeaderButtonsBlockWidth(1)).toBe(
      HEADER_TEXT_TO_ICONS_GAP + BUTTON_SIZE,
    );
  });

  it('две кнопки: между ними зазор', () => {
    expect(getHeaderButtonsBlockWidth(2)).toBe(
      HEADER_TEXT_TO_ICONS_GAP + 2 * BUTTON_SIZE + HEADER_ICONS_GAP,
    );
  });
});

describe('calculateMinColumnWidth', () => {
  it.each(['small', 'medium', 'big'] as const)(
    'без иконок и кнопок: отступы размера строки %s и место под текст',
    (rowSize) => {
      expect(calculateMinColumnWidth({ rowSize, ...noIcons })).toBe(
        PADDING_SIDES[rowSize] + TEXT_MIN,
      );
    },
  );

  it('кнопки справа добавляют свой блок целиком', () => {
    const base = calculateMinColumnWidth({ rowSize: 'big', ...noIcons });
    const withButtons = calculateMinColumnWidth({
      rowSize: 'big',
      ...noIcons,
      isHaveFiltering: true,
      isHaveSorting: true,
    });

    expect(withButtons - base).toBe(getHeaderButtonsBlockWidth(2));
  });

  it('пин и перетаскивание добавляют квадраты слева и отступ до текста', () => {
    const base = calculateMinColumnWidth({ rowSize: 'big', ...noIcons });
    const withLeftIcons = calculateMinColumnWidth({
      rowSize: 'big',
      ...noIcons,
      columnIsPinned: true,
      reorderForColIsActive: true,
    });

    // big: квадрат 24, отступ до текста 8.
    expect(withLeftIcons - base).toBe(2 * 24 + 8);
  });

  it('минимум растёт от малой строки к большой', () => {
    const widths = (['small', 'medium', 'big'] as const).map((rowSize) =>
      calculateMinColumnWidth({
        rowSize,
        ...noIcons,
        isHaveSorting: true,
        columnIsPinned: true,
      }),
    );

    const [small, medium, big] = widths as [number, number, number];
    expect(small).toBeLessThan(medium);
    expect(medium).toBeLessThan(big);
  });
});
