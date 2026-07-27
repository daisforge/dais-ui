import { BoxProps } from '@ui-kit/components/Box';
import type { TableCollapseConfig } from '@ui-kit/components/TableCanvas/types';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { CSSObject } from 'styled-components';

export type TabId = string | number;
export type TTabItem<T extends TabId> = {
  tabId: T;
  label: ReactNode;
} & ComponentProps<typeof TabItem>;

export type TCustomTabItem<T extends TabId> = { tabId: T; custom: ReactNode };

export type TCustomOrNotTab<T extends TabId> = TTabItem<T> | TCustomTabItem<T>;

export type TTabsProps = ComponentProps<typeof Tabs>;

/**
 * Опции для контейнера табов
 */
export type TTabsContainerOptions = {
  /**
   * Максимальная ширина контейнера табов.
   * Если установлено, контейнер будет иметь ограничение ширины и стрелки прокрутки при переполнении.
   * Может быть числом (пиксели) или строкой (CSS значение, например '250px', '50%').
   * Если не указано, ограничения ширины не будет.
   */
  maxWidth?: number | string;
};

/** Размер TableTabs */
export type TableTabsSize = 'm' | 's' | 'xs';

/**
 * Конфигурация коллапсинга над TableTabs.
 * Типизация основана на TableCollapseConfig из TableCanvas — обратная совместимость.
 * `enableCollapse` из TableCollapseConfig здесь переименован в `enabled` для краткости.
 */
export type TableTabsCollapseConfig = Pick<
  TableCollapseConfig,
  | 'defaultCollapsed'
  | 'collapseText'
  | 'expandText'
  | 'onToggleCollapse'
  | 'collapsedState'
  | 'domMetadata'
> & {
  /** Включить коллапсинг над табами (аналог enableCollapse в TableCollapseConfig) */
  enabled?: boolean;
  /** Кастомный слот справа от кнопки коллапсинга */
  rightSlot?: ReactNode;
};

/**
 * Props компонента TableTabs
 */
export type TableTabsProps<T extends TabId = TabId> = PropsWithChildren & {
  /** Массив конфигураций табов */
  tabs: TCustomOrNotTab<T>[];
  /** Контролируемое состояние активного таба [activeId, setActiveId] */
  activeTabIdState?: [T, ((newV: T) => void) | ((oldV: T) => T)];
  /** Пропсы для компонента Tabs (size, view и др.) */
  tabsProps?: TTabsProps;
  /** CSS для контейнера табов и панелей */
  tabsAndPanelsContainerCss?: string | CSSObject;
  /** Опции контейнера табов (maxWidth) */
  tabsContainerOptions?: TTabsContainerOptions;
  /** Кастомный слот справа от табов (прижат к правому краю) */
  rightSlot?: ReactNode;
  /**
   * Размер табов.
   * @default 'm'
   */
  size?: TableTabsSize;
  /**
   * Конфигурация коллапсинга над табами.
   * При активации скругление верхних углов переходит на блок коллапсинга, у табов убирается.
   */
  collapsing?: TableTabsCollapseConfig;
};

/**
 * Props компонента TableTabs.TabPanel
 */
export type TabPanelProps<T extends TabId = TabId> = {
  /** Идентификатор таба (должен совпадать с tabId в массиве tabs) */
  tabId: T;
  /**
   * Размонтировать контент при переключении на другой таб
   * @default true
   */
  unmountOnClose?: boolean;
} & BoxProps;

export function isCustomTab<T extends TabId>(
  tab: TCustomOrNotTab<T>
): tab is TCustomTabItem<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tab as any)?.custom !== undefined;
}
