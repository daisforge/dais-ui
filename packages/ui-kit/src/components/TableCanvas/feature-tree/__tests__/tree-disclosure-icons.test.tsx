import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { ROW_ICON_BUTTON_CONFIG, RowSize } from '../../renders/rowIconConfig';
import {
  getTreeIconGlyph,
  getTreeIconWidth,
  IconTreeCollapsed,
  IconTreeExpanded,
} from '../tree-disclosure-icons';

// Контракт иконок шеврона дерева: глиф раскрытой иконки прижат к левому краю
// квадрата кнопки, пара иконок одного размера делит один viewBox (без скачка
// при раскрытии), видимый размер глифа совпадает с прежним overrideIconSize.

const SIZES: RowSize[] = ['big', 'medium', 'small'];

const getSvgAttr = (markup: string, attr: string) =>
  markup.match(new RegExp(`<svg[^>]*\\s${attr}="([^"]*)"`))?.[1];

describe('tree-disclosure-icons', () => {
  it.each(SIZES)(
    'раскрытая и свёрнутая иконки размера %s имеют одинаковый viewBox',
    (size) => {
      const expanded = renderToStaticMarkup(<IconTreeExpanded size={size} />);
      const collapsed = renderToStaticMarkup(<IconTreeCollapsed size={size} />);

      expect(getSvgAttr(expanded, 'viewBox')).toBe(
        getSvgAttr(collapsed, 'viewBox'),
      );
    },
  );

  it.each([
    ['big', 24],
    ['medium', 36],
    ['small', 40],
  ] as const)(
    'viewBox размера %s начинается с левого края глифа и имеет сторону %i',
    (size, viewBoxSize) => {
      const markup = renderToStaticMarkup(<IconTreeExpanded size={size} />);
      const [x, y, w, h] = (getSvgAttr(markup, 'viewBox') ?? '')
        .split(' ')
        .map(Number) as [number, number, number, number];

      expect(x).toBe(getTreeIconGlyph(size).left);
      expect(w).toBe(viewBoxSize);
      expect(h).toBe(viewBoxSize);
      // центр по вертикали остаётся на 12, как в 24-сетке plasma
      expect(y + h / 2).toBe(12);
    },
  );

  it.each(SIZES)(
    'иконка размера %s рисуется на весь квадрат кнопки',
    (size) => {
      const markup = renderToStaticMarkup(<IconTreeCollapsed size={size} />);
      const square = `${ROW_ICON_BUTTON_CONFIG[size].overrideSquareSize}`;

      expect(getSvgAttr(markup, 'width')).toBe(square);
      expect(getSvgAttr(markup, 'height')).toBe(square);
    },
  );

  it.each([
    // квадрат − (зазор квадрат/иконка + левая пустота глифа в SVG)
    ['big', 24 - (0 + 6.75)],
    ['medium', 24 - (4 + (4.25 * 16) / 24)],
    ['small', 20 - (4 + (4.25 * 12) / 24)],
  ] as const)(
    'ширина пары размера %s — квадрат без левого отступа исходной иконки (%d px)',
    (size, width) => {
      expect(getTreeIconWidth(size)).toBeCloseTo(width);
    },
  );

  it.each(SIZES)(
    'у размера %s место справа от глифа такое же, как у исходной иконки',
    (size) => {
      const { overrideSquareSize, overrideIconSize } =
        ROW_ICON_BUTTON_CONFIG[size];
      const scale = overrideIconSize / 24;
      // правый край раскрытого глифа в 24-сетке симметричен левому
      const glyphRight = 24 - getTreeIconGlyph(size).left;
      const glyphWidth = (glyphRight - getTreeIconGlyph(size).left) * scale;
      const originalRightSpace =
        (overrideSquareSize - overrideIconSize) / 2 + (24 - glyphRight) * scale;

      expect(getTreeIconWidth(size) - glyphWidth).toBeCloseTo(
        originalRightSpace,
      );
    },
  );

  it('по умолчанию используется размер big', () => {
    expect(renderToStaticMarkup(<IconTreeExpanded />)).toBe(
      renderToStaticMarkup(<IconTreeExpanded size="big" />),
    );
  });

  it('путь закрашивается currentColor, чтобы canvas подставил цвет кнопки', () => {
    const markup = renderToStaticMarkup(<IconTreeCollapsed size="medium" />);

    expect(markup).toContain('fill="currentColor"');
  });
});
