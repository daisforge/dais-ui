import { Box } from '@ui-kit/components/Box';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import {
  outlineSolidPrimary,
  spacing4x,
  spacing6x,
  spacing8x,
  surfaceSolidCard,
} from '@ui-kit/tokens';
import styled, { css, keyframes } from 'styled-components';

import { TABLE_BORDER_RADIUS } from '../../styles/styles.constants';
import { SIDEBAR_DURATION } from '../constants';
import { tableSidebarClassNames as cls } from './TableSidebar.classnames';

const transitions = `all ${SIDEBAR_DURATION}s ease`;

export const tabAnimation = keyframes`
  from {  opacity: 0; }
  to {  opacity: 1; }
`;

const SidebarContainerRadius = (
  borderTopRightRadiusRounded: boolean | undefined,
  borderBottomRightRadiusRounded: boolean | undefined,
) => {
  const topRightRadius = borderTopRightRadiusRounded ? TABLE_BORDER_RADIUS : 0;
  const bottomRightRadius = borderBottomRightRadiusRounded
    ? TABLE_BORDER_RADIUS
    : 0;

  return css`
    border-radius: 0px ${topRightRadius}px ${bottomRightRadius}px 0px;
  `;
};

export const StyledTitleBox = styled(Box)({
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '28px',
  letterSpacing: '0px',
  gap: '16px',
  minWidth: '0px',
  marginRight: '16px',
});

export const SidebarContainer = styled(Box)<{
  isOpen: boolean;
  $contentWidth: number;
  $borderRightTopRadiusRounded: boolean | undefined;
  $borderRightBottomRadiusRounded: boolean | undefined;
}>`
  --table-sidebar-toggle-panel-width: 44px;
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid ${() => outlineSolidPrimary};
  border-left: none;
  box-sizing: border-box;

  overflow-x: hidden;
  transition: ${transitions};
  will-change: width, min-width;
  background-color: ${() => surfaceSolidCard};
  max-width: calc(
    ${({ $contentWidth }) => $contentWidth}px +
      var(--table-sidebar-toggle-panel-width)
  );

  & .${cls.tableSidebarCloseButton} {
    width: 32px;
    aspect-ratio: 1 / 1;
    margin-left: auto;
  }

  ${({ isOpen, $contentWidth }) =>
    isOpen
      ? css`
          flex-grow: 1;
          width: calc(
            ${$contentWidth}px + var(--table-sidebar-toggle-panel-width)
          );
          min-width: calc(
            ${$contentWidth}px + var(--table-sidebar-toggle-panel-width)
          );
        `
      : css`
          width: var(--table-sidebar-toggle-panel-width);
          min-width: var(--table-sidebar-toggle-panel-width);
        `}
  ${({ $borderRightTopRadiusRounded, $borderRightBottomRadiusRounded }) =>
    SidebarContainerRadius(
      $borderRightTopRadiusRounded,
      $borderRightBottomRadiusRounded,
    )}
`;

export const SidebarTogglePanel = styled(Box)<{ isOpen: boolean }>`
  width: var(--table-sidebar-toggle-panel-width);
  min-width: var(--table-sidebar-toggle-panel-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-left: 1px solid ${outlineSolidPrimary};

  background-color: ${surfaceSolidCard};
  padding: 0;
  margin-bottom: ${spacing8x};
  /* margin-top: ${spacing6x}; */
  margin-top: ${spacing8x};
  gap: ${spacing4x};

  & .${cls.tableSidebarToggleButton} {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & .${cls.tableSidebarToggleIcon} {
      transition: ${transitions};
      transform: ${({ isOpen }) => (isOpen ? `scaleX(-1)` : ``)};
    }
  }
`;

export const SidebarContent = styled(Box)<{
  isOpen: boolean;
  $contentWidth: number;
}>`
  min-width: ${({ $contentWidth }) => `${$contentWidth}px`};
  padding: ${spacing8x};
  flex-grow: 1;

  transition: ${transitions};
  overflow-y: auto;

  & .${cls.tableSidebarContent} {
    overflow: hidden;
    height: 100%;
    opacity: 0;
    transition: ${transitions};
    animation: ${tabAnimation};
    animation-delay: 0.1s;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${({ isOpen }) =>
    isOpen
      ? `
        pointer-events: auto;
      `
      : `
        pointer-events: none;
      `}
`;

export const SidebarLayout = styled.div`
  --table-sidebar-layout-header: 32px;
  --table-sidebar-layout-header-margin-bottom: 16px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SidebarLayoutHeader = styled.div`
  height: var(--table-sidebar-layout-header);
  display: flex;
  align-items: center;
  margin-bottom: var(--table-sidebar-layout-header-margin-bottom);
`;

export const SidebarLayoutContent = styled.div`
  height: calc(
    100% - var(--table-sidebar-layout-header) -
      var(--table-sidebar-layout-header-margin-bottom)
  );
  display: flex;
  flex-direction: column;
`;

export const TabItemStyled = styled(TabItem)`
  width: var(--table-sidebar-toggle-panel-width, 44px);
  height: 40px;
  &&::after {
    left: -1px;
  }
`;

export const TabsStyled = styled(Tabs)`
  width: 100%;
  flex-direction: column;
  & > button {
    display: none;
  }
  & .tabs-clip-show-all {
    padding: 0;
  }
  &::after {
    width: 0;
  }
`;
