import { Spinner } from '@ui-kit/components/Spinner';
import {
  bodyM,
  borderRadiusXs,
  h3Bold,
  onLightOutlineSolidPrimary,
  spacing4x,
  surfaceSolidCard,
  textPrimary,
  textSecondary,
} from '@ui-kit/tokens';
import { fadeIn } from '@ui-kit/utils/styles/animations';
import React, { FC, ReactNode } from 'react';
import styled, { css, CSSProperties } from 'styled-components';

import { DEFAULT_TABLE_TRANSITION } from '../styles';
import { useLoadingOverlay } from './useLoadingOverlay';

interface TableLoadingOverlayProps {
  loadingOverlayConfig?: {
    active?: boolean;
    spinner?: ReactNode;
    title?: string;
    subtitle?: string;
    showSubtitleDelay?: number;
  };
  containerStyle?: CSSProperties;
  borderTopRounded?: boolean;
}

const titleFontStyles = () => css(h3Bold);
const subtitleFontStyles = () => css(bodyM);

const Title = styled.h3`
  padding: 0;
  margin: 0;
  margin-bottom: 6px;
  ${() => titleFontStyles()}
  text-align: center;
  color: ${() => textPrimary};
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-out forwards;
  animation-delay: 0.2s;
  transition: ${DEFAULT_TABLE_TRANSITION};
`;

const Subtitle = styled.h3<{ $show: boolean }>`
  padding: 0;
  margin: 0;
  min-height: 20px;
  ${() => subtitleFontStyles()}
  text-align: center;
  color: ${() => textSecondary};
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

const Container = styled.div<{ $borderTopRounded: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${() => onLightOutlineSolidPrimary};
  border-radius: ${({ $borderTopRounded }) =>
    $borderTopRounded
      ? borderRadiusXs
      : `0 0 ${borderRadiusXs} ${borderRadiusXs}`};
  background: ${() => surfaceSolidCard};
  transition: ${DEFAULT_TABLE_TRANSITION};
  animation: ${fadeIn} 0.1s ease-out forwards;
`;

const SpinnerContainer = styled.div`
  margin-bottom: ${spacing4x};
  align-self: center;
  transition: ${DEFAULT_TABLE_TRANSITION};
  animation: ${fadeIn} 0.2s ease-out forwards;
  animation-delay: 0.1s;
`;

export const TableLoadingOverlay: FC<TableLoadingOverlayProps> = ({
  loadingOverlayConfig = {},
  containerStyle,
  borderTopRounded = true,
}) => {
  const {
    active = true,
    spinner = <Spinner view="secondary" size="l" />,
    title = 'Загрузка таблицы',
    subtitle = '',
    showSubtitleDelay = 10000,
  } = loadingOverlayConfig;

  const { showOverlay, showSubtitle } = useLoadingOverlay({
    active,
    showSubtitleDelay,
  });

  if (!showOverlay) return null;

  return (
    <Container $borderTopRounded={borderTopRounded} style={containerStyle}>
      <SpinnerContainer>{spinner}</SpinnerContainer>
      <Title>{title}</Title>
      <Subtitle $show={showSubtitle}>{showSubtitle ? subtitle : ''}</Subtitle>
    </Container>
  );
};
