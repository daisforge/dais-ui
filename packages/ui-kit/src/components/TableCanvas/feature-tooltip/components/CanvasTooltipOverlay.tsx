import { Tooltip } from '@ui-kit/components/Tooltip';
import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';

import type { CanvasPortalHoverDetail } from '../../TableGlideInstance';
import { viewportToContainerPosition } from '../../utils';
import { DEFAULT_MOUSE_ENTER_DELAY } from '../constants';
import { usePortalHover } from '../hooks/usePortalHover';
import type { CanvasTooltipOverlayProps, TooltipData } from '../types';
import { LEAVE_ANIMATION_DURATION } from '../utils/normalizeTooltipConfig';
import { resolveTooltipData } from '../utils/resolveTooltipData';
import { StyledContainer } from './styled';

export const CanvasTooltipOverlay: React.FC<CanvasTooltipOverlayProps> =
  React.memo(
    ({
      containerRef,
      customEnabled = false,
      mouseEnterDelay,
      mouseLeaveDelay,
    }) => {
      const filter = useMemo(
        () =>
          (detail: CanvasPortalHoverDetail): TooltipData | null =>
            resolveTooltipData(detail, customEnabled),
        [customEnabled],
      );

      const getDelays = useMemo(
        () => (data: TooltipData) => ({
          mouseEnterDelay: data.mouseEnterDelay,
          mouseLeaveDelay: data.mouseLeaveDelay,
        }),
        [],
      );

      const state = usePortalHover<TooltipData>({
        filter,
        leaveAnimationDuration: LEAVE_ANIMATION_DURATION,
        containerRef,
        defaultMouseEnterDelay: mouseEnterDelay ?? DEFAULT_MOUSE_ENTER_DELAY,
        defaultMouseLeaveDelay: mouseLeaveDelay ?? 0,
        getDelays,
      });

      if (!state.visible) return null;

      const containerEl = containerRef?.current;
      if (!containerEl || !(containerEl instanceof HTMLElement)) return null;

      const displayPosition = viewportToContainerPosition(
        state.x,
        state.y,
        containerEl,
      );

      return createPortal(
        <StyledContainer
          style={{
            position: 'absolute',
            left: displayPosition.x,
            top: displayPosition.y,
            width: Math.max(0, state.width),
            height: Math.max(0, state.height),
            pointerEvents: 'none',
            boxSizing: 'border-box',
          }}
        >
          <Tooltip
            opened={state.visible && !state.leaving}
            placement={state.data?.tooltipProps?.placement ?? 'top'}
            text={state?.data?.tooltipText ?? ''}
            view={state.data?.tooltipProps?.view ?? 'default'}
            minWidth={state.data?.tooltipProps?.minWidth}
            maxWidth={state.data?.tooltipProps?.maxWidth}
            style={{
              position: 'relative',
              ...(state.data?.tooltipProps?.preserveLineBreaks && {
                whiteSpace: 'pre-line',
              }),
            }}
          />
        </StyledContainer>,
        containerEl,
      );
    },
  );

CanvasTooltipOverlay.displayName = 'CanvasTooltipOverlay';
