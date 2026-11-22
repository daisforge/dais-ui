import { type SIZE, SIZES } from '../styles';

/**
 * Шаг отступа одного уровня вложенности subRows (база — cellHorizontalPadding):
 * big: 16 → 66 → 116 …, medium: 6 → 42 → 78 …, small: 4 → 32 → 60 …
 * Зависит только от уровня, а не от наличия шеврона, поэтому текст листа
 * не выравнивается по тексту родителя (шеврон + gap меньше шага).
 */
export const SUBROW_LVL_INDENT: Record<SIZE, number> = {
  big: 50,
  medium: 36,
  small: 28,
};
export const DEFAULT_CELL_PADDING_INLINE = 16;

export const getSubRowLvlIndent = (lvl: number, rowSize: SIZE = 'big') =>
  SUBROW_LVL_INDENT[rowSize] * lvl;

type EditingMode =
  | false
  | {
      columnHasArrow: boolean | undefined;
      rowSize: SIZE;
    };
const getPaddingLeftForArrowColumnInEditingMode = (
  editingMode: EditingMode,
): number => {
  if (!editingMode) {
    return 0;
  }
  const { rowSize, columnHasArrow } = editingMode;
  return columnHasArrow
    ? Number(SIZES?.[rowSize]?.cell?.['padding-inline'].split('px')[0])
    : 0;
};

export const getPaddingLeftFinal = (
  defaultPadding: number,
  lvl: number,
  rowSize: SIZE | undefined,
  editingMode: EditingMode,
) =>
  defaultPadding +
  getSubRowLvlIndent(lvl, rowSize) +
  getPaddingLeftForArrowColumnInEditingMode(editingMode);
