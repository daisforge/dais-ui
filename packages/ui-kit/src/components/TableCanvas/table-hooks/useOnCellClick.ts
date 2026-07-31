import { useCallback } from 'react';

import type { Maybe, ObjectForExtending } from '../types';
// FIXME
export const useOnCellClick = <_Row extends ObjectForExtending, _Summrow>({
  onCellClickExternal,
}: {
  onCellClickExternal: Maybe<
    (
      args: unknown /* CellClickArgs<Row, Summrow> */,
      event: unknown /* CellMouseEvent */,
    ) => void
  >;
}): Maybe<
  (
    args: unknown /* CellClickArgs<Row, Summrow> */,
    event: unknown /* CellMouseEvent */,
  ) => void
> =>
  useCallback<NonNullable<typeof onCellClickExternal>>(
    (_args, _event) => {
      // if (onCellClickExternal) {
      //   onCellClickExternal(args, event);
      // }
      // const isEditable =
      //   (typeof args.column?.editable === 'function' &&
      //     args.column?.editable?.(args.row)) ||
      //   args.column?.editable;
      // if (isEditable && !window.getSelection()?.toString()) {
      //   event.preventGridDefault();
      //   args.selectCell(true);
      // }
    },
    // [onCellClickExternal]
    [],
  );
