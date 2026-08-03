import { Radiobox, RadioGroup } from '@ui-kit/components/Radiobox';
import { TextField } from '@ui-kit/components/TextField';
import { s } from '@ui-kit/constants';
import { ComponentType } from 'react';
import styled, { css } from 'styled-components';

import { formGroupRadioBoxClassNames as cls } from './classNames';
import type { NativeRadioboxProps } from './types';

const C = {
  spaceX8: () => s.x8,
  spaceX12: () => s.x12,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormRadioGroupStyled = styled(RadioGroup as ComponentType<any>)<{
  $mode?: 'column' | 'row';
}>`
  --form-group-box-container-gap: ${C.spaceX8};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${C.spaceX8};

  & .${cls.groupBoxContainer} {
    ${({ $mode }) =>
      $mode &&
      css`
        --form-group-box-container-gap: ${C.spaceX12};
      `}
    display: flex;
    flex-direction: ${({ $mode }) => $mode ?? 'column'};
    gap: var(--form-group-box-container-gap);
  }
`;

export const FormRadioboxStyled = styled(Radiobox)<
  NativeRadioboxProps & {
    $isError?: boolean;
  }
>`
  ${({ $isError }) =>
    $isError &&
    css`
      .radiobox-trigger {
        border: 1px solid red;
      }
    `}
`;

export const HiddenTextField = styled(TextField)`
  &&.${cls.hiddenInput} {
    .input-wrapper,
    .input-wrapper * {
      pointer-events: none;
      max-height: 0;
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
  }
  & > div {
    margin-bottom: 0;
  }
`;
