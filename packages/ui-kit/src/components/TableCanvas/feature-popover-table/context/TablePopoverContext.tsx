import React, { createContext, ReactNode, useContext } from 'react';

/**
 * Тип контента который можно показать в поповере.
 * - `filter` — фильтр колонки из шапки
 * - `custom` — произвольный контент, который рисует сам открывший (`render`),
 *   например canvas-поповер (feature-canvas-popover)
 */
export type PopoverContentType = 'filter' | 'custom';

/** Размер якоря поповера (px). */
export interface PopoverAnchorSize {
  width: number;
  height: number;
}

/**
 * Когда общая инфраструктура закрывает поповер. Открывший решает сам, общий
 * код про конкретные поповеры не знает.
 */
export interface TablePopoverBehavior {
  /**
   * Закрывать при скролле таблицы: `x` — только по горизонтали (фильтр шапки),
   * `xy` — по любой оси, `false` — не закрывать.
   */
  closeOnScroll: 'x' | 'xy' | false;
  /** Закрывать при изменении размеров таблицы (ресайз окна, полный экран). */
  closeOnTableResize: boolean;
}

/** Что получает `render` у поповера с `contentType: 'custom'`. */
export interface TablePopoverRenderParams {
  close: TablePopoverContextValue['close'];
}

/**
 * Состояние поповера в таблице
 */
export interface TablePopoverState {
  /** Открыт ли поповер */
  isOpen: boolean;
  /** Координаты якоря во viewport: точка клика для фильтра, левый верхний угол ноды или ячейки для canvas-поповера */
  position: { x: number; y: number } | null;
  /**
   * Размер якоря. Фильтр открывается от точки (1×1), canvas-поповер от
   * прямоугольника ноды или ячейки: так placement считается от реальных границ.
   */
  anchorSize: PopoverAnchorSize | null;
  /** Тип контента */
  contentType: PopoverContentType | null;
  /** Произвольные данные для контента (например, columnConfig для фильтра) */
  contentData?: unknown;
  /** Отрисовка контента для `contentType: 'custom'`. */
  render?: (params: TablePopoverRenderParams) => ReactNode;
  /** Правила закрытия; null — значения по умолчанию для типа контента. */
  behavior: TablePopoverBehavior | null;
  /**
   * Ключ источника, открывшего поповер: ключ колонки для фильтра, ключ ноды
   * или ячейки для canvas-поповера. По нему работает toggle повторным кликом.
   */
  sourceKey: string | null;
}

export interface TablePopoverOpenParams {
  position: { x: number; y: number };
  anchorSize?: PopoverAnchorSize;
  contentType: PopoverContentType;
  contentData?: unknown;
  render?: TablePopoverState['render'];
  behavior?: TablePopoverBehavior;
  sourceKey?: string;
}

/**
 * API для управления поповером
 */
export interface TablePopoverContextValue {
  /** Текущее состояние */
  state: TablePopoverState;
  /** Открыть поповер */
  open: (params: TablePopoverOpenParams) => void;
  /**
   * Закрыть поповер.
   * @param options.outsidePress закрытие по клику мимо поповера (floating-ui useDismiss).
   * Взводит защёлку, чтобы повторный клик по той же иконке фильтра не переоткрывал поповер.
   */
  close: (options?: { outsidePress?: boolean }) => void;
  /** Обновить позицию поповера (например, при ресайзе колонки) */
  updatePosition: (position: { x: number; y: number }) => void;
}

/** Правила закрытия, если открывший их не задал. */
export const DEFAULT_POPOVER_BEHAVIOR: Record<
  PopoverContentType,
  TablePopoverBehavior
> = {
  filter: { closeOnScroll: 'x', closeOnTableResize: true },
  custom: { closeOnScroll: 'xy', closeOnTableResize: true },
};

/** Действующие правила закрытия открытого поповера. */
export const getPopoverBehavior = (
  state: TablePopoverState,
): TablePopoverBehavior | null => {
  if (!state.contentType) return null;
  return state.behavior ?? DEFAULT_POPOVER_BEHAVIOR[state.contentType];
};

const TablePopoverContext = createContext<TablePopoverContextValue | null>(
  null,
);

/**
 * Провайдер контекста поповера для TableCanvas.
 * Управляет состоянием и позиционированием поповеров (фильтры, кастомный контент и т.д.).
 */
export const TablePopoverProvider: React.FC<{
  children: React.ReactNode;
  value: TablePopoverContextValue;
}> = ({ children, value }) => (
  <TablePopoverContext.Provider value={value}>
    {children}
  </TablePopoverContext.Provider>
);

/**
 * Хук для работы с поповером таблицы
 */
export const useTablePopover = (): TablePopoverContextValue => {
  const context = useContext(TablePopoverContext);
  if (!context) {
    throw new Error('useTablePopover must be used within TablePopoverProvider');
  }
  return context;
};

/** То же, что useTablePopover, но вне провайдера возвращает null. */
export const useOptionalTablePopover = (): TablePopoverContextValue | null =>
  useContext(TablePopoverContext);
