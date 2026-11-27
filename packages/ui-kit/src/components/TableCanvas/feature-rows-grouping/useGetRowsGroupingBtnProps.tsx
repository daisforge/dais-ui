import { Checkbox } from '@ui-kit/components/Checkbox';
import { DropdownProps } from '@ui-kit/components/Dropdown';
import { IconClose, IconCubeOutline } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { AnimatedCounter } from '../components/AnimatedCounter';
import type { SIZE } from '../styles';
import {
  getTableDropdownConfig,
  TABLE_SETTINGS_LIST_MAX_HEIGHT,
} from '../styles/dropdown-sizes';
import { ColumnConfig, ObjectForExtending, TableConfig } from '../types';
import { DOM_METADATA_ACTIONS } from '../types/dom-metadata-actions';
import { ControlBlockButtonProps } from '../widgets/control-block/control-block-button.types';
import { getDropdownIconSize } from '../widgets/control-block/use-buttons-to-dropdown';
import {
  ITEM_ID_GROUPED_ROWS,
  NAME_TRIGGER_DROPDOWN_GROUPED_ROWS,
} from './constants';
import { GroupingApply } from './GroupingApply';

const resetOptionStyle = () => ({
  '& .reset-groups-btn > div > div': {
    justifyContent: 'center',
    '& > div': {
      maxWidth: 'fit-content',
      '& *': {
        fontWeight: 600,
      },
    },
  },
});
const CheckBoxI = ({
  checked,
  size,
}: {
  checked: boolean;
  size: 's' | 'm';
}) => (
  <Checkbox
    size={size}
    style={{ pointerEvents: 'none' }}
    checked={checked}
    onChange={() => {}}
  />
);
const BadgeI = ({ text }: { text: string | number }) => (
  <AnimatedCounter
    key={`${text}`}
    view="accent"
    size="xs"
    count={Number(text)}
  />
);

