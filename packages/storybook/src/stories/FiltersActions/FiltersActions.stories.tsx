/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/test';
import { Button } from '@ui-kit/components/Button';
import { Combobox } from '@ui-kit/components/Combobox';
import { IconButton } from '@ui-kit/components/IconButton';
import { type Item, useFiltersList } from '@ui-kit/components/ListOfFilters';
import {
  SegmentGroup,
  SegmentProvider,
  useSegment,
} from '@ui-kit/components/Segment';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { BodyS, H3 } from '@ui-kit/components/Typography';
import { IconSettingsFilter } from '@ui-kit/icons';
import {
  type AdaptiveFiltersBreakpointConfig,
  type FilterItem,
  FiltersActions,
  type FiltersActionsProps,
  type FiltersActionsResizeDimensions,
  useAdaptiveFilters,
} from '@ui-kit/layouts/FiltersActions';
import { borderRadiusS } from '@ui-kit/tokens';
import { useDebouncedValue } from '@ui-kit/utils';
import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

const meta: Meta<FiltersActionsProps> = {
  title: 'Композиции/FiltersActions',
  component: FiltersActions,
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<FiltersActionsProps>;

type Filters = {
  searchedV: string;
  switcher: boolean;
  blocks: string[];
  tribes: string[];
  allocation: string;
  brics: string[];
};

const filtersReducer = (
  state: Filters,
  newState: Partial<Filters>,
): Filters => ({
  ...state,
  ...newState,
});

const DEFAULT_FILTERS: Filters = {
  searchedV: '',
  switcher: false,
  blocks: [],
  tribes: [],
  allocation: '',
  brics: [],
};

const LABELS: { [key in keyof Filters]: string } = {
  searchedV: 'Поиск',
  blocks: 'Блок',
  tribes: 'Трайб',
  allocation: 'Аллокация',
  switcher: 'Switcher filter',
  brics: 'Брикс',
};

const useFetch = (
  key: 'blocks' | 'tribes' | 'allocation' | 'brics',
  num = 10,
) =>
  useMemo(
    () =>
      Array(num)
        .fill(0)
        .map((_, i) => ({
          label: `${LABELS[key]} ${i + 1}`,
          value: i.toString(),
        })),
    [key, num],
  );

const COMBOBOX_MODIFICATION = {
  width: '168px',
  style: {
    flexShrink: 0, // Чтобы блок combobox не сжимался
  },
};

const SEARCH_MODIFICATION = {
  width: 'auto',
  style: {
    minWidth: '168px',
    maxWidth: '700px',
    flex: 1,
  },
};

const SegmentContentStyled = styled.div({
  backgroundColor: 'pink',
  borderRadius: borderRadiusS,
  minHeight: 400,
  padding: 16,
  marginTop: 16,
});

// Пример кастомного таргета Popover через renderTarget: вместо дефолтной кнопки
// «Ещё фильтры» рисуем свою IconButton, сохраняя открытие Popover и красную точку.
function CustomTargetFiltersExample() {
  const [blocks, setBlocks] = useState<string[]>([]);
  const [tribes, setTribes] = useState<string[]>([]);
  const [opened, setOpened] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const blocksOptions = [
    { label: 'Блок 1', value: '1' },
    { label: 'Блок 2', value: '2' },
    { label: 'Блок 3', value: '3' },
  ];
  const tribesOptions = [
    { label: 'Трайб 1', value: '1' },
    { label: 'Трайб 2', value: '2' },
    { label: 'Трайб 3', value: '3' },
  ];

  // Активны ли фильтры — от этого зависит красная точка на таргете
  const hasActiveFilters = blocks.length > 0 || tribes.length > 0;

  return (
    <FiltersActions
      mainBlock={
        <FiltersActions.FiltersButtonWithPopover
          popoverProps={{ ref: popoverRef }}
          state={[opened, setOpened]}
          title="Фильтры"
          subtitle="Кастомный таргет через renderTarget"
          redSquare={hasActiveFilters}
          renderTarget={({ onClick, isOpen, isRedDotVisible, RedDot }) => (
            <IconButton
              onClick={onClick}
              size="s"
              view={isOpen ? 'accent' : 'secondary'}
              style={{ position: 'relative' }}
            >
              <IconSettingsFilter size="s" />
              <RedDot visible={isRedDotVisible} />
            </IconButton>
          )}
          content={
            <>
              <div style={{ width: '100%' }}>
                <BodyS style={{ marginBottom: '8px' }}>Блок</BodyS>
                <div style={{ width: '100%' }}>
                  <Combobox
                    size="s"
                    multiple
                    isTargetAmount
                    placeholder="Блок"
                    value={blocks}
                    onChange={setBlocks}
                    items={blocksOptions}
                    listMaxHeight="350px"
                    portal={popoverRef}
                    zIndex="9001"
                  />
                </div>
              </div>
              <div style={{ width: '100%' }}>
                <BodyS style={{ marginBottom: '8px' }}>Трайб</BodyS>
                <div style={{ width: '100%' }}>
                  <Combobox
                    size="s"
                    multiple
                    isTargetAmount
                    placeholder="Трайб"
                    value={tribes}
                    onChange={setTribes}
                    items={tribesOptions}
                    listMaxHeight="350px"
                    portal={popoverRef}
                    zIndex="9001"
                  />
                </div>
              </div>
            </>
          }
        />
      }
    />
  );
}

function SegmentContentWrapper() {
  const segment = useSegment();
  const activeTabId = segment?.selectedSegmentItems[0];
  const tabs = [
    { id: 'item_0', bg: 'pink', content: 'Контент сегмента 1' },
    { id: 'item_1', bg: 'brown', content: 'Контент сегмента 2' },
    { id: 'item_2', bg: 'darkgrey', content: 'Контент сегмента 3' },
  ];

  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  return (
    <SegmentContentStyled
      style={{
        backgroundColor: activeTab ? activeTab.bg : 'white',
      }}
    >
      <H3>Segment {activeTab?.id?.split('_')[1]} </H3>
      <p>{activeTab?.content}</p>
    </SegmentContentStyled>
  );
}

/**
 * Пример истории с адаптивным поведением на основе ширины mainBlock
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const FilterActionsStory: Story = {
  name: 'FiltersActions с адаптивностью',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: `
    import {
      IconChevronLeft,
      IconChevronRight,
      Avatar,
      SplitView,
      backgroundPrimary,
      Badge,
      Button,
      ColumnConfig,
      Flow,
      H2,
      IconButton,
      s,
      Table,
      Widget,
      useDebouncedValue
    } from '@daisforge/ui';
    import React, { useMemo, useState } from 'react';

    type Filters = {
      searchedV: string;
      switcher: boolean;
      blocks: string[];
      tribes: string[];
      allocation: string;
      brics: string[];
    };

    const filtersReducer = (
      state: Filters,
      newState: Partial<Filters>
    ): Filters => ({
      ...state,
      ...newState,
    });

    const DEFAULT_FILTERS: Filters = {
      searchedV: '',
      switcher: false,
      blocks: [],
      tribes: [],
      allocation: '',
      brics: [],
    };

    const LABELS: { [key in keyof Filters]: string } = {
      searchedV: 'Поиск',
      blocks: 'Блок',
      tribes: 'Трайб',
      allocation: 'Аллокация',
      switcher: 'Switcher filter',
      brics: 'Брикс',
    };


    const COMBOBOX_MODIFICATION = {
      width: '168px',
      style: {
        flexShrink: 0, // Чтобы блок combobox не сжимался
      },
    };

    const SEARCH_MODIFICATION = {
      width: 'auto',
      style: {
        minWidth: '168px',
        maxWidth: '700px',
        flex: 1,
      },
    };

    const SegmentContentStyled = styled.div({
      backgroundColor: 'pink',
      borderRadius: borderRadiusS,
      minHeight: 400,
      padding: 16,
      marginTop: 16,
    });

    ${getFuncAsString(
      'packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx',
      'SegmentContentWrapper',
    )}


        `,
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(
      filtersReducer,
      DEFAULT_FILTERS,
    );
    const [dimensions, setDimensions] =
      useState<FiltersActionsResizeDimensions>({
        containerWidth: 0,
        mainBlockWidth: 0,
        buttonsBlockWidth: 0,
        availableMainBlockWidth: 0,
      });
    const stateAndSetterPopoverFilterOpened = useState(false);
    const [searchQueryInPopover, setSearchQueryInPopover] = useState('');
    const debouncedSearchQueryInPopover = useDebouncedValue(
      searchQueryInPopover,
      300,
    );

    /**
     * Реф контейнера поповера с фильтрами. Нужен для того, чтобы тултип и выпадающие списки
     * Combobox, которые будут отображаться в popover могли получить контейнер, где им отрисовываться
     */
    const popoverRef = useRef<HTMLDivElement>(null);

    // Опции для combobox'ов
    const blocksOptions = useFetch('blocks', 10);
    const tribesOptions = useFetch('tribes', 10);
    const allocationOptions = useFetch('allocation', 10);
    const bricsOptions = useFetch('brics', 10);

    // Обработчик Resize блока фильтров
    const handleResize = useCallback(
      (newDimensions: FiltersActionsResizeDimensions) => {
        setDimensions(newDimensions);
      },
      [setDimensions],
    );

    // Работа с фильтрами
    const { filterList, filterListOpened, clearAll } = useFiltersList({
      filters,
      options: {
        blocks: blocksOptions,
        tribes: tribesOptions,
        allocation: allocationOptions,
        brics: bricsOptions,
      } as Record<keyof Filters, { label: string; value: string }[]>,
      updateFilters: (key, newV) => updateFilters({ [key]: newV }),
      filtersInfo: {
        searchedV: { label: 'Поиск', clearedValue: '' },
        switcher: { label: 'Чекбокс', clearedValue: false },
        blocks: { label: 'Блок', clearedValue: [] },
        tribes: { label: 'Трайб', clearedValue: [] },
        allocation: { label: 'Аллокация', clearedValue: '' },
        brics: { label: 'Брикс', clearedValue: [] },
      },
      order: ['switcher'], // Первым отображаются switch кнопки
    });

    // Массив элементов левой части
    const allLeftItems: FilterItem[] = useMemo(
      () => [
        // 1. Сегменты
        {
          id: 'segments',
          element: (
            <SegmentGroup
              hasBackground
              size="xs"
              style={{ marginRight: '8px' }}
            >
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <FiltersActions.SegmentItem
                    key={`item:${i}`}
                    value={`item_${i}`}
                    label={`Сегмент${i + 1}`}
                  />
                ))}
            </SegmentGroup>
          ),
        },

        // 2. Поиск
        {
          id: 'search',
          element: (
            <TextFieldSearch
              value={filters.searchedV}
              onChange={(e) => updateFilters({ searchedV: e.target.value })}
              autoComplete="off"
              style={{ marginRight: '8px' }}
            />
          ),
        },

        // 3. Чекбокс/Switcher
        {
          id: 'switcher',
          element: (
            <FiltersActions.SwitcherFilter
              checked={filters.switcher}
              label="Активные"
              onChange={(e) => updateFilters({ switcher: e.target.checked })}
            />
          ),
          metadata: {
            // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
            labelForSearchingInPopover: 'switcher',
          },
        },

        // 4. Combobox 1 (множественный выбор)
        {
          id: 'blocks',
          element: (
            <FiltersActions.TooltipList
              groupLabel="Блок"
              fullWidth
              items={filters.blocks
                .map((item) => {
                  const option = blocksOptions.find(
                    (opt) => opt.value === item,
                  );
                  return option?.label;
                })
                .filter((label): label is string => Boolean(label))}
              trigger={filters.blocks.length > 0 ? 'hover' : 'none'}
              mouseEnterDelay={750}
              frame={popoverRef} // Важно
            >
              <div
                style={{
                  width: '100%',
                }}
              >
                <Combobox
                  placeholder="Placeholder"
                  isTargetAmount
                  size="s"
                  multiple
                  value={filters.blocks}
                  onChange={(v) => updateFilters({ blocks: v })}
                  items={blocksOptions}
                  listMaxHeight="350px"
                  portal={popoverRef} // Важно
                  zIndex="9001" // Важно
                />
              </div>
            </FiltersActions.TooltipList>
          ),
          metadata: {
            // Можно использовать для заголовков фильтров в Popover
            labelInPopoverFilter: 'Blocks',
            // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
            labelForSearchingInPopover: 'blocks',
          },
        },

        // 5. Combobox 2 (множественный выбор)
        {
          id: 'tribes',
          element: (
            <FiltersActions.TooltipList
              groupLabel="Трайб"
              fullWidth
              items={filters.tribes
                .map((item) => {
                  const option = tribesOptions.find(
                    (opt) => opt.value === item,
                  );
                  return option?.label;
                })
                .filter((label): label is string => Boolean(label))}
              trigger={filters.tribes.length > 0 ? 'hover' : 'none'}
              mouseEnterDelay={750}
              frame={popoverRef} // Важно
            >
              {/* Важно делать обертку для регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div
                style={{
                  width: '100%',
                }}
              >
                <Combobox
                  placeholder="Placeholder"
                  isTargetAmount
                  size="s"
                  multiple
                  value={filters.tribes}
                  onChange={(v) => updateFilters({ tribes: v })}
                  items={tribesOptions}
                  listMaxHeight="350px"
                  portal={popoverRef} // Важно
                  zIndex="9001" // Важно
                />
              </div>
            </FiltersActions.TooltipList>
          ),
          // Можно использовать для заголовков фильтров в Popover
          metadata: {
            labelInPopoverFilter: 'Tribes',
            // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
            labelForSearchingInPopover: 'tribes',
          },
        },

        // 6. Combobox 3 (одиночный выбор)
        {
          id: 'allocation',
          element: (
            <Combobox
              placeholder="Placeholder"
              size="s"
              value={filters.allocation}
              onChange={(v) => updateFilters({ allocation: v })}
              items={allocationOptions}
              listMaxHeight="350px"
              portal={popoverRef}
              zIndex="9001"
            />
          ),
          // Можно использовать для заголовков фильтров в Popover
          metadata: {
            labelInPopoverFilter: 'Allocation',
            // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
            labelForSearchingInPopover: 'allocation',
          },
        },

        // 5. Combobox 4 (множественный выбор)
        {
          id: 'brics',
          element: (
            <FiltersActions.TooltipList
              groupLabel="Брикс"
              fullWidth
              items={filters.brics
                .map((item) => {
                  const option = bricsOptions.find((opt) => opt.value === item);
                  return option?.label;
                })
                .filter((label): label is string => Boolean(label))}
              trigger={filters.brics.length > 0 ? 'hover' : 'none'}
              mouseEnterDelay={750}
              frame={popoverRef} // Важно
            >
              {/* Важно делать обертку дл регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div
                style={{
                  width: '100%',
                }}
              >
                <Combobox
                  placeholder="Placeholder"
                  isTargetAmount
                  size="s"
                  multiple
                  value={filters.brics}
                  onChange={(v) => updateFilters({ brics: v })}
                  items={bricsOptions}
                  listMaxHeight="350px"
                  portal={popoverRef} // Важно
                  zIndex="9001" // Важно
                />
              </div>
            </FiltersActions.TooltipList>
          ),
          // Можно использовать для заголовков фильтров в Popover
          metadata: {
            labelInPopoverFilter: 'Brics',
            // Можно использовать для поиска элемента в массиве overlayItems при включенном поиске в Popover
            labelForSearchingInPopover: 'brics',
          },
        },

        // 7. Кнопка "Сбросить все"
        {
          id: 'resetButton',
          element: (
            <FiltersActions.ResetAllFiltersButton
              isVisible={filterList.length > 0}
              onClick={clearAll}
              disabled={filterList.length === 0}
            />
          ),
        },
      ],
      [
        filters.searchedV,
        filters.switcher,
        filters.blocks,
        filters.tribes,
        filters.allocation,
        filters.brics,
        bricsOptions,
        blocksOptions,
        tribesOptions,
        allocationOptions,
        filterList.length,
        clearAll,
      ],
    );

    // Конфигурация брейкпоинтов для адаптивности
    const breakpointsConfig: Record<number, AdaptiveFiltersBreakpointConfig> =
      useMemo(
        () => ({
          // >= 1754px: Все элементы видны
          1754: {
            visible: [
              'segments',
              'search',
              'switcher',
              'blocks',
              'tribes',
              'allocation',
              'resetButton',
            ],
            inOverlay: ['brics'],
            modifications: {
              segments: { width: 'auto' },
              search: SEARCH_MODIFICATION,
              blocks: COMBOBOX_MODIFICATION,
              tribes: COMBOBOX_MODIFICATION,
              allocation: COMBOBOX_MODIFICATION,
            },
            customActions: {
              secondaryButtonVisible: true,
              resetInPopoverFooter: false,
            },
          },

          // >= 1578px: allocation в popup
          1578: {
            visible: [
              'segments',
              'search',
              'switcher',
              'blocks',
              'tribes',
              'resetButton',
            ],
            inOverlay: ['brics', 'allocation'],
            modifications: {
              segments: { width: 'auto' },
              search: SEARCH_MODIFICATION,
              blocks: COMBOBOX_MODIFICATION,
              tribes: COMBOBOX_MODIFICATION,
              allocation: COMBOBOX_MODIFICATION,
            },
            customActions: {
              secondaryButtonVisible: true,
              resetInPopoverFooter: false,
            },
          },

          // >= 1486px: tribes в popup
          1486: {
            visible: [
              'segments',
              'search',
              'switcher',
              'blocks',
              'resetButton',
            ],
            inOverlay: ['tribes', 'allocation', 'brics'],
            modifications: {
              segments: { width: 'auto' },
              search: SEARCH_MODIFICATION,
              blocks: COMBOBOX_MODIFICATION,
              tribes: COMBOBOX_MODIFICATION,
              allocation: COMBOBOX_MODIFICATION,
            },
            customActions: {
              secondaryButtonVisible: true,
              resetInPopoverFooter: false,
            },
          },

          // >= 1260px: blocks в popup
          1260: {
            visible: ['segments', 'search', 'switcher', 'resetButton'],
            inOverlay: ['blocks', 'tribes', 'allocation', 'brics'], // ← blocks в popup
            modifications: {
              segments: { width: 'auto' },
              search: SEARCH_MODIFICATION,
              blocks: COMBOBOX_MODIFICATION,
              tribes: COMBOBOX_MODIFICATION,
              allocation: COMBOBOX_MODIFICATION,
            },
            customActions: {
              secondaryButtonVisible: true,
              resetInPopoverFooter: false,
            },
          },

          // >= 1068px: switcher в popup
          1068: {
            visible: ['segments', 'search', 'resetButton'],
            inOverlay: ['switcher', 'blocks', 'tribes', 'allocation', 'brics'], // ← switcher в popup
            modifications: {
              segments: { width: 'auto' },
              search: SEARCH_MODIFICATION,
              blocks: COMBOBOX_MODIFICATION,
              tribes: COMBOBOX_MODIFICATION,
              allocation: COMBOBOX_MODIFICATION,
            },
            customActions: {
              secondaryButtonVisible: true,
              resetInPopoverFooter: false,
            },
          },

          // >= 960px: ResetButton в footer popover
          960: {
            visible: ['segments', 'search'],
            inOverlay: ['switcher', 'blocks', 'allocation', 'tribes', 'brics'],
            hidden: ['resetButton'], // ← Технически скрыт из main, будет в footer popover
            modifications: {
              segments: { width: 'auto' },
              search: SEARCH_MODIFICATION,
              blocks: COMBOBOX_MODIFICATION,
              tribes: COMBOBOX_MODIFICATION,
              allocation: COMBOBOX_MODIFICATION,
            },
            customActions: {
              secondaryButtonVisible: true,
              resetInPopoverFooter: true, // ← ResetButton в footer popover
            },
          },

          // >= 960px: Вторая secondary кнопка cкрывается в dropdown
          0: {
            visible: ['segments', 'search'],
            inOverlay: ['switcher', 'blocks', 'tribes', 'allocation', 'brics'],
            hidden: ['resetButton'], // ← Технически скрыт из main, будет в footer popover
            modifications: {
              segments: { width: 'auto' },
              search: SEARCH_MODIFICATION,
              blocks: COMBOBOX_MODIFICATION,
              tribes: COMBOBOX_MODIFICATION,
              allocation: COMBOBOX_MODIFICATION,
            },
            customActions: {
              secondaryButtonVisible: false,
              resetInPopoverFooter: true, // ← ResetButton в footer popover
            },
          },
        }),
        [],
      );

    // Адаптивность
    const {
      visibleItems,
      overlayItems,
      modifications,
      customActions,
      hiddenItems,
      getItemStyle,
      hasActiveFilters,
    } = useAdaptiveFilters({
      items: allLeftItems,
      width: dimensions.availableMainBlockWidth,
      breakpoints: breakpointsConfig,
    });

    // Проверяем активные фильтры в popup
    const hasActiveFilterInPopover = hasActiveFilters(overlayItems, filters);

    // Определяем видимость второстепенной кнопки
    const secondaryButtonVisible = customActions.secondaryButtonVisible ?? true;
    const resetInPopoverFooter = customActions.resetInPopoverFooter ?? false;

    const resetButtonItem = resetInPopoverFooter
      ? hiddenItems.find((item) => item.id === 'resetButton')
      : visibleItems.find((item) => item.id === 'resetButton');

    const visibleItemsWithoutResetFilterButton = visibleItems.filter(
      (item) => item.id !== 'resetButton',
    );

    // Фильтрация элементов по поиску в Popover
    const filteredOverlayItems = useMemo(() => {
      if (!debouncedSearchQueryInPopover.trim()) return overlayItems;
      const query = debouncedSearchQueryInPopover.toLowerCase();
      return overlayItems.filter((item) =>
        item?.metadata?.labelForSearchingInPopover
          ?.toLowerCase()
          ?.includes(query),
      );
    }, [overlayItems, debouncedSearchQueryInPopover]);

    // Элементы для dropdown (блок справа)
    const dropdownItems = useMemo(() => {
      const items = [
        { value: 'action1', label: 'Действие 1' },
        { value: 'action2', label: 'Действие 2' },
      ];

      // Если второстепенная кнопка скрыта - добавляем в dropdown
      if (!secondaryButtonVisible) {
        items.push({
          value: 'secondary',
          label: 'Согласовать (второстепенное)',
        });
      }

      return items;
    }, [secondaryButtonVisible]);

    const renderActiveButtonsBlock = useCallback(
      () => (
        <>
          {/* Кнопка с троеточием */}
          <FiltersActions.DotsIconButton
            dropdownProps={{
              items: dropdownItems,
            }}
            iconOrientation="vertical"
          />

          {/* Второстепенная кнопка (скрывается при < 600px) */}
          {secondaryButtonVisible && (
            <Button size="s" view="secondary">
              Согласовать
            </Button>
          )}

          {/* Целевая кнопка - всегда видна */}
          <Button size="s" view="accent">
            Создать
          </Button>
        </>
      ),
      [secondaryButtonVisible, dropdownItems],
    );

    return (
      <SegmentProvider defaultSelected={['item_0']}>
        {/* Индикатор состояния */}
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
            fontFamily: 'monospace',
            fontSize: '12px',
            minHeight: '146px',
          }}
        >
          <div>
            <strong>📐 Размеры:</strong>
          </div>
          <div>
            Available width: {Math.round(dimensions.availableMainBlockWidth)}px
          </div>
          <div style={{ marginTop: 8 }}>
            <strong>✅ Видимые:</strong>{' '}
            {visibleItems.map((i) => i.id).join(', ')}
          </div>
          {overlayItems.length > 0 && (
            <div style={{ color: 'orange' }}>
              <strong>📤 В popover:</strong>{' '}
              {overlayItems.map((i) => i.id).join(', ')}
              {hasActiveFilterInPopover && ' 🔴'}
            </div>
          )}
          <div style={{ marginTop: 8 }}>
            <div style={{ color: secondaryButtonVisible ? 'green' : 'red' }}>
              🔘 Второстепенная кнопка "Согласовать" в правой части:{' '}
              {secondaryButtonVisible ? 'Видна' : 'В dropdown'}
            </div>
            <div style={{ color: resetInPopoverFooter ? 'orange' : 'green' }}>
              🔄 Reset кнопка:{' '}
              {resetInPopoverFooter ? 'В footer popover' : 'В mainBlock'}
            </div>
          </div>
        </div>

        <FiltersActions
          containerProps={{ $css: { maxWidth: 'calc(100vw - 32px)' } }}
          onResize={handleResize}
          mainBlock={
            <>
              {/* Видимые элементы с модификациями (без кнопки сбросить фильтры, она правее кнопки фильтров) */}
              {visibleItemsWithoutResetFilterButton.map((item) => {
                const itemMods = modifications[item.id];
                const style = getItemStyle(
                  itemMods,
                  dimensions.availableMainBlockWidth,
                );

                return (
                  <div key={item.id} style={{ ...style }}>
                    {item.element}
                  </div>
                );
              })}

              {/* Popover с фильтрами - кнопка фильтров встроена внутрь */}
              <FiltersActions.FiltersButtonWithPopover
                popoverProps={{
                  // Передаем ref, чтобы Tooltip и Combobox, которые будут в Popover, передать frame и portal
                  ref: popoverRef,
                }}
                state={stateAndSetterPopoverFilterOpened}
                title="Ещё фильтры"
                subtitle="Какой-то сабтайтл, если нужен."
                redSquare={hasActiveFilterInPopover}
                searchable
                searchValue={searchQueryInPopover}
                onSearchChange={setSearchQueryInPopover}
                content={
                  <>
                    {filteredOverlayItems.map((item) => (
                      <div key={item.id} style={{ width: '100%' }}>
                        {item?.metadata?.labelInPopoverFilter && (
                          <BodyS style={{ marginBottom: '8px' }}>
                            {item?.metadata?.labelInPopoverFilter}
                          </BodyS>
                        )}
                        {item.element}
                      </div>
                    ))}
                  </>
                }
                emptySearchContent={
                  filteredOverlayItems.length === 0 && searchQueryInPopover ? (
                    <div>По запросу ничего не найдено</div>
                  ) : null
                }
                footer={
                  resetInPopoverFooter &&
                  resetButtonItem &&
                  hasActiveFilterInPopover ? (
                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'end',
                      }}
                    >
                      {resetButtonItem.element}
                    </div>
                  ) : undefined
                }
              />
              {/* Кнопка "Сбросить фильтры" за кнопкой фильтров */}
              {resetButtonItem && !resetInPopoverFooter && (
                <div>{resetButtonItem.element}</div>
              )}
            </>
          }
          listOfFilters={
            <FiltersActions.ListOfFilters
              clearAll={clearAll}
              opened={filterListOpened}
              items={filterList}
              showResetAllFiltersButton={false}
            />
          }
          activeButtonsBlock={renderActiveButtonsBlock()}
        />
        <SegmentContentWrapper />
      </SegmentProvider>
    );
  },
};

