import{d}from"./react-D2T61mpp.js";import{c4 as u}from"./vendor-B0ELcGbr.js";const e={"packages/ui-kit/src/components/AiAgentPopover/AiAgentPopover.types.ts$$$AiAgentPopoverProps":`type AiAgentPopoverProps = Omit<
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
   * - \`true\`: автосохранение с ключом \`ai-agent-popover-position\`.
   * - \`string\`: кастомный ключ (например, \`my-popover-position\`).
   * - \`false\`: отключено.
   * @default false
   */
  useStorage?: boolean | string;
  /**
   * Включить / настроить resizable-режим.
   * - \`true\`: включить с дефолтной конфигурацией (иконка ресайза автоматически позиционируется в зависимости от placement).
   * - \`(placement: AiAgentPopoverPlacement) => config\`: функция для кастомной конфигурации. Принимает текущий placement,
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
};`,"packages/ui-kit/src/components/AiAgentPopover/AiAgentPopover.types.ts$$$AiAgentPopoverCustomPlacement":`type AiAgentPopoverCustomPlacement =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';`,"packages/ui-kit/src/components/AiAgentPopover/AiAgentPopover.types.ts$$$AiAgentPopoverPlacement":`type AiAgentPopoverPlacement =
  | PopoverProps['placement']
  | AiAgentPopoverCustomPlacement;`,"packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.types.ts$$$AnalyticalWidgetProps":`type AnalyticalWidgetProps = {
  /**
   * Размер виджета
   */
  size: AnalyticalWidgetSize;
  /**
   * Добавление или удаление скролла у contentSlot
   */
  scrollable?: boolean;
  /**
   * ReactNode для шапки
   */
  headerSlot?: ReactNode;
  /**
   * ReactNode (в основном для фильтров)
   */
  topSlot?: ReactNode;
  /**
   * ReactNode (в основном для табов. Отображается только в режиме l)
   */
  middleSlot?: ReactNode;
  /**
   * ReactNode с контентом
   */
  contentSlot: ReactNode;
  /**
   * Кастомные классы для слотов и самого компонента
   */
  classes?: AnalyticalWidgetClasses;
  /**
   * Кастомные стили styled-components для основного контейнера виджета
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
};`,"packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.types.ts$$$AnalyticalWidgetSize":"type AnalyticalWidgetSize = 'l' | 'm' | 's';","packages/ui-kit/src/components/AnalyticalWidget/AnalyticalWidget.types.ts$$$AnalyticalWidgetClasses":`type AnalyticalWidgetClasses = {
  /**
   * Кастомный класс для root элемента
   */
  root?: string;
  /**
   * Кастомный класс для topSlot элемента
   */
  topSlot?: string;
  /**
   * Кастомный класс для middleSlot элемента
   */
  middleSlot?: string;
  /**
   * Кастомный класс для contentSlot элемента
   */
  contentSlot?: string;
};`,"packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetHeader/AnalyticalWidgetHeader.types.ts$$$AnalyticalWidgetHeaderProps":`interface AnalyticalWidgetHeaderProps {
  /**
   * Заголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст
   */
  title?: string;
  /**
   * Пропсы для Tooltip заголовка
   */
  titleTooltipProps?: Omit<TooltipProps, 'text' | 'target'>;
  /**
   * Метка справа от заголовка
   */
  badge?: string;
  /**
   * Стили для метки (badge). Позволяет переопределить, например, text-transform
   */
  badgeStyles?: CSSProperties;
  /**
   * Подзаголовок. При нехватке места будет обрезаться троеточием (truncated text) с Tooltip при наведении на обрезанный текст
   */
  subtitle?: string;
  /**
   * Пропсы для Tooltip подзаголовка
   */
  subtitleTooltipProps?: Omit<TooltipProps, 'text' | 'target'>;
  /**
   * Текст Tooltip при наведении на иконку i, справа от тега. Если не передать этот параметр, то иконка отображаться не будет
   */
  infoTooltipText?: string;
  /**
   * Пропсы для Tooltip иконки i, справа от тега.
   */
  infoTooltipProps?: Omit<TooltipProps, 'text' | 'target'>;
  /**
   * url для ссылки. Если не передать, то иконка со стрелкой отображаться не будет
   */
  href?: string;
  /**
   * Дополнительные свойства для \`href элемента\`. Не будет работать, если не заполнено свойство \`href\`
   */
  hrefProps?: {
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    onKeyDown?: KeyboardEventHandler<HTMLAnchorElement>;
  };
  /**
   * Если необходимо title сделать ссылкой.
   * Пропсы для компонента Link, который оборачивает заголовок.
   * @default underline="none"
   */
  titleLinkProps?: Omit<LinkCompProps, 'ref'>;
  /**
   * Слот для контента в правой части шапки
   */
  rightSlot?: ReactNode;
  /**
   * Имя класса для шапки
   */
  className?: string;
}`,"packages/ui-kit/src/components/AnalyticalWidget/components/AnalyticalWidgetChips/AnalyticalWidgetChipsGroup.types.ts$$$AnalyticalWidgetFixedChipProps":`type AnalyticalWidgetFixedChipProps = ChipCompProps & {
  key?: string | number;
};`,"packages/ui-kit/src/components/IconButton/IconButtonFilter/IconButtonFilter.tsx$$$IconButtonFilterProps":`type IconButtonFilterProps = IconButtonProps & {
  redSquare?: boolean;
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof Icon>['size'];
};`,"packages/ui-kit/src/components/IconButton/IconButtonDots.tsx$$$IconButtonDotsProps":`type IconButtonDotsProps = IconButtonProps & {
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof Icon>['size'];
  iconOrientation?: 'horizontal' | 'vertical';
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$ApprovalCenterProps":`type ApprovalCenterProps = {
  /**
   * Дополнительный класс для корневого элемента
   */
  className?: string;
  /**
   * Кастомные CSS-стили для контейнера
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  /**
   * Параметры превью
   */
  preview?: ApprovalCenterPreview;
  /**
   * Параметры вкладок
   */
  tabs: ApprovalCenterTabs;
  /**
   * Параметры вкладки жизненного цикла
   */
  lifeCycle?: LifeCycleItem[];
  /**
   * Параметры вкладки истории
   */
  history?: HistoryItem[];
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$ApprovalCenterPreview":`type ApprovalCenterPreview = {
  /**
   * Параметры кнопки превью
   */
  button?: PreviewButton;
  /**
   * Переключить превью в режим загрузки
   */
  loading?: boolean;
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$PreviewButton":`type PreviewButton = {
  /**
   * Колбэк, вызываемый по клику
   */
  onClick: () => void;
  /**
   * Текстовая надпись
   */
  text: string;
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$ApprovalCenterTabs":`type ApprovalCenterTabs = {
  /**
   * Текущая открытая вкладка
   */
  active: 'LIFE_CYCLE';
  /**
   * Список доступных вкладок
   */
  available:
    | ['LIFE_CYCLE', 'HISTORY']
    | ['HISTORY', 'LIFE_CYCLE']
    | ['HISTORY']
    | ['LIFE_CYCLE'];
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$LifeCycleItem":`type LifeCycleItem = {
  /**
   * Статус
   */
  status: LifeCycleStatus;
  /**
   * Заголовок
   */
  title: string;
  /**
   * Заголовок выполненного действия
   */
  actionTitle?: string;
  /**
   * Дата выполненного действия
   */
  actionDate?: string;
  /**
   * Этапы (аккордеон)
   */
  stages?: StageItem[];
  /**
   * Вспомогательные кнопки
   */
  buttons?: LifeCycleButton[];
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$LifeCycleStatus":"type LifeCycleStatus = 'DEFAULT' | 'WAIT' | 'SUCCESSFUL' | 'FAILURE';","packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$StageItem":`type StageItem = {
  /**
   * Статус
   */
  status: StageStatus;
  /**
   * Заголовок
   */
  title: string;
  /**
   * Открыт ли элемент аккордеона
   */
  open?: boolean;
  /**
   * Комментарий
   */
  comment?: string;
  /**
   * Тултип на иконке статуса
   */
  tooltip?: { text: string };
  /**
   * Пометка (обычно звёздочка)
   */
  mark?: { tooltip: { text: string }; icon: ReactNode };
  /**
   * Заголовок действия
   */
  actionTitle?: string;
  /**
   * Заголовок даты
   */
  actionDate?: string;
  /**
   * ФИО людей, отвечающих за согласование
   */
  assignee?: [string, ...string[]];
  /**
   * Вспомогательные кнопки
   */
  buttons?: LifeCycleButton[];
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$StageStatus":"type StageStatus = 'DEFAULT' | 'WAIT' | 'SUCCESSFUL' | 'FAILURE';","packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$LifeCycleButton":`type LifeCycleButton = {
  /**
   * Слот для контента слева
   */
  contentLeft: ReactNode;
  /**
   * Колбэк, вызываемый по клику
   */
  onClick: () => void;
  /**
   * Текстовая надпись
   */
  text: string;
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$HistoryItem":`type HistoryItem = {
  /**
   * Статус
   */
  status: HistoryItemStatus;
  /**
   * Заголовок действия
   */
  actionTitle: string;
  /**
   * Дата действия
   */
  actionDate: string;
};`,"packages/ui-kit/src/components/ApprovalCenter/ApprovalCenter.types.ts$$$HistoryItemStatus":"type HistoryItemStatus = 'DEFAULT' | 'WAIT' | 'SUCCESSFUL' | 'FAILURE';","packages/ui-kit/src/components/AutocompleteSearch/AutocompleteSearch.types.ts$$$BaseAutocompliteSearchProps":`type BaseAutocompliteSearchProps = {
  /**
   * Размер Поля ввода
   */
  size?: 'xs' | 's';
  /**
   * Показать/Скрыть count значение в начале выпадающего листа. Или указать собственное число
   */
  beforeListTotal?: number | boolean;
  /**
   * Добавление названия сущности в начале выпадающего списка
   */
  beforeListTotalEntity?: string;
  /**
   * Действие при выполнении нажатия на кнопку очистки поля ввода
   * @deprecated Используйте onClear
   */
  handlerClear?: () => void;
  /**
   * Действие при выполнении нажатия на кнопку очистки поля ввода
   */
  onClear?: () => void;
};`,"packages/ui-kit/src/components/Autocomplete/Autocomplete.types.ts$$$AutocompleteProps":`type AutocompleteProps = AutocompleteBaseProps & {
  /**
   * Callback при нажатии на кнопку очистки поля ввода.
   */
  onClear?: () => void;
};`,"packages/ui-kit/src/components/BlockGradientScroll/BlockGradientScroll.tsx$$$BlockGradientScrollProps":`type BlockGradientScrollProps = Omit<
  ComponentProps<'div'>,
  'children' | 'ref'
> & {
  /**
   * Контент внутри scroll-контейнера
   */
  children?: ReactNode;
  /**
   * Кастомные стили styled-components.
   *
   * @remarks
   * Приоритет стилей (от низкого к высокому):
   * 1. Базовые стили компонента
   * 2. \`$css\` (styled-components стили)
   * 3. \`className\` (CSS классы)
   * 4. \`style\` (inline стили) — наивысший приоритет
   *
   * Padding из \`style\` автоматически подхватывается для градиента.
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  /**
   * Варианты отображения градиента, white | gray. По умолчанию white
   */
  variant?: BlockGradientScrollVariant;
};`,"packages/ui-kit/src/mixins/blockGradientScroll/types.ts$$$BlockGradientScrollPadding":`type BlockGradientScrollPadding =
  | number
  | {
      /** Верхний отступ */
      top?: number;
      /** Shorthand для left и right (применяется если left/right не указаны) */
      inline?: number;
      /** Левый отступ (приоритет над inline) */
      left?: number;
      /** Правый отступ (приоритет над inline) */
      right?: number;
      /** Нижний отступ */
      bottom?: number;
    };`,"packages/ui-kit/src/mixins/blockGradientScroll/types.ts$$$BlockGradientScrollVariant":"type BlockGradientScrollVariant = 'white' | 'gray';","packages/ui-kit/src/components/BlockTitle/BlockTitle.types.ts$$$BlockTitleProps":`type BlockTitleProps = {
  /**
   * Текст заголовка
   */
  title?: string;
  /**
   * Размер заголовка
   */
  titleSize?: ComponentProps<typeof Typography>['variant'];
  /**
   * Иконка слева от заголовка (обычно используется иконка)
   */
  titleLeftSlot?: BlockTitleAdaptiveSlot;
  /**
   * Иконка справа от заголовка (обычно используется иконка)
   */
  titleRightSlot?: BlockTitleAdaptiveSlot;
  /**
   * Текст Заголовка
   */
  description?: string;
  /**
   * Слот для верхней части
   */
  topSlot?: BlockTitleAdaptiveSlot;
  /**
   * Слот для правой части
   */
  rightSlot?: BlockTitleAdaptiveSlot;
  /**
   * Отключает принудительный адаптив компонента на viewport <= 1280px.
   *
   * @deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
   *
   * @remarks
   * При \`true\` компонент использует desktop-размеры для слотов и кнопки назад даже на viewport <= 1280px.
   * Это временный escape hatch, не основной сценарий использования.
   *
   * @default false
   */
  disableMediaAdaptive?: boolean;
  /**
   * Передача props в контейнер
   */
  containerProps?: ComponentProps<typeof Box>;
  /**
   * Callback при клике на кнопку со стрелкой назад слева от заголовка
   */
  onBackButtonClick?: () => void;
};`,"packages/ui-kit/src/components/BlockTitle/BlockTitle.types.ts$$$BlockTitleSlotSizesProps":`type BlockTitleSlotSizesProps = {
  /**
   * Размер иконки рядом с заголовком
   */
  titleIconSize: 's' | 'xs';
  /**
   * Размер Badge рядом с заголовком
   */
  titleBadgeSize: 'm' | 's';
  /**
   * Размер кнопок в правом слоте
   */
  buttonSize: 's' | 'xs';
  /**
   * Размер иконок внутри кнопок в правом слоте
   */
  actionIconSize: 's' | 'xs';
};`,"packages/ui-kit/src/components/BlockTitle/BlockTitle.types.ts$$$BlockTitleAdaptiveSlot":`type BlockTitleAdaptiveSlot =
  | ReactNode
  | ((props: BlockTitleSlotSizesProps) => ReactNode);`,"packages/ui-kit/src/components/Box/Box.tsx$$$BoxProps":"type BoxProps = ComponentProps<typeof Box> & BoxBaseProps;","packages/ui-kit/src/components/Box/Box.tsx$$$BoxBaseProps":`type BoxBaseProps = BoxCSSProperties & {
  /**
   * Кастомные стили styled-components для Box-контейнера
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  /**
   * Скрытие элемента
   */
  hidden?: boolean;
  /**
   * Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонента. (Например: \`li\`, \`p\`, \`button\` и т.д.)
   */
  as?: React.ElementType | keyof JSX.IntrinsicElements;
};`,"packages/ui-kit/src/components/Box/typeKeys.ts$$$BoxCSSProperties":`type BoxCSSProperties = Pick<
  CSSProperties,
  | 'width'
  | 'maxWidth'
  | 'minWidth'
  | 'height'
  | 'maxHeight'
  | 'minHeight'
  | 'margin'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marginBottom'
  | 'padding'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingBottom'
  | 'display'
  | 'flexDirection'
  | 'justifyContent'
  | 'justifyItems'
  | 'justifySelf'
  | 'flexGrow'
  | 'flexWrap'
  | 'flexShrink'
  | 'gap'
  | 'position'
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'zIndex'
  | 'boxSizing'
  | 'overflow'
  | 'cursor'
  | 'background'
  | 'backgroundColor'
  | 'opacity'
  | 'border'
  | 'borderWidth'
  | 'borderColor'
  | 'borderStyle'
  | 'borderRadius'
>;`,"packages/ui-kit/src/components/Collapse/Collapse.tsx$$$CollapseProps":`type CollapseProps = PropsWithChildren & {
  /**
   * Состояние открытия/закрытия
   */
  isOpen?: boolean;
  /**
   * Длительность анимации в секундах
   */
  duration?: number;
  /**
   * Тип анимации [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
   */
  animation?:
    | Property.TransitionTimingFunction
    | {
        open: Property.TransitionTimingFunction;
        close: Property.TransitionTimingFunction;
      };
  /**
   * Размер контейнера в закрытом состоянии
   */
  sizeOnClose?: CSSProperties['width'];
  /**
   * Размер контейнера в открытом состоянии
   */
  sizeOnOpen?: CSSProperties['width'];
  /**
   * Размонтирование элемента при закрытии
   */
  unMountOnClose?: boolean;
  /**
   * Ориентация анимации
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * CSS стили внешнего контейнера
   */
  extContainerCss?: CSSObject;
  /**
   * CSS стили внутреннего контейнера. \`always\` - применение стилей в любом состоянии.
   * \`onOpen\` - применение стилей в открытом состоянии.
   */
  intContainerCss?: { always?: CSSObject; onOpen?: CSSObject };
};`,"packages/ui-kit/src/layouts/Container/Container.types.ts$$$ContainerProps":"type ContainerProps = ISplitContainerProps | INotSplitContainerProps;","packages/ui-kit/src/layouts/Container/Container.types.ts$$$TContainerView":`type TContainerView =
  | '30/70'
  | '20/80'
  | '70/30'
  | '80/20'
  | '1/1'
  | '1/1/1'
  | '1/3/1'
  | 'fixed-fluid';`,"packages/ui-kit/src/components/DrawerDF/DrawerDF.tsx$$$DrawerDFProps":`type DrawerDFProps = {
  main?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  showBackButton?: boolean;
  onBackClick?: () => void;
} & Omit<DrawerProps, 'children'>;`,"packages/ui-kit/src/components/DrawerDF/types.ts$$$DrawerDFHeaderProps":`type DrawerDFHeaderProps = BoxProps & {
  refEl?: LegacyRef<HTMLDivElement>;
  title?: ReactNode;
  subTitle?: ReactNode;
  badge?: (BadgeCompProps & { text: string }) | undefined;
  rightBlock?: ReactNode;
  footerBlock?: ReactNode;
};`,"packages/ui-kit/src/components/DrawerDF/types.ts$$$DrawerDFContentProps":`type DrawerDFContentProps = BoxProps & {
  fixedWidth?: string;
  refEl?: Ref<HTMLDivElement>;
  $isFirstSingleContent?: boolean;
  $isLastSingleContent?: boolean;
};`,"packages/ui-kit/src/components/DrawerDF/types.ts$$$DrawerDFFooterProps":`type DrawerDFFooterProps = BoxProps & {
  refEl?: LegacyRef<HTMLDivElement>;
};`,"packages/ui-kit/src/components/DrawerDF/types.ts$$$DrawerDFDotsIconButtonProps":`type DrawerDFDotsIconButtonProps = ComponentProps<typeof IconButton> & {
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof IconDotsHorizontalOutline>['size'];
};`,"packages/ui-kit/src/components/DrawerDF/types.ts$$$DrawerDFBackIconButtonProps":`type DrawerDFBackIconButtonProps = ComponentProps<typeof IconButton> & {
  iconSize?: ComponentProps<typeof IconChevronLeft>['size'];
};`,"packages/ui-kit/src/components/EmptyState/EmptyState.types.ts$$$EmptyStateProps":`type EmptyStateProps = {
  /**
   * Размер компонента (small, medium, large)
   *   */
  size: 's' | 'm' | 'l';
  /**
   * Основной заголовок состояния
   *   */
  title?: ReactNode;
  /**
   * Дополнительный поясняющий текст
   *   */
  subtitle?: ReactNode;
  /**
   * Вариант изображения для отображения
   * Поддерживаются варианты EmptyState (loading, life-circle, need-access, no-access, no-content, not-found, not-result)
   * и варианты ErrorPage (400, 401, 403, 404, 500, 502, 503, unidentified)
   */
  variant?: EmptyStateImageVariant;
  /**
   * @deprecated Используйте prop \`variant\` для отображения изображений.
   * Компонент иконки (только для size='m' или для size='s')
   * Оставлено для обратной совместимости.
   */
  icon?: React.FC<IconProps>;
  /**
   * @deprecated Используйте prop \`variant\` для отображения изображений.
   * Дополнительные пропсы для иконки
   * Оставлено для обратной совместимости.
   */
  iconProps?: Omit<IconProps, 'size'>;
  /**
   * Массив кнопок (до 2 для size='l', до 1 для других размеров)
   */
  buttons?: EmptyStateButtonProps[];
  /**
   * Дополнительная кнопка (только для size='l')
   */
  extraButton?: EmptyStateButtonProps;
  /**
   * Дополнительный класс для корневого элемента
   */
  className?: string;
  /**
   * Объект с классами для внутренних элементов
   */
  classes?: EmptyStateClasses;
  /**
   * Центрировать контент по вертикали и горизонтали
   */
  centered?: boolean;
  /**
   * Кастомные CSS-стили для контейнера
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
};`,"packages/ui-kit/src/components/EmptyState/EmptyState.types.ts$$$EmptyStateVariant":`type EmptyStateVariant =
  | 'loading'
  | 'life-circle'
  | 'need-access'
  | 'no-access'
  | 'no-content'
  | 'not-found'
  /** @deprecated Используйте \`'not-found'\` */
  | 'not-result'
  | 'success';`,"packages/ui-kit/src/components/EmptyState/EmptyState.types.ts$$$EmptyStateClasses":`type EmptyStateClasses = {
  root?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  buttons?: string;
  extraButton?: string;
};`,"packages/ui-kit/src/components/EmptyState/EmptyState.types.ts$$$EmptyStateButtonProps":"type EmptyStateButtonProps = ButtonVariant | LinkButtonVariant;","packages/ui-kit/src/layouts/ErrorPage/ErrorPage.tsx$$$ErrorPageProps":`type ErrorPageProps = {
  /**
   * \`statusCode\` - статус-код ошибки. Поддерживаются по умолчанию: 400 | 403 | 404 | 409 | 500 | 502 | 503
   */
  statusCode?: StatusCode;
  /**
   * \`buttonHandler\` - обработка клика по кнопке при разных ошибках
   */
  buttonHandler?: (
    statusCode: StatusCode,
    statusObj: CustomStatusObj,
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void;
  /**
   * \`customStatuses\` - кастомные статусы и содержимое для их отображения.
   * Если переданы статусы, которые компонентом по умолчанию поддерживаются, то кастомный перезапишет дефолтный.
   */
  customStatuses?: Record<number, CustomStatusObj>;
  /**
   * \`unknownStatus\` - содержимое для отображения, если статус не передан или статуса нет среди известных.
   *
   * Если данное свойство не передано, то при неизвестных статусах будет выбрано отображение по умолчанию.
   */
  unknownStatus?: CustomStatusObj;
  /**
   * \`containerProps\` - Пропсы для контейнера компонента. Например, \`$css\`, \`style\`.
   */
  containerProps?: BoxProps;
  /**
   * Показывать код ошибки перед заголовком. Например, "503: Сервис временно недоступен"
   * @default false
   */
  showStatusCode?: boolean;
  /**
   * Идентификатор ошибки. Отображается под кнопками (или под subtitle, если кнопок нет).
   * Формат отображения: "Идентификатор ошибки: {значение}"
   */
  errorId?: string;
  /**
   * Размер страницы ошибки. Влияет на изображение, типографику и отступы
   * (размерная сетка та же, что у \`EmptyState\`).
   * @default 'l'
   */
  size?: 's' | 'm' | 'l';
};`,"packages/ui-kit/src/layouts/ErrorPage/ErrorPage.tsx$$$CustomStatusObj":`type CustomStatusObj = {
  title: ReactNode;
  description: ReactNode;
  button?: StatusButton;
  buttons?: StatusButton[];
};`,"packages/ui-kit/src/layouts/ErrorPage/ErrorPage.tsx$$$StatusButton":`type StatusButton = {
  label: ReactNode;
  view?: NonNullable<ButtonCompProps['view']>;
};`,"packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx$$$FiltersActionsProps":`type FiltersActionsProps = {
  /**
   * блок фильтров и табов
   *   */
  mainBlock?: React.ReactNode;

  /**
   * блок активных действий
   *   */
  activeButtonsBlock?: React.ReactNode;

  /**
   * блок списка примененных фильтров
   * */
  listOfFilters?: React.ReactNode;

  /**
   * пропс для ширины для дочерних элементов - слева направо (Например, "auto 30% 30%")
   *   */
  mainBlockElementsWidth?: string;

  /**
   * пропсы для контейнера всего компонента
   *   */
  containerProps?: BoxProps;

  /**
   * пропсы для контейнера блока фильтров и табов
   *   */
  mainBlockProps?: BoxProps;
  /**
   * Колбэк, вызываемый при изменении размеров блоков
   * Получает актуальные размеры контейнера, mainBlock и buttonsBlock
   */
  onResize?: (dimensions: FiltersActionsResizeDimensions) => void;
};`,"packages/ui-kit/src/layouts/FiltersActions/FiltersActions.tsx$$$FiltersActionsResizeDimensions":`interface FiltersActionsResizeDimensions {
  /** Полная ширина контейнера */
  containerWidth: number;
  /** Ширина левого блока (mainBlock) - вычисляется как containerWidth - buttonsBlockWidth - gap */
  mainBlockWidth: number;
  /** Ширина правого блока (activeButtonsBlock), 0 если блок отсутствует */
  buttonsBlockWidth: number;
  /** Доступная ширина для элементов mainBlock (за вычетом padding и gap) */
  availableMainBlockWidth: number;
}`,"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButton.tsx$$$FiltersActionsFiltersButtonProps":`type FiltersActionsFiltersButtonProps = ButtonCompProps & {
  redSquare?: boolean;
  hideLabel?: boolean;
  iconSize?: ComponentProps<typeof Icon>['size'];
};`,"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx$$$FiltersActionsFiltersButtonWithPopoverProps":`type FiltersActionsFiltersButtonWithPopoverProps = {
  /** Заголовок Popover */
  title: string;
  /** Подзаголовок (опционально) */
  subtitle?: string;
  /** Основной контент для отображения */
  content?: React.ReactNode;
  /** Внешнее состояние открытия/закрытия [isOpen, setIsOpen] */
  state?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /** Callback при закрытии */
  onClose?: () => void;
  /** Контент footer (опционально) */
  footer?: React.ReactNode;
  /** Красный индикатор на кнопке фильтров */
  redSquare?: boolean;
  /**
   * Включить поиск
   */
  searchable?: boolean;
  /**
   * Значение поиска (контролируемый режим)
   */
  searchValue?: string;
  /**
   * Callback изменения поискового запроса
   */
  onSearchChange?: (value: string) => void;
  /**
   * Пропсы для поля поиска
   */
  searchingProps?: Pick<
    TextFieldProps,
    | 'placeholder'
    | 'onBlur'
    | 'onFocus'
    | 'contentLeft'
    | 'contentRight'
    | 'textBefore'
    | 'textAfter'
    | 'name'
    | 'type'
    | 'minLength'
    | 'maxLength'
  >;
  /**
   * Контент отображаемый когда ничего не найдено
   */
  emptySearchContent?: React.ReactNode;
  /**
   * Пропсы для popover
   */
  popoverProps?: Omit<CompPopoverProps, 'opened' | 'target' | 'onToggle'>;
  /** Пропсы для кнопки-таргета FiltersActionsFiltersButton. onClick декорируется: сначала вызовется внешний, потом внутренний toggle. */
  buttonProps?: Partial<FiltersActionsFiltersButtonProps>;
  /**
   * Рендер-проп для полной замены кнопки-таргета Popover собственным элементом
   * (иконкой, кнопкой, любым узлом) — при сохранении нативной логики открытия
   * Popover и красной точки-индикатора. Когда задан, \`buttonProps\` и дефолтная
   * кнопка «Ещё фильтры» игнорируются.
   *
   * ВАЖНО: повесьте переданный \`onClick\` на корневой кликабельный элемент вашего
   * таргета. Для красной точки оберните таргет в контейнер с \`position: relative\`
   * и отрендерьте \`<RedDot visible={isRedDotVisible} />\`.
   *
   * @example
   * renderTarget={({ onClick, isRedDotVisible, RedDot }) => (
   *   <IconButton onClick={onClick} style={{ position: 'relative' }}>
   *     <IconSettingsFilter />
   *     <RedDot visible={isRedDotVisible} />
   *   </IconButton>
   * )}
   */
  renderTarget?: (api: FilterTargetRenderApi) => React.ReactElement;
};`,"packages/ui-kit/src/layouts/FiltersActions/components/FiltersButtonWithPopover.tsx$$$FilterTargetRenderApi":`type FilterTargetRenderApi = {
  /**
   * Обработчик открытия/закрытия Popover. Повесьте его на \`onClick\` корневого
   * кликабельного элемента вашего таргета — иначе Popover не будет открываться.
   */
  onClick: (event?: React.MouseEvent) => void;
  /** Открыт ли Popover сейчас — удобно для смены вида таргета в активном состоянии. */
  isOpen: boolean;
  /**
   * Нужно ли показывать красную точку-индикатор (значение пропа \`redSquare\`).
   * Передайте в \`<RedDot visible={isRedDotVisible} />\`.
   */
  isRedDotVisible: boolean;
  /**
   * Компонент красной точки-индикатора. Позиционируется абсолютно в правый
   * верхний угол ближайшего контейнера с \`position: relative\`.
   */
  RedDot: typeof RedDot;
};`,"packages/ui-kit/src/layouts/FiltersActions/components/RedDot.tsx$$$RedDotProps":`type RedDotProps = {
  /** Показывать ли точку. Обычно прокидывается из \`isRedDotVisible\` рендер-API. */
  visible?: boolean;
  /**
   * Смещение точки от правого верхнего угла контейнера (top/right).
   * По умолчанию \`0\` — точка прижата к углу.
   */
  offset?: string | number;
};`,"packages/ui-kit/src/layouts/FiltersActions/components/DotsIconButton.tsx$$$FiltersActionsDotsIconButtonProps":`type FiltersActionsDotsIconButtonProps = ComponentProps<
  typeof IconButton
> & {
  /** Пропсы выпадающего меню */
  dropdownProps?: ComponentProps<typeof Dropdown>;
  /** Размер иконки */
  iconSize?: ComponentProps<typeof Icon>['size'];
};`,"packages/ui-kit/src/components/ListOfFilters/ListOfFilters.tsx$$$ListOfFiltersProps":`type ListOfFiltersProps = {
  opened: boolean;
  clearAll: () => void;
  items: ItemOrGroup[];
  size?: 'xs';
  paddingTop?: number;
  /**
   * @default maxLengthInGroup=2
   */
  maxLengthInGroup?: number;
  /**
   * Обрезает название группы фильтров в одну строку с троеточием.
   * @default false
   */
  ellipsisLabel?: boolean;
  sizeOnOpen?: number;
  leftSlot?: ReactNode;
  paddingInline?: number;
  maxHeight?: number;
  extraCss?: React.CSSProperties;
  chipStyle?: (itemOrGroup: ItemOrGroup, item: Item | undefined) => CSSObject;
  renderGroupLabel?: (group: Group) => string;
  renderChipLabel?: (group: Group | null, item: Item) => string;
  /**
   * Показывать ли кнопку "Сбросить все" в блоке примененных фильтров
   * @default true
   */
  showResetAllFiltersButton?: boolean;
};`,"packages/ui-kit/src/components/TextField/TextFieldSearch.tsx$$$TextFieldSearchProps":`type TextFieldSearchProps = ComponentProps<typeof TextField> &
  TextFieldSearchBaseProps;`,"packages/ui-kit/src/layouts/FiltersActions/components/Tabs.tsx$$$FiltersActionsTabsProps":`type FiltersActionsTabsProps = TabsProps & {
  /** Кастомные стили */
  $css?: CSSObject | TemplateStringsArray;
};`,"packages/ui-kit/src/layouts/FiltersActions/components/Tabs.tsx$$$FiltersActionsTabItemProps":`type FiltersActionsTabItemProps = TabItemProps & {
  /** Кастомные стили */
  $css?: CSSObject | TemplateStringsArray;
};`,"packages/ui-kit/src/layouts/FiltersActions/components/Segments.tsx$$$FiltersActionsSegmentItemProps":`type FiltersActionsSegmentItemProps = SegmentItemProps & {
  /** Кастомные стили */
  $css?: CSSObject | TemplateStringsArray;
};`,"packages/ui-kit/src/layouts/FiltersActions/components/Tooltip.tsx$$$FiltersActionsTooltipProps":`interface FiltersActionsTooltipProps
  extends Omit<TooltipProps, 'text' | 'children'> {
  groupLabel?: string;
  items: string[];
  children: React.ReactNode;
}`,"packages/ui-kit/src/layouts/FiltersActions/components/ResetAllFiltersButton.tsx$$$ResetAllFiltersButtonProps":`type ResetAllFiltersButtonProps = LinkButtonCompProps & {
  /** Видимость кнопки */
  isVisible?: boolean;
  /** Кастомные стили */
  $css?: CSSObject | TemplateStringsArray;
};`,"packages/ui-kit/src/layouts/FiltersActions/components/SwitcherFilter.tsx$$$SwitcherFilterProps":"type SwitcherFilterProps = SwitchProps;","packages/ui-kit/src/components/GridDND/GridDND.types.ts$$$GridDNDProps":`type GridDNDProps = {
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
    meta: GridDNDMeta,
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
        onResize: (type: 's' | 'm' | 'l') => void,
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
};`,"packages/ui-kit/src/components/GridDND/GridDND.types.ts$$$GridDNDItems":`type GridDNDItems = {
  id: string;
  /** Размер по типу: s(1x1), m(2x1), l(2x2) */
  type: 's' | 'm' | 'l';
};`,"packages/ui-kit/src/components/GridDND/GridDND.types.ts$$$GridDNDItemConfig":`type GridDNDItemConfig = {
  id: string;
  type: 's' | 'm' | 'l';
  position: { x: number; y: number; w: number; h: number };
};`,"packages/ui-kit/src/components/GridDND/GridDND.types.ts$$$GridDNDRef":`type GridDNDRef = {
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
};`,"packages/ui-kit/src/layouts/Layout/Layout.types.ts$$$LayoutProps":`type LayoutProps = {
  variant?: LayoutVariant;
  headerSlot?: ReactNode;
  mainSlot?: ReactNode;
  /** @deprecated Используйте прямые пропсы marginTop, marginBottom, paddingTop, paddingBottom */
  customSpacing?: LayoutSpacing;
  /** margin-top. Если передан — отключает дефолтный и адаптивный margin-top */
  marginTop?: string;
  /** margin-bottom. Если передан — отключает дефолтный и адаптивный margin-bottom */
  marginBottom?: string;
  /** padding-top. Добавляет внутренний отступ сверху */
  paddingTop?: string;
  /** padding-bottom. Добавляет внутренний отступ снизу */
  paddingBottom?: string;
  /** margin-left. Если передан — перебивает customSpacing.horizontal */
  marginLeft?: string;
  /** margin-right. Если передан — перебивает customSpacing.horizontal */
  marginRight?: string;
  /** padding-left. Добавляет внутренний отступ слева */
  paddingLeft?: string;
  /** padding-right. Добавляет внутренний отступ справа */
  paddingRight?: string;
  classes?: string | LayoutClasses;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;`,"packages/ui-kit/src/layouts/Layout/Layout.types.ts$$$LayoutClasses":`type LayoutClasses = {
  root?: string;
  header?: string;
  main?: string;
  item?: string;
  centeredItem?: string;
};`,"packages/ui-kit/src/layouts/Layout/Layout.types.ts$$$LayoutSpacing":`type LayoutSpacing = {
  horizontal?: string;
  vertical?: string | { top?: string; bottom?: string };
  gutter?: string;
  headerHeight?: string;
};`,"packages/ui-kit/src/components/LeftPanel/LeftPanel.types.ts$$$LeftPanelProps":`type LeftPanelProps = {
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
   * При \`true\` компонент использует desktop-размеры для слотов, кнопки сворачивания и свёрнутой панели, если \`minWidth\` не передан.
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
    React.Dispatch<React.SetStateAction<number | undefined>>,
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
};`,"packages/ui-kit/src/components/LeftPanel/LeftPanel.types.ts$$$LeftPanelSlotSizesProps":`type LeftPanelSlotSizesProps = {
  /**
   * Размер кнопок, поиска и сегментов в кастомных слотах
   */
  buttonSize: 's' | 'xs';
};`,"packages/ui-kit/src/components/LeftPanel/LeftPanel.types.ts$$$LeftPanelAdaptiveSlot":`type LeftPanelAdaptiveSlot =
  | ReactNode
  | ((props: LeftPanelSlotSizesProps) => ReactNode);`,"packages/ui-kit/src/components/MassActions/types.ts$$$MassActionsProps":`type MassActionsProps = {
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
   * \`m\`/\`s\` = обычный размер (кнопки \`s\`), \`xs\` = уменьшенный (кнопки \`xxs\`, «ещё» \`xs\`, счётчик Body XS, свои паддинги).
   * НЕ задавать для standalone — там компактность определяется по ширине вьюпорта (\`down('xl')\`).
   */
  size?: MassActionsSize;
};`,"packages/ui-kit/src/components/MassActions/types.ts$$$MassActionsButtonProps":`type MassActionsButtonPropsButton = DataAttributes &
  Partial<ButtonCompProps> & {
    type: 'button';
    view?: ButtonCompProps['view'];
    /**
     * Dropdown для кнопки.
     * Используется универсальный DropdownProps, который работает и с обычным Dropdown, и с TableDropdown
     */
    dropdown?: DropdownProps & { $css?: CSSObject };
    disabledTooltipProps?: TooltipProps;
  };`,"packages/ui-kit/src/components/MassActions/types.ts$$$MassActionsCounterProps":`type MassActionsCounterProps = {
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
};`,"packages/ui-kit/src/components/MassActionsStatic/types.ts$$$MassActionsStaticProps":`type MassActionsStaticProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /**
   * Позиционирование компонента
   * - 'absolute' - абсолютное позиционирование (по умолчанию)
   * - 'static' - обычный блок без абсолютного позиционирования
   * - 'relative' - относительное позиционирование
   */
  position?: 'absolute' | 'static' | 'relative';
  /**
   * Явный контроль видимости компонента
   * Если не указан, компонент всегда виден
   * Если указан, компонент отображается только при show === true
   */
  show?: boolean;
  /**
   * Включить/отключить анимацию появления/исчезновения
   * @default true
   */
  animate?: boolean;
};`,"packages/ui-kit/src/components/ModalDF/types.ts$$$ModalDFProps":`type ModalDFProps = {
  fullScreen?:
    | {
        defaultEnabled?: boolean;
        saveStateAfterClosing?: boolean;
        onFullScreen?: () => void;
        onExitFullScreen?: () => void;
      }
    | undefined
    | boolean;
  contentContainerProps?: Partial<ContainerProps>;
  zIndexOverlay?: string;
} & Omit<ModalCompProps, 'hasBody'>;`,"packages/ui-kit/src/components/ModalDF/types.ts$$$ModalDFHeaderProps":`type ModalDFHeaderProps = Omit<BoxProps, 'children'> & {
  title?: ReactNode;
  badge?: ComponentProps<typeof Badge>;
  subTitle?: ReactNode;
  rightBlock?: ReactNode;
  onBackClick?: () => void;
  showBackButton?: boolean;
};`,"packages/ui-kit/src/components/ModalDF/types.ts$$$ModalDFFooterProps":`type ModalDFFooterProps = Omit<BoxProps, 'children'> & {
  leftBlock?: ReactNode;
  rightBlock?: ReactNode;
};`,"packages/ui-kit/src/components/ModalDF/components/ServiceButtons.tsx$$$ModalDFServiceButtonsProps":`type ModalDFServiceButtonsProps = ComponentProps<
  typeof StyledServiceButtons
>;`,"packages/ui-kit/src/components/ModalDF/types.ts$$$ModalDFDotsIconButtonProps":`type ModalDFDotsIconButtonProps = ComponentProps<typeof IconButton> & {
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof IconDotsVerticalCenteredOutline>['size'];
};`,"packages/ui-kit/src/components/ModalDF/types.ts$$$ModalDFBackIconButtonProps":`type ModalDFBackIconButtonProps = ComponentProps<typeof IconButton> & {
  iconSize?: ComponentProps<typeof IconArrowLeft>['size'];
};`,"packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx$$$ModalDFConfirmationProps":`type ModalDFConfirmationProps = {
  /**
   * основной пропс для заполнения внутреннего отображения модального окна
   */
  content?: ModalDFConfirmationContent;
  /**
   * Добавление радиального градиента в верхней части модального окна(передается цвет для градиента)
   */
  view?: keyof typeof iconColors;
  /**
   * Иконка в верхней части модального окна
   */
  icon?: ReactNode;
} & Omit<ModalDFProps, 'hasBody' | 'content' | 'children' | 'ref'>;`,"packages/ui-kit/src/components/ModalDFConfirmation/ModalDFConfirmation.tsx$$$ModalDFConfirmationContent":`type ModalDFConfirmationContent = {
  /**
   * заголовок
   */
  header?: ReactNode;
  /**
   * информационный текст
   */
  body?: ReactNode;
  /**
   * отступы сверху и снизу информационного текста (по умолчанию: \`bodyMarginBlock ?? (typeof body === 'string' ? s.x4 : undefined);\`)
   */
  bodyMarginBlock?: string;
  /**
   * пропсы для самой правой главной кнопки, по умолчанию \`view="accent"\`
   */
  mainButton?: ButtonCompProps;
  /**
   * пропсы для вторичной кнопки, по умолчанию \`view="secondary"\`
   */
  secondaryButton?: ButtonCompProps;
  /**
   * если \`mainButton\` или \`secondaryButton\` не подходят, то можно полностью заменить footer на кастомный
   */
  footer?: ReactNode;
};`,"packages/ui-kit/src/components/NumberFormatAmount/NumberFormatAmount.types.ts$$$NumberFormatAmountProps":"type NumberFormatAmountProps = Omit<NumberFormatCompProps, 'ref'>;","packages/ui-kit/src/layouts/PageLayout/PageLayout.types.ts$$$PageLayoutProps":`type PageLayoutProps = {
  /** Верхний отступ. По умолчанию var(--global-header-height, 72px). 0 — для шапки микрофронта */
  paddingTop?: CSSValue;
  /** Нижний отступ. По умолчанию адаптивный (24px / 32px). 0 — для шапки микрофронта */
  paddingBottom?: CSSValue;
  /** Минимальная высота. По умолчанию 100dvh. 0 или 'auto' — для шапки микрофронта */
  minHeight?: CSSValue;
  children: ReactNode;
  className?: string;
};`,"packages/ui-kit/src/components/PageTitle/PageTitle.types.ts$$$PageTitleProps":`type PageTitleProps = {
  /**
   * Заголовок страницы (текст)
   */
  title?: string;
  /**
   * Пропсы для TypographyWithAutoTooltip в который обернут title
   */
  titleTypographyProps?: Omit<
    TypographyWithAutoTooltipProps<'H2'>,
    'children' | 'variant'
  >;
  /**
   * Подзаголовок/описание страницы (текст)
   */
  subtitle?: string;
  /**
   * Пропсы для  TypographyWithAutoTooltip в который обернут subtitle
   */
  subtitleTypographyProps?: Omit<
    TypographyWithAutoTooltipProps<'BodyS'>,
    'children' | 'variant'
  >;
  /**
   * Кастомный слот правее заголовка.
   * Можно передать ReactNode или callback с размерами для адаптива.
   */
  titleSlot?: PageTitleAdaptiveSlot;
  /**
   * Контент справа (прижат к правому краю и к нижней границе).
   * Можно передать ReactNode или callback с размерами для адаптива.
   */
  rightSlot?: PageTitleAdaptiveSlot;
  /**
   * Отключает принудительный адаптив компонента на viewport <= 1280px.
   *
   * @deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
   *
   * @remarks
   * При \`true\` компонент использует desktop-размеры для кастомных слотов и кнопки назад даже на viewport <= 1280px.
   * Это временный escape hatch, не основной сценарий использования.
   *
   * @default false
   */
  disableMediaAdaptive?: boolean;
  /**
   * Пропсы для Breadcrumbs компонента
   * По умолчанию size='m'
   */
  breadcrumbs?: BreadcrumbsPropsComp;
  /**
   * Показывать ли кнопку со стрелкой назад слева от title
   */
  showBackButton?: boolean;
  /**
   * Callback при клике на кнопку назад
   */
  onBackClick?: () => void;
  /**
   * Кастомные стили styled-components для основного контейнера
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  /**
   * Дополнительный className для корневого элемента
   */
  className?: string;
};

export type PageTitleIconButtonProps = ComponentProps<typeof IconButton> & {
  iconSize?: ComponentProps<typeof IconChevronLeft>['size'];
};`,"packages/ui-kit/src/components/PageTitle/PageTitle.types.ts$$$PageTitleSlotSizesProps":`type PageTitleSlotSizesProps = {
  /**
   * Размер кнопок в кастомных слотах
   */
  buttonSize: 's' | 'xs';
};`,"packages/ui-kit/src/components/PageTitle/PageTitle.types.ts$$$PageTitleAdaptiveSlot":`type PageTitleAdaptiveSlot =
  | ReactNode
  | ((props: PageTitleSlotSizesProps) => ReactNode);`,"packages/ui-kit/src/components/PopoverDF/types.ts$$$PopoverDFProps":`type PopoverDFProps = Omit<
  ComponentProps<typeof PopoverBeta>,
  'children' | 'appearance' | 'size'
> &
  PopoverDFBaseProps;`,"packages/ui-kit/src/components/PopoverDF/types.ts$$$PopoverDFHeaderProps":`type PopoverDFHeaderProps = Omit<BoxProps, 'children'> & {
  /**
   * Заголовок в верхней левой части header.
   */
  title?: ReactNode;
  /**
   * Текст под заголовком в верхней левой части header.
   */
  description?: ReactNode;
  /**
   * Нижний блок header на всю ширину.
   * Удобен для кастомных слотов, фильтров, тегов и другого дополнительного контента.
   */
  bottomBlock?: ReactNode;
  /**
   * Показывать ли крестик закрытия в правой верхней части header.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Кастомный обработчик закрытия.
   * Если не передан, будет использован обработчик закрытия из \`PopoverDF\`.
   */
  onClose?: () => void;
};`,"packages/ui-kit/src/components/PopoverDF/types.ts$$$PopoverDFBodyProps":"type PopoverDFBodyProps = BoxProps;","packages/ui-kit/src/components/PopoverDF/types.ts$$$PopoverDFFooterProps":`type PopoverDFFooterProps = BoxProps & {
  children?: ReactNode;
};`,"packages/ui-kit/src/components/PopoverDF/types.ts$$$PopoverDFResizableConfig":`type PopoverDFResizableConfig = Exclude<
  ComponentProps<typeof PopoverBeta>['resizable'],
  boolean | undefined
>;`,"packages/ui-kit/src/components/PopupDF/types.ts$$$PopupDFProps":`type PopupDFProps = Omit<
  ComponentProps<typeof Popup>,
  'children' | 'isOpen'
> & {
  /**
   * Содержимое popup.
   * Обычно используется композиция из \`PopupDF.Header\`, \`PopupDF.Body\` и \`PopupDF.Footer\`.
   */
  children?: ReactNode;
  /**
   * Начальное состояние открытия в uncontrolled-режиме.
   * @default false
   */
  defaultOpened?: boolean;
  /**
   * Коллбэк смены состояния открытия.
   */
  onToggle?: (opened: boolean) => void;
  /**
   * Размер PopupDF.
   * Влияет на внутренние отступы и типографику header.
   * @default 'm'
   */
  size?: PopupDFSize;
};`,"packages/ui-kit/src/components/PopupDF/types.ts$$$PopupDFHeaderProps":`type PopupDFHeaderProps = Omit<BoxProps, 'children'> & {
  /**
   * Заголовок в верхней левой части header.
   */
  title?: ReactNode;
  /**
   * Текст под заголовком в верхней левой части header.
   */
  description?: ReactNode;
  /**
   * Кастомный контент, относящийся по смыслу к header.
   */
  subHeader?: ReactNode;
  /**
   * Кастомный слот в правой части header, слева от крестика закрытия.
   * Прижимается к крестику; если контент широкий — «давит» на title/description
   * (уходят в многоточие с тултипом). Максимальная высота — как у крестика
   * (32px при \`size='m'\`, 24px при \`size='s'\`), ширина не ограничена.
   */
  rightBlock?: ReactNode;
  /**
   * Показывать ли крестик закрытия в правой верхней части header.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Callback при клике на кнопку со стрелкой назад слева от заголовка.
   */
  onBackButtonClick?: () => void;
  /**
   * Кастомный обработчик закрытия.
   * Если не передан, будет использован обработчик закрытия из \`PopupDF\`.
   */
  onClose?: () => void;
};`,"packages/ui-kit/src/components/PopupDF/types.ts$$$PopupDFBodyProps":"type PopupDFBodyProps = BoxProps;","packages/ui-kit/src/components/PopupDF/types.ts$$$PopupDFFooterProps":`type PopupDFFooterProps = BoxProps & {
  children?: ReactNode;
};`,"packages/ui-kit/src/components/PopupDF/types.ts$$$PopupDFResizableConfig":`type PopupDFResizableConfig = Exclude<
  ComponentProps<typeof Popup>['resizable'],
  boolean | undefined
>;`,"packages/ui-kit/src/components/SplitView/SplitView.type.ts$$$SplitViewProps":`type SplitViewProps = Omit<ComponentProps<'div'>, 'ref' | 'onResize'> & {
  /**
   * Prop для основного контента (слева)
   */
  mainContent: ReactNode;
  /**
   * Prop свойств sidebar-а (справа), в том числе и контента
   */
  sidebar?: {
    /**
     * Prop для контента sidebar-а
     * Можно передать ReactNode или callback с размерами для адаптива.
     */
    content: SplitViewAdaptiveContent;
    /**
     * Состояние открытости sidebar-а (sidebar может полностью закрываться)
     * @default true
     */
    isOpened?: boolean;
    /**
     * Состояние открытости полноэкранного режима sidebar-а.
     * Открытие sidebar-а в модальном окне на всю ширину экрана
     * @default false
     */
    isFullScreened?: boolean;
    /**
     * Для переопределения (или добавления) свойств модального окна.
     * Не все свойства можно переопределить.
     */
    fullScreenedModalDFProps?: ModalDFProps;
    /**
     * Число от 1 до 100. Процент от ширины родителя.
     * Величина sidebar-а ширины по умолчанию в %-ых значениях от родителя
     * @default 30
     */
    defaultWidthPercent?: number;
    /**
     * Число от 1 до 100. Процент от ширины родителя.
     * @default 70
     */
    maxWidthPercent?: number;
    /**
     * Число в пикселях
     * @default 600, на viewport <= 1280px — 440
     */
    minWidthPx?: number;
    /**
     * Отступ слева у sidebar в px, когда он будет закрыт (Указывать до 32px - не больше).
     * Может понадобится для корректного смещения SplitView вправо.
     * @example 32
     *
     * @default 0
     */
    paddingLeftOnClosed?: number;
  };
  /**
   * Отключает принудительный адаптив компонента на viewport <= 1280px.
   *
   * @deprecated Используйте только в крайних случаях, когда команда временно не готова адаптировать вёрстку под 1280px.
   *
   * @remarks
   * При \`true\` компонент использует desktop-размеры для \`sidebar.content\` и desktop min-width sidebar, если \`sidebar.minWidthPx\` не передан.
   * Поведение сохраняется даже на viewport <= 1280px.
   * Это временный escape hatch, не основной сценарий использования.
   *
   * @default false
   */
  disableMediaAdaptive?: boolean;
  refContainer?: Ref<HTMLDivElement>;
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  onResize?: (data: SplVSizes) => void;
  /**
   * Высота шапки в пикселях. Если передан — используется как приоритет для sticky top и расчёта высоты.
   * Если не передан — берётся из CSS-переменной --global-header-height (fallback 72px).
   */
  headerHeight?: number;
  /**
   * Компенсация padding-inline от PageLayout.
   * При true контейнер SplitView получает отрицательный margin-right,
   * чтобы sidebar прижимался к правому краю viewport.
   * @default false
   */
  insidePageLayout?: boolean;
};

export type SplVSizes = {
  /**
   * Ширина main content в процентах
   */
  main: number;
  /**
   * Ширина main content в пикселях
   */
  mainPx?: number;
  /**
   * Ширина sidebar content в процентах
   */
  sidebar: number;
  /**
   * Ширина sidebar content в пикселях
   */
  sidebarPx?: number;
};`,"packages/ui-kit/src/components/SplitView/SplitView.type.ts$$$SplitViewSlotSizesProps":`type SplitViewSlotSizesProps = {
  /**
   * Размер Avatar в кастомном контенте sidebar
   */
  avatarSize: 'l' | 'm';
};`,"packages/ui-kit/src/components/SplitView/SplitView.type.ts$$$SplitViewAdaptiveContent":`type SplitViewAdaptiveContent =
  | ReactNode
  | ((props: SplitViewSlotSizesProps) => ReactNode);`,"packages/ui-kit/src/components/SplitView/SplitView.type.ts$$$SplVSizes":`type SplVSizes = {
  /**
   * Ширина main content в процентах
   */
  main: number;
  /**
   * Ширина main content в пикселях
   */
  mainPx?: number;
  /**
   * Ширина sidebar content в процентах
   */
  sidebar: number;
  /**
   * Ширина sidebar content в пикселях
   */
  sidebarPx?: number;
};`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesProps":`interface StoriesProps {
  /** Триггеры-превью: список \`Stories.Preview\`. */
  children: ReactNode;
  /** Длительность сегмента по умолчанию, мс. */
  defaultDuration?: number;

  /** Controlled-открытие вьюера. */
  open?: boolean;
  /** Начальное открытие для uncontrolled-режима. */
  defaultOpen?: boolean;
  /** Controlled-индекс активной группы. */
  activeGroupIndex?: number;
  /** Controlled-индекс активного сегмента. */
  activeSlideIndex?: number;

  /** Изменилось открытие/закрытие вьюера. */
  onOpenChange?: (open: boolean, meta: { groupIndex: number }) => void;
  /** Сменилась активная группа. */
  onGroupChange?: (groupIndex: number) => void;
  /** Сменился активный сегмент (под-стори). */
  onSlideChange?: (groupIndex: number, slideIndex: number) => void;
  /** Досмотрены все группы (перед автозакрытием). */
  onComplete?: () => void;
  /** Группа полностью досмотрена — удобно гасить индикатор «просмотрено». */
  onGroupComplete?: (groupIndex: number) => void;
  /** Вьюер закрылся (крестик / Esc / клик по оверлею / автозакрытие). */
  onClose?: () => void;
  /** Ошибка загрузки ассета сегмента. */
  onError?: (ctx: StoryErrorContext) => void;
  /** Свой контент при ошибке загрузки ассета (по умолчанию — встроенный EmptyState). */
  renderError?: (ctx: StoryErrorContext) => ReactNode;

  /** Показывать затемнённый оверлей. По умолчанию \`true\`. */
  overlay?: boolean;
  /** Цвет оверлея. */
  overlayColor?: string;
  /** z-index оверлея. */
  zIndex?: number;

  /** Предзагружать первый ассет группы при наведении на её триггер. По умолчанию \`true\`. */
  preloadOnHover?: boolean;
  /** Задержка показа ассета, мс (для демо/тестов загрузки). */
  loadingDelay?: number;
  /** Порог удержания указателя для паузы, мс. По умолчанию 200. */
  pauseHoldDelay?: number;
  /** Пресет анимации перехода между группами. По умолчанию \`slide\`. */
  groupTransition?: StoriesGroupTransition;
  /** Режим видимости стрелок навигации. По умолчанию \`auto\` (скрыть при единственном сегменте). */
  arrows?: StoriesArrows;
  /**
   * Прятать стрелку, когда в её сторону листать некуда (крайний сегмент),
   * вместо показа в disabled-состоянии. По умолчанию \`true\`.
   */
  hideDisabledArrows?: boolean;
  /** Явный режим темы. По умолчанию определяется автоматически. */
  mode?: StoriesMode;

  className?: string;
}`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesGroupTransition":"type StoriesGroupTransition = 'slide' | 'fade' | 'none';","packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesArrows":"type StoriesArrows = 'auto' | 'always' | 'never';","packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesMode":"type StoriesMode = 'light' | 'dark';","packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesPreviewProps":`interface StoriesPreviewProps {
  /** Сегменты группы: показываются по очереди после клика на триггер. */
  slides: StorySlide[];
  /** Форма триггера. По умолчанию \`circle\`. */
  shape?: StoriesShape;
  /** Подпись под триггером (по умолчанию до 2 строк, ellipsis с авто-тултипом). */
  title?: string;
  /** Пропсы подписи (TypographyWithAutoTooltip) поверх дефолтов; выравнивание — через \`style.textAlign\`. */
  titleProps?: StoriesTitleProps;
  /** Картинка-превью внутри триггера. Если не задана — заливка-заглушка. */
  image?: string;
  /** Просмотрена ли группа. Контролируется снаружи: по колбэкам гасите обводку. */
  viewed?: boolean;
  /** Дефолтная длительность сегментов этой группы, мс. */
  defaultDuration?: number;
  /** Размер круглого триггера (сторона), px. По умолчанию 98. */
  size?: number;
  /** Ширина прямоугольного триггера, px. По умолчанию равна \`size\`. */
  width?: number;
  /** Высота прямоугольного триггера, px. По умолчанию равна \`size\`. */
  height?: number;
  /** Полная замена визуала триггера. Отменяет встроенную отрисовку. */
  renderTrigger?: (state: StoriesTriggerState) => ReactNode;
  className?: string;
}`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesShape":"type StoriesShape = 'circle' | 'rect';","packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesTitleProps":`type StoriesTitleProps = Partial<
  TypographyWithAutoTooltipProps<TypographyVariant>
>;`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StorySlide":`interface StorySlide {
  /** Стабильный идентификатор сегмента (ключи, внешняя адресация). */
  id?: string;
  /** URL ассета (картинка или GIF). */
  src: string;
  /** Тип ассета. По умолчанию \`image\` (video пока не реализован). */
  type?: StoryAssetType;
  /** Длительность показа сегмента, мс. Переопределяет дефолт группы и компонента. */
  duration?: number;
  /** Способ вписывания ассета. По умолчанию \`cover\`. */
  objectFit?: StoriesObjectFit;
  /** Слот внизу баннера (любой ReactNode). Может отличаться на каждом сегменте. */
  footer?: ReactNode;
}`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoryAssetType":"type StoryAssetType = 'image' | 'gif' | 'video';","packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesObjectFit":`type StoriesObjectFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'none'
  | 'scale-down';`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesTriggerState":`interface StoriesTriggerState {
  /** Порядковый индекс группы. */
  index: number;
  /** Просмотрена ли группа (значение пропа \`viewed\`). */
  viewed: boolean;
  /** Открыт ли сейчас вьюер на этой группе. */
  isActive: boolean;
}`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoryErrorContext":`interface StoryErrorContext {
  groupIndex: number;
  slideIndex: number;
  slide: StorySlide;
  /** Повторить загрузку ассета. */
  retry: () => void;
}`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesController":`interface StoriesController {
  /** Открыть вьюер (опционально сразу на группе/сегменте). */
  open: (groupIndex?: number, slideIndex?: number) => void;
  /** Закрыть вьюер. */
  close: () => void;
  /** Следующий сегмент (в конце группы — следующая группа; в самом конце — закрытие). */
  next: () => void;
  /** Предыдущий сегмент (в начале группы — предыдущая группа). */
  prev: () => void;
  /** Следующая группа. */
  nextGroup: () => void;
  /** Предыдущая группа. */
  prevGroup: () => void;
  /** Перейти к конкретной группе и сегменту. */
  goTo: (groupIndex: number, slideIndex?: number) => void;
  /** Поставить на паузу. */
  pause: () => void;
  /** Снять с паузы. */
  resume: () => void;
}`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesRef":`interface StoriesRef extends StoriesController {
  /** Текущее состояние вьюера. */
  getState: () => StoriesState;
}`,"packages/ui-kit/src/components/Stories/Stories.types.ts$$$StoriesState":`interface StoriesState {
  /** Открыт ли вьюер. */
  isOpen: boolean;
  /** Индекс активной группы. */
  groupIndex: number;
  /** Индекс активного сегмента внутри группы. */
  slideIndex: number;
  /** Идёт ли проигрывание (false во время паузы). */
  isPlaying: boolean;
}`,"packages/ui-kit/src/components/Switch/types.ts$$$BaseSwitchProps":`type BaseSwitchProps = ComponentProps<typeof Switch> & {
  /**
   * Отображение подложки у switch
   */
  hasBackground?: boolean;
};`,"packages/ui-kit/src/components/Table/types/table.type.ts$$$TableProps":`type TableProps<
  FilterStateType extends ObjectForExtending,
  RowIdType extends string | number,
  HeaderContextValueType extends ObjectForExtending,
  RowContextValueType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
> = {
  /**
   * columnConfig - Конфигурация колонок.
   *
   * (рекомендуется минимальное количество зависимостей для данной сущности - в идеале, чтобы не пересоздавался)
   */
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  /**
   * rows - данные для таблицы. \`\`\`RowType extends Record<string | number, any>\`\`\`
   */
  rows: RowType[];
  /**
   * topSummaryRows - данные для итоговой строки в верхней части таблицы. \`\`\`SummaryRowType[]\`\`\`
   */
  topSummaryRows?: SummaryRowType[];
  /**
   * rows - данные для итоговой строки в нижней части таблицы. \`\`\`SummaryRowType[]\`\`\`
   */
  bottomSummaryRows?: SummaryRowType[];
  /**
   * tableConfig - Конфигурация фичей таблицы (их активация и отключение)
   */
  tableConfig?: Prettify<
    TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>
  >;
  /**
   * headerContextValue:  любые стейты, которые нужны в headerCell - кладем в headerContextValue. И получаем доступ с помощью useHeaderContext.
   */
  headerContextValue?: HeaderContextValueType;
  /**
   * rowContextValue:  любые стейты, которые нужны в cell - кладем в rowContextValue.  И получаем доступ с помощью useRowContext.
   */
  rowContextValue?: RowContextValueType;
  refTable?: Ref<DataGridHandle>;
  refTableContainer?: React.Ref<HTMLDivElement>;
};`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$TableConfig":`type TableConfig<
  RowType extends ObjectForExtending,
  SummaryRowType,
  RowIdType extends string | number,
  FilterStateType extends ObjectForExtending,
  // SubRowType
> = {
  /**
   * Тип выделения активной (кликнутой) сущности \`'cell' | 'row'\`
   * @default 'cell'
   */
  highlightActiveType?: HighlightActiveType;
  /**
   * rowSize - размеры строк таблицы
   */
  rowSize?: Prettify<RowSize>;
  /**
   * rowHeight - размер высоты строк таблицы
   */
  rowHeight?: Maybe<number | RowHeightFunc<RowType>>;
  /**
   * sorting - активация сортировки. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={sorting: {sortingState}}
   *
   * columnConfig=[{sortingType: 'numberSort'}]
   */
  sorting?: {
    state: [
      readonly SortColumn[],
      React.Dispatch<React.SetStateAction<readonly SortColumn[]>>,
    ];
    /**
     * manualSorting - пропс, активирующий ручную-кастомную (или на стороне бэкенда) сортировку
     */
    manualSorting?: boolean;
  };
  /** @deprecated Свойство view не используется и будет удалено в следующей мажорной версии. */
  view?: View;
  /**
   * filtering - активация фильтрации. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={filtering: {stateAndSetter, ...}}
   *
   * columnConfig=[{filtering: {...}}]
   */
  filtering?: FilteringConfig<FilterStateType>;
  /**
   * Сворачивание / разворачивание таблицы
   */
  collapsing?: TableCollapseConfig;
  /**
   * selecting - активация выбора строк. Условие активации - это наличие данного свойства.
   * Есть поддержка выбора строк с многоуровневой вложенностью.
   *
   * Пример:
   *
   *\`\`\`jsx
   * import { Table } from '@daisforge/ui';
   *
   * <Table
   * tableConfig={{selecting: {stateAndSetter, rowKeyGetter}}}
   * {...rest}
   * />
   * \`\`\`
   */
  selecting?: {
    state: [
      ReadonlySet<RowIdType>,
      React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>,
    ];
  } & Prettify<SelectingRowConfig<RowType, RowIdType>> & {
      /**
       * Метки для автоматизированного тестирования и аналитики
       * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
       */
      controlBlock?: {
        domMetadata?: DomMetadata;
      };
      /**
       * Метки для автоматизированного тестирования и аналитики
       * Добавляет data-атрибуты и CSS-классы к элементам RightSidebar
       */
      sidebar?: {
        domMetadata?: DomMetadata;
      };
    };
  /**
   * editing - активация редактирования. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={editing: {onRowsChange, rowKeyGetter}}
   *
   * columnConfig=[{editingCell: {...}}]
   */
  editing?: EditingConfig<RowType, RowIdType, SummaryRowType>;

  /**
   * subRows - активация иерархии, отображения вложенных строк. Условие активации - наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={subRows: {getSubRows, rowKeyGetter}}
   *
   * columnConfig=[{subRow: {...}}]
   */
  subRows?: SubRows<RowType, RowIdType>;
  rowsGrouping?: RowsGrouping<RowType>;

  /**
   * resizableColumn - активация изменения ширины колонки с помощью курсора. Условие активации -  resizableColumn: true. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={resizableColumn: true}
   *
   * columnConfig=[{resizable: true}]
   */
  resizableColumn?: boolean;
  /**
   * style - inline-стили. Для стилей самой таблицы (без вложенности).
   *
   * Исключены свойства 'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight'. Их следует стилизовать через свойства containerStyle.
   */
  style?: Omit<
    CSSProperties,
    'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight'
  >;
  /**
   * css - для стилей простых и сложных(например, для стилизации cell, headerCell, ...).
   *
   * Пример:
   *
   * \`\`\`css
   * & > .rdg-header-row > .rdgCell {
   * background-color: red;
   * }
   * \`\`\`
   *
   */
  css?: string | CSSObject;

  summaryRows?: SummaryRowsConfig;
  /**
   * controlBlock - пропс для активации, кастомизации контролблока.
   */
  controlBlock?: ControlBlockConfig;
  /**
     * containerStyle - инлайновые стили контейнера таблицы и контролблока. высоту и ширину для таблицы рекомендуется задавать в этом пропсе.
     * Пример:
     *
     * \`\`\`tsx
        tableConfig={{ containerStyle: { height: '70vh' } }}
     * \`\`\`
     */
  containerStyle?: CSSProperties | undefined;
  /**
   * containerCss - стили для контейнера таблицы и контролблока.
   * Через этот пропс можно дополнительно кастомизировать контейнер и все его дочерние элементы.
   */
  containerCss?: string | CSSObject | undefined;
  /**
   * containerId - html-атрибут id контейнера таблицы.
   */
  containerId?: string | undefined;

  /**
   * infinityScroll - бесконечная подгрузка данных при скролле.
   *
   *  Условие активации - наличие самого пропса infinityScroll.
   *
   * При активации infinityScroll отключается дефолтная сортировка и фильтрация.
   * (Предполагается, что если есть infinityScroll,
   * то в таблице представлен не весь объем данных,
   * по этой причине дефолтная сортировка и фильтрация не подходят и будут отображать некорректные данные)
   *
   */
  infinityScroll?: {
    onTrigger: (rows: RowType[]) => Promise<void> | void;
    isLoading: boolean;
    /**
     * @default true
     */
    hasMore?: boolean;
    /**
     * @default 100   (px)
     */
    scrollThreshold?: number;
  };
  /**
   * @isLoading - состояние загрузки данных для таблицы.
   */
  isLoading?: boolean | { boolean: boolean; skeletonRowsCount: number };
  /**
   * loadingOverlay - конфигурация для отображения оверлея загрузки.
   * Показывает индикатор загрузки поверх таблицы с возможностью кастомизации.
   */
  loadingOverlay?: {
    /**
     * Активен ли оверлей загрузки
     * @default true
     */
    active?: boolean;
    /**
     * Кастомный компонент спиннера
     * @default <Spinner view="secondary" size="36" /> (внутренний компонент)
     */
    spinner?: ReactNode;
    /**
     * Основной заголовок оверлея
     * @default "Загрузка таблицы"
     */
    title?: string;
    /**
     * Подзаголовок, который появится после задержки, пустая строка - значит он не появится
     * @default ""
     */
    subtitle?: string;
    /**
     * Задержка перед показом подзаголовка (мс)
     * @default 10000 (10 секунд)
     */
    showSubtitleDelay?: number;
  };
  noRowsFallback?: boolean | { custom: ReactNode };
  columnsControl?: ColumnsControlConfig;
  rowDetailPanel?: RowDetailConfig<RowType>;
  rowInstruments?: {
    getRowDropdownConfig: RowInstrumentsType<RowType>;
    /**
     * @default false
     */
    defaultOpened?: boolean;
    /**
     * @default true
     */
    showInControl?: boolean;
    /**
     * Внешний стейт видимости
     */
    openedState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  };
  fullScreenEnabled?: FullScreen;
  keyText?: boolean | KeyTextConfig;
  /**
   * pagination - пропс для пагинации.
   *
   * Условие активации - наличие самого пропса pagination.
   *
   * При активации pagination отключается дефолтные поиск, сортировка и фильтрация.
   * (поиск работает на уровне с фильтрацией и сортировкой, сначала поиск, затем фильтрация, затем сортировка)
   *
   */
  pagination?: PaginationProps;
  /**
   * searching - пропс для поиска по таблицу.
   *
   * Условие активации - наличие searching.enabled: true
   *
   */
  /**
   * Конфигурация табов в сайдбаре
   */
  sidebarConfig?: SidebarConfig;
  searching?: SearchingProps;
  /**
   * onHeaderContextMenu - пропс для активации открытия контекстного меню.
   *
   */
  onHeaderContextMenu?: HeaderContextMenuProps;
  onHeaderContextMenuDropDown?: HeaderContextMenuDropDownProps;
  onCellContextMenuDropDown?: CellContextMenuDropDownProps<
    RowType,
    SummaryRowType
  >;
} & Pick<
  DataGridPropsDefault<RowType, SummaryRowType, RowIdType>,
  | 'summaryRowHeight'
  | 'onFill'
  | 'onCopy'
  | 'onPaste'
  | 'onCellClick'
  | 'onCellDoubleClick'
  | 'onCellContextMenu'
  | 'onCellKeyDown'
  | 'onSelectedCellChange'
  | 'onScroll'
  | 'onColumnResize'
  | 'onColumnsReorder'
  | 'enableVirtualization'
  | 'rowClass'
  | 'data-testid'
  | 'headerRowHeight'
>;`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$ColumnConfig":`type ColumnConfig<
  Row extends ObjectForExtending,
  SummRow = unknown,
> = ColumnDefaultOmitted<Row, SummRow> & {
  /**
   * Если в поле name был передан jsx, то нужно заполнить nameAsString для указания label в разделе Настройки столбцов, либо для отображения label в фильтрах в правом сайдбаре (но приоритет для фильтро будет ниже, чем то, что указали в filtering.sidebarConfig.items, там отдельно можно перезаписать label для фильтров сайдабара)
   */
  nameAsString?: string;
  sortingType?: 'stringSort' | 'numberSort' | Comparator<Row>;
  searching?: {
    valueInRow: (row: Row) => string | number;
  };
  filtering?: {
    keyInFilterState: string;
    /**
     * Обязательно передать в случае НЕ ручной фильтрации. Если на уровне tableConfig.manualFiltering = false или не задан. Иначе фильтрация не отработает.
     */
    valueInRow?: (row: Row) => string | number;
    /**
     * \`\`\`FilterCb - (filterValue: string, rowValue: string) => boolean\`\`\`
     */
  } & (
    | {
        component: 'input';
        filter: 'includes' | 'startWith' | 'equal' | FilterCb<'single'>;
      }
    | {
        component: 'select';
        beforeList?: (
          props: FilterComponentInPopoverProps<
            ObjectForExtending,
            ColumnConfig<Row, SummRow>
          >,
        ) => ReactNode;
        filter:
          | {
              typeOfValue: 'single';
              /**
               * Обязательно передать в случае НЕ ручной фильтрации. Если на уровне tableConfig.manualFiltering = false или не задан. Иначе фильтрация не отработает.
               */
              filteringType?: FilterCb<'single'>;
            }
          | {
              typeOfValue: 'multiple';
              /**
               * Обязательно передать в случае НЕ ручной фильтрации. Если на уровне tableConfig.manualFiltering = false или не задан. Иначе фильтрация не отработает.
               */
              filteringType?: FilterCb<'multiple'>;
            };
        selectOptions:
          | {
              type: 'constant';
              options: SelectOptions[];
            }
          | {
              type: 'stateInHeaderContext';
              /**
               * тип optionsState, который будет в HeaderContext:
               * \`\`\`ts
               * {
               * value: string | number;
               * text: string | number;
               * }[];
               * \`\`\`
               */
              optionsKeyInHeaderContext: string;
            };
        /**
         * Максимальна высота выпадающего списка в фильтрах колонок / правом сайдбаре.
         * @default "360px"
         */
        listMaxHeight?: string;
      }
    | {
        component: 'custom';
        customRender: (
          props: FilterComponentInPopoverProps<
            ObjectForExtending,
            ColumnConfig<Row, SummRow>
          >,
        ) => ReactNode;
        filter?: (filterValue: unknown, rowValue: unknown) => boolean;
        compareWithClearedValue?: (
          clearedValue: unknown,
          currV: unknown,
        ) => boolean;
      }
  );

  contentFormat?: ContentFormat;

  editingCell?: Editing<Row>;

  subRow?: {
    /**
     * @default false
     */
    isColumnWithArrow?: boolean | ((props: { keyText: KeyText }) => boolean);
    /**
     * @default false
     */
    hideHeaderExpandAllArrow?: boolean;
    /**
     * @default false
     */
    parentKeyAsDefault?: boolean;
    /**
     * @default undefined
     */
    contentFormat?: ContentFormat;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderSubRowCell?: RenderSubRowCell<any>;
  } & (
    | {
        keyOfColumnInSubRow:
          | string
          | number
          | ((lvl: number) => string | number);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        editingCell: Editing<any>;
      }
    | {
        editingCell?: undefined;
        keyOfColumnInSubRow?:
          | string
          | number
          | ((lvl: number) => string | number);
      }
  );
  rowsGrouping?: ColumnRowsGrouping<Row, SummRow>;
  keyText?: KeyTextColumnConfig<Row, SummRow>;
};`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$TableCollapseConfig":`type TableCollapseConfig = {
  /**
   * Обязательный флаг для активации
   * @default false
   */
  enableCollapse?: boolean;
  /**
   * Начальное состояние (опционально)
   *  @default false
   */
  defaultCollapsed?: boolean;
  /**
   * Текст для кнопки при раскрытом состоянии (опционально)
   * @default "Свернуть"
   */
  collapseText?: string;
  /**
   * Текст для кнопки при закрытом состоянии (опционально)
   * @default "Развернуть"
   */
  expandText?: string;
  /**
   * callback при изменении состояния
   */
  onToggleCollapse?: (isCollapsed: boolean) => void;
  /** Внешнее состояние [isCollapsed, setIsCollapsed] */
  collapsedState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
  /**
   * Размещение кнопки коллапсинга
   * - 'inside' - внутри контрол-блока (по умолчанию, участвует в компрессии)
   * - 'above' - в отдельном блоке сверху контрол-блока (не участвует в компрессии)
   * @default 'inside'
   */
  collapseButtonPlacement?: 'inside' | 'above';
  /**
   * Кастомный рендер правого слота кнопки коллапсинга, который используется при collapseButtonPlacement='above'
   */
  collapseButtonAboveRightSlot?: React.ReactNode;
};`,"packages/ui-kit/src/components/Table/types/data-grid.type.ts$$$ColumnDefault":`type ColumnDefault<TRow, TSummaryRow = unknown> = {
  /** The name of the column. By default it will be displayed in the header cell */
  readonly name: string | ReactElement;
  /** A unique key to distinguish each column */
  readonly key: string;
  /** Column width. If not specified, it will be determined automatically based on grid width and specified widths of other columns */
  readonly width?: Maybe<number | string>;
  /** Minimum column width in px. */
  readonly minWidth?: Maybe<number>;
  /** Maximum column width in px. */
  readonly maxWidth?: Maybe<number>;
  readonly cellClass?: Maybe<string | ((row: TRow) => Maybe<string>)>;
  readonly headerCellClass?: Maybe<string>;
  readonly summaryCellClass?: Maybe<
    string | ((row: TSummaryRow) => Maybe<string>)
  >;
  /** Render function used to render the content of the column's header cell */
  readonly renderHeaderCell?: Maybe<
    (props: RenderHeaderCellProps<TRow, TSummaryRow>) => ReactNode
  >;
  /** Render function used to render the content of cells */
  readonly renderCell?: Maybe<
    (props: RenderCellProps<TRow, TSummaryRow>) => ReactNode
  >;
  /** Render function used to render the content of summary cells */
  readonly renderSummaryCell?: Maybe<
    (props: RenderSummaryCellProps<TSummaryRow, TRow>) => ReactNode
  >;
  /** Render function used to render the content of group cells */
  readonly renderGroupCell?: Maybe<
    (props: RenderGroupCellProps<TRow, TSummaryRow>) => ReactNode
  >;
  /** Render function used to render the content of edit cells. When set, the column is automatically set to be editable */
  readonly renderEditCell?: Maybe<
    (props: RenderEditCellProps<TRow, TSummaryRow>) => ReactNode
  >;
  /** Enables cell editing. If set and no editor property specified, then a textInput will be used as the cell editor */
  readonly editable?: Maybe<boolean | ((row: TRow) => boolean)>;
  readonly colSpan?: Maybe<
    (args: ColSpanArgs<TRow, TSummaryRow>) => Maybe<number>
  >;
  /** Determines whether column is frozen or not */
  readonly frozen?: Maybe<boolean>;
  /** Enable resizing of a column */
  readonly resizable?: Maybe<boolean>;
  /** Enable sorting of a column */
  readonly sortable?: Maybe<boolean>;
  /** Enable dragging of a column */
  readonly draggable?: Maybe<boolean>;
  /** Sets the column sort order to be descending instead of ascending the first time the column is sorted */
  readonly sortDescendingFirst?: Maybe<boolean>;
  readonly editorOptions?: Maybe<{
    /**
     * Render the cell content in addition to the edit cell.
     * Enable this option when the editor is rendered outside the grid, like a modal for example.
     * By default, the cell content is not rendered when the edit cell is open.
     * @default false
     */
    readonly displayCellContent?: Maybe<boolean>;
    /** @default true */
    readonly commitOnOutsideClick?: Maybe<boolean>;
  }>;
};

declare type SharedDivProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  | 'role'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-rowcount'
  | 'className'
  | 'style'
>;
declare type DefaultColumnOptions<R, SR> = Pick<
  Column<R, SR>,
  | 'renderCell'
  | 'width'
  | 'minWidth'
  | 'maxWidth'
  | 'resizable'
  | 'sortable'
  | 'draggable'
>;

type Direction = 'ltr' | 'rtl';

/**
 * Полная копия типа "DataGridProps" из react-data-grid. Скопирован для того, чтобы API в Story проинициализировался
 */
export interface DataGridPropsDefault<R, SR = unknown, K extends Key = Key>
  extends SharedDivProps {
  /**
   * Grid and data Props
   */
  /** An array of objects representing each column on the grid */
  columns: readonly ColumnOrColumnGroup<R, SR>[];
  /** A function called for each rendered row that should return a plain key/value pair object */
  rows: readonly R[];
  /**
   * Rows to be pinned at the top of the rows view for summary, the vertical scroll bar will not scroll these rows.
   */
  topSummaryRows?: Maybe<readonly SR[]>;
  /**
   * Rows to be pinned at the bottom of the rows view for summary, the vertical scroll bar will not scroll these rows.
   */
  bottomSummaryRows?: Maybe<readonly SR[]>;
  /** The getter should return a unique key for each row */
  rowKeyGetter?: Maybe<(row: R) => K>;
  onRowsChange?: Maybe<(rows: R[], data: RowsChangeData<R, SR>) => void>;
  /**
   * Dimensions props
   */
  /**
   * The height of each row in pixels
   * @default 35
   */
  rowHeight?: Maybe<number | ((row: R) => number)>;
  /**
   * The height of the header row in pixels
   * @default 35
   */
  headerRowHeight?: Maybe<number>;
  /**
   * The height of each summary row in pixels
   * @default 35
   */
  summaryRowHeight?: Maybe<number>;
  /**
   * Feature props
   */
  /** Set of selected row keys */
  selectedRows?: Maybe<ReadonlySet<K>>;
  /** Function called whenever row selection is changed */
  onSelectedRowsChange?: Maybe<(selectedRows: Set<K>) => void>;
  /** Used for multi column sorting */
  sortColumns?: Maybe<readonly SortColumn[]>;
  onSortColumnsChange?: Maybe<(sortColumns: SortColumn[]) => void>;
  defaultColumnOptions?: Maybe<DefaultColumnOptions<R, SR>>;
  onFill?: Maybe<(event: FillEvent<R>) => R>;
  onCopy?: Maybe<(event: CopyEvent<R>) => void>;
  onPaste?: Maybe<(event: PasteEvent<R>) => R>;
  /**
   * Event props
   */
  /** Function called whenever a cell is clicked */
  onCellClick?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  /** Function called whenever a cell is double clicked */
  onCellDoubleClick?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  /** Function called whenever a cell is right clicked */
  onCellContextMenu?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  onCellKeyDown?: Maybe<
    (args: CellKeyDownArgs<R, SR>, event: CellKeyboardEvent) => void
  >;
  /** Function called whenever cell selection is changed */
  onSelectedCellChange?: Maybe<(args: CellSelectArgs<R, SR>) => void>;
  /** Called when the grid is scrolled */
  onScroll?: Maybe<(event: React.UIEvent<HTMLDivElement>) => void>;
  /** Called when a column is resized */
  onColumnResize?: Maybe<(idx: number, width: number) => void>;
  /** Called when a column is reordered */
  onColumnsReorder?: Maybe<
    (sourceColumnKey: string, targetColumnKey: string) => void
  >;
  /**
   * Toggles and modes
   */
  /** @default true */
  enableVirtualization?: Maybe<boolean>;
  /**
   * Miscellaneous
   */
  renderers?: Maybe<Renderers<R, SR>>;
  rowClass?: Maybe<(row: R, rowIdx: number) => Maybe<string>>;
  /** @default 'ltr' */
  direction?: Maybe<Direction>;
  'data-testid'?: Maybe<string>;
}

export type DefaultOmittedKeys =
  | 'editable'
  | 'sortable'
  | 'sortDescendingFirst'
  | 'renderGroupCell'
  | 'renderEditCell'
  | 'frozen'
  | 'draggable';

export type ColumnDefaultOmitted<
  Row extends ObjectForExtending,
  SummRow = unknown,
> = Omit<ColumnDefault<Row, SummRow>, DefaultOmittedKeys>;

export type { CellClickArgs };`,"packages/ui-kit/src/components/Table/feature-column-control/types.ts$$$ColumnsControlConfig":`type ColumnsControlConfig = {
  enable: boolean;
  /**
   * @default enable
   */
  hiding?: boolean;
  /**
   * @default enable
   */
  pinning?: boolean;
  /**
   * @default enable
   */
  reorderingAside?: boolean;
  /**
   * reorderingHeader  - активация изменения порядка колонок  посредством перемещения шапок колонок таблицы
   */
  /**
   * @default enable
   */
  reorderingHeader?: boolean;
  onReorderingHeader?: (params: {
    newOrder: string[];
    sourceKey: string;
    targetKey: string;
  }) => void;

  columnsLabel?: Record<
    string,
    ReactNode | ((isHidden: boolean, isPinned: boolean) => ReactNode)
  >;

  orderDefault?: string[];

  pinnedDefault?: string[];
  disablePinning?: string[];

  hiddenDefault?: string[];
  disableHiding?: string[];

  onConfirm?: (
    params: {
      pinned: string[];
      order: string[];
      hidden: string[];
      changed: { pinned?: 'pinned'; order?: 'order'; hidden?: 'hidden' };
    },
    setters: {
      setColumnsOrder: (value: React.SetStateAction<string[]>) => void;
      setPinnedCols: (value: React.SetStateAction<string[]>) => void;
      setHiddenCols: (value: React.SetStateAction<string[]>) => void;
    },
  ) => void;
  /**
   * DomMetadata для кнопок закрепления столбцов
   */
  pinDomMetadata?: DomMetadata;
  /**
   * DomMetadata для свитчеров скрытия/показа столбцов
   */
  switchDomMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$ColumnGroupConfig":`type ColumnGroupConfig<R extends ObjectForExtending, SR> = ColumnGroup<
//     R,
//     SR
// >;`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$ColumnOrColumnGroupConfig":`type ColumnOrColumnGroupConfig<
  R extends ObjectForExtending,
  SR = unknown,
> = ColumnConfig<R, SR> | ColumnGroupConfig<R, SR>;`,"packages/ui-kit/src/components/Table/feature-context-menu/types.ts$$$ContextMenuDropdownItem":`type ContextMenuDropdownItem = NonNullable<
  DropdownProps['items']
>[number];`,"packages/ui-kit/src/components/Table/feature-context-menu/types.ts$$$ContextMenuDropDownProps":`type ContextMenuDropDownProps = Omit<
  DropdownProps,
  | 'children'
  | 'items'
  | 'placement'
  | 'closeOnOverlayClick'
  | 'portal'
  | 'openByRightClick'
  | 'onItemClick'
  | 'hoverIndex'
  | 'size'
  | 'alwaysOpened'
  | 'trigger'
  | 'hasArrow'
  | 'onItemSelect'
>;`,"packages/ui-kit/src/components/Table/feature-context-menu/types.ts$$$DropdownContextMenu":`type DropdownContextMenu = {
  type: 'dropdown';
  getDropDownItems: (params: { columnLabel: string }) => DropdownProps['items'];
} & ContextMenuDropDownProps;`,"packages/ui-kit/src/components/Table/feature-context-menu/types.ts$$$HeaderContextMenuProps":`type HeaderContextMenuProps = (
  event: React.MouseEvent,
  columnLabel: string | undefined,
  closestTargetElement: HTMLElement | undefined,
) => void;`,"packages/ui-kit/src/components/Table/feature-context-menu/types.ts$$$HeaderContextMenuDropDownProps":`type HeaderContextMenuDropDownProps = {
  type: 'dropdown';
  getDropDownItems: (params: {
    columnLabel: string | undefined;
  }) => DropdownProps['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Если getDropDownItems вернул
   * пусто, но onOpen задан — меню открывается, а getDropDownItems перечитывается
   * реактивно, пока меню открыто. Здесь потребитель стартует запрос.
   */
  onOpen?: (params: { columnLabel: string | undefined }) => void;
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: { columnLabel: string | undefined },
    event?: React.SyntheticEvent,
  ) => void;
} & ContextMenuDropDownProps;`,"packages/ui-kit/src/components/Table/feature-context-menu/types.ts$$$CellContextMenuDropDownProps":`type CellContextMenuDropDownProps<RowType, SummaryRowType> = {
  type: 'dropdown';
  getDropDownItems: (params: {
    row: RowType;
    column: CalculatedColumn<RowType, SummaryRowType>;
  }) => DropdownProps['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Если getDropDownItems вернул
   * пусто, но onOpen задан — меню открывается, а getDropDownItems перечитывается
   * реактивно, пока меню открыто. Здесь потребитель стартует запрос.
   */
  onOpen?: (params: {
    row: RowType;
    column: CalculatedColumn<RowType, SummaryRowType>;
  }) => void;
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: {
      row: RowType;
      column: CalculatedColumn<RowType, SummaryRowType>;
      selectCell: (enableEditor?: boolean) => void;
    },
    event?: React.SyntheticEvent,
  ) => void;
} & ContextMenuDropDownProps;`,"packages/ui-kit/src/components/TableContract/types.ts$$$FetcherProps":`type FetcherProps = {
  /**
   * pathParams - параметры запроса пути 'domain/path/:id-pathParam.
   */
  pathParams?: string;
  /**
   * params - query search параметры запроса, которые будут изменяться самой таблицей в зависимости от того, какие фичи активированы.
   */
  params?: string;
  /**
   * method - метод запроса. Его тип основан на типе HTTP fetch.body.
   * Будет использоваться преимущественно GET.
   * @example GET | POST | PUT | PATCH | DELETE
   */
  method?: RequestInit['method'];
  /**
   * body - передаваемая полезная информация. Его тип основан на типе HTTP fetch.body.
   */
  body?: RequestInit['body'];
};

export type FetcherFunc = (p: FetcherProps) => Promise<Response>;`,"packages/ui-kit/src/components/TableContract/types.ts$$$FetcherFunc":"type FetcherFunc = (p: FetcherProps) => Promise<Response>;","packages/ui-kit/src/components/TableContract/types.contractResponse.ts$$$ContractResponse":`type ContractResponse = {
  /**
   *  Основные данные для таблицы.
   *
   *  Пример data.main, data.topSummary, data.bottomSummary: \`[{id: "122", country: 'Russia'}, {id: "155", country: 'Japan'}]\`
   */
  data: {
    /**
     *  @example - [{id: "122", country: 'Russia'}, {id: "155", country: 'Japan'}].
     */
    main: ObjectAny[];
    /**
     *  @example - [{id: "122", country: 'Russia'}, {id: "155", country: 'Japan'}].
     */
    topSummary?: ObjectAny[];
    /**
     *  @example - [{id: "122", country: 'Russia'}, {id: "155", country: 'Japan'}].
     */
    bottomSummary?: ObjectAny[];
  };
  /**
   *  Данные для конфигурации отображения таблицы.
   *
   *  \`meta.columns\` - конфигурация колонок.
   *  \`meta.tableConfig\` - конфигурация фичей таблицы.
   */
  meta: {
    columns: ContractColumnConfig[];
    tableConfig?: ContractTableConfig;
  };
};`,"packages/ui-kit/src/components/TableContract/types.contractResponse.ts$$$ContractColumnConfig":`type ContractColumnConfig = {
  /**
   * key - ключ данной колонки в данных строки.
   */
  key: string;
  /**
   * name - отображаемый текст в шапке колонки.
   */
  name: string | number;
  /**
   * тип данных колонки
   */
  columnType?: ColumnAnsiSqlType;
  /**
   * текст, видимый при наведении на название колонки
   */
  title?: string;
  /**
   * sortingType - свойство для настройки типа сортировки. Если не указано данное свойство, то иконка сортировки у колонки не появится. Не забудьте активировать сортировку в TableConfig.
   */
  sortingType?: 'stringSort' | 'numberSort';
  /**
   * searching.keyInRow - свойство для настройки поиска: по какому ключу в объекте строки искать в рамках данной колонки. Не забудьте активировать поиск в TableConfig.
   */
  searching?: {
    /**
     * свойство для настройки поиска: по какому ключу в объекте строки искать в рамках данной колонки. Не забудьте активировать поиск в TableConfig.
     */
    keyInRow: string;
  };
  /**
   * contentFormat - свойство для конфигурации формата отображения контента в ячейки.
   */
  contentFormat?:
    | number
    | { alignContent?: 'right' | 'left' | 'center' }
    | {
        type: 'number';
        /** Кастомный разделитель дробной части (по умолчанию ',') */
        decimalSeparator?: string;
        /** Кастомный разделитель тысяч (по умолчанию ' ') */
        thousandSeparator?: string;
        /** Минимальное число знаков после запятой (по умолчанию 0) */
        minimumFractionDigits?: number;
        /** Максимальное число знаков после запятой (по умолчанию 2) */
        maximumFractionDigits?: number;
        /** Включить/отключить группировку разрядов (по умолчанию true) */
        useGrouping?: boolean;
        /** Локаль для Intl.NumberFormat (по умолчанию 'ru-RU') */
        locales?: string | string[];
        alignContent?: 'right' | 'left' | 'center';
      };
  /**
   * subRow - свойство для конфигурации отрисовки данных во вложенных строках.
   */
  subRow?: {
    /**
     * Свойство для указания по какому ключу взять данные в дочерней строке.
     *
     * \`keyOfColumnInSubRow\` обязателен для заполнения, если не заполнен \`parentKeyAsDefault\`.
     *
     * Для типов \`string\`, \`number\` - указать название ключа, например 'block'.
     *
     * Для типа \`Record<number | 'default', string>\` - указать ключи для каждого уровня вложенности, например \`{1: 'block', 2: 'tribe', default: 'product'}\`.
     */
    keyOfColumnInSubRow?: string | number | Record<number | 'default', string>;
    /**
     * свойство для того, чтобы показать/не показывать иконки-стрелки, раскрывающие дочерние строки.
     * @default false
     */
    isColumnWithArrow?: boolean;
    /**
     * @default false
     */
    hideHeaderExpandAllArrow?: boolean;
    /**
     * Свойство для указания "взять данные из дочерней строки по такому же ключу, что и из недочерней строки (строки верхнего уровня)".
     *
     * \`parentKeyAsDefault\` обязателен для заполнения, если не заполнен \`keyOfColumnInSubRow\`.
     * @default false
     */
    parentKeyAsDefault?: boolean;
    /**
     * @default undefined
     */
    contentFormat?:
      | number
      | { alignContent?: 'right' | 'left' | 'center' }
      | {
          type: 'number';
          /** Кастомный разделитель дробной части (по умолчанию ',') */
          decimalSeparator?: string;
          /** Кастомный разделитель тысяч (по умолчанию ' ') */
          thousandSeparator?: string;
          /** Минимальное число знаков после запятой (по умолчанию 0) */
          minimumFractionDigits?: number;
          /** Максимальное число знаков после запятой (по умолчанию 2) */
          maximumFractionDigits?: number;
          /** Включить/отключить группировку разрядов (по умолчанию true) */
          useGrouping?: boolean;
          /** Локаль для Intl.NumberFormat (по умолчанию 'ru-RU') */
          locales?: string | string[];
          alignContent?: 'right' | 'left' | 'center';
        };
    editingCell?: ContractColumnEditingCell;
  };
  editingCell?: ContractColumnEditingCell;

  /**
   * resizable - свойство для активации возможности изменять размер колонки
   */
  resizable?: boolean;
  /**
   * summaryCell - свойство для конфигурации отрисовки данных в итоговых строках.
   *
   * Заполнить либо \`key\`(по какому ключу взять данные в итоговой строке),
   * либо \`text\` (любой текст, который должен отображаться в итоговой строке в определенной колонке)
   */
  summaryCell?: {
    key?: string;
    text?: string;
  };
  /**
   * width - свойство для настройки активной ширины колонки. "string" - CSS-value, "number" - value in px
   * @example '300px' или 500
   */
  width?: number | string;
  /**
   * minWidth - для настройки минимальной ширины. "number" - value in px
   */
  minWidth?: number;
  /**
   * maxWidth - для настройки максимальной ширины. "number" - value in px
   */
  maxWidth?: number;
};`,"packages/ui-kit/src/components/TableContract/types.contractResponse.ts$$$ContractTableConfig":`type ContractTableConfig = {
  /**
   * sorting - свойство для конфигурации сортировки.
   */
  sorting?: { type: 'frontend' | 'backend' };
  /**
   * свойство для конфигурации отображения пагинации.
   */
  pagination?: {
    total: number;
    totalRows: number;
    defaultPage: number;
    defaultPageSize: number;
    page: number;
    pageSize: number;
    /**
     * sizeList - pageLimitList
     */
    pageSizeList?: number[];
  };
  /**
   * editing - активация редактирования. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   */
  editing?: {
    saving: { type: 'onSubmit' | 'onRowChange' };
    /**
     *
     * rowUniqIdKey - уникальный ключ(или ключи) в данных строки, по которому она будет идентифицироваться.
     *
     * Ключ в данных может быть любым (необязательно "id", а например "UVE367").
     *
     * Мб формата c одним или несколькими ключами.
     * Указание нескольких ключей может понадобится для лучшей идентификации уникальности строки.
     * Разделитель - ',' (запятая). Например, 'id' или "id,UVE367,name"
     *  @example 'id' или "id,UVE367,name"
     */
    rowUniqIdKey: string;
    /**
     *
     * rowEditable.key - ключ(или ключи) в данных строки, по которому будет идентифицироваться редактируется строка или нет.
     * // TODO доделать описание (editableValue)
     * Ключ в данных может быть любым (необязательно "id", а например "UVE367").
     *
     * Мб формата c одним или несколькими ключами.
     * Указание нескольких ключей может понадобится для лучшей идентификации уникальности строки.
     * Разделитель - ',' (запятая). Например, 'id' или "id,UVE367,name"
     *  @example 'id' или "id,UVE367,name"
     */
    rowEditable?: { keyInRow: string; editableValue: string };
    /**
     * defaultEnabled - пропс, отвечающий за то, будет ли активен режим редактирования или нет. По умолчанию - не активно.
     * @default false
     */
    defaultEnabled?: boolean;
    /**
     * @default true
     */
    showToggleEnabledButton?: boolean;
  };
  /**
   * subRows - свойство для конфигурации отображения иерархий.
   */
  subRows?: {
    /**
     * subRowsKey - ключ в данных, по которому можно найти дочерние строки. Ключ в данных может быть любым (необязательно "children", "subRows").
     *
     * Мб формата без вложенности, например, "children". А также и с вложенностью, например, "UVE367.children".
     *
     * Вложенность может быть в рамках как объектных структур, так и массивов.
     * Разделитель - '.' (точка). Например, "children" или "UVE367.0.children".
     * @example "children" или "UVE367.0.children"
     */
    subRowsKey: string;
    /**
     *
     * rowUniqIdKey - уникальный ключ(или ключи) в данных строки, по которому она будет идентифицироваться.
     *
     * Ключ в данных может быть любым (необязательно "id", а например "UVE367").
     *
     * Мб формата c одним или несколькими ключами.
     * Указание нескольких ключей может понадобится для лучшей идентификации уникальности строки.
     * Разделитель - ',' (запятая). Например, 'id' или "id,UVE367,name"
     *  @example 'id' или "id,UVE367,name"
     */
    rowUniqIdKey: string;
  };
  /**
   * filtering - свойство для конфигурации фильтрации по колонкам.
   */
  filtering?: {
    type: 'backend';
  };
  /**
   * searching - свойство для конфигурации поиска.
   */
  searching?: {
    /**
     * Активирован поиск или нет.
     */
    enabled: boolean;
    /**
     * На какой стороне должен производиться поиск.
     */
    type: 'frontend' | 'backend';
    /**
     * По умолчанию текст для поиска, введенный в поле ввода.
     */
    defaultSearchQuery?: string;
    /**
     * Показать/скрыть визуально блок с поиском.
     */
    showSearchBlock?: boolean;
    /**
     * Задержка в момент ввода пользователем текста перед отправкой запроса. По умолчанию (300ms)
     *
     * @default 300
     */
    debounceDelay?: number;
    /**
     * Активирована ли задержка в момент ввода пользователем текста перед отправкой запроса. По умолчанию активирована.
     *
     * @default true
     */
    isDebounceActive?: boolean;
    /**
     * Текст отображаемый внутри поля ввода, при отсутствии введенного значения. Например, 'Поиск'
     *
     * @default 'Поиск'
     */
    placeholder?: string;
    /**
     * Свойство для добавления html-атрибута class блоку поиска.
     */
    searchClasses?: string;
  };
  /**
   * height - свойство для настройки высоты таблицы.
   * @default "500px"
   */
  height?: string;
  /**
   * fullScreenEnabled - свойство для активации доступности полноэкранного режима.
   */
  fullScreenEnabled?: boolean;

  /**
   * summaryRows - свойство для активации итоговых строк.
   */
  summaryRows?: { showDefault: boolean; showInControl: boolean };
  /**
   * resizableColumn - свойство для активации изменения ширины колонок при взаимодействии с их шапкой.
   */
  resizableColumn?: boolean;
  /**
   * rowSize - свойство для изменения плотности отображения данных таблицы.
   */
  rowSize?: {
    showInControl: boolean;
    default?: 'small' | 'medium' | 'big';
    available?: ('small' | 'medium' | 'big')[];
  };
  /**
   * rowHeight - свойство для изменения высоты строк. Данное значение менять, только если крайне необходимо. Дизайн должен соответствовать требованиям ДС.
   * @default 56
   */
  rowHeight?: number;
  /**
   * containerStyle - свойство для конфигурации стилей с помощью CSS. (type=SSProperties)
   * @example {width: '700px'}
   */
  containerStyle?: ObjectAny;
};`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$ControlBlockConfig":`type ControlBlockConfig = {
  /**
   * show - наличие controlBlock-а
   * @default true
   */
  show?: boolean;
  /**
   * leftSideInner - пропс для добавления кнопок в левую часть контролблока
   */
  leftSideInner?: ControlBlockButtonProps[];
  /**
   * rightSideInner - пропс для добавления кнопок в в правую часть контролблока
   */
  rightSideInner?: ControlBlockButtonProps[];
  /**
   * rightSideInner - пропс для добавления кастомные фичей (кнопки-иконки)
   */
  customFeatures?: FeatureItem[];
  /**
   * Пропсы для компонента dropdown в котором будут скрыты левые фичи при адаптивной компрессии
   */
  leftSideDropdownProps?: TableDropdownConfigProps;
  /**
   * Пропсы для компонента dropdown в котором будут скрыты правые фичи при адаптивной компрессии
   */
  rightSideDropdownProps?: TableDropdownConfigProps;
  /**
   * Активна ли фича компрессии (сжатие ToolsMenu при адаптиве)
   * @default true
   */
  enableAdaptiveCompress?: boolean;
  /**
   * Панель массовых действий
   */
  massActionPanel?: {
    /**
     * Кнопки панели. Размеры кнопок/дропдаунов панель подбирает сама (по \`size\` панели и компактности) —
     * передавать \`size\` кнопкам не нужно. Если \`size\` на кнопке всё же задан — он используется как есть.
     */
    buttons: MassActionsButtonProps[];
    /**
     * Пропсы для Dropdown, в который сжались кнопки
     */
    collapsedDropdownProps?: TableDropdownConfigProps;
    /**
     * Отступ панели снизу от контейнера (px)
     * @default 24
     */
    bottom?: number;
    /**
     * Управление отображением панели массовых действий.
     * - \`undefined\` (по умолчанию) — стандартное поведение (показывается при selecting + выбранных строках)
     * - \`false\` — панель не рендерится, разработчик управляет действиями самостоятельно
     * - \`true\` — панель показывается всегда, даже без активного selecting и выбранных строк
     */
    show?: boolean;
    /**
     * Размерная сетка панели внутри таблицы: \`m\`/\`s\` — обычный размер, \`xs\` — уменьшенный (кнопки \`xxs\`, «ещё» \`xs\`, счётчик Body XS).
     * Viewport-логика (1280) в таблице не используется.
     * @default 's'
     */
    size?: MassActionsSize;
  };
};`,"packages/ui-kit/src/components/Table/widgets/control-block/control-block-button.types.tsx$$$ControlBlockButtonProps":`type ControlBlockButtonProps = DataAttributes &
  Omit<Partial<ButtonProps>, DefPropsKeys> & {
    view?: LinkView<LinkButtonView> | ButtonProps['view'];
    dropdown?: TableDropdownProps;
    isTargetAction?: boolean;
  };`,"packages/ui-kit/src/components/Table/widgets/control-block/types.ts$$$FeatureItem":`type FeatureItemWithIcon = FeatureDetailsBase & {
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
} & DataAttributes;`,"packages/ui-kit/src/components/Table/widgets/control-block/types.ts$$$SidebarTab":`type SidebarTab = {
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
};`,"packages/ui-kit/src/components/Table/contexts.tsx$$$HeaderContextValueTypeInstance":`type HeaderContextValueTypeInstance<
  FilterStateType extends Record<string | number, unknown>,
> = {
  filters: FilterStateType | undefined;
  setFilters: React.Dispatch<React.SetStateAction<FilterStateType>> | undefined;
  clearedFiltersValue: FilterStateType | undefined;
  sortState: readonly SortColumn[] | undefined;
  setSortState:
    | React.Dispatch<React.SetStateAction<readonly SortColumn[]>>
    | undefined;
  sortIsVisible: boolean;
  setSortIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  rowSize: SIZE;
  setRowSize: React.Dispatch<React.SetStateAction<SIZE>>;
  onRowSizeChange?: (size: SIZE) => void;

  isExpandedAllRows: boolean;
  toggleExpandAllButton: () => void;
  activeView: ActiveViewModsType;
  setActiveView: React.Dispatch<React.SetStateAction<ActiveViewModsType>>;
};`,"packages/ui-kit/src/components/Table/types/additional.type.ts$$$DomMetadata":`type DomMetadata = {
  /**
   * CSS класс для стилизации и поиска элемента
   *
   * @example 'user-profile-card'
   * @example 'onboarding-step-1'
   */
  className?: string;
  /**
   * Data-атрибуты для тестирования, аналитики и онбординга
   *
   * @example { 'data-testid': 'submit-button', 'data-analytics': 'click-event' }
   */
  dataAttributes?: DataAttributes;
  /**
   * Обработчик клика для аналитики и трекинга
   *
   * Вызывается вместе с основным обработчиком элемента (не заменяет его).
   * Не вызывает stopPropagation — оригинальная логика кнопки сохраняется.
   *
   * @param e - MouseEvent (может быть undefined для элементов внутри Dropdown)
   * @param detail - контекст действия: action, columnKey, size и др.
   *
   * @example onClick: (e, detail) => analytics.track(detail?.action, detail)
   */
  onClick?: (
    e?: React.MouseEvent<HTMLElement>,
    detail?: Record<string, unknown>,
  ) => void;
};`,"packages/ui-kit/src/components/Table/types/dom-metadata-actions.ts$$$DOM_METADATA_ACTIONS":`export const DOM_METADATA_ACTIONS = {
  /** Включение/выключение группировки по столбцу. detail.columnKey — ключ столбца */
  TOGGLE_GROUP: 'toggle-group',
  /** Сброс всех группировок */
  RESET_GROUPS: 'reset-groups',
  /** Выбор пункта в кастомном onItemSelect группировки. detail.columnKey — ключ */
  CUSTOM_ITEM_SELECT: 'custom-item-select',
  /** Переключение размера строки. detail.size — новый размер ('small' | 'medium' | 'big') */
  CHANGE_ROW_SIZE: 'change-row-size',
  /** Клик по табу сайдбара (шестерёнка и др.). detail.tabId — id таба */
  TOGGLE_SIDEBAR_TAB: 'toggle-sidebar-tab',
  /** Закрытие сайдбара (крестик) */
  CLOSE_SIDEBAR: 'close-sidebar',
  /** Закрепление столбца. detail.columnKey — ключ столбца */
  PIN_COLUMN: 'pin-column',
  /** Открепление столбца. detail.columnKey — ключ столбца */
  UNPIN_COLUMN: 'unpin-column',
  /** Скрытие столбца. detail.columnKey — ключ столбца */
  HIDE_COLUMN: 'hide-column',
  /** Показ столбца. detail.columnKey — ключ столбца */
  SHOW_COLUMN: 'show-column',
} as const;`,"packages/ui-kit/src/components/Table/types/dom-metadata-actions.ts$$$DomMetadataAction":`type DomMetadataAction =
  (typeof DOM_METADATA_ACTIONS)[keyof typeof DOM_METADATA_ACTIONS];`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$EditingConfig":`type EditingConfig<RowType, RowIdType, SummaryRowType> = {
  /**
   * Функция обработки изменений в редактируемой строке
   */
  onRowsChange: Maybe<
    (rows: RowType[], data: RowsChangeData<RowType, SummaryRowType>) => void
  >;
  /**
   * свойство, необходимое для корректного изменения дочерних строк.
   * Данное свойство обязательно, если ваши дочерние строки установлены не под ключом "subRows" внутри строки.
   *
   * Как дочерние строки можно указывать свойство, которые вложено в другое свойство.
   * В таком случае "." будет знаком для обозначения сл. уровня вложенности.
   *
   * @example "child" или "uvh367.children"
   */
  subRowsKey?: string;
  /**
   * Функция определения уникального id строки
   * @param row
   * @returns
   */
  rowKeyGetter: (row: RowType) => RowIdType;
  /**
   * Функция определения возможности редактирования строки
   * @param row
   * @returns
   */
  rowEditable?: (row: RowType) => boolean;
  /**
   * defaultEnabled - пропс, отвечающий за то, будет ли активен режим редактирования или нет. По умолчанию - не активно.
   * @default false
   */
  defaultEnabled?: boolean;
  /**
   * enabled - необходим для управления режимом редактирования снаружи компонента Таблицы.
   * По умолчанию, управление происходит в компоненте.
   * Приоритетнее, чем defaultEnabled.
   *
   * @type boolean - если НЕ нужно переключение в самой таблице
   * @type [boolean, React.Dispatch<React.SetStateAction<boolean>>] - если нужно переключение в самой таблице
   *
   */
  enabled?: boolean | [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * Cостояние скрытия/раскрытия кнопки включения/выключения фичи
   * @default true
   */
  showToggleEnabledButton?: boolean;
  /**
   * Функция, вызывающаяся при включении/выключении фичи
   * @param editingIsActive
   * @returns
   */
  onToggleEnableEditing?: (editingIsActive: boolean) => void;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$Editing":`type Editing<RowType extends ObjectForExtending> = {
  /**
   * Если \`error.value(row) === true\`, то у ячейки появляется красная рамка
   */
  error?: { value: (row: RowType, treeLevel: number) => boolean };
  editedSuccessfully?: { value: (row: RowType, treeLevel: number) => boolean };
  /**
   * Функция для определения возможности редактирования  ячейки на основе данных строки (приоритетнее, чем rowEditable в tableConfig.editing)
   */
  editable?: ((row: RowType) => boolean) | boolean;
} & (
  | {
      component: 'inputString';
      /**
       * Дополнительные пропсы для компонента TextField в редактировании
       * @example { placeholder: "Введите текст"}
       */
      inputProps?: Partial<
        Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur' | 'ref' | 'size'>
      >;
    }
  | {
      component: 'inputNumber';
      /**
       * Дополнительные пропсы для компонента NumberFormat в редактировании
       * @example { placeholder: "Введите текст"}
       */
      inputProps?: Partial<
        Omit<
          ComponentProps<typeof NumberFormat>,
          'value' | 'onChange' | 'onBlur' | 'ref' | 'size'
        >
      >;
    }
  | {
      component: 'select';
      options: {
        type: 'constant';
        options: SelectOptions[];
      };
      /**
       * Дополнительные пропсы для компонента Combobox в редактировании
       * @example { listMaxHeight: "100px"}
       */
      selectProps?: Partial<
        Omit<
          ComponentProps<typeof Combobox>,
          'value' | 'onChange' | 'items' | 'ref' | 'size' | 'portal'
        >
      >;
    }
  | {
      component: 'select';

      options: {
        type: 'stateInRowContext';
        /**
         * тип optionsState, который будет в RowContext:
         * \`\`\`ts
         * options: {
         * value: string | number;
         * text: string | number;
         * }[];
         * \`\`\`
         */
        optionsKeyInRowContext: string;
      };
    }
  | {
      /**
       * Кастомный рендер ячейки редактирования
       */
      component: RenderSubRowEditCell<RowType>;
    }
);`,"packages/ui-kit/src/components/Table/feature-filtering/header-filter-button/types.ts$$$FilterComponentInPopoverProps":`type FilterComponentInPopoverProps<
  FilterStateType extends ObjectForExtending,
  ColumnConfig,
> = {
  popoverIsOpen: boolean;
  setPopoverIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  columnConfig: ColumnConfig;
  tabIndex: number;
  headerContextState: HeaderContextValueTypeInstance<FilterStateType> &
    FiltersVariables &
    HeaderContextValueTypeInstance<ObjectForExtending>;
  /**
   * Источник открытия фильтра: из шапки таблицы или из сайдбара
   * Полезно для условной логики в customRender (например, alwaysOpened для combobox)
   */
  filterSource?: 'header' | 'sidebar';
};`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$ContentFormat":`type ContentFormat =
  | 'number' // Стандартное числовое форматирование с локалью ru-RU (разделитель тысяч: пробел, дробная часть: запятая)
  | CustomFormat
  | NumberFormatOptions;`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$CustomFormat":`type CustomFormat = CommonFormat & {
  customFormat: (value: string) => React.ReactNode;
};`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$NumberFormatOptions":`type NumberFormatOptions = CommonFormat & {
  type: 'number';
  /** Кастомный разделитель дробной части (по умолчанию ',') */
  decimalSeparator?: string;
  /** Кастомный разделитель тысяч (по умолчанию ' ') */
  thousandSeparator?: string;
  /** Минимальное число знаков после запятой (по умолчанию 0) */
  minimumFractionDigits?: number;
  /** Максимальное число знаков после запятой (по умолчанию 2) */
  maximumFractionDigits?: number;
  /** Включить/отключить группировку разрядов (по умолчанию true) */
  useGrouping?: boolean;
  /** Локаль для Intl.NumberFormat (по умолчанию 'ru-RU') */
  locales?: string | string[];
  alignContent?: 'right' | 'left' | 'center';
};`,"packages/ui-kit/src/components/Table/feature-full-screen/types.ts$$$FullScreen":`type FullScreenObj = {
  /**
   * @default false
   */
  defaultOpened?: boolean;
  state?: [boolean, (arg: (prev: boolean) => typeof prev) => void];
  /**
   * @default true
   */
  showInControl?: boolean;
  /**
   * @default document.body
   */
  portal?: Element | DocumentFragment | false;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/Table/feature-full-screen/types.ts$$$FullScreenObj":`type FullScreenObj = {
  /**
   * @default false
   */
  defaultOpened?: boolean;
  state?: [boolean, (arg: (prev: boolean) => typeof prev) => void];
  /**
   * @default true
   */
  showInControl?: boolean;
  /**
   * @default document.body
   */
  portal?: Element | DocumentFragment | false;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$HighlightActiveType":"type HighlightActiveType = 'cell' | 'row' | 'disabled';","packages/ui-kit/src/components/Table/feature-key-text/types.ts$$$KeyText":"type KeyText = 'key' | 'text' | 'keyText' | 'textKey';","packages/ui-kit/src/components/Table/feature-key-text/types.ts$$$KeyTextConfig":`type KeyTextConfig = {
  showInControl?: boolean;
  defaultActiveOption?: KeyText;
  controlBlock: {
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
     */
    domMetadata?: DomMetadata;
  };
  sidebar: {
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам RightSidebar
     */
    domMetadata?: DomMetadata;
  };
};`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$KeyTextColumnConfig":`type KeyTextColumnConfig<
  Row extends ObjectForExtending,
  SummRow = unknown,
> =
  | ((props: { keyText: KeyText }) => ColumnConfig<Row, SummRow>)
  | ColumnConfig<Row, SummRow>;`,"packages/ui-kit/src/components/Table/feature-pagination/types.ts$$$PaginationProps":`type PaginationProps = Omit<
  ComponentProps<typeof Pagination>,
  'onChangePageValue' | 'onChange'
> & {
  onChangePageValue?: (
    page: number | undefined,
    scrollToTop: () => void,
  ) => void;
  onChange?: (
    newPage: number | undefined,
    perPage: number | undefined,
    scrollToTop: () => void,
  ) => void;
  /**
   * Нужно ли активировать умную адаптацию изменения количества слотов в зависимости от ширины блока пагинации и от size
   * @default false
   */
  responsiveSlots?: boolean;
  /**
   * Callback при ресайзе блока с пагинацией таблицы
   */
  onResize?: (width: number) => void;
};`,"packages/ui-kit/src/components/Table/feature-pagination/types.ts$$$PaginationSize":"type PaginationSize = NonNullable<PaginationProps['size']>;","packages/ui-kit/src/components/Table/feature-pagination/types.ts$$$PaginationSlots":"type PaginationSlots = PaginationProps['slots'];","packages/ui-kit/src/components/Table/feature-row-detail/types.ts$$$RowDetailConfig":`type RowDetailConfig<RowType> = {
  rowKeyGetter: (row: RowType) => string | number;
  isRowWithDetail: (r: RowType) => boolean;
  renderRowDetail: (props: {
    row: RowType;
    tabIndex: number;
    onRowChange: (row: RowType) => void;
    rowIdx: number;
    colIdx: number;
  }) => ReactNode;

  detailHeight: number | ((r: RowType) => number);
  expandButtonColumnKey: string;
  icons?: Prettify<IconsPropType>;

  // TODO  режим редактирования detailPanel  - выключен и убран из типов, если будет потребность, нужно доработать
  // renderRowDetailEditing?: (props: {
  //     row: RowType;
  //     onRowChange: (row: RowType, commitChanges?: boolean) => void;
  //     onClose: (commitChanges?: boolean, shouldFocusCell?: boolean) => void;
  // }) => ReactNode;
  // rowDetailIsEditable?: boolean | ((row: RowType) => boolean);
};`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$RowHeightFunc":`type RowHeightFunc<RowType> = (
  row: RowType,
  currentRowSize: { rowSizeName: SIZE; rowSizeValue: number },
) => number;`,"packages/ui-kit/src/components/Table/feature-row-instruments/types.ts$$$RowInstrumentsType":`type RowInstrumentsType<RowType extends ObjectForExtending> =
  (rowProps: {
    row: RowType;
    rowIdx: number;
    onRowChange: (r: RowType) => void;
    additional: HeaderContextValueTypeInstance<RowType>;
  }) => {
    items: (DropdownItemOption & {
      onItemSelect?: (item: DropdownItemOption, event: SyntheticEvent) => void;
    })[];
    dropdownProps?: Partial<DropdownProps> & {
      /**
       * При количестве item-ов = 1:  использовать ли contentLeft ?? contentRight
       * как иконку для основной кнопки и onItemSelect item-а как onClick основной кнопки
       */
      useItemContentAsButtonContent?: boolean;
    };
  };`,"packages/ui-kit/src/components/Table/feature-row-instruments/types.ts$$$RowInstrumentsDropdownItemOption":`type RowInstrumentsDropdownItemOption = Prettify<
  DropdownItemOption & {
    onItemSelect?: (item: DropdownItemOption, event: SyntheticEvent) => void;
  }
>;`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$RowSize":`type RowSize = {
  /**
   * Показывать кнопку в блоке управления
   */
  showInControl: boolean;
  /**
   * Значение по умолчанию
   */
  default?: SIZE;
  /**
   * Список доступных значений размера
   */
  available?: SIZE[];
  /**
   * Обработчик изменения rowSize
   * @param size
   * @returns
   */
  onRowSizeChange?: (size: SIZE) => void;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/Table/feature-rows-grouping/types.ts$$$RowsGrouping":`type RowsGrouping<RowType extends ObjectForExtending> = {
  /**
   * массив группированных колонок и его setter
   */
  groupByState: [string[], React.Dispatch<React.SetStateAction<string[]>>];
  /**
   * Функция определения уникального id строки
   */
  rowKeyGetter: (row: RowType) => string | number;
  /**
   * Показывать ли кнопку «Группировать» в controlBlock.
   * При \`false\` кнопка скрыта и не участвует в компрессии,
   * но группировка строк продолжает работать от внешнего \`groupByState\`.
   * @default true
   */
  showInControl?: boolean;
  /**
   * @default 'Группировка'
   */
  groupedColumnProps?: Partial<
    Pick<
      ColumnConfig<RowType>,
      | 'name'
      | 'resizable'
      | 'width'
      | 'minWidth'
      | 'maxWidth'
      | 'renderSummaryCell'
    >
  > & {
    renderCell?: (
      props: RenderCellProps<RowType> & {
        parentGroupKey: string | undefined;
        groupByArr: string[];
      },
    ) => ReactNode;
    rowsGrouping?: Pick<ColumnRowsGrouping<RowType>, 'renderGroupCell'>;
  };
  expandAllBtn?: {
    /**
     * Функция для расчета состояния открытости всех раскрываемых строк. Функция должна быть чистой.
     * @returns boolean
     */
    expandedAll: (p: {
      /**
       * allRowsIds - уникальные идентификаторы всех строк (группировок и обычных)
       */
      allRowsIds: Set<string | number> | null;
      /**
       * shownRows - представленные прямо сейчас строки (группировки и обычные). Или видимые строки - видимые не во viewport-е, а которые должны быть показаны из-за раскрытий)
       */
      shownRows: readonly RowType[];
      expandedRowsIds: Set<string | number>;
    }) => boolean;
  };
  /**
   * \`groupButton\` - свойство для кастомизации кнопки с выпадающим списком
   */
  groupButton?: {
    getGroupedCount?: (props: {
      /**
       * высчитанное автоматически количество активных группировок.
       */
      currCount: number;
      /**
       * активные группировки.
       */
      groupedCols: string[];
      columns: {
        /**
         * \`visible\` - видимые в выпадающем списке колонки-группировки.
         */
        visible: string[];
        /**
         * \`hidden\` - невидимые  или не участвующие в группировке колонки
         *
         * (columnConfig.rowsGrouping=undefined ||
         *  columnConfig.rowsGrouping.groupByColumn=false).
         */
        hidden: string[];
      };
    }) => number;
    /**
     * \`defaultCustomItems\` - свойство для добавления ключей группировки, которых нет в таблице.
     *
     * \`DropdownItemOption.value\` - необходимо заполнять ключом, который существует в данных.
     */
    defaultCustomItems?: DropdownItemOption[];
    /**
     * \`onItemSelect\` - свойство для полного контроля над изменением группировки при выборе опций.
     *
     * \`DropdownItemOption.value\` - необходимо заполнять ключом, который существует в данных.
     */
    onItemSelect?: (props: {
      item: DropdownItemOption;
      setGroupedCols: React.Dispatch<React.SetStateAction<string[]>>;
      columns: {
        visible: string[];
        hidden: string[];
      };
    }) => void;
  };
  /**
   * \`groupRowReplaceTo\` - свойство для изменения данных сгруппированных строк. Может понадобиться в редких случаях.
   *
   * @param groupRow данные сгруппированной строки
   * @returns измененная группировка или строка без группировки — строка, которые заменит groupRow
   */
  groupRowReplaceTo?: (
    groupRow: GroupRow<RowType>,
  ) => GroupRow<RowType> | RowType;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};

export type RenderGroupCellProps<RowType, SummaryRowType = unknown> = {
  column: CalculatedColumn<RowType, SummaryRowType>;
  tabIndex: number;
  // TODO isExpanded: boolean;
  // TODO toggleGroup: () => void;
} & GroupRow<RowType>;
export type ColumnRowsGrouping<RowType, SummaryRowType = unknown> = {
  /**
   * @default true - при наличии ColumnConfig.rowsGrouping
   */
  groupByColumn?: boolean;
  /**
   * @default ColumnConfig.key
   */
  columnGroupLabel?: string;
  renderGroupCell?: (
    props: RenderGroupCellProps<RowType, SummaryRowType>,
  ) => ReactNode;
};`,"packages/ui-kit/src/components/Table/feature-rows-grouping/types.ts$$$GroupRow":`type GroupRow<RowType> = {
  readonly childRows: readonly RowType[];
  readonly childGroups: readonly RowType[] | Readonly<GroupRowsOrRows<RowType>>;
  groupKey: string;
  groupByKey: string;
  groupParents: string;
};`,"packages/ui-kit/src/components/Table/feature-rows-grouping/types.ts$$$ColumnRowsGrouping":`type ColumnRowsGrouping<RowType, SummaryRowType = unknown> = {
  /**
   * @default true - при наличии ColumnConfig.rowsGrouping
   */
  groupByColumn?: boolean;
  /**
   * @default ColumnConfig.key
   */
  columnGroupLabel?: string;
  renderGroupCell?: (
    props: RenderGroupCellProps<RowType, SummaryRowType>,
  ) => ReactNode;
};`,"packages/ui-kit/src/components/Table/feature-rows-grouping/types.ts$$$RenderGroupCellProps":`type RenderGroupCellProps<RowType, SummaryRowType = unknown> = {
  column: CalculatedColumn<RowType, SummaryRowType>;
  tabIndex: number;
  // TODO isExpanded: boolean;
  // TODO toggleGroup: () => void;
} & GroupRow<RowType>;`,"packages/ui-kit/src/components/Table/feature-searching/types.ts$$$SearchingProps":`type SearchingProps = {
  /**
   * Активация функционала поиска (обязательный параметр)
   */
  enabled: boolean;

  /**
   * Если true - поиск НЕ будет работать на фронте (ручное управление)
   * Полезно когда поисковая логика полностью управляется на бэкенде
   */
  manualSearching?: boolean;

  /**
   * Начальное значение поискового запроса
   */
  defaultSearchQuery?: string;

  /**
   * Видимость UI блока поиска
   */
  showSearchBlock?: boolean;

  /**
   * Состояние и сеттер для контролируемого режима
   * [текущее значение, функция установки значения]
   */
  searchQueryState?: [string, React.Dispatch<React.SetStateAction<string>>];

  /**
   * Обработчик изменения с debounce
   * Вызывается с задержкой после окончания ввода
   * @param value - текущее значение поискового запроса
   */
  onDebouncedChange?: (value: string) => void;

  /**
   * Мгновенный обработчик изменений
   * Вызывается при каждом изменении input
   * @param value - текущее значение поискового запроса
   */
  onChange?: (value: string) => void;

  /**
   * Задержка для debounce (в миллисекундах)
   * @default 300
   */
  debounceDelay?: number;

  /**
   * Активация debounce механизма
   * @default true
   */
  isDebounceActive?: boolean;

  /**
   * Дополнительные классы для контейнера поиска
   */
  searchClasses?: string;

  /**
   * Placeholder для поискового input
   * @default "Поиск"
   */
  placeholder?: string;

  /**
   * DOM метаданные для аналитики и онбординга
   */
  domMetadata?: DomMetadata;

  /**
   * Режим запуска поиска
   * - true: поиск запускается автоматически при вводе текста (по умолчанию)
   * - false: поиск запускается только по клику на иконку поиска или нажатию Enter
   */
  searchOnType?: boolean;

  /**
   * Конфигурация автокомплита для поиска.
   * При передаче поле поиска заменяется на Autocomplete с подсказками.
   */
  autocomplete?: SearchAutocompleteConfig;
};`,"packages/ui-kit/src/components/Table/feature-searching/types.ts$$$SearchAutocompleteConfig":`type SearchAutocompleteConfig = Pick<
  AutocompleteProps,
  | 'suggestions'
  | 'onSuggestionSelect'
  | 'threshold'
  | 'renderList'
  | 'renderListEnd'
  | 'beforeList'
  | 'listMaxHeight'
  | 'listWidth'
  | 'portal'
  | 'hasDivider'
  | 'beforeList'
  | 'afterList'
  | 'virtual'
  | 'hasDivider'
  | 'onScroll'
  | 'zIndex'
  | 'filter'
  | 'renderItem'
>;`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$SelectingRowConfig":`type SelectingRowConfig<
  RowType,
  RowIdType extends string | number = string | number,
> = {
  rowKeyGetter: (row: RowType) => RowIdType;
  /**
   * showDefault - состояние, отвечающее за то, видно ли по дефолту чекбоксы.
   */
  showDefault?: boolean;
  /**
   * showState - состояние, отвечающее за то, видны ли чекбоксы.
   */
  showState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * showInControl - состояние, отвечающее за то, добавлять ли выбор строк как фичу, которую можно скрывать и раскрывать в правой части контролблока.
   */
  showInControl?: boolean;
  /**
   * selectingRules - пропс, отвечающий за кастомизацию логики выбора строк.
   */
  selectingRules?: {
    /**
     * изменять ли скрытые строки при клике на чекбокс-ы родительских строк
     * @default true
     */
    // changeableOfRowWithoutCheckbox?: boolean;
    /**
     * изменять ли задизейбленные строки при клике на чекбокс-ы родительских строк
     * @default true
     */
    // changeableDisabledRow?: boolean;
    /**
     * levels - логика активации чекбоксов у строк с определенным уровнем вложенности.
     */
    levels?: number | 'all' | number[] | ((lvl: number) => boolean);
  };
  disableSummaryCheckboxInHeader?: boolean;
  hideSummaryCheckboxInHeader?: boolean;
  /**
   * hideSummaryCheckbox - в островке  массовых действий
   */
  hideSummaryCheckbox?: boolean;
  /**
   * summaryChecked - пропс, отвечающий за логику состояния checked у итогового чекбокса в левой части контролблока.
   */
  summaryChecked?: {
    checked: boolean | SummaryCheckedFunc<RowType, boolean>;
    indeterminate:
      | boolean
      | SummaryCheckedFunc<RowType, boolean, { checkedAll: boolean }>;
    getCountOfChecked: SummaryCheckedFunc<RowType, number>;
    onChange: SummaryCheckedFunc<
      RowType,
      void,
      {
        checkedAll: boolean;
        clearButtonClicked?: boolean;
        setSelectedRowsIds: React.Dispatch<
          React.SetStateAction<ReadonlySet<string | number>>
        >;
      }
    >;
  };

  /**
   * summaryCheckedUncontrolled - пропс отвечающий за колбеки в неконтролируемом режиме
   */
  summaryCheckedUncontrolled?: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };

  /**
   * rowShowCheckbox - пропс, отвечающий за то, будет ли у конкретной строки отрендерен чекбокс.
   */
  rowShowCheckbox?: RowShowCheckbox<RowType>;
  /**
   * rowCheckboxDisabled - пропс, отвечающий за то, будет ли у конкретной строки чекбокс задизейблен.
   */
  rowCheckboxDisabled?: RowCheckboxDisabled<RowType>;

  /**
   * Функция для переопределения checked, indeterminate для каждой строки.
   * Что будет возвращено функцией в объекте, то будет переопределено.
   */
  rowGetStates?: (
    p: RowGetStatesProps<RowType, RowIdType>,
  ) => RowGetStatesReturnType<RowType, RowIdType> | null;

  groupedRow?: {
    /**
     * Функция для переопределения checked, indeterminate, showCheckbox, checkboxDisabled для группированных строк.
     * Что будет возвращено функцией в объекте, то будет переопределено.
     */
    getStates: (p: {
      checkedCalculated: boolean;
      indeterminateCalculated: boolean;
      row: GroupRow<RowType>;
      selectedRows: ReadonlySet<string | number>;
      selectedChildCount: number;
      childCount: number;
    }) => {
      checked?: boolean | null;
      indeterminate?: boolean | null;
      showCheckbox?: boolean | null;
      checkboxDisabled?: boolean | null;
    } | null;
    onChange?: (p: {
      row: GroupRow<RowType>;

      setSelectedRows: React.Dispatch<
        React.SetStateAction<ReadonlySet<string | number>>
      >;
      checked: boolean;
      indeterminate: boolean;
      checkboxDisabled: boolean;
      showCheckbox: boolean;
      defaultSetter: () => void;
    }) => void;
  };
};`,"packages/ui-kit/src/components/Table/feature-select-row/types.ts$$$ChildrenInfo":`type ChildrenInfo<RowType, RowIdType> = {
  /**
   * все дочерние строки
   */
  all: RowType[];
  /**
   * все дочерние строки, которые disabled
   */
  disabled: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled
   */
  notDisabled: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled и НЕ скрыты через rowShowCheckbox
   */
  notDisabledAndNotHidden: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled и НЕ скрыты через rowShowCheckbox все выбраны
   */
  notDisabledAndNotHiddenAreSelected: boolean;
  /**
   * все дочерние строки, которые скрыты через rowShowCheckbox
   */
  hidden: RowIdType[];
  /**
   * все дочерние строки, которые НЕ скрыты через rowShowCheckbox
   */
  notHidden: RowIdType[];
  /**
   * все дочерние строки, которые selected (уже выбраны, у которых чекбокс проставлен)
   */
  selected: RowIdType[];
  /**
   * все дочерние строки, которые НЕ selected (не выбраны, у которых чекбокс НЕ проставлен)
   */
  notSelected: RowIdType[];
  /**
   * есть ли хоть одна дочерная строка, которая выбрана (у которой чекбокс проставлен)
   */
  someChildrenIsSelected: boolean;
};`,"packages/ui-kit/src/components/Table/feature-select-row/types.ts$$$RowShowCheckbox":`type RowShowCheckbox<RowType> = (
  row: RowType,
  lvl?: number,
  parent?: RowType | null,
) => boolean;`,"packages/ui-kit/src/components/Table/feature-select-row/types.ts$$$RowCheckboxDisabled":`type RowCheckboxDisabled<RowType> = (
  row: RowType,
  lvl?: number,
  parent?: RowType | null,
) => boolean;`,"packages/ui-kit/src/components/Table/feature-select-row/types.ts$$$RowGetStatesProps":`type RowGetStatesProps<RowType, RowIdType> = {
  /**
   * просчитанное по умолчанию значение наличия чекбокса у строки
   */
  isHaveCheckboxCalculated: boolean;
  /**
   * просчитанное по умолчанию значение checked у строки
   */
  isRowSelectedCalculated: boolean;
  /**
   * просчитанное по умолчанию значение indeterminate у строки
   */
  isIndeterminateCalculated: boolean;
  /**
   * просчитанное по умолчанию значение disabled у строки
   */
  isRowSelectionDisabled: boolean;

  rowKeyGetter: RowKeyGetter<RowType, RowIdType>;
  row: RowType;
  /**
   * Все строки таблицы в плоском виде с информацией об уровне и родительской строке
   */
  flattenedRowsMap: Map<
    RowIdType,
    RowType & {
      level?: number;
      parent?: RowType | null | undefined;
    }
  >;
  /**
   * стейт всех выбранных строк (Set)
   */
  selectedRows: ReadonlySet<RowIdType>;
  /**
   * сеттер стейта всех выбранных строк
   */
  setSelectedRows: React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>;
  /**
   * уровень вложенности текущей строки
   */
  level: number;
  /**
   * родительская строка для текущей строки
   */
  parent: RowType | null;
  /**
   * хендлер для получения детальных данных о дочерних строках текущей строки
   */
  getRowChildrenInfo: () => ChildrenInfo<RowType, RowIdType>;
  rowShowCheckbox: RowShowCheckbox<RowType> | undefined;
  rowCheckboxDisabled: RowCheckboxDisabled<RowType> | undefined;
};`,"packages/ui-kit/src/components/Table/feature-select-row/types.ts$$$RowGetStatesReturnType":`type RowGetStatesReturnType<RowType, RowIdType> = {
  /**
   * состояние checked, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  checked?: boolean | null;
  /**
   * состояние indeterminate, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  indeterminate?: boolean | null;
  /**
   * состояние showCheckbox, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  showCheckbox?: boolean | null;
  /**
   * состояние checkboxDisabled, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  checkboxDisabled?: boolean | null;
  /**
   * onChange у чекбокса, который будет окончательным. Если не передан, то будет взят из расчетов по умолчанию
   */
  onChange?:
    | ((p: {
        allParentsMap: Map<RowIdType, RowType>;
        isRowInLevels: (row: RowType) => boolean;
        defaultSetter: () => void;
        getRowParentsInfo: () => {
          all: RowType[];
          getShouldBeSelectedInfo: (
            actualSelecteds: ReadonlySet<RowIdType>,
          ) => {
            shouldBeSelected: RowIdType[];
            shouldNotBeSelected: RowIdType[];
          };
        };
      }) => void)
    | null;
};`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$SidebarConfig":`type SidebarConfig = {
  /**
   * Включен ли sidebar. Отвечает только за UI. Не влияет на перерасчёт фичей.
   * @default true
   */
  enabled?: boolean;
  /**
   * Открыт ли sidebar при первом рендере (uncontrolled-режим).
   * Игнорируется, если передан openState.
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Внешний контроль открытия/закрытия sidebar.
   * Если передан — источник истины, defaultOpen игнорируется.
   */
  openState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * id вкладки, выбранной по умолчанию (актуально при открытом сайдбаре).
   * Если id не найден или у вкладки showInSidebar=false — используется первая доступная.
   */
  defaultActiveTabId?: string;
  /**
   * Внешний контроль активной вкладки (controlled-режим).
   * Если передан — источник истины, defaultActiveTabId игнорируется.
   */
  activeTabState?: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>,
  ];
  /**
   * Колбэк смены активной вкладки. Вызывается и в uncontrolled-режиме.
   * При закрытии сайдбара приходит null.
   */
  onActiveTabChange?: (tabId: string | null, tab?: SidebarTab) => void;
  /**
   * Кастомные табы
   */
  customTabs?: Array<
    Omit<SidebarTab, 'id'> & {
      id: Exclude<string, DefaultSidebarTabIds>;
    }
  >;
  /**
   * Порядок отображения кастомных вкладок
   */
  customTabsOrder?: Array<Exclude<string, DefaultSidebarTabIds>>;
  defaultTabs?: Array<
    | {
        id: 'filtering' | 'columns';
        label?: string;
        title?: string;
        /**
         * Метки для автоматизированного тестирования и аналитики
         * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
         */
        domMetadata?: DomMetadata;
        /**
         * Кастомный элемент справа от title в шапке сайдбара
         */
        titleRightSlot?: React.ReactNode;
      }
    | {
        id: 'tableSettings';
        label?: string;
        title?: string;
        /**
         * Метки для автоматизированного тестирования и аналитики
         * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
         */
        domMetadata?: DomMetadata;
        /**
         * Кастомный слот для вкладки tableSettings (рендерится после общих настроек)
         * Только дл id: 'tableSettings'
         */
        customGeneralSettingsSlot?: React.ReactNode;
        /**
         * Кастомный элемент справа от title в шапке сайдбара
         */
        titleRightSlot?: React.ReactNode;
      }
  >;
};`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$Comparator":`type Comparator<Row extends ObjectForExtending> = (
  a: Row,
  b: Row,
) => number;`,"packages/ui-kit/src/components/Table/feature-tree/types.ts$$$SubRows":`type SubRows<RowType, RowIdType> = {
  getSubRows: (row: RowType) => RowType[] | undefined;
  rowKeyGetter: (row: RowType) => RowIdType;
  expandedIdsState?: [
    Set<string | number>,
    (
      newV:
        | Set<string | number>
        | ((prev: Set<string | number>) => Set<string | number>),
    ) => void,
  ];
};`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$RenderSubRowCell":`type RenderSubRowCell<SubRowType extends ObjectForExtending> = (
  renderCellProps: RenderCellProps<SubRowType>,
  lvl: number,
) => ReactNode;`,"packages/ui-kit/src/components/Table/types/column-config.type.ts$$$RenderSubRowEditCell":`type RenderSubRowEditCell<SubRowType extends ObjectForExtending> = (
  renderCellProps: RenderEditCellProps<SubRowType>,
  lvl: number,
) => ReactNode;`,"packages/ui-kit/src/components/Table/types/table-config.type.ts$$$SummaryRowsConfig":`type SummaryRowsConfig = {
  showDefault: boolean;
  showInControl: boolean;
} & {
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/Table/types/data-grid.type.ts$$$DataGridPropsDefault":`interface DataGridPropsDefault<R, SR = unknown, K extends Key = Key>
  extends SharedDivProps {
  /**
   * Grid and data Props
   */
  /** An array of objects representing each column on the grid */
  columns: readonly ColumnOrColumnGroup<R, SR>[];
  /** A function called for each rendered row that should return a plain key/value pair object */
  rows: readonly R[];
  /**
   * Rows to be pinned at the top of the rows view for summary, the vertical scroll bar will not scroll these rows.
   */
  topSummaryRows?: Maybe<readonly SR[]>;
  /**
   * Rows to be pinned at the bottom of the rows view for summary, the vertical scroll bar will not scroll these rows.
   */
  bottomSummaryRows?: Maybe<readonly SR[]>;
  /** The getter should return a unique key for each row */
  rowKeyGetter?: Maybe<(row: R) => K>;
  onRowsChange?: Maybe<(rows: R[], data: RowsChangeData<R, SR>) => void>;
  /**
   * Dimensions props
   */
  /**
   * The height of each row in pixels
   * @default 35
   */
  rowHeight?: Maybe<number | ((row: R) => number)>;
  /**
   * The height of the header row in pixels
   * @default 35
   */
  headerRowHeight?: Maybe<number>;
  /**
   * The height of each summary row in pixels
   * @default 35
   */
  summaryRowHeight?: Maybe<number>;
  /**
   * Feature props
   */
  /** Set of selected row keys */
  selectedRows?: Maybe<ReadonlySet<K>>;
  /** Function called whenever row selection is changed */
  onSelectedRowsChange?: Maybe<(selectedRows: Set<K>) => void>;
  /** Used for multi column sorting */
  sortColumns?: Maybe<readonly SortColumn[]>;
  onSortColumnsChange?: Maybe<(sortColumns: SortColumn[]) => void>;
  defaultColumnOptions?: Maybe<DefaultColumnOptions<R, SR>>;
  onFill?: Maybe<(event: FillEvent<R>) => R>;
  onCopy?: Maybe<(event: CopyEvent<R>) => void>;
  onPaste?: Maybe<(event: PasteEvent<R>) => R>;
  /**
   * Event props
   */
  /** Function called whenever a cell is clicked */
  onCellClick?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  /** Function called whenever a cell is double clicked */
  onCellDoubleClick?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  /** Function called whenever a cell is right clicked */
  onCellContextMenu?: Maybe<
    (args: CellClickArgs<R, SR>, event: CellMouseEvent) => void
  >;
  onCellKeyDown?: Maybe<
    (args: CellKeyDownArgs<R, SR>, event: CellKeyboardEvent) => void
  >;
  /** Function called whenever cell selection is changed */
  onSelectedCellChange?: Maybe<(args: CellSelectArgs<R, SR>) => void>;
  /** Called when the grid is scrolled */
  onScroll?: Maybe<(event: React.UIEvent<HTMLDivElement>) => void>;
  /** Called when a column is resized */
  onColumnResize?: Maybe<(idx: number, width: number) => void>;
  /** Called when a column is reordered */
  onColumnsReorder?: Maybe<
    (sourceColumnKey: string, targetColumnKey: string) => void
  >;
  /**
   * Toggles and modes
   */
  /** @default true */
  enableVirtualization?: Maybe<boolean>;
  /**
   * Miscellaneous
   */
  renderers?: Maybe<Renderers<R, SR>>;
  rowClass?: Maybe<(row: R, rowIdx: number) => Maybe<string>>;
  /** @default 'ltr' */
  direction?: Maybe<Direction>;
  'data-testid'?: Maybe<string>;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasBadge.ts$$$CanvasBadgeOptions":`interface CanvasBadgeOptions {
  view?: BadgeView;
  size?: BadgeSize;
  transparent?: boolean;
  clear?: boolean;
  leftIcon?: ButtonIcon;
  rightIcon?: ButtonIcon;
  pilled?: boolean;
  theme?: Theme;
  /** Кастомный цвет текста (аналог customColor в базовом Badge из sdds-finai).
   * Принимает конкретные значения цвета: hex (#0B7ECB), rgb(), rgba().
   * CSS-переменные (var(--...)) не поддерживаются — Canvas API работает только с конкретными цветами. */
  customColor?: string;
  /** Кастомный цвет фона (аналог customBackgroundColor в базовом Badge из sdds-finai).
   * Принимает конкретные значения цвета: hex (#0B7ECB), rgb(), rgba().
   * CSS-переменные (var(--...)) не поддерживаются — Canvas API работает только с конкретными цветами. */
  customBackgroundColor?: string;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasBadge.ts$$$BadgeView":`type BadgeView =
  | 'default'
  | 'accent'
  | 'positive'
  | 'warning'
  | 'negative'
  | 'dark'
  | 'light';`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasBadge.ts$$$BadgeSize":"type BadgeSize = 'xs' | 's' | 'm' | 'l';","packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasButton.ts$$$CanvasButtonOptions":`interface CanvasButtonOptions {
  /** @deprecated Use \`view\` instead */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  size?: ButtonSize;
  /** Left icon (SVG string or image) */
  leftIcon?: ButtonIcon;
  /** Right icon (SVG string or image) */
  rightIcon?: ButtonIcon;
  disabled?: boolean;
  onClick?: (event: CanvasEvent) => void;
  theme?: Theme;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/cells/buttons/types.ts$$$ButtonView":`type ButtonView =
  | 'default'
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'clear'
  | 'success'
  | 'warning'
  | 'critical'
  | 'dark'
  | 'black'
  | 'white';`,"packages/ui-kit/src/components/TableGlide/lib/canvas/cells/buttons/types.ts$$$ButtonSize":"type ButtonSize = 'xs' | 's' | 'm' | 'l';","packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasCheckbox.ts$$$CanvasCheckboxOptions":`interface CanvasCheckboxOptions {
  /** @deprecated Use \`buttonSize\` with ButtonSize type instead */
  size?: number | 'auto';
  theme?: GlideThemeForRender;

  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  buttonSize?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: CanvasEvent) => void;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/components/index.tsx$$$ContainerProps":`interface ContainerProps
  extends CanvasInteractionProps,
    CanvasLayerProps,
    Omit<FlexBoxOptions, 'columnGap' | 'rowGap'> {
  children?: ReactNode;
  style?: Partial<CanvasFlexStyle>;
  backgroundColor?: string;
  id?: string;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  portalHoverEnabled?: boolean;
  position?: 'relative' | 'absolute';
  left?: PositionValue;
  top?: PositionValue;
  right?: PositionValue;
  bottom?: PositionValue;
  /** Конфиг тултипа при hover: строка (текст) или объект с text и опциональными пропсами Tooltip */
  tooltip?: CanvasNodeTooltipConfig;
  onClick?: (event: CanvasEvent<CanvasContainer>) => void;
  onMouseEnter?: (event: CanvasEvent<CanvasContainer>) => void;
  onMouseLeave?: (event: CanvasEvent<CanvasContainer>) => void;
  onMouseDown?: (event: CanvasEvent<CanvasContainer>) => void;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasEmbedIconButton.ts$$$CanvasEmbedIconButtonOptions":`interface CanvasEmbedIconButtonOptions {
  /** @deprecated Use \`buttonSize\` with EmbedIconButtonSize type instead */
  size?: number | 'auto';
  /** @deprecated Use \`view\` instead */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  buttonSize?: EmbedIconButtonSize;
  /** Переопределяет размер квадратной кнопки (px), приоритет над SIZE_CONFIG */
  overrideSquareSize?: number;
  /** Переопределяет размер иконки внутри кнопки (px), приоритет над SIZE_CONFIG */
  overrideIconSize?: number;
  /** Переопределяет цвет иконки в покое (иначе — цвет из view-палитры) */
  iconColor?: string;
  /** Переопределяет цвет иконки при hover (иначе — iconColor override или view) */
  iconColorHovered?: string;
  disabled?: boolean;
  onClick?: (event: CanvasEvent) => void;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasIcon.ts$$$CanvasIconOptions":`interface CanvasIconOptions {
  size?: number;
  color?: string;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasIconButton.ts$$$CanvasIconButtonOptions":`interface CanvasIconButtonOptions {
  /** @deprecated Use \`buttonSize\` with ButtonSize type instead */
  size?: number | 'auto';
  /** @deprecated Use \`view\` instead */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Button view style based on sdds_finai__light theme */
  view?: ButtonView;
  /** Button size */
  buttonSize?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: CanvasEvent) => void;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasLink.ts$$$CanvasLinkOptions":`interface CanvasLinkOptions extends CanvasTextOptions {
  href?: string;
  target?: string;
  rel?: string;
  view?: LinkView;
  disabled?: boolean;
  theme?: Theme;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasLink.ts$$$LinkView":"type LinkView = Extract<LinkAllProps['view'], string>;","packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasSkeleton.ts$$$CanvasSkeletonOptions":`interface CanvasSkeletonOptions {
  /**
   * Радиус скругления углов.
   * Ключи: 0, 8, 12, 14, 16, 18, 20, 24, 28, 32, 250
   * Или CSS-строки: "8px", "1rem"
   * По умолчанию: 16 (= 16px)
   */
  roundness?: Roundness | string;

  /** CSS linear-gradient для скелетона */
  customGradientColor?: string;

  /** Более контрастный градиент */
  lighter?: boolean;

  /** Включить shimmer-анимацию (по умолчанию: true) */
  animated?: boolean;

  /** Длительность цикла анимации в мс (по умолчанию: 4000) */
  shimmerDuration?: number;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasSkeleton.ts$$$Roundness":"type Roundness = keyof typeof ROUNDNESS_MAP;","packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasSkeleton.ts$$$ROUNDNESS_MAP":`const ROUNDNESS_MAP = {
  250: 15.625,
  32: 2,
  28: 1.75,
  24: 1.5,
  20: 1.25,
  18: 1.125,
  16: 1,
  14: 0.875,
  12: 0.75,
  8: 0.5,
  0: 0,
} as const;`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasText.ts$$$CanvasTextOptions":`interface CanvasTextOptions {
  font?: string;
  fontSize?: number;
  lineHeightPx?: number;
  color?: string;
  wordWrap?: boolean;
  lineHeight?: number;
  overflow?: CanvasTextOverflowMode;
  textOverflow?: CanvasTextOverflow;
  ellipsis?: string;
  maxLines?: number;
  autoTooltip?: CanvasTextAutoTooltip;
}`,"packages/ui-kit/src/components/TableGlide/lib/canvas/primitives/CanvasText.ts$$$CanvasTextAutoTooltip":`type CanvasTextAutoTooltip =
  | boolean
  | (CanvasNodeTooltipProps & {
      /** @default true — скрыть можно через false */
      enabled?: boolean;
      /**
       * Переопределение/трансформация текста тултипа. По умолчанию — собственный
       * текст ноды. Вернуть \`null\` — не показывать.
       */
      text?: string | ((fullText: string) => string | null);
      mouseEnterDelay?: number;
      mouseLeaveDelay?: number;
    });`,"packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts$$$RenderCellPreview":`type RenderCellPreview<
  Row extends ObjectForExtending,
  SummRow = unknown,
  CustomCtxs extends ObjectForExtending = {},
> =
  | 'none'
  | 'cellEditorAsPreview'
  | ((cellInfo: PreviewCellInfo<Row, SummRow, CustomCtxs>) => ReactNode);`,"packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts$$$PreviewCellInfo":`type PreviewCellInfo<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = ObjectForExtending,
> = Omit<PreviewCellInfoGlideInstance<R, SR, CustomCtxs>, 'column'> & {
  column: ColumnConfig<R, SR, CustomCtxs>;
};`,"packages/ui-kit/src/components/TableGlide/types.ts$$$CellsSelectionMode":`type CellsSelectionMode =
  | 'cell'
  | 'range-cell'
  | 'multi-range-cell'
  | 'disabled';`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$CellsSelectionConfig":`type CellsSelectionConfig = {
  /**
   * Режим фактического выделения ячеек (нативный glide selection). По нему
   * работают copy/paste, рамка, fill-handle и затемнение шапки/нумерации.
   * @default "range-cell"
   */
  mode?: CellsSelectionMode;
  /**
   * Выделение колонок по клику на шапку. Ctrl/Cmd — добавить/убрать колонку,
   * Shift — диапазон колонок. Клик по иконкам сортировки/фильтрации в шапке
   * выделение НЕ вызывает. Поддерживает copy/paste по выделенным колонкам.
   * @default true
   */
  enableColumnSelection?: boolean;
  /**
   * Выделение строк по клику/драгу на колонке нумерации (\`rowMarkers\`).
   * Ctrl/Cmd — несмежный выбор отдельных строк, драг — смежный диапазон.
   * Поддерживает copy/paste по выделенным строкам. Требует включённой колонки
   * нумерации (\`rowMarkers\`). При \`false\` клик по нумерации ничего не выделяет.
   * @default true
   */
  enableRowSelection?: boolean;
  /**
   * Выделение всей таблицы кликом по «нулевой» ячейке — шапке колонки нумерации
   * (левый верхний угол). Выделяет все строки данных по всем колонкам одним
   * диапазоном; поддерживает copy/paste. Требует включённой колонки нумерации
   * (\`rowMarkers\`) и активного \`mode\` (≠ \`disabled\`).
   * @default true
   */
  enableSelectAll?: boolean;
  /**
   * Внешний (controlled) контроль НАТИВНОГО выделения (ячейки/диапазон/смежные
   * строки и колонки). \`state\` — кортеж \`[value, setter]\` как у \`selecting.state\`.
   * Сброс: \`setter({ current: undefined, rows: empty, columns: empty })\`.
   * Несмежный Ctrl-выбор колонок/строк (own-state) сюда не входит — он внутренний.
   */
  state?: [GridSelection, React.Dispatch<React.SetStateAction<GridSelection>>];
};`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$TableCollapseConfig":`type TableCollapseConfig = {
  /**
   * Обязательный флаг для активации
   * @default false
   */
  enableCollapse?: boolean;
  /**
   * Начальное состояние (опционально)
   *  @default false
   */
  defaultCollapsed?: boolean;
  /**
   * Текст для кнопки при раскрытом состоянии (опционально)
   * @default "Свернуть"
   */
  collapseText?: string;
  /**
   * Текст для кнопки при закрытом состоянии (опционально)
   * @default "Развернуть"
   */
  expandText?: string;
  /**
   * callback при изменении состояния
   */
  onToggleCollapse?: (isCollapsed: boolean) => void;
  /** Внешнее состояние [isCollapsed, setIsCollapsed] */
  collapsedState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
  /**
   * Размещение кнопки коллапсинга / заголовка
   * - 'inside' - внутри контрол-блока (по умолчанию, участвует в компрессии)
   * - 'above' - в отдельном блоке сверху контрол-блока (не участвует в компрессии)
   * @default 'inside'
   */
  collapseButtonPlacement?: 'inside' | 'above';
  /**
   * Кастомный рендер правого слота кнопки коллапсинга, который используется при collapseButtonPlacement='above'
   */
  collapseButtonAboveRightSlot?: React.ReactNode;
  /**
   * Текст заголовка таблицы. Только строка, оформляется нашей типографикой.
   * Рендерится в блоке above или inline в зависимости от collapseButtonPlacement.
   * При 'above' — показывается вместе с кнопкой коллапсинга (или без неё если enableCollapse=false).
   * При 'inline' — показывается внутри контрол-блока слева.
   * Для произвольной разметки заголовка используйте titleRender.
   */
  titleText?: string;
  /**
   * Полностью кастомный рендер заголовка (заменяет titleText).
   */
  titleRender?: React.ReactNode;
};`,"packages/ui-kit/src/components/TableCanvas/feature-column-control/types.ts$$$ColumnsControlConfig":`type ColumnsControlConfig = {
  enable: boolean;
  /**
   * @default enable
   */
  hiding?: boolean;
  /**
   * @default enable
   */
  pinning?: boolean;
  /**
   * @default enable
   */
  reorderingAside?: boolean;
  /**
   * reorderingHeader  - активация изменения порядка колонок  посредством перемещения шапок колонок таблицы
   */
  /**
   * @default enable
   */
  reorderingHeader?: boolean;
  onReorderingHeader?: (params: {
    newOrder: string[];
    sourceKey: string;
    targetKey: string;
  }) => void;

  columnsLabel?: Record<
    string,
    ReactNode | ((isHidden: boolean, isPinned: boolean) => ReactNode)
  >;

  orderDefault?: string[];

  pinnedDefault?: string[];
  disablePinning?: string[];

  hiddenDefault?: string[];
  disableHiding?: string[];

  onConfirm?: (
    params: {
      pinned: string[];
      order: string[];
      hidden: string[];
      changed: { pinned?: 'pinned'; order?: 'order'; hidden?: 'hidden' };
    },
    setters: {
      setColumnsOrder: (value: React.SetStateAction<string[]>) => void;
      setPinnedCols: (value: React.SetStateAction<string[]>) => void;
      setHiddenCols: (value: React.SetStateAction<string[]>) => void;
    },
  ) => void;
  /**
   * DomMetadata для кнопок закрепления столбцов
   */
  pinDomMetadata?: DomMetadata;
  /**
   * DomMetadata для свитчеров скрытия/показа столбцов
   */
  switchDomMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts$$$PinningMenuConfig":`type PinningMenuConfig = {
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
   * DomMetadata левой кнопки-иконки закрепления. Её \`dataAttributes\`
   * навешиваются на кнопку-иконку (data-атрибуты для e2e-тестов, аналитики и
   * онбординга — поиск элемента в DOM). Пример:
   * \`{ dataAttributes: { 'data-testid': 'pinning-icon' } }\`.
   */
  iconDomMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts$$$PinningMenuItem":`type PinningMenuItem = {
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
};`,"packages/ui-kit/src/components/TableCanvas/types/columns-grouping.type.ts$$$ColumnsGroupingConfig":`type ColumnsGroupingConfig = {
  /**
   * Объединять пустые ячейки шапки: колонка без группы (конечная, без вложенных
   * подколонок) растягивается вверх на всю высоту шапки, а «мелкая» группа (без более
   * глубоких подгрупп) — вниз. Убирает пустые полосы в многоуровневой шапке.
   * Включает/выключает поведение сразу для всей таблицы.
   * @default true
   */
  squashEmptyCells?: boolean;
  /**
   * Дефолт выравнивания текста в объединённых ячейках шапки. Влияет только на
   * объединённые ячейки, обычные (не объединённые) ячейки не затрагивает. Точечно
   * перекрывается на колонке или группе через их собственный \`squashedHeaderAlign\`.
   */
  squashedHeaderAlign?: HeaderAlignment;
};`,"packages/ui-kit/src/components/TableCanvas/types/columns-grouping.type.ts$$$HeaderAlignment":`type HeaderAlignment = {
  /** По горизонтали. @default 'left' */
  horizontal?: 'left' | 'center' | 'right';
  /** По вертикали. @default 'center' */
  vertical?: 'top' | 'center' | 'bottom';
};`,"packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts$$$ColumnGroupConfig":`interface ColumnGroupConfig<
  R extends ObjectForExtending,
  SR = unknown,
> {
  /** Уникальный ключ группы. */
  readonly key: string;
  /** Название группы, отображается в ячейке шапки. Строка или JSX. */
  readonly name: string | ReactElement;
  // readonly headerCellClass?: Maybe<string>;
  /** Вложенные колонки и подгруппы этой группы. */
  readonly children: readonly ColumnOrColumnGroupConfig<R, SR>[];
  /** Выравнивание текста в объединённой шапке группы. Действует при squashEmptyCells. */
  readonly squashedHeaderAlign?: HeaderAlignment;
}`,"packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts$$$ColumnOrColumnGroupConfig":`type ColumnOrColumnGroupConfig<
  R extends ObjectForExtending,
  SR = unknown,
> = ColumnConfig<R, SR> | ColumnGroupConfig<R, SR>;`,"packages/ui-kit/src/components/TableCanvas/TableGlideInstance/type.ts$$$ContextMenuDropdownProps":`type ContextMenuDropdownProps = Omit<
  DropdownProps,
  | 'children'
  | 'items'
  | 'placement'
  | 'closeOnOverlayClick'
  | 'portal'
  | 'openByRightClick'
  | 'onItemClick'
  | 'hoverIndex'
  | 'alwaysOpened'
  | 'trigger'
  | 'hasArrow'
  | 'onItemSelect'
>;`,"packages/ui-kit/src/components/TableCanvas/TableGlideInstance/type.ts$$$HeaderContextMenuDropdownProps":`type HeaderContextMenuDropdownProps<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
  CustomCtxs extends ObjectForExtending = ObjectForExtending,
> = ContextMenuDropdownProps & {
  /** Тип конфигурации (всегда 'dropdown') */
  type: 'dropdown';
  /**
   * Функция, возвращающая массив пунктов меню для конкретного заголовка.
   * В асинхронном режиме (задан onOpen) перечитывается реактивно, пока меню
   * открыто: верните скелетон-пункты во время загрузки и реальные — после.
   */
  getDropdownItems: (
    params: TableInfoBase<RowType, SummaryRowType, CustomCtxs>,
  ) => DropdownProps['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Если getDropdownItems
   * вернул пусто, но onOpen задан — меню всё равно открывается, а потребитель
   * здесь стартует запрос и хранит своё состояние (loading/error/items).
   */
  onOpen?: (params: TableInfoBase<RowType, SummaryRowType, CustomCtxs>) => void;
  /** Обработчик выбора пункта меню */
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: TableInfoBase<RowType, SummaryRowType, CustomCtxs>,
    event?: React.SyntheticEvent,
  ) => void;
};`,"packages/ui-kit/src/components/TableCanvas/TableGlideInstance/type.ts$$$CellContextMenuDropdownProps":`type CellContextMenuDropdownProps<
  RowType extends ObjectForExtending,
  SummaryRowType,
  CustomCtxs extends ObjectForExtending = ObjectForExtending,
> = ContextMenuDropdownProps & {
  /** Тип конфигурации (всегда 'dropdown') */
  type: 'dropdown';
  /**
   * Функция, возвращающая массив пунктов меню для конкретной ячейки.
   * В асинхронном режиме (задан onOpen) перечитывается реактивно, пока меню
   * открыто: верните скелетон-пункты во время загрузки и реальные — после.
   */
  getDropdownItems: (
    params: TableInfoWithRow<RowType, SummaryRowType, CustomCtxs>,
  ) => DropdownProps['items'];
  /**
   * Колбэк открытия меню для асинхронной подгрузки. Если getDropdownItems
   * вернул пусто, но onOpen задан — меню всё равно открывается, а потребитель
   * здесь стартует запрос и хранит своё состояние (loading/error/items).
   */
  onOpen?: (
    params: TableInfoWithRow<RowType, SummaryRowType, CustomCtxs>,
  ) => void;
  /** Обработчик выбора пункта меню */
  onItemSelect?: (
    item: ContextMenuDropdownItem,
    context: TableInfoWithRow<RowType, SummaryRowType, CustomCtxs>,
    event?: React.SyntheticEvent,
  ) => void;
};`,"packages/ui-kit/src/components/TableCanvas/TableGlideInstance/type.ts$$$DropdownContextMenu":`type DropdownContextMenu = {
  type: 'Dropdown';
  getDropdownItems: (params: { columnLabel: string }) => DropdownProps['items'];
} & ContextMenuDropdownProps;`,"packages/ui-kit/src/components/TableCanvas/TableGlideInstance/type.ts$$$ContextMenuDropdownItem":`type ContextMenuDropdownItem = NonNullable<
  DropdownProps['items']
>[number];`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$ControlBlockConfig":`type ControlBlockConfig = {
  /**
   * show - наличие controlBlock-а
   * @default true
   */
  show?: boolean;
  /**
   * Размер controlBlock и его элементов (кнопки, иконки, поиск, отступы).
   * 'm' и 's' — стандартные стили, 'xs' — компактный режим.
   * Не влияет на customFeatures и кастомные слоты — они контролируются разработчиком.
   * @default 'm'
   */
  size?: ControlBlockSize;
  /**
   * @deprecated Используйте кастомные кнопки через rightSideInner или customFeatures.
   * leftSideInner - пропс для добавления кнопок в левую часть контролблока.
   * Продолжает работать для обратной совместимости.
   */
  leftSideInner?: ControlBlockButtonProps[];
  /**
   * rightSideInner - пропс для добавления кнопок в правую часть контролблока
   */
  rightSideInner?: ControlBlockButtonProps[];
  /**
   * customFeatures - пропс для добавления кастомных фичей (кнопки-иконки)
   */
  customFeatures?: FeatureItem[];
  /**
   * pinningMenu - нативная фича закрепления столбцов (SplitIconButton с
   * дропдауном) в правой зоне иконок. Появляется, когда активировано
   * закрепление колонок (columnsControl.pinning). Продукт может донастроить
   * и дополнить пункты меню (см. PinningMenuConfig).
   */
  pinningMenu?: PinningMenuConfig;
  /**
   * Пропсы для компонента dropdown в котором будут скрыты левые фичи при адаптивной компрессии
   */
  leftSideDropdownProps?: TableDropdownConfigProps;
  /**
   * Пропсы для компонента dropdown в котором будут скрыты правые фичи при адаптивной компрессии
   */
  rightSideDropdownProps?: TableDropdownConfigProps;
  /**
   * Активна ли фича компрессии (сжатие ToolsMenu при адаптиве)
   * @default true
   */
  enableAdaptiveCompress?: boolean;
  /**
   * Панель массовых действий
   */
  massActionPanel?: {
    /**
     * Кнопки панели. Размеры кнопок/дропдаунов панель подбирает сама (по \`size\` панели и компактности) —
     * передавать \`size\` кнопкам не нужно. Если \`size\` на кнопке всё же задан — он используется как есть.
     */
    buttons: MassActionButtonProps[];
    /**
     * Пропсы для Dropdown, в который сжались кнопки
     */
    collapsedDropdownProps?: TableDropdownConfigProps;
    /**
     * Отступ панели снизу от контейнера (px)
     * @default 24
     */
    bottom?: number;
    /**
     * Управление отображением панели массовых действий.
     * - \`undefined\` (по умолчанию) — стандартное поведение (показывается при selecting + выбранных строках)
     * - \`false\` — панель не рендерится, разработчик управляет действиями самостоятельно
     * - \`true\` — панель показывается всегда, даже без активного selecting и выбранных строк
     */
    show?: boolean;
    /**
     * Размерная сетка панели внутри таблицы: \`m\`/\`s\` — обычный размер, \`xs\` — уменьшенный (кнопки \`xxs\`, «ещё» \`xs\`, счётчик Body XS).
     * Viewport-логика (1280) в таблице не используется.
     * @default 's'
     */
    size?: MassActionsSize;
  };
};`,"packages/ui-kit/src/components/TableCanvas/widgets/control-block/control-block-button.types.tsx$$$ButtonProps":"type ButtonProps = ComponentProps<typeof Button>;","packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts$$$FeatureItem":`type FeatureItemWithIcon = FeatureDetailsBase & {
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
} & DataAttributes;`,"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts$$$FeatureDetails":`type FeatureDetailsBase = {
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
};`,"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts$$$FeatureIconRender":`type FeatureIconRender =
  | ReactNode
  | ((ctx: DropdownRenderCtx) => ReactNode);`,"packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts$$$DropdownRenderCtx":`type DropdownRenderCtx = {
  /** Текущая высота строк таблицы (big | medium | small) */
  rowSize: SIZE;
  /** true - иконка рисуется в overflow дропдауне, false - в контрл-блоке */
  isInDropdown: boolean;
};`,"packages\\\\ui-kit\\\\src\\\\components\\\\TableCanvas\\\\widgets\\\\control-block\\\\control-block-button.types.tsx$$$LinkButtonProps":"type LinkButtonProps = ComponentProps<typeof LinkButton>;","packages\\\\ui-kit\\\\src\\\\components\\\\TableCanvas\\\\widgets\\\\control-block\\\\control-block-button.types.tsx$$$LinkButtonView":"type LinkButtonView = LinkButtonProps['view'];","packages\\\\ui-kit\\\\src\\\\components\\\\TableCanvas\\\\widgets\\\\control-block\\\\control-block-button.types.tsx$$$ControlBlockButtonProps":`type ControlBlockButtonProps = DataAttributes &
  Omit<Partial<ButtonProps>, DefPropsKeys> & {
    /**
     * @deprecated Link-views (\`linkDefault\`, \`linkAccent\`, \`linkSecondary\` и т.д.) устарели.
     * Все кнопки controlBlock теперь рендерятся как обычные (серые) кнопки.
     * Link-views автоматически маппятся в стандартный view при рендеринге.
     */
    view?: LinkView<LinkButtonView> | ButtonProps['view'];
    dropdown?: TableDropdownProps;
    isTargetAction?: boolean;
    /** Не рисовать divider справа от кнопки */
    skipRightDivider?: boolean;
    /** Текст тултипа (показывается при скрытом лейбле) */
    tooltipText?: string;
    /**
     * Не применять flip-анимацию (scaleY) к contentRight при открытии
     * дропдауна. Кейс "Группировать": справа счётчик, а не шеврон,
     * зеркалить его не нужно.
     */
    disableContentRightFlip?: boolean;
    /**
     * Кастомный рендер иконки кнопки, когда она уезжает в overflow дропдаун
     * при компрессии. Получает контекст (rowSize, isInDropdown) и позволяет
     * подобрать размер иконки под дропдаун. Если не задан, в дропдауне
     * используется обычный contentLeft кнопки как есть.
     */
    dropdownIconRender?: (ctx: DropdownRenderCtx) => ReactNode;
  };`,"packages/ui-kit/src/components/MassActions/types.ts$$$MassActionsButtonPropsLinkButton":`type MassActionsButtonPropsLinkButton = DataAttributes &
  Partial<LinkButtonProps> & {
    type?: 'linkButton';
    view?: LinkView<LinkButtonView>;
    /**
     * Dropdown для кнопки.
     * Используется универсальный DropdownProps, который работает и с обычным Dropdown, и с TableDropdown
     */
    dropdown?: DropdownProps & { $css?: CSSObject };
    disabledTooltipProps?: TooltipProps;
  };`,"packages/ui-kit/src/components/TableCanvas/components/SplitIconButton/SplitIconButton.types.ts$$$SplitIconButtonProps":`type SplitIconButtonProps = {
  /** Иконка основной (левой) кнопки-действия */
  icon: ReactNode;
  /** Клик по основной кнопке-иконке */
  onIconClick?: () => void;
  /** Tooltip на левой кнопке-иконке (если задан — оборачиваем в TableTooltip). */
  iconTooltip?: ReactNode;
  /**
   * Полная замена иконки шеврона своим узлом. Обычно не нужна — шеврон наш
   * (IconChevronDown), а размер задаётся через chevronSize. Если задан, имеет
   * приоритет над chevronSize.
   */
  chevronIcon?: ReactNode;
  /** Размер нашей иконки-шеврона. Игнорируется, если задан chevronIcon. */
  chevronSize?: 'xs' | 's' | 'm';
  /** Размер обеих кнопок (EmbedIconButton) */
  size?: ComponentProps<typeof EmbedIconButton>['size'];
  /**
   * Пункты дропдауна. Если заданы — кнопка-шеврон открывает TableDropdown.
   * Если не заданы — шеврон работает как обычная кнопка (onChevronClick).
   */
  items?: TableDropdownProps['items'];
  /** Выбор пункта дропдауна */
  onItemSelect?: TableDropdownProps['onItemSelect'];
  /** Клик по шеврону в режиме без дропдауна (items не заданы) */
  onChevronClick?: () => void;
  /** Колбэк открытия/закрытия дропдауна */
  onToggle?: (isOpen: boolean) => void;
  /** Доп. конфиг TableDropdown (placement, listWidth и т.п.) */
  dropdownProps?: TableDropdownConfigProps;
  /** data-атрибуты на контейнер */
  domMetadata?: DataAttributes;
  /** data-атрибуты на основную кнопку */
  iconDomMetadata?: DataAttributes;
  /** data-атрибуты на кнопку-шеврон */
  chevronDomMetadata?: DataAttributes;
};`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$CellTransferConfig":`type CellTransferConfig = {
  /**
   * Явное включение/выключение всей фичи.
   * По умолчанию copy работает всегда, а paste и fill handle следуют
   * за \`editModeEnabled\`. При \`false\` отключается всё.
   */
  enabled?: boolean;
  /**
   * Переопределение хоткеев.
   * Можно передать один \`HotkeyConfig\` или массив альтернативных комбинаций.
   * По умолчанию: copy = Ctrl+C / Cmd+C, paste = Ctrl+V / Cmd+V.
   */
  hotkeys?: {
    /** Хоткей(и) для копирования */
    copy?: HotkeyConfig | HotkeyConfig[];
    /** Хоткей(и) для вставки */
    paste?: HotkeyConfig | HotkeyConfig[];
  };
  /** Настройки paste (readonly, overflow, broadcast, validation) */
  paste?: PasteConfig;
  /** Настройки fill handle. \`true/false\` — быстрое вкл/выкл без деталей */
  fillHandle?: boolean | FillHandleConfig;
  /**
   * Колбэк перед копированием.
   * Можно модифицировать данные (вернуть новый \`string[][]\`) или отменить
   * операцию (вернуть \`false\`).
   * Если onBeforeCopy нужен для side-эффектов, то функция должна вернуть data из первого аргумента без изменений.
   */
  onBeforeCopy?: (data: string[][], meta: CopyMeta) => string[][] | false;
  /**
   * Колбэк перед вставкой.
   * Можно модифицировать данные (вернуть новый \`string[][]\`) или отменить
   * операцию (вернуть \`false\`).
   * Если onBeforePaste нужен для side-эффектов, то функция должна вернуть data из первого аргумента без изменений.
   */
  onBeforePaste?: (data: string[][], meta: PasteMeta) => string[][] | false;
  /**
   * Колбэк перед fill handle (drag-to-fill).
   * Вызывается перед применением значений. Можно модифицировать данные
   * (вернуть новый \`string[][]\`) или отменить операцию (вернуть \`false\`).
   *
   * \`meta.sourceCells\` содержит полную информацию об исходных ячейках,
   * включая объекты строк (\`row\`) — позволяет получить source row
   * и использовать данные из соседних колонок.
   * Если onBeforeFill нужен для side-эффектов, то функция должна вернуть data из первого аргумента без изменений.
   */
  onBeforeFill?: (data: string[][], meta: FillMeta) => string[][] | false;
};`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$HotkeyConfig":"type HotkeyConfig = {\n  /** Физический код клавиши: `'KeyC'`, `'KeyV'`, `'Insert'` и т.д. */\n  code: string;\n  /** Нужно ли нажатие Ctrl (на Mac учитывается и Cmd). По умолчанию `true` */\n  ctrl?: boolean;\n  /** Нужно ли нажатие Shift. По умолчанию `false` */\n  shift?: boolean;\n  /** Нужно ли нажатие Alt. По умолчанию `false` */\n  alt?: boolean;\n  /** Нужно ли нажатие Meta (Cmd на Mac, Win на Windows). По умолчанию `false` */\n  meta?: boolean;\n};","packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$PasteConfig":`type PasteConfig = {
  /**
   * Что делать с readonly-ячейками в зоне вставки.
   * \`'skip'\` пропускает их, \`'abort'\` отменяет всю вставку целиком.
   * По умолчанию \`'skip'\`.
   */
  readonlyBehavior?: ReadonlyBehavior;
  /** Разрешать ли вставку в subrow-ячейки. По умолчанию \`true\` */
  allowSubRows?: boolean;
  /**
   * Что делать при выходе данных за границы таблицы.
   * \`'truncate'\` обрезает лишнее, \`'abort'\` отменяет вставку.
   * По умолчанию \`'truncate'\`.
   */
  overflowBehavior?: OverflowBehavior;
  /**
   * Тиражирование источника на всё выделение (как в Excel).
   * Если \`true\` и в буфере одна строка/колонка, а выделение больше,
   * буфер повторится по соответствующей оси.
   * По умолчанию \`false\`.
   */
  broadcast?: boolean;
  /**
   * Режим валидации значений при вставке.
   * - \`'none'\` вставляет строку как есть без проверок
   * - \`'type-check'\` (по умолчанию) проверяет соответствие типу ячейки:
   *   числовые поля должны парситься в число, select-поля должны содержать
   *   значение из \`options\`. Невалидные ячейки пропускаются.
   */
  validation?: ValidationMode;
};`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$CellTransferCellInfo":`type CellTransferCellInfo = {
  /** Объект строки, в которой находится ячейка */
  row: ObjectForExtending;
  /** Конфиг колонки (срез важных полей) */
  column: TransferColumnConfig;
  /** Индекс колонки в массиве columns */
  colIndex: number;
  /** Индекс строки в массиве flattenedRows */
  rowIndex: number;
  /** Уровень вложенности subrow: 0 — parent, 1+ — subrow */
  lvl: number;
  /** Сырое значение из \`row[key]\` или \`row[subKey]\` (без форматирования) */
  rawValue: unknown;
  /** Текстовое представление ячейки (то что попадает в TSV) */
  formattedValue: string;
};`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$CopyMeta":`type CopyMeta = {
  /** Прямоугольный диапазон выделения в координатах таблицы */
  range: Rectangle;
  /** Двумерный массив информации о каждой ячейке, той же формы что data */
  cells: CellTransferCellInfo[][];
};`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$PasteMeta":`type PasteMeta = {
  /** Верхний-левый угол целевой области (куда начинается вставка) */
  target: { col: number; row: number };
  /** Двумерный массив информации о целевых ячейках, той же формы что data */
  targetCells: CellTransferCellInfo[][];
  /** Текущее выделение в таблице */
  selection: GridSelection;
};`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$FillMeta":`type FillMeta = {
  /** Исходный диапазон (откуда тянули) */
  sourceRange: Rectangle;
  /** Целевой диапазон (куда заполнили) */
  destinationRange: Rectangle;
  /** Двумерный массив информации об исходных ячейках */
  sourceCells: CellTransferCellInfo[][];
  /** Двумерный массив информации о целевых ячейках (до заполнения) */
  targetCells: CellTransferCellInfo[][];
};`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$RowsChangeType":"type RowsChangeType = 'edit' | 'paste' | 'fill';","packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$FillHandleConfig":`type FillHandleConfig = {
  /** Включён ли fill handle. По умолчанию включён если включён cellTransfer */
  enabled?: boolean;
  /** Форма квадратика. По умолчанию \`'square'\` */
  shape?: 'square' | 'circle';
  /** Размер квадратика в пикселях */
  size?: number;
  /** Толщина обводки квадратика в пикселях */
  outline?: number;
  /**
   * Разрешённые направления перетаскивания.
   * \`'orthogonal'\` (по умолчанию) разрешает только вдоль одной оси за раз.
   */
  allowedDirections?: AllowedFillDirections;
  /**
   * Поведение при попадании readonly-ячеек в destination.
   * См. \`PasteConfig.readonlyBehavior\`. По умолчанию \`'skip'\`.
   */
  readonlyBehavior?: ReadonlyBehavior;
  /** Разрешать ли fill в subrow-ячейки. По умолчанию \`true\` */
  allowSubRows?: boolean;
};`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$AllowedFillDirections":`type AllowedFillDirections =
  | 'horizontal'
  | 'vertical'
  | 'orthogonal'
  | 'any';`,"packages/ui-kit/src/components/TableCanvas/feature-cell-transfer/types.ts$$$FillPatternEvent":`type FillPatternEvent = {
  /** Исходный диапазон (откуда берутся значения) */
  patternSource: Rectangle;
  /** Целевой диапазон (куда тиражируются значения) */
  fillDestination: Rectangle;
  /** Вызов отменяет fill (данные не записываются) */
  preventDefault: () => void;
};`,"packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts$$$CellInfo":`type CellInfo<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<
  CellInfoGlideInstance<R, SR, CustomCtxs>,
  'column' | 'ctxs' | 'hovered' | 'active'
> & {
  column: ColumnConfig<R, SR, CustomCtxs>;
  ctxs: CtxsType<CustomCtxs>;
  /**
   * Состояние наведения для текущей ячейки, которую рендерит renderCell.
   * \`cellHover\` равно true только у ячейки под курсором, \`rowHover\` — у всех ячеек ее строки.
   */
  hovered: CellHoverState;
  /**
   * Состояние активного выделения для текущей ячейки, которую рендерит renderCell.
   * \`cellActive\` равно true у активной ячейки или диапазона, \`rowActive\` — у строк с активной ячейкой или диапазоном.
   */
  active: CellActiveState;
};`,"packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts$$$HeaderCellInfo":`type HeaderCellInfo<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = {},
> = Omit<HeaderCellInfoGlideInstance<R, SR, CustomCtxs>, 'column' | 'ctxs'> & {
  column: ColumnConfig<R, SR, CustomCtxs>;
  ctxs: CtxsType<CustomCtxs>;
};`,"packages/ui-kit/src/components/TableCanvas/types/additional.type.ts$$$DomMetadata":`type DomMetadata = {
  /**
   * CSS класс для стилизации и поиска элемента
   *
   * @example 'user-profile-card'
   * @example 'onboarding-step-1'
   */
  className?: string;
  /**
   * Data-атрибуты для тестирования, аналитики и онбординга
   *
   * @example { 'data-testid': 'submit-button', 'data-analytics': 'click-event' }
   */
  dataAttributes?: DataAttributes;
  /**
   * Обработчик клика для аналитики и трекинга
   *
   * Вызывается вместе с основным обработчиком элемента (не заменяет его).
   * Не вызывает stopPropagation — оригинальная логика кнопки сохраняется.
   *
   * @param e - MouseEvent (может быть undefined для элементов внутри Dropdown)
   * @param detail - контекст действия: action, columnKey, size и др.
   *
   * @example onClick: (e, detail) => analytics.track(detail?.action, detail)
   */
  onClick?: (
    e?: React.MouseEvent<HTMLElement>,
    detail?: Record<string, unknown>,
  ) => void;
};`,"packages/ui-kit/src/components/TableCanvas/types/dom-metadata-actions.ts$$$DOM_METADATA_ACTIONS":`export const DOM_METADATA_ACTIONS = {
  /** Включение/выключение группировки по столбцу. detail.columnKey — ключ столбца */
  TOGGLE_GROUP: 'toggle-group',
  /** Сброс всех группировок */
  RESET_GROUPS: 'reset-groups',
  /** Выбор пункта в кастомном onItemSelect группировки. detail.columnKey — ключ */
  CUSTOM_ITEM_SELECT: 'custom-item-select',
  /** Переключение размера строки. detail.size — новый размер ('small' | 'medium' | 'big') */
  CHANGE_ROW_SIZE: 'change-row-size',
  /** Клик по табу сайдбара (шестерёнка и др.). detail.tabId — id таба */
  TOGGLE_SIDEBAR_TAB: 'toggle-sidebar-tab',
  /** Закрытие сайдбара (крестик) */
  CLOSE_SIDEBAR: 'close-sidebar',
  /** Закрепление столбца. detail.columnKey — ключ столбца */
  PIN_COLUMN: 'pin-column',
  /** Открепление столбца. detail.columnKey — ключ столбца */
  UNPIN_COLUMN: 'unpin-column',
  /** Скрытие столбца. detail.columnKey — ключ столбца */
  HIDE_COLUMN: 'hide-column',
  /** Показ столбца. detail.columnKey — ключ столбца */
  SHOW_COLUMN: 'show-column',
} as const;`,"packages/ui-kit/src/components/TableCanvas/types/dom-metadata-actions.ts$$$DomMetadataAction":`type DomMetadataAction =
  (typeof DOM_METADATA_ACTIONS)[keyof typeof DOM_METADATA_ACTIONS];`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$EditingConfig":`type EditingConfig<
  RowType extends ObjectForExtending,
  RowIdType,
  SummaryRowType,
> = {
  /**
   * Функция обработки изменений в редактируемой строке
   */
  onRowsChange: Maybe<
    (rows: RowType[], data: RowsChangeData<RowType, SummaryRowType>) => void
  >;
  /**
   * свойство, необходимое для корректного изменения дочерних строк.
   * Данное свойство обязательно, если ваши дочерние строки установлены не под ключом "subRows" внутри строки.
   *
   * Как дочерние строки можно указывать свойство, которые вложено в другое свойство.
   * В таком случае "." будет знаком для обозначения сл. уровня вложенности.
   *
   * @example "child" или "uvh367.children"
   */
  subRowsKey?: string;
  /**
   * Глубокое копирование строк перед применением правки в режиме редактирования.
   *
   * Включите, если строки, передаваемые в таблицу, иммутабельны/заморожены
   * (напр. стейт под управлением Redux Toolkit или Immer — они вызывают
   * Object.freeze в dev). При редактировании дочерней строки таблица записывает
   * изменение ВНУТРЬ объекта родителя; на замороженном объекте это падает с
   * \`TypeError: Cannot assign to read only property\`.
   *
   * Когда флаг включён, таблица сама делает structuredClone редактируемой строки
   * перед записью — ваш иммутабельный стейт не мутируется, и редактирование
   * дочерних строк работает без действий с вашей стороны.
   *
   * ⚠️ Данные строки должны быть сериализуемыми. Где доступен structuredClone —
   * Date/Map/Set и вложенные структуры копируются корректно; на старых средах
   * без structuredClone используется JSON-фоллбэк (теряет Date/Map/Set, undefined
   * и функции). Не включайте без необходимости — глубокое копирование добавляет
   * накладные расходы.
   *
   * @default false
   */
  deepCloneRows?: boolean;
  /**
   * Функция определения уникального id строки
   * @param row
   * @returns
   */
  rowKeyGetter: (row: RowType) => RowIdType;
  /**
   * Функция определения возможности редактирования строки
   * @param row
   * @returns
   */
  rowEditable?: (row: RowType) => boolean;
  /**
   * defaultEnabled - пропс, отвечающий за то, будет ли активен режим редактирования или нет. По умолчанию - не активно.
   * @default false
   */
  defaultEnabled?: boolean;
  /**
   * enabled - необходим для управления режимом редактирования снаружи компонента Таблицы.
   * По умолчанию, управление происходит в компоненте.
   * Приоритетнее, чем defaultEnabled.
   *
   * @type boolean - если НЕ нужно переключение в самой таблице
   * @type [boolean, React.Dispatch<React.SetStateAction<boolean>>] - если нужно переключение в самой таблице
   *
   */
  enabled?: boolean | [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * Cостояние скрытия/раскрытия кнопки включения/выключения фичи
   * @default true
   */
  showButtons?: boolean;
  /**
   * Функция, вызывающаяся при включении фичи.
   * @param enableEditorMode - функция включающая режим редактирования
   */
  onEnableEditing?: (enableEditorMode: () => void) => void;
  /**
   * Функция, вызывающаяся при сохранении отредактированного.
   * @param disableEditorMode - функция выключающая режим редактирования
   */
  onSave?: (disableEditorMode: () => void) => void;
  /**
   * Функция, вызывающаяся при отмене отредактированного.
   * @param disableEditorMode - функция выключающая режим редактирования
   */
  onCancel?: (disableEditorMode: () => void) => void;
  /** Пропсы кнопок в controlBlock. */
  buttons?: {
    save?: EditingButtonProps;
    cancel?: EditingButtonProps;
    edit?: EditingButtonProps;
  };
  /**
   * Кастомный слот, отображаемый левее кнопок «Отменить» / «Сохранить».
   * Виден только когда режим редактирования активен (editMode = true).
   * Зона ответственности разработчика — размерная сетка controlBlock не влияет на этот слот.
   */
  editModeLeftSlot?: React.ReactNode;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: {
    enableButton?: DomMetadata;
    saveButton?: DomMetadata;
    cancelButton?: DomMetadata;
  };
};`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$EditingButtonProps":`type EditingButtonProps = Omit<
  Partial<ControlBlockButtonProps>,
  | 'onClick'
  | 'size'
  | 'dropdown'
  | 'isTargetAction'
  | 'skipRightDivider'
  | 'tooltipText'
>;`,"packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts$$$Editing":`type EditingCellInfo<
  R extends ObjectForExtending,
  SR = unknown,
  CustomCtxs extends ObjectForExtending = ObjectForExtending,
> = Omit<EditingCellInfoGlideInstance<R, SR, CustomCtxs>, 'column'> & {
  column: ColumnConfig<R, SR, CustomCtxs>;
};`,"packages/ui-kit/src/components/TableCanvas/feature-content-state/types.ts$$$TableCanvasEmptyStateConfig":`type TableCanvasEmptyStateConfig = TableCanvasContentStateBase &
  Partial<EmptyStateProps>;`,"packages/ui-kit/src/components/TableCanvas/feature-content-state/types.ts$$$TableCanvasContentStateBase":`type TableCanvasContentStateBase = {
  /**
   * Включено ли состояние.
   */
  enabled: boolean;
  /**
   * Полностью кастомный контент состояния вместо дефолтного EmptyState.
   */
  custom?: ReactNode;
};`,"packages/ui-kit/src/components/EmptyState/EmptyState.types.ts$$$EmptyStateImageVariant":"type EmptyStateImageVariant = EmptyStateVariant | ErrorPageVariant;","packages/ui-kit/src/components/EmptyState/EmptyState.types.ts$$$ErrorPageVariant":`type ErrorPageVariant =
  | '400'
  | '401'
  | '403'
  | '404'
  | '409'
  | '500'
  | '502'
  | '503'
  | 'unidentified';`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$FilteringConfig":`type FilteringConfig<T> = {
  state: [T, React.Dispatch<React.SetStateAction<T>>];
  /**
   * @deprecated Использовать filtersInfo
   *
   * clearedValue - состояние фильтров после очистки. Используется для сравнения:
   * Например, был ли фильтр конкретной колонки изменен рассчитывается посредством сравнения текущего значения фильтра и значения фильтра в clearedValue.
   * Если они равны, то фильтр считается не измененным.
   */
  clearedValue?: T;
  /**
   * Информация о фильтрах для каждой колонки.
   * Используется для:
   * 1. Хранения меток (label) фильтров для отображения в UI
   * 2. Хранения значений по умолчанию (clearedValue) для каждого фильтра
   * 3. Определения, был ли фильтр изменен (сравнение текущего значения с clearedValue)
   */
  filtersInfo?: Record<
    keyof T,
    {
      label: string;
      clearedValue: T[keyof T];
    }
  >;
  /**
   * manualFiltering - пропс, активирующий ручную-кастомную (или на стороне бэка) фильтрацию.
   * @remarks
   * Для автоматической фильтрации (когда не используется manualFiltering в tableConfig):
   * - Для всех типов фильтров обязательно должен быть указан \`valueInRow\`
   * - Для component: 'select' дополнительно должен быть указан \`filteringType\`
   * - Для component: 'input' с кастомным фильтром (когда filter - функция)
   *   функция фильтрации должна быть передана явно
   *
   * Если используется manualFiltering, эти параметры не обязательны,
   * так как вся логика фильтрации реализуется извне.
   */
  manualFiltering?: boolean;
  /**
   * Конфигурация для отображения фильтров в правом сайдбаре.
   *
   * Позволяет:
   * 1. Добавлять глобальные фильтры (не привязанные к конкретной колонке)
   * 2. Управлять порядком отображения фильтров
   * 3. Переопределять рендер и заголовки колоночных фильтров
   *
   * Логика работы:
   * - По умолчанию в сайдбаре отображаются все колоночные фильтры (из columnConfig)
   * - Ключом фильтра считается \`key\` колонки, если его нет, то пытаемся взять \`keyInFilterState\` (если указан), иначе это не будет работать
   * - Заголовком фильтра по умолчанию является \`name\` колонки или ключ фильтра (name || key)
   * - Глобальные фильтры добавляются через \`items\` с уникальными ключами
   *
   * Особенности:
   * 1. Порядок отображения:
   *    - Сначала фильтры из \`order\` (в указанной последовательности)
   *    - Затем остальные колоночные фильтры (в порядке columnConfig)
   *    - В конце - глобальные фильтры (в алфавитном порядке ключей)
   *
   * 2. Переопределение колоночных фильтров:
   *    - Чтобы изменить заголовок: укажите ключ колонки в \`items\` с новым \`label\`
   *    - Чтобы заменить рендер: укажите ключ колонки с \`customRenderFn\`
   *    - Оригинальный фильтр из колонки будет проигнорирован
   *
   * 3. Глобальные фильтры:
   *    - Ключ не должен совпадать с ключами колонок
   *    - Обязательно указать \`label\` и \`customRenderFn\`
   *    - Отображаются после всех колоночных фильтров, если не переопределены в order
   *
   * @example
   * // Добавление глобального фильтра и изменение порядка
   * sidebarConfig: {
   *   order: ['status', 'tasks', 'type'], // Сначала статус, затем глобальный поиск
   *   items: {
   *     tasks: { // Уникальный ключ
   *       label: 'Поиск по всем полям',
   *       customRenderFn: () => <TaskComponent />
   *     },
   *     status: { // Переопределение колоночного фильтра
   *       label: 'Статус заявки', // Новый заголовок
   *       customRenderFn: () => <CustomStatusFilter /> // Кастомный рендер
   *     }
   *     type: { // Переопределение только Label колоночного фильтра
   *       label: 'Тип', // Новый заголовок
   *     }
   *   }
   * }
   */
  sidebarConfig?: {
    /**
     * Определяет порядок отображения фильтров.
     * - Указываются ключи фильтров (колоночных или глобальных)
     * - Не указанные в order фильтры отображаются после
     * - Если order пуст, сохраняется порядок: глобальные фильтры + columnConfig фильтры в конце
     */
    order?: string[];
    /**
     * Конфигурация фильтров для сайдбара.
     * Ключом может быть:
     * - Ключ колонки (для переопределения колоночного фильтра)
     * - Уникальный ключ (для добавления глобального фильтра)
     */
    items: Partial<
      Record<
        keyof T,
        {
          /** Заголовок фильтра (обязателен для глобальных фильтров), можно использовать для переопределения для локальных фильтров */
          label: string;
          /**
           * Функция рендера компонента фильтра.
           * Для колоночных фильтров переопределяет оригинальный рендер.
           * Для глобальных фильтров обязательна.
           */
          customRenderFn?: (
            filters: T,
            setFilters: React.Dispatch<React.SetStateAction<T>>,
          ) => React.ReactNode;
        }
      >
    >;
  };
  /**
   * Callback для кастомизации стилей чипсов (фильтров) в списке
   *
   * @param {ItemOrGroup} itemOrGroup - Текущий элемент или группа фильтров
   * @param {Item | undefined} item - Конкретный элемент фильтра (если есть)
   * @returns {CSSObject} Объект стилей, который будет применен к чипсу
   *
   * @description
   * Позволяет динамически задавать стили для каждого чипса в зависимости от его типа и содержимого.
   * Вызывается для каждого отображаемого чипса (как для отдельных элементов, так и для элементов внутри групп).
   *
   * @example
   * // Пример 1: Стилизация чипсов по типу
   * chipStyle: (itemOrGroup, item) => {
   *   if (isGroup(itemOrGroup)) {
   *     return { backgroundColor: '#f0f0f0' };
   *   }
   *   return { backgroundColor: '#e0e0e0' };
   * }
   *
   * @example
   * // Пример 2: Стилизация по значению фильтра
   * chipStyle: (itemOrGroup, item) => {
   *   if (item?.label === 'Высокий приоритет') {
   *     return {
   *       backgroundColor: '#ffebee',
   *       color: '#d32f2f'
   *     };
   *   }
   *   return {};
   * }
   *
   * @example
   * // Пример 3: Разные стили для элементов в группе и одиночных
   * chipStyle: (itemOrGroup, item) => {
   *   if (item) {
   *     // Стиль для элемента внутри группы
   *     return { maxWidth: 180 };
   *   }
   *   // Стиль для одиночного чипа
   *   return { maxWidth: 150 };
   * }
   */
  chipStyle?: (itemOrGroup: ItemOrGroup, item: Item | undefined) => CSSObject;
  /**
   * Пользовательский форматтер заголовка группы чипсов.
   *
   * Используется в блоке активных фильтров для подмены текста заголовка
   * группы (например, “Статус”, “Тип”, “Автор”). Полезно, когда нужно
   * динамически менять подпись (добавить счётчик, i18n и т.п.).
   *
   * @param {ItemOrGroup} itemOrGroup Объект группы (тип Group). Вызов происходит только для групп,
   *                                   поэтому безопасно кастовать к Group.
   * @returns {string} Текст заголовка группы чипсов.
   *
   * @default Возвращается \`group.groupLabel\`.
   *
   * @remarks
   * - Функция должна быть чистой и быстрой (без сетевых запросов и побочных эффектов).
   * - Возвращайте ТОЛЬКО строку — чипы отображают текстовое значение.
   * - Для длинных строк применяется усечение (overflow с многоточием) на уровне компонента.
   *
   * @example
   * // Добавить двоеточие и количество выбранных элементов
   * renderGroupLabel: (group) => \`\${group.groupLabel}: \${group.items.length}\`
   *
   * @example
   * // Локализация заголовка группы
   * const i18n = { status: 'Статус', type: 'Тип' };
   * renderGroupLabel: (group) => i18n[group.groupId] ?? group.groupLabel
   */
  renderGroupLabel?: (group: Group) => string;

  /**
   * Пользовательский форматтер текста чипса (элемента внутри группы или одиночного фильтра).
   *
   * Позволяет управлять тем, что именно отображается внутри каждого чипса. Особенно полезен
   * при серверной пагинации/ленивой загрузке, когда в состоянии фильтра хранится только value,
   * а label необходимо подставить из локального кэша.
   *
   * @param {Group | null } group  Группа, внутри которой рендерится чип (или null).
   * @param {Item} item   Сам элемент чипса. В группах передаётся конкретный \`Item\`,
   *                                  для одиночного чипа может быть \`undefined\`.
   * @returns {string} Текст, который будет показан в чипсе.
   *
   * @default Используется \`item?.label.toString()\` (или строковое представление value).
   *
   * @remarks
   * - Функция должна быть чистой и быстрой;
   * - Возвращайте ТОЛЬКО строку.
   *
   * @example
   * // 1) Отображение label из кэша при серверной пагинации
   * const labelsCacheRef = useRef(new Map<string, string>());
   * renderChipLabel: (group, item) => {
   *   if (item?.id != null) {
   *     const key = String(item.id);
   *     const fromCache = labelsCacheRef.current.get(key);
   *     if (fromCache) return fromCache;     // красивый label, если уже загрузили
   *     return String(item.label ?? key);    // фоллбэк: временно показываем value/label из item
   *   }
   *   return ''; // безопасный фоллбэк для одиночных случаев
   * }
   *
   * @example
   * // 2) Нормализация отображения числовых значений
   * renderChipLabel: (_group, item) => {
   *   const v = Number(item?.label);
   *   return Number.isFinite(v) ? v.toLocaleString('ru-RU') : String(item?.label ?? '');
   * }
   *
   * @example
   * // 3) Префикс по типу группы
   * renderChipLabel: (group, item) => {
   *   const prefix = group.groupId === 'status' ? '' : '#';
   *   return \`\${prefix}\${item?.label ?? item?.id ?? ''}\`;
   * }
   */
  renderChipLabel?: (group: Group | null, item: Item) => string;
};

export type DefaultSidebarTabIds = 'columns' | 'tableSettings' | 'filtering';

/**
 * Конфигурация sidebar
 */
export type SidebarConfig = {
  /**
   * Включен ли sidebar. Отвечает только за UI. Не влияет на перерасчёт фичей.
   * @default true
   */
  enabled?: boolean;
  /**
   * Открыт ли sidebar при первом рендере (uncontrolled-режим).
   * Игнорируется, если передан openState.
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Внешний контроль открытия/закрытия sidebar.
   * Если передан — источник истины, defaultOpen игнорируется.
   */
  openState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * id вкладки, выбранной по умолчанию (актуально при открытом сайдбаре).
   * Если id не найден или у вкладки showInSidebar=false — используется первая доступная.
   */
  defaultActiveTabId?: string;
  /**
   * Внешний контроль активной вкладки (controlled-режим).
   * Если передан — источник истины, defaultActiveTabId игнорируется.
   */
  activeTabState?: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>,
  ];
  /**
   * Колбэк смены активной вкладки. Вызывается и в uncontrolled-режиме.
   * При закрытии сайдбара приходит null.
   */
  onActiveTabChange?: (tabId: string | null, tab?: SidebarTab) => void;
  /**
   * Кастомные табы
   */
  customTabs?: Array<
    Omit<SidebarTab, 'id'> & {
      id: Exclude<string, DefaultSidebarTabIds>;
    }
  >;
  /**
   * Порядок отображения кастомных вкладок
   */
  customTabsOrder?: Array<Exclude<string, DefaultSidebarTabIds>>;
  defaultTabs?: Array<
    | {
        id: 'filtering' | 'columns';
        /** название таба в рамках горизонтального табов внутри таба настройки */
        label?: string;
        /** название таба в рамках вертикальных табов сайдбара (если данный таб окажется единственным табом в настройках) */
        title?: string;
        /**
         * Метки для автоматизированного тестирования и аналитики
         * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
         */
        domMetadata?: DomMetadata;
        /**
         * Кастомный элемент справа от title в шапке сайдбара
         */
        titleRightSlot?: React.ReactNode;
        /** @default true */
        showInSidebar?: boolean;
        /** тултип иконки шестеренки (для табов с id = filtering и columns - недоступен. Настраивается через таб с id='tableSettings') */
        iconTooltipText?: undefined;
      }
    | {
        id: 'tableSettings';
        /** название таба в рамках горизонтального табов внутри таба настройки */
        label?: string;
        /** название таба в рамках вертикальных табов сайдбара */
        title?: string;

        /**
         * Метки для автоматизированного тестирования и аналитики
         * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
         */
        domMetadata?: DomMetadata;
        /**
         * Кастомный слот для вкладки tableSettings (рендерится после общих настроек)
         * Только дл id: 'tableSettings'
         */
        customGeneralSettingsSlot?: React.ReactNode;
        /**
         * Кастомный элемент справа от title в шапке сайдбара
         */
        titleRightSlot?: React.ReactNode;
        /** @default true */
        showInSidebar?: boolean;
        /** тултип иконки шестеренки @default 'Настройки' */
        iconTooltipText?: string;
      }
  >;
};

export function activeViewIs<T extends 'cards' | 'rows'>(
  checkType: T,
  viewState: 'cards' | 'rows',
  view: View,
): view is ViewMods[T] {
  return checkType === viewState;
}

/** Размер controlBlock: 'm' и 's' — одинаковые стили, 'xs' — уменьшенный */
export type ControlBlockSize = 'm' | 's' | 'xs';

export type ControlBlockConfig = {
  /**
   * show - наличие controlBlock-а
   * @default true
   */
  show?: boolean;
  /**
   * Размер controlBlock и его элементов (кнопки, иконки, поиск, отступы).
   * 'm' и 's' — стандартные стили, 'xs' — компактный режим.
   * Не влияет на customFeatures и кастомные слоты — они контролируются разработчиком.
   * @default 'm'
   */
  size?: ControlBlockSize;
  /**
   * @deprecated Используйте кастомные кнопки через rightSideInner или customFeatures.
   * leftSideInner - пропс для добавления кнопок в левую часть контролблока.
   * Продолжает работать для обратной совместимости.
   */
  leftSideInner?: ControlBlockButtonProps[];
  /**
   * rightSideInner - пропс для добавления кнопок в правую часть контролблока
   */
  rightSideInner?: ControlBlockButtonProps[];
  /**
   * customFeatures - пропс для добавления кастомных фичей (кнопки-иконки)
   */
  customFeatures?: FeatureItem[];
  /**
   * pinningMenu - нативная фича закрепления столбцов (SplitIconButton с
   * дропдауном) в правой зоне иконок. Появляется, когда активировано
   * закрепление колонок (columnsControl.pinning). Продукт может донастроить
   * и дополнить пункты меню (см. PinningMenuConfig).
   */
  pinningMenu?: PinningMenuConfig;
  /**
   * Пропсы для компонента dropdown в котором будут скрыты левые фичи при адаптивной компрессии
   */
  leftSideDropdownProps?: TableDropdownConfigProps;
  /**
   * Пропсы для компонента dropdown в котором будут скрыты правые фичи при адаптивной компрессии
   */
  rightSideDropdownProps?: TableDropdownConfigProps;
  /**
   * Активна ли фича компрессии (сжатие ToolsMenu при адаптиве)
   * @default true
   */
  enableAdaptiveCompress?: boolean;
  /**
   * Панель массовых действий
   */
  massActionPanel?: {
    /**
     * Кнопки панели. Размеры кнопок/дропдаунов панель подбирает сама (по \`size\` панели и компактности) —
     * передавать \`size\` кнопкам не нужно. Если \`size\` на кнопке всё же задан — он используется как есть.
     */
    buttons: MassActionButtonProps[];
    /**
     * Пропсы для Dropdown, в который сжались кнопки
     */
    collapsedDropdownProps?: TableDropdownConfigProps;
    /**
     * Отступ панели снизу от контейнера (px)
     * @default 24
     */
    bottom?: number;
    /**
     * Управление отображением панели массовых действий.
     * - \`undefined\` (по умолчанию) — стандартное поведение (показывается при selecting + выбранных строках)
     * - \`false\` — панель не рендерится, разработчик управляет действиями самостоятельно
     * - \`true\` — панель показывается всегда, даже без активного selecting и выбранных строк
     */
    show?: boolean;
    /**
     * Размерная сетка панели внутри таблицы: \`m\`/\`s\` — обычный размер, \`xs\` — уменьшенный (кнопки \`xxs\`, «ещё» \`xs\`, счётчик Body XS).
     * Viewport-логика (1280) в таблице не используется.
     * @default 's'
     */
    size?: MassActionsSize;
  };
};

/** Пропсы кнопки редактирования. onClick исключён — используйте onSave/onCancel/onEnableEditing. */
export type EditingButtonProps = Omit<
  Partial<ControlBlockButtonProps>,
  | 'onClick'
  | 'size'
  | 'dropdown'
  | 'isTargetAction'
  | 'skipRightDivider'
  | 'tooltipText'
>;

export type EditingConfig<
  RowType extends ObjectForExtending,
  RowIdType,
  SummaryRowType,
> = {
  /**
   * Функция обработки изменений в редактируемой строке
   */
  onRowsChange: Maybe<
    (rows: RowType[], data: RowsChangeData<RowType, SummaryRowType>) => void
  >;
  /**
   * свойство, необходимое для корректного изменения дочерних строк.
   * Данное свойство обязательно, если ваши дочерние строки установлены не под ключом "subRows" внутри строки.
   *
   * Как дочерние строки можно указывать свойство, которые вложено в другое свойство.
   * В таком случае "." будет знаком для обозначения сл. уровня вложенности.
   *
   * @example "child" или "uvh367.children"
   */
  subRowsKey?: string;
  /**
   * Глубокое копирование строк перед применением правки в режиме редактирования.
   *
   * Включите, если строки, передаваемые в таблицу, иммутабельны/заморожены
   * (напр. стейт под управлением Redux Toolkit или Immer — они вызывают
   * Object.freeze в dev). При редактировании дочерней строки таблица записывает
   * изменение ВНУТРЬ объекта родителя; на замороженном объекте это падает с
   * \`TypeError: Cannot assign to read only property\`.
   *
   * Когда флаг включён, таблица сама делает structuredClone редактируемой строки
   * перед записью — ваш иммутабельный стейт не мутируется, и редактирование
   * дочерних строк работает без действий с вашей стороны.
   *
   * ⚠️ Данные строки должны быть сериализуемыми. Где доступен structuredClone —
   * Date/Map/Set и вложенные структуры копируются корректно; на старых средах
   * без structuredClone используется JSON-фоллбэк (теряет Date/Map/Set, undefined
   * и функции). Не включайте без необходимости — глубокое копирование добавляет
   * накладные расходы.
   *
   * @default false
   */
  deepCloneRows?: boolean;
  /**
   * Функция определения уникального id строки
   * @param row
   * @returns
   */
  rowKeyGetter: (row: RowType) => RowIdType;
  /**
   * Функция определения возможности редактирования строки
   * @param row
   * @returns
   */
  rowEditable?: (row: RowType) => boolean;
  /**
   * defaultEnabled - пропс, отвечающий за то, будет ли активен режим редактирования или нет. По умолчанию - не активно.
   * @default false
   */
  defaultEnabled?: boolean;
  /**
   * enabled - необходим для управления режимом редактирования снаружи компонента Таблицы.
   * По умолчанию, управление происходит в компоненте.
   * Приоритетнее, чем defaultEnabled.
   *
   * @type boolean - если НЕ нужно переключение в самой таблице
   * @type [boolean, React.Dispatch<React.SetStateAction<boolean>>] - если нужно переключение в самой таблице
   *
   */
  enabled?: boolean | [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * Cостояние скрытия/раскрытия кнопки включения/выключения фичи
   * @default true
   */
  showButtons?: boolean;
  /**
   * Функция, вызывающаяся при включении фичи.
   * @param enableEditorMode - функция включающая режим редактирования
   */
  onEnableEditing?: (enableEditorMode: () => void) => void;
  /**
   * Функция, вызывающаяся при сохранении отредактированного.
   * @param disableEditorMode - функция выключающая режим редактирования
   */
  onSave?: (disableEditorMode: () => void) => void;
  /**
   * Функция, вызывающаяся при отмене отредактированного.
   * @param disableEditorMode - функция выключающая режим редактирования
   */
  onCancel?: (disableEditorMode: () => void) => void;
  /** Пропсы кнопок в controlBlock. */
  buttons?: {
    save?: EditingButtonProps;
    cancel?: EditingButtonProps;
    edit?: EditingButtonProps;
  };
  /**
   * Кастомный слот, отображаемый левее кнопок «Отменить» / «Сохранить».
   * Виден только когда режим редактирования активен (editMode = true).
   * Зона ответственности разработчика — размерная сетка controlBlock не влияет на этот слот.
   */
  editModeLeftSlot?: React.ReactNode;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: {
    enableButton?: DomMetadata;
    saveButton?: DomMetadata;
    cancelButton?: DomMetadata;
  };
};

export type SummaryRowsConfig = {
  showDefault: boolean;
  showInControl: boolean;
} & {
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};

/**
 * Конфиг тултипа при hover по canvas-элементам.
 * Для активации фичи необходимо заполнить данный конфиг,
 * а также добавить нужные изменения в Canvas-элементах или в конфиге колонки.
 */
export type TableConfigTooltip = {
  /**
   * Включить/выключить колоночные и кастомные тултипы (cellTooltip, headerCellTooltip).
   * Внутренние тултипы (drag-иконка в шапке и другие по nodeId) работают всегда.
   * @default false
   */
  enabled?: boolean;
  /** Глобальная задержка перед показом тултипа (мс). Per-node переопределяет. @default 500 */
  mouseEnterDelay?: number;
  /** Глобальная задержка перед скрытием тултипа (мс). Per-node переопределяет. @default 0 */
  mouseLeaveDelay?: number;
};

export type InfinityScrollConfig<RowType extends ObjectForExtending> = {
  /** Триггер достижения скроллом зоны подгрузки данных. */
  onTrigger: (rows: RowType[]) => Promise<void> | void;
  /** Состояние загрузки (скелетоны) новых строк. */
  isLoading: boolean;
  /**
   * Флаг, когда все данные загружены — false.
   * @default true
   */
  hasMore?: boolean;
  /**
   * Для mode='region': за сколько строк до конца триггерить загрузку.
   * @default 5
   */
  rowThreshold?: number;
};

export type { TableCanvasEmptyStateConfig, TableCanvasErrorStateConfig };

/**
 * Настройка выделения ячеек/колонок/строк в TableCanvas — единый объект.
 * Это отдельная ось взаимодействия — не зависит от \`highlightActiveType\`.
 */
export type CellsSelectionConfig = {
  /**
   * Режим фактического выделения ячеек (нативный glide selection). По нему
   * работают copy/paste, рамка, fill-handle и затемнение шапки/нумерации.
   * @default "range-cell"
   */
  mode?: CellsSelectionMode;
  /**
   * Выделение колонок по клику на шапку. Ctrl/Cmd — добавить/убрать колонку,
   * Shift — диапазон колонок. Клик по иконкам сортировки/фильтрации в шапке
   * выделение НЕ вызывает. Поддерживает copy/paste по выделенным колонкам.
   * @default true
   */
  enableColumnSelection?: boolean;
  /**
   * Выделение строк по клику/драгу на колонке нумерации (\`rowMarkers\`).
   * Ctrl/Cmd — несмежный выбор отдельных строк, драг — смежный диапазон.
   * Поддерживает copy/paste по выделенным строкам. Требует включённой колонки
   * нумерации (\`rowMarkers\`). При \`false\` клик по нумерации ничего не выделяет.
   * @default true
   */
  enableRowSelection?: boolean;
  /**
   * Выделение всей таблицы кликом по «нулевой» ячейке — шапке колонки нумерации
   * (левый верхний угол). Выделяет все строки данных по всем колонкам одним
   * диапазоном; поддерживает copy/paste. Требует включённой колонки нумерации
   * (\`rowMarkers\`) и активного \`mode\` (≠ \`disabled\`).
   * @default true
   */
  enableSelectAll?: boolean;
  /**
   * Внешний (controlled) контроль НАТИВНОГО выделения (ячейки/диапазон/смежные
   * строки и колонки). \`state\` — кортеж \`[value, setter]\` как у \`selecting.state\`.
   * Сброс: \`setter({ current: undefined, rows: empty, columns: empty })\`.
   * Несмежный Ctrl-выбор колонок/строк (own-state) сюда не входит — он внутренний.
   */
  state?: [GridSelection, React.Dispatch<React.SetStateAction<GridSelection>>];
};

export type TableConfig<
  RowType extends ObjectForExtending,
  SummaryRowType,
  RowIdType extends string | number,
  FilterStateType extends ObjectForExtending,
  // SubRowType
> = {
  /**
   * Группировка колонок (многоуровневая шапка через \`columnConfig.children\`):
   * объединение пустых ячеек шапки (\`squashEmptyCells\`, по умолчанию включено) и
   * дефолт выравнивания в объединённых ячейках (\`squashedHeaderAlign\`).
   */
  columnsGrouping?: ColumnsGroupingConfig;
  /**
   * Подсветка активной сущности в canvas-таблице.
   * @deprecated Значения \`'cell'\`/\`'range-cell'\` устарели — используйте
   * \`cellsSelection.mode\`. Актуальны \`'row'\` (подсветка строки) и \`'disabled'\`.
   */
  highlightActiveType?: HighlightActiveType;
  /**
   * Единый конфиг выделения ячеек: режим (\`mode\`), оси
   * (\`enableColumnSelection\`/\`enableRowSelection\`/\`enableSelectAll\`) и controlled
   * (\`state\`). См. {@link CellsSelectionConfig}.
   */
  cellsSelection?: CellsSelectionConfig;
  /**
   * Подсвеченная строка (\`highlightActiveType='row'\`).
   * \`state\` (опционально) — controlled-кортеж \`[value, setter]\`: задан — значением
   * владеешь снаружи (сброс \`setter(undefined)\`); не задан — таблица крутит
   * подсветку внутренним стейтом, а \`onChange\` всё равно срабатывает (подписка
   * без владения значением).
   */
  highlightActiveRow?: {
    state?: [
      number | undefined,
      React.Dispatch<React.SetStateAction<number | undefined>>,
    ];
    /**
     * Колбэк смены подсвеченной строки: отдаёт её флэт-индекс и сам объект
     * строки (\`rows[index]\`). Позволяет открывать данные подсвеченной строки
     * (например, в SplitView) без \`onCellClicked\`.
     */
    onChange?: (params: {
      index: number | undefined;
      row: RowType | undefined;
    }) => void;
  };
  /**
   * Эффекты при наведении (hover)
   * \`row\` — подсветка строки под курсором.
   * Независимая визуальная ось: селектинг (\`cellsSelection\`) и \`highlightActiveType='row'\`
   * рисуются ПОВЕРХ hover-подсветки и визуально перекрывают её (hover
   * «остаётся под ними» и снова виден после сброса выделения).
   *
   * \`{ row: true }\` — включить с цветами из темы;
   * \`{ row: { color: '#F7F9FB' } }\` — переопределить цвет data-ячеек.
   * @default undefined (выключено)
   */
  hoverEffects?: HoverEffectsConfig;
  /**
   * Включает компенсацию тонких canvas-линий при browser zoom ниже 100%, когда devicePixelRatio меньше 1.
   * Влияет только на grid/header/sticky hairline borders.
   * @default false
   */
  enableLowDprHairline?: boolean;
  /**
   * rowSize - размеры строк таблицы
   */
  rowSize?: Prettify<RowSize>;
  /**
   * rowHeight - размер высоты строк таблицы
   */
  rowHeight?: Maybe<number | RowHeightFunc<RowType>>;
  /**
   * sorting - активация сортировки. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={sorting: {sortingState}}
   *
   * columnConfig=[{sortingType: 'numberSort'}]
   */
  sorting?: {
    state: [
      readonly SortColumn[],
      React.Dispatch<React.SetStateAction<readonly SortColumn[]>>,
    ];
    /**
     * manualSorting - пропс, активирующий ручную-кастомную (или на стороне бэкенда) сортировку
     */
    manualSorting?: boolean;
  };
  /** @deprecated Свойство view не используется и будет удалено в следующей мажорной версии. */
  view?: View;
  /**
   * filtering - активация фильтрации. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={filtering: {stateAndSetter, ...}}
   *
   * columnConfig=[{filtering: {...}}]
   */
  filtering?: FilteringConfig<FilterStateType>;
  /**
   * Сворачивание / разворачивание таблицы
   */
  collapsing?: TableCollapseConfig;
  /**
   * selecting - активация выбора строк. Условие активации - это наличие данного свойства.
   * Есть поддержка выбора строк с многоуровневой вложенностью.
   *
   * Пример:
   *
   *\`\`\`jsx
   * import { Table } from '@daisforge/ui';
   *
   * <Table
   * tableConfig={{selecting: {stateAndSetter, rowKeyGetter}}}
   * {...rest}
   * />
   * \`\`\`
   */
  selecting?: {
    state: [
      ReadonlySet<RowIdType>,
      React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>,
    ];
    rowKeyGetter: (row: RowType) => RowIdType;
  } & Prettify<SelectingRowConfig<RowType, RowIdType>> & {
      /**
       * Метки для автоматизированного тестирования и аналитики
       * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
       */
      controlBlock?: {
        domMetadata?: DomMetadata;
      };
      /**
       * Метки для автоматизированного тестирования и аналитики
       * Добавляет data-атрибуты и CSS-классы к элементам RightSidebar
       */
      sidebar?: {
        domMetadata?: DomMetadata;
      };
    };
  /**
   * editing - активация редактирования. Условие активации - это наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={editing: {onRowsChange, rowKeyGetter}}
   *
   * columnConfig=[{editingCell: {...}}]
   */
  editing?: EditingConfig<RowType, RowIdType, SummaryRowType>;

  /**
   * cellTransfer — конфигурация копирования, вставки и fill handle.
   * По умолчанию копирование (Ctrl+C) работает в режиме редактирования.
   * Данные копируются в формате TSV (tab-separated values), совместимом с Excel.
   *
   * Пример:
   *
   * tableConfig={{ cellTransfer: { enabled: true, onBeforeCopy: (data) => data } }}
   */
  cellTransfer?: CellTransferConfig;

  /**
   * Модуль нотификаций: стандартизированный канал событий для внешних
   * потребителей. Таблица UI не рисует — вызывает \`onNotification\`, потребитель
   * показывает тост/модалку на своей стороне. Сейчас эмитятся ошибки copy/paste
   * (в т.ч. multi-range 2D-разброс, readonly/overflow-abort, пропуск валидацией).
   */
  notifications?: TableNotificationsConfig;

  /**
   * subRows - активация иерархии, отображения вложенных строк. Условие активации - наличие данного свойства. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={subRows: {getSubRows, rowKeyGetter}}
   *
   * columnConfig=[{subRow: {...}}]
   */
  subRows?: SubRows<RowType, RowIdType>;
  /**
   * Столбец с нумерацией строк.
   * Активируется наличием этого свойства. Поддерживает \`subRows\` любой глубины.
   *
   * @see {@link RowMarkersTableConfig} — полное описание конфигурации и примеры.
   */
  rowMarkers?: RowMarkersTableConfig<RowType>;
  rowsGrouping?: RowsGrouping<RowType, SummaryRowType>;

  /**
   * resizableColumn - активация изменения ширины колонки с помощью курсора. Условие активации -  resizableColumn: true. Нужно также сконфигурировать колонки.
   *
   * Пример:
   *
   * tableConfig={resizableColumn: true}
   *
   * columnConfig=[{resizable: true}]
   */
  resizableColumn?: boolean;
  /**
   * style - inline-стили. Для стилей самой таблицы (без вложенности).
   *
   * Исключены свойства 'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight'. Их следует стилизовать через свойства containerStyle.
   */
  style?: Omit<
    CSSProperties,
    'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight'
  >;
  /**
   * css - для стилей простых и сложных(например, для стилизации cell, headerCell, ...).
   *
   * Пример:
   *
   * \`\`\`css
   * & > .rdg-header-row > .rdgCell {
   * background-color: red;
   * }
   * \`\`\`
   *
   */
  css?: string | CSSObject;

  summaryRows?: SummaryRowsConfig;
  /**
   * controlBlock - пропс для активации, кастомизации контролблока.
   */
  controlBlock?: ControlBlockConfig;
  /**
     * containerStyle - инлайновые стили контейнера таблицы и контролблока. высоту и ширину для таблицы рекомендуется задавать в этом пропсе.
     * Пример:
     *
     * \`\`\`tsx
        tableConfig={{ containerStyle: { height: '70vh' } }}
     * \`\`\`
     */
  containerStyle?: CSSProperties | undefined;
  /**
   * containerCss - стили для контейнера таблицы и контролблока.
   * Через этот пропс можно дополнительно кастомизировать контейнер и все его дочерние элементы.
   */
  containerCss?: string | CSSObject | undefined;
  /**
   * containerId - html-атрибут id контейнера таблицы.
   */
  containerId?: string | undefined;

  /**
   * unstickyHeader - откреплённая шапка. Header уезжает вместе со скроллом контента.
   * @default false
   */
  unstickyHeader?: boolean;

  /** Тултип при hover по canvas-элементам.
   *  Для активации фичи необходимо заполнить данный конфиг,
   * а также добавить нужные изменения в Canvas-элементах или в конфиге колонки.
   */
  tooltip?: TableConfigTooltip;

  /**
   * infinityScroll - бесконечная подгрузка данных при скролле.
   *
   *  Условие активации - наличие самого пропса infinityScroll.
   *
   * При активации infinityScroll отключается дефолтная сортировка и фильтрация.
   * (Предполагается, что если есть infinityScroll,
   * то в таблице представлен не весь объем данных,
   * по этой причине дефолтная сортировка и фильтрация не подходят и будут отображать некорректные данные)
   *
   */
  infinityScroll?: InfinityScrollConfig<RowType>;
  /**
   * @isLoading - состояние загрузки данных для таблицы.
   */
  isLoading?: boolean | { boolean: boolean; skeletonRowsCount: number };
  /**
   * loadingOverlay - конфигурация для отображения оверлея загрузки.
   * Показывает индикатор загрузки поверх таблицы с возможностью кастомизации.
   */
  loadingOverlay?: {
    /**
     * Активен ли оверлей загрузки
     * @default true
     */
    active?: boolean;
    /**
     * Кастомный компонент спиннера
     * @default <Spinner view="secondary" size="36" /> (внутренний компонент)
     */
    spinner?: ReactNode;
    /**
     * Основной заголовок оверлея
     * @default "Загрузка таблицы"
     */
    title?: string;
    /**
     * Подзаголовок, который появится после задержки, пустая строка - значит он не появится
     * @default ""
     */
    subtitle?: string;
    /**
     * Задержка перед показом подзаголовка (мс)
     * @default 10000 (10 секунд)
     */
    showSubtitleDelay?: number;
  };
  /**
   * Empty state внутри content-области canvas-таблицы.
   * Не заменяет control block, header или pagination.
   */
  emptyState?: TableCanvasEmptyStateConfig;
  /**
   * Error state внутри content-области canvas-таблицы.
   * Не заменяет control block, header или pagination.
   */
  errorState?: TableCanvasErrorStateConfig;
  // FIXME:
  // noRowsFallback?: boolean | { custom: ReactNode };
  columnsControl?: ColumnsControlConfig;
  // FIXME:
  // rowDetailPanel?: RowDetailConfig<RowType>;
  // FIXME: Временно комментирую использование, пока не адаптируем TableCanvas
  // rowInstruments?: {
  //   getRowDropdownConfig: RowInstrumentsType<RowType>;
  //   /**
  //    * @default false
  //    */
  //   defaultOpened?: boolean;
  //   /**
  //    * @default true
  //    */
  //   showInControl?: boolean;
  //   /**
  //    * Внешний стейт видимости
  //    */
  //   openedState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  // };
  fullScreenEnabled?: FullScreen;
  /**
   * Переносит портал editor overlay внутрь контейнера таблицы вместо document.body.
   * Решает проблему focus trap и сдвига координат при рендере таблицы в модалке с CSS transform.
   * @default undefined (overlay рендерится в document.body — стандартное поведение)
   */
  editorOverlayPortal?: 'inside';
  keyText?: boolean | KeyTextConfig;
  /**
   * pagination - пропс для пагинации.
   *
   * Условие активации - наличие самого пропса pagination.
   *
   * При активации pagination отключается дефолтные поиск, сортировка и фильтрация.
   * (поиск работает на уровне с фильтрацией и сортировкой, сначала поиск, затем фильтрация, затем сортировка)
   *
   */
  pagination?: PaginationProps;
  /**
   * searching - пропс для поиска по таблицу.
   *
   * Условие активации - наличие searching.enabled: true
   *
   */
  /**
   * Конфигурация табов в сайдбаре
   */
  sidebarConfig?: SidebarConfig;
  searching?: SearchingProps;
  /**
   * onHeaderContextMenu - callback открытия контекстного меню.
   */
  onHeaderContextMenu?: TableGlideInstanceProps<
    RowType,
    SummaryRowType
  >['onHeaderContextMenu'];
  onHeaderContextMenuDropdown?: TableGlideInstanceProps<
    RowType,
    SummaryRowType
  >['onHeaderContextMenuDropdown'];
  onCellContextMenuDropdown?: TableGlideInstanceProps<
    RowType,
    SummaryRowType
  >['onCellContextMenuDropdown'];
  onCellContextMenu?: TableGlideInstanceProps<
    RowType,
    SummaryRowType
  >['onCellContextMenu'];
  /**
   * Обработчик клика по ячейке.
   *
   * Получает \`cell\` readonly [colIndex, rowIndex] от glide, и \`info\` обогащённый объект
   * с row, column, ctxs, refTable (аналогично onCellContextMenu).
   */
  onCellClicked?: (
    cell: readonly [number, number],
    info: TableInfoWithRow<RowType, SummaryRowType>,
  ) => void;
} & GlideInstanceOmitted<RowType, SummaryRowType>;

type GlideInstanceOmitted<
  RowType extends ObjectForExtending,
  SummaryRowType,
> = Pick<
  Omit<
    TableGlideInstanceProps<RowType, SummaryRowType>,
    | keyof TableGlideCustomProps<RowType, SummaryRowType>
    | 'CellReadOnlyEditor' /* CellReadOnlyEditor - свойство только для GlideInstance */
  >,
  | 'className'
  | 'columnSelect'
  | 'minColumnWidth'
  | 'maxColumnWidth'
  | 'maxColumnAutoWidth'
  | 'onVisibleRegionChanged'
  | 'onCellClicked'
  // | 'CellReadOnlyEditor'
  // | 'onGroupHeaderClicked'
  | 'onHeaderClicked'
  | 'onItemHovered'
  | 'trapFocus'
  | 'onColumnResize'
>;
export type CellReadOnlyEditorProps<
  RowType extends ObjectForExtending,
  SummaryRowType,
> = CellReadOnlyEditorGlideInstanceStaticProps &
  EditingCellInfo<RowType, SummaryRowType>;

//  & Pick<
//   DataGridPropsDefault<RowType, SummaryRowType, RowIdType>,
//   | 'summaryRowHeight'
//   | 'onFill'
//   | 'onCopy'
//   | 'onPaste'
//   | 'onCellClick'
//   | 'onCellDoubleClick'
//   | 'onCellContextMenu'
//   | 'onCellKeyDown'
//   | 'onSelectedCellChange'
//   | 'onScroll'
//   | 'onColumnResize'
//   | 'onColumnsReorder'
//   | 'enableVirtualization'
//   | 'rowClass'
//   | 'data-testid'
//   | 'headerRowHeight'
// >;

/**
 * Конфигурация фичи rowMarkers (столбец с нумерацией строк).
 *
 * Столбец frozen, вставляется первым, исключён из reorder/pin/hide/sort/grouping.
 * Поддерживает плоский и древовидный (\`subRows\`) режимы любой глубины вложенности.
 *
 * **Дефолтное поведение** (без \`getRowMarker\`): root-only нумерация —
 * корневые строки получают номер (\`startIndex + rootIndex\`), дочерние — пустую строку.
 *
 * @example
 * \`\`\`tsx
 * // Минимальная конфигурация
 * tableConfig={{ rowMarkers: { startIndex: 1 } }}
 *
 * // Сквозная стабильная нумерация
 * tableConfig={{ rowMarkers: { getRowMarker: ({ flatIndex }) => flatIndex + 1 } }}
 * \`\`\`
 */
export type RowMarkersTableConfig<
  RowType extends ObjectForExtending = ObjectForExtending,
> = {
  /**
   * Стартовый индекс нумерации (для дефолтной логики без \`getRowMarker\`).
   * @default 1
   */
  startIndex?: number;

  /**
   * Ширина столбца с нумерацией (в px).
   * Если задан \`size\` — он приоритетнее.
+  * Если ни \`size\`, ни \`width\` не заданы — ширина подстраивается
+  * под глобальный \`tableConfig.rowSize\` (small=20, medium=32, big=48).
   * @default 32
   */
  width?: number;
  /**
   * Размер столбца. Приоритетнее \`width\`.
   * - \`xs\` = 20px
   * - \`s\` = 32px
   * - \`m\` = 48px
   */
  size?: 'xs' | 's' | 'm';
  /**
   * Кастомная функция нумерации. Полностью переопределяет дефолтную root-only логику.
   * Вызывается при рендере каждой ячейки столбца нумерации.
   *
   * ⚠️ Вызывается не только при полной отрисовке таблицы, но и при ховере/скролле —
   * для **одной** ячейки. Не используйте внешние переменные-счётчики —
   * используйте аргументы (\`siblingPath\`, \`flatIndex\` и др.), они всегда актуальны.
   *
   * @example
   * // Сквозная стабильная нумерация (все строки, номера не прыгают при сворачивании)
   * getRowMarker: ({ flatIndex }) => flatIndex + 1
   *
   * @example
   * // Корневые — номер, дочерние — прочерк
   * getRowMarker: ({ isSubRow, flatIndex }) => isSubRow ? '—' : flatIndex + 1
   *
   * @example
   * // Иерархическая нумерация любой глубины: 1, 1.1, 1.1.1, 1.2, 2
   * getRowMarker: ({ siblingPath }) => siblingPath.map(i => i + 1).join('.')
   */
  getRowMarker?: (args: {
    /** Данные текущей строки. */
    row: RowType;
    /** Уровень строки в дереве: \`0\` — корневая, \`1\` — дочерняя, \`2\` — внучка, и т.д. */
    level: number;
    /** \`true\`, если строка дочерняя (\`level > 0\`). */
    isSubRow: boolean;
    /**
     * Индекс строки в **видимых** строках.
     * ⚠️ **Нестабильный** — меняется при сворачивании/разворачивании веток.
     */
    rowIndex: number;
    /**
     * Стабильный 0-based индекс строки в **полном** дереве (включая скрытые/свёрнутые).
     * Не меняется при collapse/expand — подходит для сквозной нумерации.
     */
    flatIndex: number;
    /**
     * Порядковый номер среди siblings одного родителя (0-based).
     * Для корневых строк — порядковый номер среди всех корневых.
     * Для дочерних — порядковый номер среди children одного \`parentKey\`.
     */
    siblingIndex: number;
    /**
     * Путь siblingIndex-ов от корня до текущей строки (каждый элемент 0-based).
     *
     * Примеры:
     * - корневая строка (2-я): \`[1]\`
     * - дочерняя (3-й ребёнок 2-го корня): \`[1, 2]\`
     * - внучка (1-й ребёнок 1-го ребёнка 1-го корня): \`[0, 0, 0]\`
     *
     * Для иерархической нумерации: \`siblingPath.map(i => i + 1).join('.')\` → \`"1.1.1"\`
     *
     * Для плоской таблицы (без subRows): всегда \`[siblingIndex]\` (один элемент).
     */
    siblingPath: number[];
    /**
     * Ключ родительской строки (\`rowKeyGetter(parent)\`).
     * \`null\` для корневых строк. Работает для **любой** глубины вложенности.
     */
    parentKey: string | number | null;
    /** Текущий видимый \`flattened\` массив строк. */
    rows: readonly RowType[];
  }) => string | number;
};`,"packages/ui-kit/src/components/TableCanvas/feature-filtering/header-filter-button/types.ts$$$FilterComponentInPopoverProps":`type FilterComponentInPopoverProps<
  FilterStateType extends ObjectForExtending,
  ColumnConfig,
> = {
  popoverIsOpen: boolean;
  setPopoverIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  columnConfig: ColumnConfig;
  tabIndex: number;
  headerContextState: HeaderContextValueTypeInstance<FilterStateType> &
    FiltersVariables &
    HeaderContextValueTypeInstance<ObjectForExtending>;
  /**
   * Источник открытия фильтра: из шапки таблицы или из сайдбара
   * Полезно для условной логики в customRender (например, alwaysOpened для combobox)
   */
  filterSource?: 'header' | 'sidebar';
};`,"packages/ui-kit/src/components/TableCanvas/TableGlideInstance/type.ts$$$ContentFormat":`type ContentFormat =
  | 'number' // Стандартное числовое форматирование с локалью ru-RU (разделитель тысяч: пробел, дробная часть: запятая)
  | CustomFormat
  | NumberFormatOptions;`,"packages/ui-kit/src/components/TableCanvas/feature-full-screen/types.ts$$$FullScreen":`type FullScreenObj = {
  /**
   * @default false
   */
  defaultOpened?: boolean;
  state?: [boolean, (arg: (prev: boolean) => typeof prev) => void];
  /**
   * @default true
   */
  showInControl?: boolean;
  /**
   * @default document.body
   */
  portal?: Element | DocumentFragment | false;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/TableCanvas/feature-full-screen/types.ts$$$FullScreenObj":`type FullScreenObj = {
  /**
   * @default false
   */
  defaultOpened?: boolean;
  state?: [boolean, (arg: (prev: boolean) => typeof prev) => void];
  /**
   * @default true
   */
  showInControl?: boolean;
  /**
   * @default document.body
   */
  portal?: Element | DocumentFragment | false;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/TableGlide/types.ts$$$HoverEffectsConfig":"type HoverEffectsConfig = {\n  /**\n   * Подсветка строки под курсором.\n   * `true` — цвет data-ячеек из темы (`bgRowHovered`); объект — свой цвет.\n   * Служебные колонки темнеют `bgServiceRowHovered`, checkbox-строки —\n   * `bgSelectedRowHovered` (всегда из темы, `color` их не переопределяет).\n   */\n  row?: boolean | { color?: string };\n};","packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$InfinityScrollConfig":`type InfinityScrollConfig<RowType extends ObjectForExtending> = {
  /** Триггер достижения скроллом зоны подгрузки данных. */
  onTrigger: (rows: RowType[]) => Promise<void> | void;
  /** Состояние загрузки (скелетоны) новых строк. */
  isLoading: boolean;
  /**
   * Флаг, когда все данные загружены — false.
   * @default true
   */
  hasMore?: boolean;
  /**
   * Для mode='region': за сколько строк до конца триггерить загрузку.
   * @default 5
   */
  rowThreshold?: number;
};`,"packages/ui-kit/src/components/TableCanvas/feature-key-text/types.ts$$$KeyText":"type KeyText = 'key' | 'text' | 'keyText' | 'textKey';","packages/ui-kit/src/components/TableCanvas/feature-key-text/types.ts$$$KeyTextConfig":`type KeyTextConfig = {
  showInControl?: boolean;
  defaultActiveOption?: KeyText;
  controlBlock: {
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
     */
    domMetadata?: DomMetadata;
  };
  sidebar: {
    /**
     * Метки для автоматизированного тестирования и аналитики
     * Добавляет data-атрибуты и CSS-классы к элементам RightSidebar
     */
    domMetadata?: DomMetadata;
  };
};`,"packages/ui-kit/src/components/TableCanvas/feature-notifications/types.ts$$$TableNotification":`interface TableNotification {
  /** Категория: с какой операцией связано событие. */
  type: TableNotificationType;
  /** Серьёзность. */
  level: TableNotificationLevel;
  /** Машинный код причины. */
  code: TableNotificationCode;
  /** Дефолтный текст (RU). Потребитель может показать свой. */
  message: string;
  /** Детали события (напр. кол-во пропущенных ячеек). */
  meta?: Record<string, unknown>;
}`,"packages/ui-kit/src/components/TableCanvas/feature-notifications/types.ts$$$TableNotificationsConfig":`interface TableNotificationsConfig {
  /** Вызывается на каждое событие таблицы (ошибки copy/paste и т.д.). */
  onNotification: (event: TableNotification) => void;
}`,"packages/ui-kit/src/components/TableCanvas/feature-notifications/types.ts$$$TableNotificationType":"type TableNotificationType = 'copy' | 'paste' | 'fill' | 'pin';","packages/ui-kit/src/components/TableCanvas/feature-notifications/types.ts$$$TableNotificationLevel":"type TableNotificationLevel = 'error' | 'warning' | 'info';","packages/ui-kit/src/components/TableCanvas/feature-notifications/types.ts$$$TableNotificationCode":`type TableNotificationCode =
  | 'multi-range-scattered'
  | 'readonly-abort'
  | 'overflow-abort'
  | 'validation-skipped'
  | 'no-selection';`,"packages/ui-kit/src/components/TableCanvas/feature-pagination/types.ts$$$PaginationProps":`type PaginationProps = Omit<
  ComponentProps<typeof Pagination>,
  'onChangePageValue' | 'onChange'
> & {
  onChangePageValue?: (
    page: number | undefined,
    scrollToTop: () => void,
  ) => void;
  onChange?: (
    newPage: number | undefined,
    perPage: number | undefined,
    scrollToTop: () => void,
  ) => void;
  /**
   * Нужно ли активировать умную адаптацию изменения количества слотов в зависимости от ширины блока пагинации и от size
   * @default false
   */
  responsiveSlots?: boolean;
  /**
   * Callback при ресайзе блока с пагинацией таблицы
   */
  onResize?: (width: number) => void;
};`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$RowSize":`type RowSize = {
  /**
   * Показывать кнопку в блоке управления
   */
  showInControl: boolean;
  /**
   * Значение по умолчанию
   */
  default?: SIZE;
  /**
   * Список доступных значений размера
   */
  available?: SIZE[];
  /**
   * Обработчик изменения rowSize
   * @param size
   * @returns
   */
  onRowSizeChange?: (size: SIZE) => void;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$RowHeightFunc":`type RowHeightFunc<RowType> = (
  row: RowType,
  currentRowSize: { rowSizeName: SIZE; rowSizeValue: number },
  rowIndex: number,
) => number;`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$RowMarkersTableConfig":`type RowMarkersTableConfig<
  RowType extends ObjectForExtending = ObjectForExtending,
> = {
  /**
   * Стартовый индекс нумерации (для дефолтной логики без \`getRowMarker\`).
   * @default 1
   */
  startIndex?: number;

  /**
   * Ширина столбца с нумерацией (в px).
   * Если задан \`size\` — он приоритетнее.
+  * Если ни \`size\`, ни \`width\` не заданы — ширина подстраивается
+  * под глобальный \`tableConfig.rowSize\` (small=20, medium=32, big=48).
   * @default 32
   */
  width?: number;
  /**
   * Размер столбца. Приоритетнее \`width\`.
   * - \`xs\` = 20px
   * - \`s\` = 32px
   * - \`m\` = 48px
   */
  size?: 'xs' | 's' | 'm';
  /**
   * Кастомная функция нумерации. Полностью переопределяет дефолтную root-only логику.
   * Вызывается при рендере каждой ячейки столбца нумерации.
   *
   * ⚠️ Вызывается не только при полной отрисовке таблицы, но и при ховере/скролле —
   * для **одной** ячейки. Не используйте внешние переменные-счётчики —
   * используйте аргументы (\`siblingPath\`, \`flatIndex\` и др.), они всегда актуальны.
   *
   * @example
   * // Сквозная стабильная нумерация (все строки, номера не прыгают при сворачивании)
   * getRowMarker: ({ flatIndex }) => flatIndex + 1
   *
   * @example
   * // Корневые — номер, дочерние — прочерк
   * getRowMarker: ({ isSubRow, flatIndex }) => isSubRow ? '—' : flatIndex + 1
   *
   * @example
   * // Иерархическая нумерация любой глубины: 1, 1.1, 1.1.1, 1.2, 2
   * getRowMarker: ({ siblingPath }) => siblingPath.map(i => i + 1).join('.')
   */
  getRowMarker?: (args: {
    /** Данные текущей строки. */
    row: RowType;
    /** Уровень строки в дереве: \`0\` — корневая, \`1\` — дочерняя, \`2\` — внучка, и т.д. */
    level: number;
    /** \`true\`, если строка дочерняя (\`level > 0\`). */
    isSubRow: boolean;
    /**
     * Индекс строки в **видимых** строках.
     * ⚠️ **Нестабильный** — меняется при сворачивании/разворачивании веток.
     */
    rowIndex: number;
    /**
     * Стабильный 0-based индекс строки в **полном** дереве (включая скрытые/свёрнутые).
     * Не меняется при collapse/expand — подходит для сквозной нумерации.
     */
    flatIndex: number;
    /**
     * Порядковый номер среди siblings одного родителя (0-based).
     * Для корневых строк — порядковый номер среди всех корневых.
     * Для дочерних — порядковый номер среди children одного \`parentKey\`.
     */
    siblingIndex: number;
    /**
     * Путь siblingIndex-ов от корня до текущей строки (каждый элемент 0-based).
     *
     * Примеры:
     * - корневая строка (2-я): \`[1]\`
     * - дочерняя (3-й ребёнок 2-го корня): \`[1, 2]\`
     * - внучка (1-й ребёнок 1-го ребёнка 1-го корня): \`[0, 0, 0]\`
     *
     * Для иерархической нумерации: \`siblingPath.map(i => i + 1).join('.')\` → \`"1.1.1"\`
     *
     * Для плоской таблицы (без subRows): всегда \`[siblingIndex]\` (один элемент).
     */
    siblingPath: number[];
    /**
     * Ключ родительской строки (\`rowKeyGetter(parent)\`).
     * \`null\` для корневых строк. Работает для **любой** глубины вложенности.
     */
    parentKey: string | number | null;
    /** Текущий видимый \`flattened\` массив строк. */
    rows: readonly RowType[];
  }) => string | number;
};`,"packages/ui-kit/src/components/TableCanvas/feature-rows-grouping/types.ts$$$RowsGrouping":`type RowsGrouping<
  RowType extends ObjectForExtending,
  SummaryRowType = unknown,
  ColumnConfig extends LocalColumnInstance = LocalColumnInstance,
> = {
  /**
   * массив группированных колонок и его setter
   */
  groupByState: [string[], React.Dispatch<React.SetStateAction<string[]>>];
  /**
   * Функция определения уникального id строки
   */
  rowKeyGetter: (row: RowType) => string | number;
  /**
   * Показывать ли кнопку «Группировать» в controlBlock.
   * При \`false\` кнопка скрыта и не участвует в компрессии,
   * но группировка строк продолжает работать от внешнего \`groupByState\`.
   * @default true
   */
  showInControl?: boolean;
  /**
   * @default 'Группировка'
   */
  groupedColumnProps?: Partial<Pick<ColumnConfig, 'name' | 'width'>> & {
    renderCell?: (
      props: CellInfoGlideInstance<RowType, SummaryRowType> & {
        parentGroupKey: string | undefined;
        groupByArr: string[];
      },
    ) => CanvasContent;
    rowsGrouping?: Pick<
      ColumnRowsGrouping<RowType, ColumnConfig>,
      'renderGroupCell'
    >;
  };
  expandAllBtn?: {
    /**
     * Функция для расчета состояния открытости всех раскрываемых строк. Функция должна быть чистой.
     * @returns boolean
     */
    expandedAll: (p: {
      /**
       * allRowsIds - уникальные идентификаторы всех строк (группировок и обычных)
       */
      allRowsIds: Set<string | number> | null;
      /**
       * shownRows - представленные прямо сейчас строки (группировки и обычные). Или видимые строки - видимые не во viewport-е, а которые должны быть показаны из-за раскрытий)
       */
      shownRows: readonly RowType[];
      expandedRowsIds: Set<string | number>;
    }) => boolean;
  };
  /**
   * \`groupButton\` - свойство для кастомизации кнопки с выпадающим списком
   */
  groupButton?: {
    getGroupedCount?: (props: {
      /**
       * высчитанное автоматически количество активных группировок.
       */
      currCount: number;
      /**
       * активные группировки.
       */
      groupedCols: string[];
      columns: {
        /**
         * \`visible\` - видимые в выпадающем списке колонки-группировки.
         */
        visible: string[];
        /**
         * \`hidden\` - невидимые  или не участвующие в группировке колонки
         *
         * (columnConfig.rowsGrouping=undefined ||
         *  columnConfig.rowsGrouping.groupByColumn=false).
         */
        hidden: string[];
      };
    }) => number;
    /**
     * \`defaultCustomItems\` - свойство для добавления ключей группировки, которых нет в таблице.
     *
     * \`DropdownItemOption.value\` - необходимо заполнять ключом, который существует в данных.
     */
    defaultCustomItems?: DropdownItemOption[];
    /**
     * \`onItemSelect\` - свойство для полного контроля над изменением группировки при выборе опций.
     *
     * \`DropdownItemOption.value\` - необходимо заполнять ключом, который существует в данных.
     */
    onItemSelect?: (props: {
      item: DropdownItemOption;
      setGroupedCols: React.Dispatch<React.SetStateAction<string[]>>;
      columns: {
        visible: string[];
        hidden: string[];
      };
    }) => void;
  };
  /**
   * \`groupRowReplaceTo\` - свойство для изменения данных сгруппированных строк. Может понадобиться в редких случаях.
   *
   * @param groupRow данные сгруппированной строки
   * @returns измененная группировка или строка без группировки — строка, которые заменит groupRow
   */
  groupRowReplaceTo?: (
    groupRow: GroupRow<RowType>,
  ) => GroupRow<RowType> | RowType;
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};

export type RenderGroupCellProps<
  RowType extends ObjectForExtending,
  ColumnConfig extends LocalColumnInstance = LocalColumnInstance,
> = {
  column: ColumnConfig;
  tabIndex: number;
  // TODO isExpanded: boolean;
  // TODO toggleGroup: () => void;
} & GroupRow<RowType>;

export type ColumnRowsGrouping<
  RowType extends ObjectForExtending,
  ColumnConfig extends LocalColumnInstance,
> = {
  /**
   * @default true - при наличии ColumnConfig.rowsGrouping
   */
  groupByColumn?: boolean;
  /**
   * @default ColumnConfig.key
   */
  columnGroupLabel?: string;
  renderGroupCell?: (
    props: RenderGroupCellProps<RowType, ColumnConfig>,
  ) => CanvasContent;
};`,"packages/ui-kit/src/components/TableCanvas/feature-searching/types.ts$$$SearchingProps":`type SearchingProps = {
  /**
   * Активация функционала поиска (обязательный параметр)
   */
  enabled: boolean;

  /**
   * Если true - поиск НЕ будет работать на фронте (ручное управление)
   * Полезно когда поисковая логика полностью управляется на бэкенде
   */
  manualSearching?: boolean;

  /**
   * Начальное значение поискового запроса
   */
  defaultSearchQuery?: string;

  /**
   * Видимость UI блока поиска
   */
  showSearchBlock?: boolean;

  /**
   * Состояние и сеттер для контролируемого режима
   * [текущее значение, функция установки значения]
   */
  searchQueryState?: [string, React.Dispatch<React.SetStateAction<string>>];

  /**
   * Обработчик изменения с debounce
   * Вызывается с задержкой после окончания ввода
   * @param value - текущее значение поискового запроса
   */
  onDebouncedChange?: (value: string) => void;

  /**
   * Мгновенный обработчик изменений
   * Вызывается при каждом изменении input
   * @param value - текущее значение поискового запроса
   */
  onChange?: (value: string) => void;

  /**
   * Задержка для debounce (в миллисекундах)
   * @default 300
   */
  debounceDelay?: number;

  /**
   * Активация debounce механизма
   * @default true
   */
  isDebounceActive?: boolean;

  /**
   * Дополнительные классы для контейнера поиска
   */
  searchClasses?: string;

  /**
   * Placeholder для поискового input
   * @default "Поиск"
   */
  placeholder?: string;

  /**
   * DOM метаданные для аналитики и онбординга
   */
  domMetadata?: DomMetadata;

  /**
   * Режим запуска поиска
   * - true: поиск запускается автоматически при вводе текста (по умолчанию)
   * - false: поиск запускается только по клику на иконку поиска или нажатию Enter
   */
  searchOnType?: boolean;

  /**
   * Конфигурация автокомплита для поиска.
   * При передаче поле поиска заменяется на Autocomplete с подсказками.
   */
  autocomplete?: SearchAutocompleteConfig;
};`,"packages/ui-kit/src/components/TableCanvas/feature-searching/types.ts$$$SearchAutocompleteConfig":`type SearchAutocompleteConfig = Pick<
  AutocompleteProps,
  | 'suggestions'
  | 'onSuggestionSelect'
  | 'threshold'
  | 'renderList'
  | 'renderListEnd'
  | 'beforeList'
  | 'listMaxHeight'
  | 'listWidth'
  | 'portal'
  | 'hasDivider'
  | 'beforeList'
  | 'afterList'
  | 'virtual'
  | 'hasDivider'
  | 'onScroll'
  | 'zIndex'
  | 'filter'
  | 'renderItem'
>;`,"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts$$$SelectingRowConfig":`type SelectingRowConfig<RowType, RowIdType extends string | number> = {
  /**
   * showDefault - состояние, отвечающее за то, видно ли по дефолту чекбоксы.
   */
  showDefault?: boolean;
  /**
   * showState - состояние, отвечающее за то, видны ли чекбоксы.
   */
  showState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * showInControl - состояние, отвечающее за то, добавлять ли выбор строк как фичу, которую можно скрывать и раскрывать в правой части контролблока.
   */
  showInControl?: boolean;
  /**
   * selectingRules - пропс, отвечающий за кастомизацию логики выбора строк.
   */
  selectingRules?: {
    // TODO доработать логику
    // changeableOfRowWithoutCheckbox?: boolean;
    // changeableDisabledRow?: boolean;
    /**
     * levels - логика активации чекбоксов у строк с определенным уровнем вложенности.
     */
    levels?: number | 'all' | number[] | ((lvl: number) => boolean);
  };
  disableSummaryCheckboxInHeader?: boolean;
  hideSummaryCheckboxInHeader?: boolean;
  /**
   * hideSummaryCheckbox - в островке  массовых действий
   */
  hideSummaryCheckbox?: boolean;
  /**
   * summaryChecked - пропс, отвечающий за логику состояния checked у итогового чекбокса в левой части контролблока.
   */
  summaryChecked?: {
    checked: boolean | SummaryCheckedFunc<RowType, boolean>;
    indeterminate:
      | boolean
      | SummaryCheckedFunc<RowType, boolean, { checkedAll: boolean }>;
    getCountOfChecked: SummaryCheckedFunc<RowType, number>;
    onChange: SummaryCheckedFunc<
      RowType,
      void,
      {
        checkedAll: boolean;
        clearButtonClicked?: boolean;
        setSelectedRowsIds: React.Dispatch<
          React.SetStateAction<ReadonlySet<string | number>>
        >;
      }
    >;
  };

  /**
   * summaryCheckedUncontrolled - пропс отвечающий за колбеки в неконтролируемом режиме
   */
  summaryCheckedUncontrolled?: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };

  /**
   * rowShowCheckbox - пропс, отвечающий за то, будет ли у конкретной строки отрендерен чекбокс.
   */
  rowShowCheckbox?: RowShowCheckbox<RowType>;
  /**
   * rowCheckboxDisabled - пропс, отвечающий за то, будет ли у конкретной строки чекбокс задизейблен.
   */
  rowCheckboxDisabled?: RowCheckboxDisabled<RowType>;
  /**
   * Функция для переопределения checked, indeterminate для каждой строки.
   * Что будет возвращено функцией в объекте, то будет переопределено.
   */
  rowGetStates?: (
    p: RowGetStatesProps<RowType, RowIdType>,
  ) => RowGetStatesReturnType<RowType, RowIdType> | null;
  groupedRow?: {
    /**
     * Функция для переопределения checked, indeterminate, showCheckbox, checkboxDisabled для группированных строк.
     * Что будет возвращено функцией в объекте, то будет переопределено.
     */
    getStates: (p: {
      checkedCalculated: boolean;
      indeterminateCalculated: boolean;
      row: GroupRow<RowType>;
      selectedRows: ReadonlySet<string | number>;
      selectedChildCount: number;
      childCount: number;
    }) => {
      checked?: boolean | null;
      indeterminate?: boolean | null;
      showCheckbox?: boolean | null;
      checkboxDisabled?: boolean | null;
    } | null;
    onChange?: (p: {
      row: GroupRow<RowType>;

      setSelectedRows: React.Dispatch<
        React.SetStateAction<ReadonlySet<string | number>>
      >;
      checked: boolean;
      indeterminate: boolean;
      checkboxDisabled: boolean;
      showCheckbox: boolean;
      defaultSetter: () => void;
    }) => void;
  };
};`,"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts$$$RowGetStatesProps":`type RowGetStatesProps<RowType, RowIdType> = {
  /**
   * просчитанное по умолчанию значение наличия чекбокса у строки
   */
  isHaveCheckboxCalculated: boolean;
  /**
   * просчитанное по умолчанию значение checked у строки
   */
  isRowSelectedCalculated: boolean;
  /**
   * просчитанное по умолчанию значение indeterminate у строки
   */
  isIndeterminateCalculated: boolean;
  /**
   * просчитанное по умолчанию значение disabled у строки
   */
  isRowSelectionDisabled: boolean;

  rowKeyGetter: RowKeyGetter<RowType, RowIdType>;
  row: RowType;
  /**
   * Все строки таблицы в плоском виде с информацией об уровне и родительской строке
   */
  flattenedRowsMap: Map<
    RowIdType,
    RowType & {
      level?: number;
      parent?: RowType | null | undefined;
    }
  >;
  /**
   * стейт всех выбранных строк (Set)
   */
  selectedRows: ReadonlySet<RowIdType>;
  /**
   * сеттер стейта всех выбранных строк
   */
  setSelectedRows: React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>;
  /**
   * уровень вложенности текущей строки
   */
  level: number;
  /**
   * родительская строка для текущей строки
   */
  parent: RowType | null;
  /**
   * хендлер для получения детальных данных о дочерних строках текущей строки
   */
  getRowChildrenInfo: () => ChildrenInfo<RowType, RowIdType>;
  rowShowCheckbox: RowShowCheckbox<RowType> | undefined;
  rowCheckboxDisabled: RowCheckboxDisabled<RowType> | undefined;
};`,"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts$$$RowGetStatesReturnType":`type RowGetStatesReturnType<RowType, RowIdType> = {
  /**
   * состояние checked, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  checked?: boolean | null;
  /**
   * состояние indeterminate, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  indeterminate?: boolean | null;
  /**
   * состояние showCheckbox, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  showCheckbox?: boolean | null;
  /**
   * состояние checkboxDisabled, которое будет окончательным. Если не передано, то будет взято из расчетов по умолчанию
   */
  checkboxDisabled?: boolean | null;
  /**
   * onChange у чекбокса, который будет окончательным. Если не передан, то будет взят из расчетов по умолчанию
   */
  onChange?:
    | ((p: {
        allParentsMap: Map<RowIdType, RowType>;
        isRowInLevels: (row: RowType) => boolean;
        defaultSetter: () => void;
        getRowParentsInfo: () => {
          all: RowType[];
          getShouldBeSelectedInfo: (
            actualSelecteds: ReadonlySet<RowIdType>,
          ) => {
            shouldBeSelected: RowIdType[];
            shouldNotBeSelected: RowIdType[];
          };
        };
      }) => void)
    | null;
};`,"packages/ui-kit/src/components/TableCanvas/feature-select-row/types.ts$$$ChildrenInfo":`type ChildrenInfo<RowType, RowIdType> = {
  /**
   * все дочерние строки
   */
  all: RowType[];
  /**
   * все дочерние строки, которые disabled
   */
  disabled: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled
   */
  notDisabled: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled и НЕ скрыты через rowShowCheckbox
   */
  notDisabledAndNotHidden: RowIdType[];
  /**
   * все дочерние строки, которые НЕ disabled и НЕ скрыты через rowShowCheckbox все выбраны
   */
  notDisabledAndNotHiddenAreSelected: boolean;
  /**
   * все дочерние строки, которые скрыты через rowShowCheckbox
   */
  hidden: RowIdType[];
  /**
   * все дочерние строки, которые НЕ скрыты через rowShowCheckbox
   */
  notHidden: RowIdType[];
  /**
   * все дочерние строки, которые selected (уже выбраны, у которых чекбокс проставлен)
   */
  selected: RowIdType[];
  /**
   * все дочерние строки, которые НЕ selected (не выбраны, у которых чекбокс НЕ проставлен)
   */
  notSelected: RowIdType[];
  /**
   * есть ли хоть одна дочерная строка, которая выбрана (у которой чекбокс проставлен)
   */
  someChildrenIsSelected: boolean;
};`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$SidebarConfig":`type SidebarConfig = {
  /**
   * Включен ли sidebar. Отвечает только за UI. Не влияет на перерасчёт фичей.
   * @default true
   */
  enabled?: boolean;
  /**
   * Открыт ли sidebar при первом рендере (uncontrolled-режим).
   * Игнорируется, если передан openState.
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Внешний контроль открытия/закрытия sidebar.
   * Если передан — источник истины, defaultOpen игнорируется.
   */
  openState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  /**
   * id вкладки, выбранной по умолчанию (актуально при открытом сайдбаре).
   * Если id не найден или у вкладки showInSidebar=false — используется первая доступная.
   */
  defaultActiveTabId?: string;
  /**
   * Внешний контроль активной вкладки (controlled-режим).
   * Если передан — источник истины, defaultActiveTabId игнорируется.
   */
  activeTabState?: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>,
  ];
  /**
   * Колбэк смены активной вкладки. Вызывается и в uncontrolled-режиме.
   * При закрытии сайдбара приходит null.
   */
  onActiveTabChange?: (tabId: string | null, tab?: SidebarTab) => void;
  /**
   * Кастомные табы
   */
  customTabs?: Array<
    Omit<SidebarTab, 'id'> & {
      id: Exclude<string, DefaultSidebarTabIds>;
    }
  >;
  /**
   * Порядок отображения кастомных вкладок
   */
  customTabsOrder?: Array<Exclude<string, DefaultSidebarTabIds>>;
  defaultTabs?: Array<
    | {
        id: 'filtering' | 'columns';
        /** название таба в рамках горизонтального табов внутри таба настройки */
        label?: string;
        /** название таба в рамках вертикальных табов сайдбара (если данный таб окажется единственным табом в настройках) */
        title?: string;
        /**
         * Метки для автоматизированного тестирования и аналитики
         * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
         */
        domMetadata?: DomMetadata;
        /**
         * Кастомный элемент справа от title в шапке сайдбара
         */
        titleRightSlot?: React.ReactNode;
        /** @default true */
        showInSidebar?: boolean;
        /** тултип иконки шестеренки (для табов с id = filtering и columns - недоступен. Настраивается через таб с id='tableSettings') */
        iconTooltipText?: undefined;
      }
    | {
        id: 'tableSettings';
        /** название таба в рамках горизонтального табов внутри таба настройки */
        label?: string;
        /** название таба в рамках вертикальных табов сайдбара */
        title?: string;

        /**
         * Метки для автоматизированного тестирования и аналитики
         * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
         */
        domMetadata?: DomMetadata;
        /**
         * Кастомный слот для вкладки tableSettings (рендерится после общих настроек)
         * Только дл id: 'tableSettings'
         */
        customGeneralSettingsSlot?: React.ReactNode;
        /**
         * Кастомный элемент справа от title в шапке сайдбара
         */
        titleRightSlot?: React.ReactNode;
        /** @default true */
        showInSidebar?: boolean;
        /** тултип иконки шестеренки @default 'Настройки' */
        iconTooltipText?: string;
      }
  >;
};`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$DefaultSidebarTabIds":"type DefaultSidebarTabIds = 'columns' | 'tableSettings' | 'filtering';","packages/ui-kit/src/components/TableCanvas/widgets/control-block/types.ts$$$SidebarTab":`type SidebarTab = {
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
};`,"packages/ui-kit/src/components/TableCanvas/feature-sorting/types.ts$$$SortColumn":`interface SortColumn {
  readonly columnKey: string;
  readonly direction: SortDirection;
}`,"packages/ui-kit/src/components/TableCanvas/feature-sorting/types.ts$$$SortDirection":"type SortDirection = 'ASC' | 'DESC';","packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts$$$Comparator":`type Comparator<Row extends ObjectForExtending> = (
  a: Row,
  b: Row,
) => number;`,"packages/ui-kit/src/components/TableCanvas/feature-tree/types.ts$$$SubRows":`type SubRows<RowType, RowIdType> = {
  /**
   * Функция получения дочерних строк.
   *
   * ⚠️ **Должна быть чистой и стабильной** — не менять логику между рендерами.
   *
   * Если структура дерева может динамически меняться — оберните в \`useCallback\`.
   */
  getSubRows: (row: RowType) => RowType[] | undefined;
  /**
   * Функция получения уникального ключа строки.
   *
   * ⚠️ **Должна быть чистой и стабильной** — не менять логику между рендерами.
   *
   * Если логика получения ключа может динамически меняться — оберните в \`useCallback\`.
   */
  rowKeyGetter: (row: RowType) => RowIdType;
  /**
   * Внешний стейт развёрнутых строк.
   * Если не задан — используется внутренний \`useState\`.
   */
  expandedIdsState?: [
    Set<string | number>,
    (
      newV:
        | Set<string | number>
        | ((prev: Set<string | number>) => Set<string | number>),
    ) => void,
  ];
};`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$SummaryRowsConfig":`type SummaryRowsConfig = {
  showDefault: boolean;
  showInControl: boolean;
} & {
  /**
   * Метки для автоматизированного тестирования и аналитики
   * Добавляет data-атрибуты и CSS-классы к элементам controlBlock
   */
  domMetadata?: DomMetadata;
};`,"packages/ui-kit/src/components/TableGlide/types.ts$$$CellThemeOverrideResult":`type CellThemeOverrideResult = Partial<{
  bgCell: string;
  cellHorizontalPadding: number;
  cellVerticalPadding: number;
}>;`,"packages/ui-kit/src/components/TableGlide/lib/canvas/utils/portalHoverEvents.ts$$$CanvasNodeTooltipConfig":`type CanvasNodeTooltipConfig =
  | string
  | (CanvasNodeTooltipProps & {
      /** Текст тултипа (только string, не ReactNode). */
      text: string;
      /** Задержка перед показом (мс). По умолчанию 0. */
      mouseEnterDelay?: number;
      /** Задержка перед скрытием после ухода мыши (мс). По умолчанию 0. */
      mouseLeaveDelay?: number;
    });`,"packages/ui-kit/src/components/TableGlide/lib/canvas/utils/portalHoverEvents.ts$$$CanvasNodeTooltipProps":`type CanvasNodeTooltipProps = Pick<
  TooltipProps,
  'placement' | 'view' | 'minWidth' | 'maxWidth'
> & {
  /** Сохранять переносы строк (\\n) в тексте тултипа через white-space: pre-line. @default false */
  preserveLineBreaks?: boolean;
};`,"packages/ui-kit/src/components/TableCanvas/feature-tooltip/types.ts$$$TooltipConfigResult":"type TooltipConfigResult = CanvasNodeTooltipConfig | null;","packages/ui-kit/src/components/TableCanvas/feature-tooltip/types.ts$$$TooltipData":`interface TooltipData {
  tooltipText: string;
  tooltipProps?: CanvasNodeTooltipProps;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
}`,"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts$$$TableConfigTooltip":`type TableConfigTooltip = {
  /**
   * Включить/выключить колоночные и кастомные тултипы (cellTooltip, headerCellTooltip).
   * Внутренние тултипы (drag-иконка в шапке и другие по nodeId) работают всегда.
   * @default false
   */
  enabled?: boolean;
  /** Глобальная задержка перед показом тултипа (мс). Per-node переопределяет. @default 500 */
  mouseEnterDelay?: number;
  /** Глобальная задержка перед скрытием тултипа (мс). Per-node переопределяет. @default 0 */
  mouseLeaveDelay?: number;
};`,"packages/ui-kit/src/components/TableGlide/lib/canvas/utils/portalHoverEvents.ts$$$CanvasPortalHoverDetail":`interface CanvasPortalHoverDetail<
  TContext extends TooltipContextShape = TooltipContextShape
> {
  visible: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  node?: CanvasNode | null;
  nodeId?: string;
  source?: CanvasPortalSource;
  originId?: string;
  /** column, row, ctxs, refTable — тип задаётся generic TContext */
  tooltipContext?: TContext;
  /** Конфиг с ноды (проп tooltip на Canvas-элементе). */
  tooltipFromNode?: CanvasNodeTooltipConfig;
  /**
   * Приоритет события. usePortalHover не заменяет активный тултип с бо́льшим приоритетом.
   * - 1 — canvas-нода (CanvasHoverController)
   * - 0 — колоночный тултип (useItemHoveredHandler)
   * @default 0
   */
  priority?: number;
}`,"packages/ui-kit/src/components/TableTabs/TableTabs.types.ts$$$TableTabsProps":`type TableTabsProps<T extends TabId = TabId> = PropsWithChildren & {
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
};`,"packages/ui-kit/src/components/TableTabs/TableTabs.types.ts$$$TabPanelProps":`type TabPanelProps<T extends TabId = TabId> = {
  /** Идентификатор таба (должен совпадать с tabId в массиве tabs) */
  tabId: T;
  /**
   * Размонтировать контент при переключении на другой таб
   * @default true
   */
  unmountOnClose?: boolean;
} & BoxProps;`,"packages/ui-kit/src/components/TableTabs/TableTabs.types.ts$$$TabId":"type TabId = string | number;","packages/ui-kit/src/components/TableTabs/TableTabs.types.ts$$$TCustomOrNotTab":"type TCustomOrNotTab<T extends TabId> = TTabItem<T> | TCustomTabItem<T>;","packages/ui-kit/src/components/TableTabs/TableTabs.types.ts$$$TTabItem":`type TTabItem<T extends TabId> = {
  tabId: T;
  label: ReactNode;
} & ComponentProps<typeof TabItem>;`,"packages/ui-kit/src/components/TableTabs/TableTabs.types.ts$$$TCustomTabItem":"type TCustomTabItem<T extends TabId> = { tabId: T; custom: ReactNode };","packages/ui-kit/src/components/TableTabs/TableTabs.types.ts$$$TTabsProps":"type TTabsProps = ComponentProps<typeof Tabs>;","packages/ui-kit/src/components/TableTabs/TableTabs.types.ts$$$TTabsContainerOptions":`type TTabsContainerOptions = {
  /**
   * Максимальная ширина контейнера табов.
   * Если установлено, контейнер будет иметь ограничение ширины и стрелки прокрутки при переполнении.
   * Может быть числом (пиксели) или строкой (CSS значение, например '250px', '50%').
   * Если не указано, ограничения ширины не будет.
   */
  maxWidth?: number | string;
};`,"packages/ui-kit/src/components/TextArea/TextArea.types.ts$$$TextAreaProps":`type TextAreaProps = TextAreaBaseProps & {
  /**
   * Callback при нажатии на кнопку очистки поля ввода.
   */
  onClear?: () => void;
};`,"packages/ui-kit/src/components/TextField/TextField.tsx$$$TextFieldProps":`type TextFieldProps = TextFieldBaseProps & {
  /**
   * Callback при нажатии на кнопку очистки поля ввода.
   * При наличии value и onClear справа отображается крестик.
   */
  onClear?: () => void;
};`,"packages/ui-kit/src/components/TextField/TextFieldSearch.tsx$$$TextFieldSearchBaseProps":`type TextFieldSearchBaseProps = {
  /**
   * Размер Поля ввода
   */
  size?: 'xs' | 's';
  /**
   * Действие при выполнении нажатия на кнопку очистки поля ввода
   * @deprecated Используйте onClear
   */
  handlerClear?: () => void;
  /**
   * Действие при выполнении нажатия на кнопку очистки поля ввода
   */
  onClear?: () => void;
};`,"packages/ui-kit/src/components/Tooltip/TooltipList.tsx$$$TooltipListProps":`type TooltipListProps = Omit<TooltipProps, 'text' | 'children'> & {
  groupLabel?: string;
  items: string[];
  children: React.ReactNode;
  /**
   * Растягивает внутренние обёртки Tooltip (popover-target, popover-wrapper) на 100% ширины родителя.
   * Используйте при размещении TooltipList внутри Popover-контента (например, FiltersActions.FiltersButtonWithPopover),
   * чтобы дочерний элемент (Combobox и т.д.) занимал всю доступную ширину.
   */
  fullWidth?: boolean;
};`,"packages/ui-kit/src/components/TourWidget/types.ts$$$TourWidgetOrientation":"type TourWidgetOrientation = 'vertical' | 'horizontal';","packages/ui-kit/src/components/TourWidget/types.ts$$$TourWidgetCss":"type TourWidgetCss = string | CSSObject | FlattenSimpleInterpolation;","packages/ui-kit/src/components/TourWidget/types.ts$$$TourWidgetProps":`type TourWidgetProps = ComponentPropsWithoutRef<'div'> & {
  /**
   * @default 'vertical'
   */
  orientation?: TourWidgetOrientation;
  /**
   * Активный шаг тура. Нумерация с нуля.
   */
  activeStepIndex?: number;
  $css?: TourWidgetCss;
};`,"packages/ui-kit/src/components/TourWidget/types.ts$$$TourWidgetHeaderProps":`type TourWidgetHeaderProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'title'
> & {
  title?: ReactNode;
  description?: ReactNode;
  $css?: TourWidgetCss;
};`,"packages/ui-kit/src/components/TourWidget/types.ts$$$TourWidgetContentProps":`type TourWidgetContentProps = ComponentPropsWithoutRef<'div'> & {
  children?: ReactNode;
  $css?: TourWidgetCss;
};`,"packages/ui-kit/src/components/TourWidget/types.ts$$$TourWidgetFooterProps":`type TourWidgetFooterProps = ComponentPropsWithoutRef<'div'> & {
  children?: ReactNode;
  $css?: TourWidgetCss;
};`,"packages/ui-kit/src/components/TourWidget/types.ts$$$TourWidgetBulletsProps":`type TourWidgetBulletsProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children' | 'onClick'
> & {
  count: number;
  $css?: TourWidgetCss;
};`,"packages/ui-kit/src/components/TourWidget/types.ts$$$TourWidgetBulletProps":`type TourWidgetBulletProps = Omit<
  ComponentPropsWithoutRef<'span'>,
  'onClick'
> & {
  /**
   * Индекс буллета. Сравнивается с \`TourWidget.activeStepIndex\`.
   */
  index?: number;
  /**
   * Ручное переопределение активного состояния.
   */
  active?: boolean;
  $css?: TourWidgetCss;
};`,"packages/ui-kit/src/components/Typography/Typography.tsx$$$TypographyProps":`type TypographyProps<T extends TypographyVariant> = {
  variant: T;
  children: React.ReactNode;
  refTypography?: LegacyRef<HTMLDivElement> | undefined;
} & PropsForVariant<T>;`,"packages/ui-kit/src/components/Typography/Typography.tsx$$$TypographyVariant":"type TypographyVariant = keyof typeof typographyComponents;","packages/ui-kit/src/components/Typography/TypographyWithAutoTooltip.types.ts$$$TypographyWithAutoTooltipProps":`type TypographyWithAutoTooltipProps<T extends TypographyVariant> = {
  tooltipText?: React.ReactNode;
  tooltipProps?: Omit<TooltipProps, 'text' | 'target' | 'trigger' | 'opened'>;
  lines?: number;
} & Omit<TypographyProps<T>, 'frame'>;`,"packages/ui-kit/src/utils/breakpoint/types.ts$$$Breakpoint":"type Breakpoint = BreakPointsKeys;","packages/ui-kit/src/constants/breakPoints.ts$$$BreakPointsObj":"type BreakPointsObj = typeof breakP;","packages/ui-kit/src/utils/breakpoint/types.ts$$$BreakpointConfig":"type BreakpointConfig = Record<Breakpoint, number>;","packages/ui-kit/src/utils/breakpoint/types.ts$$$UppercaseBreakpoint":"type UppercaseBreakpoint = Uppercase<Exclude<Breakpoint, 'xs'>>;","packages/ui-kit/src/utils/breakpoint/types.ts$$$BreakpointReturn":`interface BreakpointReturn {
  /**
   * Текущий breakpoint ширины экрана
   */
  breakpoint: Breakpoint;
  /**
   * Возваращет \`true\` если текущий токен экрана (ширина экрана) больше чем проверяемый \`token: Breakpoint\`,
   * в ином случае - \`false\`
   *
   * @param token Breakpoint
   * @returns boolean
   */
  up: (token: Breakpoint) => boolean;
  /**
   * Возваращет \`true\` если текущий токен экрана (ширина экрана) меньше чем проверяемый \`token: Breakpoint\`,
   * в ином случае - \`false\`
   *
   * @param token Breakpoint
   * @returns boolean
   */
  down: (token: Breakpoint) => boolean;
  /**
   * Возваращет \`true\` если текущий токен экрана (ширина экрана) равен проверяемому \`token: Breakpoint\`,
   * в ином случае - \`false\`
   *
   * @param token Breakpoint
   * @returns boolean
   */
  only: (token: Breakpoint) => boolean;
  /**
   * Возваращет \`true\` если текущий токен экрана (ширина экрана) не равен проверяемому \`token: Breakpoint\`,
   * в ином случае - \`false\`
   *
   * @param token Breakpoint
   * @returns boolean
   */
  not: (token: Breakpoint) => boolean;
  /**
   * Возваращет \`true\` если текущий токен экрана (ширина экрана) находится между двумя проверямыми токенами (\`start/end\`),
   * в ином случае - \`false\`
   *
   * @param start Breakpoint
   * @param end Breakpoint
   * @returns boolean
   */
  between: (start: Breakpoint, end: Breakpoint) => boolean;
}`,"packages/ui-kit/src/utils/breakpoint/types.ts$$$MediaQuery":"type MediaQuery = (style: TemplateStringsArray | string) => string;","packages/ui-kit/src/utils/breakpoint/types.ts$$$BreakpointProviderProps":`interface BreakpointProviderProps extends PropsWithChildren {
  breakpointConfig?: BreakpointConfig;
}`,"packages/ui-kit/src/utils/breakpoint/types.ts$$$MediaProviderProps":`interface MediaProviderProps extends PropsWithChildren {
  breakpointConfig?: BreakpointConfig;
}`,"packages/ui-kit/src/components/Widget/Widget.tsx$$$WidgetProps":`type WidgetProps = ComponentProps<'div'> & {
  /**
   * @default 'default'
   */
  containerType?: 'splitView' | 'modal' | 'default';
  $css?: string | CSSObject | FlattenSimpleInterpolation;
};`,"packages/ui-kit/src/components/Widget/components/WidgetIconButtonBack.tsx$$$WidgetIconButtonBackProps":`type WidgetIconButtonBackProps = ComponentProps<typeof IconButton> & {
  iconSize?: ComponentProps<typeof IconArrowLeft>['size'];
};`},a=({filePath:n,typeName:t,asString:i,preSource:r,postSource:s,...l})=>{if(!n||!t)return"";const p=`${n}$$$${t}`,c=(e==null?void 0:e[p])??"",o=`${r??""}${c}${s??""}`;return i?o:d.jsxDEV(u,{language:"tsx",code:o,...l},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/utils/TypeSourceViewer.tsx",lineNumber:43,columnNumber:10},void 0)};try{a.displayName="TypeSourceViewer",a.__docgenInfo={description:`Отображает определение типа (type или interface) из исходного файла.
Данные берутся из types.string.json (генерируется скриптом generate-storybook-types-as-string-json).`,displayName:"TypeSourceViewer",props:{filePath:{defaultValue:null,description:'@example "./packages/ui-kit/src/components/TableContract/types.ts"',name:"filePath",required:!0,type:{name:"string"}},typeName:{defaultValue:null,description:'@example "FetcherProps"',name:"typeName",required:!0,type:{name:"string"}},asString:{defaultValue:null,description:"Return value as string",name:"asString",required:!1,type:{name:"boolean"}},preSource:{defaultValue:null,description:"",name:"preSource",required:!1,type:{name:"string"}},postSource:{defaultValue:null,description:"",name:"postSource",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Where to read the source code from, see `SourceType`",name:"type",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"code"'},{value:'"dynamic"'}]}},transform:{defaultValue:null,description:"Transform the detected source for display",name:"transform",required:!1,type:{name:"(code: string, storyContext: StoryContextForLoaders<Renderer, Args>) => string"}},of:{defaultValue:null,description:`Pass the export defining a story to render its source

\`\`\`jsx
import { Source } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Source of={ButtonStories.Primary} />
\`\`\``,name:"of",required:!1,type:{name:"any"}},originalSource:{defaultValue:null,description:"Internal: set by our CSF loader (`enrichCsf` in `@storybook/csf-tools`).",name:"originalSource",required:!1,type:{name:"string"}},__forceInitialArgs:{defaultValue:null,description:"Internal prop to control if a story re-renders on args updates",name:"__forceInitialArgs",required:!1,type:{name:"boolean"}}}}}catch{}export{e as A,a as T};
