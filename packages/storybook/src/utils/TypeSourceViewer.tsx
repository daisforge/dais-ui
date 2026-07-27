import { Source, type SourceProps } from '@storybook/blocks';

import ALL_TYPES_OBJ from '../types.string.json';

/**
 * Отображает определение типа (type или interface) из исходного файла.
 * Данные берутся из types.string.json (генерируется скриптом generate-storybook-types-as-string-json).
 */
export const TypeSourceViewer = ({
  filePath,
  typeName,
  asString,
  preSource,
  postSource,
  ...rest
}: {
  /**
   * @example "./packages/ui-kit/src/components/TableContract/types.ts"
   */
  filePath: string;
  /**
   * @example "FetcherProps"
   */
  typeName: string;
  /**
   * Return value as string
   */
  asString?: boolean;
  preSource?: string;
  postSource?: string;
} & Omit<SourceProps, 'code'>) => {
  if (!filePath || !typeName) {
    return '';
  }
  const key = `${filePath}$$$${typeName}`;
  const type = (ALL_TYPES_OBJ as Record<string, string>)?.[key] ?? '';
  const finalTypeSource = `${preSource ?? ''}${type}${postSource ?? ''}`;

  if (asString) {
    return finalTypeSource;
  }

  return <Source language="tsx" code={finalTypeSource} {...rest} />;
};
