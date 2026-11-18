import { Spinner } from '@ui-kit/components/Spinner';
import { Typography } from '@ui-kit/components/Typography';
import { textPrimary, textSecondary } from '@ui-kit/tokens';
import React, { forwardRef } from 'react';

import { Root, TextContent } from './PageLoader.styled';
import { PageLoaderProps } from './PageLoader.types';

/** Состояние первоначальной загрузки. Показывается вместо контента страницы. */
export const PageLoader = forwardRef<HTMLDivElement, PageLoaderProps>(
  ({ title = 'Загрузка страницы', subtitle, ...props }, ref) => (
    <Root
      role="status"
      aria-live="polite"
      aria-atomic="true"
      {...props}
      ref={ref}
    >
      <Spinner view="secondary" width={36} height={36} aria-hidden="true" />
      <TextContent>
        {/* SDDS добавляет семантику заголовка для H3 независимо от тега. */}
        <Typography
          variant="H3"
          as="div"
          role={undefined}
          aria-level={undefined}
          bold
          color={textPrimary}
          breakWord
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="BodyM" as="p" color={textSecondary} breakWord>
            {subtitle}
          </Typography>
        )}
      </TextContent>
    </Root>
  ),
);

PageLoader.displayName = 'PageLoader';
