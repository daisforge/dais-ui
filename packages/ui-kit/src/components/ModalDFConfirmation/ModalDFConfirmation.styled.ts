import {
  ModalDF,
  modalDFClassNames,
  ModalDFServiceButtons,
} from '@ui-kit/components/ModalDF';
import {
  dataInfoGradient,
  dataNegativeGradient,
  dataPositiveGradient,
  dataWarningGradient,
  surfaceSolidCard,
  textInfo,
  textNegative,
  textPositive,
  textWarning,
} from '@ui-kit/tokens';
import styled from 'styled-components';

export const colors = {
  positive: () => dataPositiveGradient,
  warning: () => dataWarningGradient,
  info: () => dataInfoGradient,
  negative: () => dataNegativeGradient,
  default: () => surfaceSolidCard,
};

export const iconColors = {
  positive: textPositive,
  warning: textWarning,
  info: textInfo,
  negative: textNegative,
};

export const StyledModalDF = styled(ModalDF)<{
  $view?: keyof typeof colors;
}>`
  & .${modalDFClassNames.container} {
    position: relative;
    overflow: hidden;
    padding-top: ${({ $view }) => ($view ? '76px' : '0')};
  }

  & .${modalDFClassNames.container}::after {
    content: '';
    position: absolute;
    z-index: -2;
    height: 804px;
    width: 804px;
    top: -610px;
    left: calc(50% - 402px);
    background: ${({ $view }) => ($view ? colors[$view] : colors.default)};
  }
`;

export const StyledIconBlock = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 35px;
  display: flex;
  justify-content: center;
`;

export const StyledServiceButtons = styled(ModalDFServiceButtons)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
