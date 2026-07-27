import { StyledBody } from '../styled';
import type { PopupDFBodyProps } from '../types';

export function Body({ children, ...rest }: PopupDFBodyProps) {
  return <StyledBody {...rest}>{children}</StyledBody>;
}