/**
 * Пример использования FiltersActions без адаптивности с частичными фильтрами в Popover.
 * Основные фильтры видны статически, а последние 3 чекбокса (blocks, tribes, brics) скрыты в Popover кнопке.
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const SimpleFiltersActionsStory: Story = {
  name: 'FiltersActions без адаптивности',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: `
    import { createRows, type Row } from './tableData';
    import {
      IconChevronLeft,
      IconChevronRight,
      Avatar,
      SplitView,
      backgroundPrimary,
      Badge,
      Button,
      ColumnConfig,
      Flow,
      H2,
      IconButton,
      s,
      Table,
      Widget,
    } from '@daisforge/ui';
    import React, { useMemo, useState } from 'react';

    type Filters = {
      searchedV: string;
      switcher: boolean;
      blocks: string[];
      tribes: string[];
      allocation: string;
      brics: string[];
    };

    const filtersReducer = (
      state: Filters,
      newState: Partial<Filters>
    ): Filters => ({
      ...state,
      ...newState,
    });

    const DEFAULT_FILTERS: Filters = {
      searchedV: '',
      switcher: false,
      blocks: [],
      tribes: [],
      allocation: '',
      brics: [],
    };

    const LABELS: { [key in keyof Filters]: string } = {
      searchedV: 'Поиск',
      blocks: 'Блок',
      tribes: 'Трайб',
      allocation: 'Аллокация',
      switcher: 'Switcher filter',
      brics: 'Брикс',
    };

    const useFetch = (
      key: 'blocks' | 'tribes' | 'allocation' | 'brics',
      num = 10
    ) =>
      useMemo(
        () =>
          Array(num)
            .fill(0)
            .map((_, i) => ({
              label: \`\${LABELS[key]} \${i + 1}\`,
              value: i.toString(),
            })),
        [key, num]
      );

    ${getFuncAsString(
      'packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx',
      'SegmentContentWrapper',
    )}
        `,
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(
      filtersReducer,
      DEFAULT_FILTERS,
    );
    const [popupFilterOpened, setPopupFilterOpened] = useState(false);

    /**
     * Реф контейнера Popover с фильтрами. Нужен для того, чтобы тултип и выпадающие списки
     * Combobox, которые будут отображаться в popover могли получить контейнер, где им отрисовываться
     */
    const popoverRef = useRef<HTMLDivElement>(null);

    // Опции для combobox'ов
    const blocksOptions = useFetch('blocks', 10);
    const tribesOptions = useFetch('tribes', 10);
    const allocationOptions = useFetch('allocation', 10);
    const bricsOptions = useFetch('brics', 10);

    // Работа с фильтрами
    const { filterList, filterListOpened, clearAll } = useFiltersList({
      filters,
      options: {
        blocks: blocksOptions,
        tribes: tribesOptions,
        allocation: allocationOptions,
        brics: bricsOptions,
      } as Record<keyof Filters, { label: string; value: string }[]>,
      updateFilters: (key, newV) => updateFilters({ [key]: newV }),
      filtersInfo: {
        searchedV: { label: 'Поиск', clearedValue: '' },
        switcher: { label: 'Чекбокс', clearedValue: false },
        blocks: { label: 'Блок', clearedValue: [] },
        tribes: { label: 'Трайб', clearedValue: [] },
        allocation: { label: 'Аллокация', clearedValue: '' },
        brics: { label: 'Брикс', clearedValue: [] },
      },
      order: ['switcher'], // Первым отображаются switch кнопки
    });

    // Элементы, которые будут видны статически
    const visibleItems = useMemo(
      () => [
        // 1. Сегменты
        {
          id: 'segments',
          element: (
            <SegmentGroup
              hasBackground
              size="xs"
              style={{ marginRight: '8px' }}
            >
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <FiltersActions.SegmentItem
                    key={`item:${i}`}
                    value={`item_${i}`}
                    label={`Сегмент ${i + 1}`}
                  />
                ))}
            </SegmentGroup>
          ),
        },

        // 2. Поиск
        {
          id: 'search',
          element: (
            <FiltersActions.TextFieldSearch
              value={filters.searchedV}
              onChange={(e) => updateFilters({ searchedV: e.target.value })}
              autoComplete="off"
              placeholder="Поиск"
              style={{ marginRight: '8px' }}
            />
          ),
        },

        // 3. Чекбокс/Switcher
        {
          id: 'switcher',
          element: (
            <FiltersActions.SwitcherFilter
              checked={filters.switcher}
              label="Активные"
              onChange={(e) => updateFilters({ switcher: e.target.checked })}
            />
          ),
        },

        // 4. Combobox 3 (одиночный выбор)
        {
          id: 'allocation',
          element: (
            <Combobox
              size="s"
              placeholder="Allocation"
              value={filters.allocation}
              onChange={(v) => updateFilters({ allocation: v })}
              items={allocationOptions}
              listMaxHeight="350px"
              portal={popoverRef}
              zIndex="9001"
            />
          ),
        },
      ],
      [
        filters.searchedV,
        filters.switcher,
        filters.allocation,
        allocationOptions,
      ],
    );

    // Элементы, которые будут в Popover (последние 3 чекбокса)
    const popoverItems = useMemo(
      () => [
        // 1. Combobox 1 (множественный выбор) - blocks
        {
          id: 'blocks',
          element: (
            <FiltersActions.TooltipList
              groupLabel="Блок"
              fullWidth
              items={filters.blocks
                .map((item) => {
                  const option = blocksOptions.find(
                    (opt) => opt.value === item,
                  );
                  return option?.label;
                })
                .filter((label): label is string => Boolean(label))}
              trigger={filters.blocks.length > 0 ? 'hover' : 'none'}
              mouseEnterDelay={750}
              frame={popoverRef} // Важно
            >
              {/* Важно делать обертку дл регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div
                style={{
                  width: '100%',
                }}
              >
                <Combobox
                  isTargetAmount
                  size="s"
                  multiple
                  value={filters.blocks}
                  onChange={(v) => updateFilters({ blocks: v })}
                  items={blocksOptions}
                  listMaxHeight="350px"
                  portal={popoverRef} // Важно
                  zIndex="9001" // Важно
                />
              </div>
            </FiltersActions.TooltipList>
          ),
          metadata: {
            labelInPopoverFilter: 'Blocks',
          },
        },

        // 2. Combobox 2 (множественный выбор) - tribes
        {
          id: 'tribes',
          element: (
            <FiltersActions.TooltipList
              groupLabel="Трайб"
              fullWidth
              items={filters.tribes
                .map((item) => {
                  const option = tribesOptions.find(
                    (opt) => opt.value === item,
                  );
                  return option?.label;
                })
                .filter((label): label is string => Boolean(label))}
              trigger={filters.tribes.length > 0 ? 'hover' : 'none'}
              mouseEnterDelay={750}
              frame={popoverRef} // Важно
            >
              {/* Важно делать обертку дл регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div
                style={{
                  width: '100%',
                }}
              >
                <Combobox
                  isTargetAmount
                  size="s"
                  multiple
                  value={filters.tribes}
                  onChange={(v) => updateFilters({ tribes: v })}
                  items={tribesOptions}
                  listMaxHeight="350px"
                  portal={popoverRef} // Важно
                  zIndex="9001" // Важно
                />
              </div>
            </FiltersActions.TooltipList>
          ),
          metadata: {
            labelInPopoverFilter: 'Tribes',
          },
        },

        // 3. Combobox 4 (множественный выбор) - brics
        {
          id: 'brics',
          element: (
            <FiltersActions.TooltipList
              groupLabel="Брикс"
              fullWidth
              items={filters.brics
                .map((item) => {
                  const option = bricsOptions.find((opt) => opt.value === item);
                  return option?.label;
                })
                .filter((label): label is string => Boolean(label))}
              trigger={filters.brics.length > 0 ? 'hover' : 'none'}
              mouseEnterDelay={750}
              frame={popoverRef} // Важно
            >
              {/* Важно делать обертку дл регулирования ширины Combobox. Подробнее: https://plasma.sberdevices.ru/sdds-finai/components/combobox/ */}
              <div
                style={{
                  width: '100%',
                }}
              >
                <Combobox
                  isTargetAmount
                  size="s"
                  multiple
                  value={filters.brics}
                  onChange={(v) => updateFilters({ brics: v })}
                  items={bricsOptions}
                  listMaxHeight="350px"
                  portal={popoverRef} // Важно
                  zIndex="9001" // Важно
                />
              </div>
            </FiltersActions.TooltipList>
          ),
          metadata: {
            labelInPopoverFilter: 'Brics',
          },
        },
      ],
      [
        filters.blocks,
        filters.tribes,
        filters.brics,
        bricsOptions,
        blocksOptions,
        tribesOptions,
      ],
    );

    // Проверяем активные фильтры в popover
    const hasActiveFilterInPopover = popoverItems.some((item) => {
      if (item.id === 'blocks') return filters.blocks.length > 0;
      if (item.id === 'tribes') return filters.tribes.length > 0;
      if (item.id === 'brics') return filters.brics.length > 0;
      return false;
    });

    // Элементы для dropdown (блок справа)
    const dropdownItems = useMemo(
      () => [
        { value: 'action1', label: 'Действие 1' },
        { value: 'action2', label: 'Действие 2' },
      ],
      [],
    );

    const renderActiveButtonsBlock = useCallback(
      () => (
        <>
          {/* Кнопка с троеточием */}
          <FiltersActions.DotsIconButton
            dropdownProps={{
              items: dropdownItems,
            }}
            iconOrientation="vertical"
          />

          {/* Второстепенная кнопка */}
          <Button size="s" view="secondary">
            Согласовать
          </Button>

          {/* Целевая кнопка */}
          <Button size="s" view="accent">
            Создать
          </Button>
        </>
      ),
      [dropdownItems],
    );

    return (
      <SegmentProvider defaultSelected={['item_0']}>
        <FiltersActions
          mainBlock={
            <>
              {/* Видимые элементы */}
              {visibleItems.map((item) => (
                <div key={item.id}>{item.element}</div>
              ))}

              {/* Popover с фильтрами */}
              <FiltersActions.FilterPopover
                popoverProps={{
                  // Передаем ref, чтобы Tooltip и Combobox, которые будут в Popover, передать frame и portal
                  ref: popoverRef,
                }}
                state={[popupFilterOpened, setPopupFilterOpened]}
                title="Дополнительные фильтры"
                subtitle="Фильтры с множественным выбором"
                redSquare={hasActiveFilterInPopover}
                content={
                  <>
                    {popoverItems.map((item) => (
                      <div
                        key={item.id}
                        style={{ width: '100%', marginBottom: '16px' }}
                      >
                        <BodyS style={{ marginBottom: '8px' }}>
                          {item?.metadata?.labelInPopoverFilter}
                        </BodyS>
                        {item.element}
                      </div>
                    ))}
                  </>
                }
              />

              {/* Кнопка сбросить все */}
              <FiltersActions.ResetAllFiltersButton
                isVisible={filterList.length > 0}
                onClick={clearAll}
                disabled={filterList.length === 0}
              />
            </>
          }
          listOfFilters={
            <FiltersActions.ListOfFilters
              clearAll={clearAll}
              opened={filterListOpened}
              items={filterList}
              showResetAllFiltersButton={false}
            />
          }
          activeButtonsBlock={renderActiveButtonsBlock()}
        />
        <SegmentContentWrapper />
      </SegmentProvider>
    );
  },
};

