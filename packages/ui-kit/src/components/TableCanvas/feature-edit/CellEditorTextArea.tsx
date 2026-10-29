import { TextCellEntry } from '@glideappsfinal/glide-data-grid';
import { mergeClasses } from '@ui-kit/utils';
import React, { forwardRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { useRowContext } from '../contexts';
import { type SIZE, SIZES } from '../styles';
import type { EditingCellInfo, ObjectForExtending } from '../types';
import { resolveCellFieldPadding } from './cellFieldStyles';
import { CellEditorTextAreaProps } from './types';

const TextAreaWrap = styled.div<{
  $paddingInline: number;
  $size: SIZE;
  $disableLeftOffset: boolean | undefined;
}>`
  /* Поле по центру ячейки любой высоты: без своих вертикальных отступов
     (у Glide сверху 6px), центрирует auto-margin внутри оверлея. */
  margin-block: auto;
  padding-inline: ${({ $paddingInline }) => $paddingInline}px;
  .gdg-growing-entry {
    margin-block: 0;
  }
  * {
    ${({ $size }) => css(SIZES[$size].font())}
  }

  /* В древовидной ячейке перед полем стоят отступ уровня и шеврон, поле
     берёт остаток ширины ячейки. */
  ${({ $disableLeftOffset }) =>
    $disableLeftOffset &&
    css`
      margin-left: 0px;
      padding-left: 0px;
      flex: 1 1 0;
      min-width: 0;
      & > div {
        margin-block: auto;
        height: fit-content;
        width: 100%;
      }
    `}
`;

export const CellEditorTextArea = forwardRef<
  HTMLTextAreaElement,
  CellEditorTextAreaProps
>(
  (
    {
      cellHeight,
      cellWidth,
      disableLeftOffset,
      autoFocusType,
      paddingInline,
      containerClassName,
      //
      ...props
    },
    refExternal,
  ) => {
    const { rowSize } = useRowContext();
    const { inline } = resolveCellFieldPadding({ rowSize, paddingInline });

    return (
      <TextAreaWrap
        $size={rowSize}
        $paddingInline={inline}
        $disableLeftOffset={disableLeftOffset}
        className={mergeClasses('tableCanvasTextAreaWrap', containerClassName)}
        onClick={(e) => {
          const ta = e.currentTarget?.getElementsByTagName('textarea')?.[0];
          const isClickFromTextArea = e.target === ta;
          if (!ta || isClickFromTextArea) return;
          const length = ta.value.length ?? 0;
          ta.focus();
          ta.setSelectionRange(length, length);
        }}
      >
        <TextCellEntry
          autoFocus={autoFocusType !== 'none'}
          highlight={autoFocusType === 'autoFocusAndSelect'}
          ref={refExternal}
          {...props}
        />
      </TextAreaWrap>
    );
  },
);

export function CellEditorTextAreaInternal<
  TRow extends ObjectForExtending,
  TSummaryRow,
>({
  row,
  column,
  initialValue,
  onRowChange,
  readOnly,
  cellHeight,
  cellWidth,
  disableLeftOffset,
  theme,
  contentAlign,
}: EditingCellInfo<TRow, TSummaryRow> & {
  disableLeftOffset: boolean | undefined;
  contentAlign?: 'left' | 'right' | 'center';
}) {
  const inputProps = (
    column?.editingCell as { inputProps?: Partial<CellEditorTextAreaProps> }
  )?.inputProps;

  const defV =
    initialValue ?? (row[column.key as keyof TRow] as unknown as string);
  const [v, setV] = useState(() => defV);

  /**
   * Вход в редактирование «перезаписью» (набор символа на выделенной ячейке):
   * Glide передаёт введённый символ как initialValue и НЕ триггерит onChange,
   * поэтому черновик строки остаётся старым и при коммите одного символа
   * значение не сохранялось. Засеиваем initialValue в onRowChange на маунте.
   */
  useEffect(() => {
    if (initialValue !== undefined && initialValue !== null) {
      onRowChange({ ...row, [column.key]: initialValue });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newVStr = event.target.value ?? '';
    setV(newVStr);
    onRowChange({ ...row, [column.key]: newVStr });
  };

  return (
    <CellEditorTextArea
      readOnly={readOnly}
      autoFocusType={initialValue ? 'autoFocus' : 'autoFocusAndSelect'}
      disableLeftOffset={disableLeftOffset}
      cellHeight={cellHeight}
      cellWidth={cellWidth}
      paddingInline={theme.cellHorizontalPadding}
      value={v ?? ''}
      onChange={onChange}
      {...inputProps}
      style={{ textAlign: contentAlign ?? 'left', ...inputProps?.style }}
    />
  );
}
