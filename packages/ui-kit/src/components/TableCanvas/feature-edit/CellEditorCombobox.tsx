import { Combobox, type ComboboxItemOption } from '@ui-kit/components/Combobox';
import { mergeRefs } from '@ui-kit/utils';
import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useEffect,
  useRef
} from 'react';
import styled from 'styled-components';

import { useRowContext } from '../contexts';
import { SIZES } from '../styles';
import { EditingCellInfo, ObjectForExtending } from '../types';
import { CellEditorTextArea } from './CellEditorTextArea';
import type {
  CellEditorComboboxProps,
  CustomCellStyleProps,
  EmptyObj
} from './types';

/*
ПЕРЕОПРЕДЕЛЕНИЯ КАК НИЖЕ НУЖНЫ ДЛЯ СОХРАНЕНИЯ GENERIC-а и уменьшения нагрузки на ts-сервер

as <T extends ComboboxItemOption>(
  p: CellEditorComboboxProps<T>
) => ReactElement



ПЕРЕОПРЕДЕЛЕНИЯ КАК НИЖЕ НУЖНЫ ИЗ-ЗА КРИВОЙ ТИПИЗАЦИИ АТОМАРНЫХ КОМПОНЕНТОВ
И УСЛОЖНЕННЫХ ИЛИ ТЕРЯЮЩИХСЯ ТИПОВ styled-components.
И  именно EmptyObj вместо any или ObjectForExtending для того,
чтобы при внутренней типизации типы нам помогали, а не молчали

{...(props as unknown as EmptyObj)}
*/

const StyledCombobox = styled(Combobox)<CustomCellStyleProps>`
  && {
    .input-wrapper {
      box-shadow: none;
      background-color: inherit;
    }
  }
` as <T extends ComboboxItemOption>(
  p: Omit<CellEditorComboboxProps<T>, 'autoFocusType' | 'paddingInline'>
) => ReactElement;

export const CellEditorCombobox = forwardRef(
  <T extends ComboboxItemOption>(
    {
      cellWidth,
      cellHeight,
      disableLeftOffset,
      name,
      items,
      multiple,
      autoFocusType,
      style,
      readOnly,
      paddingInline,
      ...restProps
    }: CellEditorComboboxProps<T>,
    refExternal: ForwardedRef<HTMLInputElement>
  ) => {
    const ref = useRef<HTMLInputElement | null>(null);
    const { rowSize } = useRowContext();

    useEffect(() => {
      if (autoFocusType === 'none') return;

      setTimeout(() => {
        ref.current?.click?.();
      }, 0);
      // autoFocus только во время первого маунта
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const inputWidth = cellWidth + 2;
    const listWidth =
      cellWidth < 200
        ? '202px'
        : undefined; /* undefined - при undefined ширина listWidth=inputWidth */

    if (readOnly) {
      return (
        <CellEditorTextArea
          readOnly
          disableLeftOffset={disableLeftOffset}
          cellHeight={cellHeight}
          cellWidth={cellWidth}
          paddingInline={paddingInline}
          value={restProps.value ?? restProps.defaultValue ?? ''}
          onChange={() => {}}
        />
      );
    }

    return (
      <StyledCombobox<T>
        /* CustomCellStyleProps */
        cellHeight={cellHeight}
        cellWidth={cellWidth}
        disableLeftOffset={disableLeftOffset}
        /* просы с переопределенными типами -  нужны для устраненения ts-несоостветствий */
        name={name as string}
        multiple={multiple as true}
        items={items}
        //
        ref={mergeRefs(ref, refExternal)}
        style={{ maxWidth: inputWidth, ...style }}
        /* portal="portal2" - данный id поставлен как исключение в isOutsideClick в TableGlideInstance.
      Клики по нему не будут преждевременно закрывать режим редактирования */
        portal="portal2"
        flip
        readOnly={readOnly}
        alwaysOpened={!readOnly}
        listWidth={listWidth}
        listMaxHeight="350px"
        zIndex={9001}
        size={SIZES[rowSize].input}
        /* типы из-за styled или по др причине не встают один в один */
        {...(restProps as unknown as EmptyObj)}
      />
    );
  }
) as <T extends ComboboxItemOption>(
  p: CellEditorComboboxProps<T>
) => ReactElement;

export function CellEditorComboboxInternal<
  TRow extends ObjectForExtending,
  TSummaryRow
>({
  row,
  column,
  cellWidth,
  cellHeight,
  onRowChange,
  disableLeftOffset,
  readOnly,
  theme
}: EditingCellInfo<TRow, TSummaryRow> & {
  disableLeftOffset: boolean | undefined;
}) {
  const rowContextValue = useRowContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectProps = (column as any)?.editingCell?.selectProps;

  const columnConfigEditing = column?.editingCell as NonNullable<
    typeof column.editingCell
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

  const items = [
    ...options.map((el) => ({
      value: el.value.toString(),
      label: el.text.toString()
    }))
  ];

  return (
    <CellEditorCombobox
      readOnly={readOnly}
      paddingInline={theme.cellHorizontalPadding}
      /* CustomCellStyleProps */
      cellWidth={cellWidth}
      cellHeight={cellHeight}
      disableLeftOffset={disableLeftOffset}
      /* CellEditorComboboxInternal props */
      defaultValue={valueAfterCheck}
      onChange={(value: unknown) => {
        if (typeof value === 'string') {
          /* onFinishedEditing - одиночный выбор, поэтому выбираем и сразу закрываем режим ред у ячейки */
          onRowChange({ ...row, [column.key]: value }, true);
        }
      }}
      items={items}
      /* rest external props */
      {...selectProps}
    />
  );
}
