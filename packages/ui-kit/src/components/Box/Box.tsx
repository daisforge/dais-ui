import { ComponentProps } from 'react';
import styled, {
  type CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { boxCSSKeys, BoxCSSProperties, keyBoxCSSProperties } from './typeKeys';

type BoxBaseProps = BoxCSSProperties & {
  /**
   * Кастомные стили styled-components для Box-контейнера
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  /**
   * Скрытие элемента
   */
  hidden?: boolean;
  /**
   * Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонента. (Например: `li`, `p`, `button` и т.д.)
   */
  as?: React.ElementType | keyof JSX.IntrinsicElements;
};

// отфильтровываем пропсы, которые относятся к CSS
const filterCSSProperties = (cssProperties: BoxBaseProps) =>
  (Object.keys(cssProperties) as keyBoxCSSProperties[]).reduce((props, key) => {
    // TODO: Разобраться с конфигом TS, ругается на сложность union
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (boxCSSKeys.has(key)) props[key] = cssProperties[key];
    return props;
  }, {} as BoxCSSProperties);

export const Box = styled.div.attrs(({ className, ...rest }) => ({
  className: `Box-root` as typeof className,
  ...rest,
}))<BoxBaseProps>`
  box-sizing: border-box;
  ${({ $css, hidden, ...cssProperties }) => filterCSSProperties(cssProperties)}
  ${({ $css }) => $css}
    ${({ hidden }) => (hidden ? { display: 'none' } : {})}
`;
export type BoxProps = ComponentProps<typeof Box> & BoxBaseProps;