/**
 * Пример замены кнопки-таргета Popover собственным элементом через `renderTarget`.
 * Вместо дефолтной кнопки «Ещё фильтры» рендерится своя IconButton, при этом
 * открытие Popover и красная точка-индикатор продолжают работать.
 * #####ℹ️ Для просмотра примера нажми `Show code`.
 */
export const CustomTargetFiltersActionsStory: Story = {
  name: 'FiltersActions с кастомным таргетом Popover',
  ...storySourceDoc({
    previewSource: 'shown',
    preCode: `
    import {
      FiltersActions,
      IconButton,
      IconSettingsFilter,
      Combobox,
      BodyS,
    } from '@daisforge/ui';
    import React, { useRef, useState } from 'react';

    ${getFuncAsString(
      'packages/storybook/src/stories/FiltersActions/FiltersActions.stories.tsx',
      'CustomTargetFiltersExample',
    )}
        `,
  }),
  render: () => <CustomTargetFiltersExample />,
};

// --- DOM-тест: стрелки-скролл в списке применённых фильтров -------------------

// Ширина контейнера подобрана так, чтобы переполнение (и его исчезновение)
// было предсказуемым: у чипа-Item maxWidth = 150px (см. ChipOrGroup), поэтому
// 6 активных чипов гарантированно переполняют 500px, а 2 - гарантированно нет.
const ARROWS_TEST_CONTAINER_WIDTH = '500px !important';

