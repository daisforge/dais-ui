import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  min-width: 0;
`;

export const TextViewport = styled.div<{ $collapsedLines: number }>`
  width: 100%;
  overflow: hidden;

  &[data-collapsed='true']:not([data-animating]) > :first-child {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({ $collapsedLines }) => $collapsedLines};
    overflow: hidden;
  }
`;
