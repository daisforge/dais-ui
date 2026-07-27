import { useCallback } from 'react';

import type { CellMouseEvent, Maybe, ObjectForExtending } from '../types';
import type { CellClickArgs } from '../types/data-grid.type';

export const useOnCellClick = <Row extends ObjectForExtending, Summrow>({
  onCellClickExternal
}: {
  onCellClickExternal: Maybe<
    (args: CellClickArgs<Row, Summrow>, event: CellMouseEvent) => void
  >;
}): Maybe<(args: CellClickArgs<Row, Summrow>, event: CellMouseEvent) => void> =>
  useCallback<NonNullable<typeof onCellClickExternal>>(
    (args, event) => {
      if (onCellClickExternal) {
        onCellClickExternal(args, event);
      }

      const isEditable =
        (typeof args.column?.editable === 'function' &&
          args.column?.editable?.(args.row)) ||
        args.column?.editable;

      if (isEditable && !window.getSelection()?.toString()) {
        event.preventGridDefault();
        args.selectCell(true);
      }
    },
    [onCellClickExternal]
  );
