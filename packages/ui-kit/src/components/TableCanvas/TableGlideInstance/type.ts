/* eslint-disable @typescript-eslint/ban-types */
import { CellActivatedEventArgs } from '@glideappsfinal/glide-data-grid';
import type { DropdownProps } from '@ui-kit/components/Dropdown';
import type {
  CanvasContent,
  CanvasEl,
  CanvasEvent,
  CanvasNodeTooltipConfig,
  CellActiveState,
  CellContent,
  CellHoverState,
  CellInfo,
  CellsSelectionMode,
  CellThemeOverrideResult,
  DataEditorRef,
  HeaderCellInfo as HeaderCellInfoGlide,
  HighlightActiveType,
  HoverEffectsConfig,
  Justify,
  SummaryCellInfo,
  TableGlideCustomProps,
  TableGlideProps,
  Theme,
} from '@ui-kit/components/TableGlide';
import { ReactNode } from 'react';

import type { FillMeta, RowsChangeType } from '../feature-cell-transfer/types';
import type { TableContentStateOverlay } from '../feature-content-state/types';
import { HeaderAlignment } from '../types/columns-grouping.type';
import type { CtxsType } from '../types/ctxs.type';
import type { ObjectForExtending } from '../types/utils.type';

export type { TextCellEntry as TextCellEntryType } from '@glideappsfinal/glide-data-grid';
export type {
  ActiveTheme,
  CanvasBadgeProps,
  CanvasButtonProps,
  CanvasContainerProps,
  CanvasEmbedIconButtonProps,
  CanvasIconButtonProps,
  CanvasIconProps,
  CanvasTextProps,
  ProvideEditorCallback,
  ProvideEditorCallbackResult,
  ProvideEditorComponent,
  SIZE as SIZE_GLIDE_INSTANCE,
  TableGlideSizeConfig,
} from '@ui-kit/components/TableGlide';

export type {
  CanvasContent,
  CanvasEl,
  CanvasEvent,
  CellActiveState,
  CellContent,
  CellHoverState,
  CellsSelectionMode,
  CellThemeOverrideResult,
  DataEditorRef,
  HighlightActiveType,
  HoverEffectsConfig,
  Justify,
  TableGlideCustomProps,
};
export interface RowsChangeDataGlideInstance<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> {
  indexes: number[];
  column: ColumnGlideInstance<R, SR, CustomCtxs>;
  /** Источник изменения: `'edit'` — ручное редактирование, `'paste'` — вставка, `'fill'` — fill handle */
  type: RowsChangeType;
  /** Метаданные fill handle (только при `type === 'fill'`) */
  fillMeta?: FillMeta;
  /** Результат `onBeforeFill` (только при `type === 'fill'`, если `onBeforeFill` задан) */
  fillResult?: string[][];
}

export type HeaderCellInfoGlideInstance<
  R extends ObjectForExtending,
  SR,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<HeaderCellInfoGlide<R, SR>, 'column' | 'ctxs'> & {
  column: ColumnGlideInstance<R, SR, CustomCtxs>;
  ctxs: CtxsType<CustomCtxs>;
};

export type CellInfoGlideInstance<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<CellInfo<R, SR>, 'column' | 'ctxs'> & {
  column: ColumnGlideInstance<R, SR, CustomCtxs>;
  ctxs: CtxsType<CustomCtxs>;
};

export type EditingCellInfoGlideInstance<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<CellInfoGlideInstance<R, SR, CustomCtxs>, 'hovered' | 'active'> & {
  onRowChange: (newV: R, closeEditor?: boolean) => void;
  /** initialValue - введенное значение, если редактор ячейки откроется не по двойному клику а при попытке ввода любой буквы */
  initialValue: string | undefined;
  portalElementRef: React.RefObject<HTMLElement> | undefined;
  activation: CellActivatedEventArgs | undefined;
  cellWidth: number;
  cellHeight: number;
  /** readOnly=true - будет значить, что активен не режим редактирования, а режим превью */
  readOnly: boolean | undefined;
  // onClose: (commitChanges?: boolean, shouldFocusCell?: boolean) => void;
};

export type PreviewCellInfoGlideInstance<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<EditingCellInfoGlideInstance<R, SR, CustomCtxs>, 'onRowChange'>;
export type SummaryCellInfoGlideInstance<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<SummaryCellInfo<R, SR>, 'column' | 'ctxs'> & {
  column: ColumnGlideInstance<R, SR, CustomCtxs>;
  ctxs: CtxsType<CustomCtxs>;
};

export type ColumnGlideInstance<
  R extends ObjectForExtending,
  SR,
  CustomCtxs extends ObjectForExtending = {},
