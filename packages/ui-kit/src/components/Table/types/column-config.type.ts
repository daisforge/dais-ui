import { Combobox } from '@ui-kit/components/Combobox';
import { NumberFormat } from '@ui-kit/components/NumberFormat';
import { TextFieldProps } from '@ui-kit/components/TextField';
import { ComponentProps, ReactElement, ReactNode } from 'react';
import type {
  CellMouseEvent,
  RenderCellProps,
  RenderEditCellProps,
  RenderSummaryCellProps,
  SortColumn,
} from 'react-data-grid';

import { FilterComponentInPopoverProps } from '../feature-filtering/header-filter-button/types';
import { KeyText } from '../feature-key-text/types';
import { ColumnRowsGrouping } from '../feature-rows-grouping/types';
import { ColumnDefaultOmitted } from './data-grid.type';
import { Maybe, ObjectForExtending } from './utils.type';

export type {
  CellMouseEvent,
  RenderCellProps,
  RenderEditCellProps,
  RenderSummaryCellProps,
  SortColumn,
};

export type Comparator<Row extends ObjectForExtending> = (
  a: Row,
  b: Row,
) => number;

type FilterCb<Mode extends 'multiple' | 'single' | void = 'single'> = (
  filterV: Mode extends 'multiple' ? string[] : string,
  rowValue: string,
) => boolean;

export type RenderSubRowCell<SubRowType extends ObjectForExtending> = (
  renderCellProps: RenderCellProps<SubRowType>,
  lvl: number,
) => ReactNode;

export type RenderSubRowEditCell<SubRowType extends ObjectForExtending> = (
  renderCellProps: RenderEditCellProps<SubRowType>,
  lvl: number,
) => ReactNode;

export type SelectOptions = {
  value: string | number;
  text: string | number;
};

// FIXME: DFP-4267 inputProps и selectProps вынести в отдельные типы на уровни фичи table/editing. Использовать их как пропсы компонентов редактирования после правок типов на стороне атомарной команды (Обсудить с Рамилем)

export type Editing<RowType extends ObjectForExtending> = {
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
        Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur' | 'ref' | 'size'>
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
          ComponentProps<typeof NumberFormat>,
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
          ComponentProps<typeof Combobox>,
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
      component: RenderSubRowEditCell<RowType>;
    }
);

export type CommonFormat = {
  alignContent?: 'right' | 'left' | 'center';
};

export type CustomFormat = CommonFormat & {
  customFormat: (value: string) => React.ReactNode;
};

export type NumberFormatOptions = CommonFormat & {
  type: 'number';
  /** Кастомный разделитель дробной части (по умолчанию ',') */
  decimalSeparator?: string;
  /** Кастомный разделитель тысяч (по умолчанию ' ') */
  thousandSeparator?: string;
  /** Минимальное число знаков после запятой (по умолчанию 0) */
  minimumFractionDigits?: number;
  /** Максимальное число знаков после запятой (по умолчанию 2) */
  maximumFractionDigits?: number;
  /** Включить/отключить группировку разрядов (по умолчанию true) */
  useGrouping?: boolean;
  /** Локаль для Intl.NumberFormat (по умолчанию 'ru-RU') */
  locales?: string | string[];
  alignContent?: 'right' | 'left' | 'center';
};

export type ContentFormat =
  | 'number' // Стандартное числовое форматирование с локалью ru-RU (разделитель тысяч: пробел, дробная часть: запятая)
  | CustomFormat
  | NumberFormatOptions;

/**
 * Конфигурация колонки для активации фичи ключ-текст.
 * Настройка как у полноценной колонки.
 */
export type KeyTextColumnConfig<
  Row extends ObjectForExtending,
  SummRow = unknown,
> =
  | ((props: { keyText: KeyText }) => ColumnConfig<Row, SummRow>)
  | ColumnConfig<Row, SummRow>;

export type ColumnConfig<
  Row extends ObjectForExtending,
  SummRow = unknown,
> = ColumnDefaultOmitted<Row, SummRow> & {
  /**
   * Если в поле name был передан jsx, то нужно заполнить nameAsString для указания label в разделе Настройки столбцов, либо для отображения label в фильтрах в правом сайдбаре (но приоритет для фильтро будет ниже, чем то, что указали в filtering.sidebarConfig.items, там отдельно можно перезаписать label для фильтров сайдабара)
   */
  nameAsString?: string;
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
          >,
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
          >,
        ) => ReactNode;
        filter?: (filterValue: unknown, rowValue: unknown) => boolean;
        compareWithClearedValue?: (
          clearedValue: unknown,
          currV: unknown,
        ) => boolean;
      }
  );

  contentFormat?: ContentFormat;

  editingCell?: Editing<Row>;

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderSubRowCell?: RenderSubRowCell<any>;
  } & (
    | {
        keyOfColumnInSubRow:
          | string
          | number
          | ((lvl: number) => string | number);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        editingCell: Editing<any>;
      }
    | {
        editingCell?: undefined;
        keyOfColumnInSubRow?:
          | string
          | number
          | ((lvl: number) => string | number);
      }
  );
  rowsGrouping?: ColumnRowsGrouping<Row, SummRow>;
  keyText?: KeyTextColumnConfig<Row, SummRow>;
};

// export type ColumnGroupConfig<R extends ObjectForExtending, SR> = ColumnGroup<
//     R,
//     SR
// >;

export type ColumnOrColumnGroupConfig<
  R extends ObjectForExtending,
  SR = unknown,
> = ColumnConfig<R, SR> | ColumnGroupConfig<R, SR>;

export declare interface ColumnGroupConfig<
  R extends ObjectForExtending,
  SR = unknown,
> {
  /** The name of the column group, it will be displayed in the header cell */
  /** A unique key to distinguish each column */
  readonly key: string;
  readonly name: string | ReactElement;
  readonly headerCellClass?: Maybe<string>;
  readonly children: readonly ColumnOrColumnGroupConfig<R, SR>[];
}
