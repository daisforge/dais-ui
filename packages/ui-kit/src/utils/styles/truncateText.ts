import { css, CSSObject } from 'styled-components';

type TruncateTextOptions = {
  /** Количество строк перед обрезанием текста (по умолчанию: 1 - однострочное) */
  lines?: number;
};

/**
 * Генерирует CSS-свойства для обрезания текста с многоточием в зависимости от указанного количества строк.
 *
 * @param {TruncateTextOptions} [options] - Параметры для настройки обрезания текста
 * @param {number} [options.lines=1] - Количество строк перед обрезанием (1 для однострочного режима)
 * @returns {CSSObject} Объект с CSS-свойствами для обрезания текста
 *
 * @example
 * // Однострочное обрезание
 * const singleLineStyle = truncateText();
 *
 * @example
 * // Многострочное обрезание (3 строки)
 * const multiLineStyle = truncateText({ lines: 3 });
 */
export const truncateText = (options?: TruncateTextOptions): CSSObject => {
  if (options?.lines && options.lines > 1) {
    return {
      display: '-webkit-box',
      WebkitLineClamp: options.lines,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'normal',
    };
  }

  return {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
};

/**
 * Генерирует CSS-шаблон для styled-components для обрезания текста.
 *
 * @param {TruncateTextOptions} [options] - Параметры для настройки обрезания текста
 * @param {number} [options.lines=1] - Количество строк перед обрезанием
 * @returns {ReturnType<typeof css>} CSS-шаблон для styled-components
 *
 * @example
 * // Использование в styled-components
 * const TruncatedText = styled.div`
 *   ${() => truncateTextCss({ lines: 2 })}
 * `;
 */
export const truncateTextCss = (options?: TruncateTextOptions) =>
  css(truncateText(options));
