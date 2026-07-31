import { useFormContext } from 'react-hook-form';

import type { TUseChangedFormContext } from './types';

export const useChangedFormContext: TUseChangedFormContext = (options) => {
  const form = useFormContext();
  const {
    required,
    minLength,
    maxLength,
    validate,
    min,
    max,
    pattern,
    ...remOptions
  } = options || {};

  return {
    ...form,
    rules: {
      required,
      minLength,
      maxLength,
      validate,
      min,
      max,
      pattern,
    },
    remOptions,
  };
};
