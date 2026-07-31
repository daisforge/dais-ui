import { Badge } from '@ui-kit/components/Badge';
import { BodyS, H4 } from '@ui-kit/components/Typography';
import { spacing } from '@ui-kit/constants';
import { textSecondary } from '@ui-kit/tokens';
import React from 'react';

import { Box } from '../Box';
import { drawerDFClassNames as cls } from './classNames';
import type {
  DrawerDFContentProps,
  DrawerDFFooterProps,
  DrawerDFHeaderProps,
} from './types';

export const DrawerDFHeader = ({
  className,
  children,
  refEl,
  fixedWidth,
  style,
  title,
  subTitle,
  badge,
  rightBlock,
  footerBlock,
  ...props
}: DrawerDFHeaderProps) => {
  if (children) {
    return (
      <Box
        display
        ref={refEl}
        className={cls.drawerHeader}
        $css={{
          paddingTop: spacing.x12,
          ...style,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      display
      ref={refEl}
      className={cls.drawerHeader}
      {...props}
      $css={{
        ...style,
      }}
    >
      <div className={cls.drawerHeaderContainer}>
        <div className={cls.drawerHeaderTop}>
          <div className={cls.drawerHeaderTitleBlock}>
            <div className={cls.drawerHeaderTitleContainer}>
              {title && <H4 className={cls.drawerHeaderTitle}>{title}</H4>}
              {badge &&
                (() => {
                  const { text, clear, pilled, transparent, ...badgeProps } =
                    badge;
                  return (
                    <Badge
                      view="default"
                      transparent
                      clear={undefined}
                      pilled={undefined}
                      {...badgeProps}
                      className={`${cls.drawerHeaderBadge} ${
                        badge.className || ''
                      }`}
                    >
                      {text}
                    </Badge>
                  );
                })()}
            </div>
            {rightBlock && (
              <div className={cls.drawerHeaderRightBlock}>{rightBlock}</div>
            )}
          </div>
          {subTitle && (
            <BodyS color={textSecondary} className={cls.drawerHeaderSubtitle}>
              {subTitle}
            </BodyS>
          )}
        </div>
        {footerBlock && (
          <div className={cls.drawerHeaderFooterBlock}>{footerBlock}</div>
        )}
      </div>
    </Box>
  );
};

export const DrawerDFContent = ({
  className,
  children,
  refEl,
  fixedWidth,
  style,
  ...props
}: DrawerDFContentProps) => (
  <Box
    style={{
      ...(fixedWidth && {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: fixedWidth,
      }),
    }}
    ref={refEl}
    className={cls.drawerContent}
    width="100%"
  >
    <Box
      className={cls.drawerContentInner}
      style={style} // стили применяются к inner
      {...props} // props тоже прокидываются в inner
    >
      {children}
    </Box>
  </Box>
);

export const DrawerDFFooter = ({
  className,
  children,
  refEl,
  ...props
}: DrawerDFFooterProps) => (
  <Box ref={refEl} className={cls.drawerFooter} {...props}>
    {children}
  </Box>
);
