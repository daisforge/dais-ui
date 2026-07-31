import { IconButton } from '@ui-kit/components/IconButton';
import { Link } from '@ui-kit/components/Link';
import {
  Typography,
  TypographyWithAutoTooltip,
} from '@ui-kit/components/Typography';
import {
  bodyM,
  bodyMBold,
  surfaceClear,
  surfaceSolidCard,
  textPrimary,
  textSecondary,
  textTertiary,
} from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import { analyticalWidgetClassNames as cls } from '../../AnalyticalWidget.constants';

const titleFontStyles = () => css(bodyMBold);
const bodyFontStyles = () => css(bodyM);

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  // Зарезервировано для кнопки управления виджетом (абсолютное позиционирование другой командой)
  padding-right: 40px;

  // Стили для popover возле иконки информации
  & .popover-wrapper:has(.${cls.popoverInfo}) {
    display: flex;
    flex-shrink: 0;
    height: 100%;
    align-items: center;
    transition: none;
  }
`;

export const StyledLeftSlot = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
  min-height: 32px;
`;

export const StyledTitleContainer = styled.div`
  margin: 0;
  display: flex;
  flex-shrink: 1;
  min-width: 0;
`;

export const StyledTitle = styled.p`
  margin: 0;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${() => titleFontStyles()};
  color: ${() => textPrimary};
`;

export const StyledTitleWithTooltip = styled(TypographyWithAutoTooltip)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
`;

export const StyledSubTitleWithTooltip = styled(TypographyWithAutoTooltip)`
  display: flex;
  flex-shrink: 1;
  align-items: center;
  min-width: 0;
  margin-right: 4px;
  padding-bottom: 4px;
`;

export const StyledAfterTitle = styled.p`
  flex-shrink: 0;
  margin: 0;
  margin-right: 5px;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${() => bodyFontStyles()}
  color: ${() => textTertiary};
  text-transform: uppercase;
`;

export const StyledActionsContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1;
  position: relative;
`;

export const StyledActionsWrapper = styled.div.attrs({
  className: cls.headerActions as string,
})<{ $translateX: number }>`
  position: absolute;

  display: flex;
  left: 0;
  top: 0;
  transform: translateX(
    ${(props) => (props.$translateX ? props.$translateX : 0)}px
  );
  padding-left: ${(props) => (props.$translateX ? 20 : 0)}px;

  opacity: 0;
  transition: opacity 0.3s ease;
  background: linear-gradient(
    to right,
    ${surfaceClear} 0%,
    ${surfaceClear} 15%,
    ${surfaceSolidCard} 40%,
    ${surfaceSolidCard} 100%
  );
`;

export const StyledSubtitle = styled.p`
  ${() => bodyFontStyles()}
  flex-shrink: 1;
  margin: 0;
  min-width: 0;

  color: ${() => textSecondary};
`;

export const StyledSubtitleTypography = styled(Typography)`
  color: ${() => textSecondary};
` as typeof Typography;

export const StyledTitleLink = styled(Link)`
  display: flex;
  min-width: 0;
  flex-shrink: 1;
`;

export const StyleSubtitledWithTooltip = styled(TypographyWithAutoTooltip)`
  flex-shrink: 1;
  margin: 0;
  min-width: 0;
`;

export const StyledRightSlot = styled.div`
  align-self: start;
`;

export const StyledLinkIconButton = styled(IconButton)`
  && {
    width: 24px;
    height: 24px;
    color: ${() => textSecondary};
  }
`;
