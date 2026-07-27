import { ArgTypes } from '@storybook/blocks';
import { ComponentProps } from 'react';
import styled, { css } from 'styled-components';

export const StyledDiv = styled.div<{
  hideColumnDefault?: boolean;
  hideColumnName?: boolean;
  hideHeader?: boolean;
  transparent?: boolean;
  boxShadowNone?: boolean;
  borderNone?: boolean;
  paddingNone?: boolean;
}>`
  ${({ hideColumnDefault }) =>
    hideColumnDefault &&
    css`
      & th:nth-child(3),
      & td:nth-child(3) {
        display: none !important;
      }

      & th:nth-child(2),
      & td:nth-child(2) {
        border-right: 1px solid hsla(203, 50%, 30%, 0.15) !important;
      }
    `}
  ${({ hideColumnName }) =>
    hideColumnName &&
    css`
      & th:nth-child(1),
      & td:nth-child(1) {
        display: none !important;
      }
    `}
  ${({ hideHeader }) =>
    hideHeader &&
    css`
      & thead {
        display: none !important;
      }
      && table {
        margin-block: 0px;
      }
    `}
  ${({ transparent }) =>
    transparent &&
    css`
      & tbody {
        filter: none !important;

        * {
          background-color: transparent !important;
        }
      }
    `}
  ${({ boxShadowNone }) =>
    boxShadowNone &&
    css`
      & tbody {
        filter: none !important;
      }
    `}
  ${({ borderNone }) =>
    borderNone &&
    css`
      * {
        border: none !important;
      }
    `}
  ${({ paddingNone }) =>
    paddingNone &&
    css`
      * {
        padding: 0 !important;
      }
    `}
`;
export const CustomArgTypes = ({
  hideColumnDefault,
  hideColumnName,
  hideHeader,
  transparent,
  borderNone,
  paddingNone,
  boxShadowNone,
  ...rest
}: {
  hideColumnDefault?: boolean;
  hideColumnName?: boolean;
  hideHeader?: boolean;
  transparent?: boolean;
  borderNone?: boolean;
  paddingNone?: boolean;
  boxShadowNone?: boolean;
} & ComponentProps<typeof ArgTypes>) => (
  // const ref = useState('');

  <StyledDiv
    hideColumnDefault={hideColumnDefault}
    hideColumnName={hideColumnName}
    hideHeader={hideHeader}
    transparent={transparent}
    borderNone={borderNone}
    paddingNone={paddingNone}
    boxShadowNone={boxShadowNone}
  >
    <ArgTypes {...rest} />
  </StyledDiv>
);
