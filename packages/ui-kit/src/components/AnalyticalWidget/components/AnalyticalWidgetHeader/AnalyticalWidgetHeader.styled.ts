import { Link } from '@ui-kit/components/Link';
import {
  Typography,
  TypographyWithAutoTooltip,
} from '@ui-kit/components/Typography';
import {
  bodyM,
  bodyMBold,
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
  // Резерв под кнопку-троеточие (абсолютное позиционирование), ширина 32px
  padding-right: 32px;

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
  align-items: center;
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
`;

export const StyledAfterTitle = styled.p`
  flex-shrink: 0;
  margin: 0;
  margin-right: 4px;
  white-space: 'nowrap';
  overflow: 'hidden';
  text-overflow: 'ellipsis';
  ${() => bodyFontStyles()}
  color: ${() => textTertiary};
  text-transform: uppercase;
`;

export const StyledHeaderActions = styled.div.attrs({
  className: cls.headerActions as string,
})`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;

  opacity: 0;
  transition: opacity 0.3s ease;
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
