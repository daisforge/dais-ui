import type { ButtonCompProps } from '@ui-kit/components/Button';
import { Dropdown } from '@ui-kit/components/Dropdown';
import React from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import { TableDropdown } from '../Table/components/TableDropdown/TableDropdown';
import {
  StyledButtonWithDropdown,
  StyledLinkButtonWithDropdown
} from './styled';
import type {
  LinkButtonProps,
  LinkButtonView,
  MassActionsButtonProps
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

// Дефолтные пропсы для MassActionButton
const massActionButtonDefaultProps = {
  size: 's',
  view: 'linkDefault'
} as const;

export const MassActionsButton = ({
  type,
  view,
  showLabel,
  text,
  buttonStyles,
  dropdown,
  useTableDropdown = false,
  ...buttonProps
}: MassActionsButtonProps & {
  showLabel?: boolean;
  buttonStyles?: string | CSSObject | FlattenSimpleInterpolation;
  /** Использовать TableDropdown (для таблиц) вместо обычного Dropdown */
  useTableDropdown?: boolean;
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
    const buttonPropsForButton = buttonProps as ButtonCompProps;
    const finalText = buttonPropsForButton.text ?? buttonText;
    btn = (
      <StyledButtonWithDropdown
        {...restDefaultProps}
        {...buttonPropsForButton}
        view={actualView as ButtonCompProps['view']}
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
    // Проверяем наличие items (для безопасности, хотя они обязательны в DropdownProps)
    if (dropdown.items && dropdown.items.length > 0) {
      // Для таблицы используем TableDropdown
      if (useTableDropdown) {
        btn = <TableDropdown {...dropdown}>{btn}</TableDropdown>;
      } else {
        // Для standalone используем обычный Dropdown
        // Исключаем пропсы, которые специфичны для TableDropdown ($css обрабатывается отдельно)
        const { $css, ...dropdownPropsForStandalone } = dropdown;
        btn = <Dropdown {...dropdownPropsForStandalone}>{btn}</Dropdown>;
      }
    }
    // Если items нет или пустой массив, не оборачиваем кнопку в dropdown
  }

  return btn;
};
