import type {
  DropdownItemOption,
  DropdownProps,
} from '@ui-kit/components/Dropdown';
import { CalculatedColumn } from 'react-data-grid';

export type ContextMenuDropdownItem = NonNullable<
  DropdownProps<DropdownItemOption>['items']
>[number];

export type ContextMenuDropDownProps = Omit<
  DropdownProps<DropdownItemOption>,
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
  getDropDownItems: (params: {
    columnLabel: string;
  }) => DropdownProps<DropdownItemOption>['items'];
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
  }) => DropdownProps<DropdownItemOption>['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Вызывается при каждом
   * открытии, в том числе повторном на той же ячейке: потребитель здесь
   * синхронно переводит своё состояние в загрузку, стартует запрос и
   * принимает только ответ последнего запроса. Меню открывается, даже если
   * getDropDownItems пока возвращает пусто.
   *
   * С onOpen getDropDownItems вызывается при отрисовке, пока меню открыто,
   * а не один раз при открытии: побочных действий в нём быть не должно.
   * Пункты обновляются, когда меняется объект настроек меню, поэтому не
   * мемоизируйте его без зависимости от состояния загрузки.
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
  }) => DropdownProps<DropdownItemOption>['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Вызывается при каждом
   * открытии, в том числе повторном на той же ячейке: потребитель здесь
   * синхронно переводит своё состояние в загрузку, стартует запрос и
   * принимает только ответ последнего запроса. Меню открывается, даже если
   * getDropDownItems пока возвращает пусто.
   *
   * С onOpen getDropDownItems вызывается при отрисовке, пока меню открыто,
   * а не один раз при открытии: побочных действий в нём быть не должно.
   * Пункты обновляются, когда меняется объект настроек меню, поэтому не
   * мемоизируйте его без зависимости от состояния загрузки.
   */
  onOpen?: (params: { columnLabel: string | undefined }) => void;
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: { columnLabel: string | undefined },
    event?: React.SyntheticEvent,
  ) => void;
} & ContextMenuDropDownProps;