const ARROWS_TEST_FILTER_LABELS = [
  'Активный фильтр номер один',
  'Активный фильтр номер два',
  'Активный фильтр номер три',
  'Активный фильтр номер четыре',
  'Активный фильтр номер пять',
  'Активный фильтр номер шесть',
];

function useArrowsTestFilters() {
  const [activeFilters, setActiveFilters] = useState<boolean[]>(() =>
    ARROWS_TEST_FILTER_LABELS.map(() => false),
  );

  const toggleFilter = useCallback((index: number) => {
    setActiveFilters((prev) =>
      prev.map((value, i) => (i === index ? !value : value)),
    );
  }, []);

  const clearAll = useCallback(() => {
    setActiveFilters(ARROWS_TEST_FILTER_LABELS.map(() => false));
  }, []);

  // Чипы - обычные boolean-фильтры (как в useFiltersList), без групп -
  // это упрощает и делает предсказуемой ширину каждого чипа
  const items: Item[] = useMemo(
    () =>
      ARROWS_TEST_FILTER_LABELS.reduce<Item[]>((acc, label, index) => {
        if (activeFilters[index]) {
          acc.push({ id: index, label, onClick: () => toggleFilter(index) });
        }
        return acc;
      }, []),
    [activeFilters, toggleFilter],
  );

  return { activeFilters, toggleFilter, clearAll, items };
}

