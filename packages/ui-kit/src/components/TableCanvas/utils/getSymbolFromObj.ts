import { ObjectForExtending } from '../types/utils.type';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const getSymbolFromObj = <T extends unknown>(
  obj: { [key: symbol]: string } & ObjectForExtending,
  symbol: symbol
): T | undefined => obj[symbol] as T | undefined;
