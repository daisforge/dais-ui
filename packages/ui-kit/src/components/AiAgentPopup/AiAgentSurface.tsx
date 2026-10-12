import { shadowGradientDark, shadowGradientLight } from '@ui-kit/tokens';
import { forwardRef } from 'react';

import { AiAgentLeftPanel } from './AiAgentLeftPanel';
import {
  StyledCard,
  StyledCardContent,
  StyledSurfaceEmbedded,
  StyledSurfaceFloating,
} from './AiAgentPopup.styled';
import type { AiAgentSurfaceProps } from './AiAgentPopup.types';
import { useIsDarkTheme } from './hooks/useIsDarkTheme';

/**
 * Оболочка AI-помощника: градиентная рамка, тень и белая карточка под
 * контент. AiAgentPopup рендерит её внутри себя сам, а отдельно она
 * нужна, когда чат встраивается в лэйаут страницы (например, как левая
 * панель): контент из окна переносится в оболочку без попапа, перетаскивания
 * и ресайза. Овальное свечение живёт в AiAgentInput, поле ввода чата.
 *
 * Варианты рамки:
 * - floating (в окне): рамка нарисована наружу от карточки и в размеры
 *   не входит, как обводка снаружи в макете;
 * - embedded (в лэйауте, по умолчанию): рамка обычный padding с градиентным
 *   фоном, то есть часть блочной модели, и отступы лэйаута считаются
 *   от светящегося края.
 *
 * Тема подхватывается автоматически, как у AiAgentPopup.
 */
export const AiAgentSurface = forwardRef<HTMLDivElement, AiAgentSurfaceProps>(
  ({ variant = 'embedded', leftPanel, children, ...rest }, ref) => {
    const isDarkTheme = useIsDarkTheme();
    const shadow = isDarkTheme ? shadowGradientDark : shadowGradientLight;

    const Root =
      variant === 'floating' ? StyledSurfaceFloating : StyledSurfaceEmbedded;

    return (
      <Root {...rest} ref={ref} $shadow={shadow}>
        <StyledCard>
          {leftPanel && <AiAgentLeftPanel {...leftPanel} />}
          <StyledCardContent>{children}</StyledCardContent>
        </StyledCard>
      </Root>
    );
  },
);

AiAgentSurface.displayName = 'AiAgentSurface';
