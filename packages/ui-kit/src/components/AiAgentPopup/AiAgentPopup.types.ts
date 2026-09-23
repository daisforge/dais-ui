import { Popup } from '@ui-kit/components/Popup';
import type {
  ComponentProps,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
} from 'react';

type PopupProps = ComponentProps<typeof Popup>;

/**
 * Позиция окна: координаты левого верхнего угла относительно вьюпорта, в px.
 */
export type AiAgentPopupPosition = { x: number; y: number };

export type AiAgentPopupPositionState = [
  AiAgentPopupPosition,
  Dispatch<SetStateAction<AiAgentPopupPosition>>,
];

/**
 * Размер окна в px.
 */
export type AiAgentPopupSize = { width: number; height: number };

/**
 * Область, в рамках которой можно перетаскивать и ресайзить окно.
 * Отступы от границ вьюпорта.
 */
export type AiAgentPopupDragBoundary = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

/**
 * Конфигурация resizable из атомарного Popup.
 */
export type AiAgentPopupResizableConfig = Exclude<
  PopupProps['resizable'],
  boolean | undefined
>;

/**
 * Контейнер, в котором живёт окно (пропс frame атомарного Popup).
 */
export type AiAgentPopupFrame = PopupProps['frame'];

/**
 * Метрики области окна: положение относительно вьюпорта и размеры.
 */
export type AiAgentPopupFrameMetrics = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type AiAgentPopupResizeCorner =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

/**
 * Что храним в localStorage при useStorage.
 */
export type AiAgentPopupStoredState = {
  position?: AiAgentPopupPosition;
  size?: AiAgentPopupSize;
};

export type AiAgentPopupProps = Omit<
  PopupProps,
  'children' | 'isOpen' | 'placement' | 'offset' | 'draggable' | 'resizable'
> & {
  /**
   * Контейнер, в котором живёт окно. По умолчанию document: окно поверх
   * всей страницы, это целевой сценарий использования. Если передать
   * элемент, окно рендерится, перетаскивается и ресайзится в его рамках;
   * в продуктовом коде это обычно не нужно, вариант используется в стори
   * для изоляции примеров друг от друга.
   */
  frame?: AiAgentPopupFrame;
  /**
   * Содержимое окна. Компонент задаёт только контейнер (обводка, тень,
   * скругление, внутренние отступы), всё наполнение на стороне потребителя.
   */
  children?: ReactNode;
  /**
   * Ref на элемент, рядом с которым откроется окно (справа от него).
   * Используется, только если позиция ещё не известна: не передан
   * defaultPosition и нет сохранённой позиции из useStorage.
   */
  targetRef?: RefObject<HTMLElement | null>;
  /**
   * Отступ окна от targetRef в px.
   * @default 12
   */
  targetGap?: number;
  /**
   * Начальная позиция окна. Приоритетнее targetRef, но уступает сохранённой
   * позиции из useStorage.
   */
  defaultPosition?: AiAgentPopupPosition;
  /**
   * Внешний стейт позиции [position, setPosition] для полного управления
   * снаружи. Если передан, useStorage позицию не сохраняет.
   */
  positionState?: AiAgentPopupPositionState;
  /**
   * Callback смены позиции при перетаскивании.
   */
  onPositionChange?: (position: AiAgentPopupPosition) => void;
  /**
   * Включить / выключить перетаскивание. Окно тянется за любое место
   * контейнера, кроме интерактивных элементов и зон из dragIgnoreSelector.
   * @default true
   */
  draggable?: boolean;
  /**
   * Ограничение области перетаскивания: отступы от границ вьюпорта.
   * Учитывается и при ресайзе: окно нельзя растянуть за границы области.
   */
  dragBoundary?: AiAgentPopupDragBoundary;
  /**
   * Дополнительный CSS-селектор элементов, с которых перетаскивание не
   * начинается (например, область сообщений чата, чтобы работало выделение
   * текста). То же самое можно сделать атрибутом data-no-drag на элементе.
   */
  dragIgnoreSelector?: string;
  /**
   * Сохранять ли позицию и размер окна в localStorage.
   * - `true`: автосохранение с ключом `ai-agent-popup-state`.
   * - `string`: кастомный ключ.
   * - `false`: отключено.
   * @default false
   */
  useStorage?: boolean | string;
  /**
   * Включить / настроить resizable-режим.
   * - `true`: ресайз за правый нижний угол с дефолтной иконкой.
   * - объект: частичная конфигурация, мержится с дефолтной.
   * @default true
   */
  resizable?: boolean | Partial<AiAgentPopupResizableConfig>;
  /**
   * Начальный размер окна в px. Если не задан, размер определяет контент.
   * Сохранённый размер из useStorage приоритетнее.
   */
  defaultSize?: AiAgentPopupSize;
  /**
   * Callback смены размера по окончании ресайза.
   */
  onSizeChange?: (size: AiAgentPopupSize) => void;
};
