import { s } from '@ui-kit/constants';
import { ReactElement } from 'react';

import { getClearIcon } from './getClearIcon';
import { getLockIcon } from './getLockIcon';

type GetContentRightOptions = {
  disabled?: boolean;
  readOnly?: boolean;
  value?: unknown;
  onClear?: () => void;
  size?: 'm' | 's' | 'xs' | 'l' | 'xl';
  contentRight?: ReactElement;
};

/**
 * Общая логика определения contentRight для input-компонентов.
 *
 * Приоритет:
 * 1. disabled/readOnly → замок (заменяет всё)
 * 2. onClear + value + contentRight → [крестик | contentRight] рядом
 * 3. onClear + value → только крестик
 * 4. иначе → contentRight как есть
 */
export const getContentRight = ({
  disabled,
  readOnly,
  value,
  onClear,
  size,
  contentRight,
}: GetContentRightOptions): ReactElement | undefined => {
  if (disabled) {
    return getLockIcon(size);
  }

  if (readOnly) {
    return contentRight;
  }

  const clearIcon = getClearIcon({
    value,
    onClear,
    size,
  });

  if (clearIcon && contentRight) {
    return (
      <div style={{ display: 'flex', gap: s.x4, alignItems: 'center' }}>
        {clearIcon}
        {contentRight}
      </div>
    );
  }

  if (clearIcon) {
    return clearIcon;
  }

  return contentRight;
};
