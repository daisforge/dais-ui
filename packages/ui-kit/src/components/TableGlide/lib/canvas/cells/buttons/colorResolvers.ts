import type { Tokens } from '../../../../tokens';

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

/** Все цвета контрола на 40 %: недоступное состояние, как у контролов SDDS. */
function disabledColors(colors: ResolvedColors): ResolvedColors {
  return {
    bgColor: withOpacity(colors.bgColor, DISABLED_OPACITY),
    borderColor: withOpacity(colors.borderColor, DISABLED_OPACITY),
    textColor: withOpacity(colors.textColor, DISABLED_OPACITY),
    iconColor: withOpacity(colors.iconColor, DISABLED_OPACITY),
  };
}

type DerivedViewColors = { hover: ResolvedColors; disabled: ResolvedColors };

// Цвета под курсором и недоступные считаются один раз на палитру вида:
// палитры видов сами запомнены по токенам темы (constants.ts).
const derivedViewColorsCache = new WeakMap<ViewColors, DerivedViewColors>();

function getDerivedViewColors(viewColors: ViewColors): DerivedViewColors {
  let derived = derivedViewColorsCache.get(viewColors);
  if (derived === undefined) {
    derived = {
      hover: {
        bgColor: viewColors.bgColorHover,
        borderColor: viewColors.borderColor,
        textColor: viewColors.textColorHover ?? viewColors.textColor,
        iconColor: viewColors.iconColorHover ?? viewColors.iconColor,
      },
      disabled: disabledColors(viewColors),
    };
    derivedViewColorsCache.set(viewColors, derived);
  }
  return derived;
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
  if (!disabled && !isHovered) {
    return viewColors;
  }
  const derived = getDerivedViewColors(viewColors);
  return disabled ? derived.disabled : derived.hover;
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
  if (
    overrides?.iconColor === undefined &&
    overrides?.iconColorHovered === undefined
  ) {
    return resolveViewColors(viewColors, disabled, isHovered);
  }
  const restColor = overrides.iconColor ?? viewColors.iconColor;
  const color =
    isHovered && !disabled
      ? overrides.iconColorHovered ?? overrides.iconColor ?? viewColors.iconColorHover
      : restColor;
  const colors: ResolvedColors = {
    bgColor: viewColors.bgColor,
    borderColor: viewColors.borderColor,
    textColor: color,
    iconColor: color,
  };
  return disabled ? disabledColors(colors) : colors;
}

export function getEmbedIconButtonColors(
  theme: GlideThemeForRender | undefined,
  view: ButtonView
): EmbedViewColors {
  return getEmbedIconButtonViewColors(resolveTokens(theme))[view];
}

type CheckboxStateColors = { rest: ResolvedColors; disabled: ResolvedColors };

// Цвета чекбокса считаются один раз на токены темы.
const checkboxColorsCache = new WeakMap<
  Tokens,
  { checked: CheckboxStateColors; unchecked: CheckboxStateColors }
>();

function getCheckboxColors(tokens: Tokens) {
  let colors = checkboxColorsCache.get(tokens);
  if (colors === undefined) {
    const checked: ResolvedColors = {
      bgColor: tokens.textAccent,
      borderColor: tokens.textAccent,
      textColor: tokens.onDarkTextPrimary,
      iconColor: tokens.onDarkTextPrimary,
    };
    const unchecked: ResolvedColors = {
      bgColor: tokens.surfaceSolidCard,
      borderColor: tokens.textSecondary,
      textColor: tokens.onDarkTextPrimary,
      iconColor: tokens.onDarkTextPrimary,
    };
    colors = {
      checked: { rest: checked, disabled: disabledColors(checked) },
      unchecked: { rest: unchecked, disabled: disabledColors(unchecked) },
    };
    checkboxColorsCache.set(tokens, colors);
  }
  return colors;
}

/**
 * Цвета чекбокса, как у Checkbox в SDDS. У неотмеченного фон карточки
 * `surface-solid-card` и рамка `text-secondary`. У отмеченного или частично
 * отмеченного заливка `text-accent`, галочка `on-dark-text-primary`, без
 * рамки. Недоступный рисуется теми же цветами на 40 %.
 * Фон неотмеченного не прозрачный: чекбокс стоит в служебной колонке с
 * голубым фоном, и прозрачный просвечивал бы его.
 */
export function resolveCheckboxColors(
  theme: GlideThemeForRender,
  checked: boolean,
  indeterminate: boolean,
  _isHovered: boolean,
  disabled: boolean
): ResolvedColors {
  const colors = getCheckboxColors(resolveTokens(theme));
  const state = checked || indeterminate ? colors.checked : colors.unchecked;
  return disabled ? state.disabled : state.rest;
}
