import { Badge, type BadgeCompProps } from '@ui-kit/components/Badge';
import { br, s } from '@ui-kit/constants';
import {
  bodyS,
  h4Bold,
  outlineSolidPrimary,
  surfaceSolidCard,
  textPrimary,
  textSecondary
} from '@ui-kit/tokens';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation
} from 'styled-components';

import { Box } from '../Box';
import { widgetClassNames as cls } from './Widget.classNames';
import { StyledBadgeProps } from './Widget.types';

const C = {
  spaceY: () => s.x8,
  spaceX: () => s.x8,
  spaceX12: () => s.x12,
  spaceX2: () => s.x2,
  spaceX4: () => s.x4,
  spaceX8: () => s.x8,
  spaceX16: () => s.x16,
  borderRadius: () => br.l,
  bg: () => surfaceSolidCard,
  textSecondary: () => textSecondary,
  bodyS: () => bodyS,
  textPrimary: () => textPrimary,
  h4Bold: () => h4Bold
};

// const scrollbarStyles = (width = 8) => css`
//   &::-webkit-scrollbar {
//     width: ${width}px;
//     height: ${width}px;
//     background-color: transparent;

//     &-track {
//       background-color: transparent;
//     }

//     &-thumb {
//       background-color: #dadee8;
//       background-clip: content-box;
//       border-radius: 0px;
//       cursor: pointer;

//       &:hover {
//         background-color: #1717178f;
//         background-clip: content-box;
//       }

//       &:vertical {
//         border-left: ${width / 2}px solid transparent;
//       }

//       &:horizontal {
//         border-top: ${width / 2}px solid transparent;
//       }
//     }

//     &-corner {
//       border-bottom-right-radius: 50px;
//     }
//   }
// `;
export const StyledContainer = styled.div.attrs({
  className: cls.container as string
})<{ $css?: string | CSSObject | FlattenSimpleInterpolation }>`
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  margin-block: ${C.spaceY};

  // C.spaceY - отступы сверху и снизу (margin-block)
  max-height: calc(100% - ${C.spaceY} - ${C.spaceY});

  &:not(:has(.${cls.content})) {
    overflow-y: scroll;

    & .${cls.header} {
      position: sticky;
      background-color: ${C.bg};
      top: 0px;
    }
  }

  &.${cls.containerTypeSplitView} {
    & .${cls.header}, & .${cls.footer} {
      padding-right: ${C.spaceX16};
    }
    & .${cls.content} {
      margin-right: ${C.spaceX16};
    }
  }
  ${({ $css }) => $css}
`;

export const StyledHeader: typeof Box = styled(Box).attrs({
  className: cls.header as string
})<{
  dividerBottom?: boolean;
}>`
  &.${cls.header} {
    flex-shrink: 0;
    height: fit-content;
    padding-inline: ${C.spaceX};
    padding-bottom: ${C.spaceY};
    margin-bottom: ${C.spaceX4};

    ${({ dividerBottom }) =>
      dividerBottom &&
      css`
        border-bottom: 1px solid ${outlineSolidPrimary};
      `};

    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      '${cls.headerTitlesContainer} ${cls.headerRightBlock}'
      '${cls.headerBottomBlock} ${cls.headerBottomBlock}';
    column-gap: ${C.spaceX12};

    & .${cls.headerTitlesContainer} {
      grid-area: ${cls.headerTitlesContainer};
      display: flex;
      gap: ${C.spaceX8};
      align-content: flex-start;
    }

    & .${cls.headerTitlesBox} {
      display: flex;
      flex-direction: column;
      row-gap: ${C.spaceX2};
      & .${cls.headerTitle} {
        padding: 0px;
        margin: 0px;
        color: ${C.textPrimary};
        ${C.h4Bold};
        display: flex;
        align-items: center;
        gap: ${C.spaceX4};
      }
      & .${cls.headerSubTitle} {
        padding: 0px;
        margin: 0px;
        color: ${C.textSecondary};
        ${C.bodyS};
      }
    }

    & .${cls.backIconButton} {
      flex-shrink: 0;
    }

    & .${cls.headerRightBlock} {
      grid-area: ${cls.headerRightBlock};
      display: flex;
      height: fit-content;
      align-items: center;

      margin-bottom: auto;
    }

    & .${cls.headerBottomBlock} {
      grid-area: ${cls.headerBottomBlock};
      margin-top: ${C.spaceX};
    }
  }
`;

// TODO ресерч переезда на getCustomScrollbar
export const StyledContent: typeof Box = styled(Box).attrs({
  className: cls.content as string
})`
  & {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: ${br.xs};

    padding-left: ${C.spaceX};
    margin-right: ${C.spaceX};

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export const StyledFooter: typeof Box = styled(Box).attrs({
  className: cls.footer as string
})<{ dividerTop?: boolean }>`
  &.${cls.footer} {
    flex-shrink: 0;
    height: fit-content;
    ${({ dividerTop }) =>
      dividerTop &&
      css`
        border-top: 1px solid ${outlineSolidPrimary};
      `};
    padding-inline: ${C.spaceX};
    padding-top: ${C.spaceY};
    margin-top: ${C.spaceX4};

    display: grid;
    grid-template-columns: auto auto;

    grid-template-areas:
      '${cls.footerTopBlock} ${cls.footerTopBlock}'
      '${cls.footerLeft} ${cls.footerRight}';
    column-gap: ${C.spaceX12};

    .${cls.slotBlock} {
      grid-area: ${cls.footerTopBlock};
    }
    .${cls.footerTopBlock} {
      grid-area: ${cls.footerTopBlock};
      margin-bottom: ${C.spaceX};
    }
    .${cls.footerLeft} {
      justify-self: start;
      align-self: center;
      grid-area: ${cls.footerLeft};
    }
    .${cls.footerRight} {
      justify-self: end;
      grid-area: ${cls.footerRight};
    }
  }
`;

export const StyledBadge = styled(Badge).attrs({
  view: 'default' as BadgeCompProps['view']
})`
  align-self: flex-start;
  margin-top: ${(props: StyledBadgeProps) =>
    props.$badgeMarginTop ? `${props.$badgeMarginTop}px` : '0'};
` as React.ComponentType<StyledBadgeProps>;
