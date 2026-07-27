import { StyledFooter } from '../styled';
import type { PopupDFFooterProps } from '../types';

export function Footer({ children, ...rest }: PopupDFFooterProps) {
  return <StyledFooter {...rest}>{children}</StyledFooter>;
}