// Кнопки-тогглеры фильтров вынесены отдельным простым HTML-контролом (а не
// через Combobox/Switch), чтобы тест бил точно в цель - в поведение стрелок
// ListOfFilters/Tabs, а не завязывался на DOM стороннего виджета выбора.
function ScrollArrowsExample() {
  const { activeFilters, toggleFilter, clearAll, items } =
    useArrowsTestFilters();

  return (
    <div style={{ padding: 16 }}>
      <FiltersActions
        containerProps={{ $css: { width: ARROWS_TEST_CONTAINER_WIDTH } }}
        mainBlock={
          <>
            {ARROWS_TEST_FILTER_LABELS.map((label, index) => (
              <Button
                size="xs"
                view="secondary"
                key={label}
                type="button"
                data-testid={`arrows-test-toggle-filter-${index}`}
                onClick={() => toggleFilter(index)}
              >
                {activeFilters[index] ? '✓' : '-'}
                {activeFilters[index] ?? 0 + 1}
              </Button>
            ))}
          </>
        }
        listOfFilters={
          <FiltersActions.ListOfFilters
            clearAll={clearAll}
            opened={items.length > 0}
            items={items}
            showResetAllFiltersButton={false}
          />
        }
      />
    </div>
  );
}

/**
 * Регрессионный DOM-тест (без скриншотов): стрелки-скролл в блоке применённых
 * фильтров должны появляться сами - без ручного скролла пользователем мышью/
 * трекпадом - как только чипы перестают помещаться по ширине, и пропадать
 * обратно, когда чипов снова становится мало.
 *
 * Компонент маунтится без активных фильтров в контейнере фиксированной ширины
 * (500px - для предсказуемого переполнения). Затем через play включается
 * несколько фильтров: чипы переполняют список -> должна появиться стрелка
 * «Следующий таб». После часть фильтров выключается обратно: переполнение
 * исчезает -> стрелка должна пропасть - тоже сама, без скролла.
 */
