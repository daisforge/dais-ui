import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import {
  HEADER_LEFT_ICONS_CONFIG,
  ROW_ICON_BUTTON_CONFIG,
  RowSize,
  TREE_BUTTON_GAP,
} from '../../renders/rowIconConfig';
import {
  getExpandAllIconInset,
  getExpandAllIconWidth,
  getExpandAllTooltipOffsetX,
  getTreeCollapsedInset,
  getTreeIconGlyph,
  getTreeIconWidth,
  IconTreeCollapseAll,
  IconTreeCollapsed,
  IconTreeExpandAll,
  IconTreeExpanded,
  TREE_ICON_GLYPHS,
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

  describe('двойной шеврон в шапке', () => {
    it.each(SIZES)('размера %s рисуется двумя путями', (size) => {
      const markup = renderToStaticMarkup(<IconTreeExpandAll size={size} />);

      expect(markup.match(/<path/g)).toHaveLength(2);
    });

    it.each(SIZES)('у пары размера %s одинаковый viewBox', (size) => {
      const expandAll = renderToStaticMarkup(<IconTreeExpandAll size={size} />);
      const collapseAll = renderToStaticMarkup(
        <IconTreeCollapseAll size={size} />,
      );

      expect(getSvgAttr(expandAll, 'viewBox')).toBe(
        getSvgAttr(collapseAll, 'viewBox'),
      );
    });

    it.each(SIZES)(
      'размера %s стоит на линии свёрнутого шеврона строки (с оптическим сдвигом)',
      (size) => {
        // Шапка и ячейка верхнего уровня имеют одинаковый левый паддинг,
        // поэтому достаточно сравнить отступ глифа от левого края квадрата
        const rowIcon = renderToStaticMarkup(<IconTreeCollapsed size={size} />);
        const headerIcon = renderToStaticMarkup(
          <IconTreeExpandAll size={size} />,
        );
        const inkInset = (
          markup: string,
          glyphLeft: number,
          iconSize: number,
        ) => {
          const viewBoxLeft = Number(
            getSvgAttr(markup, 'viewBox')?.split(' ')[0],
          );
          return ((glyphLeft - viewBoxLeft) * iconSize) / 24;
        };

        // у строки свёрнутый шеврон отстоит от края на collapsedLeft − left
        expect(
          inkInset(
            rowIcon,
            getTreeIconGlyph(size).collapsedLeft,
            ROW_ICON_BUTTON_CONFIG[size].overrideIconSize,
          ),
        ).toBeCloseTo(getTreeCollapsedInset(size));
        // двойной шеврон — там же, с точностью до оптической правки на big
        expect(
          inkInset(
            headerIcon,
            TREE_ICON_GLYPHS.doubleDisclosure.left,
            HEADER_LEFT_ICONS_CONFIG[size].iconSize,
          ),
        ).toBeCloseTo(getExpandAllIconInset(size));
        const nudge = { big: 1, medium: 0.5, small: 0 }[size];
        expect(getTreeCollapsedInset(size) - getExpandAllIconInset(size)).toBe(
          nudge,
        );
      },
    );

    it.each([
      // зазор свёрнутого шеврона строки минус оптическая правка размера
      ['big', ((9.7548 - 6.75) * 24) / 24 - 1],
      ['medium', ((7.75 - 4.25) * 16) / 24 - 0.5],
      ['small', ((7.75 - 4.25) * 12) / 24],
    ] as const)(
      'размера %s отодвинут от края на минимальный отступ (%d px)',
      (size, insetPx) => {
        const markup = renderToStaticMarkup(<IconTreeExpandAll size={size} />);
        const viewBoxLeft = Number(
          getSvgAttr(markup, 'viewBox')?.split(' ')[0],
        );
        const { iconSize } = HEADER_LEFT_ICONS_CONFIG[size];
        // сдвиг viewBox влево на inset в единицах 24-сетки
        const shiftPx =
          ((TREE_ICON_GLYPHS.doubleDisclosure.left - viewBoxLeft) * iconSize) /
          24;

        expect(getExpandAllIconInset(size)).toBeCloseTo(insetPx);
        expect(shiftPx).toBeCloseTo(insetPx);
      },
    );

    it.each(SIZES)(
      'кнопка размера %s занимает столько же, сколько шеврон строки',
      (size) => {
        expect(getExpandAllIconWidth(size)).toBe(getTreeIconWidth(size));
      },
    );

    it.each(SIZES)(
      'заголовок колонки размера %s стоит над текстом строк верхнего уровня',
      (size) => {
        const headerTextOffset =
          getExpandAllIconWidth(size) +
          HEADER_LEFT_ICONS_CONFIG[size].gapToText;
        const rowTextOffset = getTreeIconWidth(size) + TREE_BUTTON_GAP[size];

        expect(headerTextOffset).toBeCloseTo(rowTextOffset);
      },
    );

    it.each(SIZES)(
      'тултип размера %s сдвинут в центр глифа, а не кнопки',
      (size) => {
        const { iconSize } = HEADER_LEFT_ICONS_CONFIG[size];
        const glyphWidth =
          ((24 - 2 * TREE_ICON_GLYPHS.doubleDisclosure.left) * iconSize) / 24;
        const glyphCenter = getExpandAllIconInset(size) + glyphWidth / 2;

        // якорь тултипа — центр кнопки, поэтому сдвиг отрицательный
        expect(getExpandAllTooltipOffsetX(size)).toBeCloseTo(
          glyphCenter - getExpandAllIconWidth(size) / 2,
        );
        expect(getExpandAllTooltipOffsetX(size)).toBeLessThan(0);
      },
    );
  });
});
