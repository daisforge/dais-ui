import { textPrimary } from '@ui-kit/tokens';

import { StyledTitleWithTooltip } from './AnalyticalWidgetHeader.styled';
import type { AnalyticalWidgetTitleProps } from './AnalyticalWidgetTitle.types';

export const AnalyticalWidgetTitle = ({
  title,
  titleTooltipProps
}: AnalyticalWidgetTitleProps) => (
  <StyledTitleWithTooltip
    tooltipText={title}
    tooltipProps={{
      placement: 'top',
      ...titleTooltipProps
    }}
    variant="BodyM"
    bold
    style={{
      color: textPrimary,
      wordBreak: 'normal'
    }}
    lines={1}
  >
    {title}
  </StyledTitleWithTooltip>
);
