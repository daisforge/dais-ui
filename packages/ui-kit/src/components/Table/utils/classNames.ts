import { Maybe, ObjectForExtending } from '../types';

export const getCls = <R extends ObjectForExtending>(
  className: Maybe<string | ((row: R) => Maybe<string>)>,
  row: R,
) => {
  if (typeof className === 'function') {
    return className(row);
  }
  return className;
};
