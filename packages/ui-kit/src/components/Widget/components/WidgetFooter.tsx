import { BoxProps } from '@ui-kit/components/Box';
import { ReactNode } from 'react';

import { widgetClassNames as cls } from '../Widget.classNames';
import { StyledFooter } from '../Widget.styled';

export function WidgetFooter({
  leftBlock,
  rightBlock,
  topBlock,
  children,
  ...rest
}: {
  leftBlock?: ReactNode;
  rightBlock?: ReactNode;
  topBlock?: ReactNode;
  dividerTop?: boolean;
} & BoxProps) {
  return (
    <StyledFooter {...rest}>
      {children ? (
        <div className={cls.slotBlock}>{children}</div>
      ) : (
        <>
          {!!topBlock && <div className={cls.footerTopBlock}>{topBlock}</div>}
          {!!leftBlock && <div className={cls.footerLeft}>{leftBlock}</div>}
          {!!rightBlock && <div className={cls.footerRight}>{rightBlock}</div>}
        </>
      )}
    </StyledFooter>
  );
}