const Counter = styled.span({
  color: textSecondary,
  marginLeft: '0.25rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const useGetRowsGroupingBtnProps = <
  FilterStateType extends ObjectForExtending,
  RowType extends ObjectForExtending,
  RowIdType extends string | number,
  SummaryRowType,
>({
  rowSize,
  isActivatedRowsGrouping,
  columnConfig,
  groupedCols,
  setGroupedCols,
  tableConfig,
}: {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  rowSize: SIZE;
  isActivatedRowsGrouping: boolean;
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  groupedCols: string[] | undefined;
  setGroupedCols: React.Dispatch<React.SetStateAction<string[]>> | undefined;
}) => {
  const {
    applyMode,
    getGroupedCount: getGroupedCountExternal,
    onItemSelect: onItemSelectExternal,
    defaultCustomItems: defaultCustomItemsExternal,
  } = tableConfig?.rowsGrouping?.groupButton ?? {};
  const rowsGroupingDomMetadata = tableConfig?.rowsGrouping?.domMetadata;
  const [draft, setDraft] = useState<string[]>();
  const discard = useCallback(() => setDraft(undefined), []);
  return useMemo(() => {
    if (!isActivatedRowsGrouping || !groupedCols) {
      return { rowsGroupingButtonProps: {} };
    }
    const confirm = applyMode === 'confirm';
    const selection = confirm ? draft ?? groupedCols : groupedCols;
    const changeSelection = confirm
      ? (update: React.SetStateAction<string[]>) =>
          setDraft((prev) =>
            typeof update === 'function' ? update(prev ?? groupedCols) : update,
          )
      : setGroupedCols;
    const { checkboxSize, iconSize } = getTableDropdownConfig(rowSize);
    const columns = {
      visible: [] as string[],
      hidden: [] as string[],
    };
    const dropdownOptions: DropdownProps['items'] = columnConfig
      .filter((col) => {
        const enabled = col.rowsGrouping
          ? col.rowsGrouping.groupByColumn ?? true // @default true -   при наличии пропса col.rowsGrouping
          : false;

        columns[enabled ? 'visible' : 'hidden'].push(col.key);

        return enabled;
      })
      .map((col) => {
        const indexInGrouped = selection.findIndex((k) => k === col.key) ?? -1;
        const checked = indexInGrouped > -1;

        const label = col.rowsGrouping?.columnGroupLabel ?? col.key;
        return {
          value: col.key,
          label,
          contentLeft: <CheckBoxI checked={checked} size={checkboxSize} />,

          ...(checked && {
            contentRight: <BadgeI text={indexInGrouped + 1} />,
          }),
        };
      });

    const customOptions = (defaultCustomItemsExternal ?? []).map((i) => {
      columns.visible.push(i.value.toString());

      const indexInGrouped = selection.findIndex((k) => k === i.value) ?? -1;
      const checked = indexInGrouped > -1;
      return {
        contentLeft: <CheckBoxI checked={checked} size={checkboxSize} />,
        ...(checked && {
          contentRight: <BadgeI text={indexInGrouped + 1} />,
        }),
        ...i,
      };
    });

    dropdownOptions.push(...customOptions);

    // 'reset' - обязательно в самом конце списка
    dropdownOptions.push({
      label: 'Сбросить все',
      value: 'reset',
      className: 'reset-groups-btn',
      contentLeft: <IconClose color="inherit" size={iconSize} />,
    });

    const groupedCount = getGroupedCountExternal
      ? getGroupedCountExternal({
          currCount: groupedCols.length,
          groupedCols,
          columns,
        })
      : groupedCols.length;

    const rowsGroupingButtonProps: ControlBlockButtonProps = {
      text: 'Группировать',
      'aria-label': 'Группировать',
      contentLeft: <IconCubeOutline color="inherit" />,
      // В overflow дропдауне иконку берём на ступень меньше на маленьком
      // rowSize (как остальные пункты дропдауна)
      dropdownIconRender: (ctx) => (
        <IconCubeOutline
          color="inherit"
          size={getDropdownIconSize(ctx.rowSize)}
        />
      ),
      view: 'secondary',
      contentRight: groupedCount > 0 && (
        <Counter>{groupedCount.toString()}</Counter>
      ),
      // Справа счётчик, а не шеврон — не зеркалить его при открытии дропдауна
      disableContentRightFlip: true,
      dropdown: {
        onItemSelect(item) {
          if (changeSelection) {
            if (onItemSelectExternal) {
              onItemSelectExternal({
                item,
                setGroupedCols: changeSelection,
                columns,
              });
              rowsGroupingDomMetadata?.onClick?.(undefined, {
                action: DOM_METADATA_ACTIONS.CUSTOM_ITEM_SELECT,
                columnKey: item.value,
              });
              return;
            }
            if (item.value === 'reset') {
              changeSelection([]);
              rowsGroupingDomMetadata?.onClick?.(undefined, {
                action: DOM_METADATA_ACTIONS.RESET_GROUPS,
              });
              return;
            }
            // Не обрабатываем если клик был по тригеру дропдауна, в котором уже есть items группировки
            if (item.value === NAME_TRIGGER_DROPDOWN_GROUPED_ROWS) {
              return;
            }

            changeSelection((prev) => {
              const copy = [...prev];
              const index = copy.findIndex((k) => k === item.value);
              const willBeEnabled = index === -1;
              if (index > -1) {
                copy.splice(index, 1);
              } else {
                copy.push(`${item.value}`);
              }
              rowsGroupingDomMetadata?.onClick?.(undefined, {
                action: DOM_METADATA_ACTIONS.TOGGLE_GROUP,
                columnKey: item.value,
                enabled: willBeEnabled,
              });
              return copy;
            });
          }
        },
        afterList: confirm && (
          <GroupingApply
            onApply={() => setGroupedCols?.(selection)}
            onDiscard={discard}
          />
        ),
        items: dropdownOptions,
        listMaxHeight: TABLE_SETTINGS_LIST_MAX_HEIGHT,
        closeOnSelect: false,
        $css: resetOptionStyle(),
      },
      itemID: ITEM_ID_GROUPED_ROWS, // Необходимо для идентификации фичи в useButtonsToDropdown. Для идентификации селекта кнопки Группировать
      className: rowsGroupingDomMetadata?.className,
      ...rowsGroupingDomMetadata?.dataAttributes,
    };
    return { rowsGroupingButtonProps };
  }, [
    applyMode,
    defaultCustomItemsExternal,
    discard,
    draft,
    getGroupedCountExternal,
    onItemSelectExternal,
    rowsGroupingDomMetadata,
    columnConfig,
    groupedCols,
    isActivatedRowsGrouping,
    setGroupedCols,
    rowSize,
  ]);
};
