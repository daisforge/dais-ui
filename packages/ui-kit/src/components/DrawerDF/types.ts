import type { BadgeCompProps } from '@ui-kit/components/Badge';
import type { BoxProps } from '@ui-kit/components/Box';
import type { Drawer } from '@ui-kit/components/Drawer';
import type { Dropdown } from '@ui-kit/components/Dropdown';
import type { IconButton } from '@ui-kit/components/IconButton';
import type { IconChevronLeft, IconDotsHorizontalOutline } from '@ui-kit/icons';
import type { ComponentProps, LegacyRef, ReactNode, Ref } from 'react';

export type DrawerProps = ComponentProps<typeof Drawer>;

export type DrawerDFPropsForStyles = {
  $multipleContents: boolean;
  $header: boolean;
  $footer: boolean;
};

export type DrawerDFHeaderProps = BoxProps & {
  refEl?: LegacyRef<HTMLDivElement>;
  title?: ReactNode;
  subTitle?: ReactNode;
  badge?: (BadgeCompProps & { text: string }) | undefined;
  rightBlock?: ReactNode;
  footerBlock?: ReactNode;
};

export type DrawerDFContentProps = BoxProps & {
  fixedWidth?: string;
  refEl?: Ref<HTMLDivElement>;
  $isFirstSingleContent?: boolean;
  $isLastSingleContent?: boolean;
};

export type DrawerDFFooterProps = BoxProps & {
  refEl?: LegacyRef<HTMLDivElement>;
};

export type DrawerDFDotsIconButtonProps = ComponentProps<typeof IconButton> & {
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof IconDotsHorizontalOutline>['size'];
};

export type DrawerDFBackIconButtonProps = ComponentProps<typeof IconButton> & {
  iconSize?: ComponentProps<typeof IconChevronLeft>['size'];
};
