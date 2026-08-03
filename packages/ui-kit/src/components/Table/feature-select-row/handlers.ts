import { ObjectForExtending, SelectingRowConfig } from '../types';
import { SELECTING_KEYS, SELECTING_RULES_DEFAULT } from './constants';

export const flatten = <RowType extends ObjectForExtending>(
  arr: RowType[],
  getChildren: (item: RowType) => RowType[] | undefined,
  getParent: (item: RowType) => RowType | null,
  level?: number,
  parent?: RowType | null,
  customProps?: (
    level: number,
    row: RowType,
    parent: RowType | null,
  ) => ObjectForExtending,
  filterCb?: (level: number, row: RowType, parent: RowType | null) => boolean,
): Array<
  RowType & {
    [SELECTING_KEYS.level]: number;
    [SELECTING_KEYS.parent]: RowType | null;
    customProps: ObjectForExtending;
  }
> =>
  Array.prototype.concat.apply(
    arr?.reduce<ReturnType<typeof flatten>>((acc, x) => {
      const l = level || 1;
      const p = parent || null;

      if (filterCb && !filterCb(l, x, p)) return acc;

      const rowObj = {
        ...x,
        [SELECTING_KEYS.level]: l,
        [SELECTING_KEYS.parent]: p,
        customProps: customProps?.(l, x, p) ?? {},
      };

      acc.push(rowObj);
      return acc;
    }, []),
    arr?.map((x) =>
      flatten(
        getChildren(x) || [],
        getChildren,
        getParent,
        (level || 1) + 1,
        getParent(x),
        customProps,
        filterCb,
      ),
    ),
  );

export interface ObjectWithParentAndId {
  id: string | number;
  parent?: {
    id: string | number;
    parent?: ObjectWithParentAndId;
  };
}
export const getAllParents = <T extends ObjectWithParentAndId>(
  item: T,
  flattenedOptions: T[],
  rowKeyGetter: (row: ObjectForExtending) => string | number,
) => {
  const allParents = new Map<string | number, ObjectForExtending>();

  if (!item) {
    return {
      allParents,
    };
  }

  const getter = (getterItem: ObjectWithParentAndId) => {
    const key = rowKeyGetter(getterItem);
    // allParents.set(key, getterItem);  // ---- если понадобится current and allParents

    const parenElement = flattenedOptions.find(
      (el) => rowKeyGetter(el) === key,
    )?.parent;

    if (!parenElement) {
      return;
    }
    const parentKey = rowKeyGetter(parenElement);
    allParents.set(parentKey, parenElement);

    getter(parenElement as ObjectWithParentAndId);
  };

  getter(item);
  return { allParents };
};

export const getCustomOrDefaultSelectingRules = <
  RowType,
  RowIdType extends string | number,
>(
  selectingRules: SelectingRowConfig<RowType, RowIdType>['selectingRules'],
) => ({
  ...selectingRules,
  levels: selectingRules?.levels ?? SELECTING_RULES_DEFAULT.levels,
});
