import type { ButtonCompProps } from '@ui-kit/components/Button';
import { Button } from '@ui-kit/components/Button';
import { Divider } from '@ui-kit/components/Divider';
import { EmbedIconButton } from '@ui-kit/components/EmbedIconButton';
import { LinkButton } from '@ui-kit/components/LinkButton';
import { s } from '@ui-kit/constants';
import { IconDoubleDisclosureUp } from '@ui-kit/icons';
import {
  outlineSolidPrimary,
  shadowDownHardS,
  spacing10x,
  surfaceSolidCard
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import type {
  LinkButtonProps,
  MassActionsSize,
  StyledButtonProps
} from './types';

// Имя для View Transition API
const MASS_ACTIONS_VIEW_TRANSITION_NAME = 'mass-actions-panel';

const C = {
  surfaceSolidCard: () => surfaceSolidCard,
  outlineSolidPrimary: () => outlineSolidPrimary
};

const StyledLinkButton = styled(LinkButton)({
  paddingInline: s.x8
}) as typeof LinkButton;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getButtonWithDropdown = <T extends React.ComponentType<any>>(
  BaseComponent: T
) => styled(BaseComponent)<StyledButtonProps>`
  ${({ $hasDropdown }: StyledButtonProps) =>
    $hasDropdown &&
    css`
      & > div > span:last-child {
        max-width: fit-content;
        min-width: unset;
      }
    `}
  ${({ $buttonStyles }: StyledButtonProps) =>
    $buttonStyles &&
    css`
      ${$buttonStyles}
    `}
`;

// Стилизованные компоненты с поддержкой dropdown
export const StyledButtonWithDropdown = getButtonWithDropdown(
  Button
) as React.ComponentType<ButtonCompProps & StyledButtonProps>;
export const StyledLinkButtonWithDropdown = getButtonWithDropdown(
  StyledLinkButton
) as React.ComponentType<LinkButtonProps & StyledButtonProps>;

export const MassActionsContainer = styled.div<{
  $isCollapsed?: boolean;
  $size?: MassActionsSize;
  $translateX?: number;
  $isInitialCalculationComplete?: boolean;
  $bottom?: number;
}>`
  position: absolute;
  bottom: ${({ $bottom = 24 }) => $bottom}px;
  left: 50%;
  transform: ${({ $translateX }) =>
    $translateX !== undefined
      ? `translateX(calc(-50% + ${$translateX}px))`
      : 'translateX(-50%)'};
  background: ${C.surfaceSolidCard};
  border: 2px solid ${C.outlineSolidPrimary};
  padding: ${({ $isCollapsed, $size }) => {
    const xs = $size === 'xs';
    if ($isCollapsed) {
      // свёрнутая: БЕЗ вертикального паддинга — высота (44px) собирается сама из контента
      return xs ? `0px 2px 0px 12px` : `0px 10px 0px 24px`;
    }

    return xs ? `4px 2px 4px 12px` : `12px 8px 12px 24px`;
  }};
  border-radius: 14px;
  display: block;
  width: fit-content;
  /* Используем max-width для анимации ширины (width: auto не анимируется) */
  max-width: ${({ $isCollapsed }) => ($isCollapsed ? '350' : '2000px')};
  view-transition-name: ${MASS_ACTIONS_VIEW_TRANSITION_NAME};
  /* Скрываем панель до завершения предварительного расчета компрессии */
  opacity: ${({ $isInitialCalculationComplete }) =>
    $isInitialCalculationComplete ? 1 : 0};
  /* Плавная анимация для всех изменений: padding, transform, max-width (размер и позиция одновременно) */
  transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in-out;
  will-change: padding, transform, max-width;
  box-shadow: ${shadowDownHardS};
`;
export const MassActionsContent = styled.div<{
  $isCollapsed?: boolean;
  $isCompact?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ $isCollapsed, $isCompact }) => {
    if (!$isCollapsed) return '0px';
    // Свёрнутый режим: в компактной (XS) панели зазор счётчик↔стрелка меньше.
    return $isCompact ? '4px' : '8px';
  }};
`;

export const ActionsWrapper = styled.div<{ $isCollapsed: boolean }>`
  display: flex;
  max-height: ${({ $isCollapsed }) => ($isCollapsed ? '0' : '40px')};
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: flex-end;
  overflow: hidden;
  min-width: 0;
  /* Плавная анимация - контент остается в DOM для анимации */
  transition: max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    max-width 0.1s cubic-bezier(0.4, 0, 0.2, 1),
    margin 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    gap 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $isCollapsed }) =>
    $isCollapsed
      ? css`
          opacity: 0;
          max-width: 0;
          margin: 0;
          gap: 0;
        `
      : css`
          opacity: 1;
          max-width: 2000px;
        `}
`;

/**
 * Скрытый контейнер для измерения всех кнопок - должен быть вне ActionsWrapper
 *
 * Зачем нужен этот контейнер:
 * - Кнопки, которые скрыты в дропдауне, не рендерятся в основном DOM
 * - Чтобы измерить реальную ширину кнопки, она должна быть в DOM и иметь размеры
 * - Этот контейнер рендерит ВСЕ кнопки всегда, но выносит их за экран (left: -9999px)
 * - Это позволяет измерять ширину всех кнопок, даже тех, что сейчас в дропдауне
 * - Использую position: absolute с left: -9999px вместо visibility: hidden,
 *   так как visibility: hidden может мешать корректному измерению размеров
 */
export const HiddenButtonsMeasurementContainer = styled.div`
  position: absolute;
  left: -9999px;
  top: 0;
  display: flex;
  gap: 4px;
  align-items: center;
  z-index: -1;
  pointer-events: none;
  width: auto;
  height: auto;
`;

export const ButtonMeasurementWrapper = styled.div`
  display: inline-flex;
  width: auto;
  height: auto;
`;

export const VisibleButtonWrapper = styled.div`
  margin-left: 0;
`;

export const CollapseIcon = styled(IconDoubleDisclosureUp)<{
  $isCollapsed: boolean;
}>`
  transition: all 0.3s;
  transform: ${({ $isCollapsed }) =>
    $isCollapsed ? 'scaleY(1)' : 'scaleY(-1)'};
`;

export const CollapseButton = styled(EmbedIconButton)<{
  $isCollapsed: boolean;
  $isCompact: boolean;
}>`
  padding: ${({ $isCompact }) => {
    // XS-панель: меньший паддинг кнопки сворачивания в ОБОИХ состояниях
    // (развёрнутом и свёрнутом) — иначе в свёрнутом кнопка вырастала.
    if ($isCompact) {
      return s.x8;
    }

    return spacing10x;
  }};
`;

export const MoreButton = styled(Button)`
  margin-left: 0;
`;

export const StyledDivider = styled(Divider)`
  padding-left: 1px;
  margin-left: 12px;
  /* справа 8: + gap 4 контейнера = 12 до первой кнопки */
  margin-right: 8px;
`;
