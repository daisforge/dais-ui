/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import './lib/global.css';

import { getFuncAsString } from '@df-storybook/utils/getFuncAsString';
import { storySourceDoc } from '@df-storybook/utils/storySourceDoc';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Meta, StoryObj } from '@storybook/react';
import type { AnalyticalWidgetProps } from '@ui-kit/components/AnalyticalWidget';
import {
  AnalyticalWidget,
  analyticalWidgetClassNames,
} from '@ui-kit/components/AnalyticalWidget';
import { Collapse } from '@ui-kit/components/Collapse';
import { Flow } from '@ui-kit/components/Flow';
import { useFiltersList } from '@ui-kit/components/ListOfFilters';
import {
  SegmentGroup,
  SegmentItem,
  SegmentProvider,
} from '@ui-kit/components/Segment';
import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';

import type { Filters } from './lib/utils';
import {
  DEFAULT_FILTERS,
  dotsButtonOptions,
  filterButtonOptions,
  filtersReducer,
  generateButtonItems,
  longText,
  useFetch,
} from './lib/utils';

const meta: Meta<AnalyticalWidgetProps> = {
  title: 'Композиции/AnalyticalWidget',
  tags: ['!autodocs'],
  parameters: {
    docs: {},
  },
  excludeStories: ['CANVAS'],
  component: AnalyticalWidget,
};

const preCodeL = `
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  SegmentItem,
  AnalyticalWidget,
  textInfo
} from '@daisforge/ui';
import type { ItemOrGroup } from '@daisforge/ui';

import React, { useMemo, useReducer, useState } from 'react';

type Filters = {
  searchedV: string;
  blocks: string[];
  tribes: string[];
  allocation: string;
  year: number | null;
  filterButton: string;
  dotsButton: string;
};

const DEFAULT_FILTERS: Filters = {
  searchedV: '',
  blocks: [],
  tribes: [],
  allocation: '',
  year: null,
  filterButton: '',
  dotsButton: '',
};

const LABELS: { [key in keyof Filters]: string } = {
  searchedV: 'Поиск',
  blocks: 'Блок',
  tribes: 'Трайб',
  allocation: 'Аллокация',
  year: 'Год',
  filterButton: 'Фильтры',
  dotsButton: 'Меню',
};

const useFetch = (key: 'blocks' | 'tribes' | 'allocation', num = 10) =>
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
    'packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx',
    'hasActiveFilterForButton',
  )}

  ${getFuncAsString(
    'packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx',
    'generateButtonItems',
  )}

  const GridContainerL = styled.div\`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 512px);
    grid-auto-flow: dense;
    width: 100%;
    max-width: 1556px;
    margin: 0 auto;
    padding: 20px;
    background-color: grey;

\`;

`;

const preCodeM = `
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  SegmentItem,
  AnalyticalWidget,
  textInfo
} from '@daisforge/ui';
import type { ItemOrGroup } from '@daisforge/ui';

import React, { useMemo, useReducer, useState } from 'react';

type Filters = {
  searchedV: string;
  blocks: string[];
  tribes: string[];
  allocation: string;
  year: number | null;
  filterButton: string;
  dotsButton: string;
};

const DEFAULT_FILTERS: Filters = {
  searchedV: '',
  blocks: [],
  tribes: [],
  allocation: '',
  year: null,
  filterButton: '',
  dotsButton: '',
};

const LABELS: { [key in keyof Filters]: string } = {
  searchedV: 'Поиск',
  blocks: 'Блок',
  tribes: 'Трайб',
  allocation: 'Аллокация',
  year: 'Год',
  filterButton: 'Фильтры',
  dotsButton: 'Меню',
};

const useFetch = (key: 'blocks' | 'tribes' | 'allocation', num = 10) =>
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
    'packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx',
    'hasActiveFilterForButton',
  )}

  ${getFuncAsString(
    'packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx',
    'generateButtonItems',
  )}

  const GridContainerL = styled.div\`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 248px);
    grid-auto-flow: dense;
    width: 100%;
    max-width: 1556px;
    margin: 0 auto;
    padding: 20px;
    background-color: grey;

\`;

`;

