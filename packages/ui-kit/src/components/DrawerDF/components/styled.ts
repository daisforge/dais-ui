import { Drawer } from '@ui-kit/components/Drawer';
import { s } from '@ui-kit/constants';
import {
  borderRadiusL,
  borderRadiusM,
  borderRadiusS,
  borderRadiusXl,
  borderRadiusXs,
  surfaceSolidCard,
  surfaceTransparentSecondary
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { drawerDFClassNames as cls } from '../classNames';
import { DrawerDFPropsForStyles } from '../types';

export const c = {
  drawerPadding: 16,
  drawerOffset: 16,
  gap: 8,
  unknownDelta: 32,
  brXS: () => borderRadiusXs,
  brS: () => borderRadiusS,
  brM: () => borderRadiusM,
  brL: () => borderRadiusL,
  brXL: () => borderRadiusXl,
  spaceX2: () => s.x2,
  spaceX4: () => s.x4,
  spaceX8: () => s.x8,
  spaceX6: () => s.x6,

  brContent: ({ $header, $footer }: { $header: boolean; $footer: boolean }) =>
    `${$header ? '0px' : c.brM()} ${$header ? '0px' : c.brM()} ${
      $footer ? '0px' : c.brM()
    } ${$footer ? '0px' : c.brM()}`
};

export const drawerOffsetCloseBtn = {
  multiply: '-64px',
  default: '-52px'
};

export const StyledDrawer = styled(Drawer)<DrawerDFPropsForStyles>`
  & .${cls.drawerPanelRoot} {
    --drawer-padding-root: ${c.spaceX8};
    --drawer-padding-block-multiply-mode: ${c.spaceX4};
    --drawer-close-button-left: ${drawerOffsetCloseBtn.default};
    --drawer-margin-bottom-header-top: ${c.spaceX4};
    min-width: 576px;
    position: relative;
    padding: 0;
    background-color: ${() => surfaceSolidCard};
    border-radius: ${c.brM};

    & > div {
      max-height: calc(100vh - 32px);
      height: calc(100vh - 32px);
    }

    &
      .${cls.drawerCloseBox},
      .${cls.drawerHeader},
      .${cls.drawerContent},
      .${cls.drawerFooter} {
      background-color: ${() => surfaceSolidCard};
    }
    & .${cls.drawerCloseBox} {
      position: absolute;
      top: 0px;
      left: var(--drawer-close-button-left);

      height: 40px;
      aspect-ratio: 1;
      border-radius: 50%;
    }

    & .${cls.drawerHeaderContainer} {
      display: flex;
      flex-direction: column;
      padding-bottom: 16px;
    }

    & .${cls.drawerHeaderTop} {
      margin-bottom: var(--drawer-margin-bottom-header-top);
    }

    & .${cls.drawerHeaderTitleBlock} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: ${c.spaceX4};
    }

    & .${cls.drawerHeaderTitleContainer} {
      display: flex;
      gap: ${c.spaceX6};
      align-items: center;
    }

    & .${cls.drawerHeader} {
      flex-shrink: 0;
      padding-inline: var(--drawer-padding-root);
      padding-top: var(--drawer-padding-root);
      border-radius: ${c.brM} ${c.brM} 0px 0px;
    }
    & .${cls.drawerContentContainer} {
      flex-grow: 1;
      display: flex;
      overflow-y: auto;
      & .${cls.drawerContent} {
        padding-inline: var(--drawer-padding-root);
        border-radius: ${c.brContent};
        overflow-y: hidden;
        padding-top: ${({ $header }) => ($header ? '0' : '16px')};
        padding-bottom: ${({ $footer }) => ($footer ? '0px' : '16px')};
      }

      & .${cls.drawerContentInner} {
        overflow-y: auto;
        height: 100%;
        /* border-radius: ${c.brXS}; */
        padding-right: ${c.spaceX2};
      }
    }

    & .${cls.drawerFooter} {
      flex-shrink: 0;
      padding-inline: var(--drawer-padding-root);
      padding-bottom: var(--drawer-padding-root);
      padding-top: 16px;
      border-radius: 0px 0px ${c.brM} ${c.brM};
    }

    ${({ $multipleContents }) =>
      $multipleContents &&
      css`
        & {
          --drawer-padding-root: ${c.spaceX8};
          min-width: 576px;
          padding: ${c.drawerPadding}px;
          background-color: ${() => surfaceTransparentSecondary};
          border-radius: ${c.brXL};

          & > div {
            gap: ${c.gap}px;
            /* max-height: calc(100vh - 32px - 24px); */
            /*height: calc(100vh - 32px - 24px); */
            height: 100%;
          }
          & .${cls.drawerCloseBox} {
            --drawer-close-button-left: ${drawerOffsetCloseBtn.multiply};
            top: -16px;
          }

          & .${cls.drawerHeader},.${cls.drawerFooter} {
            border-radius: ${c.brXS};

            height: fit-content;
          }

          & .${cls.drawerHeaderContainer} {
            padding-bottom: 0;
          }

          & .${cls.drawerHeader} {
            // Стили применяются когда в заголовке есть хотя бы один из элементов:
            // - подзаголовок (drawerHeaderSubtitle)
            // - непустой контейнер заголовка (drawerHeaderTitleContainer)
            // - правый блок (drawerHeaderRightBlock)
            &:has(
                :is(
                    .${cls.drawerHeaderSubtitle},
                      .${cls.drawerHeaderTitleContainer}:not(:empty),
                    .${cls.drawerHeaderRightBlock}
                  )
              ) {
              // Устанавливаем вертикальные отступы:
              // - 16px сверху (x8)
              // - 0px снизу
              --drawer-padding-block-multiply-mode: ${c.spaceX8} 0px;
            }

            // Стили применяются когда:
            // - НЕТ подзаголовка
            // - НЕТ правого блока
            // - ЕСТЬ пустой контейнер заголовка
            &:not(:has(.${cls.drawerHeaderSubtitle})):not(
                :has(.${cls.drawerHeaderRightBlock})
              ):has(.${cls.drawerHeaderTitleContainer}:empty) {
              :is(.${cls.drawerHeader}) {
                // Убираем все отступы и margins так как заголовок пустой
                --drawer-padding-block-multiply-mode: 0;
                --drawer-margin-bottom-header-top: 0;
              }
            }

            // Стили применяются когда:
            // - НЕТ подзаголовка
            // - НЕТ правого блока
            // - ЕСТЬ НЕпустой контейнер заголовка
            &:not(:has(.${cls.drawerHeaderSubtitle})):not(
                :has(.${cls.drawerHeaderRightBlock})
              ):has(.${cls.drawerHeaderTitleContainer}:not(:empty)) {
              // Устанавливаем вертикальные отступы по 8px сверху и снизу
              --drawer-padding-block-multiply-mode: ${c.spaceX4} ${c.spaceX4};
              // Убираем margin снизу
              --drawer-margin-bottom-header-top: 0;
            }

            padding-inline: var(--drawer-padding-root);
            padding-block: var(--drawer-padding-block-multiply-mode);
          }
          & .${cls.drawerContentContainer} {
            flex-grow: 1;
            display: flex;
            gap: ${c.gap}px;

            & .${cls.drawerContent} {
              flex-grow: 1;
              overflow-y: hidden;
              padding: 16px;
              border-radius: ${c.brXS};
            }
          }
          & .${cls.drawerFooter} {
            border-top: 0px;
          }
        }
      `};
  }
`;
