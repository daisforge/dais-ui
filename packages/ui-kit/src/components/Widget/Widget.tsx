import { mCls } from '@ui-kit/utils';
import { ComponentProps, forwardRef } from 'react';
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components';

import { WidgetDivider } from './components/WidgetDivider';
import { WidgetFooter } from './components/WidgetFooter';
import { WidgetHeader } from './components/WidgetHeader';
import { WidgetIconButtonBack } from './components/WidgetIconButtonBack';
import { WidgetIconButtonDots } from './components/WidgetIconButtonDots';
import { WidgetServiceButtons } from './components/WidgetServiceButtons';
import { widgetClassNames as cls } from './Widget.classNames';
import { WidgetContainerTypeContext } from './Widget.ctx';
import { StyledContainer, StyledContent } from './Widget.styled';

type WidgetProps = ComponentProps<'div'> & {
  /**
   * @default 'default'
   */
  containerType?: 'splitView' | 'modal' | 'default';
  $css?: string | CSSObject | FlattenSimpleInterpolation;
};
const containerTypeMapper: Record<
  NonNullable<WidgetProps['containerType']>,
  string
> = {
  splitView: cls.containerTypeSplitView,
  modal: cls.containerTypeModal,
  default: cls.containerTypeDefault,
};

const WidgetWithRef = forwardRef<HTMLDivElement, WidgetProps>(
  ({ children, containerType = 'default', className, ...rest }, ref) => (
    <WidgetContainerTypeContext.Provider value={containerType}>
      <StyledContainer
        ref={ref as ComponentProps<typeof StyledContainer>['ref']}
        className={mCls(containerTypeMapper[containerType], className)}
        {...rest}
      >
        {children}
      </StyledContainer>
    </WidgetContainerTypeContext.Provider>
  ),
);

export const Widget = Object.assign(WidgetWithRef, {
  Header: WidgetHeader,
  Footer: WidgetFooter,
  Content: StyledContent,
  Divider: WidgetDivider,
  ServiceButtons: WidgetServiceButtons,
  IconButtonDots: WidgetIconButtonDots,
  IconButtonBack: WidgetIconButtonBack,
});
