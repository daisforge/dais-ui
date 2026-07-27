import type { ButtonCompProps } from '@ui-kit/components/Button';
import { DropdownProps } from '@ui-kit/components/Dropdown';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { TooltipProps } from '@ui-kit/components/Tooltip';
import { ComponentProps, MutableRefObject, ReactNode, RefObject } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import { TableDropdownConfigProps } from '../Table/components/TableDropdown/types';
import { DataAttributes } from '../Table/types/utils.type';

export type LinkButtonProps = ComponentProps<typeof LinkButton>;
export type LinkButtonView = LinkButtonProps['view'];

/**
 * Статический размер панели для использования ВНУТРИ таблиц (аналог размерной сетки Control Block).
 * `m` и `s` — одинаковые (обычный размер, кнопки `s`); `xs` — уменьшенный.
 * Если задан — перекрывает viewport-логику (медиазапрос 1280 не используется).
 */
export type MassActionsSize = 'm' | 's' | 'xs';

export type LinkView<V extends string | undefined> = V extends string
  ? `link${Capitalize<V>}`
  : undefined;

// Тип для обычного Button в MassAction
export type MassActionsButtonPropsButton = DataAttributes &
  Partial<ButtonCompProps> & {
    type: 'button';
    view?: ButtonCompProps['view'];
    /**
     * Dropdown для кнопки.
     * Используется универсальный DropdownProps, который работает и с обычным Dropdown, и с TableDropdown
     */
    dropdown?: DropdownProps & { $css?: CSSObject };
    disabledTooltipProps?: TooltipProps;
  };

// Тип для LinkButton в MassActions
export type MassActionsButtonPropsLinkButton = DataAttributes &
  Partial<LinkButtonProps> & {
    type?: 'linkButton';
    view?: LinkView<LinkButtonView>;
    /**
     * Dropdown для кнопки.
     * Используется универсальный DropdownProps, который работает и с обычным Dropdown, и с TableDropdown
     */
    dropdown?: DropdownProps & { $css?: CSSObject };
    disabledTooltipProps?: TooltipProps;
  };

// Объединенный тип для MassActions
export type MassActionsButtonProps =
  | MassActionsButtonPropsButton
  | MassActionsButtonPropsLinkButton;

export type StyledButtonProps = {
  $hasDropdown?: boolean;
  $showLabel?: boolean;
  $buttonStyles?: string | CSSObject | FlattenSimpleInterpolation;
};

export type MassActionsCounterProps = {
  /** Количество выбранных элементов */
  selectedCount: number;
  /** Текст метки (по умолчанию "Выбрано") */
  label?: string;
  /** Показывать ли чекбокс */
  showCheckbox?: boolean;
  /** Состояние чекбокса */
  checked?: boolean;
  /** Indeterminate состояние чекбокса */
  indeterminate?: boolean;
  /** Колбэк при изменении чекбокса */
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Кастомный className */
  className?: string;
};

/**
 * Конфигурация сайдбара для MassActions
 */
export type MassActionsSidebarConfig = {
  /** Открыт ли сайдбар */
  isOpen: boolean;
  /** Ширина сайдбара */
  width: number;
  /** Ширина тогл-панели сайдбара (по умолчанию 44px) */
  togglePanelWidth?: number;
};

/**
 * Конфигурация чекбокса для standalone версии
 */
export type CheckboxConfig = {
  /** Состояние чекбокса */
  checked: boolean;
  /** Колбэк при изменении состояния */
  onChange: (checked: boolean) => void;
  /** Indeterminate состояние */
  indeterminate?: boolean;
  /** Disabled состояние */
  disabled?: boolean;
};

/**
 * Конфигурация счетчика выбранных элементов
 */
export type CounterConfig = {
  /** Количество выбранных элементов */
  selectedCount: number;
  /** Общее количество элементов (опционально) */
  totalCount?: number;
  /** Кастомный текст для счетчика */
  label?: string;
};

/**
 * Пропсы базового компонента MassActions
 */
export type MassActionsProps = {
  /**
   * Ref на контейнер относительно которого будет позиционироваться панель
   * Может быть RefObject, MutableRefObject или функция возвращающая элемент
   */
  containerRef:
    | RefObject<HTMLElement>
    | MutableRefObject<HTMLElement | null>
    | (() => HTMLElement | null);

  /**
   * Левая секция панели (чекбокс + счетчик или кастомный контент)
   */
  leftSection: ReactNode;

  /**
   * Средняя секция (например, кнопка "Сбросить всё")
   * Опционально - для standalone версии не используется
   */
  middleSection?: ReactNode;

  /**
   * Кнопки действий
   */
  buttons?: MassActionsButtonProps[];

  /**
   * Конфигурация сайдбара (если есть)
   */
  sidebarConfig?: MassActionsSidebarConfig;

  /**
   * Есть ли какая-то фича в сайдбаре (влияет на расчет ширины)
   */
  isHaveSomeFeatureInSidebar?: boolean;

  /**
   * Конфигурация dropdown для скрытых кнопок
   */
  collapsedDropdownProps?: TableDropdownConfigProps;

  /**
   * Количество выбранных элементов
   * Используется для внутренней логики видимости панели (если show не указан)
   * Если selectedCount === 0 и show не указан, панель не отображается
   */
  selectedCount: number;

  /**
   * Явный контроль видимости панели
   * Если указан, имеет приоритет над автоматической логикой на основе selectedCount
   * Позволяет показывать панель даже при selectedCount === 0
   * По умолчанию: undefined (используется логика selectedCount > 0)
   */
  show?: boolean;

  /**
   * Использовать TableDropdown (для таблиц) вместо обычного Dropdown
   * По умолчанию false (используется обычный Dropdown)
   */
  useTableDropdown?: boolean;
  /**
   * Включить отладочное логирование в консоль
   * Полезно для отладки проблем с компрессией и позиционированием
   * По умолчанию false
   */
  enableDebugLogs?: boolean;
  /**
   * Отступ снизу от контейнера (в пикселях)
   * По умолчанию: 16px для standalone, 24px для таблицы
   */
  bottom?: number;

  /**
   * Минимальный отступ панели от краев контейнера (в пикселях)
   * Используется для:
   * - CSS padding панели (симметрично: minPadding слева и справа)
   * - Расчетов компрессии (максимальная ширина панели с учетом отступов)
   * - Позиционирования (гарантирует минимальный отступ от левого края контейнера)
   * По умолчанию: 16px для standalone, 24px для таблицы
   */
  minPadding?: number;

  /**
   * Статический размер панели (для использования ВНУТРИ таблиц).
   * Если задан — перекрывает viewport-логику (медиазапрос 1280 не используется):
   * `m`/`s` = обычный размер (кнопки `s`), `xs` = уменьшенный (кнопки `xxs`, «ещё» `xs`, счётчик Body XS, свои паддинги).
   * НЕ задавать для standalone — там компактность определяется по ширине вьюпорта (`down('xl')`).
   */
  size?: MassActionsSize;
};
