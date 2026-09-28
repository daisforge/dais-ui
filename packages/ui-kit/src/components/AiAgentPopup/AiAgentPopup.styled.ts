import { Popup, popupClasses } from '@ui-kit/components/Popup';
import { br } from '@ui-kit/constants';
import { outlineAccentGradient, surfaceSolidCard } from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import {
  GLOW_BOTTOM_OFFSET,
  GLOW_HEIGHT,
  GLOW_WIDTH_RATIO,
} from './AiAgentPopup.constants';

const C = {
  bg: () => surfaceSolidCard,
  outline: () => outlineAccentGradient,
  radius: () => br.m,
};

export const StyledPopup = styled(Popup)`
  && .${popupClasses.root} {
    padding: 0;
  }

  /* Курсор-кулак только во время самого перетаскивания, в покое курсор
     обычный (решение дизайнера) */
  &.ai-agent-popup-dragging {
    cursor: grabbing;
    user-select: none;
  }
`;

/**
 * Плавающий вариант оболочки, для окна. Рамка как в макете: обводка снаружи
 * (Figma stroke outside), в размеры контейнера не входит, паддинги
 * и ресайз-иконка считаются от белого края.
 */
export const StyledSurfaceFloating = styled.div<{ $shadow: string }>`
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

  /* Градиентное кольцо рисуем псевдоэлементом: маска вырезает середину,
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
`;

/**
 * Встроенный вариант оболочки, для лэйаута. Рамка здесь обычный padding
 * с градиентным фоном, то есть часть блочной модели: отступы и гэпы
 * лэйаута считаются от светящегося края, а не от белой карточки.
 */
export const StyledSurfaceEmbedded = styled.div<{ $shadow: string }>`
  position: relative;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: calc(${C.radius} + 4px);
  background: ${C.outline};
  box-shadow: ${({ $shadow }) => $shadow};
`;

/* Белая карточка отдельно от рамки: overflow здесь обрезает контент
   и свечение по скруглению, не задевая рамку. position нужен, чтобы
   в плавающем варианте карточка рисовалась поверх кольца и прятала
   его заход под свой край */
export const StyledCard = styled.div`
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

/* Контент всегда поверх слоя свечения, потребителю следить за слоями
   не нужно */
export const StyledCardContent = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

/* Слой свечения: фон карточки, паддинги контентной области его не сжимают */
export const StyledGlowClip = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: ${C.radius};
  pointer-events: none;
`;

/* Овальное свечение по макету: 304x79 при ширине окна 360, поэтому ширина
   в долях от окна и растёт при ресайзе, а высота фиксированная. Два слоя:
   широкий мягкий ореол и более плотное ядро, один сильный blur съедал бы
   всю насыщенность цвета. Включение и выключение плавные */
const glowBase = css<{ $visible: boolean }>`
  position: absolute;
  left: 50%;
  bottom: ${GLOW_BOTTOM_OFFSET}px;
  transform: translateX(-50%);
  width: ${GLOW_WIDTH_RATIO * 100}%;
  height: ${GLOW_HEIGHT}px;
  border-radius: 50%;
  background: linear-gradient(
    268.89deg,
    rgba(157, 179, 255, 1) 6.881%,
    rgba(0, 224, 255, 1) 50.076%,
    rgba(157, 179, 255, 1) 99.883%
  );
  transition: opacity 0.3s ease;
`;

export const StyledGlowHalo = styled.div<{ $visible: boolean }>`
  ${glowBase};
  filter: blur(92px);
  opacity: ${({ $visible }) => ($visible ? 0.2 : 0)};
`;

export const StyledGlowCore = styled.div<{ $visible: boolean }>`
  ${glowBase};
  filter: blur(28px);
  opacity: ${({ $visible }) => ($visible ? 0.14 : 0)};
`;
