import { Checkbox } from '@ui-kit/components/Checkbox';
import { bodyM, bodyS, bodyXS, outlineSolidPrimary } from '@ui-kit/tokens';
import styled from 'styled-components';

export const CHECKBOX_SPACING = {
  small: {
    padding: '8px 8px',
    labelMargin: '4px',
    ...bodyXS,
  },
  medium: {
    padding: '8px 12px',
    labelMargin: '6px',
    ...bodyS,
  },
  big: {
    padding: '12px 14px',
    labelMargin: '6px',
    ...bodyM,
  },
};

interface CheckBoxAllSelectedProps {
  $rowSize?: 'small' | 'medium' | 'big';
}

export const CheckBoxAllSelected = styled(Checkbox)<CheckBoxAllSelectedProps>`
  && {
    ${({ $rowSize = 'medium' }) => {
      const spacing = CHECKBOX_SPACING[$rowSize];

      return `
        padding: ${spacing.padding};
        border-bottom: 1px solid ${outlineSolidPrimary};
        
        & label {
          width: 100%;
        }

        & label > div:last-child {
          margin-left: ${spacing.labelMargin};
        }

        & label > div:last-child > span {
          font-size: ${spacing.fontSize};
          flex-grow: 1;
        }
      `;
    }}
  }
`;
