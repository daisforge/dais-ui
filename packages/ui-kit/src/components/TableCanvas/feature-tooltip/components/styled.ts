import styled from 'styled-components';

export const StyledContainer = styled.div`
  & .popover-wrapper,
  .popover-target {
    height: 100%; // Нужно добавить, иначе TOOLTIP РАСТЯГИВАЕТ больше чем target
    width: 100%; // Нужно добавить, иначе TOOLTIP РАСТЯГИВАЕТ больше чем target
  }
`;
