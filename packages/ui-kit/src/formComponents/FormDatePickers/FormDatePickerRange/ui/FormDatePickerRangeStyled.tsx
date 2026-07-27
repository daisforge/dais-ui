import { DatePickerRange } from '@ui-kit/components/DatePicker';
import styled from 'styled-components';

export const DatePickerRangeStyled = styled(DatePickerRange)`
  width: 100%;
  & :where(.popover-target > :first-child, .popover-target, .popover-wrapper) {
    width: 100%;
  }
`;
