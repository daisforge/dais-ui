import { Spinner } from '@ui-kit/components/Spinner';
import React, { forwardRef, useEffect, useRef } from 'react';

import {
  Content,
  Overlay,
  Root,
  SpinnerContainer,
  Subtitle,
  Title,
} from './PageLoader.styled';
import { PageLoaderProps } from './PageLoader.types';

/** Оверлей загрузки области контента. Заголовок страницы размещается снаружи. */
export const PageLoader = forwardRef<HTMLDivElement, PageLoaderProps>(
  (
    {
      active = true,
      title = 'Загрузка страницы',
      subtitle = 'Данные обрабатываются, обычно это занимает не более 10 секунд',
      children,
      ...props
    },
    ref,
  ) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (
        active &&
        document.activeElement instanceof HTMLElement &&
        contentRef.current?.contains(document.activeElement)
      ) {
        document.activeElement.blur();
      }
    }, [active]);

    return (
      <Root {...props} ref={ref} aria-busy={active}>
        <Content
          ref={contentRef}
          {...(active ? { inert: '' } : {})}
          aria-hidden={active || undefined}
        >
          {children}
        </Content>
        {active && (
          <Overlay role="status" aria-live="polite" aria-atomic="true">
            <SpinnerContainer aria-hidden="true">
              <Spinner view="secondary" width={36} height={36} />
            </SpinnerContainer>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </Overlay>
        )}
      </Root>
    );
  },
);

PageLoader.displayName = 'PageLoader';
