import { Button, type ButtonCompProps } from '@ui-kit/components/Button';
import { Flow } from '@ui-kit/components/Flow';
import { ModalDF, type ModalDFProps } from '@ui-kit/components/ModalDF';
import type { ModalDFFooterProps } from '@ui-kit/components/ModalDF/types';
import { s } from '@ui-kit/constants';
import { IconProps } from '@ui-kit/icons';
import React, {
  Children,
  cloneElement,
  type ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react';

import {
  iconColors,
  StyledIconBlock,
  StyledModalDF,
  StyledServiceButtons,
} from './ModalDFConfirmation.styled';

export type ModalDFConfirmationContent = {
  /**
   * заголовок
   */
  header?: ReactNode;
  /**
   * информационный текст
   */
  body?: ReactNode;
  /**
   * отступы сверху и снизу информационного текста (по умолчанию: `bodyMarginBlock ?? (typeof body === 'string' ? s.x4 : undefined);`)
   */
  bodyMarginBlock?: string;
  /**
   * пропсы для самой правой главной кнопки, по умолчанию `view="accent"`
   */
  mainButton?: ButtonCompProps;
  /**
   * пропсы для вторичной кнопки, по умолчанию `view="secondary"`
   */
  secondaryButton?: ButtonCompProps;
  /**
   * если `mainButton` или `secondaryButton` не подходят, то можно полностью заменить footer на кастомный
   */
  footer?: ReactNode;
};

export type ModalDFConfirmationFooterProps = ModalDFFooterProps;

export type ModalDFConfirmationProps = {
  /**
   * основной пропс для заполнения внутреннего отображения модального окна
   */
  content?: ModalDFConfirmationContent;
  /**
   * Добавление радиального градиента в верхней части модального окна(передается цвет для градиента)
   */
  view?: keyof typeof iconColors;
  /**
   * Иконка в верхней части модального окна
   */
  icon?: ReactNode;
} & Omit<ModalDFProps, 'hasBody' | 'content' | 'children' | 'ref'>;

const ModalDFConfirmationWithRef = forwardRef<
  HTMLDivElement,
  ModalDFConfirmationProps
>(
  (
    { content, view, icon, ...restProps }: ModalDFConfirmationProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      header,
      body,
      bodyMarginBlock,
      mainButton,
      secondaryButton,
      footer,
    } = content ?? {};
    const isHaveButtons = !!(mainButton || secondaryButton);
    const bodyMbl =
      bodyMarginBlock ?? (typeof body === 'string' ? s.x4 : undefined);

    const iconWidthDefults = Children.map(icon, (child) => {
      if (React.isValidElement<IconProps>(child)) {
        return cloneElement<IconProps>(child, {
          size: 'm',
          color: view ? iconColors[view] : '',
        });
      }
      return undefined;
    });

    return (
      <StyledModalDF ref={ref} $view={view} {...restProps}>
        <ModalDF.Main>
          <ModalDF.Header title={header} showServiceButtons={!(view && icon)} />
          <ModalDF.Content $css={{ marginBlock: bodyMbl }}>
            {body}
          </ModalDF.Content>
          {footer ??
            (isHaveButtons && (
              <ModalDF.Footer
                rightBlock={
                  <Flow mainAxisGap={s.x4}>
                    {secondaryButton && (
                      <Button view="secondary" size="s" {...secondaryButton} />
                    )}
                    {mainButton && (
                      <Button view="accent" size="s" {...mainButton} />
                    )}
                  </Flow>
                }
              />
            ))}
        </ModalDF.Main>
        {view && icon && (
          <>
            <StyledServiceButtons hasBackground={false} />
            <StyledIconBlock>{iconWidthDefults}</StyledIconBlock>
          </>
        )}
      </StyledModalDF>
    );
  },
);
export const ModalDFConfirmationFooter = ModalDF.Footer;

export const ModalDFConfirmation = Object.assign(ModalDFConfirmationWithRef, {
  Footer: ModalDFConfirmationFooter,
});

ModalDFConfirmation.displayName = 'ModalDFConfirmation';
