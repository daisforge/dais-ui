/* eslint-disable @typescript-eslint/ban-types */
import { ReactElement, ReactNode } from 'react';

import type {
  CellEditorComboboxProps,
  CellEditorNumberFormatProps,
  CellEditorTextAreaProps,
  ComboboxItemOption
} from '../feature-edit/types';
import { FilterComponentInPopoverProps } from '../feature-filtering/header-filter-button/types';
import { KeyText } from '../feature-key-text/types';
import { ColumnRowsGrouping } from '../feature-rows-grouping/types';
import { SortColumn, SortDirection } from '../feature-sorting/types';
import type {
  CellActiveState,
  CellContent,
  CellHoverState,
  CellInfoGlideInstance,
  CellThemeOverrideResult,
  ContentFormat,
  EditingCellInfoGlideInstance,
  HeaderCellInfoGlideInstance,
  PreviewCellInfoGlideInstance
} from '../TableGlideInstance/type';
import { CtxsType } from './ctxs.type';
import type { ColumnDefaultOmitted } from './glide-type';
import { ObjectForExtending } from './utils.type';

export type { SortColumn, SortDirection };

export type HeaderCellInfo<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {}
> = Omit<HeaderCellInfoGlideInstance<R, SR, CustomCtxs>, 'column' | 'ctxs'> & {
  column: ColumnConfig<R, SR, CustomCtxs>;
  ctxs: CtxsType<CustomCtxs>;
};
export type CellInfo<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {}
> = Omit<
  CellInfoGlideInstance<R, SR, CustomCtxs>,
  'column' | 'ctxs' | 'hovered' | 'active'
> & {
  column: ColumnConfig<R, SR, CustomCtxs>;
  ctxs: CtxsType<CustomCtxs>;
  /**
   * Состояние наведения для текущей ячейки, которую рендерит renderCell.
   * `cellHover` равно true только у ячейки под курсором, `rowHover` — у всех ячеек ее строки.
   */
  hovered: CellHoverState;
  /**
   * Состояние активного выделения для текущей ячейки, которую рендерит renderCell.
   * `cellActive` равно true у активной ячейки или диапазона, `rowActive` — у строк с активной ячейкой или диапазоном.
   */
  active: CellActiveState;
};
export type { CellInfo as RenderCellProps };

export type EditingCellInfo<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = ObjectForExtending
> = Omit<EditingCellInfoGlideInstance<R, SR, CustomCtxs>, 'column'> & {
  column: ColumnConfig<R, SR, CustomCtxs>;
};

export type PreviewCellInfo<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = ObjectForExtending
> = Omit<PreviewCellInfoGlideInstance<R, SR, CustomCtxs>, 'column'> & {
  column: ColumnConfig<R, SR, CustomCtxs>;
};

export type Comparator<Row extends ObjectForExtending> = (
  a: Row,
  b: Row
) => number;

type FilterCb<Mode extends 'multiple' | 'single' | void = 'single'> = (
  filterV: Mode extends 'multiple' ? string[] : string,
  rowValue: string
) => boolean;

export type RenderSubRowCell<
  SubRowType extends ObjectForExtending,
  SummaryRowType = unknown,
  CustomCtxs extends ObjectForExtending = {}
> = (
  renderCellProps: CellInfo<SubRowType, SummaryRowType, CustomCtxs>,
  lvl: number
) => CellContent;

export type RenderRowCustomEditCell<
  SubRowType extends ObjectForExtending,
  SummaryRowType = unknown,
  CustomCtxs extends ObjectForExtending = {}
> = (
  renderCellProps: EditingCellInfo<SubRowType, SummaryRowType, CustomCtxs>,
  lvl: number,
  disableLeftOffset: boolean | undefined
) => ReactNode;

export type SelectOptions = {
  value: string | number;
  text: string | number;
};

