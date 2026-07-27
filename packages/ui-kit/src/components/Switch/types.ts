import { Switch } from '@salutejs/sdds-finai';
import { ComponentProps } from 'react';

export type BaseSwitchProps = ComponentProps<typeof Switch> & {
  /**
   * Отображение подложки у switch
   */
  hasBackground?: boolean;
};
