import ALL_FUNCS_OBJ from '../functions.string.json';

/**
 * @example filePath="packages/ui-kit/src/components/TableContract/types.ts"
 * funcName="PopoverContent"
 */
export const getFuncAsString = (filePath: string, funcName: string) => {
  const key = `${filePath}$$$${funcName}`;
  const funcAsString = (ALL_FUNCS_OBJ as Record<string, string>)?.[key] ?? '';
  return funcAsString;
};
