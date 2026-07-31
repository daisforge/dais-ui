import { s } from '@ui-kit/constants';
import {
  outlineSolidSecondary,
  outlineSolidSecondaryHover,
  shadowDownSoftS,
  surfaceSolidCard,
  surfaceSolidSecondary,
} from '@ui-kit/tokens';
import { media } from '@ui-kit/utils';
import { CSSProperties } from 'react';
import styled from 'styled-components';

import {
  splitViewClassNames as cls,
  splitViewConstants as c,
} from './SplitView.constants';
import type { SplitViewProps, SplVSizes } from './SplitView.type';

const C = {
  spaceX4: () => s.x4,
  spaceX16: () => s.x16,
  surfaceSolidSecondary: () => surfaceSolidSecondary,
};

export const cssVars = (
  sizes: SplVSizes,
  sidebarIsClosed: boolean,
  sidebarPaddingLeftOnClosed: number | undefined,
  sidebarMinWidthPx: number = c.sidebarWidths.minWidthPx,
) => {
  const sizesLast: SplVSizes & { separator: string; gap?: number } =
    sidebarIsClosed
      ? {
          ...sizes,
          main: 100,
          separator: `${sidebarPaddingLeftOnClosed ?? 0}px`,
          sidebar: 0,
        }
      : { ...sizes, separator: `${c.separatorDefaultWidth}px` };

  const { main, sidebar, sidebarPx, separator } = sizesLast;
  return {
    [c.mainWidthVar]: `${main}fr`,
    [c.sidebarWidthVar]:
      sidebar === 0
        ? `minmax(0px, 0fr)`
        : `minmax(${sidebarMinWidthPx}px, ${sidebar}fr)`,
    [c.separatorWidthVar]: separator,
    ...(sidebarPx !== undefined && {
      [c.sidebarWidthInPxVar]: `${sidebarPx}px`,
    }),
  } as CSSProperties;
};
const sidebarUp1920MediaStyles = `
      border-top-right-radius: ${C.spaceX4};
      border-bottom-right-radius: ${C.spaceX4};
      `;

export const StyledDiv = styled.div.attrs({
  className: cls.container as string,
})<{
  $css: SplitViewProps['$css'];
  $headerHeight?: number;
  $insidePageLayout?: boolean;
  $sidebarIsClosed?: boolean;
}>`
  * {
    box-sizing: border-box;
  }
  display: grid;
  position: relative;
  z-index: 0;
  grid-template-columns:
    var(${c.mainWidthVar}) var(${c.separatorWidthVar})
    var(${c.sidebarWidthVar});
  transition: grid-template-columns 0.2s ease-in-out,
    margin-right 0.2s ease-in-out;

  flex-grow: 1;

  & .${cls.mainBlock} {
    overflow-x: hidden;
  }

  & .${cls.separator}, & .${cls.sidebarBlock} {
    --split-view-header-height: ${({ $headerHeight }) =>
      $headerHeight !== undefined
        ? `${$headerHeight}px`
        : 'var(--global-header-height, 72px)'};
    --split-view-bottom-gap: var(--page-layout-padding-bottom, 32px);

    ${media.down('l')`
      --split-view-bottom-gap: var(--page-layout-padding-bottom, 24px);
    `}

    position: sticky;
    top: var(--split-view-header-height);
    height: calc(
      100vh - var(--split-view-header-height) - var(--split-view-bottom-gap)
    );
    overflow-x: hidden;
  }

  & .${cls.separator} {
    align-self: start;
    z-index: 1;

    & .${cls.separatorButton} {
      margin-left: ${c.gapBetweenBlocksDefaultWidth}px;
      position: relative;
      border: none;
      padding: 0;
      width: ${c.separatorDefaultWidth - c.gapBetweenBlocksDefaultWidth}px;
      height: 100%;
      background-color: ${() => surfaceSolidSecondary};
      border-radius: ${C.spaceX4} 0 0 ${C.spaceX4};

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
        width: 4px;
        height: ${C.spaceX16};
        border-radius: 95px;
        background-color: ${() => outlineSolidSecondary};
      }
      &:hover {
        &::before {
          background-color: ${() => outlineSolidSecondaryHover};
        }
      }

      cursor: col-resize;

      // скрываем текст
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  &.${cls.sidebarBlockIsResizing} {
    & .${cls.separatorButton}:before {
      background-color: ${() => outlineSolidSecondaryHover};
    }
  }

  .${cls.sidebarBlock} {
    z-index: 0;
    align-self: start;
    background-color: ${() => surfaceSolidCard};
    box-shadow: ${() => shadowDownSoftS};
    ${media.up('xl')(sidebarUp1920MediaStyles)};
  }
  // для предотвращения сжатия внутр контента sidebar при открытии и закрытии
  .${cls.sidebarIsClosingOrClosedOrOpening} > * {
    width: var(${c.sidebarWidthInPxVar});
  }

  ${({ $insidePageLayout, $sidebarIsClosed }) =>
    $insidePageLayout &&
    ($sidebarIsClosed
      ? `margin-right: 0;`
      : `
    margin-right: calc(-1 * var(--page-layout-padding-inline, 32px));

    ${media.down('l')`
      margin-right: calc(-1 * var(--page-layout-padding-inline, 24px));
    `}
  `)}

  ${({ $css }) => $css}
`;
