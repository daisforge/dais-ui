import { Chip } from '@ui-kit/components/Chip';
import { ChipGroup } from '@ui-kit/components/ChipGroup';
import {
  bodyS,
  borderRadiusS,
  onLightTextSecondary,
  textPrimary,
} from '@ui-kit/tokens';
import React from 'react';
import styled, { css, CSSObject } from 'styled-components';

import { FiltersActionsTooltip } from '../../layouts/FiltersActions/components/Tooltip';
import { overflowDotsStyle } from '../Table/utils';
import { listOfFiltersClassNames as cls } from './classNames';
import { Group, isGroup, Item, ItemOrGroup } from './types';

const chipGroupFontStyles = () => css(bodyS);
const GROUP_LABEL_MAX_WIDTH = 250;

const StyledChipGroup = styled(ChipGroup)`
  & {
    border-radius: ${() => borderRadiusS};
    padding: 4px 2px;
    ${() => chipGroupFontStyles()}
    align-items: center;
    &.${cls.chipsGroup} {
      gap: 4px;
      & .${cls.chip}:first-child, & .${cls.chipsGroupLabel} + .${cls.chip} {
        margin-left: 4px;
      }
      & .${cls.chipsGroupLabel} {
        display: inline-block;
        min-width: 0;
        max-width: ${GROUP_LABEL_MAX_WIDTH}px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      & .${cls.chipsGroupCount} {
        color: ${() => textPrimary};
        margin-left: 4px;
      }

      & .${cls.chip} svg {
        color: ${() => onLightTextSecondary} !important;
      }
    }
  }
`;

export const ChipOrGroup = ({
  itemOrGroup,
  maxLengthInGroup = 2,
  ellipsisLabel = false,
  chipStyle,
  renderGroupLabel,
  renderChipLabel,
}: {
  itemOrGroup: ItemOrGroup;
  maxLengthInGroup?: number;
  ellipsisLabel?: boolean;
  chipStyle?: (itemOrGroup: ItemOrGroup, item: Item | undefined) => CSSObject;
  renderGroupLabel?: (group: Group) => string;
  renderChipLabel?: (group: Group | null, item: Item) => string;
}) => {
  if (isGroup(itemOrGroup)) {
    const group = itemOrGroup;
    const visibleArr = group.items.slice(0, maxLengthInGroup);
    const restLength = group.items.length - visibleArr.length;
    const groupLabel = renderGroupLabel
      ? renderGroupLabel(group)
      : group.groupLabel;

    return (
      <StyledChipGroup
        className={cls.chipsGroup}
        size="xs"
        gap="wide"
        view="default"
        isCommonChipStyles={false}
      >
        {ellipsisLabel ? (
          <span className={cls.chipsGroupLabel} title={groupLabel}>
            {groupLabel}
          </span>
        ) : (
          groupLabel
        )}
        {visibleArr.map((currItem) => (
          <Chip
            key={currItem.id}
            className={cls.chip}
            title="Удалить фильтр"
            view="default"
            text={
              renderChipLabel
                ? renderChipLabel(group, currItem)
                : currItem.label.toString()
            }
            size="xs"
            pilled
            onClick={currItem.onClick}
            style={{
              maxWidth: 180,
              ...overflowDotsStyle,
              ...(chipStyle && chipStyle(group, currItem)),
            }}
            appearance="transparent"
          />
        ))}
        {restLength > 0 && (
          <FiltersActionsTooltip
            groupLabel={groupLabel}
            items={group.items.map((item) =>
              renderChipLabel
                ? renderChipLabel(group, item)
                : item.label.toString(),
            )}
          >
            <span className={cls.chipsGroupCount}>+{restLength}</span>
          </FiltersActionsTooltip>
        )}
      </StyledChipGroup>
    );
  }

  return (
    <Chip
      className={cls.chip}
      title="Удалить фильтр"
      view="default"
      text={
        renderChipLabel
          ? renderChipLabel(null, itemOrGroup)
          : itemOrGroup.label.toString()
      }
      size="xs"
      pilled
      onClick={itemOrGroup.onClick}
      style={{
        maxWidth: 150,
        ...overflowDotsStyle,
        ...(chipStyle && chipStyle(itemOrGroup, undefined)),
      }}
      appearance="transparent"
    />
  );
};
