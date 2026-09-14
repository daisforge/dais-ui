import {
  HEADER_LEFT_ICONS_CONFIG,
  ROW_ICON_BUTTON_CONFIG,
  RowSize,
  TREE_BUTTON_GAP,
} from '../renders/rowIconConfig';

const GRID = 24;

type TreeIconGlyph = {
  /** Левый край глифа раскрытой иконки в 24-сетке */
  left: number;
  /** Иконка состояния «раскрыто» (шеврон вниз / двойной шеврон вверх) */
  expanded: readonly string[];
  /** Иконка состояния «свёрнуто» (шеврон вправо / двойной шеврон вниз) */
  collapsed: readonly string[];
};

/**
 * Глифы шевронов из @salutejs/plasma-icons (24-сетка). `left` — левый край
 * глифа раскрытой иконки: на него одинаково сдвигаются обе иконки пары,
 * поэтому раскрытая прижата к левому краю, у свёрнутой остаётся небольшой
 * отступ, а взаимное положение как у plasma — без скачка при смене.
 */
export const TREE_ICON_GLYPHS = {
  // DisclosureDownOutline / DisclosureRightOutline
  disclosure: {
    left: 6.75,
    expanded: [
      'M6.96967 9.9676C7.26256 9.67471 7.73744 9.67471 8.03033 9.9676L12 13.9373L15.9697 9.9676C16.2626 9.67471 16.7374 9.67471 17.0303 9.9676C17.3232 10.2605 17.3232 10.7354 17.0303 11.0283L12 16.0586L6.96967 11.0283C6.67678 10.7354 6.67678 10.2605 6.96967 9.9676Z',
    ],
    collapsed: [
      'M9.9745 17.0303C9.6816 16.7374 9.6816 16.2626 9.9745 15.9697L13.9442 12L9.9745 8.03033C9.6816 7.73744 9.6816 7.26256 9.9745 6.96967C10.2674 6.67678 10.7423 6.67678 11.0352 6.96967L16.0655 12L11.0352 17.0303C10.7423 17.3232 10.2674 17.3232 9.9745 17.0303Z',
    ],
  },
  // ChevronDown / ChevronRight
  chevron: {
    left: 4.25,
    expanded: [
      'M4.46967 7.96967C4.76256 7.67678 5.23744 7.67678 5.53033 7.96967L12 14.4393L18.4697 7.96967C18.7626 7.67678 19.2374 7.67678 19.5303 7.96967C19.8232 8.26256 19.8232 8.73744 19.5303 9.03033L12.5303 16.0303C12.2374 16.3232 11.7626 16.3232 11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z',
    ],
    collapsed: [
      'M7.96967 19.5303C7.67678 19.2374 7.67678 18.7626 7.96967 18.4697L14.4393 12L7.96967 5.53033C7.67678 5.23744 7.67678 4.76256 7.96967 4.46967C8.26256 4.17678 8.73744 4.17678 9.03033 4.46967L16.0303 11.4697C16.3232 11.7626 16.3232 12.2374 16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z',
    ],
  },
  // DoubleDisclosureUp / DoubleDisclosureDown — кнопка «раскрыть/скрыть все»
  // в шапке. Левый край тот же, что у одиночного disclosure, поэтому двойной
  // шеврон встаёт на ту же линию, что и шевроны строк.
  doubleDisclosure: {
    left: 6.75,
    expanded: [
      'M17.0303 16.9697C16.7374 17.2625 16.2626 17.2625 15.9697 16.9697L12 13L8.03033 16.9697C7.73744 17.2625 7.26256 17.2625 6.96967 16.9697C6.67678 16.6768 6.67678 16.2019 6.96967 15.909L12 10.8787L17.0303 15.909C17.3232 16.2019 17.3232 16.6768 17.0303 16.9697Z',
      'M17.0303 11.591C16.7374 11.8839 16.2626 11.8839 15.9697 11.591L12 7.62132L8.03033 11.591C7.73744 11.8839 7.26256 11.8839 6.96967 11.591C6.67678 11.2981 6.67678 10.8232 6.96967 10.5303L12 5.5L17.0303 10.5303C17.3232 10.8232 17.3232 11.2981 17.0303 11.591Z',
    ],
    collapsed: [
      'M6.96967 7.03022C7.26256 6.73732 7.73744 6.73732 8.03033 7.03022L12 10.9999L15.9697 7.03022C16.2626 6.73732 16.7374 6.73732 17.0303 7.03022C17.3232 7.32311 17.3232 7.79798 17.0303 8.09088L12 13.1212L6.96967 8.09088C6.67678 7.79798 6.67678 7.32311 6.96967 7.03022Z',
      'M6.96967 12.4089C7.26256 12.116 7.73744 12.116 8.03033 12.4089L12 16.3786L15.9697 12.4089C16.2626 12.116 16.7374 12.116 17.0303 12.4089C17.3232 12.7018 17.3232 13.1767 17.0303 13.4696L12 18.4999L6.96967 13.4696C6.67678 13.1767 6.67678 12.7018 6.96967 12.4089Z',
    ],
  },
} as const satisfies Record<string, TreeIconGlyph>;

/** Квадрат кнопки и видимый размер глифа у исходной (не прижатой) иконки */
type IconBox = { squareSize: number; iconSize: number };

