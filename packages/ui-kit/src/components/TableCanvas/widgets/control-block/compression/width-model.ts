/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-nested-ternary */
/**
 * Модель ширины контрл-блока.
 *
 * Чистые функции без React и DOM: на вход состояние видимости,
 * замеры ширин и спейсинги, на выход суммарная ширина контента.
 * Алгоритм компрессии сравнивает её с доступной шириной контейнера.
 *
 * Откуда берутся ширины:
 * - кнопки с лейблами и блок "Действия" меряются из DOM (см. measure.ts)
 * - icon-only состояния и кастомные иконки тоже меряются, но до первого
 *   замера работают фоллбек константы ниже
 */
import {
  CompressionSpacing,
  InitialWidthsForToolsMenu,
  OverflowItem,
  ToolsMenuState
} from '../types';

/** Минимальная ширина поиска после сжатия (обычная 250) */
export const SEARCH_MIN_WIDTH_COMPRESSED = 210;

/** Вертикальный разделитель между зонами и иконками */
export const DIVIDER_WIDTH = 1;

/**
 * Фоллбек ширины кнопки (Button) в icon-only состоянии.
 * Реальные значения приходят из замеров: 48 без шеврона, 64 с дропдауном.
 */
export const ICON_ONLY_BUTTON = 48;

/** Фоллбек ширины кастомной иконки (EmbedIconButton): 40, с шевроном 48 */
export const CUSTOM_FEATURE_ICON_WIDTH = 40;

/** Фоллбек ширины блока "Действия" (leftSideInner), обычно меряется из DOM */
export const LEFT_SIDE_INNER_BLOCK_FALLBACK = 126;

/** Фоллбек ширины триггера overflow дропдауна */
export const OVERFLOW_TRIGGER_FALLBACK = 48;

/**
 * Ширина счётчика выбранных колонок у кнопки "Группировать" (contentRight).
 * Учитываем константой, а не замером самой кнопки: иначе при скрытии лейблов
 * ширину "с лейблом" нельзя перемерить и счётчик вмерзает в замер навсегда.
 * Берём с запасом под двух-трёхзначное число, точность тут не критична:
 * лишние пиксели лишь чуть раньше включают сжатие поиска.
 */
export const GROUPING_COUNTER_WIDTH = 28;

/**
 * Считает суммарную ширину контента контрл-блока для данного состояния.
 * Если передан breakdown, туда пишется поэлементная разбивка (для логов).
 */
