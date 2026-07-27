import { ObjectAny } from '../types.contractResponse';

export const recursGetV = (r: ObjectAny, keysR: string[]): unknown => {
  const v = r?.[keysR.shift() as keyof typeof r];
  if (!v) {
    return v;
  }
  if (!keysR.length) {
    return v;
  }
  return recursGetV(v, keysR);
};
