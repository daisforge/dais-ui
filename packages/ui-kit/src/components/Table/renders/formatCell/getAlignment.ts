import { ContentFormat } from '../../types/column-config.type';

export const getAlignment = (
  format?: ContentFormat,
): 'left' | 'right' | 'center' => {
  // Если явно задано выравнивание - используем его
  if (typeof format === 'object' && format.alignContent) {
    return format.alignContent;
  }

  // Для числовых форматов - по умолчанию правое выравнивание
  if (
    format === 'number' ||
    (typeof format === 'object' && 'type' in format && format.type === 'number')
  ) {
    return 'right';
  }

  // Во всех остальных случаях - левое выравнивание
  return 'left';
};