export const calculateWidth = (
  state: ToolsMenuState,
  measuredWidths: InitialWidthsForToolsMenu | undefined,
  spacing: CompressionSpacing,
  breakdown?: Record<string, number>
): number => {
  const sp = spacing;
  let width = 0;

  // Прибавляет к ширине и записывает слагаемое в разбивку
  const add = (key: string, v: number) => {
    if (!v) return;
    width += v;
    if (breakdown) breakdown[key] = (breakdown[key] ?? 0) + v;
  };

  add('containerPadding', sp.containerPadding * 2);

  // Inline title
  if (measuredWidths?.inlineTitle) {
    add('inlineTitle', measuredWidths.inlineTitle);
  }

  // Кнопка сворачивания таблицы
  if (
    state.leftSide.collapsingBlock.isActive &&
    measuredWidths?.collapseBlock
  ) {
    add('collapseBlock', measuredWidths.collapseBlock);
  }

  // Левая часть. В DOM кнопка коллапса лежит во Flow рядом с блоком
  // LefSideStyled, а editModeLeftSlot + кнопки редактирования + блок
  // leftSideInner находятся ВНУТРИ LefSideStyled (leftSideInner считается
  // за один flex ребёнок: дропдаун "Действия" при двух и более, либо
  // отдельная кнопка). Между внутренними элементами идёт leftPartGap,
  // а у самого LefSideStyled есть padding-right (leftPartPaddingRight).
  const hasLeftSideInner = state.leftSide.leftSideInner.length > 0;
  const featureLeftBtnCount = state.leftSide.editRowFeature.isActive
    ? // в режиме редактирования две кнопки (Отменить и Сохранить), иначе одна
      // eslint-disable-next-line no-nested-ternary
      state.leftSide.editRowFeature.editModeEnabled
      ? 2
      : 1
    : 0;
  const hasEditSlot =
    state.leftSide.editRowFeature.editModeEnabled &&
    measuredWidths?.editModeLeftSlot;
  const hasCollapse =
    state.leftSide.collapsingBlock.isActive && !!measuredWidths?.collapseBlock;

  // Внутренние элементы LefSideStyled (между ними leftPartGap)
  const innerLeftItems =
    featureLeftBtnCount + (hasLeftSideInner ? 1 : 0) + (hasEditSlot ? 1 : 0);

  // LefSideStyled рендерится, когда есть коллапс ИЛИ хотя бы один внутренний
  // элемент. Его padding-right присутствует всегда в этом случае, даже если
  // внутренних элементов нет (пустой блок рядом с кнопкой коллапса). Раньше
  // padding учитывался только при innerLeftItems > 0, поэтому в режиме
  // "только коллапс" модель недосчитывала leftPartPaddingRight и появлялся
  // горизонтальный скролл.
  if (hasCollapse || innerLeftItems > 0) {
    const leftGapCount = Math.max(0, innerLeftItems - 1);
    add('leftGaps', sp.leftPartGap * leftGapCount + sp.leftPartPaddingRight);
  }

  // editModeLeftSlot
  if (hasEditSlot) {
    add('editModeLeftSlot', measuredWidths!.editModeLeftSlot!);
  }

  // Кнопки редактирования (Редактировать, либо Отменить и Сохранить)
  if (state.leftSide.editRowFeature.isActive) {
    for (let i = 0; i < featureLeftBtnCount; i += 1) {
      if (state.leftSide.editRowFeature.isLabelVisible) {
        add(
          `featureLeftBtn[${i}]`,
          measuredWidths?.featureLeftButtons?.[i] ?? 0
        );
      } else {
        add(
          `featureLeftBtn[${i}]icon`,
          measuredWidths?.featureLeftButtonsIcon?.[i] ?? ICON_ONLY_BUTTON
        );
      }
    }
  }

  // Блок leftSideInner, единый, его лейблы не сжимаются
  if (hasLeftSideInner) {
    add(
      'leftSideInnerBlock',
      measuredWidths?.leftSideInnerBlock ?? LEFT_SIDE_INNER_BLOCK_FALLBACK
    );
  }

  // Поиск. CSS min-width на .searchControlBlock при box-sizing border-box
  // уже включает горизонтальные паддинги, сверху ничего не добавляем.
  if (state.middle.searchingFeature.isActive) {
    add('search', state.middle.searchingFeature.minWidth);
  }

  // Правая часть

  // Кнопки правой зоны (конфиг + встроенные фичи), только видимые
  let rightBtnCount = 0;
  state.rightSide.buttons.forEach((btn, i) => {
    const isInDropdown = state.rightSide.overflowItems.some(
      (oi) =>
        oi.sourceType === 'button' && oi.sourceIndex === i && oi.isInDropdown
    );
    if (isInDropdown) return;
    rightBtnCount += 1;
    if (btn.isLabelVisible) {
      add(`rightBtn[${i}]`, measuredWidths?.rightButtons?.[i] ?? 0);
    } else {
      add(
        `rightBtn[${i}]icon`,
        measuredWidths?.rightButtonsIcon?.[i] ?? ICON_ONLY_BUTTON
      );
    }
  });

  // Кастомные иконки, только видимые. Дивайдер (dividerLeft) уже вшит
  // в ширину каждой иконки на этапе замера.
  let visibleFeatureIconCount = 0;
  state.rightSide.customFeatures.forEach((_cf, i) => {
    const isInDropdown = state.rightSide.overflowItems.some(
      (oi) =>
        oi.sourceType === 'customFeature' &&
        oi.sourceIndex === i &&
        oi.isInDropdown
    );
    if (!isInDropdown) {
      visibleFeatureIconCount += 1;
      add(
        `customFeature[${i}]`,
        measuredWidths?.customFeatures?.[i] ?? CUSTOM_FEATURE_ICON_WIDTH
      );
    }
  });

  // Счётчик группировки (contentRight кнопки "Группировать"). Учитываем
  // константой по флагу состояния, пока зона кнопок видима. Не вшит в замер
  // кнопки специально: иначе при скрытом лейбле его не перемерить и он
  // застревает в модели. См. GROUPING_COUNTER_WIDTH.
  if (state.rightSide.hasGroupingCounter && rightBtnCount > 0) {
    add('groupingCounter', GROUPING_COUNTER_WIDTH);
  }

  // Разделитель между зоной кнопок и зоной иконок (синхронно с рендером)
  if (visibleFeatureIconCount > 0 && rightBtnCount > 0) {
    add('divider', DIVIDER_WIDTH);
  }

  // Паддинги и гэпы контейнера правых кнопок. Триггер "..." живёт в зоне
  // иконок (после связки fullScreen и rowSize), в кнопочном контейнере его
  // нет. Пустой контейнер не рендерится.
  if (rightBtnCount > 0) {
    add('rightBtnPadding', sp.rightButtonsPaddingInline * 2);
    if (rightBtnCount > 1) {
      add('rightBtnGaps', sp.rightButtonsGap * (rightBtnCount - 1));
    }
  }

  // Триггер overflow дропдауна (в зоне иконок, гэпов вокруг нет)
  if (state.rightSide.isOverflowTriggerVisible) {
    add(
      'overflowTrigger',
      measuredWidths?.overflowTrigger ?? OVERFLOW_TRIGGER_FALLBACK
    );
  }

  return width;
};

/**
 * Строит список элементов, которые могут уходить в overflow дропдаун.
 * Порядок в массиве определяет порядок коллапса: прячем с конца,
 * то есть кастомные фичи первыми, затем кнопки правой зоны
 * (встроенные фичи раньше кнопок из конфига, они в конце массива).
 */
export const buildOverflowItems = (state: ToolsMenuState): OverflowItem[] => {
  const items: OverflowItem[] = [];

  state.rightSide.buttons.forEach((_, i) => {
    items.push({
      sourceType: 'button',
      sourceIndex: i,
      isInDropdown: false
    });
  });

  // Кастомные фичи: в дропдаун уходят только те, кому это разрешено
  // конфигурацией (canBeCompressedInToolsMenu)
  state.rightSide.customFeatures.forEach((cf, i) => {
    if (cf.canBeCompressed) {
      items.push({
        sourceType: 'customFeature',
        sourceIndex: i,
        isInDropdown: false
      });
    }
  });

  return items;
};

/** Есть ли ещё видимые лейблы у кнопок правой части */
export const hasVisibleRightButtonLabels = (state: ToolsMenuState): boolean =>
  state.rightSide.buttons.some((btn) => btn.isLabelVisible);
