import { Checkbox } from '@ui-kit/components/Checkbox';
import { s } from '@ui-kit/constants';
import styled, { css } from 'styled-components';

import { tableSidebarFilterBlockClassNames as cls } from './SideBarFilter.classnames';

const C = {
  spaceX8: () => s.x8,
  spaceX4: () => s.x4
};

export const SidebarFiltersStyled = styled.div<{ $isEmptySearch?: boolean }>`
  height: 100%;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  gap: ${C.spaceX8};
  overflow-x: hidden;
  overflow-y: auto;

  ${({ $isEmptySearch }) =>
    $isEmptySearch &&
    css`
      justify-content: center;
    `}
`;

export const SidebarFilterContainerStyled = styled.div<{
  $isEmptySearch?: boolean;
}>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  & .${cls.tableSidebarFilterSearchBlock} {
    margin-bottom: ${C.spaceX8};
  }

  & .${cls.tableSidebarFilterItem} {
    display: flex;
    flex-direction: column;
    gap: ${C.spaceX4};
    min-width: 0;
  }

  && .${cls.tableSidebarFilterLabel} {
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
  }
`;

export const SidebarFilterConfirmOrReset = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${C.spaceX8};
  gap: ${C.spaceX4};
`;

export const SidebarFilterConfirmOrResetRightSide = styled.div`
  display: flex;
  gap: ${C.spaceX4};
`;

export const CheckBoxAllSelected = styled(Checkbox);