> = {
  key: string;
  name: string | CanvasEl;
  nameAsString?: string;
  readonly width?: number;
  isServiceColumn?: boolean;
  isErrorCell?: (row: R) => boolean;
  frozen?: boolean;
  /** Минимальная ширина колонки (px). Ограничивает ресайз и начальную ширину снизу. */
  minWidth?: number;
  /** Максимальная ширина колонки (px). Ограничивает ресайз и начальную ширину сверху. */
  maxWidth?: number;
  /** Максимальная ширина колонки при auto-sizing и grow-распределении (px). Не ограничивает ручной ресайз. */
  maxAutoWidth?: number;
  renderHeaderCell?: (
    cellInfo: HeaderCellInfoGlideInstance<R, SR, CustomCtxs>,
  ) => CanvasContent;
  renderCell?: (
    cellInfo: CellInfoGlideInstance<R, SR, CustomCtxs>,
  ) => CellContent;
  contentAlign?: 'left' | 'right' | 'center';
  copyData?: string | ((row: R) => string);
  editable?: boolean | ((row: R) => boolean);
  renderEditCell?: (
    cellInfo: EditingCellInfoGlideInstance<R, SR, CustomCtxs>,
  ) => ReactNode;
  /**
   * Кастомный рендер preview-ячейки (при двойном клике на readonly-ячейку).
   * 'none' — отключает превью. 'cellEditorAsPreview' — стандартный текстовый превью.
   * Функция — полностью кастомный рендер.
   */
  renderCellPreview?:
    | 'none'
    | 'cellEditorAsPreview'
    | ((
        cellInfo: PreviewCellInfoGlideInstance<R, SR, CustomCtxs>,
      ) => ReactNode);
  renderSummaryCell?: (
    cellInfo: SummaryCellInfoGlideInstance<R, SR, CustomCtxs>,
  ) => CellContent;
  colSpan?:
    | number
    | ((cellInfo: CellInfoGlideInstance<R, SR, CustomCtxs>) => number);
  /** Вертикальное объединение: (cellInfo) => [startRow, endRow] | null (см. TableGlide RowSpan). */
  rowSpan?: (
    cellInfo: CellInfoGlideInstance<R, SR, CustomCtxs>
  ) => readonly [number, number] | null;
  /** Выравнивание в слитой шапке; в adaptColumn → glide `spanGroupHeaderAlign`. */
  squashedHeaderAlign?: HeaderAlignment;
  /** Тултип для ячеек этой колонки. Строка, объект или функция (context) => config | null. */
  cellTooltip?:
    | CanvasNodeTooltipConfig
    | ((context: {
        row: R;
        column: ColumnGlideInstance<R, SR, CustomCtxs>;
        ctxs: CtxsType<CustomCtxs>;
        refTable?: React.Ref<DataEditorRef>;
        colInd?: number;
        rowInd?: number;
        theme?: Theme;
      }) => CanvasNodeTooltipConfig | null);
  /** Тултип для шапки колонки. Строка, объект или функция (context) => config | null. */
  headerCellTooltip?:
    | CanvasNodeTooltipConfig
    | ((context: {
        column: ColumnGlideInstance<R, SR, CustomCtxs>;
        ctxs: CtxsType<CustomCtxs>;
        refTable?: React.Ref<DataEditorRef>;
        colInd?: number;
        theme?: Theme;
      }) => CanvasNodeTooltipConfig | null);
  columnThemeOverride?: (
    cellInfo: CellInfoGlideInstance<R, SR, CustomCtxs>,
  ) => CellThemeOverrideResult | undefined;
};

export type ColumnOrColumnGroupGlideInstance<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> =
  | ColumnGlideInstance<R, SR, CustomCtxs>
  | ColumnGroupGlideInstance<R, SR, CustomCtxs>;

export type ColumnGroupGlideInstance<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = {
  readonly key: string;
  readonly name: CanvasEl;
  readonly children: readonly ColumnOrColumnGroupGlideInstance<
    R,
    SR,
    CustomCtxs
  >[];
};

/** column, ctxs, refTable — для контекстного меню и тултипа. */
export type TableInfoBase<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = {
  column: ColumnOrColumnGroupGlideInstance<R, SR, CustomCtxs>;
  ctxs: CustomCtxs;
  refTable?: React.Ref<DataEditorRef>;
};

/** TableInfoBase + row. */
export type TableInfoWithRow<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = TableInfoBase<R, SR, CustomCtxs> & { row: R };

export type TableGlideInstanceContextMenu<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = {
  onHeaderContextMenu?: (
    ...args: [
      ...Parameters<NonNullable<TableGlideProps<R, SR>['onHeaderContextMenu']>>,
      TableInfoBase<R, SR, CustomCtxs>,
    ]
  ) => void;
  onCellContextMenu?: (
    ...args: [
      ...Parameters<NonNullable<TableGlideProps<R, SR>['onCellContextMenu']>>,
      TableInfoWithRow<R, SR, CustomCtxs>,
    ]
  ) => void;
};
export type CellReadOnlyEditorGlideInstanceStaticProps = {
  formatOptions: ContentFormat | undefined;
  disableLeftOffset: boolean | undefined;
  contentAlign: 'right' | 'left' | 'center';
};
export type CellReadOnlyEditorGlideInstanceProps<
  R extends ObjectForExtending,
  SR,
