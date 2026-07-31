import { getCssProp } from '@ui-kit/utils';
import React, { FC } from 'react';

import { CONTAINER_CLASSES } from './Container.constants';
import {
  StyledContainerWrapper,
  StyledSplitContainerInnerWrapper,
  StyledSplitContainerWrapper,
} from './Container.styles';
import { ContainerProps, ISplitContainerProps } from './Container.types';

/**
 * Компонент Container с поддержкой разделенного и обычного режима
 */
export const Container: FC<ContainerProps> = (props) => {
  const {
    split = false,
    children,
    stretch = false,
    className = '',
    roundedInner = true,
    css,
    ...rest
  } = props;

  const containerClasses = `${CONTAINER_CLASSES.wrapper} ${className}`.trim();
  const cssProp = getCssProp(css);

  const commonProps = {
    className: containerClasses,
    $stretch: stretch,
    $css: cssProp,
    $roundedInner: roundedInner,
  };

  if (!split) {
    return (
      <StyledContainerWrapper {...commonProps}>
        {children}
      </StyledContainerWrapper>
    );
  }

  // Приводим тип для split режима
  const splitProps = rest as ISplitContainerProps;
  const { view = '30/70', fixedWidth, minColWidth } = splitProps;
  const childrenArray = React.Children.toArray(children);
  const hasMiddleColumn = view === '1/1/1' || view === '1/3/1';
  const requiredChildrenCount = hasMiddleColumn ? 3 : 2;
  const isFluidText = view === 'fixed-fluid';

  if (childrenArray.length < requiredChildrenCount) {
    return null;
  }

  return (
    <StyledSplitContainerWrapper
      {...commonProps}
      $fixedWidth={fixedWidth}
      $minColWidth={minColWidth}
      $view={view}
      position={isFluidText ? 'relative' : 'static'}
    >
      {childrenArray[0] && (
        <StyledSplitContainerInnerWrapper
          $rounded={roundedInner}
          className={CONTAINER_CLASSES.left}
        >
          {childrenArray[0]}
        </StyledSplitContainerInnerWrapper>
      )}

      {hasMiddleColumn && childrenArray[1] && (
        <StyledSplitContainerInnerWrapper
          $rounded={roundedInner}
          className={CONTAINER_CLASSES.middle}
        >
          {childrenArray[1]}
        </StyledSplitContainerInnerWrapper>
      )}

      {childrenArray[hasMiddleColumn ? 2 : 1] && (
        <StyledSplitContainerInnerWrapper
          $rounded={roundedInner}
          className={CONTAINER_CLASSES.right}
        >
          {childrenArray[hasMiddleColumn ? 2 : 1]}
        </StyledSplitContainerInnerWrapper>
      )}
    </StyledSplitContainerWrapper>
  );
};
