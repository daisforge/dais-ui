import { isStructuredCloneSupported } from '@ui-kit/utils';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import {
  CompressionAction,
  CompressionCache,
  CompressionConfig,
  InitialWidthsForToolsMenu,
  RangeCache,
  ToolsMenuState,
} from './types';

const WIDTH = {
  BUTTON_WITH_LABEL: 100,
  BUTTON_ICON_ONLY: 40, // Mandatory и нативные фичи-иконки в правой части таблицы
  RIGHT_SIDE_INNER: {
    BUTTON_WITH_LABEL: 100, //
    BUTTON_ICON_ONLY: 60,
  },
  SEARCH_INLINE: 250 + 16, // Width + отступ
  SEARCH_COLLAPSED: 0,
  FEATURE_ICON: 40,
  FEATURE_EDITING: {
    EDIT_MODE_ENABLED: 155, // По факту 154.7
    EDIT_MODE_DISABLED: 168, // По факту 167.4
    ICON: 60,
  },
  SELECTING: {
    SELECTING_ROW: 122,
    SELECTING_ROW_COUNTER: 45,
    SELECTING_ICON: 41,
  },
  GROUPING: {
    ICON_WITH_COUNTER: 74, // По факту 46.35 со стилями и двузнаным числом в счетчике
    ICON_WITHOUT_COUNTER: 56,
    GROUPING_ROW: 157, //
    GROUPING_ROW_WITH_COUNTER: 173,
  },
  IS_LEFT_SIDE_INNER_INSIDE_DROPDOWN: 124, // По факту 123.73
  COLLAPSING_LABEL: 200, // fallback, фича должна быть измерена
} as const;

const ACCURACY = 10; // Погрешность

// Глобальный кеш, ключ - div экземпляра таблицы, значение - кеш
const elementCaches = new WeakMap<HTMLDivElement, CompressionCache>();