> = EditingCellInfoGlideInstance<R, SR> &
  CellReadOnlyEditorGlideInstanceStaticProps;

export type TableGlideInstanceProps<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<
  TableGlideProps<R, SR>,
  'columns' | 'onHeaderContextMenu' | 'onCellContextMenu'
> & {
  columns: readonly ColumnGlideInstance<R, SR, CustomCtxs>[];
  onHeaderContextMenuDropdown?: HeaderContextMenuDropdownProps<
    R,
    SR,
    CustomCtxs
  >;
  onCellContextMenuDropdown?: CellContextMenuDropdownProps<R, SR>;
  containerProps?: {
    className?: string;
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLDivElement>;
  };
  contentStateOverlay?: TableContentStateOverlay;
  renderOverlayFeatures?: (ctx: {
    containerElement: HTMLDivElement;
    renderInContainer: (children: React.ReactNode) => React.ReactPortal | null;
  }) => React.ReactNode;
  CellReadOnlyEditor: (
    props: CellReadOnlyEditorGlideInstanceProps<R, SR>,
  ) => ReactNode;
  onRowsChange?: (
    rows: R[],
    data: RowsChangeDataGlideInstance<R, SR, CustomCtxs>,
  ) => void;
  onCellClicked?: (
    cell: readonly [number, number],
    info: TableInfoWithRow<R, SR, CustomCtxs>,
  ) => void;
} & TableGlideInstanceContextMenu<R, SR, CustomCtxs>;

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

/** Тип элемента контекстного меню (наследуется от DropdownProps['items']) */
export type ContextMenuDropdownItem = NonNullable<
  DropdownProps['items']
>[number];

/**
 * Пропсы Dropdown, доступные для проброса в контекстное меню.
 * Исключены пропсы, которые управляются внутренне (items, placement, portal и др.).
 * Доступные пропсы: size, listWidth, closeOnSelect, offset и др.
 */
export type ContextMenuDropdownProps = Omit<
  DropdownProps,
  | 'children'
  | 'items'
  | 'placement'
  | 'closeOnOverlayClick'
  | 'portal'
  | 'openByRightClick'
  | 'onItemClick'
  | 'hoverIndex'
  | 'alwaysOpened'
  | 'trigger'
  | 'hasArrow'
  | 'onItemSelect'
>;

export type DropdownContextMenu = {
  type: 'Dropdown';
  getDropdownItems: (params: { columnLabel: string }) => DropdownProps['items'];
} & ContextMenuDropdownProps;

/** Конфигурация контекстного меню для ячеек таблицы */
export type CellContextMenuDropdownProps<
  RowType extends ObjectForExtending,
  SummaryRowType,
  CustomCtxs extends ObjectForExtending = ObjectForExtending,
> = ContextMenuDropdownProps & {
  /** Тип конфигурации (всегда 'dropdown') */
  type: 'dropdown';
  /**
   * Функция, возвращающая массив пунктов меню для конкретной ячейки.
   * В асинхронном режиме (задан onOpen) перечитывается реактивно, пока меню
   * открыто: верните скелетон-пункты во время загрузки и реальные — после.
   */
  getDropdownItems: (
    params: TableInfoWithRow<RowType, SummaryRowType, CustomCtxs>,
  ) => DropdownProps['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Если getDropdownItems
   * вернул пусто, но onOpen задан — меню всё равно открывается, а потребитель
   * здесь стартует запрос и хранит своё состояние (loading/error/items).
   */
  onOpen?: (
    params: TableInfoWithRow<RowType, SummaryRowType, CustomCtxs>,
  ) => void;
  /** Обработчик выбора пункта меню */
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: TableInfoWithRow<RowType, SummaryRowType, CustomCtxs>,
    event?: React.SyntheticEvent,
  ) => void;
};

/** Конфигурация контекстного меню для заголовков таблицы */
export type HeaderContextMenuDropdownProps<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
  CustomCtxs extends ObjectForExtending = ObjectForExtending,
> = ContextMenuDropdownProps & {
  /** Тип конфигурации (всегда 'dropdown') */
  type: 'dropdown';
  /**
   * Функция, возвращающая массив пунктов меню для конкретного заголовка.
   * В асинхронном режиме (задан onOpen) перечитывается реактивно, пока меню
   * открыто: верните скелетон-пункты во время загрузки и реальные — после.
   */
  getDropdownItems: (
    params: TableInfoBase<RowType, SummaryRowType, CustomCtxs>,
  ) => DropdownProps['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Если getDropdownItems
   * вернул пусто, но onOpen задан — меню всё равно открывается, а потребитель
   * здесь стартует запрос и хранит своё состояние (loading/error/items).
   */
  onOpen?: (params: TableInfoBase<RowType, SummaryRowType, CustomCtxs>) => void;
  /** Обработчик выбора пункта меню */
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: TableInfoBase<RowType, SummaryRowType, CustomCtxs>,
    event?: React.SyntheticEvent,
  ) => void;
};
