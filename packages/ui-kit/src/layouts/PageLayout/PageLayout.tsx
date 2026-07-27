import React from 'react';

import { StyledPageLayout } from './PageLayout.styled';
import type { PageLayoutProps } from './PageLayout.types';

export const PageLayout = ({
  paddingTop,
  paddingBottom,
  minHeight,
  children,
  className
}: PageLayoutProps) => (
  <StyledPageLayout
    $paddingTop={paddingTop}
    $paddingBottom={paddingBottom}
    $minHeight={minHeight}
    className={className}
  >
    {children}
  </StyledPageLayout>
);
