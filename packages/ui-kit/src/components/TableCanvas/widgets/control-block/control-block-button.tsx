import { Button } from '@ui-kit/components/Button';
import { Divider } from '@ui-kit/components/Divider';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { Tooltip } from '@ui-kit/components/Tooltip';
import { s } from '@ui-kit/constants';
import { IconChevronDown } from '@ui-kit/icons';
import React, { useState } from 'react';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { TableDropdown } from '../../components/TableDropdown/TableDropdown';
import {
  ButtonProps,
  ControlBlockButtonProps,
  controlButtonDefaultProps,
} from './control-block-button.types';

export const StyledLinkButton = styled(LinkButton)({
  paddingInline: s.x8,
}) as typeof LinkButton;

export const StyledDivider = styled(Divider)({
  paddingLeft: '1px',
});

interface StyledButtonProps {
  $hasDropdown?: boolean;
  $showLabel?: boolean;
  $buttonStyles?: string | CSSObject | FlattenSimpleInterpolation;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledButton: React.FC<ButtonProps & StyledButtonProps> = styled(
  Button,
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

// const StyledLinkButtonWithDropdown: React.FC<
//   LinkButtonProps & StyledButtonProps
// > = styled(StyledLinkButton)<StyledButtonProps>`
//   ${({ $hasDropdown }) =>
//     $hasDropdown &&
//     css`
//       & > div > span:last-child {
//         max-width: fit-content;
//         min-width: unset;
//       }
//     `}
//   ${({ $buttonStyles }) =>
//     $buttonStyles &&
//     css`
//       ${$buttonStyles}
//     `}
// `;

/**
 * Маппинг link-views в обычные button views.
 * @deprecated Link-views устарели — все кнопки controlBlock рендерятся как обычные.
 */
const mapToButtonView = (
  view: ControlBlockButtonProps['view'],
): ButtonProps['view'] => {
  if (!view) return 'secondary';
  if (view.startsWith('link')) return 'secondary';
  return view as ButtonProps['view'];
};

const resizeIcon = (
  icon: React.ReactNode,
  iconSize?: string,
): React.ReactNode => {
  if (!iconSize || !React.isValidElement(icon)) return icon;
  // Уважаем явно заданный размер: если разработчик сам задал size на иконке
  // своей кнопки — не перезаписываем. Наши штатные иконки и авто-шеврон size
  // не задают, поэтому им проставляется размер из панели (sideInnerIcon).
  if ((icon.props as { size?: unknown })?.size != null) return icon;
  return React.cloneElement(icon as React.ReactElement, { size: iconSize });
};

export const ControlBlockButton = ({
  dropdown,
  isLastButtonInnArray = true,
  index,
  view,
  showLabel,
  text,
  itemID,
  buttonStyles,
  skipRightDivider,
  tooltipText,
  disableContentRightFlip,
  buttonSize = 'xs',
  iconSize,
  ...buttonProps
}: ControlBlockButtonProps & {
  isLastButtonInnArray?: boolean;
  index: number;
  showLabel?: boolean;
  buttonStyles?: string | CSSObject | FlattenSimpleInterpolation;
  buttonSize?: ButtonProps['size'];
  iconSize?: string;
}) => {
  const { view: defaultView, ...restControlButtonDefaultProps } =
    controlButtonDefaultProps;

  const actualView = view ?? defaultView;
  const mappedView = mapToButtonView(actualView);
  const buttonText = showLabel ? text : undefined;
  const hasDropdown = !!dropdown;

  // Авто-шеврон рисуем сами только когда разработчик не задал свой contentRight.
  const hasOwnContentRight = buttonProps['contentRight'] != null;
  const isAutoChevron = hasDropdown && !hasOwnContentRight;

  // const isEditButtons = buttonProps?.['className']?.includes(EDIT_BUTTON_CLASS);
  const showTooltip = !showLabel && !!tooltipText;
  const isDisabled = !!buttonProps['disabled'];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const wrapContentRight = (node: React.ReactNode) => {
    // Флип-анимацию навешиваем только на наш авто-шеврон. Если разработчик
    // передал свой contentRight (счётчик, своя иконка), мы его не анимируем —
    // анимация на нём это его забота. disableContentRightFlip оставлен как
    // дополнительный явный запрет (legacy счётчика группировки).
    if (!isAutoChevron || !node || disableContentRightFlip) return node;
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          transform: isDropdownOpen ? 'scaleY(-1)' : 'scaleY(1)',
          transition: 'transform 0.2s ease',
        }}
      >
        {node}
      </span>
    );
  };

  // Авто-шеврон: если у кнопки есть dropdown, а contentRight не задан,
  // рисуем шеврон раскрытия сами (с флипом и размером iconSize). Если
  // contentRight задан (например счётчик группировки), используем его как есть.
  const rawContentRight = isAutoChevron ? (
    <IconChevronDown color="inherit" />
  ) : (
    buttonProps['contentRight']
  );

  const resolvedProps = iconSize
    ? {
        ...buttonProps,
        contentLeft: resizeIcon(buttonProps['contentLeft'], iconSize),
        contentRight: wrapContentRight(resizeIcon(rawContentRight, iconSize)),
      }
    : {
        ...buttonProps,
        contentRight: wrapContentRight(rawContentRight),
      };

  let btn = (
    <StyledButton
      {...restControlButtonDefaultProps}
      size={buttonSize}
      {...(resolvedProps as ButtonProps)}
      view={mappedView}
      text={buttonText}
      $hasDropdown={hasDropdown}
      $showLabel={showLabel}
      $buttonStyles={buttonStyles}
    />
  );

  if (dropdown && !isDisabled) {
    btn = (
      <TableDropdown
        {...dropdown}
        onToggle={(state) => setIsDropdownOpen(state)}
      >
        {btn}
      </TableDropdown>
    );
  }
  if (showTooltip) {
    btn = (
      <Tooltip
        trigger="hover"
        placement="top"
        text={tooltipText}
        target={btn}
      />
    );
  }
  return (
    <>
      {btn}
      {!isLastButtonInnArray && !skipRightDivider && (
        <StyledDivider orientation="vertical" length="16px" />
      )}
    </>
  );
};
