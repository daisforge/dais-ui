import type { DropdownProps } from '@ui-kit/components/Dropdown';

import type { SIZE } from './styles.constants';

// Диапазоны автоматической ширины включают отступы списка.
const dropdownSizes = {
  small: {
    size: 'xs',
    variant: 'tight',
    iconSize: 'xs',
    iconWidth: 16,
    searchSize: 'xs',
    checkboxSize: 's',
    minWidth: 120,
    maxWidth: 300,
    textFilterPopoverWidth: 200,
  },
  medium: {
    size: 's',
    variant: 'normal',
    iconSize: 'xs',
    iconWidth: 16,
    searchSize: 'xs',
    checkboxSize: 's',
    minWidth: 120,
    maxWidth: 380,
    textFilterPopoverWidth: 240,
  },
  big: {
    size: 'm',
    variant: 'normal',
    iconSize: 's',
    iconWidth: 24,
    searchSize: 's',
    checkboxSize: 'm',
    minWidth: 140,
    maxWidth: 440,
    textFilterPopoverWidth: 240,
  },
} as const;

export const getTableDropdownConfig = (
  rowSize: SIZE,
  size?: DropdownProps['size'],
) => {
  switch (size) {
    case 'xs':
      return dropdownSizes.small;
    case 's':
      return dropdownSizes.medium;
    case 'm':
      return dropdownSizes.big;
    default:
      return dropdownSizes[rowSize];
  }
};
