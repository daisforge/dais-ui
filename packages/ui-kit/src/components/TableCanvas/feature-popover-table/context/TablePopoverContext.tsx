import React, { createContext, useContext } from 'react';

/**
 * Тип контента который можно показать в поповере
 */
export type PopoverContentType = 'filter' | 'custom';

/**
 * Состояние поповера в таблице
 */
export interface TablePopoverState {
  /** Открыт ли поповер */
  isOpen: boolean;
  /** Координаты клика (относительно скроллящегося контейнера) */
  position: { x: number; y: number } | null;
  /** Тип контента */
  contentType: PopoverContentType | null;
  /** Произвольные данные для контента (например, columnConfig для фильтра) */
  contentData?: unknown;
  /** ID колонки, которая открыла поповер (для отслеживания ресайза) */
  columnId: string | null;
}

/**
 * API для управления поповером
 */
export interface TablePopoverContextValue {
  /** Текущее состояние */
  state: TablePopoverState;
  /** Открыть поповер */
  open: (params: {
    position: { x: number; y: number };
    contentType: PopoverContentType;
    contentData?: unknown;
    columnId?: string;
  }) => void;
  /** Закрыть поповер */
  close: () => void;
  /** Обновить позицию поповера (например, при ресайзе колонки) */
  updatePosition: (position: { x: number; y: number }) => void;
}

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
