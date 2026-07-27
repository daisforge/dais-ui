import { Switch, SwitchProps } from '@ui-kit/components/Switch';
import { SIZES, useHeaderContext } from '@ui-kit/components/Table';
import React from 'react';

export const ControlBlockSwitch = ({
  checked,
  ...rest
}: { checked: boolean } & SwitchProps) => {
  const { rowSize } = useHeaderContext();

  return (
    <Switch
      toggleSize={SIZES[rowSize].switch}
      checked={checked}
      style={{ pointerEvents: 'none' }}
      onChange={() => {}}
      {...rest}
    />
  );
};
