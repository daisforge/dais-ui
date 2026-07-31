import { ObjectForExtending } from '../types';

export const pasteOnlyKeysWithNotUndefinedValue = <
  T extends ObjectForExtending,
>(
  v: T,
) => {
  const arrV = Object.entries(v);
  const notUndandNullV = arrV.filter((x) => x[1] !== undefined);

  if (notUndandNullV.length) {
    return Object.fromEntries(notUndandNullV) as T;
  }
  return {} as T;
};
