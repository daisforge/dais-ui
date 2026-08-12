import { Box } from '@ui-kit/components/Box';
import { Button } from '@ui-kit/components/Button';
import { Collapse } from '@ui-kit/components/Collapse';
import { COLORS } from '@ui-kit/components/Table';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import { IconClose } from '@ui-kit/icons';
import { useDebouncedValue } from '@ui-kit/utils';
import React, { memo, ReactNode } from 'react';
import styled, { CSSObject } from 'styled-components';

import { ChipOrGroup } from './ChipOrGroup';
import { listOfFiltersClassNames as cls } from './classNames';
import { Group, Item, ItemOrGroup } from './types';
import { useSyncTabsScrollArrows } from './useSyncTabsScrollArrows';
import { useUpdateSize } from './useUpdateSize';

const SIZES = {
  xs: { height: 32, paddingInline: 0 },
};

const BORDER_WIDTH = 1;
const BORDER = `${BORDER_WIDTH}px solid ${() => COLORS.border}`;

// const DURATION = 0.5;

const StyledTabs = styled(Tabs)({
  '&': {
    '& .tabs-clip-scroll': {
      overflowY: 'hidden',
    },
    '& button.tab-item-animated': {
      marginLeft: '8px',

      '&:first-of-type': {
        marginLeft: '0px',
      },
    },
  },
});

export type ListOfFiltersProps = {
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
};

const ListOfFiltersNotMemo = ({
  opened,
  items,
  clearAll,
  size = 'xs',
  paddingTop = 0,
  maxLengthInGroup = 2,
  ellipsisLabel = false,
  sizeOnOpen,
  leftSlot,
  paddingInline,
  maxHeight,
  chipStyle,
  renderGroupLabel,
  renderChipLabel,
  showResetAllFiltersButton = true,
  extraCss = {},
}: ListOfFiltersProps) => {
  const SIZE = SIZES[size];
  const curPaddingInline = paddingInline ?? SIZE.paddingInline;
  const curMaxHeight = maxHeight ?? SIZE.height;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { refForContainer, maxWidthForCenterElement } = useUpdateSize(
    opened,
    curPaddingInline,
    BORDER_WIDTH,
  );
  // для перерисовки табов - табы без доп отложенного стейт-а не обновляет ui
  useDebouncedValue(opened, 200);
  // Tabs пересчитывает стрелки-скролл только по scroll-событию/при монтировании,
  // но не при изменении списка чипов или ширины контейнера - форсируем пересчёт
  useSyncTabsScrollArrows(refForContainer, opened);

  return (
    <Collapse
      isOpen={opened}
      sizeOnOpen={sizeOnOpen ?? curMaxHeight + paddingTop}
      unMountOnClose
    >
      <Box
        ref={refForContainer}
        className={cls.container}
        $css={{
          display: 'flex',
          borderInline: BORDER,
          borderTop: BORDER,
          paddingInline: curPaddingInline,
          maxHeight: curMaxHeight,
          marginTop: paddingTop,
          // transition: `all ${DURATION}s ease`,
          flexDirection: 'row-reverse',
          ...extraCss,
        }}
      >
        {/* нужен для корректной работы useUpdateSize */}
        <Box $css="display: inline;">{leftSlot ?? null}</Box>
        <StyledTabs
          className={cls.chipsContainer}
          view="clear"
          size="xs"
          style={{
            height: curMaxHeight - BORDER_WIDTH,
            flex: 1, //  Добавляем стили вместо maxWidthForCenterElement
            minWidth: 0, // Добавляем стили вместо maxWidthForCenterElement
            overflow: 'hidden', // Добавляем стили вместо maxWidthForCenterElement
            // width: maxWidthForCenterElement, // убираем. в splitView вызывает "дерганье"
          }}
        >
          {!!items.length &&
            items.map((itemOrGroup, index) => {
              let id;

              if ('groupId' in itemOrGroup) {
                id = itemOrGroup.groupId ?? index;
              }

              if ('id' in itemOrGroup) {
                id = itemOrGroup.id ?? index;
              }

              return (
                <TabItem
                  key={id}
                  view="clear"
                  onClick={(e) => e.preventDefault()}
                >
                  <ChipOrGroup
                    maxLengthInGroup={maxLengthInGroup}
                    ellipsisLabel={ellipsisLabel}
                    itemOrGroup={itemOrGroup}
                    chipStyle={chipStyle}
                    renderGroupLabel={renderGroupLabel}
                    renderChipLabel={renderChipLabel}
                  />
                </TabItem>
              );
            })}
        </StyledTabs>
        <Box
          className={cls.clearButtonBlock}
          $css="display: inline-flex; margin-left: auto;"
        >
          {showResetAllFiltersButton && (
            <Button
              view="clear"
              size="xs"
              text="Сбросить все"
              disabled={!items.length}
              contentLeft={<IconClose size="xs" color="inherit" />}
              onClick={clearAll}
            />
          )}
        </Box>
      </Box>
    </Collapse>
  );
};
export const ListOfFilters = memo(ListOfFiltersNotMemo);
