import {
  DataAttributes,
  DefaultSidebarTabIds,
} from '@ui-kit/components/Table/types';
import { IconProps } from '@ui-kit/icons';
import { ChangeEvent, FC, ReactNode } from 'react';

import { DomMetadata } from '../../types/additional.type';

/**
 * Базовый тип для деталей фичи, содержащий общие поля
 */
type FeatureDetailsBase = {
  /**
   * Если true, фича будет всегда отображаться в controlBlock и не может быть перенесена в sidebar
   * @default false
   */
  mandatory?: boolean;
  /**
   * Если true, фича может быть сжата в блок ... внутри ToolsMenu
   * @default false
   */
  canBeCompressedInToolsMenu?: boolean;
  /**
   * Дополнительные детали/настройки для фичи для отображения в RightSidebar таблицы
   */
  details?: FeatureDetails;
};

/**
 * Типы деталей фичи с конкретными вариантами
 */
export type FeatureDetails =
  | ({
      type: 'button';
      label: string;
      onClick: () => void;
      /**
       * Иконка отображаемая у фичи в sidebar
       */
      icon: ReactNode;
      className?: string;
    } & DataAttributes)
  | ({
      type: 'switch';
      label: string;
      checked: boolean;
      onChange: (event: ChangeEvent<HTMLInputElement>) => void;
      className?: string;
    } & DataAttributes)
  | ({
      type: 'select';
      /**
       * label отображаемой фичи в sidebar
       */
      label: string;
      /**
       * Иконка отображаемая у фичи в sidebar
       */
      icon: ReactNode;
      /**
       * Текущее выбранное значение в селекте
       */
      value: string;
      /**
       * Опции для дропдауна
       */
      options: Array<{
        value: string;
        label: string;
      }>;
      onChange: (value: string) => void;
      className?: string;
    } & DataAttributes)
  | {
      type: 'custom';
      render: () => ReactNode;
    };

/**
 * Вариант фичи с иконкой как компонентом
 */
export type FeatureItemWithIcon = FeatureDetailsBase & {
  /**
   * Свойства ниже - сохранение старой реализации фичей, до переезда их в sidebar.
   * Используются для отображения фичи в верхнем controlBlock
   */
  value: string;
  label: string;
  onClick: () => void;
  Icon: FC<IconProps>;
  /**
   * Добавляет разделитель слева от элемента
   * @default false
   */
  dividerLeft?: boolean;
  modal?: ReactNode;
  className?: string;
} & DataAttributes;

/**
 * Вариант фичи с кастомной отрисовкой иконки
 */
export type FeatureItemWithCustomIcon = FeatureDetailsBase & {
  value: string;
  CustomIconRender: () => ReactNode;
};

/**
 * Объединённый тип для всех вариантов фич
 */
export type FeatureItem = FeatureItemWithIcon | FeatureItemWithCustomIcon;

export type SidebarTab = {
  /**
   * Уникальный идентификатор таба
   */
  id: DefaultSidebarTabIds | string;
  /**
   * title таба (для Tooltip)
   */
  label: string;
  /**
   * Иконка таба
   */
  icon: ReactNode;
  /**
   * Контентная часть сайдбара
   */
  content: React.ReactNode;
  /**
   * Показывать ли в сайдбаре
   * @default true
   */
  showInSidebar?: boolean;
  /**
   * Заголовок контентной части сайдбара
   */
  title?: string;
  /**
   * Кастомный элемент справа от title в шапке сайдбара
   */
  titleRightSlot?: React.ReactNode;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};

/**
 * Тип состояния активности / видимости фичей ToolsMenu
 */
export type ToolsMenuState = {
  leftSide: {
    collapsingBlock: {
      isActive: boolean;
    };
    selectingRowFeature: {
      isActive: boolean;
      isLabelVisible: boolean;
      isCounterVisible: boolean;
    };
    editRowFeature: {
      isActive: boolean;
      isLabelVisible: boolean;
      /**
       * Включен ли режим Редактирования. Если да, то будет другой текст (посмотреть),
       * а значит нужно учитывать при расчёте ширины
       */
      editModeEnabled: boolean;
    };
    leftSideInner: Array<{
      isLabelVisible: boolean;
      isTargetAction: boolean;
    }>;
    /**
     * Спрятались ли кнопки leftSideInner в Dropdown (кнопка Действия)
     */
    isLeftSideInnerInsideDropdown: boolean;
  };
  middle: {
    searchingFeature: {
      isActive: boolean;
      searchPosition: 'inline' | 'below';
    };
  };
  rightSide: {
    rightSideInner: Array<{
      isLabelVisible: boolean;
      isTargetAction: boolean;
    }>;
    customFeatures: Array<{
      isMovedToRightSidebar: boolean;
      isMandatory: boolean;
      canBeCompressedInToolsMenu: boolean;
    }>;
    groupingRowsFeature: {
      isActive: boolean;
      isVisibleLabel: boolean;
      isCounterVisible: boolean;
    };
    /**
     * Спрятались ли кнопки в Dropdown справа (кнопка ... )
     */
    isRightSideInsideDropdown: boolean;
  };
};

export type InitialWidthsForToolsMenu = {
  leftSideInner?: Array<number>;
  rightSideInner?: Array<number>;
  collapseBlock?: Array<number>;
};

export interface CompressionConfig {
  compressionLevels: CompressionLevel[];
}

export interface CompressionLevel {
  priority: number;
  target: 'left' | 'center' | 'right';
  action: CompressionAction;
  condition?: (state: ToolsMenuState) => boolean;
}

export type CompressionAction =
  | { type: 'hide-custom-features'; strategy?: 'all' | 'one' }
  | {
      type: 'remove-label';
      target:
        | 'editRowFeature'
        | 'selectingRowFeature'
        | 'groupingRowFeature'
        | 'action-buttons';
      strategy?: 'all' | 'one';
    }
  | { type: 'remove-counter'; target: 'edit' | 'select' | 'action-buttons' }
  | { type: 'move-search-down' }
  | { type: 'hide-right-side-features' };

/**
 * Ключ - строка, представляющая исходное состояние
 */
export interface CompressionCache {
  cache: Map<
    string,
    {
      originalState: ToolsMenuState;
      ranges: RangeCache[];
    }
  >;
}

export interface RangeCache {
  min: number;
  max: number;
  state: ToolsMenuState;
  stateWidth: number;
}
