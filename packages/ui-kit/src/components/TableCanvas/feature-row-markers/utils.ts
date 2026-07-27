import type { ObjectForExtending } from '../types';
import type { AllRowsMapEntry } from './types';

export const getDefaultMarker = <RowType extends ObjectForExtending>(
  lvl: number,
  rowInd: number,
  entry: AllRowsMapEntry<RowType> | undefined,
  startIndex: number
): string | number => {
  if (lvl > 0) return '';
  if (!entry) return rowInd + startIndex;
  return (entry.rootIndex ?? 0) + startIndex;
};

export const buildSiblingPath = <RowType extends ObjectForExtending>(
  entry: AllRowsMapEntry<RowType>,
  map: Map<string | number, AllRowsMapEntry<RowType>>
): number[] => {
  const parent = entry.parentKey != null ? map.get(entry.parentKey) : undefined;
  const prefix = parent ? buildSiblingPath(parent, map) : [];
  return [...prefix, entry.siblingIndex];
};
