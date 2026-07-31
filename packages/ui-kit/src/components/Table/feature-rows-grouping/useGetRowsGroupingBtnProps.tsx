import { Checkbox } from '@ui-kit/components/Checkbox';
import { DropdownProps } from '@ui-kit/components/Dropdown';
import { IconClose, IconCubeOutline } from '@ui-kit/icons';
import { textSecondary } from '@ui-kit/tokens';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { AnimatedCounter } from '../components/AnimatedCounter';
import { ColumnConfig, ObjectForExtending, TableConfig } from '../types';
import { DOM_METADATA_ACTIONS } from '../types/dom-metadata-actions';
import { ControlBlockButtonProps } from '../widgets/control-block/control-block-button.types';
import {
  ITEM_ID_GROUPED_ROWS,
  NAME_TRIGGER_DROPDOWN_GROUPED_ROWS,
} from './constants';

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
const CheckBoxI = ({ checked }: { checked: boolean }) => (
  <Checkbox
    size="m"
    style={{ pointerEvents: 'none' }}
    checked={checked}
    onChange={() => {}}
  />
);

const BadgeI = ({ text }: { text: string | number }) => (
  <AnimatedCounter
    className="counter"
    key={text}
    count={Number(text)}
    size="xs"
    view="accent"
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
  isActivatedRowsGrouping,
  columnConfig,
  groupedCols,
  setGroupedCols,
  tableConfig,
}: {
  tableConfig: TableConfig<RowType, SummaryRowType, RowIdType, FilterStateType>;
  isActivatedRowsGrouping: boolean;
  columnConfig: readonly ColumnConfig<RowType, SummaryRowType>[];
  groupedCols: string[] | undefined;
  setGroupedCols: React.Dispatch<React.SetStateAction<string[]>> | undefined;
}) => {
  const {
    getGroupedCount: getGroupedCountExternal,
    onItemSelect: onItemSelectExternal,
    defaultCustomItems: defaultCustomItemsExternal,
  } = tableConfig?.rowsGrouping?.groupButton ?? {};
  const rowsGroupingDomMetadata = tableConfig?.rowsGrouping?.domMetadata;
  return useMemo(() => {
    if (!isActivatedRowsGrouping || !groupedCols) {
      return { rowsGroupingButtonProps: {} };
    }
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
        const indexInGrouped =
          groupedCols?.findIndex((k) => k === col.key) ?? -1;
        const checked = indexInGrouped > -1;

        const label = col.rowsGrouping?.columnGroupLabel ?? col.key;
        return {
          value: col.key,
          label,
          contentLeft: <CheckBoxI checked={checked} />,

          ...(checked && {
            contentRight: <BadgeI text={indexInGrouped + 1} />,
          }),
        };
      });

    const customOptions = (defaultCustomItemsExternal ?? []).map((i) => {
      columns.visible.push(i.value.toString());

      const indexInGrouped = groupedCols?.findIndex((k) => k === i.value) ?? -1;
      const checked = indexInGrouped > -1;
      return {
        contentLeft: <CheckBoxI checked={checked} />,
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
      contentLeft: <IconClose color="inherit" />,
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
      contentLeft: <IconCubeOutline color="inherit" />,
      view: 'default',
      contentRight: groupedCount > 0 && (
        <Counter>{groupedCount.toString()}</Counter>
      ),
      dropdown: {
        onItemSelect(item) {
          if (setGroupedCols) {
            if (onItemSelectExternal) {
              onItemSelectExternal({ item, setGroupedCols, columns });
              rowsGroupingDomMetadata?.onClick?.(undefined, {
                action: DOM_METADATA_ACTIONS.CUSTOM_ITEM_SELECT,
                columnKey: item.value,
              });
              return;
            }
            if (item.value === 'reset') {
              setGroupedCols([]);
              rowsGroupingDomMetadata?.onClick?.(undefined, {
                action: DOM_METADATA_ACTIONS.RESET_GROUPS,
              });
              return;
            }
            // Не обрабатываем если клик был по тригеру дропдауна, в котором уже есть items группировки
            if (item.value === NAME_TRIGGER_DROPDOWN_GROUPED_ROWS) {
              return;
            }

            setGroupedCols((prev) => {
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
        items: dropdownOptions,
        closeOnSelect: false,
        $css: resetOptionStyle(),
      },
      itemID: ITEM_ID_GROUPED_ROWS, // Необходимо для идентификации фичи в useButtonsToDropdown. Для идентификации селекта кнопки Группировать
      className: rowsGroupingDomMetadata?.className,
      ...rowsGroupingDomMetadata?.dataAttributes,
    };
    return { rowsGroupingButtonProps };
    // не включены getGroupedCountExternal, onItemSelectExternal, defaultCustomItemsExternal - достаточно проверить isActivatedRowsGrouping
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnConfig, groupedCols, isActivatedRowsGrouping, setGroupedCols]);
};
