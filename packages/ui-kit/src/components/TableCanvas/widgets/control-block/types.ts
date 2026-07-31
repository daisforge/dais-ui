import { DropdownItemOption } from '@ui-kit/components/Dropdown';
import {
  DataAttributes,
  DefaultSidebarTabIds,
} from '@ui-kit/components/TableCanvas/types';
import { IconProps } from '@ui-kit/icons';
import { ChangeEvent, FC, ReactNode } from 'react';

import { SIZE } from '../../styles/styles.constants';
import { DomMetadata } from '../../types/additional.type';

/**
 * Контекст рендера иконки фичи. Передаётся в кастомные рендеры (иконку
 * можно задать функцией от него), чтобы потребитель сам подобрал размер.
 * При компрессии контрл-блока фичи прячутся в overflow дропдаун, а там
 * на маленьком rowSize иконки должны быть мельче, чем в самом контрл-блоке.
 */
export type DropdownRenderCtx = {
  /** Текущая высота строк таблицы (big | medium | small) */
  rowSize: SIZE;
  /** true - иконка рисуется в overflow дропдауне, false - в контрл-блоке */
  isInDropdown: boolean;
};

/**
 * Иконка фичи: либо готовый узел (рендерится как есть), либо функция от
 * контекста (вызывается с rowSize и isInDropdown). Функция нужна, чтобы
 * иконка подстраивалась под размер в дропдауне; узел сохраняет прежнее
 * поведение и обратную совместимость.
 */
export type FeatureIconRender =
  | ReactNode
  | ((ctx: DropdownRenderCtx) => ReactNode);

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
       * Иконка фичи в overflow дропдауне. Узел рендерится как есть, либо
       * функция (ctx) => ReactNode для подгонки размера под rowSize.
       */
      icon: FeatureIconRender;
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
       * Иконка фичи в overflow дропдауне. Узел рендерится как есть, либо
       * функция (ctx) => ReactNode для подгонки размера под rowSize.
       */
      icon: FeatureIconRender;
      /**
       * Текущее выбранное значение в селекте
       */
      value: string;
      /**
       * Опции для дропдауна. value/label обязательны и строгие (под onChange),
       * а контент пункта (галочка/иконка слева, бейдж/switch справа, disabled)
       * разработчик задаёт сам — поля взяты из атомарного DropdownItemOption,
       * библиотека их только прокидывает, ничего не навязывая.
       */
      options: Array<
        { value: string; label: string; dividerAfter?: boolean } & Pick<
          DropdownItemOption,
          'contentLeft' | 'contentRight' | 'disabled'
        >
      >;
      onChange: (value: string) => void;
      className?: string;
    } & DataAttributes)
  | {
      type: 'custom';
      /**
       * Кастомный рендер. Получает контекст (rowSize, isInDropdown), чтобы
       * подстроить размер иконки. Старые реализации без аргумента работают.
       */
      render: (ctx: DropdownRenderCtx) => ReactNode;
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
  /**
   * Кастомный рендер иконки фичи. Рендерится как компонент, поэтому внутри
   * можно использовать хуки. Получает пропсы rowSize и isInDropdown, чтобы
   * подобрать размер иконки (в дропдауне на маленьком rowSize она мельче,
   * в самом контрл-блоке остаётся обычной). Старые реализации без аргумента
   * продолжают работать.
   */
  CustomIconRender: (ctx: DropdownRenderCtx) => ReactNode;
};

/**
 * Объединённый тип для всех вариантов фич
 */
export type FeatureItem = FeatureItemWithIcon | FeatureItemWithCustomIcon;

/**
 * Пункт меню закрепления (нативный или продуктовый). Нативные пункты
 * («Сбросить закрепление», «Закрепить столбцы») даёт таблица из коробки;
 * продукт может донастроить их (override по совпадающему value), дополнить
 * своими (закрепить область/строки/шапку) и контролировать порядок.
 */
export type PinningMenuItem = {
  /**
   * Уникальный ключ пункта. Совпадение с value нативного пункта = override
   * (продуктовые поля перекрывают нативные).
   */
  value: string;
  label: string;
  /**
   * Иконка слева в пункте. Узел рендерится как есть, либо функция (ctx),
   * чтобы подстроить размер под rowSize (в т.ч. внутри overflow-дропдауна
   * при компрессии). Стейт/иконку продуктовых пунктов контролирует продукт.
   */
  icon?: FeatureIconRender;
  /**
   * Действие пункта. У нативных пунктов задаётся таблицей; продукт может
   * переопределить.
   */
  onClick?: () => void;
  /**
   * Порядок в списке (по возрастанию). Нативные: reset=100, pin-columns=200.
   * Пункты без order идут в конец, сохраняя исходный порядок.
   */
  order?: number;
  /**
   * Нарисовать разделитель после пункта.
   * @default false
   */
  dividerAfter?: boolean;
  disabled?: boolean;
};

/**
 * Конфиг нативной фичи закрепления столбцов в правой зоне иконок контрл-блока
 * (SplitIconButton: иконка-пин + шеврон с дропдауном). Показывается, когда в
 * таблице активировано закрепление колонок (columnsControl.pinning).
 */
