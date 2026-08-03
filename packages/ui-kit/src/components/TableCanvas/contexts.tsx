import { SIZE } from '@ui-kit/components/TableCanvas/styles/styles.constants';
import {
  DataEditorRef,
  TableGlideInstanceProps,
} from '@ui-kit/components/TableCanvas/TableGlideInstance/type';
import {
  ActiveViewModsType,
  ColumnGroupConfig,
  ObjectForExtending,
  SortColumn,
} from '@ui-kit/components/TableCanvas/types';
import React, {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  RefObject,
  useContext,
} from 'react';

import { DropdownProps } from '../Dropdown';
import type {
  ContextMenuDropdownItem,
  ContextMenuDropdownProps,
} from './feature-context-menu/types';
import type { SearchingProps } from './feature-searching/types';
import { DomMetadata } from './types/additional.type';

/**
 * Contexts is needed to read values otherwise columns are
 * re-created when filters are changed and filter loses focus
 */
type RowContextV = { rowSize: SIZE };
const RowContext = createContext<RowContextV>({
  rowSize: 'big' as SIZE,
});

export const useRowContext = <
  CustomType extends ObjectForExtending | void = undefined,
>() => {
  const ctx = useContext(RowContext);
  if (!ctx) {
    throw new Error('useRowContext must be used within a Provider');
  }
  return ctx as CustomType extends ObjectForExtending
    ? CustomType & RowContextV
    : RowContextV;
};

// ----------------------------------------------------------------

export type ExpandedRowsContextV = Set<string | number>;
export type ExpandedRowsChangeContextV = React.Dispatch<
  React.SetStateAction<ExpandedRowsContextV>
>;

const ExpandedRowsContext = createContext<ExpandedRowsContextV | null>(null);
const ExpandedRowsChangeContext =
  createContext<ExpandedRowsChangeContextV | null>(null);

export const useExpandedRowsContext = () => {
  const expandedRowsIds = useContext(ExpandedRowsContext);
  const setExpandedRowsIds = useContext(ExpandedRowsChangeContext);

  if (expandedRowsIds === undefined || setExpandedRowsIds === undefined) {
    throw new Error('useExpandedRowsContext must be used within a Provider');
  }
  return { expandedRowsIds, setExpandedRowsIds };
};

// ----------------------------------------------------------------

export type HeaderContextValueTypeInstance<
  FilterStateType extends Record<string | number, unknown>,
> = {
  filters: FilterStateType | undefined;
  setFilters: React.Dispatch<React.SetStateAction<FilterStateType>> | undefined;
  clearedFiltersValue: FilterStateType | undefined;
  sortState: readonly SortColumn[] | undefined;
  setSortState:
    | React.Dispatch<React.SetStateAction<readonly SortColumn[]>>
    | undefined;
  sortIsVisible: boolean;
  setSortIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  rowSize: SIZE;
  setRowSize: React.Dispatch<React.SetStateAction<SIZE>>;
  onRowSizeChange?: (size: SIZE) => void;

  isExpandedAllRows: boolean;
  toggleExpandAllButton: () => void;
  activeView: ActiveViewModsType;
  setActiveView: React.Dispatch<React.SetStateAction<ActiveViewModsType>>;
};

export const HeaderContext = createContext<
  HeaderContextValueTypeInstance<ObjectForExtending>
>({} as HeaderContextValueTypeInstance<ObjectForExtending>);

export const useHeaderContext = <
  CustomType extends ObjectForExtending | void = undefined,
>() => {
  const ctx = useContext(HeaderContext);
  if (!ctx) {
    throw new Error('useHeaderContext must be used within a Provider');
  }
  return ctx as CustomType extends ObjectForExtending
    ? CustomType & typeof ctx
    : typeof ctx;
};

// ----------------------------------------------------------------

type CommonContextMenuProps = {
  isOpen: boolean;
  items: DropdownProps['items'] | null;
  position: { x: number; y: number } | null;
  open: (params: {
    position: { x: number; y: number };
    items?: DropdownProps['items'] | null;
  }) => void;
  close: () => void;
};

// ContextMenu
export type ContextMenuContextV<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
> = CommonContextMenuProps &
  ContextMenuDropdownProps & {
    enableHeaderContextMenu: boolean;
    enableCellContextMenu: boolean;
    openHeaderContextMenu: TableGlideInstanceProps<
      RowType,
      SummaryRowType
    >['onHeaderContextMenu'];
    onItemSelect?: (
      item: ContextMenuDropdownItem,
      event?: React.SyntheticEvent,
    ) => void;
    openCellContextMenu: TableGlideInstanceProps<
      RowType,
      SummaryRowType
    >['onCellContextMenu'];
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContextMenuContext = createContext<ContextMenuContextV<any, any> | null>(
  null,
);

export const useContextMenu = () => {
  const ctx = useContext(ContextMenuContext);
  if (!ctx) throw new Error('useContextMenu used outside Provider');
  return ctx;
};

// Search Context
type SearchContextValue = SearchingProps & {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  clearSearch: () => void;
  internalLocalValue: string;
  setInternalLocalValue: React.Dispatch<React.SetStateAction<string>>;
  domMetadata?: DomMetadata;
  /**
   * Поиск при клике на иконку / enter, если отключить
   * @default true
   * */
  searchOnType?: boolean;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export const useSearchContext = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error('useSearchContext must be used within a Provider');
  }
  return ctx;
};

