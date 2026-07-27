import { IconProps } from '@ui-kit/icons';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';

export type IconSvgSpriteProps = {
  iconUrl: string;
} & IconProps;

const sizeMap = {
  xs: {
    scale: 1,
    size: 16
  }, // 16px
  s: {
    scale: 1.5,
    size: 24
  }, // 24px
  m: {
    scale: 2.25,
    size: 36
  } // 36px
};

const IconsRoot = styled.div`
  display: inline-flex;
  width: var(--icon-size);
  height: var(--icon-size);
  flex: 0 0 var(--icon-size);
`;

export const IconSvgSprite = ({
  iconUrl,
  size = 's',
  color,
  style,
  className
}: IconSvgSpriteProps) => (
  <IconsRoot
    aria-hidden
    style={
      {
        '--icon-size': `${sizeMap[size].scale}rem`,
        ...style
      } as CSSProperties
    }
    className={className || ''}
  >
    <svg
      width="100%"
      viewBox={`0 0 ${sizeMap[size].size} ${sizeMap[size].size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color || 'var(--plasma-colors-primary)'}
    >
      <use xlinkHref={iconUrl.replace(/\{size\}/g, size)} />
    </svg>
  </IconsRoot>
);
