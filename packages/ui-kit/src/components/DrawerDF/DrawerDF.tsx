import { PopupProvider } from '@ui-kit/components/Popup';
import React, { ReactNode, useMemo } from 'react';

import { drawerDFClassNames as cls } from './classNames';
import { DrawerDFBackIconButton } from './components/BackIconButton';
import { CloseButton } from './components/CloseButton';
import { DrawerDFDotsIconButton } from './components/DotsIconButton';
import { DrawerX } from './components/DrawerX';
import { drawerOffsetCloseBtn } from './components/styled';
import {
  DrawerDFContent,
  DrawerDFFooter,
  DrawerDFHeader,
} from './DrawerDFCompounds';
import { DrawerProps } from './types';

export type DrawerDFProps = {
  main?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  showBackButton?: boolean;
  onBackClick?: () => void;
} & Omit<DrawerProps, 'children'>;

const leftPaddingDrawerX = 16;

export const DrawerDF = ({
  main,
  header,
  footer,
  showBackButton,
  onBackClick,
  ...restProps
}: DrawerDFProps) => {
  const content = Array.isArray(main) ? main : [main];

  const isHave = { header: !!header, footer: !!footer };
  const multipleContents = content.length > 1;

  /*
   * Формула расчета максимальной ширины боковой панели:
   * 1. 100vw - полная ширина viewport
   * 2. + (корректировка кнопки закрытия):
   *    - -64px при multipleContents (компенсирует ширину кнопки + дополнительные элементы)
   *    - -52px в базовом случае (только кнопка закрытия)
   * 3. - (левый отступ):
   *    - Одинарный leftPaddingDrawerX при multipleContents
   *    - Двойной leftPaddingDrawerX в остальных случаях
   *
   * Итог: панель занимает всю ширину экрана за вычетом:
   * - места под кнопку закрытия (и доп. элементы если есть)
   * - необходимых отступов от края
   */
  const maxWidthDrawerX = useMemo(
    () => ({
      maxWidth: `calc(100vw + calc(${
        multipleContents
          ? drawerOffsetCloseBtn.multiply // Используем смещение -64px если есть multipleContents
          : drawerOffsetCloseBtn.default // Иначе стандартное смещение -52px
      }) - ${
        multipleContents ? leftPaddingDrawerX : 2 * leftPaddingDrawerX
      }px)`,
    }),
    [multipleContents],
  );

  return (
    <PopupProvider>
      <DrawerX
        $multipleContents={multipleContents}
        $header={isHave.header}
        $footer={isHave.footer}
        style={maxWidthDrawerX}
        {...restProps}
      >
        <div className={cls.drawerCloseBox}>
          {showBackButton ? (
            <DrawerDFBackIconButton onClick={onBackClick} />
          ) : (
            <CloseButton onClose={restProps.onClose} />
          )}
        </div>
        {header}

        <div className={cls.drawerContentContainer}>{content}</div>

        {!multipleContents && footer}
      </DrawerX>
    </PopupProvider>
  );
};

DrawerDF.Content = DrawerDFContent;
DrawerDF.Header = DrawerDFHeader;
DrawerDF.DotsIconButton = DrawerDFDotsIconButton;
DrawerDF.Footer = DrawerDFFooter;
