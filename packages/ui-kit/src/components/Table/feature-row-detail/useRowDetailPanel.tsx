import { useMemo, useState } from 'react';

import { ObjectForExtending } from '../types';
import { DETAIL_KEYS } from './constants';
import { RowDetailConfig } from './types';

export const useRowDetailPanel = <RowType extends ObjectForExtending>({
  rows,
  tableConfigRowDetail
}: {
  rows: readonly RowType[];
  tableConfigRowDetail: RowDetailConfig<RowType> | undefined;
}) => {
  const [rowIdsWithExpDetails, setRowIdsWithExpDetails] = useState(
    new Set<string | number>()
  );

  const rowDetailIsActiveInConfig = !!tableConfigRowDetail;

  const rowDetailContextValue = useMemo(
    () => {
      const expandButtonColumnKey = tableConfigRowDetail?.expandButtonColumnKey;
      const handleExpandRowDetail = (row: RowType) => {
        if (!rowDetailIsActiveInConfig) {
          return;
        }

        const { rowKeyGetter } = tableConfigRowDetail;

        const rowId = rowKeyGetter(row);

        setRowIdsWithExpDetails((prev) => {
          const newM = new Set(prev);
          const isHave = newM.has(rowId);
          if (isHave) {
            newM.delete(rowId);
          } else {
            newM.add(rowId);
          }

          return newM;
        });
      };
      return { handleExpandRowDetail, expandButtonColumnKey };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rowDetailIsActiveInConfig]
  );

  const rowsWithExpDetails = useMemo(() => {
    if (!rowDetailIsActiveInConfig) {
      return rows;
    }

    const { rowKeyGetter, isRowWithDetail, renderRowDetail, icons } =
      tableConfigRowDetail;

    return rows.reduce((acc, curr) => {
      // 1 - changing row
      const isHaveDetail = isRowWithDetail(curr);
      const rowId = rowKeyGetter(curr);
      const isHaveExpandedDetail =
        isHaveDetail && rowIdsWithExpDetails.has(rowId);

      acc.push({
        ...curr,
        ...(isHaveDetail && {
          [DETAIL_KEYS.IS_HAVE]: isHaveDetail,
          [DETAIL_KEYS.IS_HAVE_EXPANDED]: isHaveExpandedDetail,

          ...(!!icons?.closed && {
            [DETAIL_KEYS.EXPAND_ICON_CLOSED]: icons.closed
          }),
          ...(!!icons?.opened && {
            [DETAIL_KEYS.EXPAND_ICON_OPENED]: icons.opened
          }),
          ...(!!icons?.iconButtonProps && {
            [DETAIL_KEYS.EXPAND_ICON_BUTTON_PROPS]: icons.iconButtonProps
          })
        })
      });
      // 2 - adding rowDetail
      // TODO  режим редактирования detailPanel  - выключен и убран из типов, если будет потребность, нужно доработать
      // const detailIsEditable =
      //     (typeof rowDetailIsEditable === 'boolean' &&
      //         rowDetailIsEditable) ||
      //     (typeof rowDetailIsEditable === 'function' &&
      //         rowDetailIsEditable(curr)) ||
      //     !!renderRowDetailEditing;

      if (isHaveExpandedDetail) {
        acc.push({
          [DETAIL_KEYS.IS_DETAIL_PANEL_ROW]: true,
          [DETAIL_KEYS.ROW_DATA]: curr,
          [DETAIL_KEYS.ROW_DETAIL_RENDER]: renderRowDetail
          // TODO  режим редактирования detailPanel  - выключен и убран из типов, если будет потребность, нужно доработать
          // [DETAIL_KEYS.ROW_DETAIL_IS_EDITABLE]: detailIsEditable,
          // [DETAIL_KEYS.ROW_DETAIL_RENDER_EDITING]:
          //     renderRowDetailEditing,
        } as unknown as RowType);
      }

      return acc;
    }, [] as RowType[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, rowDetailIsActiveInConfig, rowIdsWithExpDetails]);

  return {
    rowDetailContextValue,
    rowsWithExpDetails,
    rowDetailIsActiveInConfig
  };
};
