import { forwardRef } from 'react';

import { StyledFooter } from '../TourWidget.styled';
import type { TourWidgetFooterProps } from '../types';

export const TourWidgetFooter = forwardRef<
  HTMLDivElement,
  TourWidgetFooterProps
>(({ children, ...rest }, ref) => (
  <StyledFooter ref={ref} {...rest}>
    {children}
  </StyledFooter>
));

TourWidgetFooter.displayName = 'TourWidget.Footer';
