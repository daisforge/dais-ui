import { TextCellEntry } from '@glideappsfinal/glide-data-grid';
import { bodyM, bodyS, bodyXS } from '@ui-kit/tokens';
import { mergeClasses } from '@ui-kit/utils';
import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { useRowContext } from '../contexts';
import { CSS_VARIABLES } from '../renders/constants';
import type { EditingCellInfo, ObjectForExtending } from '../types';
import type { CustomCellStyleProps } from './types';
import { CellEditorTextAreaProps } from './types';

const mapperSizeToFont = {
  small: () => bodyXS,
  medium: () => bodyS,
  big: () => bodyM
};

const TextAreaWrap = styled.div<
  {
    paddingInline: number;
    size: keyof typeof mapperSizeToFont;
  } & CustomCellStyleProps
>`
  margin-block: auto;
  padding-inline: ${({ paddingInline }) => paddingInline}px;
  .gdg-growing-entry {
    margin-block: 6px;
  }
  * {
    ${({ size }) => css(mapperSizeToFont[size])}
  }

  ${({ disableLeftOffset, paddingInline, cellWidth }) =>
    disableLeftOffset &&
    css`
      margin-left: 0px;
      padding-left: 0px;
      & > div {
        margin-block: auto;
        height: fit-content;
        min-width: calc(
          min(${cellWidth}px, 400px) -
            var(${CSS_VARIABLES.subrowContainerPaddingLeft}) - 32px -
            ${paddingInline}px
        );
        max-width: calc(
          max(${cellWidth}px, 400px) -
            var(${CSS_VARIABLES.subrowContainerPaddingLeft}) - 32px -
            ${paddingInline}px
        );
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
    refExternal
  ) => {
    const { rowSize } = useRowContext();

    return (
      <TextAreaWrap
        size={rowSize}
        paddingInline={paddingInline}
        className={mergeClasses('tableCanvasTextAreaWrap', containerClassName)}
        cellHeight={cellHeight}
        cellWidth={cellWidth}
        disableLeftOffset={disableLeftOffset}
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
  }
);

export function CellEditorTextAreaInternal<
  TRow extends ObjectForExtending,
  TSummaryRow
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
  contentAlign
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
