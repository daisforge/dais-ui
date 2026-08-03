import { LinkButton } from '@ui-kit/components/LinkButton';
import { IconChevronRight } from '@ui-kit/icons';
import React, { forwardRef } from 'react';

import { useTableCollapse } from '../contexts';

export const CollapseTableButton = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof LinkButton> & {
    buttonSize?: 'xxs' | 'xs' | 's';
    iconSize?: 'xs' | 's';
  }
>(({ buttonSize = 's', iconSize = 's', ...props }, ref) => {
  const {
    enableCollapse,
    isCollapsed,
    toggleCollapse,
    collapseText,
    expandText,
    domMetadata,
    collapseButtonPlacement,
  } = useTableCollapse();

  if (!enableCollapse) return null;

  return (
    <div
      ref={ref}
      className={domMetadata?.className}
      {...domMetadata?.dataAttributes}
    >
      <LinkButton
        {...props}
        contentLeft={
          <IconChevronRight
            size={iconSize}
            style={{
              transition: 'rotate 0.3s',
              rotate: isCollapsed ? '0turn' : '0.25turn',
            }}
          />
        }
        view="default"
        size={buttonSize}
        text={isCollapsed ? expandText : collapseText}
        onClick={(e) => {
          if (collapseButtonPlacement === 'above' || !isCollapsed) {
            toggleCollapse();
          }
          props.onClick?.(e);
        }}
      />
    </div>
  );
});

CollapseTableButton.displayName = 'CollapseTableButton';
