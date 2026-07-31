import { Box } from '@ui-kit/components/Box';
import { bodySBold, bodyXSBold } from '@ui-kit/tokens';
import { getTextWidth } from '@ui-kit/utils';
import styled, { css, CSSObject } from 'styled-components';

import {
  COLLAPSE_DECOR_DELAY,
  COLLAPSE_DECOR_FADE,
  COLORS,
  DURATION,
  HEIGHT_CONTROL_BLOCK,
  TABLE_BORDER_RADIUS,
} from '../../styles';
import { ActiveViewModsType, ControlBlockSize } from '../../types';
import { controlBlockClassNames as cls } from './control-block.classnames';
import { CONTROL_BLOCK } from './control-block.constants';

export const ControlBlockStyled = styled(Box)<{
  $activeView: ActiveViewModsType;
  $borderTopRounded: boolean;
  $isVisibleSearching: boolean | undefined;
  $calculatedSearchQuery: string | undefined;
  $placeholderSearchBlock: string;
  $collapsedTable: boolean;
  $containerPadding?: number;
  $containerHeight?: number;
  /**
   * Минимальная ширина поиска из состояния компрессии (обычно 250,
   * при сжатии в режиме редактирования 210). Без этого пропа шаг
   * компрессии "search 250 to 210" существует только в модели,
   * а DOM остаётся на захардкоженных 250px.
   */
  $searchMinWidth?: number;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${({ $containerHeight }) =>
    $containerHeight ?? HEIGHT_CONTROL_BLOCK}px;
  max-height: ${({ $containerHeight }) =>
    $containerHeight ?? HEIGHT_CONTROL_BLOCK}px;
  padding-inline: ${({ $containerPadding }) =>
    $containerPadding ?? CONTROL_BLOCK.paddingInline}px;

  /* Бордер всегда 1px (геометрия не меняется → нет дёрганья на 1px при
     сворачивании). Видимость нижнего бордера решаем ЦВЕТОМ ниже, с задержкой. */
  border: 1px solid;
  border-radius: ${({ $borderTopRounded, $collapsedTable }) => {
    const top = $borderTopRounded ? TABLE_BORDER_RADIUS : 0;
    const bottom = $collapsedTable ? TABLE_BORDER_RADIUS : 0;
    return css`
      ${top}px ${top}px ${bottom}px ${bottom}px
    `;
  }};
  /* Декор кромки (скругление нижних углов + цвет нижнего бордера) переключаем
     с задержкой при сворачивании (ждём, пока тело схлопнется) и мгновенно при
     разворачивании. Остальное продолжает ехать через all. */
  transition: ${({ $collapsedTable }) => {
    const delay = $collapsedTable ? COLLAPSE_DECOR_DELAY : 0;
    return css`
      all ${DURATION}s ease,
      border-radius 0s linear ${delay}s,
      border-bottom-color ${COLLAPSE_DECOR_FADE}s ease ${delay}s
    `;
  }};
  ${({ $activeView }) =>
    css({
      ...($activeView === 'rows' && {
        backgroundColor: COLORS.white,
        borderColor: COLORS.border,
      }),
      ...($activeView === 'cards' && {
        borderColor: 'transparent',
      }),
    })}
  /* Нижний бордер виден только когда контрл-блок — нижняя кромка свёрнутой
     карточки (и только в rows-виде). В остальных случаях прозрачный, поэтому
     на стыке с телом/соседним блоком нет лишней линии. */
  border-bottom-color: ${({ $collapsedTable, $activeView }) =>
    $collapsedTable && $activeView === 'rows' ? COLORS.border : 'transparent'};

  overflow-y: hidden;
  overflow-x: auto;

  ${({ $isVisibleSearching, $calculatedSearchQuery, $searchMinWidth }) =>
    $isVisibleSearching &&
    css`
      justify-content: unset;

      & .${cls.searchControlBlock} {
        padding-inline: 8px;
        ${() => {
          const { font, indent, letterSpacing } = CONTROL_BLOCK.searching;
          const text = $calculatedSearchQuery || '';
          const textWidth = getTextWidth(text, font, letterSpacing);

          if (!$calculatedSearchQuery || $calculatedSearchQuery.length === 0) {
            return css`
              width: 100%;
              min-width: ${$searchMinWidth ?? 250}px;
            `;
          }
          const currentIndent = indent;
          return css`
            width: min(calc(${textWidth + 25}px + ${currentIndent}px), 100%);
            min-width: 40px;
          `;
        }}
      }

      & .${cls.rightControlBlock} {
        margin-left: auto;
      }
    `}
`;
export const LefSideStyled = styled(Box).attrs({
  className: cls.leftControlBlock,
})<{
  $gap?: number;
  $paddingRight?: number;
}>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: ${({ $gap }) => ($gap != null ? `${$gap}px` : undefined)};
  padding-right: ${({ $paddingRight }) =>
    $paddingRight != null ? `${$paddingRight}px` : undefined};
`;

export const CenteredItem = styled.div`
  display: flex;
  align-items: center;
`;

const INLINE_TITLE_TYPOGRAPHY: Record<ControlBlockSize, CSSObject> = {
  m: bodySBold as unknown as CSSObject,
  s: bodySBold as unknown as CSSObject,
  xs: bodyXSBold as unknown as CSSObject,
};

export const InlineTitleText = styled.span<{ $size: ControlBlockSize }>`
  ${({ $size }) => css(INLINE_TITLE_TYPOGRAPHY[$size])}
  flex-shrink: 0;
  padding-inline: 8px;
`;

export const RightButtonsContainer = styled.div<{
  $gap?: number;
  $paddingInline?: number;
}>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => ($gap != null ? `${$gap}px` : undefined)};
  padding-inline: ${({ $paddingInline }) =>
    $paddingInline != null ? `${$paddingInline}px` : undefined};
`;
