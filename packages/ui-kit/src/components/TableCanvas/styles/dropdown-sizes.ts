import type { SIZE } from './styles.constants';

// Минимум автоматической ширины включает отступы списка.
const dropdownSizes = {
  small: {
    size: 'xs',
    variant: 'tight',
    iconSize: 'xs',
    iconWidth: 16,
    searchSize: 'xs',
    checkboxSize: 's',
    minWidth: 120,
  },
  medium: {
    size: 's',
    variant: 'normal',
    iconSize: 'xs',
    iconWidth: 16,
    searchSize: 'xs',
    checkboxSize: 's',
    minWidth: 120,
  },
  big: {
    size: 'm',
    variant: 'normal',
    iconSize: 's',
    iconWidth: 24,
    searchSize: 's',
    checkboxSize: 'm',
    minWidth: 140,
  },
} as const;

export const getTableDropdownConfig = (rowSize: SIZE, size?: string) => {
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
