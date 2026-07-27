import styled, { css } from 'styled-components';

/**
 * Контейнер двух кнопок (основная иконка + шеврон). Горизонтальные паддинги
 * константны для всех размеров контрл-блока: слева 8px, справа 4px.
 *
 * Правила `& > div` и `& > div > div` нужны из-за TableDropdown (salutejs
 * Dropdown): он оборачивает кнопку-шеврон в inline-block обёртку с базлайн-
 * зазором по line-height. Её высота получается больше самой кнопки, кнопка
 * прижимается к верху, и иконка шеврона уезжает вверх относительно левой
 * иконки (особенно заметно на 16px в xs контрл-блоке). Левая кнопка это прямой
 * flex-ребёнок и центрируется честно, поэтому возвращаем центрирование обёртке
 * дропдауна и её внутреннему div. Список дропдауна рендерится через portal,
 * эти правила его не задевают.
 */
export const Root = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 4px;

  & > div {
    display: flex;
    align-items: center;
  }
  & > div > div {
    display: flex;
    align-items: center;
  }
`;

/**
 * Слот иконки внутри кнопки. Одинаков для основной иконки и шеврона, поэтому
 * обе центрируются идентично (line-height: 0 убирает inline-зазор). На шевроне
 * включается флип при открытом дропдауне.
 */
export const IconSlot = styled.span<{ $flippable?: boolean; $open?: boolean }>`
  display: flex;
  align-items: center;
  line-height: 0;
  ${({ $flippable, $open }) =>
    $flippable &&
    css`
      transform: ${$open ? 'scaleY(-1)' : 'scaleY(1)'};
      transition: transform 0.2s ease;
    `}
`;
