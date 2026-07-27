import React from 'react';

import { cls } from './Layout.classNames';
import {
  LayoutGridContainer,
  LayoutGridItem,
  LayoutHeader,
  LayoutRoot
} from './Layout.styles';
import { LayoutProps } from './Layout.types';
import { mergeLayoutClasses } from './utils/mergeLayoutClasses';

export const Layout: React.FC<LayoutProps> = ({
  variant = 'V1_1',
  headerSlot,
  mainSlot,
  customSpacing = {},
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
  marginLeft,
  marginRight,
  paddingLeft,
  paddingRight,
  classes,
  ...rest
}) => {
  const mergedClasses = mergeLayoutClasses(cls, classes);

  const renderContent = () => {
    if (!mainSlot) return null;

    return (
      <LayoutGridContainer className={mergedClasses.main} $variant={variant}>
        {React.Children.map(mainSlot, (child, index) => {
          // Для 5_1 второй элемент (index === 1) получает дополнительный класс
          const gridItemClass =
            variant === 'V5_1' && index === 1
              ? `${mergedClasses.item} ${mergedClasses.centeredItem}`.trim()
              : mergedClasses.item;

          return (
            <LayoutGridItem className={gridItemClass}>{child}</LayoutGridItem>
          );
        })}
      </LayoutGridContainer>
    );
  };

  return (
    <LayoutRoot
      $variant={variant}
      $customSpacing={customSpacing}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $marginLeft={marginLeft}
      $marginRight={marginRight}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
      className={mergedClasses.root}
      {...rest}
    >
      {headerSlot && (
        <LayoutHeader className={mergedClasses.header}>
          {headerSlot}
        </LayoutHeader>
      )}
      {renderContent()}
    </LayoutRoot>
  );
};
