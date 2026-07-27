import { GridCellKind, type TextCell } from '@glideappsfinal/glide-data-grid';

export const DEFAULT_ROW_HEIGHT = 33;
export const EMPTY_CELL_OBJ: TextCell = {
  kind: GridCellKind.Text,
  data: '',
  displayData: '',
  allowOverlay: true,
  readonly: true,
};

export type TextCellOptions = Omit<
  TextCell,
  'kind' | 'allowOverlay' | 'displayData' | 'data'
> & {
  data?: string;
  allowOverlay?: boolean;
};

export const createTextCellGlide = (
  displayData: string,
  options?: TextCellOptions
): TextCell => ({
  kind: GridCellKind.Text,
  data: displayData,
  displayData,
  allowOverlay: true,
  readonly: true,
  ...options,
});
export const createEmptyCellGlide = (options?: TextCellOptions): TextCell => {
  const { data: _data, ...restOptions } = options ?? {};
  return {
    kind: GridCellKind.Text,
    data: '',
    displayData: '',
    allowOverlay: true,
    readonly: true,

    ...restOptions,
  };
};
