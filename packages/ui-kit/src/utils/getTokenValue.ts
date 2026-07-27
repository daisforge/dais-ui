/**
 * Получение значения из var переменной токена
 *
 * ```
 * Пример:
 * import { textAccent } from '@dais-ui/ui-kit/tokens/color';
 *
 * getTokenValue(textAccent) // #0B7ECB
 * ```
 *
 * @param token - токен из `@dais-ui/ui-kit/tokens`
 * @returns значение токена, например HEX цвета
 */
export const getTokenValue = (token: string) => {
  const varValue = token.substring(token.indexOf('(') + 1, token.indexOf(','));
  const style = getComputedStyle(document.body);

  const result = style.getPropertyValue(varValue);

  return result;
};