export const useCompressionFeatures = (
  initialState: ToolsMenuState,
  measuredWidths?: InitialWidthsForToolsMenu,
  element?: HTMLDivElement | null,
) => {
  const originalStateRef = useRef(initialState);

  // Синхронизируем ref при изменении initialState
  useEffect(() => {
    originalStateRef.current = initialState;
  }, [initialState]);

  const [compressedState, setCompressedState] =
    useState<ToolsMenuState>(initialState);

  // ============ Кеширование ==============
  // ссылка на кеш текущего div (из elementCaches).
  const cacheRef = useRef<CompressionCache>({ cache: new Map() });

  useEffect(() => {
    if (element) {
      // Получаем или создаем кеш для элемента
      let elementCache = elementCaches.get(element);
      if (!elementCache) {
        elementCache = { cache: new Map() };
        elementCaches.set(element, elementCache);
      }
      // Присваиваем только если elementCache существует
      cacheRef.current = elementCache;
    } else {
      // Если элемента нет, используем пустой кеш
      cacheRef.current = { cache: new Map() };
    }
  }, [element]);

  useEffect(() => {
    // Очищаем кеш при изменении measuredWidths
    if (element && cacheRef.current) {
      cacheRef.current.cache.clear();
    }
  }, [measuredWidths, element]);

  const getCacheKey = useCallback(
    () =>
      JSON.stringify({
        state: originalStateRef.current,
        measuredWidths,
      }),
    [measuredWidths],
  );

  const findCachedState = useCallback(
    (width: number) => {
      const key = getCacheKey();
      const cacheEntry = cacheRef.current.cache.get(key);
      if (!cacheEntry) return null;
      // Ищем точное попадание в диапазон
      const foundRange = cacheEntry.ranges.find(
        (range) => width >= range.min && width <= range.max,
      );
      if (foundRange) {
        return foundRange.state;
      }
      return null; // Не нашли подходящего диапазона
    },
    [getCacheKey],
  );

  const addToCache = useCallback(
    (width: number, state: ToolsMenuState, stateWidth: number) => {
      const key = getCacheKey();
      let cacheEntry = cacheRef.current.cache.get(key);

      if (!cacheEntry) {
        cacheEntry = {
          originalState: isStructuredCloneSupported
            ? structuredClone(originalStateRef.current)
            : JSON.parse(JSON.stringify(originalStateRef.current)),
          ranges: [],
        };
        cacheRef.current.cache.set(key, cacheEntry);
      }

      const newRange: RangeCache = {
        min: stateWidth, // Минимальная ширина, при которой состояние актуально
        max: width, // Максимальная ширина для этого состояния
        state: isStructuredCloneSupported
          ? structuredClone(state)
          : JSON.parse(JSON.stringify(state)),
        stateWidth,
      };

      // Оптимизация: проверяем, не перекрывается ли новый диапазон существующими
      const isOverlapped = cacheEntry.ranges.some(
        (range) => newRange.min >= range.min && newRange.max <= range.max,
      );
      if (isOverlapped) {
        return;
      }
      cacheEntry.ranges.push(newRange);

      // Сортируем по min для более эффективного поиска
      cacheEntry.ranges.sort((a, b) => a.min - b.min);
    },
    [getCacheKey],
  );

  // ============ Калькуляция ширин ==============

  /**
 * ╔═══════════════════════════════════════════════════════════════════════════════════╗
* ║                          ЛЕВАЯ ЧАСТЬ TOOLS MENU (LeftWidth)                        ║
* ╠═══════════════════╦═══════════════════════════╦═════════════════════╦══════════════╗
* ║ Collapsing Block  ║     Selecting Block ?     ║     EditRow Block ? ║ leftSideInner║
* ║          ?        ║                           ║                     ║      ?       ║
* ╠═══════════════════╬═══════════════════════════╬═════════════════════╬══════════════╣
* ║                   ║                           ║                     ║              ║
* ║ ▼ [CollapseLabel] ║ ◻ Selecting [Count]      ║ ✏️ [EditLabel]      ║ 🛠 [Config]  ║
* ║                   ║                           ║                     ║ 🔧 [Filter]  ║
* ║                   ║                           ║                     ║ ⚙ Actions    ║
* ╚═══════════════════╩═══════════════════════════╩═════════════════════╩══════════════╝

* Структура:
* 1. CollapsingBlock (опционально):
*    - ▼ Иконка (переключает состояние)
*    - "[CollapseLabel]" текст (может скрываться)
*
* 2. SelectingBlock (опционально):
*    - ◻ Чекбокс (всегда)
*    - "Selecting" текст (может скрываться)
*    - [Count] счетчик (только при выборе)
*
* 3. EditRowBlock (опционально):
*    - ✏️ Иконка (всегда)
*    - "[EditLabel]" текст (может скрываться)
*
* 4. leftSideInner (всегда справа):
*    - 🛠 Config, 🔧 Filter - кнопки с иконками
*    - ⚙ Actions - всегда видимые action-кнопки
*    - При ≥2 кнопках - группировка в "Действия"
   * Особенности:
   * - Блоки могут отсутствовать (? в названии блока)
   * - leftSideInner может содержать неограниченное количество элементов (которые скроются в дропдаун)
   * - targetAction (синие кнопки) никогда не скрывают свой лейбл
   * - Обычные кнопки могут скрывать лейбл в compact-режиме
   */
  const calculateLeftWidth = useCallback(
    (state: ToolsMenuState): number => {
      let width = 0;
      /**
       * Фичи Collapse block (самая левая опциональная)
       */
      if (state.leftSide.collapsingBlock.isActive) {
        width += measuredWidths?.collapseBlock?.[0] ?? WIDTH.COLLAPSING_LABEL;
      }

      /**
       * Selecting
       * Особенность в том, что у selecting есть помимо лейбла счётчик, которые начинает показываться только после выбора
       * Он влияет на ширину tools menu, его нужно учитывать в расчёте
       */
      if (state.leftSide.selectingRowFeature.isActive) {
        width += state.leftSide.selectingRowFeature.isLabelVisible
          ? WIDTH.SELECTING.SELECTING_ROW
          : WIDTH.SELECTING.SELECTING_ICON; // Иконка selecting

        if (state.leftSide.selectingRowFeature.isCounterVisible) {
          width += WIDTH.SELECTING.SELECTING_ROW_COUNTER;
        }
      }

      /**
       * EditRow
       */
      // editRowFeature активна
      if (state.leftSide.editRowFeature.isActive) {
        // editRowFeature с label
        if (state.leftSide.editRowFeature.isLabelVisible) {
          // editRowFeature ВКЛЮЧЕН режим редактирования
          if (state.leftSide.editRowFeature.editModeEnabled) {
            width += WIDTH.FEATURE_EDITING.EDIT_MODE_ENABLED;
          } else {
            // editRowFeature ВЫКЛЮЧЕН режим редактирования
            width += WIDTH.FEATURE_EDITING.EDIT_MODE_DISABLED;
          }
        } else {
          // editRowFeature без видимого label
          width += WIDTH.FEATURE_EDITING.ICON;
        }
      }

      /**
       * Фичи правее Selecting и EditRow
       */
      if (state.leftSide.isLeftSideInnerInsideDropdown) {
        width += WIDTH.IS_LEFT_SIDE_INNER_INSIDE_DROPDOWN;
      } else {
        state.leftSide.leftSideInner.forEach((btn, i) => {
          const btnWidth =
            measuredWidths?.leftSideInner?.[i] ?? WIDTH.BUTTON_WITH_LABEL;
          width += btn.isLabelVisible ? btnWidth : WIDTH.BUTTON_ICON_ONLY;
        });
      }
      return width;
    },
    [measuredWidths?.collapseBlock, measuredWidths?.leftSideInner],
  );

  /**
   * ╔══════════════════════════════════════════════════════════════════════════════════╗
   * ║                          ПРАВАЯ ЧАСТЬ TOOLS MENU (RightWidth)                    ║
   * ╠═══════════════════════╦═══════════════════════════╦══════════════════════════════╣
   * ║   RightSideInner ?    ║     RowGrouping ?        ║   CustomFeatures ?          ║
   * ╠═══════════════════════╬═══════════════════════════╬══════════════════════════════╣
   * ║                       ║                           ║                              ║
   * ║ 🚀 [ActionLabel]      ║ 🗂 [GroupLabel] [Count]   ║   🔘 🔘 🔘 (icon-only)      ║
   * ║                       ║                           ║                              ║
   * ╚═══════════════════════╩═══════════════════════════╩══════════════════════════════╝
   *
   * Структура:
   * 1. RightSideInner (опционально):
   *    - 🚀 ActionButton (аналог targetAction из левой части)
   *    - Правила:
   *      * targetAction (🚀): всегда показывает лейбл (isTargetAction=true)
   *      * Обычные кнопки: [Label] может скрываться
   *
   * 2. RowGrouping (опционально):
   *    - 🗂 Иконка группировки
   *    - [GroupLabel] может скрываться (но не счетчик)
   *    - Варианты ширины:
   *      * С лейблом: WIDTH.GROUPING.GROUPING_ROW
   *      * Без лейбла, но со счетчиком: WIDTH.GROUPING.ICON_WITH_COUNTER
   *      * Только иконка: WIDTH.GROUPING.ICON_WITHOUT_COUNTER
   *
   * 3. CustomFeatures (иконки):
   *    - 🔘🔘🔘 - всегда иконки (без лейблов)
   *    - Фильтрация:
   *      * Необязательные фичи (isMovedToRightSidebar=true) не учитываются в ширине
   *      * Обязательные (mandatory) всегда остаются в контрблоке
   *      * На небольших экранах фичи (mandatory) могут быть скрыты в toolsMenu в кнопке Dropdown, если canBeCompressedInToolsMenu=true
   *    - Ширина: N * WIDTH.FEATURE_ICON (где N - количество оставшихся фич)
   *
   * Особенности:
   * - Все блоки опциональны (? в названии)
   * - Порядок строгий: RightSideInner → RowGrouping → CustomFeatures
   * - В RightSideInner обычно 1 targetAction, но может быть больше
   * - Группировка может показывать только иконку, но со счетчиком
   * - CustomFeatures могут "уезжать" в правый сайдбар, а также некоторые кнопки могут быть скрыты в toolsMenu в кнопке Dropdown
   */
  const calculateRightWidth = useCallback(
    (state: ToolsMenuState): number => {
      let width = 0;
      /**
       * RightSideInner (button with icon + label)
       */
      state.rightSide.rightSideInner.forEach((btn, i) => {
        const btnWidth =
          measuredWidths?.rightSideInner?.[i] ??
          WIDTH.RIGHT_SIDE_INNER.BUTTON_WITH_LABEL;

        width +=
          btn.isLabelVisible || btn.isTargetAction
            ? btnWidth
            : WIDTH.RIGHT_SIDE_INNER.BUTTON_ICON_ONLY;
      });

      /**
       * CustomFeatures (btn-icons)
       */
      width +=
        state.rightSide.customFeatures.filter((f) => !f.isMovedToRightSidebar)
          .length * WIDTH.FEATURE_ICON;

      /**
       * RowGrouping
       */
      if (state.rightSide.groupingRowsFeature.isActive) {
        // Видим label
        if (state.rightSide.groupingRowsFeature.isVisibleLabel) {
          // Видим счётчик
          if (state.rightSide.groupingRowsFeature.isCounterVisible) {
            width += WIDTH.GROUPING.GROUPING_ROW_WITH_COUNTER;
          } else {
            // label без счётчика
            width += WIDTH.GROUPING.GROUPING_ROW;
          }
          // Нет label, но есть счётчик
        } else if (state.rightSide.groupingRowsFeature.isCounterVisible) {
          width += WIDTH.GROUPING.ICON_WITH_COUNTER;
          // Нет label и нет счётчика
        } else {
          width += WIDTH.GROUPING.ICON_WITHOUT_COUNTER;
        }
      }
      return width;
    },
    [measuredWidths?.rightSideInner],
  );

  const calculateCurrentWidth = useCallback(
    (state: ToolsMenuState): number => {
      const leftWidth = calculateLeftWidth(state);
      const rightWidth = calculateRightWidth(state);
      let centerWidth = 0;
      if (state.middle.searchingFeature.isActive) {
        centerWidth =
          state.middle.searchingFeature.searchPosition === 'inline'
            ? WIDTH.SEARCH_INLINE
            : WIDTH.SEARCH_COLLAPSED;
      }
      return leftWidth + centerWidth + rightWidth + ACCURACY;
    },
    [calculateLeftWidth, calculateRightWidth],
  );

  // ============ Конфигурация компрессии ==============
  const compressionConfig: CompressionConfig = useMemo(
    () => ({
      compressionLevels: [
        // Уровень 0: Скрываем лейбл у Кнопки группировки (если есть)
        {
          priority: 0,
          target: 'right',
          action: {
            type: 'remove-label',
            target: 'groupingRowFeature',
            strategy: 'one',
          },
          condition: (s) =>
            s.rightSide.groupingRowsFeature.isActive &&
            s.rightSide.groupingRowsFeature.isVisibleLabel,
        },
        // Уровень 1: Скрываем лейблы у обычных кнопок справа (у всех сразу)
        // Генерируем уровни для каждой кнопки справа
        {
          priority: 1, // Одинаковый приоритет у данного типа задачи
          target: 'right' as const,
          action: {
            type: 'remove-label' as const,
            target: 'action-buttons' as const,
            strategy: 'all' as const,
          },
          condition: (s: ToolsMenuState): boolean => {
            const hasVisibleButtons = s.rightSide.rightSideInner.some(
              (btn) => !btn.isTargetAction && btn.isLabelVisible,
            );
            return hasVisibleButtons;
          },
        },
        // Данный код закомментировал, может быть полезен для случая, когда по одной надо скрывать
        // Уровень 1: Скрываем лейблы у обычных кнопок справа (по одной)
        // Генерируем уровни для каждой кнопки справа
        // ...initialState.rightSide.rightSideInner
        //   .filter((btn) => !btn.isTargetAction)
        //   .map(() => ({
        //     priority: 1, // Одинаковый приоритет у данного типа задачи
        //     target: 'right' as const,
        //     action: {
        //       type: 'remove-label' as const,
        //       target: 'action-buttons' as const,
        //       strategy: 'one' as const,
        //     },
        //     condition: (s: ToolsMenuState): boolean => {
        //       const hasVisibleButtons = s.rightSide.rightSideInner.some(
        //         (btn) => !btn.isTargetAction && btn.isLabelVisible
        //       );
        //       return hasVisibleButtons;
        //     },
        //   })),
        // Уровень 2: Перенос необязательных фич в сайдбар (по одной)
        {
          priority: 2,
          target: 'right' as const,
          action: {
            type: 'hide-custom-features' as const,
            strategy: 'all' as const, // Добавляем стратегию (all), то есть скрываем сразу все
          },
          condition: (s: ToolsMenuState): boolean =>
            s.rightSide.customFeatures.some(
              (f) => !f.isMandatory && !f.isMovedToRightSidebar,
            ),
        },
        // Данный код закомментировал, может быть полезен для случая, когда кастомные фичи должны по порядку скрывать в правый сайдбар
        // Генерируем уровни для каждой фичи справа
        // ...initialState.rightSide.customFeatures
        //   .filter((f) => !f.isMandatory)
        //   .map(() => ({
        //     priority: 2, // Одинаковый приоритет у данного типа задачи
        //     target: 'right' as const,
        //     action: {
        //       type: 'hide-custom-features' as const,
        //     },
        //     condition: (s: ToolsMenuState): boolean =>
        //       s.rightSide.customFeatures.some(
        //         (f) => !f.isMandatory && !f.isMovedToRightSidebar
        //       ),
        //   })),

        // Уровень 3: Скрытие лейбла редактирования
        {
          priority: 3,
          target: 'left',
          action: { type: 'remove-label', target: 'editRowFeature' },
          condition: (s) =>
            s.leftSide.editRowFeature.isActive &&
            s.leftSide.editRowFeature.isLabelVisible,
        },
        // Уровень 4: Перенос поиска вниз
        {
          priority: 4,
          target: 'center',
          action: { type: 'move-search-down' },
          condition: (s) =>
            s.middle.searchingFeature.searchPosition === 'inline',
        },
        // Уровень 6: Скрытие лейбла SelectingRow
        {
          priority: 6,
          target: 'left',
          action: { type: 'remove-label', target: 'selectingRowFeature' },
          condition: (s) =>
            s.leftSide.selectingRowFeature.isActive &&
            s.leftSide.selectingRowFeature.isLabelVisible,
        },
        // Уровень 7: Скрытие counter-счетчика SelectingRow
        {
          priority: 6,
          target: 'left',
          action: { type: 'remove-counter', target: 'select' },
          condition: (s) =>
            s.leftSide.selectingRowFeature.isActive &&
            s.leftSide.selectingRowFeature.isCounterVisible,
        },
        // Уровень 8: Фичи в правой части скрываются в дропдаун-кнопку ...
        {
          priority: 7,
          target: 'right',
          action: { type: 'hide-right-side-features' },
          condition: (s) =>
            // Включена группировка и есть хотя бы одна не target кнопка в правой части
            (s.rightSide.groupingRowsFeature.isActive &&
              s.rightSide.rightSideInner.some(
                (item) => !item.isTargetAction,
              )) ||
            // ИЛИ если включена группировка и есть хотя бы 1 кнопка из кастомных фичей, которая не может быть перенесена в блок настроек (isMandatory), но может быть сжата и оставаться в tools menu (canBeCompressedInToolsMenu) И 1 кнопка не target-action (в сумме будет две -> сформируется dropdown в правой части из троеточия)
            ((s.rightSide.customFeatures ?? []).some(
              (item) => item.canBeCompressedInToolsMenu && item.isMandatory,
            ) &&
              s.rightSide.groupingRowsFeature.isActive) ||
            // ИЛИ есть хотя бы 1 кнопка из кастомных фичей, которая не может быть перенесена в блок настроек (isMandatory), но может быть сжата и оставаться в tools menu (canBeCompressedInToolsMenu) И 1 кнопка не target-action (в сумме будет две -> сформируется dropdown в правой части из троеточия)
            ((s.rightSide.customFeatures ?? []).some(
              (item) => item.canBeCompressedInToolsMenu && item.isMandatory,
            ) &&
              s.rightSide.rightSideInner.some(
                (item) => !item.isTargetAction,
              )) ||
            // ИЛИ  Есть более 2 НЕ target кнопок в правой части
            (s.rightSide.rightSideInner ?? []).filter(
              (item) => !item.isTargetAction,
            ).length >= 2 ||
            // ИЛИ Есть более 2 каcтомных фичей, которые остаются в ToolsMenu и могут быть сжаты в Dropdown
            (s.rightSide.customFeatures ?? []).filter(
              (item) => item.canBeCompressedInToolsMenu && item.isMandatory,
            ).length >= 2,
        },
      ],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      initialState.rightSide.rightSideInner.length,
      initialState.rightSide.customFeatures.length,
    ], // Зависимость от динамически генерируемой части конфигурации
  );

  // ============ Компрессия ==============
  const applyCompressionAction = useCallback(
    (
      currentState: ToolsMenuState,
      action: CompressionAction,
      target: 'left' | 'center' | 'right',
    ): ToolsMenuState => {
      const newState = { ...currentState };

      const removeLabelFromActionButtons = (action: CompressionAction) => {
        if (action.type === 'remove-label') {
          // Режим "one" - скрываем лейбл у одной (последней) кнопки
          if (action.strategy === 'one') {
            let lastVisibleIndex = -1;
            // Если необходимо убрать лейблы в правой части
            if (
              target === 'right' &&
              newState.rightSide.rightSideInner.length > 0
            ) {
              newState.rightSide.rightSideInner.forEach((btn, index) => {
                if (btn && !btn.isTargetAction && btn.isLabelVisible) {
                  lastVisibleIndex = index;
                }
              });

              if (lastVisibleIndex !== -1) {
                const item =
                  newState.rightSide.rightSideInner[lastVisibleIndex];
                if (item) {
                  item.isLabelVisible = false;
                }
              }
            } // Если необходимо убрать лейблы в левой части
            else if (
              target === 'left' &&
              newState.leftSide.leftSideInner.length > 0
            ) {
              newState.leftSide.leftSideInner.forEach((btn, index) => {
                if (btn && !btn.isTargetAction && btn.isLabelVisible) {
                  lastVisibleIndex = index;
                }
              });
              if (lastVisibleIndex !== -1) {
                const item = newState.leftSide.leftSideInner[lastVisibleIndex];
                if (item) {
                  item.isLabelVisible = false;
                }
              }
            }
          } // Режим "all" (если стратегия не указана - считаем как all)
          else if (action.strategy === 'all' || action.strategy === undefined) {
            // Справа
            if (
              target === 'right' &&
              newState.rightSide.rightSideInner.length > 0
            ) {
              newState.rightSide.rightSideInner =
                newState.rightSide.rightSideInner.map((item) => {
                  if (item && !item.isTargetAction) {
                    return { ...item, isLabelVisible: false };
                  }
                  return item;
                });
            } else {
              // Слева
              newState.leftSide.leftSideInner =
                newState.leftSide.leftSideInner.map((item) => {
                  if (item && !item.isTargetAction) {
                    return { ...item, isLabelVisible: false };
                  }
                  return item;
                });
            }
          }
        }
      };

      switch (action.type) {
        case 'remove-label': {
          // У кнопок-действий
          switch (action.target) {
            case 'action-buttons':
              removeLabelFromActionButtons(action);
              break;
            case 'editRowFeature':
              // Скрываем label у кнопки редактирования
              if (newState.leftSide.editRowFeature) {
                newState.leftSide.editRowFeature.isLabelVisible = false;
              }
              break;
            case 'groupingRowFeature':
              // Скрываем label у кнопки группировки
              if (newState.rightSide.groupingRowsFeature) {
                newState.rightSide.groupingRowsFeature.isVisibleLabel = false;
              }
              break;
            case 'selectingRowFeature':
              // Скрываем label у SelectingRow
              if (newState.leftSide.selectingRowFeature.isActive) {
                newState.leftSide.selectingRowFeature.isLabelVisible = false;
              }
              break;

            default:
              break;
          }
          break;
        }

        case 'hide-custom-features': {
          const nonMandatoryFeatures = newState.rightSide.customFeatures.filter(
            (f) => !f.isMandatory && !f.isMovedToRightSidebar,
          );

          if (nonMandatoryFeatures.length === 0) break;

          if (action.strategy === 'all') {
            newState.rightSide.customFeatures =
              newState.rightSide.customFeatures.map((f) => ({
                ...f,
                isMovedToRightSidebar: !f.isMandatory
                  ? true
                  : f.isMovedToRightSidebar,
              }));
          } else {
            const indexToMove = newState.rightSide.customFeatures.findIndex(
              (f) => !f.isMandatory && !f.isMovedToRightSidebar,
            );

            if (indexToMove !== -1) {
              newState.rightSide.customFeatures =
                newState.rightSide.customFeatures.map((f, i) =>
                  i === indexToMove ? { ...f, isMovedToRightSidebar: true } : f,
                );
            }
          }
          break;
        }

        case 'move-search-down': {
          // Переносим поиск вниз
          newState.middle.searchingFeature.searchPosition = 'below';
          break;
        }

        case 'remove-counter': {
          if (action.target === 'select') {
            newState.leftSide.selectingRowFeature.isCounterVisible = false;
          }
          break;
        }

        case 'hide-right-side-features': {
          newState.rightSide.isRightSideInsideDropdown = true;
          break;
        }

        default: {
          break;
        }
      }

      return newState;
    },
    [],
  );

  // Альтернативный вариант, который можно использовать через метод проверки scroll у контейнера (не очень хорошо себя зарекомендовал)
  // const applyCompressionLevel = useCallback(
  //   (level: number) => {
  //     setCompressedState(() => {
  //       // 1. Сортируем все уровни по приоритету
  //       const sortedLevels = [...compressionConfig.compressionLevels].sort(
  //         (a, b) => a.priority - b.priority
  //       );

  //       // 2. Берем только нужное количество уровней (первые N)
  //       const levelsToApply = sortedLevels.slice(0, level);

  //       // 3. Начинаем с оригинального состояния
  //       let newState = isStructuredCloneSupported
  //         ? structuredClone(originalStateRef.current)
  //         : JSON.parse(JSON.stringify(originalStateRef.current));

  //       // 4. Применяем все действия из выбранных уровней
  //       levelsToApply.forEach((levelConfig) => {
  //         // Проверяем условие, если оно есть
  //         if (!levelConfig.condition || levelConfig.condition(newState)) {
  //           newState = applyCompressionAction(
  //             newState,
  //             levelConfig.action,
  //             levelConfig.target
  //           );
  //         }
  //       });

  //       return newState;
  //     });
  //   },
  //   [compressionConfig.compressionLevels, applyCompressionAction]
  // );

  const compress = useCallback(
    (availableWidth: number) => {
      const cachedState = findCachedState(availableWidth);
      if (cachedState) {
        setCompressedState(cachedState);
        return;
      }
      setCompressedState(() => {
        // Всегда начинаем с оригинального состояния (из ref)
        let currentState = isStructuredCloneSupported
          ? structuredClone(originalStateRef.current)
          : JSON.parse(JSON.stringify(originalStateRef.current));

        let currentWidth = calculateCurrentWidth(currentState);

        // Если текущая ширина уже меньше доступной - ничего не делаем
        if (currentWidth <= availableWidth) {
          addToCache(availableWidth, currentState, currentWidth);
          return currentState;
        }

        // Сортируем уровни по приоритету
        const sortedLevels = [...compressionConfig.compressionLevels].sort(
          (a, b) => a.priority - b.priority,
        );

        // Последовательно применяем сжатие
        let shouldBreak = false;
        // Использую some как альтернативу для for of (на него ругался линтер), some нужен исключительно для последовательного перебора с возможностью прервать цикл не дожидаясь окончания всех итераций
        sortedLevels.some((level) => {
          if (shouldBreak) return true; // Прерываем, если флаг установлен

          // Пропускаем уровень, если условие не выполняется
          if (level.condition && !level.condition(currentState)) {
            return false; // Продолжаем итерации
          }

          const newState = applyCompressionAction(
            currentState,
            level.action,
            level.target,
          );

          const newWidth = calculateCurrentWidth(newState);

          if (newWidth < currentWidth) {
            currentState = newState;
            currentWidth = newWidth;
            addToCache(currentWidth, currentState, currentWidth);

            // Устанавливаем флаг, если достигли нужной ширины
            if (currentWidth <= availableWidth) {
              shouldBreak = true;
            }
          }

          return shouldBreak; // Если true - прерываем some()
        });

        addToCache(availableWidth, currentState, currentWidth);
        return currentState;
      });
    },
    [
      addToCache,
      applyCompressionAction,
      calculateCurrentWidth,
      compressionConfig.compressionLevels,
      findCachedState,
    ],
  );

  const resetCompression = useCallback(() => {
    cacheRef.current.cache.clear();
    setCompressedState(originalStateRef.current);
  }, []);

  return {
    compressedState,
    compress,
    calculateCurrentWidth,
    resetCompression,
    maxLevel: compressionConfig.compressionLevels.length,
  };
};