export const ScrollArrowsAppearWithoutManualScrollStory: Story = {
  name: 'Список применённых фильтров: стрелки-скролл появляются сами при переполнении',
  parameters: { screenshot: { skip: true } },
  render: () => <ScrollArrowsExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const getNextArrow = () => canvas.queryByLabelText('Следующий таб');

    // 1. Без активных фильтров стрелок нет
    await waitFor(() => {
      if (getNextArrow()) {
        throw new Error(
          'Стрелка «Следующий таб» не должна быть видна без активных фильтров',
        );
      }
    });

    // 2. Активируем несколько фильтров - список чипов переполняется.
    // Стрелка должна появиться САМА, без имитации скролла пользователем
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-0'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-1'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-2'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-3'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-4'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-5'));

    await waitFor(
      () => {
        if (!getNextArrow()) {
          throw new Error(
            'Стрелка «Следующий таб» не появилась сама после переполнения списка чипов активных фильтров',
          );
        }
      },
      { timeout: 3000 },
    );

    // 3. Выключаем часть фильтров обратно - чипов снова мало, переполнения нет.
    // Стрелка должна пропасть САМА, без имитации скролла
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-2'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-3'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-4'));
    await userEvent.click(canvas.getByTestId('arrows-test-toggle-filter-5'));

    await waitFor(
      () => {
        if (getNextArrow()) {
          throw new Error(
            'Стрелка «Следующий таб» осталась видна, хотя переполнения списка чипов больше нет',
          );
        }
      },
      { timeout: 3000 },
    );
  },
};
