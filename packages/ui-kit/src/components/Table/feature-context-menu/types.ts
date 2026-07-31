import type { DropdownProps } from '@ui-kit/components/Dropdown';
import { CalculatedColumn } from 'react-data-grid';

export type ContextMenuDropdownItem = NonNullable<
  DropdownProps['items']
>[number];

export type ContextMenuDropDownProps = Omit<
  DropdownProps,
  | 'children'
  | 'items'
  | 'placement'
  | 'closeOnOverlayClick'
  | 'portal'
  | 'openByRightClick'
  | 'onItemClick'
  | 'hoverIndex'
  | 'size'
  | 'alwaysOpened'
  | 'trigger'
  | 'hasArrow'
  | 'onItemSelect'
>;

export type DropdownContextMenu = {
  type: 'dropdown';
  getDropDownItems: (params: { columnLabel: string }) => DropdownProps['items'];
} & ContextMenuDropDownProps;

export type HeaderContextMenuProps = (
  event: React.MouseEvent,
  columnLabel: string | undefined,
  closestTargetElement: HTMLElement | undefined,
) => void;

export type CellContextMenuDropDownProps<RowType, SummaryRowType> = {
  type: 'dropdown';
  getDropDownItems: (params: {
    row: RowType;
    column: CalculatedColumn<RowType, SummaryRowType>;
  }) => DropdownProps['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Если getDropDownItems вернул
   * пусто, но onOpen задан — меню открывается, а getDropDownItems перечитывается
   * реактивно, пока меню открыто. Здесь потребитель стартует запрос.
   */
  onOpen?: (params: {
    row: RowType;
    column: CalculatedColumn<RowType, SummaryRowType>;
  }) => void;
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: {
      row: RowType;
      column: CalculatedColumn<RowType, SummaryRowType>;
      selectCell: (enableEditor?: boolean) => void;
    },
    event?: React.SyntheticEvent,
  ) => void;
} & ContextMenuDropDownProps;

export type HeaderContextMenuDropDownProps = {
  type: 'dropdown';
  getDropDownItems: (params: {
    columnLabel: string | undefined;
  }) => DropdownProps['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Если getDropDownItems вернул
   * пусто, но onOpen задан — меню открывается, а getDropDownItems перечитывается
   * реактивно, пока меню открыто. Здесь потребитель стартует запрос.
   */
  onOpen?: (params: { columnLabel: string | undefined }) => void;
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: { columnLabel: string | undefined },
    event?: React.SyntheticEvent,
  ) => void;
} & ContextMenuDropDownProps;
