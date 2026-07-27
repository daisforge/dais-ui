import { StyledBody } from '../styled';
import type { PopoverDFBodyProps } from '../types';

export function Body({ children, ...rest }: PopoverDFBodyProps) {
  return <StyledBody {...rest}>{children}</StyledBody>;
}
