/* eslint-disable no-param-reassign */
export function mergeClasses(...args: (string | boolean | undefined | null)[]) {
  return args.reduce((acc, curr) => {
    if (!curr || typeof curr !== 'string') {
      return acc;
    }
    acc = `${acc} ${curr}`;
    return acc;
  }, '' as string) as string;
}
/**
 * mCls - shortName of mergeClasses
 */
export const mCls = mergeClasses;
