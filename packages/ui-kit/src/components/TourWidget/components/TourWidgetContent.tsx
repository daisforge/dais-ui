import { forwardRef } from 'react';

import { StyledContent } from '../TourWidget.styled';
import type { TourWidgetContentProps } from '../types';

export const TourWidgetContent = forwardRef<
  HTMLDivElement,
  TourWidgetContentProps
>(({ children, ...rest }, ref) => (
  <StyledContent ref={ref} {...rest}>
    {children}
  </StyledContent>
));

TourWidgetContent.displayName = 'TourWidget.Content';
