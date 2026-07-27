import styled from 'styled-components';

export const CellContentSpan = styled.span<{
  alignContent?: 'left' | 'center' | 'right';
}>`
  width: 100%;
  display: inline-block;
  text-align: ${({ alignContent = 'left' }) => alignContent};
`;
