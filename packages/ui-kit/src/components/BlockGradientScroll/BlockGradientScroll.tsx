import {
  BLOCK_GRADIENT_VAR_BOTTOM,
  BLOCK_GRADIENT_VAR_LEFT,
  BLOCK_GRADIENT_VAR_RIGHT,
  BlockGradientScrollMixin,
  type BlockGradientScrollVariant
} from '@ui-kit/mixins/blockGradientScroll';
import { mergeClasses } from '@ui-kit/utils';
import React, {
  type ComponentProps,
  forwardRef,
  type ReactNode,
  useLayoutEffect,
  useRef
} from 'react';
import styled, {
  type CSSObject,
  type FlattenSimpleInterpolation
} from 'styled-components';

import { cls } from './constans';
import { useCombinedRef } from './hooks';

export type BlockGradientScrollProps = Omit<
  ComponentProps<'div'>,
  'children' | 'ref'
> & {
  /**
   * Контент внутри scroll-контейнера
   */
  children?: ReactNode;
  /**
   * Кастомные стили styled-components.
   *
   * @remarks
   * Приоритет стилей (от низкого к высокому):
   * 1. Базовые стили компонента
   * 2. `$css` (styled-components стили)
   * 3. `className` (CSS классы)
   * 4. `style` (inline стили) — наивысший приоритет
   *
   * Padding из `style` автоматически подхватывается для градиента.
   */
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  /**
   * Варианты отображения градиента, white | gray. По умолчанию white
   */
  variant?: BlockGradientScrollVariant;
};

const Container = styled.div<{
  $css?: string | CSSObject | FlattenSimpleInterpolation;
  $variant: BlockGradientScrollVariant;
}>`
  ${({ $css }) => $css}
  ${({ $variant }) =>
    BlockGradientScrollMixin({
      variant: $variant
    })}
`;

export const BlockGradientScroll = forwardRef<
  HTMLDivElement,
  BlockGradientScrollProps
>(
  (
    { children, $css, className, style, variant = 'white', ...restProps },
    ref
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      const el = internalRef.current;
      if (!el) return undefined;

      const updateCSSVars = () => {
        const computed = getComputedStyle(el);

        el.style.setProperty(BLOCK_GRADIENT_VAR_LEFT, computed.paddingLeft);
        el.style.setProperty(BLOCK_GRADIENT_VAR_RIGHT, computed.paddingRight);
        el.style.setProperty(BLOCK_GRADIENT_VAR_BOTTOM, computed.paddingBottom);
      };

      updateCSSVars();

      const observer = new ResizeObserver(updateCSSVars);
      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    }, []);

    const combinedRef = useCombinedRef(ref, internalRef);

    return (
      <Container
        ref={combinedRef}
        $css={$css}
        className={mergeClasses(cls.container, className)}
        style={style}
        $variant={variant}
        {...restProps}
      >
        {children}
      </Container>
    );
  }
);
