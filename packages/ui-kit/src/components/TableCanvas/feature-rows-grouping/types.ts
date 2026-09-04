import type { Theme } from '@ui-kit/components/TableGlide';

import {
  CanvasContent,
  CellInfoGlideInstance,
} from '../TableGlideInstance/type';
import { DomMetadata, DropdownItemOption } from '../types/additional.type';
import { MergedCellsAlign } from '../types/merged-cells.type';
import { ObjectForExtending } from '../types/utils.type';

export type GroupRow<RowType> = {
  readonly childRows: readonly RowType[];
  readonly childGroups: readonly RowType[] | Readonly<GroupRowsOrRows<RowType>>;
  groupKey: string;
  groupByKey: string;
  groupParents: string;
};

export type GroupRowsOrRows<RowType> = readonly (GroupRow<RowType> | RowType)[];
type LocalColumnInstance = Record<'key' | 'name' | 'width' | string, unknown>;
export type RowsGrouping<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
  ColumnConfig extends LocalColumnInstance = LocalColumnInstance,
> = {
  /**
   * массив группированных колонок и его setter
   */
  groupByState: [string[], React.Dispatch<React.SetStateAction<string[]>>];
  /**
   * Как показывать группировку.
   * 'tree' (по умолчанию) — дерево с раскрытием (шевроны) и колонкой группировки.
   * 'merged' — плоский вид: строки идут по группам, а группирующие колонки
   * показаны объединёнными ячейками. Раскрытия нет; чекбокс и номер — на всю
   * группу верхнего уровня.
   * @default 'tree'
   */
  view?: 'tree' | 'merged';
  /**
   * Только для view: 'merged'. Выравнивание по умолчанию в объединённых ячейках
   * группирующих колонок. Колоночный mergedCellsAlign важнее.
   */
  mergedCellsAlign?: MergedCellsAlign;
  /**
   * Только для view: 'merged'. Запретить сортировку по группирующим колонкам
   * (как в дереве). По остальным колонкам сортировка остаётся.
   * @default false
   */
  disableGroupColumnsSort?: boolean;
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
   * Настройки колонки «Группировка» (имя, ширина, свои рендеры). Работает только
   * в виде дерева: при view: 'merged' эта колонка не создаётся, а сгруппированные
   * колонки остаются на своих местах.
   * @default 'Группировка'
   */
  groupedColumnProps?: Partial<Pick<ColumnConfig, 'name' | 'width'>> & {
    renderCell?: (
      props: CellInfoGlideInstance<RowType, SummaryRowType> & {
        parentGroupKey: string | undefined;
        groupByArr: string[];
      },
    ) => CanvasContent;
    rowsGrouping?: Pick<
      ColumnRowsGrouping<RowType, ColumnConfig>,
      'renderGroupCell'
    >;
  };
  /** Кнопка «развернуть всё». Работает только в виде дерева: при view: 'merged' шевронов нет. */
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

export type RenderGroupCellProps<
  RowType extends ObjectForExtending,
  ColumnConfig extends LocalColumnInstance = LocalColumnInstance,
> = {
  column: ColumnConfig;
  tabIndex: number;
  theme?: Theme;
  // TODO isExpanded: boolean;
  // TODO toggleGroup: () => void;
} & GroupRow<RowType>;

export type ColumnRowsGrouping<
  RowType extends ObjectForExtending,
  ColumnConfig extends LocalColumnInstance,
> = {
  /**
   * @default true - при наличии ColumnConfig.rowsGrouping
   */
  groupByColumn?: boolean;
  /**
   * @default ColumnConfig.key
   */
  columnGroupLabel?: string;
  /**
   * Свой контент ячейки строки-группы. Работает только в виде дерева: при
   * view: 'merged' строк-групп нет (группы показаны объединёнными ячейками),
   * поэтому этот рендер не вызывается.
   */
  renderGroupCell?: (
    props: RenderGroupCellProps<RowType, ColumnConfig>,
  ) => CanvasContent;
};
