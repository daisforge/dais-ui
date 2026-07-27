// GridDND.types.ts
import type {
  Layout,
  ReactGridLayoutProps,
  ResponsiveProps
} from 'react-grid-layout';

export type GridDNDItems = {
  id: string;
  /** Размер по типу: s(1x1), m(2x1), l(2x2) */
  type: 's' | 'm' | 'l';
};

export type GridDNDItemConfig = {
  id: string;
  type: 's' | 'm' | 'l';
  position: { x: number; y: number; w: number; h: number };
};

export type GridDNDLayout = {
  breakpoint: string;
  cols: number;
  rowHeight: number;
  items: GridDNDItemConfig[];
};

export type GridDNDMeta = {
  /** Текущий канонический порядок id после раскладки */
  itemsOrder: string[];
  itemsOrderTyped?: GridDNDItems[];
};

export type GridDNDProps = {
  /** Линейная последовательность виджетов (источник истины) */
  items: GridDNDItems[];

  // Адаптивность
  breakpoints?: Record<string, number>;
  cols?: Record<string, number>;
  rowHeights?: Record<string, number>;

  // Поведение RGL
  isDraggable?: boolean;
  isResizable?: boolean;
  margin?: [number, number];
  containerPadding?: [number, number];
  preventCollision?: boolean;
  allowOverlap?: boolean;
  isBounded?: boolean;
  autoSize?: boolean;
  useCSSTransforms?: boolean;
  compactType?: ReactGridLayoutProps['compactType']; // default: "horizontal"
  smartCompact?: boolean; // default: true
  resizeHandles?: ReactGridLayoutProps['resizeHandles'];
  draggableHandle?: string;
  draggableCancel?: string;
  maxRows?: ReactGridLayoutProps['maxRows'];
  transformScale?: ReactGridLayoutProps['transformScale'];

  // Колбеки
  onLayoutChange?: (
    layout: GridDNDLayout,
    allLayouts: Record<string, Layout[]>,
    meta: GridDNDMeta
  ) => void;
  onBreakpointChange?: (breakpoint: string, layout: GridDNDLayout) => void;
  onItemsChange?: (items: GridDNDItemConfig[]) => void;
  onWidthChange?: ResponsiveProps['onWidthChange'];
  onDrag?: ReactGridLayoutProps['onDrag'];
  onDragStart?: ReactGridLayoutProps['onDragStart'];
  onDragStop?: ReactGridLayoutProps['onDragStop'];
  onResize?: ReactGridLayoutProps['onResize'];
  onResizeStart?: ReactGridLayoutProps['onResizeStart'];
  onResizeStop?: ReactGridLayoutProps['onResizeStop'];

  // Контент
  children?:
    | React.ReactNode
    | ((
        item: GridDNDItemConfig,
        onRemove: () => void,
        onResize: (type: 's' | 'm' | 'l') => void
      ) => React.ReactNode);

  /**
   * Задержка (мс) перед активацией режима перетаскивания.
   * При зажатии карточки запускается таймер, по истечении которого
   * активируется D&D, блокируется выделение текста (user-select: none).
   * При отпускании режим деактивируется.
   * @default 0 (без задержки, D&D активен сразу)
   */
  dragActivationDelay?: number;

  // Стили
  gridItemComponent?: React.ComponentType<{
    children: React.ReactNode;
    isDraggable: boolean;
    className?: string;
  }>;
  containerStyle?: React.CSSProperties;
  gridStyle?: React.CSSProperties;
  enableLogs?: boolean;
};

export type GridDNDRef = {
  api: {
    /** Текущий порядок id (канонический) */
    getOrder: () => string[];
    /** Текущий порядок id + type элемента */
    getOrderDetailed: () => GridDNDItems[];
    /** Установить порядок и переложить всё */
    setOrder: (order: string[]) => void;
    /** Добавить в конец (или с индексом) и переложить */
    addItem: (spec: GridDNDItems, index?: number) => void;
    /** Удалить и переложить */
    removeItem: (id: string) => void;
    /** Изменить type (и размер) существующего виджета и переложить */
    setItemType: (id: string, type: 's' | 'm' | 'l') => void;
    /** Сырые layouts RGL по всем брейкпоинтам */
    getAllLayouts: () => Record<string, Layout[]>;
    /** Текущий GridDNDLayout (для активного BP) */
    getCurrentLayout: () => GridDNDLayout;
  };
};
