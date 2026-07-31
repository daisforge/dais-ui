const localonDarkWhiteLinearGradient =
  'linear-gradient(to top, rgb(19, 24, 27) 0%, rgba(19, 24, 27, 0) 100%)';
const localonDarkGrayLinearGradient =
  'linear-gradient(to top, rgb(6, 10, 12) 0%, rgba(6, 10, 12, 0) 100%)';

const localWhiteLinearGradient =
  'linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)';
const localGrayLinearGradient =
  'linear-gradient(to top, rgb(242, 245, 248) 0%, rgba(242, 245, 248, 0) 100%)';

export const BLOCK_GRADIENT_SCROLL_CLASSNAME = 'scroll-gradient';
export const BLOCK_GRADIENT_SCROLL_TIMELINE = `--${BLOCK_GRADIENT_SCROLL_CLASSNAME}-timeline`;
export const BLOCK_GRADIENT_SCROLL_ANIMATION = `${BLOCK_GRADIENT_SCROLL_CLASSNAME}-animation`;

export const BLOCK_GRADIENT_SCROLL_HEIGHT = 100;
export const BLOCK_GRADIENT_SCROLL_HEIGHT_MOBILE = 60;

// CSS переменные для динамического управления padding в компоненте
export const BLOCK_GRADIENT_VAR_TOP = '--block-gradient-top';
export const BLOCK_GRADIENT_VAR_LEFT = '--block-gradient-left';
export const BLOCK_GRADIENT_VAR_RIGHT = '--block-gradient-right';
export const BLOCK_GRADIENT_VAR_BOTTOM = '--block-gradient-bottom';

export const BlockGradientScrollColorMap = {
  light: {
    white: localWhiteLinearGradient,
    gray: localGrayLinearGradient,
  },
  dark: {
    white: localonDarkWhiteLinearGradient,
    gray: localonDarkGrayLinearGradient,
  },
  // TODO: (THEME) уточнить у дизайнера значения, пока используем значения light
  highContrastLight: {
    white: localWhiteLinearGradient,
    gray: localGrayLinearGradient,
  },
};
