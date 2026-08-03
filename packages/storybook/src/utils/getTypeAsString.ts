import ALL_TYPES_OBJ from '../types.string.json';

// TODO Работает только с типами, которые являются объектами.
/**
 * Работает только с типами, которые являются объектами.
 */
export const getTypeAsString = (
  filePath: string,
  typeName: string,
  spaces?: boolean,
) => {
  if (!filePath || !typeName) {
    return '';
  }
  const key = `${filePath}$$$${typeName}`;
  const type = (ALL_TYPES_OBJ as Record<string, string>)?.[key] ?? '';
  if (spaces) {
    return `\n${type}\n`;
  }
  return type;
};
