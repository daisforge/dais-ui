import { TPropertyItem } from './types';

export const createClickStreamEventValue = (
  values: string[],
  userAction?: string
): string => values.join('/').concat(userAction ? `_${userAction}` : '');

export const transformClickStreamProperties = (
  props: Record<string, string>
): Array<TPropertyItem> =>
  Object.entries(props).reduce((acc, curr) => {
    if (!!curr[0] && !!curr[1]) {
      const item: TPropertyItem = { key: curr[0], value: curr[1] };
      acc.push(item);
    }
    return acc;
  }, [] as TPropertyItem[]);

export const transformClickStreamPropertyValuesToString = (
  values: string | string[] | boolean
): string => {
  if (Array.isArray(values)) {
    return values.join(';');
  }

  if (typeof values === 'boolean') {
    return `${values}`;
  }

  return values ?? 'null';
};
