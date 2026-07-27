import { Combobox } from '@ui-kit/components/Combobox';
import React, { useEffect, useRef } from 'react';
import { RenderEditCellProps } from 'react-data-grid';

import { useRefTableGlobalContainerContext, useRowContext } from '../contexts';
import { SIZES } from '../styles';
import { ColumnConfig, ObjectForExtending } from '../types';

// FIXME: DFP-4267 const selectProps = (column as any)?.editingCell?.selectProps; вместо этой записи передавать внешние пропсы из конфига наружу. Исправить, когда атомарная команда наведет порядок с типами. (Обсудить с Рамилем)
export function SelectEditor<TRow extends ObjectForExtending, TSummaryRow>({
  row,
  column,
  columnConfig,
  onRowChange
}: RenderEditCellProps<TRow, TSummaryRow> & {
  columnConfig: ColumnConfig<TRow, TSummaryRow>;
}) {
  const rowContextValue = useRowContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectProps = (column as any)?.editingCell?.selectProps;

  const columnConfigEditing = columnConfig.editingCell as NonNullable<
    typeof columnConfig.editingCell
  >;

  const value = row[column.key as keyof TRow];

  const options = (() => {
    if (
      typeof columnConfigEditing.component === 'function' ||
      columnConfigEditing.component === 'inputNumber' ||
      columnConfigEditing.component === 'inputString'
    ) {
      return [];
    }
    if (columnConfigEditing?.options.type === 'constant') {
      return columnConfigEditing?.options.options;
    }
    return (
      ((rowContextValue as unknown as ObjectForExtending)?.[
        columnConfigEditing?.options.optionsKeyInRowContext
      ] as { value: string | number; text: string | number }[]) ?? []
    );
  })();
  const valueAfterCheck =
    options.find((o) => o.value === value)?.value?.toString?.() ?? '';

  const ref = useRef<HTMLInputElement | null>(null);

  const refTableGlobalContainer = useRefTableGlobalContainerContext();

  useEffect(() => {
    setTimeout(() => {
      ref.current?.click?.();
    }, 0);
  }, []);

  const items = [
    ...options.map((el) => ({
      value: el.value.toString(),
      label: el.text.toString()
    }))
  ];

  return (
    <Combobox
      ref={ref}
      portal={refTableGlobalContainer}
      // listWidth="200px"
      value={valueAfterCheck}
      size={SIZES[rowContextValue.rowSize].combobox}
      onChange={(value: string) => {
        if (typeof value === 'string') {
          onRowChange({ ...row, [column.key]: value }, true);
        }
      }}
      view="clear"
      items={items}
      {...selectProps}
    />
  );
}
