export const FONTS_CONFIG = {
  bodyM: {
    'font-size': '1rem',
    'font-weight': 400,
    'line-height': '1.25rem',
    'bold-font-size': '1rem',
    'bold-font-weight': 600,
    'bold-line-height': '1.25rem',
  },

  bodyS: {
    'font-size': '0.875rem',
    'font-weight': 400,
    'line-height': '1.125rem',
    'bold-font-size': '0.875rem',
    'bold-font-weight': 600,
    'bold-line-height': '1.125rem',
  },

  bodyXS: {
    'font-size': '0.75rem',
    'font-weight': 400,
    'line-height': '0.875rem',
    'bold-font-size': '0.75rem',
    'bold-font-weight': 600,
    'bold-line-height': '0.875rem',
  },
  bodyXXS: {
    'font-size': '0.625rem',
    'font-weight': 400,
    'line-height': '0.75rem',
    'bold-font-size': '0.625rem',
    'bold-font-weight': 600,
    'bold-line-height': '0.75rem',
  },
};
type FontObj = (typeof FONTS_CONFIG)[keyof typeof FONTS_CONFIG];
type FontKeyInit = keyof typeof FONTS_CONFIG;
type FontKey = FontKeyInit | `${FontKeyInit}Bold`;
type FontMetric = { fontSize: number; lineHeightPx: number };

export type Fonts = { [K in FontKey]: string };
export type FontMetrics = { [K in FontKey]: FontMetric };

const DEFAULT_REM_IN_PX = 16;

function cssLengthToPx(value: string, remInPx = DEFAULT_REM_IN_PX): number {
  const numericValue = parseFloat(value);

  if (!Number.isFinite(numericValue)) {
    return 0;
  }

  return value.endsWith('rem') ? numericValue * remInPx : numericValue;
}

/**
 * Создаёт CSS font shorthand строку из объекта шрифта
 * @param fontObj - объект с параметрами шрифта
 * @param bold - использовать bold версию
 * @returns строка вида "400 normal 0.875rem/1.125rem"
 */
export const createFontStyle = (fontObj: FontObj, bold = false): string => {
  const weight = bold ? fontObj['bold-font-weight'] : fontObj['font-weight'];
  const size = bold ? fontObj['bold-font-size'] : fontObj['font-size'];
  const lineHeight = bold
    ? fontObj['bold-line-height']
    : fontObj['line-height'];
  return `${weight} normal ${size}/${lineHeight}`;
};

const createFontMetrics = (fontObj: FontObj, bold = false): FontMetric => {
  const fontSize = bold ? fontObj['bold-font-size'] : fontObj['font-size'];
  const lineHeight = bold
    ? fontObj['bold-line-height']
    : fontObj['line-height'];

  return {
    fontSize: cssLengthToPx(fontSize),
    lineHeightPx: cssLengthToPx(lineHeight),
  };
};

// В одном месте добавляем обычный и bold-токен, чтобы styles и metrics не расходились.
const createFontEntries = <T>(
  createValue: (fontObj: FontObj, bold?: boolean) => T
): [FontKey, T][] =>
  Object.entries(FONTS_CONFIG).reduce<[FontKey, T][]>(
    (acc, [key, fontConfig]) => {
      const fontKey = key as FontKeyInit;
      acc.push(
        [fontKey, createValue(fontConfig)],
        [`${fontKey}Bold`, createValue(fontConfig, true)]
      );
      return acc;
    },
    []
  );

export const fontStyles = Object.fromEntries(
  createFontEntries(createFontStyle)
) as Fonts;

export const fontMetrics = Object.fromEntries(
  createFontEntries(createFontMetrics)
) as FontMetrics;
