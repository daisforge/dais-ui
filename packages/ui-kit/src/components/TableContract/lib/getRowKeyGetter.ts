import { ObjectAny } from '../types.contractResponse';
import { recursGetV } from './recursiveGetV';

export const getRowKeyGetter = (rowUniqIdKey: string) => (row: ObjectAny) => {
  const keys = rowUniqIdKey.split(',');
  const uniqId = keys.reduce((acc, currKeys) => {
    const currV = recursGetV(row, currKeys.split('.')) ?? '';
    return acc + currV;
  }, '');

  return uniqId;
};
