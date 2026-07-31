import { ReactElement, ReactNode } from 'react';
import {
  CellClickArgs,
  CellKeyboardEvent,
  CellKeyDownArgs,
  CellMouseEvent,
  CellSelectArgs,
  ColSpanArgs,
  Column,
  ColumnOrColumnGroup,
  CopyEvent,
  FillEvent,
  PasteEvent,
  RenderCellProps,
  RenderEditCellProps,
  Renderers,
  RenderGroupCellProps,
  RenderHeaderCellProps,
  RenderSummaryCellProps,
  RowsChangeData,
  SortColumn,
} from 'react-data-grid';

import { Key, Maybe, ObjectForExtending } from './utils.type';

/**
 * Полная копия типа "Column" из react-data-grid. Скопирован для того, чтобы API в Story проинициализировался
 */
export type ColumnDefault<TRow, TSummaryRow = unknown> = {
  /** The name of the column. By default it will be displayed in the header cell */
  readonly name: string | ReactElement;
  /** A unique key to distinguish each column */
  readonly key: string;
  /** Column width. If not specified, it will be determined automatically based on grid width and specified widths of other columns */
  readonly width?: Maybe<number | string>;
  /** Minimum column width in px. */
  readonly minWidth?: Maybe<number>;
  /** Maximum column width in px. */
  readonly maxWidth?: Maybe<number>;
  readonly cellClass?: Maybe<string | ((row: TRow) => Maybe<string>)>;
  readonly headerCellClass?: Maybe<string>;
  readonly summaryCellClass?: Maybe<
    string | ((row: TSummaryRow) => Maybe<string>)
  >;
  /** Render function used to render the content of the column's header cell */
  readonly renderHeaderCell?: Maybe<
    (props: RenderHeaderCellProps<TRow, TSummaryRow>) => ReactNode
  >;
  /** Render function used to render the content of cells */
  readonly renderCell?: Maybe<
    (props: RenderCellProps<TRow, TSummaryRow>) => ReactNode
  >;
  /** Render function used to render the content of summary cells */
  readonly renderSummaryCell?: Maybe<
    (props: RenderSummaryCellProps<TSummaryRow, TRow>) => ReactNode
  >;
  /** Render function used to render the content of group cells */
  readonly renderGroupCell?: Maybe<
    (props: RenderGroupCellProps<TRow, TSummaryRow>) => ReactNode
  >;
  /** Render function used to render the content of edit cells. When set, the column is automatically set to be editable */
  readonly renderEditCell?: Maybe<
    (props: RenderEditCellProps<TRow, TSummaryRow>) => ReactNode
  >;
  /** Enables cell editing. If set and no editor property specified, then a textInput will be used as the cell editor */
  readonly editable?: Maybe<boolean | ((row: TRow) => boolean)>;
  readonly colSpan?: Maybe<
    (args: ColSpanArgs<TRow, TSummaryRow>) => Maybe<number>
  >;
  /** Determines whether column is frozen or not */
  readonly frozen?: Maybe<boolean>;
  /** Enable resizing of a column */
  readonly resizable?: Maybe<boolean>;
  /** Enable sorting of a column */
  readonly sortable?: Maybe<boolean>;
  /** Enable dragging of a column */
  readonly draggable?: Maybe<boolean>;
  /** Sets the column sort order to be descending instead of ascending the first time the column is sorted */
  readonly sortDescendingFirst?: Maybe<boolean>;
  readonly editorOptions?: Maybe<{
    /**
     * Render the cell content in addition to the edit cell.
     * Enable this option when the editor is rendered outside the grid, like a modal for example.
     * By default, the cell content is not rendered when the edit cell is open.
     * @default false
     */
    readonly displayCellContent?: Maybe<boolean>;
    /** @default true */
    readonly commitOnOutsideClick?: Maybe<boolean>;
  }>;
};

declare type SharedDivProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  | 'role'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-rowcount'
  | 'className'
  | 'style'
>;
declare type DefaultColumnOptions<R, SR> = Pick<
  Column<R, SR>,
  | 'renderCell'
  | 'width'
  | 'minWidth'
  | 'maxWidth'
  | 'resizable'
  | 'sortable'
  | 'draggable'
