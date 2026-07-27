/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-plusplus */

import { getValue } from '@ui-kit/utils';

const isKey = (value: string) => /^\w*$/.test(value);
const isDateObject = (value: unknown): value is Date => value instanceof Date;
const isObjectType = (value: unknown): value is object =>
  typeof value === 'object';
const isNullOrUndefined = (value: unknown): value is null | undefined =>
  value == null;

const isObject = <T extends object>(value: unknown): value is T =>
  !isNullOrUndefined(value) &&
  !Array.isArray(value) &&
  isObjectType(value) &&
  !isDateObject(value);
const compact = <TValue>(value: TValue[]) =>
  Array.isArray(value) ? value.filter(Boolean) : [];

const stringToPath = (input: string): string[] =>
  compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldValues = Record<string, any>;

export const setValueInObj = (
  object: FieldValues,
  path: string,
  value?: unknown
) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const { length } = tempPath;
  const lastIndex = length - 1;

  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;

    if (index !== lastIndex) {
      const objValue = object[key!];
      newValue =
        // eslint-disable-next-line no-nested-ternary
        isObject(objValue) || Array.isArray(objValue)
          ? objValue
          : !Number.isNaN?.(+tempPath[index + 1]!)
          ? []
          : {};
    }

    if (key === '__proto__') {
      return;
    }

    object[key!] = newValue;
    // eslint-disable-next-line no-param-reassign
    object = object[key!];
  }
  // eslint-disable-next-line consistent-return
  return object;
};

export const getValueInObj = getValue;
