import { SIZES, type SIZE } from '../constants';
import { FONTS_CONFIG, fontMetrics, fontStyles } from '../fonts';

const sizeMapper: Record<SIZE, keyof typeof FONTS_CONFIG> = {
  small: 'bodyXXS',
  medium: 'bodyS',
  big: 'bodyM',
};

/**
 * Возвращает шрифтовые и размерные пропсы темы для указанного размера строки.
 */
export const getSizeProps = (rowSize: SIZE = 'big') => {
  const baseFontStyle = fontStyles[sizeMapper[rowSize]];
  const baseFontMetrics = fontMetrics[sizeMapper[rowSize]];
  const editorFontSize = `${baseFontMetrics.fontSize}px`;
  const lineHeight = baseFontMetrics.lineHeightPx;
  const activeSizes = SIZES[rowSize];
  const { cellHorizontalPadding, cellVerticalPadding } = activeSizes;

  return {
    headerFontStyle: fontStyles.bodyXSBold,
    baseFontStyle,
    fontFamily:
      '"SB Sans Text", sans-serif, Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif',
    editorFontSize,
    lineHeight,
    cellHorizontalPadding,
    cellVerticalPadding,
    activeSizes,
  };
};