export type Editing<RowType extends ObjectForExtending, SummaryRowType> = {
  /**
   * Если `error.value(row) === true`, то у ячейки появляется красная рамка
   */
  error?: { value: (row: RowType, treeLevel: number) => boolean };
  editedSuccessfully?: { value: (row: RowType, treeLevel: number) => boolean };
  /**
   * Функция для определения возможности редактирования  ячейки на основе данных строки (приоритетнее, чем rowEditable в tableConfig.editing)
   */
  editable?: ((row: RowType) => boolean) | boolean;
} & (
  | {
      component: 'inputString';
      /**
       * Дополнительные пропсы для компонента TextField в редактировании
       * @example { placeholder: "Введите текст"}
       */
      inputProps?: Partial<
        Omit<
          CellEditorTextAreaProps,
          'value' | 'onChange' | 'onBlur' | 'ref' | 'size'
        >
      >;
    }
  | {
      component: 'inputNumber';
      /**
       * Дополнительные пропсы для компонента NumberFormat в редактировании
       * @example { placeholder: "Введите текст"}
       */
      inputProps?: Partial<
        Omit<
          CellEditorNumberFormatProps,
          'value' | 'onChange' | 'onBlur' | 'ref' | 'size'
        >
      >;
    }
  | {
      component: 'select';
      options: {
        type: 'constant';
        options: SelectOptions[];
      };
      /**
       * Дополнительные пропсы для компонента Combobox в редактировании
       * @example { listMaxHeight: "100px"}
       */
      selectProps?: Partial<
        Omit<
          CellEditorComboboxProps<ComboboxItemOption>,
          'value' | 'onChange' | 'items' | 'ref' | 'size' | 'portal'
        >
      >;
    }
  | {
      component: 'select';

      options: {
        type: 'stateInRowContext';
        /**
         * тип optionsState, который будет в RowContext:
         * ```ts
         * options: {
         * value: string | number;
         * text: string | number;
         * }[];
         * ```
         */
        optionsKeyInRowContext: string;
      };
    }
  | {
      /**
       * Кастомный рендер ячейки редактирования
       */
      component: RenderRowCustomEditCell<RowType, SummaryRowType>;
    }
);

/**
 * Конфигурация колонки для активации фичи ключ-текст.
 * Настройка как у полноценной колонки.
 */
export type KeyTextColumnConfig<
  Row extends ObjectForExtending,
  SummRow = unknown
> =
  | ((props: { keyText: KeyText }) => ColumnConfig<Row, SummRow>)
  | ColumnConfig<Row, SummRow>;

/**
 * Управление preview-ячейкой (overlay при двойном клике на readonly-ячейку).
 * 'none' — отключает превью (в т.ч. стандартный текстовый).
 * 'cellEditorAsPreview' — включает стандартный текстовый превью (CellReadOnlyEditor).
 * Функция — полностью кастомный рендер.
 */
export type RenderCellPreview<
  Row extends ObjectForExtending,
  SummRow = unknown,
  CustomCtxs extends ObjectForExtending = {}
> =
  | 'none'
  | 'cellEditorAsPreview'
  | ((cellInfo: PreviewCellInfo<Row, SummRow, CustomCtxs>) => ReactNode);

export type ColumnConfig<
  Row extends ObjectForExtending,
  SummRow = unknown,
  CustomCtxs extends ObjectForExtending = {}
