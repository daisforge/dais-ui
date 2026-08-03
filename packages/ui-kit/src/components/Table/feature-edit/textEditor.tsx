import { TextField } from '@ui-kit/components/TextField';
import React from 'react';
import { RenderEditCellProps } from 'react-data-grid';

import { useRowContext } from '../contexts';
import { SIZES } from '../styles';
import type { ContentFormat, NumberFormatOptions } from '../types';
import { StyledNumberFormat } from './textEditor.styled';

export function autoFocusAndSelect(input: HTMLInputElement | null) {
  input?.focus();
  input?.select();
}

// FIXME: DFP-4267 const inputProps = (column as any)?.editingCell?.inputProps; вместо этой записи передавать внешние пропсы из конфига наружу. Исправить, когда атомарная команда наведет порядок с типами. (Обсудить с Рамилем)
export function TextEditorString<TRow, TSummaryRow>({
  row,
  column,
  onRowChange,
  onClose,
}: RenderEditCellProps<TRow, TSummaryRow>) {
  const { rowSize } = useRowContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputProps = (column as any)?.editingCell?.inputProps;
  return (
    <TextField
      size={SIZES[rowSize].input}
      view="clear"
      ref={autoFocusAndSelect}
      value={row[column.key as keyof TRow] as unknown as string}
      onChange={(event) =>
        onRowChange({ ...row, [column.key]: event.target.value })
      }
      onBlur={() => onClose(true, false)}
      {...inputProps}
    />
  );
}

// FIXME: const inputProps = (column as any)?.editingCell?.inputProps; вместо этой записи передавать внешние пропсы из конфига наружу. Исправить, когда атомарная команда наведет порядок с типами. (Обсудить с Рамилем)
export function TextEditorNumber<TRow, TSummaryRow>({
  row,
  column,
  onRowChange,
  onClose,
  formatOptions,
}: RenderEditCellProps<TRow, TSummaryRow> & {
  formatOptions?: ContentFormat;
}) {
  const { rowSize } = useRowContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputProps = (column as any)?.editingCell?.inputProps;

  const getNumberFormat = (): NumberFormatOptions => {
    const defaultCfg: NumberFormatOptions = {
      type: 'number',
      decimalSeparator: ',',
      thousandSeparator: ' ',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      alignContent: 'left',
    };

    if (!formatOptions || formatOptions === 'number') {
      return defaultCfg;
    }

    if ('type' in formatOptions && formatOptions.type === 'number') {
      return { ...defaultCfg, ...formatOptions };
    }

    return defaultCfg;
  };

  const {
    decimalSeparator,
    thousandSeparator,
    minimumFractionDigits,
    maximumFractionDigits,
    alignContent,
  } = getNumberFormat();

  const handleChange = (
    _event?: React.ChangeEvent<HTMLInputElement>,
    values?: {
      floatValue: number | undefined;
      formattedValue: string;
      value: string;
    },
  ) => {
    if (values) {
      onRowChange({
        ...row,
        [column.key]: values.floatValue ?? values.formattedValue,
      });
    }
  };

  return (
    <StyledNumberFormat
      ref={autoFocusAndSelect}
      size={SIZES[rowSize].input}
      value={row[column.key as keyof TRow] as unknown as number}
      onChange={handleChange}
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
      decimalScale={maximumFractionDigits}
      fixedDecimalScale={minimumFractionDigits !== undefined}
      allowNegative
      onBlur={() => onClose(true, false)}
      $align={alignContent}
      view="clear"
      {...inputProps}
    />
  );
}
