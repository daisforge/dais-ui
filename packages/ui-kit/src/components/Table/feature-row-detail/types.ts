import { IconButtonProps } from '@ui-kit/components/IconButton';
import { ReactNode } from 'react';

import { ObjectForExtending, Prettify } from '../types/utils.type';

export type HandleExpandDetail<RowType extends ObjectForExtending> = (
  row: RowType
) => void;

export type IconsPropType = {
  closed?: ReactNode;
  opened?: ReactNode;
  iconButtonProps?: IconButtonProps;
};

export type RowDetailConfig<RowType> = {
  rowKeyGetter: (row: RowType) => string | number;
  isRowWithDetail: (r: RowType) => boolean;
  renderRowDetail: (props: {
    row: RowType;
    tabIndex: number;
    onRowChange: (row: RowType) => void;
    rowIdx: number;
    colIdx: number;
  }) => ReactNode;

  detailHeight: number | ((r: RowType) => number);
  expandButtonColumnKey: string;
  icons?: Prettify<IconsPropType>;

  // TODO  режим редактирования detailPanel  - выключен и убран из типов, если будет потребность, нужно доработать
  // renderRowDetailEditing?: (props: {
  //     row: RowType;
  //     onRowChange: (row: RowType, commitChanges?: boolean) => void;
  //     onClose: (commitChanges?: boolean, shouldFocusCell?: boolean) => void;
  // }) => ReactNode;
  // rowDetailIsEditable?: boolean | ((row: RowType) => boolean);
};
