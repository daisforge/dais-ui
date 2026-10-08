import { Box } from '@ui-kit/components/Box';
import { TabItem, Tabs } from '@ui-kit/components/Tabs';
import {
  outlineSolidPrimary,
  spacing4x,
  spacing8x,
  surfaceSolidCard,
} from '@ui-kit/tokens';
import styled, { css, keyframes } from 'styled-components';

import { TABLE_BORDER_RADIUS } from '../../styles/styles.constants';
import { SIDEBAR_DURATION, SIDEBAR_TABS_WIDTH, toCssSize } from '../constants';
import { tableSidebarClassNames as cls } from './TableSidebar.classnames';

const sizeTransitions = `width ${SIDEBAR_DURATION}s ease, min-width ${SIDEBAR_DURATION}s ease`;

export const tabAnimation = keyframes`
  from {  opacity: 0; }
  to {  opacity: 1; }
`;

const SidebarContainerRadius = (
  side: 'left' | 'right',
  borderTopRightRadiusRounded: boolean | undefined,
  borderBottomRightRadiusRounded: boolean | undefined,
) => {
  const topRightRadius = borderTopRightRadiusRounded ? TABLE_BORDER_RADIUS : 0;
  const bottomRightRadius = borderBottomRightRadiusRounded
    ? TABLE_BORDER_RADIUS
    : 0;

  return css`
    border-radius: ${side === 'left'
      ? `${topRightRadius}px 0px 0px ${bottomRightRadius}px`
      : `0px ${topRightRadius}px ${bottomRightRadius}px 0px`};
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
  $side: 'left' | 'right';
  isOpen: boolean;
  $contentWidth: string | number;
  $preserveMinimumWidth?: boolean;
  $borderRightTopRadiusRounded: boolean | undefined;
  $borderRightBottomRadiusRounded: boolean | undefined;
}>`
  --table-sidebar-toggle-panel-width: ${SIDEBAR_TABS_WIDTH}px;
  display: flex;
  flex-direction: ${({ $side }) => ($side === 'left' ? 'row' : 'row-reverse')};
  flex: 0 1 auto;
  min-height: 0;
  border: 1px solid ${() => outlineSolidPrimary};
  ${({ $side }) =>
    $side === 'left' ? 'border-right: none;' : 'border-left: none;'}
  box-sizing: border-box;

  overflow-x: hidden;
  transition: ${sizeTransitions};
  will-change: width, min-width;
  background-color: ${() => surfaceSolidCard};
  max-width: 100%;

  & .${cls.tableSidebarCloseButton} {
    width: 32px;
    aspect-ratio: 1 / 1;
    margin-left: auto;
  }

  ${({ isOpen, $contentWidth, $preserveMinimumWidth }) =>
    isOpen
      ? css`
          width: calc(
            ${toCssSize($contentWidth)} +
              var(--table-sidebar-toggle-panel-width)
          );
          /* Одну правую панель не сжимаем: сохраняем прежнюю геометрию. */
          min-width: ${$preserveMinimumWidth
            ? `calc(${toCssSize(
                $contentWidth,
              )} + var(--table-sidebar-toggle-panel-width))`
            : 'var(--table-sidebar-toggle-panel-width)'};
        `
      : css`
          width: var(--table-sidebar-toggle-panel-width);
          min-width: var(--table-sidebar-toggle-panel-width);
        `}
  ${({
    $side,
    $borderRightTopRadiusRounded,
    $borderRightBottomRadiusRounded,
  }) =>
    SidebarContainerRadius(
      $side,
      $borderRightTopRadiusRounded,
      $borderRightBottomRadiusRounded,
    )}
`;

export const SidebarTogglePanel = styled(Box)<{
  isOpen: boolean;
  $side: 'left' | 'right';
}>`
  width: var(--table-sidebar-toggle-panel-width);
  min-width: var(--table-sidebar-toggle-panel-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  ${({ $side }) =>
    $side === 'left'
      ? css`
          border-right: 1px solid ${outlineSolidPrimary};
        `
      : css`
          border-left: 1px solid ${outlineSolidPrimary};
        `}

  background-color: ${surfaceSolidCard};
  padding: 0;
  margin-bottom: ${spacing8x};
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
      transition: transform ${SIDEBAR_DURATION}s ease;
      transform: ${({ isOpen }) => (isOpen ? `scaleX(-1)` : ``)};
    }
  }
`;

export const SidebarContent = styled(Box)<{
  isOpen: boolean;
  $contentWidth?: string | number;
}>`
  min-width: 0;
  width: calc(100% - var(--table-sidebar-toggle-panel-width));
  box-sizing: border-box;
  flex: 1 1 0;
  padding: ${spacing8x};
  ${({ isOpen }) => !isOpen && 'padding-inline: 0;'}

  transition: padding-inline ${SIDEBAR_DURATION}s ease;
  /* ширину схлопываем только после анимации закрытия, чтобы контент не дёргался */
  transition-delay: ${({ isOpen }) => (isOpen ? '0s' : `${SIDEBAR_DURATION}s`)};
  overflow-y: auto;

  & .${cls.tableSidebarContent} {
    overflow: hidden;
    height: 100%;
    opacity: 0;
    ${({ isOpen }) =>
      isOpen
        ? css`
            visibility: visible;
            animation: ${tabAnimation};
            animation-delay: 0.1s;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
          `
        : css`
            /* контент прячем только ПОСЛЕ анимации закрытия,
               иначе он исчезает раньше, чем сайдбар схлопнется */
            opacity: 1;
            visibility: hidden;
            animation: none;
            transition: visibility 0s linear ${SIDEBAR_DURATION}s;
          `}
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
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const SidebarLayoutHeader = styled.div`
  height: var(--table-sidebar-layout-header);
  display: flex;
  align-items: center;
  margin-bottom: var(--table-sidebar-layout-header-margin-bottom);
  flex-shrink: 0;
`;

export const SidebarLayoutContent = styled.div`
  height: calc(
    100% - var(--table-sidebar-layout-header) -
      var(--table-sidebar-layout-header-margin-bottom)
  );
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

export const TabItemStyled = styled(TabItem)`
  width: var(--table-sidebar-toggle-panel-width, ${SIDEBAR_TABS_WIDTH}px);
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
