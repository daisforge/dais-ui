import { LinkButton, LinkButtonCompProps } from '@ui-kit/components/LinkButton';
import { IconClose } from '@ui-kit/icons';
import React from 'react';
import styled, { CSSObject } from 'styled-components';

export type ResetAllFiltersButtonProps = LinkButtonCompProps & {
  /** Видимость кнопки */
  isVisible?: boolean;
  /** Кастомные стили */
  $css?: CSSObject | TemplateStringsArray;
};

export const ResetAllFiltersButton = styled(LinkButton).attrs(
  (props: LinkButtonCompProps & { isVisible?: boolean }) => ({
    view: 'default',
    size: 's',
    text: 'Сбросить фильтры',
    contentLeft: <IconClose size="xs" color="inherit" />,
    style: {
      ...props.style,
      visibility: props.isVisible ? 'visible' : 'hidden',
      pointerEvents: props.isVisible ? 'auto' : 'none'
    }
  })
)<
  LinkButtonCompProps & {
    isVisible?: boolean;
    $css?: CSSObject | TemplateStringsArray;
  }
>`
  ${({ $css }) => $css}
`;
