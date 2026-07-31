import React from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import { TableDropdown } from '../../components/TableDropdown/TableDropdown';
import {
  StyledButtonWithDropdown,
  StyledLinkButtonWithDropdown,
} from './styled';
import {
  ButtonProps,
  LinkButtonProps,
  LinkButtonView,
  MassActionButtonProps,
} from './types';

/**
 * Извлекает базовый view из link-префиксного view
 * Например: "linkDefault" -> "default", "linkAccent" -> "accent"
 */
const getLinkButtonView = (view: string | undefined): LinkButtonView => {
  if (typeof view === 'string' && view.startsWith('link')) {
    const baseView = view.slice(4); // Убираем "link" префикс
    // Приводим к lowercase для соответствия типам LinkButtonView
    const normalizedView = baseView.charAt(0).toLowerCase() + baseView.slice(1);
    return normalizedView as LinkButtonView;
  }
  // Если view не начинается с "link", возвращаем как есть
  return (view as LinkButtonView) ?? 'default';
};

// Дефолтные пропсы для MassActionButton (аналогично controlButtonDefaultProps)
const massActionButtonDefaultProps = {
  size: 's',
  view: 'linkDefault',
} as const;

export const MassActionButton = ({
  type,
  view,
  showLabel,
  text,
  buttonStyles,
  dropdown,
  ...buttonProps
}: MassActionButtonProps & {
  showLabel?: boolean;
  buttonStyles?: string | CSSObject | FlattenSimpleInterpolation;
}) => {
  // Определяем тип кнопки: если type не указан, используем linkButton для обратной совместимости
  const buttonType = type ?? 'linkButton';
  const { view: defaultView, ...restDefaultProps } =
    massActionButtonDefaultProps;
  const actualView = view ?? defaultView;
  const buttonText = showLabel ? text : undefined;
  const hasDropdown = !!dropdown;

  let btn: React.ReactElement;

  if (buttonType === 'button') {
    // Используем обычный Button
    const buttonPropsForButton = buttonProps as ButtonProps;
    const finalText = buttonPropsForButton.text ?? buttonText;
    btn = (
      <StyledButtonWithDropdown
        {...restDefaultProps}
        {...buttonPropsForButton}
        view={actualView as ButtonProps['view']}
        text={finalText}
        $hasDropdown={hasDropdown}
        $showLabel={showLabel}
        $buttonStyles={buttonStyles}
      />
    );
  } else {
    // Используем LinkButton (по умолчанию или если type === 'linkButton')
    const actualViewString = String(actualView ?? 'linkDefault');
    const isLinkView = actualViewString.startsWith('link');
    const linkButtonView: LinkButtonView = isLinkView
      ? getLinkButtonView(actualViewString)
      : (actualViewString as LinkButtonView);

    btn = (
      <StyledLinkButtonWithDropdown
        {...restDefaultProps}
        {...(buttonProps as LinkButtonProps)}
        view={linkButtonView}
        text={buttonText}
        $hasDropdown={hasDropdown}
        $showLabel={showLabel}
        $buttonStyles={buttonStyles}
      />
    );
  }

  if (dropdown) {
    btn = <TableDropdown {...dropdown}>{btn}</TableDropdown>;
  }

  return btn;
};
