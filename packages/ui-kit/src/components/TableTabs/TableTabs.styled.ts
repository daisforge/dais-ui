import { Box } from '@ui-kit/components/Box';
// Тайминги берём из общего чанка TableCanvasSharedConstants, а НЕ из TableCanvas
import {
  COLLAPSE_DECOR_DELAY,
  DURATION
} from '@ui-kit/components/TableCanvasSharedConstants';
import { outlineSolidPrimary, surfaceSolidCard } from '@ui-kit/tokens';
import styled from 'styled-components';

import { tableTabsClassNames as cls } from './TableTabs.classNames';
import {
  TABLE_BORDER_RADIUS,
  TABS_CONTAINER_PADDING,
  TABS_HEIGHT_XS
} from './TableTabs.constants';
import { TableTabsSize } from './TableTabs.types';

// Фиксируем высоту блоков табов в xs ровно под высоту контрл-блока xs.
// Без этого высота плавает от контента и border, получается 32.9 вместо 32.
// box-sizing border-box, чтобы 1px border входил внутрь, а не сверху.
const fixedHeightXs = (size?: TableTabsSize) =>
  size === 'xs'
    ? {
        boxSizing: 'border-box' as const,
        height: `${TABS_HEIGHT_XS}px`,
        maxHeight: `${TABS_HEIGHT_XS}px`
      }
    : {};

export const StyledCollapseBlock = styled.div<{
  $collapsed?: boolean;
  $size?: TableTabsSize;
}>(({ $collapsed, $size }) => {
  // Декор кромки переключаем с задержкой при сворачивании (ждём, пока контент
  // табов схлопнется и бар станет нижней кромкой свёрнутой карточки) и
  // мгновенно при разворачивании.
  const delay = $collapsed ? COLLAPSE_DECOR_DELAY : 0;
  return {
    display: 'flex',
    alignItems: 'center',
    paddingInline: `10px ${TABS_CONTAINER_PADDING}px`,
    border: `1px solid ${outlineSolidPrimary}`,
    // Нижний бордер держим шириной 0 (нет лишней высоты и нет линии на стыке
    // с табами). Включается в 1px только когда бар стал нижней кромкой — и
    // с задержкой, уже ПОСЛЕ схлопывания, поэтому переходной двойной тёмной
    // линии не возникает.
    borderBottomWidth: $collapsed ? '1px' : 0,
    borderRadius: $collapsed
      ? `${TABLE_BORDER_RADIUS}px`
      : `${TABLE_BORDER_RADIUS}px ${TABLE_BORDER_RADIUS}px 0px 0px`,
    transition: `border-radius 0s linear ${delay}s, border-bottom-width 0s linear ${delay}s`,
    ...fixedHeightXs($size)
  };
});

export const StyledTabsRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%'
});

// Обёртка для rightSlot (в ряду табов и над табами в коллапсинге).
// alignSelf stretch растягивает обёртку на всю высоту строки, а сама
// строка центрирует контент. Так кастомный слот может занять полную высоту.
export const StyledRightSlot = styled.div({
  marginLeft: 'auto',
  alignSelf: 'stretch',
  display: 'flex',
  alignItems: 'center'
});

export const StyledTabsContainer = styled.div<{
  $maxWidth?: string;
  $hasCollapsing?: boolean;
  $size?: TableTabsSize;
}>(({ $hasCollapsing, $size }) => ({
  border: `1px solid ${outlineSolidPrimary}`,
  borderBottom: 'none',
  borderRadius: $hasCollapsing
    ? '0px'
    : `${TABLE_BORDER_RADIUS}px ${TABLE_BORDER_RADIUS}px 0px 0px`,
  paddingInline: `${TABS_CONTAINER_PADDING}px`,
  '& [role="tablist"] > div': {
    marginBlock: 0,
    paddingBlock: 0
  },
  ...fixedHeightXs($size)
}));

export const StyledTabsAndPanelsContainer = styled(Box)<{
  $fullScreened?: boolean;
  $isCollapsed?: boolean;
}>`
  background-color: ${() => surfaceSolidCard};
  border-radius: ${() => `${TABLE_BORDER_RADIUS}px`};
  transition: height ${DURATION}s ease, max-height ${DURATION}s ease;
  ${({ $isCollapsed }) => $isCollapsed && 'overflow: hidden;'}
`;

export const StyledCollapsibleContent = styled.div<{
  $isCollapsed?: boolean;
}>`
  transition: max-height ${DURATION}s ease;
  max-height: ${({ $isCollapsed }) => ($isCollapsed ? '0px' : '200vh')};
  overflow: hidden;
`;

export const StyledPanelContainer = styled(Box)({
  [`&.${cls.tabPanel}:not(:has(> .rdg-container-all))`]: {
    border: `1px solid ${outlineSolidPrimary}`,
    borderRadius: '0px 0px 8px 8px'
  }
});