const preCodeS = `
import {
  Box,
  Combobox,
  Flow,
  SegmentGroup,
  SegmentProvider,
  TooltipList,
  useFiltersList,
  IconDone,
  SegmentItem,
  AnalyticalWidget,
  textInfo
} from '@daisforge/ui';
import type { ItemOrGroup } from '@daisforge/ui';

import React, { useMemo, useReducer, useState } from 'react';

type Filters = {
  searchedV: string;
  blocks: string[];
  tribes: string[];
  allocation: string;
  year: number | null;
  filterButton: string;
  dotsButton: string;
};

const DEFAULT_FILTERS: Filters = {
  searchedV: '',
  blocks: [],
  tribes: [],
  allocation: '',
  year: null,
  filterButton: '',
  dotsButton: '',
};

const LABELS: { [key in keyof Filters]: string } = {
  searchedV: 'Поиск',
  blocks: 'Блок',
  tribes: 'Трайб',
  allocation: 'Аллокация',
  year: 'Год',
  filterButton: 'Фильтры',
  dotsButton: 'Меню',
};

const useFetch = (key: 'blocks' | 'tribes' | 'allocation', num = 10) =>
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
    'packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx',
    'hasActiveFilterForButton',
  )}

  ${getFuncAsString(
    'packages/storybook/src/stories/AnalyticalWidget/lib/utils.tsx',
    'generateButtonItems',
  )}

  const GridContainerL = styled.div\`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 248px);
    grid-auto-flow: dense;
    width: 100%;
    max-width: 1556px;
    margin: 0 auto;
    padding: 20px;
    background-color: grey;

\`;

`;

export default meta;

type Story = StoryObj<AnalyticalWidgetProps>;

// Пример контейнера для виджета размером L
const GridContainerL = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 512px);
  grid-auto-flow: dense;
  width: 100%;
  max-width: 1556px;
  margin: 0 auto;
  padding: 20px;
  background-color: grey;

  @media (min-width: 1440px) and (max-width: 1919px) {
    grid-auto-rows: minmax(0, 512px);
  }

  @media (min-width: 1920px) {
    grid-auto-rows: minmax(0, 512px);
  }

  @media (max-width: 1200px) {
    grid-auto-rows: minmax(0, 512px);
  }
