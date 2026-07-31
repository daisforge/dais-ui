import { Button } from '@ui-kit/components/Button';
import React, { FC } from 'react';

import {
  SidebarFilterConfirmOrReset,
  SidebarFilterConfirmOrResetRightSide,
} from './styled';

interface confirmOrResetProps {
  clear: () => void;
  apply: () => void;
  reset: () => void;
  isDirty: boolean;
}

export const ConfirmOrReset: FC<confirmOrResetProps> = ({
  clear,
  apply,
  reset,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isDirty,
}) => (
  <SidebarFilterConfirmOrReset>
    <Button size="xs" view="clear" onClick={() => clear()}>
      Очистить
    </Button>
    <SidebarFilterConfirmOrResetRightSide>
      <Button
        size="xs"
        view="secondary"
        onClick={() => reset()}
        // disabled={!isDirty}
      >
        Отменить
      </Button>
      <Button size="xs" view="accent" onClick={() => apply()}>
        Применить
      </Button>
    </SidebarFilterConfirmOrResetRightSide>
  </SidebarFilterConfirmOrReset>
);
