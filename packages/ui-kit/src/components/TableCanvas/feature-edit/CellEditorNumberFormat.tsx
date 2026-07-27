import {
  NumberFormat,
  type NumberFormatCompProps
} from '@ui-kit/components/NumberFormat';
import { mergeRefs } from '@ui-kit/utils';
import React, { forwardRef, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';

import { useRowContext } from '../contexts';
import { SIZES } from '../styles/styles.constants';
import { ContentFormat, NumberFormatOptions } from '../TableGlideInstance/type';
import type { EditingCellInfo, ObjectForExtending } from '../types';
import type {
  CellEditorNumberFormatProps,
  CustomCellStyleNumberFormatProps,
  EmptyObj
} from './types';
import { autoFocus, autoFocusAndSelect } from './utils';

const StyledNumberFormat: (
  props: NumberFormatCompProps & CustomCellStyleNumberFormatProps
) => ReactElement = styled(NumberFormat)<CustomCellStyleNumberFormatProps>`
  ${({ align }) =>
    align &&
    css`
      & input {
        text-align: ${align};
      }
    `}
  ${({ readOnly }) =>
    readOnly &&
    css`
      && .input-wrapper:before {
        box-shadow: none;
      }
    `}
  ${({ disableLeftOffset }) =>
    disableLeftOffset &&
    css`
      .input-wrapper {
        padding-left: 0px;
      }
    `}

  width: ${({ cellWidth }) =>
    cellWidth < 130 ? 130 : cellWidth + 2}px !important;

  &,
  & > * {
    min-height: ${({ cellHeight }) => cellHeight + 3}px;
  }
`;
const autofocusMapper = {
  autoFocusAndSelect,
  autoFocus,
  none: undefined
};

export const CellEditorNumberFormat = forwardRef<
  HTMLInputElement,
  CellEditorNumberFormatProps
>(
  (
    {
      cellHeight,
      cellWidth,
      disableLeftOffset,
      align = 'right',
      autoFocusType,

      ...props
    },
    refExternal
  ) => {
    const { rowSize } = useRowContext();

    return (
      <StyledNumberFormat
        cellHeight={cellHeight}
        cellWidth={cellWidth}
        disableLeftOffset={disableLeftOffset}
        align={align}
        autoFocusType={autoFocusType}
        ref={
          mergeRefs(
            autofocusMapper[autoFocusType],
            refExternal
          ) as React.Ref<HTMLInputElement>
        }
        size={SIZES[rowSize].input}
        placeholder=""
        allowNegative
        /** в типах нет, но на логику отображения влияет  */
        view={'clear' as never}
        autoComplete={'false' as never}
        enumerationType={undefined}
        /* типы из-за styled или по др причине не встают один в один */
        {...(props as unknown as EmptyObj)}
      />
    );
  }
);

export function CellEditorNumberFormatInternal<
  TRow extends ObjectForExtending,
  TSummaryRow
>({
  row,
  column,
  onRowChange,
  readOnly,
  cellWidth,
  cellHeight,
  initialValue,
  formatOptions,
  disableLeftOffset
}: EditingCellInfo<TRow, TSummaryRow> & {
  formatOptions: ContentFormat | undefined;
  disableLeftOffset: boolean | undefined;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputProps = (column as any)?.editingCell?.inputProps ?? {};

  const getNumberFormat = (): NumberFormatOptions => {
    const defaultCfg: NumberFormatOptions = {
      type: 'number',
      decimalSeparator: ',',
      thousandSeparator: ' ',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      alignContent: 'right'
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
    alignContent
  } = getNumberFormat();

  const initialValueAsNumber =
    initialValue && !isNaN(+initialValue) ? +initialValue : null;

  const [v, setV] = useState<string | number>(
    initialValueAsNumber ?? (row[column.key as keyof TRow] as unknown as number)
  );

  const handleChange = (
    _event?: React.ChangeEvent<HTMLInputElement>,
    values?: {
      floatValue: number | undefined;
      formattedValue: string;
      value: string;
    }
  ) => {
    if (values) {
      const resultValue = values.floatValue ?? values.formattedValue;
      setV(resultValue);
      onRowChange({
        ...row,
        [column.key]: resultValue
      });
    }
  };
  return (
    <CellEditorNumberFormat
      readOnly={readOnly}
      cellWidth={cellWidth}
      cellHeight={cellHeight}
      disableLeftOffset={disableLeftOffset}
      align={alignContent}
      autoFocusType={
        initialValueAsNumber === null ? 'autoFocusAndSelect' : 'autoFocus'
      }
      value={v}
      onChange={handleChange}
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
      decimalScale={maximumFractionDigits}
      fixedDecimalScale={minimumFractionDigits !== undefined}
      /* типы из-за styled или по др причине не встают один в один */
      {...(inputProps as unknown as EmptyObj)}
    />
  );
}
