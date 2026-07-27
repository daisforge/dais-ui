import { TextArea } from '@salutejs/sdds-finai';
import { s } from '@ui-kit/constants';
import styled, { css } from 'styled-components';

export const StyledTextArea = styled(TextArea)<{ hasManyIcons: boolean }>`
  .textarea-has-right-content {
    ${({ hasManyIcons }) =>
      hasManyIcons &&
      css`
        padding-right: ${s.x32};
      `};
  }
`;
