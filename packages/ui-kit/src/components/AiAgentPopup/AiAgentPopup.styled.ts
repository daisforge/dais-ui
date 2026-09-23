import { Popup, popupClasses } from '@ui-kit/components/Popup';
import { br } from '@ui-kit/constants';
import { outlineAccentGradient, surfaceSolidCard } from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

const C = {
  bg: () => surfaceSolidCard,
  outline: () => outlineAccentGradient,
  radius: () => br.m,
};

export const StyledPopup = styled(Popup)`
  && .${popupClasses.root} {
    padding: 0;
  }
`;

export const StyledContainer = styled.div<{
  $shadow: string;
  $dragActive: boolean;
}>`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${C.radius};

  /* Свечение отдаём прозрачному слою размером с внешний край рамки: тень,
     повешенная на саму карточку, первые 4px пряталась бы под кольцом */
  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: calc(${C.radius} + 4px);
    box-shadow: ${({ $shadow }) => $shadow};
    pointer-events: none;
  }

  /* Рамка как в макете: обводка снаружи (Figma stroke outside), в размеры
     контейнера не входит, паддинги и ресайз-иконка считаются от белого края.
     Градиентное кольцо рисуем псевдоэлементом: маска вырезает середину,
     оставляя полосу вокруг контейнера толщиной в свой padding. Полоса на
     1px толще выноса кольца наружу и этим заходит под карточку: встык при
     дробной позиции окна браузер оставлял бы между ними полупрозрачный
     субпиксельный шов */
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    padding: 5px;
    border-radius: calc(${C.radius} + 4px);
    background: ${C.outline};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  ${({ $dragActive }) =>
    $dragActive &&
    css`
      cursor: grabbing;
      user-select: none;
    `}
`;

/* Белая карточка отдельно от кольца: overflow здесь обрезает контент по
   скруглению, не задевая выступающую наружу рамку. position нужен, чтобы
   карточка рисовалась поверх кольца и прятала его заход под свой край */
export const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: 16px;
  border-radius: ${C.radius};
  background: ${C.bg};
  overflow: hidden;
`;
