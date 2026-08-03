import { TextField } from '@ui-kit/components/TextField';
import styled from 'styled-components';

export const cls = {
  hiddenInput: 'form-segment__hidden-input',
} as const;

/** Внешний контейнер для layout. НЕ стилизуем сам SegmentGroup! */
export const SegmentGroupContainer = styled.div<{ $mode?: 'column' | 'row' }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/** Скрытый TextField — чтобы отрисовать label/required/подсказки */
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
