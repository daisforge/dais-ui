import { Switch, SwitchProps } from '@ui-kit/components/Switch';

export type SwitcherFilterProps = SwitchProps;

export const SwitcherFilter = ({ ...props }: SwitcherFilterProps) => (
  <Switch size="m" toggleSize="s" hasBackground {...props} />
);
