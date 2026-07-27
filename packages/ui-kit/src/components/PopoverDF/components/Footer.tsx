import { StyledFooter } from '../styled';
import type { PopoverDFFooterProps } from '../types';

export function Footer({ children, ...rest }: PopoverDFFooterProps) {
  return <StyledFooter {...rest}>{children}</StyledFooter>;
}
