/* eslint-disable @typescript-eslint/naming-convention */
import {
  IconRowHeightMaxOutline,
  IconRowHeightMinOutline,
  IconRowHeightOutline
} from '@ui-kit/icons';

import { type SIZE, SIZES } from '../styles';
import { RowSize } from '../types';

export const DEFAULT = 'big';
const All_SIZES_ARR = Object.keys(SIZES) as SIZE[];

export const isActivatedRowSize = (tableConfigRowSize: RowSize | undefined) => {
  if (!tableConfigRowSize) {
    return false;
  }
  if (!tableConfigRowSize.showInControl) {
    return false;
  }
  // show all sizes
  if (!tableConfigRowSize?.available) {
    return true;
  }
  // availables length > 1
  return tableConfigRowSize?.available?.length > 1;
};

export const getDefuaultRowSize = (tableConfigRowSize: RowSize | undefined) => {
  const def = tableConfigRowSize?.default;
  const availables = tableConfigRowSize?.available;
  const firstAvailable = availables?.[0];
  const availableIsHaveLength = !!firstAvailable;

  // default (is NOT have def and availables)
  if (!def && !availables) {
    return DEFAULT;
  }
  // is have only def
  if (def && !availables) {
    return def;
  }
  // is have only availables
  if (!def && availables) {
    if (availableIsHaveLength) {
      return availables.find((el) => el === DEFAULT) ?? firstAvailable;
    }
    return DEFAULT;
  }

  // is have def and empty availables
  if (def && availables && !availableIsHaveLength) {
    return def;
  }
  // is have def and NONempty availables
  if (def && availables && availableIsHaveLength) {
    if (availables.some((el) => el === def)) {
      return def;
    }
    return availables.find((el) => el === DEFAULT) ?? firstAvailable;
  }

  return DEFAULT;
};

export const setRowSizeCb = (
  prevCurrent: SIZE,
  tableConfigRowSize: RowSize | undefined
) => {
  const availables = tableConfigRowSize?.available ?? All_SIZES_ARR;
  const firstAvailable = availables?.[0];
  const availablesIsHaveLength = !!firstAvailable;

  if (availablesIsHaveLength) {
    const prevIndex = availables.findIndex(
      (variant) => variant === prevCurrent
    );
    const maxIndex = availables.length - 1;

    if (prevIndex === maxIndex) {
      return firstAvailable;
    }
    return availables[prevIndex + 1] ?? firstAvailable;
  }
  return prevCurrent;
};

const SIZES_OBJ = {
  small: {
    icon: IconRowHeightMinOutline,
    tooltip: 'Размер строки - минимальный'
  },
  medium: {
    icon: IconRowHeightOutline,
    tooltip: 'Размер строки - средний'
  },
  big: {
    icon: IconRowHeightMaxOutline,
    tooltip: 'Размер строки - максимальный'
  }
} as const;

export const getCurrentSizeIcon = (currentSize: SIZE) =>
  SIZES_OBJ[currentSize].icon;

export const getCurrentSizeLabel = (currentSize: SIZE) =>
  SIZES_OBJ[currentSize].tooltip;
