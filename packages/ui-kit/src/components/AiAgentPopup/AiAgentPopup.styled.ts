import { Popup, popupClasses } from '@ui-kit/components/Popup';
import { br } from '@ui-kit/constants';
import { outlineAccentGradient, surfaceSolidCard } from '@ui-kit/tokens';
import styled from 'styled-components';

import {
  DRAGGING_CLASS,
  GLOW_HEIGHT,
  GLOW_TOP_OVERHANG,
  GLOW_WIDTH_RATIO,
  INPUT_VERTICAL_CHROME,
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
  &.${DRAGGING_CLASS} {
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
  /* Иначе на тач-устройствах перетаскивание окна конкурирует со скроллом
     страницы (touchmove пассивный, preventDefault не поможет). Скроллу
     ленты сообщений не мешает: у неё свой скролл-контейнер, и жесты
     по ней считаются до него */
  touch-action: none;

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

  /* Рамка: сплошной градиентный слой на 4px больше контейнера. Середину
     вырезать не нужно, её накрывает непрозрачная карточка (она поверх),
     снаружи остаётся только кант рамки. Заодно исключается субпиксельный
     шов между рамкой и карточкой при дробной позиции окна */
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: calc(${C.radius} + 4px);
    background: ${C.outline};
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

/* z-index создаёт контекст наложения: свечение поля ввода с отрицательным
   z-index рисуется над фоном карточки, но под всем контентом, и потребителю
   следить за слоями не нужно */
export const StyledCardContent = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledInputRoot = styled.div`
  position: relative;
`;

/* Овальное свечение позади поля ввода, по макету (линейный градиент
   цветов, размытие, непрозрачность 0.56). Высота овала фиксированная,
   овал держится у верхней границы поля со свесом над ней: при авторосте
   поля он поднимается вместе с кромкой, а его нижняя часть уходит
   за поле. Радиус размытия умеренный: большое значение из макета
   размазывало овал такой высоты в невидимую дымку. Отрицательный z-index
   уводит свечение под соседний контент (сообщения чата); для этого нужен
   предок с контекстом наложения, внутри AiAgentSurface он уже есть */
/* Цвета из макетов, токена у атомарки под них нет. У тёмной темы
   прозрачность зашита в сами цвета градиента, поэтому непрозрачность
   слоя там полная, а у светлой 0.56 из макета */
const glowLightBackground = `linear-gradient(
  268.89deg,
  rgba(157, 179, 255, 1) 6.881%,
  rgba(0, 224, 255, 1) 50.076%,
  rgba(157, 179, 255, 1) 99.883%
)`;

const glowDarkBackground = `linear-gradient(
  268.89deg,
  rgba(111, 144, 255, 0.7) 6.881%,
  rgba(11, 226, 255, 0.8) 50.076%,
  rgba(111, 144, 255, 0.7) 99.883%
)`;

export const StyledInputGlow = styled.div<{
  $visible: boolean;
  $isDark: boolean;
}>`
  position: absolute;
  top: ${-GLOW_TOP_OVERHANG}px;
  height: ${GLOW_HEIGHT}px;
  left: 50%;
  transform: translateX(-50%);
  width: ${GLOW_WIDTH_RATIO * 100}%;
  z-index: -1;
  border-radius: 50%;
  background: ${({ $isDark }) =>
    $isDark ? glowDarkBackground : glowLightBackground};
  filter: blur(20px);
  opacity: ${({ $visible, $isDark }) => {
    if (!$visible) return 0;
    return $isDark ? 1 : 0.56;
  }};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

/* Фон у поля атомарки полупрозрачный, и свечение просвечивало бы сквозь
   него. Непрозрачная подложка цвета карточки глушит свечение, поле поверх
   неё выглядит как обычно. Радиус равен радиусу поля размера s.
   Пиксельный предел высоты при авторосте задаётся здесь: у атомарного
   поля ограничение только в строках, а на разных размерах окна это
   некорректно. maxHeight означает высоту рамки поля целиком, поэтому
   из него вычитается обвязка вокруг textarea */
export const StyledInputBackplate = styled.div<{ $maxHeight: number }>`
  background: ${C.bg};
  border-radius: 0.625rem;

  textarea {
    max-height: ${({ $maxHeight }) => $maxHeight - INPUT_VERTICAL_CHROME}px;
  }
`;