> = ColumnDefaultOmitted<Row, SummRow, CustomCtxs> & {
  renderCell?: (cellInfo: CellInfo<Row, SummRow, CustomCtxs>) => CellContent;
  renderCellPreview?: RenderCellPreview<Row, SummRow, CustomCtxs>;
  /**
   * Если в поле name был передан jsx, то нужно заполнить nameAsString для указания label в разделе Настройки столбцов, либо для отображения label в фильтрах в правом сайдбаре (но приоритет для фильтро будет ниже, чем то, что указали в filtering.sidebarConfig.items, там отдельно можно перезаписать label для фильтров сайдабара)
   */
  nameAsString?: string;
  /**
   * Текстовое представление ячейки для копирования в clipboard (Ctrl+C).
   * Если не задан, используется `row[column.key]?.toString()`.
   * Для кастомных canvas-ячеек (бейджи, кнопки) рекомендуется указывать явно.
   */
  copyData?: string | ((row: Row) => string);
  sortingType?: 'stringSort' | 'numberSort' | Comparator<Row>;
  searching?: {
    valueInRow: (row: Row) => string | number;
  };
  filtering?: {
    keyInFilterState: string;
    /**
     * Обязательно передать в случае НЕ ручной фильтрации. Если на уровне tableConfig.manualFiltering = false или не задан. Иначе фильтрация не отработает.
     */
    valueInRow?: (row: Row) => string | number;
    /**
     * ```FilterCb - (filterValue: string, rowValue: string) => boolean```
     */
  } & (
    | {
        component: 'input';
        filter: 'includes' | 'startWith' | 'equal' | FilterCb<'single'>;
      }
    | {
        component: 'select';
        beforeList?: (
          props: FilterComponentInPopoverProps<
            ObjectForExtending,
            ColumnConfig<Row, SummRow>
          >
        ) => ReactNode;
        filter:
          | {
              typeOfValue: 'single';
              /**
               * Обязательно передать в случае НЕ ручной фильтрации. Если на уровне tableConfig.manualFiltering = false или не задан. Иначе фильтрация не отработает.
               */
              filteringType?: FilterCb<'single'>;
            }
          | {
              typeOfValue: 'multiple';
              /**
               * Обязательно передать в случае НЕ ручной фильтрации. Если на уровне tableConfig.manualFiltering = false или не задан. Иначе фильтрация не отработает.
               */
              filteringType?: FilterCb<'multiple'>;
            };
        selectOptions:
          | {
              type: 'constant';
              options: SelectOptions[];
            }
          | {
              type: 'stateInHeaderContext';
              /**
               * тип optionsState, который будет в HeaderContext:
               * ```ts
               * {
               * value: string | number;
               * text: string | number;
               * }[];
               * ```
               */
              optionsKeyInHeaderContext: string;
            };
        /**
         * Максимальна высота выпадающего списка в фильтрах колонок / правом сайдбаре.
         * @default "360px"
         */
        listMaxHeight?: string;
      }
    | {
        component: 'custom';
        customRender: (
          props: FilterComponentInPopoverProps<
            ObjectForExtending,
            ColumnConfig<Row, SummRow>
          >
        ) => ReactNode;
        filter?: (filterValue: unknown, rowValue: unknown) => boolean;
        compareWithClearedValue?: (
          clearedValue: unknown,
          currV: unknown
        ) => boolean;
      }
  );

  contentFormat?: ContentFormat;

  editingCell?: Editing<Row, SummRow>;

  subRow?: {
    /**
     * @default false
     */
    isColumnWithArrow?: boolean | ((props: { keyText: KeyText }) => boolean);
    /**
     * @default false
     */
    hideHeaderExpandAllArrow?: boolean;
    /**
     * @default false
     */
    parentKeyAsDefault?: boolean;
    /**
     * @default undefined
     */
    contentFormat?: ContentFormat;

    renderSubRowCell?: RenderSubRowCell<ObjectForExtending>;
  } & (
    | {
        keyOfColumnInSubRow:
          | string
          | number
          | ((lvl: number) => string | number);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        editingCell: Editing<any, any>;
      }
    | {
        editingCell?: undefined;
        keyOfColumnInSubRow?:
          | string
          | number
          | ((lvl: number) => string | number);
      }
  );
  rowsGrouping?: ColumnRowsGrouping<Row, ColumnConfig<Row, SummRow>>;
  keyText?: KeyTextColumnConfig<Row, SummRow>;
  /**
   * Переопределение темы на уровне ячейки. Позволяет менять фон и паддинги для конкретных ячеек.
   * @param cellInfo — информация о ячейке (row, column, ctxs, theme)
   * @param lvl — уровень вложенности (0 для обычных строк, 1+ для subRows)
   * @returns Partial<Theme> — объект переопределений (bgCell, cellHorizontalPadding и др.)
   */
  themeOverride?: (
    cellInfo: CellInfo<Row, SummRow, CustomCtxs>,
    lvl: number
  ) => CellThemeOverrideResult | undefined;
};

// export type ColumnGroupConfig<R extends ObjectForExtending, SR> = ColumnGroup<
//     R,
//     SR
// >;

export type ColumnOrColumnGroupConfig<
  R extends ObjectForExtending,
  SR = unknown
> = ColumnConfig<R, SR> | ColumnGroupConfig<R, SR>;

export declare interface ColumnGroupConfig<
  R extends ObjectForExtending,
  SR = unknown
> {
  /** The name of the column group, it will be displayed in the header cell */
  /** A unique key to distinguish each column */
  readonly key: string;
  readonly name: string | ReactElement;
  // readonly headerCellClass?: Maybe<string>;
  readonly children: readonly ColumnOrColumnGroupConfig<R, SR>[];
}
