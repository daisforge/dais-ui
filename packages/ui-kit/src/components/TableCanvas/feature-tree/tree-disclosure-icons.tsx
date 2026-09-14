import { ROW_ICON_BUTTON_CONFIG, RowSize } from '../renders/rowIconConfig';

const GRID = 24;

/**
 * Глифы шеврона из @salutejs/plasma-icons (24-сетка). `left` — левый край
 * глифа раскрытой иконки: на него одинаково сдвигаются обе иконки пары,
 * поэтому раскрытая прижата к левому краю, у свёрнутой остаётся небольшой
 * отступ, а взаимное положение как у plasma — без скачка при смене.
 */
export const TREE_ICON_GLYPHS = {
  // DisclosureDownOutline / DisclosureRightOutline
  disclosure: {
    left: 6.75,
    expanded:
      'M6.96967 9.9676C7.26256 9.67471 7.73744 9.67471 8.03033 9.9676L12 13.9373L15.9697 9.9676C16.2626 9.67471 16.7374 9.67471 17.0303 9.9676C17.3232 10.2605 17.3232 10.7354 17.0303 11.0283L12 16.0586L6.96967 11.0283C6.67678 10.7354 6.67678 10.2605 6.96967 9.9676Z',
    collapsed:
      'M9.9745 17.0303C9.6816 16.7374 9.6816 16.2626 9.9745 15.9697L13.9442 12L9.9745 8.03033C9.6816 7.73744 9.6816 7.26256 9.9745 6.96967C10.2674 6.67678 10.7423 6.67678 11.0352 6.96967L16.0655 12L11.0352 17.0303C10.7423 17.3232 10.2674 17.3232 9.9745 17.0303Z',
  },
  // ChevronDown / ChevronRight
  chevron: {
    left: 4.25,
    expanded:
      'M4.46967 7.96967C4.76256 7.67678 5.23744 7.67678 5.53033 7.96967L12 14.4393L18.4697 7.96967C18.7626 7.67678 19.2374 7.67678 19.5303 7.96967C19.8232 8.26256 19.8232 8.73744 19.5303 9.03033L12.5303 16.0303C12.2374 16.3232 11.7626 16.3232 11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z',
    collapsed:
      'M7.96967 19.5303C7.67678 19.2374 7.67678 18.7626 7.96967 18.4697L14.4393 12L7.96967 5.53033C7.67678 5.23744 7.67678 4.76256 7.96967 4.46967C8.26256 4.17678 8.73744 4.17678 9.03033 4.46967L16.0303 11.4697C16.3232 11.7626 16.3232 12.2374 16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z',
  },
} as const;

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
 * viewBox: 24 * square / icon из ROW_ICON_BUTTON_CONFIG (big 24, medium 36, small 40).
 */
export const getTreeIconViewBoxSize = (size: RowSize) => {
  const { overrideSquareSize, overrideIconSize } = ROW_ICON_BUTTON_CONFIG[size];
  return (GRID * overrideSquareSize) / overrideIconSize;
};

export const getTreeIconViewBox = (size: RowSize) => {
  const viewBoxSize = getTreeIconViewBoxSize(size);
  const top = GRID / 2 - viewBoxSize / 2;
  return `${getTreeIconGlyph(size).left} ${top} ${viewBoxSize} ${viewBoxSize}`;
};

/**
 * Ширина пары иконок в раскладке (px): квадрат кнопки минус левый отступ
 * глифа у исходной иконки (зазор квадрат/иконка + пустота слева в SVG).
 * Справа от глифа остаётся столько же места, сколько было у исходной иконки,
 * поэтому расстояние от шеврона до текста прежнее.
 */
export const getTreeIconWidth = (size: RowSize) => {
  const { overrideSquareSize, overrideIconSize } = ROW_ICON_BUTTON_CONFIG[size];
  const originalLeftInset =
    (overrideSquareSize - overrideIconSize) / 2 +
    (getTreeIconGlyph(size).left * overrideIconSize) / GRID;
  return overrideSquareSize - originalLeftInset;
};

type TreeIconProps = {
  size?: RowSize;
};

const TreeIconSvg = ({
  state,
  size,
}: {
  state: 'expanded' | 'collapsed';
  size: RowSize;
}) => {
  const squareSize = ROW_ICON_BUTTON_CONFIG[size].overrideSquareSize;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={squareSize}
      height={squareSize}
      viewBox={getTreeIconViewBox(size)}
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d={getTreeIconGlyph(size)[state]} />
    </svg>
  );
};

// displayName обязателен: кэш canvas-иконок различает их по имени компонента
export const IconTreeExpanded = ({ size = 'big' }: TreeIconProps) => (
  <TreeIconSvg state="expanded" size={size} />
);
IconTreeExpanded.displayName = 'IconTreeExpanded';

export const IconTreeCollapsed = ({ size = 'big' }: TreeIconProps) => (
  <TreeIconSvg state="collapsed" size={size} />
);
IconTreeCollapsed.displayName = 'IconTreeCollapsed';
