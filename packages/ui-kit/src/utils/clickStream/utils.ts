import { IDigitalTraceContext, TPropertyItem } from './types';

export const createClickStreamEventValue = (
  values: string[],
  userAction?: string,
): string => values.join('/').concat(userAction ? `_${userAction}` : '');

export const transformClickStreamProperties = (
  props: Record<string, string>,
): Array<TPropertyItem> =>
  Object.entries(props).reduce((acc, curr) => {
    if (!!curr[0] && !!curr[1]) {
      const item: TPropertyItem = { key: curr[0], value: curr[1] };
      acc.push(item);
    }
    return acc;
  }, [] as TPropertyItem[]);

export const transformClickStreamPropertyValuesToString = (
  values: string | string[] | boolean,
): string => {
  if (Array.isArray(values)) {
    return values.join(';');
  }

  if (typeof values === 'boolean') {
    return `${values}`;
  }

  return values ?? 'null';
};

export function injectDigitalTraceContextHeader(
  headers: Headers,
  context?: IDigitalTraceContext,
): Headers {
  if (!context) {
    return headers;
  }

  const payload = JSON.stringify(context);
  const encoded = btoa(payload);
  headers.set('X-Digital-Trace-Context', encoded);

  return headers;
}
