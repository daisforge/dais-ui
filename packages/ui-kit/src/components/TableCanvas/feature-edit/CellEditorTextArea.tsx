import { TextCellEntry } from '@glideappsfinal/glide-data-grid';
import { mergeClasses } from '@ui-kit/utils';
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import { getRowHeightBySize } from '../../TableGlide/theming/size-tokens';
import { useRowContext } from '../contexts';
import { CLASS } from '../renders/constants';
import { type SIZE, SIZES } from '../styles';
import type { EditingCellInfo, ObjectForExtending } from '../types';
import { resolveCellFieldPadding } from './cellFieldStyles';
import { getTextEditorMaxHeight } from './getTextEditorMaxHeight';
import { CellEditorTextAreaProps } from './types';
import { MIN_EDITOR_FIELD_WIDTH } from './utils';

type VerticalAlign = 'top' | 'center' | 'bottom';

/* По центру отступ ставит первую строку на место текста ячейки, длинный текст растёт
   вниз. Сверху и снизу отступ как у ячейки, а строка держит высоту ячейки. */
const blockPadding = ({
  $verticalAlign,
  $cellHeight,
  $paddingBlock,
}: {
  $verticalAlign: VerticalAlign;
  $cellHeight: number;
  $paddingBlock: number;
}) =>
  $verticalAlign === 'center'
    ? `calc((${$cellHeight}px - 1lh) / 2)`
    : `${$paddingBlock}px`;

const TextAreaWrap = styled.div<{
  $paddingInline: number;
  $paddingBlock: number;
  $verticalAlign: VerticalAlign;
  $cellHeight: number;
  $width: number;
  $size: SIZE;
  $disableLeftOffset: boolean | undefined;
  $maxHeight: number;
}>`
  /* Ширина как у ячейки, длинный текст переносится и растит редактор вниз. */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $verticalAlign }) =>
    $verticalAlign === 'bottom' ? 'flex-end' : 'flex-start'};
  width: ${({ $width }) => $width}px;
  min-height: ${({ $cellHeight }) => $cellHeight}px;
  padding-inline: ${({ $paddingInline }) => $paddingInline}px;
  padding-block: ${blockPadding};

  /* Высоту поля задаёт скрытая копия текста, у неё свои отступы Glide убраны.
     Дойдя до предела, поле перестаёт расти, и textarea прокручивается сам. */
  .gdg-growing-entry {
    flex: 0 0 auto;
    margin-block: 0;
    max-height: calc(${({ $maxHeight }) => $maxHeight}px - 2 * ${blockPadding});
    overflow: hidden;
  }
  .gdg-growing-entry > div {
    padding-bottom: 0;
  }
  .gdg-growing-entry textarea {
    overflow-y: auto;
  }
  /* Canvas рисует буквы без сжатия из токена шрифта, иначе строки переносятся по-разному. */
  &,
  * {
    ${({ $size }) => css(SIZES[$size].font())}
    letter-spacing: normal;
  }

  /* Рядом с шевроном или кнопкой деталей поле занимает оставшееся место. */
  .${CLASS.editableCellWithExpandButton} & {
    width: auto;
    flex: 1 1 0;
    min-width: 0;
  }

  ${({ $disableLeftOffset }) =>
    $disableLeftOffset &&
    css`
      margin-left: 0px;
      padding-left: 0px;
      & > div {
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
      paddingBlock,
      verticalAlign = 'center',
      containerClassName,
      //
      ...props
    },
    refExternal,
  ) => {
    const { rowSize } = useRowContext();
    const { inline, block } = resolveCellFieldPadding({
      rowSize,
      paddingInline,
      paddingBlock,
    });

    const wrapRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState(cellHeight);

    useLayoutEffect(() => {
      setMaxHeight(
        getTextEditorMaxHeight({
          cellHeight,
          editorTop: wrapRef.current?.getBoundingClientRect().top ?? 0,
          windowHeight: window.innerHeight,
        }),
      );
    }, [cellHeight]);

    return (
      <TextAreaWrap
        ref={wrapRef}
        $size={rowSize}
        $paddingInline={inline}
        $paddingBlock={block}
        $verticalAlign={verticalAlign}
        $cellHeight={cellHeight}
        $width={Math.max(cellWidth, MIN_EDITOR_FIELD_WIDTH)}
        $disableLeftOffset={disableLeftOffset}
        $maxHeight={maxHeight}
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
  verticalAlign,
}: EditingCellInfo<TRow, TSummaryRow> & {
  disableLeftOffset: boolean | undefined;
  contentAlign?: 'left' | 'right' | 'center';
}) {
  // Блок ставит текст по своему выравниванию. Своя отрисовка колонки в строке выше
  // обычной рисует текст сверху (перенос строк), а обычная ячейка по центру.
  const isTallRow = cellHeight > getRowHeightBySize(theme.rowSize ?? 'big') + 1;
  const resolvedVerticalAlign =
    verticalAlign ?? (column.renderCell && isTallRow ? 'top' : 'center');
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
      paddingBlock={theme.cellVerticalPadding}
      verticalAlign={resolvedVerticalAlign}
      value={v ?? ''}
      onChange={onChange}
      {...inputProps}
      style={{ textAlign: contentAlign ?? 'left', ...inputProps?.style }}
    />
  );
}
