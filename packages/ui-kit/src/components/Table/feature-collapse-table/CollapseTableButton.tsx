import { Button } from '@ui-kit/components/Button';
import { IconChevronRight } from '@ui-kit/icons';
import React, { forwardRef } from 'react';

import { useTableCollapse } from '../contexts';

export const CollapseTableButton = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Button>
>((props, ref) => {
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
      <Button
        {...props}
        contentLeft={
          <IconChevronRight
            size="s"
            style={{
              transition: 'rotate 0.3s',
              rotate: isCollapsed ? '0turn' : '0.25turn',
            }}
          />
        }
        view="clear"
        size="s"
        onClick={(e) => {
          if (collapseButtonPlacement === 'above' || !isCollapsed) {
            toggleCollapse();
          }
          props.onClick?.(e);
        }}
      >
        {isCollapsed ? expandText : collapseText}
      </Button>
    </div>
  );
});

CollapseTableButton.displayName = 'CollapseTableButton';
