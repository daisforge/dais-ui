import { ObjectForExtending } from '../types';
import { GroupRow } from './types';

export function objectGroupBy<T extends ObjectForExtending>(
  items: T[],
  keyGetter: (item: T) => string
) {
  const groups = items.reduce((acc, curr) => {
    const key = keyGetter(curr);
    const keyIsNotFound = typeof acc[key] === 'undefined';
    if (keyIsNotFound) {
      acc[key] = [curr];
    } else {
      (acc[key] as T[]).push(curr);
    }
    return acc;
  }, {} as Record<string, T[]>);

  return groups;
}

export function groupsToArr<T, V extends ObjectForExtending, X>(
  groups: Record<string, readonly T[]>,
  groupRowReplaceTo: ((groupRow: GroupRow<X>) => X | GroupRow<X>) | undefined,
  options?: {
    labelKey?: string;
    itemsKey?: string;
    additionalPropertiesForGroup?: (
      groupLabel: string,
      items: readonly T[]
    ) => V;
  }
) {
  return Object.entries(groups).map(([groupLabel, items]) => {
    const groupRowObj = {
      ...{ [options?.labelKey ?? 'groupLabel']: groupLabel },
      ...{ [options?.itemsKey ?? 'childGroups']: items },
      ...options?.additionalPropertiesForGroup?.(groupLabel, items)
    };
    if (groupRowReplaceTo) {
      return groupRowReplaceTo(groupRowObj as GroupRow<X>);
    }

    return groupRowObj;
  });
}

export function rowGrouper<Row extends ObjectForExtending>(
  rows: readonly Row[],
  columnKey: string
) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return objectGroupBy(rows, (r) => r[columnKey]) as Record<
    string,
    readonly Row[]
  >;
}
