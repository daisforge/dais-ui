import styled from 'styled-components';

export const Layout = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  min-width: 0;
`;

export const Text = styled.span`
  display: block;
`;

export const TextViewport = styled.span<{ $lines: number }>`
  width: 100%;
  overflow: hidden;

  &[data-collapsed='true']:not([data-animating]) > ${Text} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({ $lines }) => $lines};
    overflow: hidden;
  }
`;