export type PinningMenuConfig = {
  /**
   * Явное вкл/выкл фичи.
   * @default columnsControl.pinning
   */
  enable?: boolean;
  /**
   * Продуктовые пункты меню — мёржатся с нативными (override по value,
   * сортировка по order).
   */
  items?: PinningMenuItem[];
  /**
   * DomMetadata левой кнопки-иконки закрепления. Её `dataAttributes`
   * навешиваются на кнопку-иконку (data-атрибуты для e2e-тестов, аналитики и
   * онбординга — поиск элемента в DOM). Пример:
   * `{ dataAttributes: { 'data-testid': 'pinning-icon' } }`.
   */
  iconDomMetadata?: DomMetadata;
};

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
 * Источник элемента в overflowItems.
 * button это объединённая правая зона кнопок: rightSideInner из конфига
 * плюс встроенные фичи (ключ-текст, группировка). Для компрессии они
 * неразличимы, поэтому в состоянии живут одним массивом.
 */
export type OverflowItemSource = 'button' | 'customFeature';

/**
 * Элемент, который может быть перемещён в overflow-дропдаун при компрессии
 */
export type OverflowItem = {
  sourceType: OverflowItemSource;
  sourceIndex: number;
  isInDropdown: boolean;
};

/**
 * Тип состояния активности / видимости фичей ToolsMenu
 */
export type ToolsMenuState = {
  leftSide: {
    collapsingBlock: {
      isActive: boolean;
    };
    editRowFeature: {
      isActive: boolean;
      isLabelVisible: boolean;
      editModeEnabled: boolean;
    };
    leftSideInner: Array<{
      isLabelVisible: boolean;
    }>;
  };
  middle: {
    searchingFeature: {
      isActive: boolean;
      minWidth: number;
    };
  };
  rightSide: {
    /**
     * Кнопки правой зоны одним массивом: сначала кнопки из конфига
     * (controlBlock.rightSideInner), затем встроенные фичи (ключ-текст,
     * группировка). Лейблы прячутся разом, в дропдаун уходят поштучно
     * с конца массива.
     */
    buttons: Array<{
      isLabelVisible: boolean;
    }>;
    customFeatures: Array<{
      canBeCompressed: boolean;
    }>;
    overflowItems: OverflowItem[];
    isOverflowTriggerVisible: boolean;
    /**
     * У кнопки "Группировать" появился счётчик выбранных колонок (справа).
     * Он добавляет ширину, но это не повод прятать лейблы кнопок: при
     * компрессии сначала жертвуем минимальной шириной поиска (как в режиме
     * редактирования). Флаг включает учёт ширины счётчика в модели и шаг
     * сжатия поиска перед скрытием лейблов.
     */
    hasGroupingCounter?: boolean;
  };
};

/**
 * Целевая группа для регистрации ref элемента контрл-блока.
 * Используется в registerFeaturesRef и системе замеров ширин.
 */
export type FeatureRefTarget =
  | 'rightButton'
  | 'leftSideInner'
  | 'customFeatures'
  | 'collapsingBlock'
  | 'featureLeftButton';

/**
 * Ключи одиночных (number) замеров в InitialWidthsForToolsMenu
 */
export type MeasuredNumberKey =
  | 'inlineTitle'
  | 'collapseBlock'
  | 'editModeLeftSlot'
  | 'leftSideInnerBlock'
  | 'overflowTrigger';

/**
 * Ключи массивов замеров в InitialWidthsForToolsMenu
 */
export type MeasuredArrayKey =
  | 'rightButtons'
  | 'featureLeftButtons'
  | 'rightButtonsIcon'
  | 'featureLeftButtonsIcon'
  | 'customFeatures';

/**
 * Гэпы и паддинги контрл-блока, участвующие в модели ширины.
 * Значения приходят из getControlBlockSpacingMap.
 */
export type CompressionSpacing = {
  containerPadding: number;
  leftPartGap: number;
  leftPartPaddingRight: number;
  rightButtonsGap: number;
  rightButtonsPaddingInline: number;
};

/**
 * Опции компрессии, влияющие на порядок шагов
 */
export type CompressionOptions = {
  editModeEnabled?: boolean;
  hasEditModeLeftSlot?: boolean;
  buttonSize?: string;
};

export type InitialWidthsForToolsMenu = {
  collapseBlock?: number;
  inlineTitle?: number;
  editModeLeftSlot?: number;
  /** Ширины кнопок с лейблом (label состояние) */
  featureLeftButtons?: number[];
  /** Кнопки правой зоны (конфиг + встроенные фичи) одним массивом */
  rightButtons?: number[];
  /** Ширины тех же кнопок в icon-only состоянии (меряются при сжатии) */
  featureLeftButtonsIcon?: number[];
  rightButtonsIcon?: number[];
  /**
   * leftSideInner рендерится как единый блок (дропдаун "Действия" при
   * двух и более, либо отдельная кнопка) и не сжимается, меряем целиком
   */
  leftSideInnerBlock?: number;
  customFeatures?: number[];
  overflowTrigger?: number;
};

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
