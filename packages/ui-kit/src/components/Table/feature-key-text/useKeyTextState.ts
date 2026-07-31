import { useState } from 'react';

import type { KeyText, KeyTextConfig } from './types';

const getDefaultOption = (
  config: boolean | KeyTextConfig | undefined,
): KeyText => {
  const defaultO: KeyText = 'text';
  if (!config) return defaultO;
  if (typeof config === 'boolean') return defaultO;
  return config.defaultActiveOption ?? defaultO;
};

export const useKeyTextState = (
  keyTextTableConfig?: boolean | KeyTextConfig | undefined,
) => {
  const [keyText, setKeyText] = useState<KeyText>(() =>
    getDefaultOption(keyTextTableConfig),
  );

  return { keyText, setKeyText };
};
