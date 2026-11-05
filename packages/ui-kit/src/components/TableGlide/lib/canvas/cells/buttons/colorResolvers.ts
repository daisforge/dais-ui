import {
  DISABLED_OPACITY,
  getButtonViewColors,
  getEmbedIconButtonViewColors,
  LEGACY_VARIANT_VIEW,
  resolveTokens,
} from './constants';
import type {
  ButtonVariant,
  ButtonView,
  EmbedViewColors,
  GlideThemeForRender,
  ResolvedColors,
  ViewColors,
} from './types';
import { withOpacity } from './utils';

/** Все цвета контрола на 40 %: недоступное состояние по правилу SDDS. */
function disabledColors(colors: ResolvedColors): ResolvedColors {
  return {
    bgColor: withOpacity(colors.bgColor, DISABLED_OPACITY),
    borderColor: withOpacity(colors.borderColor, DISABLED_OPACITY),
    textColor: withOpacity(colors.textColor, DISABLED_OPACITY),
    iconColor: withOpacity(colors.iconColor, DISABLED_OPACITY),
  };
}

/**
 * Цвета кнопки по её виду: покой или под курсором; недоступная кнопка
 * рисуется цветами покоя с непрозрачностью 40 % и на курсор не реагирует.
 */
export function resolveViewColors(
  viewColors: ViewColors,
  disabled: boolean,
  isHovered: boolean
): ResolvedColors {
  if (disabled) {
    return disabledColors({
      bgColor: viewColors.bgColor,
      borderColor: viewColors.borderColor,
      textColor: viewColors.textColor,
      iconColor: viewColors.iconColor,
    });
  }

  return {
    bgColor: isHovered ? viewColors.bgColorHover : viewColors.bgColor,
    borderColor: viewColors.borderColor,
    textColor:
      isHovered && viewColors.textColorHover
        ? viewColors.textColorHover
        : viewColors.textColor,
    iconColor:
      isHovered && viewColors.iconColorHover
        ? viewColors.iconColorHover
        : viewColors.iconColor,
  };
}

/**
 * Цвета кнопки старого способа подключения (`variant`): тот же вид из
 * токенов темы, что у новых кнопок (LEGACY_VARIANT_VIEW).
 */
export function resolveButtonColors(
  theme: GlideThemeForRender,
  variant: ButtonVariant,
  disabled: boolean,
  isHovered: boolean
): ResolvedColors {
  const view = LEGACY_VARIANT_VIEW[variant] ?? LEGACY_VARIANT_VIEW.primary;
  const viewColors = getButtonViewColors(resolveTokens(theme))[view];
  return resolveViewColors(viewColors, disabled, isHovered);
}

/**
 * Цвета кнопки-иконки без подложки по её виду. Переопределения цвета
 * иконки (например, акцент активной сортировки) приоритетнее вида; hover
 * без своего переопределения берёт цвет покоя переопределения.
 */
export function resolveEmbedIconButtonColors(
  viewColors: EmbedViewColors,
  disabled: boolean,
  isHovered: boolean,
  overrides?: { iconColor?: string; iconColorHovered?: string }
): ResolvedColors {
  const iconColor = overrides?.iconColor ?? viewColors.iconColor;
  const iconColorHover =
    overrides?.iconColorHovered ??
    overrides?.iconColor ??
    viewColors.iconColorHover;
  const colors = resolveViewColors(
    {
      ...viewColors,
      textColor: iconColor,
      textColorHover: iconColorHover,
      iconColor,
      iconColorHover,
    },
    disabled,
    isHovered
  );
  return colors;
}

export function getEmbedIconButtonColors(
  theme: GlideThemeForRender | undefined,
  view: ButtonView
): EmbedViewColors {
  return getEmbedIconButtonViewColors(resolveTokens(theme))[view];
}

/**
 * Цвета чекбокса, как у Checkbox в SDDS: неотмеченный — фон карточки
 * `surface-solid-card` и рамка `text-secondary`; отмеченный или частично
 * отмеченный — заливка `text-accent`, галочка `on-dark-text-primary`, без
 * рамки. Недоступный — те же цвета на 40 %.
 * Фон неотмеченного не прозрачный (решение дизайнера от 27.10.2026): чекбокс
 * стоит в служебной колонке со своим голубым фоном, и прозрачный просвечивал
 * бы его. Фон карточки в светлой теме белый, в тёмной тёмный.
 */
export function resolveCheckboxColors(
  theme: GlideThemeForRender,
  checked: boolean,
  indeterminate: boolean,
  _isHovered: boolean,
  disabled: boolean
): ResolvedColors {
  const tokens = resolveTokens(theme);
  const colors: ResolvedColors =
    checked || indeterminate
      ? {
          bgColor: tokens.textAccent,
          borderColor: tokens.textAccent,
          textColor: tokens.onDarkTextPrimary,
          iconColor: tokens.onDarkTextPrimary,
        }
      : {
          bgColor: tokens.surfaceSolidCard,
          borderColor: tokens.textSecondary,
          textColor: tokens.onDarkTextPrimary,
          iconColor: tokens.onDarkTextPrimary,
        };
  return disabled ? disabledColors(colors) : colors;
}
