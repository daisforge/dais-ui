import type { FieldValues, Path, RegisterOptions } from 'react-hook-form';

export const getIsRequired = <TFieldValues extends FieldValues>(
  optionsRequired: RegisterOptions<FieldValues, Path<TFieldValues>> | undefined
): boolean => {
  if (optionsRequired?.required === undefined) {
    return false;
  }
  const { required } = optionsRequired;

  switch (typeof required) {
    case 'string':
      return required !== '';
    case 'boolean':
      return required;
    case 'object':
      return !!required.value;
    default:
      return false;
  }
};
