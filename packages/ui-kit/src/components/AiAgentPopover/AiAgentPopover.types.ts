import type { PopoverProps } from '@ui-kit/components/Popover';
import { Dispatch, SetStateAction } from 'react';

type DataAttributes = {
  [K in `data-${string}`]?: string;
};

/**
 * Кастомные placement для popover
 */
export type AiAgentPopoverCustomPlacement =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

export type AiAgentPopoverPlacement =
  | PopoverProps['placement']
  | AiAgentPopoverCustomPlacement;

/**
 * Позиция target элемента для drag-a
 */
export type AiAgentPopoverPosition = { x: number; y: number };
export type AiAgentPopoverPositionState = [
  AiAgentPopoverPosition,
  Dispatch<SetStateAction<AiAgentPopoverPosition>>,
];

/**
 * Область драга. Отступы от границ.
 */
export type AiAgentPopoverDragBoundary = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type AiAgentPopoverDragSector = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Конфигурация resizable из PopoverProps
 */
export type AiAgentPopoverResizableConfig = Exclude<
  PopoverProps['resizable'],
  boolean | undefined
>;

export type AiAgentPopoverProps = Omit<
  PopoverProps,
  'view' | 'placement' | 'resizable'
> & {
  contentContainerClassNames?: string;
  /**
   * Включить / Выключить перерасчёт offset для кастомных значений placement. top-right, top-left, bottom-right, bottom-left, чтобы стрелка popover была в центре target элемента, а контент пропорционально смещен в зависимости от placement.
   * @default true
   */
  calculateOffset?: boolean;
  /**
   * Включить / Выключить перерасчёт placement в режиме draggable.
   * @default true
   */
  calculatePlacement?: boolean;
  /**
   * Позиция отображения popover.
   * @default auto
   */
  placement?: AiAgentPopoverPlacement;
  /**
   * Включить / Выключить перетаскивание
   * @default false
   */
  draggable?: boolean;
  /**
   * Внешний стейт позиции [position, setPosition].
   * Если не передан, будет использован внутренний стейт. Не используется для интеграции с localStorage. Данное поле отвечает за полное внешнее управление позицией
   */
  positionState?: AiAgentPopoverPositionState;
  /**
   * Начальная позиция при первом рендере (используется только если НЕ передан positionState и НЕ используется useStorage)
   * @default "bottom-right"
   */
  defaultPosition?: AiAgentPopoverPosition | AiAgentPopoverCustomPlacement;
  /**
   * Ограничение области в рамках которой можно перемещать элемент
   */
  dragBoundary?: AiAgentPopoverDragBoundary;
  /**
   * В момент драга сохранять текущий стейт видимости popover. При перетаскивании закрытого popover в момент завершения перетаскивания popover не откроется, если этот пропс активен. Аналогично с открытым состоянием.
   * @default true
   */
  ignoreToggleOnDrag?: boolean;
  /**
   * Callback смены позиции в draggable режиме в момент перетаскивания
   */
  onPositionChange?: (pos: { x: number; y: number }) => void;
  /**
   * Сохранять ли позицию в localStorage.
   * - `true`: автосохранение с ключом `ai-agent-popover-position`.
   * - `string`: кастомный ключ (например, `my-popover-position`).
   * - `false`: отключено.
   * @default false
   */
  useStorage?: boolean | string;
  /**
   * Включить / настроить resizable-режим.
   * - `true`: включить с дефолтной конфигурацией (иконка ресайза автоматически позиционируется в зависимости от placement).
   * - `(placement: AiAgentPopoverPlacement) => config`: функция для кастомной конфигурации. Принимает текущий placement,
   *   возвращает частичную конфигурацию, которая мержится с дефолтной.
   * @default undefined
   */
  resizable?:
    | boolean
    | ((
        placement: AiAgentPopoverPlacement,
      ) => Partial<AiAgentPopoverResizableConfig>);

  /**
   * Data-атрибуты для target-кнопки (MagicButton). Например: data-onboarding-id, data-testid
   */
  targetDataAttributes?: DataAttributes;
};
