import type { TooltipConfigResult, TooltipData } from '../types';

export const LEAVE_ANIMATION_DURATION = 200;

/** Приводит строку или объект с text к TooltipData. */
export function normalizeTooltipConfig(
  result: TooltipConfigResult,
): TooltipData | null {
  if (!result) return null;

  if (typeof result === 'string') {
    return {
      tooltipText: result,
      tooltipProps: {},
    };
  }

  const { text, mouseEnterDelay, mouseLeaveDelay, ...props } = result;
  return {
    tooltipText: text,
    tooltipProps: props,
    mouseEnterDelay,
    mouseLeaveDelay,
  };
}
