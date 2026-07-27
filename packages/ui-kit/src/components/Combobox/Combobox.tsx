import { Combobox } from '@salutejs/sdds-finai';
import styled from 'styled-components';

// Пришлось явно указывать typeof Combobox, чтобы TS не ругался(пробовал прокидывать через styled(Combobox)<ComponentProps<typeof Combobox>> дженерики, не помогло, ошибка TS)
export const StyledCombobox: typeof Combobox = styled(Combobox)`
  & .has-chips .textfield-input-text-ellipsis {
    color: transparent;
  }
`;
