import styled from 'styled-components';

import { analyticalWidgetClassNames as cls } from '../../AnalyticalWidget.constants';

export const StyledAbsoluteDots = styled.div<{ $offset: number }>`
  position: absolute;
  top: ${({ $offset }) => $offset}px;
  right: ${({ $offset }) => $offset}px;

  // Если рядом (сиблинг, в т.ч. вложенный) виджет с заполненным rightSlot —
  // поднимаем top на 4px (12 -> 16). right не меняется. Работает при общем DOM.
  .${cls.hasRightSlot} ~ &,
  &:has(~ .${cls.hasRightSlot}),
  &:has(~ * .${cls.hasRightSlot}) {
    top: ${({ $offset }) => $offset + 4}px;
  }
`;
