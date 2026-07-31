import { IconButton } from '@ui-kit/components/IconButton';
import { Popover } from '@ui-kit/components/Popover';
import { borderRadius, s } from '@ui-kit/constants';
import { shadowDownSoftM, surfaceSolidCard } from '@ui-kit/tokens';
import styled from 'styled-components';

import {
  AiAgentPopoverClassNames as cls,
  popoverNativeClassNames,
} from './AiAgentPopover.classnames';
import { COLORS } from './AiAgentPopover.constants';
import {
  AiAgentPopoverCustomPlacement,
  AiAgentPopoverPosition,
} from './AiAgentPopover.types';

const arrowSelector = `${popoverNativeClassNames.arrow}:before`;

const C = {
  spaceX4: () => s.x4,
  spaceX3: () => s.x3,
  brS: () => borderRadius.s,
};

export const AiAgentPopoverStyled = styled(Popover)<{
  $draggable?: boolean;
  $position?: AiAgentPopoverPosition | AiAgentPopoverCustomPlacement;
}>`
  --ai-agent-popover-content-container-pd: ${C.spaceX4} ${C.spaceX3}
    ${C.spaceX3} ${C.spaceX3};
  --ai-agent-popover-border-radius: ${C.brS};
  ${({ $draggable, $position }) => {
    if ($draggable) return '';

    if (typeof $position === 'string') {
      // Для кастомных позиций
      switch ($position) {
        case 'top-left':
          return `
            position: fixed;
            left: 56px;
            top: 56px;
          `;
        case 'top-right':
          return `
            position: fixed;
            right: 56px;
            top: 56px;
          `;
        case 'bottom-left':
          return `
            position: fixed;
            left: 56px;
            bottom: 56px;
          `;
        case 'bottom-right':
          return `
            position: fixed;
            right: 56px;
            bottom: 56px;
          `;
        default:
          return `
          position: fixed;
          right: 56px;
          bottom: 56px;`;
      }
    }

    return ``;
  }}

  & :is(.${popoverNativeClassNames.root}, .${cls.popoverContentContainer}) {
    border-radius: var(--ai-agent-popover-border-radius);
  }

  & .${cls.popoverContentContainer} {
    padding: var(--ai-agent-popover-content-container-pd);
    background: ${() => surfaceSolidCard};
    height: 100%;
  }

  & .${arrowSelector} {
    background: ${() => surfaceSolidCard};
  }
`;

export const MagicButtonStyled = styled(IconButton)`
  && {
    width: 72px !important;
    height: 72px !important;
    border-radius: 100% !important;
    box-shadow: ${() => shadowDownSoftM} !important;
    background: linear-gradient(
      to right,
      ${COLORS.purple} 0%,
      ${COLORS.blue} 100%
    ) !important;
    transition: transform 0.3s ease !important;

    &.${cls.popoverIconTrigger} svg {
      transition: transform 0.3s ease-in-out !important;
      transform-origin: center center !important;
      will-change: transform !important;
    }

    &:hover {
      transform: scale(1.02) !important;
      &.${cls.popoverIconTrigger} svg {
        transform: scaleX(-1) !important;
      }
      background: linear-gradient(
        to right,
        ${COLORS.purple} 0%,
        ${COLORS.blue} 100%
      ) !important;
    }
  }
`;
