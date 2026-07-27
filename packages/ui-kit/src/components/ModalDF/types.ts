import type { Badge } from '@ui-kit/components/Badge';
import type { BoxProps } from '@ui-kit/components/Box';
import type { Dropdown } from '@ui-kit/components/Dropdown';
import type { IconButton } from '@ui-kit/components/IconButton';
import type { ModalCompProps } from '@ui-kit/components/Modal';
import type {
  IconArrowLeft,
  IconDotsVerticalCenteredOutline
} from '@ui-kit/icons';
import { ContainerProps } from '@ui-kit/layouts/Container';
import type { ComponentProps, ReactNode } from 'react';

export type ModalDFProps = {
  fullScreen?:
    | {
        defaultEnabled?: boolean;
        saveStateAfterClosing?: boolean;
        onFullScreen?: () => void;
        onExitFullScreen?: () => void;
      }
    | undefined
    | boolean;
  contentContainerProps?: Partial<ContainerProps>;
  zIndexOverlay?: string;
} & Omit<ModalCompProps, 'hasBody'>;

export type ModalDFHeaderProps = Omit<BoxProps, 'children'> & {
  title?: ReactNode;
  badge?: ComponentProps<typeof Badge>;
  subTitle?: ReactNode;
  rightBlock?: ReactNode;
  onBackClick?: () => void;
  showBackButton?: boolean;
};

export type ModalDFFooterProps = Omit<BoxProps, 'children'> & {
  leftBlock?: ReactNode;
  rightBlock?: ReactNode;
};

export type ModalDFDotsIconButtonProps = ComponentProps<typeof IconButton> & {
  dropdownProps?: ComponentProps<typeof Dropdown>;
  iconSize?: ComponentProps<typeof IconDotsVerticalCenteredOutline>['size'];
};

export type ModalDFBackIconButtonProps = ComponentProps<typeof IconButton> & {
  iconSize?: ComponentProps<typeof IconArrowLeft>['size'];
};
