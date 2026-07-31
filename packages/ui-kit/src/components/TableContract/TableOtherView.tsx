import { Spinner } from '@ui-kit/components/Spinner';
import { COLORS, TABLE_BORDER_RADIUS } from '@ui-kit/components/Table/styles';
import { H3 } from '@ui-kit/components/Typography';
import { s } from '@ui-kit/constants';
import { ErrorPage } from '@ui-kit/layouts/ErrorPage';
import { textPrimary } from '@ui-kit/tokens';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';

import { TABLE_STYLES } from './constants';

const StyledDiv = styled.div`
  & {
    border: 1px solid ${() => COLORS.border};
    border-radius: ${() => TABLE_BORDER_RADIUS}px;
    background-color: ${() => COLORS.white};
    height: ${() => TABLE_STYLES.height};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & .spinner {
      margin-bottom: ${() => s.x6};
    }
  }
`;

export const TableOtherView = ({
  view,
  ...props
}: { view: 'loading' | 'error' } & Omit<ComponentProps<'div'>, 'ref'>) => {
  if (view === 'loading') {
    return (
      <StyledDiv {...props}>
        <Spinner view="default" className="spinner" size="xl" />
        <H3 color={textPrimary}>Загрузка таблицы</H3>
      </StyledDiv>
    );
  }
  return (
    <StyledDiv {...props}>
      <ErrorPage
        unknownStatus={{
          title: 'Похоже, таблица не загружается',
          description: 'Попробуйте обновить страницу или зайдите позже',
        }}
      />
    </StyledDiv>
  );
};