>;

type Direction = 'ltr' | 'rtl';

/**
 * Полная копия типа "DataGridProps" из react-data-grid. Скопирован для того, чтобы API в Story проинициализировался
 */
export interface DataGridPropsDefault<R, SR = unknown, K extends Key = Key>
  extends SharedDivProps {
  /**
   * Grid and data Props
   */
  /** An array of objects representing each column on the grid */
  columns: readonly ColumnOrColumnGroup<R, SR>[];
  /** A function called for each rendered row that should return a plain key/value pair object */
  rows: readonly R[];
  /**
   * Rows to be pinned at the top of the rows view for summary, the vertical scroll bar will not scroll these rows.
   */
  topSummaryRows?: Maybe<readonly SR[]>;
  /**
   * Rows to be pinned at the bottom of the rows view for summary, the vertical scroll bar will not scroll these rows.
   */
  bottomSummaryRows?: Maybe<readonly SR[]>;
  /** The getter should return a unique key for each row */
  rowKeyGetter?: Maybe<(row: R) => K>;
  onRowsChange?: Maybe<(rows: R[], data: RowsChangeData<R, SR>) => void>;
  /**
   * Dimensions props
   */
  /**
   * The height of each row in pixels
   * @default 35
   */
  rowHeight?: Maybe<number | ((row: R) => number)>;
  /**
   * The height of the header row in pixels
   * @default 35
   */
  headerRowHeight?: Maybe<number>;
  /**
   * The height of each summary row in pixels
   * @default 35
   */
  summaryRowHeight?: Maybe<number>;
  /**
   * Feature props
   */
  /** Set of selected row keys */
  selectedRows?: Maybe<ReadonlySet<K>>;
  /** Function called whenever row selection is changed */
  onSelectedRowsChange?: Maybe<(selectedRows: Set<K>) => void>;
  /** Used for multi column sorting */
  sortColumns?: Maybe<readonly SortColumn[]>;
  onSortColumnsChange?: Maybe<(sortColumns: SortColumn[]) => void>;
  defaultColumnOptions?: Maybe<DefaultColumnOptions<R, SR>>;
  onFill?: Maybe<(event: FillEvent<R>) => R>;
  onCopy?: Maybe<(event: CopyEvent<R>) => void>;
  onPaste?: Maybe<(event: PasteEvent<R>) => R>;
  /**
   * Event props
   */
  /** Function called whenever a cell is clicked */
  onCellClick?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  /** Function called whenever a cell is double clicked */
  onCellDoubleClick?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  /** Function called whenever a cell is right clicked */
  onCellContextMenu?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  onCellKeyDown?: Maybe<
    (args: CellKeyDownArgs<R, SR>, event: CellKeyboardEvent) => void
  >;
  /** Function called whenever cell selection is changed */
  onSelectedCellChange?: Maybe<(args: CellSelectArgs<R, SR>) => void>;
  /** Called when the grid is scrolled */
  onScroll?: Maybe<(event: React.UIEvent<HTMLDivElement>) => void>;
  /** Called when a column is resized */
  onColumnResize?: Maybe<(idx: number, width: number) => void>;
  /** Called when a column is reordered */
  onColumnsReorder?: Maybe<
    (sourceColumnKey: string, targetColumnKey: string) => void
  >;
  /**
   * Toggles and modes
   */
  /** @default true */
  enableVirtualization?: Maybe<boolean>;
  /**
   * Miscellaneous
   */
  renderers?: Maybe<Renderers<R, SR>>;
  rowClass?: Maybe<(row: R, rowIdx: number) => Maybe<string>>;
  /** @default 'ltr' */
  direction?: Maybe<Direction>;
  'data-testid'?: Maybe<string>;
}

export type DefaultOmittedKeys =
  | 'editable'
  | 'sortable'
  | 'sortDescendingFirst'
  | 'renderGroupCell'
  | 'renderEditCell'
  | 'frozen'
  | 'draggable';

export type ColumnDefaultOmitted<
  Row extends ObjectForExtending,
  SummRow = unknown,
> = Omit<ColumnDefault<Row, SummRow>, DefaultOmittedKeys>;

export type { CellClickArgs };
