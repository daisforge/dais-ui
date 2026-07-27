import { Box } from '@ui-kit/components/Box';
import { IconButton } from '@ui-kit/components/IconButton';
import { ComponentProps, ReactNode, RefObject } from 'react';

import { PanelCollapsedContent, PanelContent } from './styled';

type PanelCollapsedContentProps = Omit<
  ComponentProps<typeof PanelCollapsedContent>,
  '$isAdaptive1280' | 'showResizeable' | '$active'
>;

export type LeftPanelSlotSizesProps = {
  /**
   * Размер кнопок, поиска и сегментов в кастомных слотах
   */
  buttonSize: 's' | 'xs';
};

export type LeftPanelAdaptiveSlot =
  | ReactNode
  | ((props: LeftPanelSlotSizesProps) => ReactNode);

export type LeftPanelProps = {
  /**
   * Минимальная ширина
   * @default 72, на viewport <= 1280px — 56
   */
  minWidth?: number;
  /**
   * Максимальная ширина
   */
  maxWidth?: number;
  /**
   * Отключает принудительный адаптив компонента на viewport <= 1280px.
   *
   * @deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
   *
   * @remarks
   * При `true` компонент использует desktop-размеры для слотов, кнопки сворачивания и свёрнутой панели, если `minWidth` не передан.
   * Поведение сохраняется даже на viewport <= 1280px.
   * Это временный escape hatch, не основной сценарий использования.
   *
   * @default false
   */
  disableMediaAdaptive?: boolean;
  /**
   * Состояние открытости или закрытости панели
   */
  collapseState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * Состояние ширины панели панели
   */
  widthState?: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>
  ];
  /**
   * Свойства для container элемента
   */
  containerProps?: ComponentProps<typeof Box>;
  /**
   * Свойства для content открытой панели
   */
  contentProps?: Omit<ComponentProps<typeof PanelContent>, '$active'>;
  /**
   * Свойства для content закрытой панели
   */
  collapsedContentProps?: PanelCollapsedContentProps;
  /**
   * Скрытие кнопки открытия/закрытия панели
   */
  showToggleButton?: boolean;
  /**
   * Скрытие сепаратора у resize
   */
  showResizeable?: boolean;
  /**
   * Кастомный класс для Content body элемента в открытом состоянии
   * Можно передать ReactNode или callback с размерами для адаптива.
   */
  expandedContent?: LeftPanelAdaptiveSlot;
  /**
   * Кастомный класс для Content body элемента в закрытом состоянии
   * Можно передать ReactNode или callback с размерами для адаптива.
   */
  collapsedContent?: LeftPanelAdaptiveSlot;
  /**
   * Кастомный класс для Content footer элемента в закрытом состоянии
   * Можно передать ReactNode или callback с размерами для адаптива.
   */
  collapsedFooterContent?: LeftPanelAdaptiveSlot;
  /**
   * Callback, который срабатывает при изменении ширины (только когда панель раскрыта)
   */
  onResize?: (width: number) => void;
  /**
   * Callback, который срабатывает в моменте изменения
   */
  onToggleCollapse?: (next: boolean) => void;
};

type ToggleButtonBaseProps = ComponentProps<typeof IconButton>;

export type ToggleButtonProps = ToggleButtonBaseProps & {
  collapsed?: boolean;
  isAbsolute?: boolean;
  isAdaptive1280?: boolean;
  onClick?: () => void;
};

export type HookResizeProps = {
  setWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
  isResizingRef: React.MutableRefObject<boolean>;
  setIsResizing: React.Dispatch<React.SetStateAction<boolean>>;
  panelRef: RefObject<HTMLDivElement | null>;
  minWidth: number;
  maxWidth: number;
  parentRef: RefObject<HTMLElement | null>;
  isCollapsed: boolean;
  onResize?: (width: number) => void;
};
