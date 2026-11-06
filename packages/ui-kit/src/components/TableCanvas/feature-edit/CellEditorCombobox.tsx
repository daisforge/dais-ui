import { Combobox, type ComboboxItemOption } from '@ui-kit/components/Combobox';
import { SELECT_LIST_PORTAL_ID } from '@ui-kit/components/TableCanvasSharedConstants';
import { mergeRefs } from '@ui-kit/utils';
import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';

import { useRefTableContext, useRowContext } from '../contexts';
import { SIZES } from '../styles';
import { EditingCellInfo, ObjectForExtending } from '../types';
import { CellEditorTextArea } from './CellEditorTextArea';
import {
  type CellFieldGeometry,
  cellFieldStyles,
  FieldBox,
  selectArrowStyles,
} from './cellFieldStyles';
import type { CellEditorComboboxProps, EmptyObj } from './types';
import { useSelectListPlacement } from './useSelectListPlacement';

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

/** Ширина списка не меньше этой: в узкой ячейке пункты иначе не прочитать. */
const MIN_LIST_WIDTH = 200;

const StyledCombobox = styled(Combobox)<{ $geometry: CellFieldGeometry }>`
  ${({ $geometry }) => cellFieldStyles($geometry)}
  ${({ $geometry }) => selectArrowStyles($geometry.rowSize)}
` as <T extends ComboboxItemOption>(
  p: Omit<
    CellEditorComboboxProps<T>,
    keyof CellFieldGeometry | 'autoFocusType'
  > & { $geometry: CellFieldGeometry },
) => ReactElement;

export const CellEditorCombobox = forwardRef(
  <T extends ComboboxItemOption>(
    {
      cellWidth,
      cellHeight,
      disableLeftOffset,
      paddingInline,
      paddingBlock,
      verticalAlign,
      name,
      items,
      multiple,
      autoFocusType,
      readOnly,
      ...restProps
    }: CellEditorComboboxProps<T>,
    refExternal: ForwardedRef<HTMLInputElement>,
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

    const geometry: CellFieldGeometry = {
      rowSize,
      cellWidth,
      cellHeight,
      paddingInline,
      paddingBlock,
      disableLeftOffset,
    };
    /* undefined: ширина списка равна ширине поля */
    const listWidth =
      cellWidth < MIN_LIST_WIDTH ? `${MIN_LIST_WIDTH}px` : undefined;

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
      <FieldBox
        $cellWidth={cellWidth}
        $cellHeight={cellHeight}
        $verticalAlign={verticalAlign}
      >
        <StyledCombobox<T>
          $geometry={geometry}
          name={name as string}
          multiple={multiple as true}
          items={items}
          //
          ref={mergeRefs(ref, refExternal)}
          /* данный id поставлен как исключение в isOutsideClick в TableGlideInstance.
      Клики по нему не будут преждевременно закрывать режим редактирования */
          portal={SELECT_LIST_PORTAL_ID}
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
      </FieldBox>
    );
  },
) as <T extends ComboboxItemOption>(
  p: CellEditorComboboxProps<T>,
) => ReactElement;

export function CellEditorComboboxInternal<
  TRow extends ObjectForExtending,
  TSummaryRow,
>({
  row,
  column,
  cellWidth,
  cellHeight,
  onRowChange,
  disableLeftOffset,
  readOnly,
  theme,
  mergedVerticalAlign,
  cellY,
}: EditingCellInfo<TRow, TSummaryRow> & {
  disableLeftOffset: boolean | undefined;
  /** Вертикальное выравнивание объединённого блока: выбирает сторону списка. */
  mergedVerticalAlign?: 'top' | 'center' | 'bottom';
}) {
  const rowContextValue = useRowContext();
  const refTable = useRefTableContext();
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
      label: el.text.toString(),
    })),
  ];

  const placement = useSelectListPlacement({
    preferTop: mergedVerticalAlign === 'bottom' && !readOnly,
    getSpaceAbove: () => {
      // Шапка отдаёт верх области данных: row -1 у Glide это строка заголовков.
      const headerBounds = refTable?.current?.getBounds(0, -1);
      return cellY !== undefined && headerBounds
        ? cellY - (headerBounds.y + headerBounds.height)
        : undefined;
    },
  });

  return (
    <CellEditorCombobox
      readOnly={readOnly}
      paddingInline={theme.cellHorizontalPadding}
      paddingBlock={theme.cellVerticalPadding}
      verticalAlign={mergedVerticalAlign}
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
      placement={placement}
      /* rest external props */
      {...selectProps}
    />
  );
}
