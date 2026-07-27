import { Button } from '@ui-kit/components/Button';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { ComponentProps } from 'react';

import { TableDropdownProps } from '../../components/TableDropdown/types';
import { DataAttributes } from '../../types/utils.type';

export const controlButtonDefaultProps = {
  size: 's',
  view: 'linkDefault'
} as const;
type DefPropsKeys = keyof typeof controlButtonDefaultProps;

export type ButtonProps = ComponentProps<typeof Button>;
export type LinkButtonProps = ComponentProps<typeof LinkButton>;
export type LinkButtonView = LinkButtonProps['view'];
export type EmbedIconButtonProps = ComponentProps<typeof EmbedIconButton>;

type LinkView<V extends string | undefined> = V extends string
  ? `link${Capitalize<V>}`
  : undefined;

export type ControlBlockButtonProps = DataAttributes &
  Omit<Partial<ButtonProps>, DefPropsKeys> & {
    view?: LinkView<LinkButtonView> | ButtonProps['view'];
    dropdown?: TableDropdownProps;
    isTargetAction?: boolean;
  };
