import { IconSearch } from '@ui-kit/icons';
import {
  surfaceTransparentSecondary,
  surfaceTransparentSecondaryActive,
  surfaceTransparentSecondaryHover,
  textSecondary
} from '@ui-kit/tokens';
import type { ComponentProps } from 'react';
import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { TextField } from './TextField';

export type TextFieldSearchBaseProps = {
  /**
   * Размер Поля ввода
   */
  size?: 'xs' | 's';
  /**
   * Действие при выполнении нажатия на кнопку очистки поля ввода
   * @deprecated Используйте onClear
   */
  handlerClear?: () => void;
  /**
   * Действие при выполнении нажатия на кнопку очистки поля ввода
   */
  onClear?: () => void;
};

export type TextFieldSearchProps = ComponentProps<typeof TextField> &
  TextFieldSearchBaseProps;

export const StyledTextField: typeof TextField = styled(TextField)`
  && {
    .input-wrapper {
      background: ${() => surfaceTransparentSecondary};
      box-shadow: none;
    }

    &:not([readonly]) .input-wrapper:hover {
      background: ${() => surfaceTransparentSecondaryHover};
    }

    &:not([readonly]) .input-wrapper:active {
      background: ${() => surfaceTransparentSecondaryActive};
    }
  }
`;

export const TextFieldSearch = forwardRef<
  HTMLInputElement,
  TextFieldSearchProps
>(
  (
    {
      placeholder = 'Поиск',
      size = 's',
      value,
      onChange,
      handlerClear,
      onClear,
      disabled,
      readOnly,
      ...restProps
    },
    ref
  ) => (
    <StyledTextField
      ref={ref}
      value={value}
      placeholder={placeholder}
      size={size}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      contentLeft={<IconSearch color={textSecondary} size={size} />}
      onClear={onClear ?? handlerClear}
      {...restProps}
    />
  )
);

TextFieldSearch.displayName = 'TextFieldSearch';
