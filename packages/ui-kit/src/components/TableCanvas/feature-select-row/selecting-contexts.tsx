import React, { createContext, PropsWithChildren, useContext } from 'react';

import { hideRowServiceKeysHandler } from '../data/hideServiceKeysHanlder';
import { isDetailPanelRow } from '../feature-row-detail/handlers';
import { isGroupRow } from '../feature-rows-grouping/typeGuards';
import { SUBROWS_KEY } from '../feature-tree/constants';
import type { CellInfoGlideInstance } from '../TableGlideInstance/type';
import { DomMetadata } from '../types/additional.type';
import { ObjectForExtending } from '../types/utils.type';
import { SELECTING_KEYS } from './constants';
import {
  flatten,
  getAllParents,
  getCustomOrDefaultSelectingRules,
  ObjectWithParentAndId
} from './handlers';
import {
  ChildrenInfo,
  FlattenedRowsArrAndMap,
  SelectingRowConfig
} from './types';

export interface RowSelectionContextValue {
  readonly isRowSelected: boolean;
  readonly isRowSelectionDisabled: boolean;
}
type RowIdTypeInstance = string | number;
export type SelectingContextType<
  RowType extends ObjectForExtending = ObjectForExtending,
  RowIdType extends RowIdTypeInstance = RowIdTypeInstance
> = {
  rows: RowType[];
  selectingRowConfig: SelectingRowConfig<RowType, RowIdType> & {
    selectingRowsIsActive: boolean;
  };
  flattenedRowsArrAndMap: FlattenedRowsArrAndMap<RowType, RowIdType> | null;
  selectedRows: ReadonlySet<string | number> | undefined;
  setSelectedRows:
    | React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>
    | undefined;
  rowKeyGetter: undefined | ((row: RowType) => RowIdType);
  rowsGroupingIsActive: boolean;
  isRowsGroupingLabelVisible: boolean;
  setIsRowsGroupingLabelVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isRowsGroupingCounterVisible: boolean;
  setIsRowsGroupingCounterVisible: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  isSelectingRowLabelVisible: boolean;
  setIsSelectingRowLabelVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectingRowCounterVisible: boolean;
  setIsSelectingRowCounterVisible: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  controlBlock?: {
    domMetadata?: DomMetadata;
  };
  sidebar?: {
    domMetadata?: DomMetadata;
  };
};
const SelectingContext = createContext<SelectingContextType | undefined>(
  undefined
);

export const SelectingContextProvider = <
  RowIdType extends string | number,
  RowType extends ObjectForExtending
>({
  children,
  ...rest
}: PropsWithChildren & {
  rows: RowType[];
  selectingRowConfig: SelectingRowConfig<RowType, RowIdType> & {
    selectingRowsIsActive: boolean;
  };
  flattenedRowsArrAndMap: FlattenedRowsArrAndMap<RowType, RowIdType> | null;
  selectedRows: ReadonlySet<string | number> | undefined;
  setSelectedRows:
    | React.Dispatch<React.SetStateAction<ReadonlySet<RowIdType>>>
    | undefined;
  rowKeyGetter: undefined | ((row: RowType) => RowIdType);
  rowsGroupingIsActive: boolean;
  isRowsGroupingLabelVisible: boolean;
  setIsRowsGroupingLabelVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isRowsGroupingCounterVisible: boolean;
  setIsRowsGroupingCounterVisible: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  isSelectingRowLabelVisible: boolean;
  setIsSelectingRowLabelVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectingRowCounterVisible: boolean;
  setIsSelectingRowCounterVisible: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  controlBlock?: {
    domMetadata?: DomMetadata;
  };
  sidebar?: {
    domMetadata?: DomMetadata;
  };
}) => (
  <SelectingContext.Provider
    value={
      rest as React.ComponentProps<typeof SelectingContext.Provider>['value']
    }
  >
    {children}
  </SelectingContext.Provider>
);
export function useSelectingRowContext<
  R extends ObjectForExtending = ObjectForExtending
>() {
  const selectingContext = useContext(SelectingContext);

  if (selectingContext === undefined) {
    throw new Error(
      'useSelectingRowContext must be used within DataGrid cells'
    );
  }

  return selectingContext as SelectingContextType<R>;
}

