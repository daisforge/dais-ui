import type { TooltipProps } from '../Tooltip';
import type { TypographyProps, TypographyVariant } from './Typography';

export type TypographyWithAutoTooltipProps<T extends TypographyVariant> = {
  tooltipText?: React.ReactNode;
  tooltipProps?: Omit<TooltipProps, 'text' | 'target' | 'trigger' | 'opened'>;
  lines?: number;
} & Omit<TypographyProps<T>, 'frame'>;

export type TypographyWithAutoTooltipComp = <T extends TypographyVariant>(
  props: TypographyWithAutoTooltipProps<T>,
) => JSX.Element;
export type TypographyWithAutoTooltipCompGeneric<T extends TypographyVariant> =
  (props: TypographyWithAutoTooltipProps<T>) => JSX.Element;
