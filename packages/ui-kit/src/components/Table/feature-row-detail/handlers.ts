import { IconButtonProps } from '@ui-kit/components/IconButton';
import { ReactNode } from 'react';
import { ColSpanArgs } from 'react-data-grid';

import { CHECKBOX_COLUMN_KEY } from '../feature-select-row/constants';
import { Maybe, ObjectForExtending } from '../types/utils.type';
import { DETAIL_KEYS } from './constants';
import { RowDetailConfig } from './types';

export const rowIsHaveDetailPanel = <RowType extends ObjectForExtending>(
  row: RowType
) => !!(row as ObjectForExtending)?.[DETAIL_KEYS.IS_HAVE];

export const rowIsHaveExpandedDetailPanel = <
  RowType extends ObjectForExtending
>(
  row: RowType
) => !!(row as ObjectForExtending)?.[DETAIL_KEYS.IS_HAVE_EXPANDED];

// checkers
export const isDetailPanelRow = <RowType extends ObjectForExtending>(
  row: RowType
): row is RowType & { [DETAIL_KEYS.ROW_DATA]: RowType } =>
  !!(row as ObjectForExtending)?.[DETAIL_KEYS.IS_DETAIL_PANEL_ROW];

export const isEditableDetailPanel = <RowType extends ObjectForExtending>(
  row: RowType
) =>
  (row as ObjectForExtending)?.[DETAIL_KEYS.ROW_DETAIL_IS_EDITABLE] as boolean;

export const isEmptyDetailPanelCell = <RowType extends ObjectForExtending>(
  row: RowType,
  currIndex: number,
  indexZeroColKey: string | undefined
) => {
  const isDetailPanel = isDetailPanelRow(row);

  const isFirstColAfterCheckbox =
    indexZeroColKey === CHECKBOX_COLUMN_KEY ? currIndex === 1 : currIndex === 0;

  if (isDetailPanel && !isFirstColAfterCheckbox) {
    return { isEmptyCell: true };
  }
  return { isEmtpyCell: false };
};

// getters
export const getDetailPanelRowData = <RowType extends ObjectForExtending>(
  row: RowType
) => (row as ObjectForExtending)?.[DETAIL_KEYS.ROW_DATA] as RowType;
export const getDetailPanelRender = <RowType extends ObjectForExtending>(
  row: RowType
) =>
  (row as ObjectForExtending)?.[
    DETAIL_KEYS.ROW_DETAIL_RENDER
  ] as RowDetailConfig<RowType>['renderRowDetail'];

// TODO  режим редактирования detailPanel  - выключен и убран из типов, если будет потребность, нужно доработать
// export const getDetailPanelEdtingRender = <RowType extends ObjectForExtending>(
//     row: RowType
// ) =>
//     (row as ObjectForExtending)?.[
//         DETAIL_KEYS.ROW_DETAIL_RENDER_EDITING
//     ] as RowDetailConfig<RowType>['renderRowDetailEditing'];

export const getDetailPanelColSpan = ({
  indexZeroColKey,
  currIndex,
  arrOfCols
}: {
  indexZeroColKey: string | undefined;
  currIndex: number;
  arrOfCols: unknown[];
}) => {
  const isFirstColAfterCheckbox =
    indexZeroColKey === CHECKBOX_COLUMN_KEY ? currIndex === 1 : currIndex === 0;

  const columnsCountWithoutCheckboxCol =
    indexZeroColKey === CHECKBOX_COLUMN_KEY
      ? arrOfCols.length - 1
      : arrOfCols.length;

  if (isFirstColAfterCheckbox) {
    return columnsCountWithoutCheckboxCol;
  }
  return 0;
};

export const getDetailPanelHeight = <RowType>(
  row: RowType,
  rowDetailConfig: RowDetailConfig<RowType> | undefined
) => {
  if (!rowDetailConfig) {
    return 200;
  }
  if (typeof rowDetailConfig.detailHeight === 'function') {
    return rowDetailConfig.detailHeight(row);
  }
  return rowDetailConfig.detailHeight;
};
export const deleteDetailPanelServiceKeys = <Row extends ObjectForExtending>(
  r: Row
) => {
  Object.values(DETAIL_KEYS).forEach((key) => {
    delete r[key];
  });
};

export const getDetailPanelColSpanFunc =
  <RowType extends ObjectForExtending, SummaryRowType>({
    indexZeroColKey,
    currIndex,
    arr,
    columnColSpan
  }: {
    indexZeroColKey: string | undefined;
    currIndex: number;
    arr: unknown[];
    columnColSpan: Maybe<
      (args: ColSpanArgs<RowType, SummaryRowType>) => Maybe<number>
    >;
  }) =>
  (args: ColSpanArgs<RowType, SummaryRowType>) => {
    const isDetailPanel = args.type === 'ROW' && isDetailPanelRow(args.row);

    if (isDetailPanel) {
      return getDetailPanelColSpan({
        indexZeroColKey,
        currIndex,
        arrOfCols: arr
      });
    }

    return columnColSpan?.(args);
  };

export const getExpandButtonIcon = <RowType extends ObjectForExtending>(
  row: RowType,
  type: 'closed' | 'opened'
) =>
  (row as ObjectForExtending)?.[
    type === 'closed'
      ? DETAIL_KEYS.EXPAND_ICON_CLOSED
      : DETAIL_KEYS.EXPAND_ICON_OPENED
  ] as ReactNode;
export const getExpandButtonProps = <RowType extends ObjectForExtending>(
  row: RowType
) =>
  (row as ObjectForExtending)?.[DETAIL_KEYS.EXPAND_ICON_BUTTON_PROPS] as
    | IconButtonProps
    | undefined;