// Sidebar
export type SidebarContextValue = {
  isOpen: boolean;
  width: number;
  toggle: () => void;
  setWidth: (width: number) => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error('useSidebar used outside Provider');
  return ctx;
};

// ----------------------------------------------------------------

// Table collapse context
export type TableCollapseContextValue = {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  collapseText: string;
  expandText: string;
  enableCollapse: boolean;
  domMetadata?: DomMetadata;
  collapseButtonPlacement?: 'inside' | 'above';
  collapseButtonAboveRightSlot?: React.ReactNode;
  titleText?: string;
  titleRender?: React.ReactNode;
};

const TableCollapseContext = createContext<TableCollapseContextValue | null>(
  null,
);

export const useTableCollapse = () => {
  const ctx = useContext(TableCollapseContext);
  if (!ctx) throw new Error('useTableCollapse used outside Provider');
  return ctx;
};

export const ContextProviders = <
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
>({
  children,
  headerCtxV,
  rowCtxV,
  expandedRowCtxV,
  searchCtxV,
  contextMenuCtxV,
  sideBarCtxV,
  tableCollapseCtxV,
}: PropsWithChildren & {
  headerCtxV: HeaderContextValueTypeInstance<ObjectForExtending>;
  rowCtxV: RowContextV;
  expandedRowCtxV: [ExpandedRowsContextV, ExpandedRowsChangeContextV];
  searchCtxV: SearchContextValue;
  contextMenuCtxV: ContextMenuContextV<RowType, SummaryRowType>;
  sideBarCtxV: SidebarContextValue;
  tableCollapseCtxV: TableCollapseContextValue;
}) => (
  <HeaderContext.Provider value={headerCtxV}>
    <RowContext.Provider value={rowCtxV}>
      <ExpandedRowsContext.Provider value={expandedRowCtxV[0]}>
        <ExpandedRowsChangeContext.Provider value={expandedRowCtxV[1]}>
          <SearchContext.Provider value={searchCtxV}>
            <ContextMenuContext.Provider value={contextMenuCtxV}>
              <SidebarContext.Provider value={sideBarCtxV}>
                <TableCollapseContext.Provider value={tableCollapseCtxV}>
                  {children}
                </TableCollapseContext.Provider>
              </SidebarContext.Provider>
            </ContextMenuContext.Provider>
          </SearchContext.Provider>
        </ExpandedRowsChangeContext.Provider>
      </ExpandedRowsContext.Provider>
    </RowContext.Provider>
  </HeaderContext.Provider>
);

export const RefTableContext = createContext<RefObject<DataEditorRef> | null>(
  null,
);
export const useRefTableContext = () => {
  const ctx = useContext(RefTableContext);
  if (ctx === undefined) {
    throw new Error('вне провайдера контекст - refTableContext');
  }
  return ctx;
};

export const RefTableGlobalContainerContext =
  createContext<MutableRefObject<HTMLDivElement | null> | null>(null);
export const useRefTableGlobalContainerContext = () => {
  const refTableGlobalContainer = useContext(RefTableGlobalContainerContext);
  if (refTableGlobalContainer === undefined) {
    throw new Error('вне провайдера контекст - refTableContext');
  }

  return refTableGlobalContainer ?? undefined;
};

export const RefTableContainerContext =
  createContext<React.MutableRefObject<HTMLDivElement | null> | null>(null);

export const useRefTableContainerContext = () => {
  const refTableContainer = useContext(RefTableContainerContext);
  if (refTableContainer === undefined) {
    throw new Error('вне провайдера контекст - refTableContext');
  }

  return refTableContainer ?? undefined;
};

export type AllGroupsMap = Map<
  string,
  ColumnGroupConfig<ObjectForExtending, unknown> | undefined | null
>;

export const ColumnGroupContext = createContext<{
  allGroupsMap: AllGroupsMap;

  columnsGroupingIsActive: boolean;
  maxLevelOfGroups: number;
}>({
  maxLevelOfGroups: 0,
  columnsGroupingIsActive: false,
  allGroupsMap: new Map() as AllGroupsMap,
});

export const useColumnGroupContext = () => {
  const refTableContainer = useContext(ColumnGroupContext);
  if (refTableContainer === undefined) {
    throw new Error('вне провайдера контекст - refTableContext');
  }

  return refTableContainer ?? undefined;
};

export {
  TableResizeObserverProvider,
  TableResizeObserverProviderWrapper,
  useTableResizeObserver,
  useTableResizeObserverWidth,
} from './resize-observer-context';
