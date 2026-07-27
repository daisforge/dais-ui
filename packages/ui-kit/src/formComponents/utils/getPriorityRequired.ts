import { FieldValues } from 'react-hook-form';

import { THasValidationRuleProps } from './types';

/**
 * Проверяет, есть ли значение для указанного правила валидации.
 * @param options - Правила валидации поля.
 * @param ruleName - Название правила (например, 'required', 'min', 'max', 'pattern' и т.д.).
 * @returns Возвращает `true`, если правило существует и имеет значение, иначе `false`.
 */
export const getPriorityRequired = <TFieldValues extends FieldValues>({
  options,
  ruleName
}: THasValidationRuleProps<TFieldValues>): boolean => {
  if (!options || options[ruleName] === undefined) {
    return false;
  }

  const ruleValue = options[ruleName];

  switch (typeof ruleValue) {
    case 'string':
      return ruleValue !== '';
    case 'boolean':
      return true;
    case 'number':
      return true; // Числовые правила (например, min, max) всегда имеют значение
    case 'object':
      // Проверяем, является ли объект ValidationValueMessage (имеет свойство value)
      if (ruleValue && 'value' in ruleValue) {
        return !!ruleValue.value;
      }
      // Если это RegExp или другой объект, считаем, что правило существует
      return true;
    default:
      return false;
  }
};
