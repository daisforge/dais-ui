import { forwardRef } from 'react';

import {
  StyledHeader,
  StyledHeaderDescription,
  StyledHeaderTitle
} from '../TourWidget.styled';
import type { TourWidgetHeaderProps } from '../types';

export const TourWidgetHeader = forwardRef<
  HTMLDivElement,
  TourWidgetHeaderProps
>(({ title, description, children, ...rest }, ref) => (
  <StyledHeader ref={ref} {...rest}>
    {title !== undefined && title !== null && (
      <StyledHeaderTitle variant="H3" bold>
        {title}
      </StyledHeaderTitle>
    )}
    {description !== undefined && description !== null && (
      <StyledHeaderDescription variant="TextM">
        {description}
      </StyledHeaderDescription>
    )}
    {children}
  </StyledHeader>
));

TourWidgetHeader.displayName = 'TourWidget.Header';