const isLevelInLevels = (
  level: number,
  levelsX: NonNullable<
    NonNullable<
      SelectingRowConfig<
        ObjectForExtending,
        RowIdTypeInstance
      >['selectingRules']
    >['levels']
  >
) => {
  if (typeof levelsX === 'number') {
    return level === levelsX;
  }
  if (levelsX === 'all') {
    return true;
  }
  if (typeof levelsX === 'function') {
    return levelsX(level);
  }
  return levelsX.some((l) => l === level);
};

export const getRowSelectingInfo = <RowType extends ObjectForExtending>(
  renderCellProps: CellInfoGlideInstance<RowType>
) => {
  const {
    flattenedRowsArrAndMap,
    selectingRowConfig,
    selectedRows,
    setSelectedRows,
    rowKeyGetter,
    rowsGroupingIsActive
  } = renderCellProps.ctxs.selectingRowCtx;

  const { flattenedRows, flattenedRowsMap } = flattenedRowsArrAndMap ?? {};

  const flattenedRowsAreReady = !!flattenedRows && !!flattenedRowsMap;

  const { row } = renderCellProps;
  const {
    selectingRowsIsActive,
    selectingRules,
    rowCheckboxDisabled,
    rowShowCheckbox
  } = selectingRowConfig;

  const selectingRulesAfterCheck =
    getCustomOrDefaultSelectingRules(selectingRules);

  const { levels } = selectingRulesAfterCheck;

  const {
    isRowSelected,
    isIndeterminate,
    isRowSelectionDisabled,
    isHaveCheckbox,
    onChange: onChangeExternal
  } = (() => {
    if (
      !selectingRowsIsActive ||
      !rowKeyGetter ||
      !flattenedRowsAreReady ||
      // исключаем detailPanelRows, поскольку они  не являются полноценными строками, а всего лишь доп инфой для какой-то строки
      isDetailPanelRow(row) ||
      !selectedRows ||
      !setSelectedRows
    ) {
      return {
        isRowSelected: false,
        isIndeterminate: false,
        isRowSelectionDisabled: false,
        isHaveCheckbox: false,
        onChange: null
      };
    }

    if (rowsGroupingIsActive && isGroupRow(row)) {
      const selectedChildCount = row.childRows.reduce((acc, childRow) => {
        const childRowIsSelected = selectedRows?.has(
          rowKeyGetter(hideRowServiceKeysHandler(childRow))
        );

        return acc + (childRowIsSelected ? 1 : 0);
      }, 0);

      const isRowSelected =
        !!row.childRows.length && selectedChildCount === row.childRows.length;
      const isIndeterminate = !isRowSelected && selectedChildCount > 0;

      const customs = selectingRowConfig.groupedRow?.getStates?.({
        checkedCalculated: isRowSelected,
        indeterminateCalculated: isIndeterminate,
        row,
        selectedRows,
        selectedChildCount,
        childCount: row.childRows.length
      });

      return {
        isHaveCheckbox: customs?.showCheckbox ?? true,
        isRowSelected: customs?.checked ?? isRowSelected,
        isIndeterminate: customs?.indeterminate ?? isIndeterminate,
        isRowSelectionDisabled: customs?.checkboxDisabled ?? false,
        onChange: null
      };
    }

    const currentRowInFlattened = flattenedRowsMap.get(rowKeyGetter(row));
    // TODO исключить detailPanelRow rowDetailPanel
    const level = currentRowInFlattened?.[SELECTING_KEYS.level] ?? 1;
    const parent = currentRowInFlattened?.[SELECTING_KEYS.parent] ?? null;

    const isInLevels = isLevelInLevels(level, levels);

    const rowWithoutServiceKeys = hideRowServiceKeysHandler(row);

    const isRowSelected = !!selectedRows?.has(
      rowKeyGetter(rowWithoutServiceKeys)
    );
    const getRowChildrenInfo = () => {
      const info: ChildrenInfo<RowType, string | number> = {
        all: [],
        disabled: [],
        notDisabled: [],
        notDisabledAndNotHidden: [],
        notDisabledAndNotHiddenAreSelected: false,
        hidden: [],
        notHidden: [],
        selected: [],
        notSelected: [],
        someChildrenIsSelected: false
      };
      if (!isInLevels) return info;

      // находясь на каждой строке во время рекурсивной проходки проверяем и обновляем info
      const rowCb = (
        levelFromRow: number,
        row: RowType,
        parent: RowType | null
      ) => {
        if (levelFromRow === 1) return false; // не включаем саму строку

        const rowKey = rowKeyGetter(row);
        const rowInFlattened = flattenedRowsMap.get(rowKey);
        const level = rowInFlattened?.level ?? 1;

        if (!isLevelInLevels(level, levels)) return false; // не включем те строки, которые не в levels

        info.all.push(row);

        const isSelected = selectedRows.has(rowKey);
        info[selectedRows.has(rowKey) ? 'selected' : 'notSelected'].push(
          rowKey
        );

        const isShowed = rowShowCheckbox?.(row, level, parent) ?? true;
        info[isShowed ? 'notHidden' : 'hidden'].push(rowKey);

        const isDisabled = rowCheckboxDisabled?.(row, level, parent) ?? false;
        info[isDisabled ? 'disabled' : 'notDisabled'].push(rowKey);

        if (isShowed && !isDisabled) {
          info.notDisabledAndNotHidden.push(rowKey);

          if (info.notDisabledAndNotHidden.length === 1 && isSelected) {
            info.notDisabledAndNotHiddenAreSelected = true;
          }

          if (!isSelected) {
            info.notDisabledAndNotHiddenAreSelected = false;
          }
        }

        return true;
      };
      // рекурсивная провека
      flatten(
        [row],
        (r) => r?.[SUBROWS_KEY],
        (r) => r,
        undefined,
        undefined,
        (_l, r) => ({ rowKey: rowKeyGetter(r) }),
        rowCb
      );

      if (info.selected.length) {
        info.someChildrenIsSelected = true;
      }

      return info;
    };

    const getSomeChildrenIsSelected = (
      rowAllChildrenFlattenedExt?: ObjectForExtending[]
    ) => {
      const rowChildrenFlattened =
        rowAllChildrenFlattenedExt ?? getRowChildrenInfo().all;

      const someChildrenIsSelected =
        !!rowChildrenFlattened.length &&
        rowChildrenFlattened.some(
          (curChildren) => !!selectedRows?.has(rowKeyGetter(curChildren))
        );
      return someChildrenIsSelected;
    };
    const getIsIndeterminate = () =>
      isRowSelected ? false : getSomeChildrenIsSelected();

    const isRowSelectionDisabled = (() => {
      if (selectingRowConfig?.rowCheckboxDisabled) {
        return selectingRowConfig?.rowCheckboxDisabled?.(row, level, parent);
      }
      return false;
    })();

    const isHaveCheckbox = (() => {
      // кастомный выбор
      if (selectingRowConfig.rowShowCheckbox) {
        return (
          isInLevels && selectingRowConfig.rowShowCheckbox(row, level, parent)
        );
      }
      // дефолтный выбор
      return isLevelInLevels(level, levels);
    })();
    const isIndeterminate = getIsIndeterminate();
    const customs = selectingRowConfig?.rowGetStates?.({
      isHaveCheckboxCalculated: isHaveCheckbox,
      isRowSelectedCalculated: isRowSelected,
      isIndeterminateCalculated: isIndeterminate,
      isRowSelectionDisabled,
      row,
      rowKeyGetter,
      flattenedRowsMap,
      selectedRows,
      level,
      parent: parent as RowType | null,
      getRowChildrenInfo,
      rowShowCheckbox,
      rowCheckboxDisabled,
      setSelectedRows
    });
    return {
      isHaveCheckbox: customs?.showCheckbox ?? isHaveCheckbox,
      isRowSelected: customs?.checked ?? isRowSelected,
      isIndeterminate: customs?.indeterminate ?? isIndeterminate,
      isRowSelectionDisabled:
        customs?.checkboxDisabled ?? isRowSelectionDisabled,
      onChange: customs?.onChange ?? null
    };
  })();

  const onChange = () => {
    if (
      !selectingRowsIsActive ||
      !setSelectedRows ||
      !rowKeyGetter ||
      !flattenedRowsAreReady
    ) {
      return;
    }
    if (rowsGroupingIsActive && isGroupRow(row)) {
      const defaultSetter = () =>
        setSelectedRows((prev) => {
          const copy = new Set(prev);
          row.childRows.forEach((row) =>
            copy[isRowSelected ? 'delete' : 'add'](
              rowKeyGetter(hideRowServiceKeysHandler(row))
            )
          );
          return copy;
        });
      if (selectingRowConfig.groupedRow?.onChange) {
        selectingRowConfig.groupedRow.onChange({
          row,
          setSelectedRows,
          checked: isRowSelected,
          indeterminate: isIndeterminate,
          checkboxDisabled: isRowSelectionDisabled,
          showCheckbox: isHaveCheckbox,
          defaultSetter
        });
        return;
      }

      defaultSetter();
      return;
    }

    const currentRowInFlattened = flattenedRowsMap.get(rowKeyGetter(row));

    const isDefaultLevels = levels === 1;

    const { allParents } = isDefaultLevels
      ? {
          allParents: new Map<string | number, ObjectForExtending>()
        }
      : getAllParents(
          currentRowInFlattened as unknown as ObjectWithParentAndId,
          flattenedRows as unknown as ObjectWithParentAndId[],
          rowKeyGetter
        );
    const getRowParentsInfo = () => {
      const allParentsEntries = Array.from(allParents);
      const getShouldBeSelectedInfo = (actualSelecteds: typeof selectedRows) =>
        allParentsEntries.reduce<{
          shouldBeSelected: (string | number)[];
          shouldNotBeSelected: (string | number)[];
        }>(
          (acc, [keyOfParent, parent]) => {
            const keyOfRow = rowKeyGetter(parent);

            const currentRowInGlobalFlatteneds = flattenedRowsMap.get(keyOfRow);

            const currLevel = (currentRowInGlobalFlatteneds?.[
              SELECTING_KEYS.level
            ] ?? 1) as number;

            const isCurrLevelInLevels = isLevelInLevels(currLevel, levels);

            const subRows = parent?.[SUBROWS_KEY] as ObjectForExtending[];

            const parentIsShouldBeSelected = subRows.every((subRow) =>
              actualSelecteds?.has(rowKeyGetter(subRow))
            );

            if (parentIsShouldBeSelected && isCurrLevelInLevels) {
              acc.shouldBeSelected.push(keyOfParent);
              return acc;
            }

            acc.shouldNotBeSelected.push(keyOfParent);
            return acc;
          },
          { shouldBeSelected: [], shouldNotBeSelected: [] }
        );
      return {
        all: allParentsEntries.map(([_, v]) => v),
        getShouldBeSelectedInfo
      };
    };

    /**
     * rowAndAllChildrenFlattenedAndWitLevel:
     * уровни начинаются с текущего переданного row, поэтому его уровни нельзя использовать
     */
    const rowAndAllChildrenFlattened = isDefaultLevels
      ? [row]
      : flatten(
          [row],
          (r) => r?.[SUBROWS_KEY],
          (r) => r
        );
    const isRowInLevels = (row: ObjectForExtending) => {
      const keyOfRow = rowKeyGetter(row);
      const currentRowInGlobalFlatteneds = flattenedRowsMap.get(keyOfRow);

      const currLevel = (currentRowInGlobalFlatteneds?.[SELECTING_KEYS.level] ??
        1) as number;
      return isLevelInLevels(currLevel, levels);
    };
    const defaultSetter = () =>
      setSelectedRows((prev) => {
        const isRowSelected = !!prev?.has(rowKeyGetter(row));
        const copy = new Set([...prev]);

        // add or delete curr and childrens
        rowAndAllChildrenFlattened.forEach((currRow) => {
          const keyOfRow = rowKeyGetter(currRow);
          if (isRowSelected) {
            copy['delete'](keyOfRow);
            return;
          }

          const isCurrLevelInLevels = isRowInLevels(currRow);

          if (isCurrLevelInLevels) {
            copy['add'](rowKeyGetter(currRow));
          }
        });

        // add or delete parents
        const { getShouldBeSelectedInfo } = getRowParentsInfo();
        const { shouldBeSelected, shouldNotBeSelected } =
          getShouldBeSelectedInfo(copy);
        shouldBeSelected.forEach((rKey) => copy.add(rKey));
        shouldNotBeSelected.forEach((rKey) => copy.delete(rKey));

        return copy;
      });

    if (onChangeExternal) {
      onChangeExternal({
        allParentsMap: allParents,
        isRowInLevels,
        defaultSetter,
        getRowParentsInfo
      });
      return;
    }

    defaultSetter();
  };

  const value = {
    isRowSelected,
    isIndeterminate,
    isRowSelectionDisabled,
    isHaveCheckbox,
    onChange
  };

  return value;
};
