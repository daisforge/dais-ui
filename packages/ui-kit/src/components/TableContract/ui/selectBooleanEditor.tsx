import { Select } from '@ui-kit/components/Select';
import {
  ObjectForExtending,
  SIZES,
  useRefTableGlobalContainerContext,
  useRowContext
} from '@ui-kit/components/Table';
import React, { useEffect, useRef } from 'react';
import { RenderEditCellProps } from 'react-data-grid';

const Bool = {
  true: true,
  false: false
} as const;

const items = [
  {
    value: true.toString(),
    label: true.toString()
  },
  {
    value: false.toString(),
    label: false.toString()
  }
];

export function SelectBooleanEditor<
  TRow extends ObjectForExtending,
  TSummaryRow
>({
  row,
  column,
  // columnConfig,
  onRowChange
}: RenderEditCellProps<TRow, TSummaryRow> & {
  // columnConfig: ColumnConfig<TRow, TSummaryRow>;
}) {
  const rowContextValue = useRowContext();

  // const columnConfigEditing = columnConfig.editingCell as NonNullable<
  //   typeof columnConfig.editingCell
  // >;

  const value = row[column.key as keyof TRow] as boolean | undefined;

  const valueAsStringOrUndefined =
    value === undefined ? value : value.toString();

  const ref = useRef<HTMLButtonElement | null>(null);

  const refTableGlobalContainer = useRefTableGlobalContainerContext();

  useEffect(() => {
    setTimeout(() => {
      ref.current?.click?.();
    }, 0);
  }, []);

  return (
    <Select
      ref={ref}
      portal={refTableGlobalContainer}
      listWidth="200px"
      value={valueAsStringOrUndefined}
      size={SIZES[rowContextValue.rowSize].input}
      onChange={(value: string) => {
        if (typeof value === 'string') {
          onRowChange(
            { ...row, [column.key]: Bool[value as keyof typeof Bool] },
            true
          );
        }
      }}
      items={items}
    />
  );
}