const getRowIconBox = (size: RowSize): IconBox => {
  const { overrideSquareSize, overrideIconSize } = ROW_ICON_BUTTON_CONFIG[size];
  return { squareSize: overrideSquareSize, iconSize: overrideIconSize };
};

const getHeaderIconBox = (size: RowSize): IconBox => {
  const { squareSize, iconSize } = HEADER_LEFT_ICONS_CONFIG[size];
  return { squareSize, iconSize };
};

// Те же глифы, что были у дерева до выравнивания
const GLYPH_BY_SIZE: Record<RowSize, keyof typeof TREE_ICON_GLYPHS> = {
  big: 'disclosure',
  medium: 'chevron',
  small: 'chevron',
};

export const getTreeIconGlyph = (size: RowSize) =>
  TREE_ICON_GLYPHS[GLYPH_BY_SIZE[size]];

/**
 * Иконка рисуется на весь квадрат кнопки, а размер глифа сохраняется через
 * viewBox: 24 * square / icon (для строк big 24, medium 36, small 40).
 */
const getViewBoxSize = ({ squareSize, iconSize }: IconBox) =>
  (GRID * squareSize) / iconSize;

const getViewBox = (glyph: TreeIconGlyph, box: IconBox) => {
  const viewBoxSize = getViewBoxSize(box);
  const top = GRID / 2 - viewBoxSize / 2;
  return `${glyph.left} ${top} ${viewBoxSize} ${viewBoxSize}`;
};

/**
 * Ширина прижатой иконки в раскладке (px): квадрат кнопки минус левый отступ
 * глифа у исходной иконки (зазор квадрат/иконка + пустота слева в SVG).
 * Справа от глифа остаётся столько же места, сколько было у исходной иконки,
 * поэтому расстояние от шеврона до текста прежнее.
 */
const getFlushLeftWidth = (glyph: TreeIconGlyph, box: IconBox) => {
  const originalLeftInset =
    (box.squareSize - box.iconSize) / 2 + (glyph.left * box.iconSize) / GRID;
  return box.squareSize - originalLeftInset;
};

export const getTreeIconViewBoxSize = (size: RowSize) =>
  getViewBoxSize(getRowIconBox(size));

export const getTreeIconViewBox = (size: RowSize) =>
  getViewBox(getTreeIconGlyph(size), getRowIconBox(size));

export const getTreeIconWidth = (size: RowSize) =>
  getFlushLeftWidth(getTreeIconGlyph(size), getRowIconBox(size));

/** Ширина кнопки «раскрыть/скрыть все строки» в шапке */
export const getExpandAllIconWidth = (size: RowSize) =>
  getFlushLeftWidth(TREE_ICON_GLYPHS.doubleDisclosure, getHeaderIconBox(size));

/**
 * Дополнительный отступ справа от кнопки «раскрыть/скрыть все строки»:
 * двойной шеврон уже шеврона строки, поэтому без компенсации заголовок
 * колонки уехал бы левее текста строк верхнего уровня.
 */
export const getExpandAllTrailingGap = (size: RowSize) =>
  getTreeIconWidth(size) +
  TREE_BUTTON_GAP[size] -
  getExpandAllIconWidth(size) -
  HEADER_LEFT_ICONS_CONFIG[size].gapToText;

const TreeIconSvg = ({
  glyph,
  box,
  state,
}: {
  glyph: TreeIconGlyph;
  box: IconBox;
  state: 'expanded' | 'collapsed';
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={box.squareSize}
    height={box.squareSize}
    viewBox={getViewBox(glyph, box)}
    aria-hidden="true"
    focusable="false"
  >
    {glyph[state].map((d) => (
      <path key={d} fill="currentColor" d={d} />
    ))}
  </svg>
);

type TreeIconProps = {
  size?: RowSize;
};

// displayName обязателен: кэш canvas-иконок различает их по имени компонента
// и пропу size (см. iconUtils.createCacheKey)
export const IconTreeExpanded = ({ size = 'big' }: TreeIconProps) => (
  <TreeIconSvg
    glyph={getTreeIconGlyph(size)}
    box={getRowIconBox(size)}
    state="expanded"
  />
);
IconTreeExpanded.displayName = 'IconTreeExpanded';

export const IconTreeCollapsed = ({ size = 'big' }: TreeIconProps) => (
  <TreeIconSvg
    glyph={getTreeIconGlyph(size)}
    box={getRowIconBox(size)}
    state="collapsed"
  />
);
IconTreeCollapsed.displayName = 'IconTreeCollapsed';

/** Двойной шеврон вверх в шапке: все строки раскрыты, клик — скрыть все */
export const IconTreeCollapseAll = ({ size = 'big' }: TreeIconProps) => (
  <TreeIconSvg
    glyph={TREE_ICON_GLYPHS.doubleDisclosure}
    box={getHeaderIconBox(size)}
    state="expanded"
  />
);
IconTreeCollapseAll.displayName = 'IconTreeCollapseAll';

/** Двойной шеврон вниз в шапке: строки свёрнуты, клик — раскрыть все */
export const IconTreeExpandAll = ({ size = 'big' }: TreeIconProps) => (
  <TreeIconSvg
    glyph={TREE_ICON_GLYPHS.doubleDisclosure}
    box={getHeaderIconBox(size)}
    state="collapsed"
  />
);
IconTreeExpandAll.displayName = 'IconTreeExpandAll';
