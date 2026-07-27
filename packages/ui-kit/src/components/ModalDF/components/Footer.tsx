import { cls } from '../classNames';
import { StyledMainFooter } from '../styled';
import type { ModalDFFooterProps } from '../types';

export function Footer({ leftBlock, rightBlock, ...rest }: ModalDFFooterProps) {
  return (
    <StyledMainFooter {...rest}>
      <div className={cls.mainFooterLeft}>{leftBlock}</div>
      <div className={cls.mainFooterRight}>{rightBlock}</div>
    </StyledMainFooter>
  );
}
