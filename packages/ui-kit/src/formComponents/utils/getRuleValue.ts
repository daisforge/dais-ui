import type { ValidationValue } from 'react-hook-form';

import type { TGetRuleValueProps } from './types';

export const getRuleValue = <T extends ValidationValue>({
  rule,
  typeValue
}: TGetRuleValueProps<T>): T | undefined => {
  if (rule) {
    // eslint-disable-next-line valid-typeof
    if (typeof rule === typeValue) {
      return rule as T;
    }
    if (typeof rule === 'object' && 'value' in rule) {
      return rule.value;
    }
  }
  return undefined;
};
