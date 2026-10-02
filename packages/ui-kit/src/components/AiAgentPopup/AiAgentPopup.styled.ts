import { Popup, popupClasses } from '@ui-kit/components/Popup';
import { br } from '@ui-kit/constants';
import { outlineAccentGradient, surfaceSolidCard } from '@ui-kit/tokens';
import styled, { css } from 'styled-components';

import {
  CARD_PADDING,
  DRAGGING_CLASS,
  GLOW_HEIGHT,
  GLOW_TOP_OVERHANG,
  GLOW_WIDTH_RATIO,
  INPUT_VERTICAL_CHROME,
  LEFT_PANEL_DIVIDER_GAP,
  LEFT_PANEL_HEADER_HEIGHT,
  LEFT_PANEL_RAIL_WIDTH,
  LEFT_PANEL_SECTION_WIDTH,
} from './AiAgentPopup.constants';

const C = {
  bg: () => surfaceSolidCard,
  outline: () => outlineAccentGradient,
  radius: () => br.m,
  padding: () => `${CARD_PADDING}px`,
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
   его заход под свой край. Направление row: слева левая панель (если
   есть), справа контент чата */
export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: ${C.padding};
  border-radius: ${C.radius};
  background: ${C.bg};
  overflow: hidden;
`;

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

/* Овальное свечение поля ввода, по макету (линейный градиент цветов,
   непрозрачность 0.56). Высота овала фиксированная, овал держится
   у верхней границы поля со свесом над ней: при авторосте поля он
   поднимается вместе с кромкой. По решению дизайнера свечение лежит
   ПОВЕРХ контента чата, включая сообщения с фоном; кликам не мешает,
   это чистая подсветка. Радиус размытия меньше макетных 92: гаусс
   такого радиуса на овале высотой 79 размазывает цвет в дымку,
   непохожую на макет, значение подобрано глазами */
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
  z-index: 1;
  border-radius: 50%;
  background: ${({ $isDark }) =>
    $isDark ? glowDarkBackground : glowLightBackground};
  filter: blur(40px);
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
  /* Само поле лежит над свечением: подсвечивается контент вокруг,
     а не текст, который набирает пользователь */
  position: relative;
  z-index: 2;

  textarea {
    max-height: ${({ $maxHeight }) => $maxHeight - INPUT_VERTICAL_CHROME}px;
  }
`;

/* ===== Левая панель ===== */

/* Обёртка левой панели: зона (полоса или раздел) и вертикальный девайдер.
   Встаёт слева от контента чата, тянется на всю высоту карточки */
export const StyledLeftPanel = styled.div`
  display: flex;
  align-items: stretch;
  flex: none;
  height: 100%;
`;

/* Зона панели меняет ширину между полосой иконок и раскрытым разделом;
   ширину анимируем, за ней тянется и ширина окна. overflow прячет раздел,
   пока зона сужена до полосы */
export const StyledLeftPanelZone = styled.div<{ $open: boolean }>`
  position: relative;
  flex: none;
  height: 100%;
  overflow: hidden;
  width: ${({ $open }) =>
    $open ? LEFT_PANEL_SECTION_WIDTH : LEFT_PANEL_RAIL_WIDTH}px;
  transition: width 0.3s ease;
`;

/* Полоса иконок и раздел наложены друг на друга и показываются по очереди
   через прозрачность (кросс-фейд): из раздела к другим иконкам можно
   вернуться только закрытием крестиком */
const panelLayer = css<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

export const StyledRail = styled.div<{ $active: boolean }>`
  ${panelLayer};
  width: ${LEFT_PANEL_RAIL_WIDTH}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const StyledRailItem = styled.div`
  position: relative;
  flex: none;
`;

/* Слот индикатора над иконкой: небольшой бейдж в правом верхнем углу,
   кликам по иконке не мешает */
export const StyledRailIndicator = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
`;

export const StyledSection = styled.div<{ $active: boolean }>`
  ${panelLayer};
  width: ${LEFT_PANEL_SECTION_WIDTH}px;
  display: flex;
  flex-direction: column;
`;

/* Шапка раздела фиксированной высоты: иконка, заголовок и крестик */
export const StyledSectionHeader = styled.div`
  flex: none;
  height: ${LEFT_PANEL_HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledSectionTitleIcon = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSectionTitle = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/* Контент раздела под шапкой. Отступы, скролл и наполнение задаёт
   потребитель, поэтому здесь только растяжка и min-height для его скролла */
export const StyledSectionContent = styled.div`
  flex: 1 1 auto;
  min-height: 0;
`;

/* Вертикальный девайдер между панелью и чатом: отступы по 4px с каждой
   стороны, сам девайдер (атомарный Divider) тянется на всю высоту */
export const StyledLeftPanelDivider = styled.div`
  flex: none;
  display: flex;
  margin: 0 ${LEFT_PANEL_DIVIDER_GAP}px;

  & > * {
    height: 100%;
  }
`;
