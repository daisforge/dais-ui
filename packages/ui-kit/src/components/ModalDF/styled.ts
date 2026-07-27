import { br, breakP, s } from '@ui-kit/constants';
import { Container } from '@ui-kit/layouts/Container';
import {
  bodyS,
  h4Bold,
  shadowUpSoftL,
  surfaceSolidCard,
  textPrimary,
  textSecondary
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { Box } from '../Box';
import { cls } from './classNames';

const C = {
  spaceX: () => s.x8,
  spaceY: () => s.x8,
  spaceX24: () => s.x24,
  spaceX8: () => s.x8,
  spaceX1: () => s.x1,
  spaceX12: () => s.x12,
  borderRadius: () => br.m,
  bg: () => surfaceSolidCard
};

export const StyledContainer = styled(Container).attrs({
  className: cls.root as string
})<{ $fullScreened: boolean }>`
  &,
  & * {
    box-sizing: border-box;
  }

  & {
    view-transition-name: ${cls.root};
    display: grid; // для появления скролла у нужного компонента (Main)

    min-width: 400px;
    max-width: calc(${breakP.xl - 32}px - 32px);
    max-height: calc(100vh - 32px);

    position: relative;
    background: ${C.bg};
    box-shadow: ${() => shadowUpSoftL};
    border-radius: ${C.borderRadius};
    ${() => bodyS}
    // для оберток компонента Container (для корректной высоты блока)
        & > div:not(.${cls.left}):not(.${cls.main}) {
      max-height: inherit;
    }

    &:not(:has(.${cls.left})) {
      .${cls.main} {
        margin-left: ${C.spaceX};
      }
    }

    ${({ $fullScreened }) =>
      $fullScreened &&
      css`
        width: calc(100vw - 32px);
        height: calc(100vh - 32px);
      `}
  }
`;

const leftAndMainYStyles = css`
  overflow: hidden;

  margin-block: ${C.spaceY};

  // отступы модального окна сверху и снизу
  max-height: calc(100% - ${C.spaceY} - ${C.spaceY});

  &:not(:has(.${cls.content})) {
    overflow-y: scroll;

    & .${cls.header} {
      position: sticky;
      background-color: ${C.bg};
      top: 0px;
    }
  }
`;

export const StyledLeft: typeof Box = styled(Box).attrs({
  className: cls.left as string
})`
  &.${cls.left} {
    margin-left: ${C.spaceX};
    ${leftAndMainYStyles}

    display: flex; // для корректного появления скролла у контента блока (у контента flex-grow:1;)
    flex-direction: column;

    & .${cls.header} {
      & .${cls.serviceButtons} {
        display: none;
      }
    }

    & .${cls.content} {
    }
  }
`;

export const StyledMain: typeof Box = styled(Box).attrs({
  className: cls.main as string
})`
  &.${cls.main} {
    margin-right: ${C.spaceX};
    ${leftAndMainYStyles}

    height: 100%;
    /* border-radius: 0px ${C.borderRadius} ${C.borderRadius} 0px; */

    display: flex;
    flex-direction: column;
  }
`;

export const StyledHeader: typeof Box = styled(Box).attrs({
  className: cls.header as string
})`
  &.${cls.header} {
    flex-shrink: 0;
    height: fit-content;
    min-height: ${C.spaceX24};

    padding-bottom: ${C.spaceY};

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: ${C.spaceX12};

    & .${cls.headerTitlesContainer} {
      display: flex;
      gap: ${C.spaceX8};
      align-content: flex-start;
    }

    & .${cls.headerTitlesBox} {
      display: flex;
      flex-direction: column;
      row-gap: ${C.spaceX1};
      & .${cls.headerTitle} {
        padding: 0px;
        margin: 0px;
        color: ${() => textPrimary};
        ${() => h4Bold};
      }
      & .${cls.headerSubTitle} {
        padding: 0px;
        margin: 0px;
        color: ${() => textSecondary};
        ${() => bodyS};
      }
    }

    & .${cls.backIconButton} {
      flex-shrink: 0;
    }

    & .${cls.headerRightBlock} {
      display: flex;
      height: fit-content;
      align-items: center;

      margin-bottom: auto;
    }
  }
`;

export const StyledContent: typeof Box = styled(Box).attrs({
  className: cls.content as string
})`
  & {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const StyledMainFooter: typeof Box = styled(Box).attrs({
  className: cls.footer as string
})`
  &.${cls.footer} {
    flex-shrink: 0;
    height: fit-content;

    padding-top: ${C.spaceX};

    display: flex;
    justify-content: space-between;
  }
`;
