import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  min-width: 0;
`;

export const TextViewport = styled.div<{ $lines: number }>`
  width: 100%;
  overflow: clip;

  &[data-collapsed='true']:not([data-animating]) > :first-child,
  &[data-measuring] > :first-child {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({ $lines }) => $lines};
    overflow: hidden;
  }
`;
