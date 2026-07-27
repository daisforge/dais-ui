import { Box } from '@ui-kit/components/Box';
import { surfaceTransparentPrimary, textSecondary } from '@ui-kit/tokens';
import styled, { CSSProperties, keyframes } from 'styled-components';

export const truncateText = (): CSSProperties => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

export const CheckboxWithTitle = styled(Box)({
  height: '40px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 12px',
  borderRadius: '8px',
  background: surfaceTransparentPrimary,
  '& label': {
    width: '100%',
    '& *': {
      fontSize: '14px'
    }
  }
});

export const DropdownWithTitle = styled(Box)({
  background: surfaceTransparentPrimary,
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  gap: '6px',
  position: 'relative',
  width: '100%',
  padding: '8px 12px',
  borderRadius: '8px',
  flexWrap: 'nowrap'
});

interface FeatureTableDropdownContainerProps {
  $isFullWidthTarget?: boolean;
}

export const FeatureTableDropdownContainer = styled(
  Box
)<FeatureTableDropdownContainerProps>(({ $isFullWidthTarget = false }) => ({
  cursor: 'pointer',
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  ...truncateText(),
  '& > div': {
    width: $isFullWidthTarget ? '100%' : 'auto'
  }
}));

export const FeatureTableDropdownTargetButton = styled.button({
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  marginLeft: 'auto',
  width: '100%',
  textAlign: 'right',
  paddingInline: '0',
  cursor: 'pointer',
  color: textSecondary,
  ...truncateText()
});

export const Title = styled(Box)({
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
  letterSpacing: '-2%'
});

export const SettingsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  overflowY: 'auto',
  overflowX: 'hidden',
  height: '100%'
});

export const ButtonFeaturesGridContainer = styled.div<{ $count: number }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  // Для нечетного количества кнопок
  ${({ $count }) =>
    $count % 2 !== 0 &&
    `
    & > :last-child {
      grid-column: 1 / -1;
    }
  `}
`;

export const TabsContainer = styled(Box)({
  marginBottom: '16px',
  width: '100%'
});

// Анимация переключения табов (аналогично сайдбару)
export const tabContentAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const TabContentWrapper = styled.div`
  overflow: hidden;
  opacity: 0;
  animation: ${tabContentAnimation};
  animation-delay: 0.1s;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  height: 100%;
`;
