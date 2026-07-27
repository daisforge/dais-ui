import type { DataAttributes } from '../types/utils.type';
import type { FeatureItem } from '../widgets/control-block/types';

export const getDataAttributes = (
  obj: FeatureItem['details'] | FeatureItem
): DataAttributes => {
  const result: DataAttributes = {};

  if (!obj) return result;

  Object.entries(obj).forEach(([key, value]) => {
    if (key.startsWith('data-') && typeof value === 'string') {
      result[key as `data-${string}`] = value;
    }
  });
  return result;
};
