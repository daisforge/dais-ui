import { Spinner } from '@ui-kit/components/Spinner';
import {
  bodyM,
  h3Bold,
  spacing4x,
  textPrimary,
  textSecondary,
} from '@ui-kit/tokens';
import { fadeIn } from '@ui-kit/utils/styles/animations';
import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { DEFAULT_TABLE_TRANSITION } from '../styles';
import { LoadingOverlayMode } from './types';

const titleFontStyles = () => css(h3Bold);
const subtitleFontStyles = () => css(bodyM);

const Title = styled.h3<{ $mode: LoadingOverlayMode }>`
  padding: 0;
  margin: 0;
  margin-bottom: ${({ $mode }) => ($mode === 'cover' ? 4 : 6)}px;
  ${() => titleFontStyles()}
  text-align: center;
  color: ${() => textPrimary};
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards;
  animation-delay: 0.2s;
  transition: ${DEFAULT_TABLE_TRANSITION};
`;

const Subtitle = styled.h3<{ $show: boolean; $mode: LoadingOverlayMode }>`
  padding: 0;
  margin: 0;
  min-height: 20px;
  ${() => subtitleFontStyles()}
  text-align: center;
  color: ${({ $mode }) => ($mode === 'cover' ? textPrimary : textSecondary)};
  opacity: 0;
  transform: translateY(-10px);
  transition: ${DEFAULT_TABLE_TRANSITION};

  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const SpinnerContainer = styled.div`
  margin-bottom: ${spacing4x};
  align-self: center;
  transition: ${DEFAULT_TABLE_TRANSITION};
  animation: ${fadeIn} 0.2s ease-out forwards;
  animation-delay: 0.1s;
`;

type LoadingOverlayContentProps = {
  spinner?: ReactNode;
  title: string;
  subtitle: string;
  showSubtitle: boolean;
  /** От режима зависят отступ под заголовком и цвет подзаголовка. */
  mode: LoadingOverlayMode;
};

/** Спиннер, заголовок и подзаголовок оверлея загрузки. */
export const LoadingOverlayContent: FC<LoadingOverlayContentProps> = ({
  spinner = <Spinner view="secondary" size="l" />,
  title,
  subtitle,
  showSubtitle,
  mode,
}) => (
  <>
    <SpinnerContainer>{spinner}</SpinnerContainer>
    <Title $mode={mode}>{title}</Title>
    <Subtitle $show={showSubtitle} $mode={mode}>
      {showSubtitle ? subtitle : ''}
    </Subtitle>
  </>
);