`;

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const AnalyticalWidgetL: Story = {
  ...storySourceDoc({
    preCode: preCodeL,
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(
      filtersReducer,
      DEFAULT_FILTERS,
    );
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);
    const someItems = Array(3).fill(0);

    const { filterList, filterListOpened } = useFiltersList({
      filters,
      options: {
        blocks: filtersBlocksOption,
        tribes: filtersTribesOption,
        allocation: filtersAllocationOption,
        filterButton: filterButtonOptions,
        dotsButton: dotsButtonOptions,
      } as Record<keyof Filters, { label: string; value: string }[]>,
      updateFilters: (key, newV) => updateFilters({ [key]: newV }),
      filtersInfo: {
        searchedV: { label: 'Поиск', clearedValue: '' },
        blocks: { label: 'Блок', clearedValue: [] },
        tribes: { label: 'Трайб', clearedValue: [] },
        allocation: { label: 'Аллокация', clearedValue: '' },
        year: { label: 'Год', clearedValue: null },
        filterButton: { label: 'Фильтр', clearedValue: '' },
        dotsButton: { label: 'Меню', clearedValue: '' },
      },
    });

    const chipsList = filterList
      .map((item) => {
        if ('groupLabel' in item) {
          return item.items.map((innerItem) => ({
            text: String(innerItem.label),
            view: 'default' as const,
            hasClear: false as const,
            onClick: innerItem.onClick,
          }));
        }
        return {
          text: String(item.label),
          view: 'default' as const,
          hasClear: false as const,
          onClick: item.onClick,
        };
      })
      .flat();

    return (
      <GridContainerL>
        <SegmentProvider defaultSelected={['item_0']}>
          <div
            style={{
              position: 'relative',
              width: 'min-content',
            }}
          >
            <AnalyticalWidget
              size="l"
              headerSlot={
                <AnalyticalWidget.Header
                  title="Analytic widget L"
                  badge="TA"
                  subtitle="Monthly report"
                  rightSlot={
                    <Flow
                      alignment="center"
                      mainAxisGap="8px"
                      style={{
                        flexWrap: 'nowrap',
                      }}
                    >
                      <SegmentGroup hasBackground size="xs">
                        {someItems.map((_, i) => (
                          <SegmentItem
                            // eslint-disable-next-line react/no-array-index-key
                            key={`item:${i}`}
                            value={`item_${i}`}
                            label={`Label${i + 1}`}
                            size="xs"
                            view="primary"
                          />
                        ))}
                      </SegmentGroup>
                    </Flow>
                  }
                  infoTooltipText="Info"
                  href="/"
                />
              }
              topSlot={
                <Flow orientation="vertical" mainAxisGap={8}>
                  <AnalyticalWidget.Chips
                    opened={filterListOpened}
                    isWrapped
                    gap="wide"
                    isCommonChipStyles={false}
                    chips={chipsList}
                  />
                </Flow>
              }
              contentSlot={
                <div
                  style={{
                    minHeight: 'fit-content',
                  }}
                >
                  {longText()}
                </div>
              }
              classes={{
                topSlot: 'myCustomClassForTopSlot',
                middleSlot: 'myCustomClassForMiddleSlot',
                contentSlot: 'myCustomClassForContentSlot',
                root: 'myCustomClassForRoot',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
              }}
            >
              <AnalyticalWidget.DotsIconButton
                dropdownProps={{
                  items: generateButtonItems(
                    'dotsButton',
                    dotsButtonOptions,
                    filterList,
                  ),
                  onItemSelect(item) {
                    updateFilters({
                      dotsButton:
                        filters.dotsButton === item.value?.toString()
                          ? ''
                          : item.value?.toString() ?? '',
                    });
                  },
                }}
              />
            </div>
          </div>
        </SegmentProvider>
      </GridContainerL>
    );
  },
};

// Пример контейнера для виджета размером M
const GridContainerM = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 248px);
  grid-auto-flow: dense;
  width: 100%;
  max-width: 1556px;
  margin: 0 auto;
  padding: 20px;
  background-color: grey;

  @media (min-width: 1440px) and (max-width: 1919px) {
    grid-auto-rows: minmax(0, 248px);
  }

  @media (min-width: 1920px) {
    grid-auto-rows: minmax(0, 248px);
  }

  @media (max-width: 1200px) {
    grid-auto-rows: minmax(0, 248px);
  }
`;

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const AnalyticalWidgetM: Story = {
  ...storySourceDoc({
    preCode: preCodeM,
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(
      filtersReducer,
      DEFAULT_FILTERS,
    );
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);
    const someItems = Array(3).fill(0);

    const { filterList, filterListOpened } = useFiltersList({
      filters,
      options: {
        blocks: filtersBlocksOption,
        tribes: filtersTribesOption,
        allocation: filtersAllocationOption,
        filterButton: filterButtonOptions,
        dotsButton: dotsButtonOptions,
      } as Record<keyof Filters, { label: string; value: string }[]>,
      updateFilters: (key, newV) => updateFilters({ [key]: newV }),
      filtersInfo: {
        searchedV: { label: 'Поиск', clearedValue: '' },
        blocks: { label: 'Блок', clearedValue: [] },
        tribes: { label: 'Трайб', clearedValue: [] },
        allocation: { label: 'Аллокация', clearedValue: '' },
        year: { label: 'Год', clearedValue: null },
        filterButton: { label: 'Фильтр', clearedValue: '' },
        dotsButton: { label: 'Меню', clearedValue: '' },
      },
    });

    const chipsList = filterList
      .map((item, index) => {
        if ('groupLabel' in item) {
          return item.items.map((innerItem, innerIdex) => ({
            text: String(innerItem.label),
            view: 'default' as const,
            hasClear: false as const,
            onClick: innerItem.onClick,
            key: `chip-key${index}-${innerIdex}-${innerItem.label}`,
          }));
        }
        return {
          text: String(item.label),
          view: 'default' as const,
          hasClear: false as const,
          onClick: item.onClick,
          key: `chip-key-${index}-${item.label}`,
        };
      })
      .flat();

    return (
      <GridContainerM>
        <SegmentProvider defaultSelected={['item_0']}>
          <div
            style={{
              position: 'relative',
              width: 'min-content',
            }}
          >
            <AnalyticalWidget
              size="m"
              headerSlot={
                <AnalyticalWidget.Header
                  title="Analytic widget M"
                  badge="TA"
                  subtitle="Monthly report"
                  rightSlot={
                    <Flow
                      alignment="center"
                      mainAxisGap="8px"
                      style={{
                        flexWrap: 'nowrap',
                      }}
                    >
                      <SegmentGroup hasBackground size="xs">
                        {someItems.map((_, i) => (
                          <SegmentItem
                            // eslint-disable-next-line react/no-array-index-key
                            key={`item:${i}`}
                            value={`item_${i}`}
                            label={`Label${i + 1}`}
                            size="xs"
                            view="primary"
                          />
                        ))}
                      </SegmentGroup>
                    </Flow>
                  }
                  infoTooltipText="Info"
                  href="/"
                />
              }
              topSlot={
                <Flow orientation="vertical" mainAxisGap={8}>
                  <AnalyticalWidget.Chips
                    opened={filterListOpened}
                    isWrapped
                    gap="wide"
                    isCommonChipStyles={false}
                    chips={chipsList}
                  />
                </Flow>
              }
              contentSlot={
                <div
                  style={{
                    minHeight: 'fit-content',
                  }}
                >
                  {longText()}
                </div>
              }
              classes={{
                topSlot: 'myCustomClassForTopSlot',
                middleSlot: 'myCustomClassForMiddleSlot',
                contentSlot: 'myCustomClassForContentSlot',
                root: 'myCustomClassForRoot',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
              }}
            >
              <AnalyticalWidget.DotsIconButton
                dropdownProps={{
                  items: generateButtonItems(
                    'dotsButton',
                    dotsButtonOptions,
                    filterList,
                  ),
                  onItemSelect(item) {
                    updateFilters({
                      dotsButton:
                        filters.dotsButton === item.value?.toString()
                          ? ''
                          : item.value?.toString() ?? '',
                    });
                  },
                }}
              />
            </div>
          </div>
        </SegmentProvider>
      </GridContainerM>
    );
  },
};

