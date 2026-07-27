import { Divider } from '@ui-kit/components/Divider';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { s } from '@ui-kit/constants';
import React from 'react';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation
} from 'styled-components';

import { TableDropdown } from '../../components/TableDropdown/TableDropdown';
import {
  ControlBlockButtonProps,
  controlButtonDefaultProps,
  EmbedIconButtonProps,
  LinkButtonProps,
  LinkButtonView
} from './control-block-button.types';

export const StyledLinkButton = styled(LinkButton)({
  paddingInline: s.x8
}) as typeof LinkButton;

export const StyledDivider = styled(Divider)({
  paddingLeft: '1px'
});

interface StyledButtonProps {
  $hasDropdown?: boolean;
  $showLabel?: boolean;
  $buttonStyles?: string | CSSObject | FlattenSimpleInterpolation;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledButton: React.FC<EmbedIconButtonProps & StyledButtonProps> = styled(
  EmbedIconButton
)<StyledButtonProps>`
  ${({ $hasDropdown }) =>
    $hasDropdown &&
    css`
      & > div > span:last-child {
        max-width: fit-content;
        min-width: unset;
      }
    `}
  ${({ $buttonStyles }) =>
    $buttonStyles &&
    css`
      ${$buttonStyles};
    `}
`;

const StyledLinkButtonWithDropdown: React.FC<
  LinkButtonProps & StyledButtonProps
> = styled(StyledLinkButton)<StyledButtonProps>`
  ${({ $hasDropdown }) =>
    $hasDropdown &&
    css`
      & > div > span:last-child {
        max-width: fit-content;
        min-width: unset;
      }
    `}
  ${({ $buttonStyles }) =>
    $buttonStyles &&
    css`
      ${$buttonStyles}
    `}
`;

const getLinkButtonView = (
  view: ControlBlockButtonProps['view']
): LinkButtonView =>
  view?.split?.('link')?.[1]?.toLowerCase() as LinkButtonView;

export const ControlBlockButton = ({
  dropdown,
  isLastButtonInnArray = true,
  index,
  view,
  showLabel,
  text,
  itemID,
  buttonStyles,
  ...buttonProps
}: ControlBlockButtonProps & {
  isLastButtonInnArray?: boolean;
  index: number;
  showLabel?: boolean;
  buttonStyles?: string | CSSObject | FlattenSimpleInterpolation;
}) => {
  const { view: defaultView, ...restControlButtonDefaultProps } =
    controlButtonDefaultProps;

  const actualView = view ?? defaultView;
  const buttonText = showLabel ? text : undefined;
  const hasDropdown = !!dropdown;
  const isDisabled = !!buttonProps['disabled'];

  let btn = actualView?.startsWith('link') ? (
    <StyledLinkButtonWithDropdown
      {...{ ...restControlButtonDefaultProps }}
      {...(buttonProps as LinkButtonProps)}
      view={getLinkButtonView(actualView)}
      text={buttonText}
      $hasDropdown={hasDropdown}
      $showLabel={showLabel}
      $buttonStyles={buttonStyles}
    />
  ) : (
    <StyledLinkButtonWithDropdown
      {...restControlButtonDefaultProps}
      {...(buttonProps as LinkButtonProps)}
      view={actualView as LinkButtonProps['view']}
      text={buttonText}
      $hasDropdown={hasDropdown}
      $showLabel={showLabel}
      $buttonStyles={buttonStyles}
    />
  );

  if (dropdown && !isDisabled) {
    btn = <TableDropdown {...dropdown}>{btn}</TableDropdown>;
  }
  return (
    <>
      {btn}
      {!isLastButtonInnArray && (
        <StyledDivider orientation="vertical" length="16px" />
      )}
    </>
  );
};
