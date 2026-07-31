import { ReactNode } from 'react';
import { CalculatedColumn, RenderCellProps } from 'react-data-grid';

import { DomMetadata, DropdownItemOption } from '../types/additional.type';
import type { ColumnConfig } from '../types/column-config.type';
import { ObjectForExtending } from '../types/utils.type';

export type GroupRow<RowType> = {
  readonly childRows: readonly RowType[];
  readonly childGroups: readonly RowType[] | Readonly<GroupRowsOrRows<RowType>>;
  groupKey: string;
  groupByKey: string;
  groupParents: string;
};

export type GroupRowsOrRows<RowType> = readonly (GroupRow<RowType> | RowType)[];

export type RowsGrouping<RowType extends ObjectForExtending> = {
  /**
   * массив группированных колонок и его setter
   */
  groupByState: [string[], React.Dispatch<React.SetStateAction<string[]>>];
  /**
   * Функция определения уникального id строки
   */
  rowKeyGetter: (row: RowType) => string | number;
  /**
   * Показывать ли кнопку «Группировать» в controlBlock.
   * При `false` кнопка скрыта и не участвует в компрессии,
   * но группировка строк продолжает работать от внешнего `groupByState`.
   * @default true
   */
  showInControl?: boolean;
  /**
   * @default 'Группировка'
   */
  groupedColumnProps?: Partial<
    Pick<
      ColumnConfig<RowType>,
      | 'name'
      | 'resizable'
      | 'width'
      | 'minWidth'
      | 'maxWidth'
      | 'renderSummaryCell'
    >
  > & {
    renderCell?: (
      props: RenderCellProps<RowType> & {
        parentGroupKey: string | undefined;
        groupByArr: string[];
      },
    ) => ReactNode;
    rowsGrouping?: Pick<ColumnRowsGrouping<RowType>, 'renderGroupCell'>;
  };
  expandAllBtn?: {
    /**
     * Функция для расчета состояния открытости всех раскрываемых строк. Функция должна быть чистой.
     * @returns boolean
     */
    expandedAll: (p: {
      /**
       * allRowsIds - уникальные идентификаторы всех строк (группировок и обычных)
       */
      allRowsIds: Set<string | number> | null;
      /**
       * shownRows - представленные прямо сейчас строки (группировки и обычные). Или видимые строки - видимые не во viewport-е, а которые должны быть показаны из-за раскрытий)
       */
      shownRows: readonly RowType[];
      expandedRowsIds: Set<string | number>;
    }) => boolean;
  };
  /**
   * `groupButton` - свойство для кастомизации кнопки с выпадающим списком
   */
  groupButton?: {
    getGroupedCount?: (props: {
      /**
       * высчитанное автоматически количество активных группировок.
       */
      currCount: number;
      /**
       * активные группировки.
       */
      groupedCols: string[];
      columns: {
        /**
         * `visible` - видимые в выпадающем списке колонки-группировки.
         */
        visible: string[];
        /**
         * `hidden` - невидимые  или не участвующие в группировке колонки
         *
         * (columnConfig.rowsGrouping=undefined ||
         *  columnConfig.rowsGrouping.groupByColumn=false).
         */
        hidden: string[];
      };
    }) => number;
    /**
     * `defaultCustomItems` - свойство для добавления ключей группировки, которых нет в таблице.
     *
     * `DropdownItemOption.value` - необходимо заполнять ключом, который существует в данных.
     */
    defaultCustomItems?: DropdownItemOption[];
    /**
     * `onItemSelect` - свойство для полного контроля над изменением группировки при выборе опций.
     *
     * `DropdownItemOption.value` - необходимо заполнять ключом, который существует в данных.
     */
    onItemSelect?: (props: {
      item: DropdownItemOption;
      setGroupedCols: React.Dispatch<React.SetStateAction<string[]>>;
      columns: {
        visible: string[];
        hidden: string[];
      };
    }) => void;
  };
  /**
   * `groupRowReplaceTo` - свойство для изменения данных сгруппированных строк. Может понадобиться в редких случаях.
   *
   * @param groupRow данные сгруппированной строки
   * @returns измененная группировка или строка без группировки — строка, которые заменит groupRow
   */
  groupRowReplaceTo?: (
    groupRow: GroupRow<RowType>,
  ) => GroupRow<RowType> | RowType;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};

export type RenderGroupCellProps<RowType, SummaryRowType = unknown> = {
  column: CalculatedColumn<RowType, SummaryRowType>;
  tabIndex: number;
  // TODO isExpanded: boolean;
  // TODO toggleGroup: () => void;
} & GroupRow<RowType>;
export type ColumnRowsGrouping<RowType, SummaryRowType = unknown> = {
  /**
   * @default true - при наличии ColumnConfig.rowsGrouping
   */
  groupByColumn?: boolean;
  /**
   * @default ColumnConfig.key
   */
  columnGroupLabel?: string;
  renderGroupCell?: (
    props: RenderGroupCellProps<RowType, SummaryRowType>,
  ) => ReactNode;
};
