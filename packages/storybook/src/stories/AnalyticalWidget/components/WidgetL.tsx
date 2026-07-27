import { AnalyticalWidget } from '@ui-kit/components/AnalyticalWidget';
import { Flow } from '@ui-kit/components/Flow';
import { useFiltersList } from '@ui-kit/components/ListOfFilters';
import {
  SegmentGroup,
  SegmentItem,
  SegmentProvider
} from '@ui-kit/components/Segment';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import React, { useReducer, useState } from 'react';

import {
  DEFAULT_FILTERS,
  dotsButtonOptionsWithRemove,
  filterButtonOptions,
  Filters,
  filtersReducer,
  longText,
  useFetch
} from '../lib/utils';

export const WidgetL = ({
  id,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onRemove
}: {
  id: number | string;
  onRemove: () => void;
}) => {
  const [filters, updateFilters] = useReducer(filtersReducer, DEFAULT_FILTERS);
  const filtersBlocksOption = useFetch('blocks', 10);
  const filtersTribesOption = useFetch('tribes', 15);
  const filtersAllocationOption = useFetch('allocation', 10);
  const someItems = Array(3).fill(0);
  const tabItems = Array(6).fill(0);
  const [tabIndex, setTabIndex] = useState(0);

  const { filterList, filterListOpened } = useFiltersList({
    filters,
    options: {
      blocks: filtersBlocksOption,
      tribes: filtersTribesOption,
      allocation: filtersAllocationOption,
      filterButton: filterButtonOptions,
      dotsButton: dotsButtonOptionsWithRemove
    } as Record<keyof Filters, { label: string; value: string }[]>,
    updateFilters: (key, newV) => updateFilters({ [key]: newV }),
    filtersInfo: {
      searchedV: { label: 'Поиск', clearedValue: '' },
      blocks: { label: 'Блок', clearedValue: [] },
      tribes: { label: 'Трайб', clearedValue: [] },
      allocation: { label: 'Аллокация', clearedValue: '' },
      year: { label: 'Год', clearedValue: null },
      filterButton: { label: 'Фильтр', clearedValue: '' },
      dotsButton: { label: 'Меню', clearedValue: '' }
    }
  });

  const chipsList = filterList
    .map((item, index) => {
      if ('groupLabel' in item) {
        return item.items.map((innerItem, innerIndex) => ({
          text: String(innerItem.label),
          view: 'default' as const,
          hasClear: false as const,
          onClick: innerItem.onClick,
          key: `chip-key${index}-${innerIndex}-${innerItem.label}`
        }));
      }
      return {
        text: String(item.label),
        view: 'default' as const,
        hasClear: false as const,
        onClick: item.onClick,
        key: `chip-key${index}-${item.label}`
      };
    })
    .flat();

  return (
    <SegmentProvider>
      <AnalyticalWidget
        $css={{
          height: '100%',
          maxWidth: 'unset !important',
          width: '100% !important'
        }}
        size="l"
        headerSlot={
          <AnalyticalWidget.Header
            title={`Заголовок S${id
              .toString()
              .split('')
              .reverse()
              .slice(0, 3)
              .join('')}`}
            badge={`S${id.toString().split('').reverse().slice(0, 2).join('')}`}
            subtitle="Подзаголовок"
            href="/"
            rightSlot={
              <Flow
                alignment="center"
                mainAxisGap="8px"
                style={{
                  flexWrap: 'nowrap'
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
                      view="secondary"
                    />
                  ))}
                </SegmentGroup>
              </Flow>
            }
            infoTooltipText="Info"
          />
        }
        topSlot={
          chipsList.length > 0 && (
            <Flow orientation="vertical" mainAxisGap={8}>
              <AnalyticalWidget.Chips
                opened={filterListOpened}
                isWrapped
                gap="wide"
                isCommonChipStyles={false}
                chips={chipsList}
              />
            </Flow>
          )
        }
        middleSlot={
          <Tabs view="divider" orientation="horizontal" size="xs">
            {tabItems.map((_, i) => (
              <TabItem
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                view="divider"
                orientation="horizontal"
                size="xs"
                selected={i === tabIndex}
                tabIndex={0}
                onClick={() => setTabIndex(i)}
              >
                {`Tab ${i + 1}`}
              </TabItem>
            ))}
          </Tabs>
        }
        contentSlot={
          <div style={{ minHeight: 'fit-content' }}>{longText()}</div>
        }
      />
    </SegmentProvider>
  );
};