// Пример контейнера для виджета размером S
const GridContainerS = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-rows: minmax(0, 248px);
  grid-auto-flow: dense;
  width: 100%;
  max-width: 1556px;
  margin: 0 auto;
  padding: 20px;
  background-color: grey;

  @media (min-width: 1440px) and (max-width: 1919px) {
    grid-auto-rows: minmax(0, 248px);
  }

  @media (min-width: 1920px) {
    grid-auto-rows: minmax(0, 248px);
  }

  @media (max-width: 1200px) {
    grid-auto-rows: minmax(0, 248px);
  }
`;

/**
 * ℹ️ Для просмотра примера нажми `Show code`.
 */
export const AnalyticalWidgetS: Story = {
  ...storySourceDoc({
    preCode: preCodeS,
  }),
  render: () => {
    const [filters, updateFilters] = useReducer(
      filtersReducer,
      DEFAULT_FILTERS,
    );
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);

    const { filterList, filterListOpened } = useFiltersList({
      filters,
      options: {
        blocks: filtersBlocksOption,
        tribes: filtersTribesOption,
        allocation: filtersAllocationOption,
        filterButton: filterButtonOptions,
        dotsButton: dotsButtonOptions,
      } as Record<keyof Filters, { label: string; value: string }[]>,
      updateFilters: (key, newV) => updateFilters({ [key]: newV }),
      filtersInfo: {
        searchedV: { label: 'Поиск', clearedValue: '' },
        blocks: { label: 'Блок', clearedValue: [] },
        tribes: { label: 'Трайб', clearedValue: [] },
        allocation: { label: 'Аллокация', clearedValue: '' },
        year: { label: 'Год', clearedValue: null },
        filterButton: { label: 'Фильтр', clearedValue: '' },
        dotsButton: { label: 'Меню', clearedValue: '' },
      },
    });

    const chipsList = filterList
      .map((item) => {
        if ('groupLabel' in item) {
          return item.items.map((innerItem) => ({
            text: String(innerItem.label),
            view: 'default' as const,
            hasClear: false as const,
            onClick: innerItem.onClick,
          }));
        }
        return {
          text: String(item.label),
          view: 'default' as const,
          hasClear: false as const,
          onClick: item.onClick,
        };
      })
      .flat();

    return (
      <GridContainerS>
        <SegmentProvider defaultSelected={['item_0']}>
          <div
            style={{
              position: 'relative',
              width: 'min-content',
            }}
          >
            <AnalyticalWidget
              size="s"
              headerSlot={
                <AnalyticalWidget.Header
                  title="Заголовок"
                  badge="TA"
                  subtitle="Подзаголовок здесь"
                  infoTooltipText="Info"
                  href="/"
                />
              }
              topSlot={
                <Flow orientation="vertical" mainAxisGap={8}>
                  <AnalyticalWidget.Chips
                    opened={filterListOpened}
                    isWrapped
                    gap="wide"
                    isCommonChipStyles={false}
                    chips={chipsList}
                  />
                </Flow>
              }
              contentSlot={
                <div
                  style={{
                    minHeight: 'fit-content',
                  }}
                >
                  {longText()}
                </div>
              }
              classes={{
                topSlot: 'myCustomClassForTopSlot',
                middleSlot: 'myCustomClassForMiddleSlot',
                contentSlot: 'myCustomClassForContentSlot',
                root: 'myCustomClassForRoot',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
              }}
            >
              <AnalyticalWidget.DotsIconButton
                dropdownProps={{
                  items: generateButtonItems(
                    'dotsButton',
                    dotsButtonOptions,
                    filterList,
                  ),
                  onItemSelect(item) {
                    updateFilters({
                      dotsButton:
                        filters.dotsButton === item.value?.toString()
                          ? ''
                          : item.value?.toString() ?? '',
                    });
                  },
                }}
              />
            </div>
          </div>
        </SegmentProvider>
      </GridContainerS>
    );
  },
};

/** Кастомный контент в topSlot: потребитель рендерит свои чипы (не AnalyticalWidget.Chips). */
export const AnalyticalWidgetCustomTopSlot: Story = {
  name: 'Custom topSlot (свои чипы потребителя)',
  render: () => {
    const [filters, updateFilters] = useReducer(
      filtersReducer,
      DEFAULT_FILTERS,
    );
    const filtersBlocksOption = useFetch('blocks', 10);
    const filtersTribesOption = useFetch('tribes', 15);
    const filtersAllocationOption = useFetch('allocation', 10);

    const { filterList } = useFiltersList({
      filters,
      options: {
        blocks: filtersBlocksOption,
        tribes: filtersTribesOption,
        allocation: filtersAllocationOption,
        filterButton: filterButtonOptions,
        dotsButton: dotsButtonOptions,
      } as Record<keyof Filters, { label: string; value: string }[]>,
      updateFilters: (key, newV) => updateFilters({ [key]: newV }),
      filtersInfo: {
        searchedV: { label: 'Поиск', clearedValue: '' },
        blocks: { label: 'Блок', clearedValue: [] },
        tribes: { label: 'Трайб', clearedValue: [] },
        allocation: { label: 'Аллокация', clearedValue: '' },
        year: { label: 'Год', clearedValue: null },
        filterButton: { label: 'Фильтр', clearedValue: '' },
        dotsButton: { label: 'Меню', clearedValue: '' },
      },
    });

    const customChips = filterList.flatMap((item) =>
      'groupLabel' in item
        ? item.items.map((inner) => ({
            label: String(inner.label),
            onClick: inner.onClick,
          }))
        : [{ label: String(item.label), onClick: item.onClick }],
    );
    const hasChips = customChips.length > 0;
    const lastRef = useRef(customChips);
    if (hasChips) {
      lastRef.current = customChips;
    }
    const renderedChips = hasChips ? customChips : lastRef.current;

    return (
      <GridContainerS>
        <div style={{ position: 'relative', width: 'min-content' }}>
          <AnalyticalWidget
            size="l"
            headerSlot={
              <AnalyticalWidget.Header
                title="Custom topSlot"
                badge="TA"
                subtitle="Свои чипы потребителя"
                infoTooltipText="Info"
              />
            }
            topSlot={
              <div className={analyticalWidgetClassNames.selfSpacedTopSlot}>
                <Collapse isOpen={hasChips} unMountOnClose>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 4,
                      paddingTop: 8,
                    }}
                  >
                    {renderedChips.map((chip, index) => (
                      <button
                        type="button"
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${chip.label}-${index}`}
                        onClick={chip.onClick}
                        style={{
                          padding: '2px 8px',
                          borderRadius: 12,
                          background: 'rgba(0, 0, 0, 0.06)',
                          border: 'none',
                          fontSize: 12,
                          lineHeight: '16px',
                          whiteSpace: 'nowrap',
                          cursor: 'pointer',
                        }}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </Collapse>
              </div>
            }
            contentSlot={
              <div style={{ minHeight: 'fit-content' }}>{longText()}</div>
            }
          />
          <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
            <AnalyticalWidget.DotsIconButton
              dropdownProps={{
                items: generateButtonItems(
                  'dotsButton',
                  dotsButtonOptions,
                  filterList,
                ),
                onItemSelect(item) {
                  updateFilters({
                    dotsButton:
                      filters.dotsButton === item.value?.toString()
                        ? ''
                        : item.value?.toString() ?? '',
                  });
                },
              }}
            />
          </div>
        </div>
      </GridContainerS>
    );
  },
};
