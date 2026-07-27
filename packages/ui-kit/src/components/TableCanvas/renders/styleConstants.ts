import { type SIZE, SIZES } from '../styles';

const DEF_PADDING_LVL = 32;
const WIDTH_ICON_AND_PADDINGRIGHT = 0;
export const DEFAULT_CELL_PADDING_INLINE = 16;

const getPaddingLeft = (lvl: number, hasChildren: boolean): number =>
  DEF_PADDING_LVL * lvl + (hasChildren ? 0 : WIDTH_ICON_AND_PADDINGRIGHT);

type EditingMode =
  | false
  | {
      columnHasArrow: boolean | undefined;
      rowSize: SIZE;
    };
const getPaddingLeftForArrowColumnInEditingMode = (
  editingMode: EditingMode
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
  hasChildren: boolean,
  editingMode: EditingMode
) =>
  defaultPadding +
  getPaddingLeft(lvl, hasChildren) +
  getPaddingLeftForArrowColumnInEditingMode(editingMode);
