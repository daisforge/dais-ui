import {
  borderRadiusXs,
  onLightOutlineSolidPrimary,
  surfaceSolidCard,
} from '@ui-kit/tokens';
import { fadeIn } from '@ui-kit/utils/styles/animations';
import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { DEFAULT_TABLE_TRANSITION } from '../styles';
import { LoadingOverlayContent } from './LoadingOverlayContent';
import { LoadingOverlayConfig } from './types';
import { useLoadingOverlay } from './useLoadingOverlay';

interface TableLoadingOverlayProps {
  loadingOverlayConfig?: LoadingOverlayConfig;
  containerStyle?: CSSProperties;
  borderTopRounded?: boolean;
}

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

/** Оверлей вместо таблицы (mode: 'replace'). */
export const TableLoadingOverlay: FC<TableLoadingOverlayProps> = ({
  loadingOverlayConfig = {},
  containerStyle,
  borderTopRounded = true,
}) => {
  const {
    active = true,
    spinner,
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
      <LoadingOverlayContent
        spinner={spinner}
        title={title}
        subtitle={subtitle}
        showSubtitle={showSubtitle}
        mode="replace"
      />
    </Container>
  );
};
