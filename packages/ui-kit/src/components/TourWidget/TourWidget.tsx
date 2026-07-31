import { mCls } from '@ui-kit/utils';
import { forwardRef } from 'react';

import { TourWidgetBullet } from './components/TourWidgetBullet';
import { TourWidgetBullets } from './components/TourWidgetBullets';
import { TourWidgetContent } from './components/TourWidgetContent';
import { TourWidgetFooter } from './components/TourWidgetFooter';
import { TourWidgetGradient } from './components/TourWidgetGradient';
import { TourWidgetHeader } from './components/TourWidgetHeader';
import { tourWidgetClassNames as cls } from './TourWidget.classNames';
import { TourWidgetProvider } from './TourWidget.context';
import { StyledContainer } from './TourWidget.styled';
import type { TourWidgetProps } from './types';

const orientationClassNames: Record<
  NonNullable<TourWidgetProps['orientation']>,
  string
> = {
  horizontal: cls.horizontal,
  vertical: cls.vertical,
};

const TourWidgetWithRef = forwardRef<HTMLDivElement, TourWidgetProps>(
  (
    { children, orientation = 'vertical', activeStepIndex, className, ...rest },
    ref,
  ) => (
    <TourWidgetProvider value={{ activeStepIndex }}>
      <StyledContainer
        ref={ref}
        $orientation={orientation}
        className={mCls(orientationClassNames[orientation], className)}
        {...rest}
      >
        <TourWidgetGradient orientation={orientation} />
        {children}
      </StyledContainer>
    </TourWidgetProvider>
  ),
);

export const TourWidget = Object.assign(TourWidgetWithRef, {
  Header: TourWidgetHeader,
  Content: TourWidgetContent,
  Footer: TourWidgetFooter,
  Bullet: TourWidgetBullet,
  Bullets: TourWidgetBullets,
});

TourWidget.displayName = 'TourWidget';
