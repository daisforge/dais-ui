import { Button } from '@ui-kit/components/Button';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { TooltipProps } from '@ui-kit/components/Tooltip';
import { ComponentProps } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import { TableDropdownProps } from '../../components/TableDropdown/types';
import { DataAttributes } from '../../types/utils.type';

export type ButtonProps = ComponentProps<typeof Button>;
export type LinkButtonProps = ComponentProps<typeof LinkButton>;
export type LinkButtonView = LinkButtonProps['view'];

export type LinkView<V extends string | undefined> = V extends string
  ? `link${Capitalize<V>}`
  : undefined;

// Тип для обычного Button в MassActions
export type MassActionButtonPropsButton = DataAttributes &
  Partial<ButtonProps> & {
    type: 'button';
    view?: ButtonProps['view'];
    dropdown?: TableDropdownProps;
    disabledTooltipProps?: TooltipProps;
  };

// Тип для LinkButton в MassActions
export type MassActionButtonPropsLinkButton = DataAttributes &
  Partial<LinkButtonProps> & {
    type?: 'linkButton';
    view?: LinkView<LinkButtonView>;
    dropdown?: TableDropdownProps;
    disabledTooltipProps?: TooltipProps;
  };

// Объединенный тип для MassActions
export type MassActionButtonProps =
  | MassActionButtonPropsButton
  | MassActionButtonPropsLinkButton;

export interface StyledButtonProps {
  $hasDropdown?: boolean;
  $showLabel?: boolean;
  $buttonStyles?: string | CSSObject | FlattenSimpleInterpolation;
}
