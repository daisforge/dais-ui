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
  $draggable: boolean;
  $dragActive: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: 16px;
  /* Градиентную рамку нельзя задать через border-color, поэтому рисуем два
     фона: градиент нижним слоем виден только в зоне прозрачной рамки */
  border: 1px solid transparent;
  border-radius: ${C.radius};
  background: linear-gradient(${C.bg}, ${C.bg}) padding-box,
    ${C.outline} border-box;
  box-shadow: ${({ $shadow }) => $shadow};
  overflow: hidden;

  /* Подсказка курсором: grab там, где окно можно схватить. Интерактивные
     элементы (кнопки, поля) сохраняют свои курсоры сами, а зонам data-no-drag
     возвращаем обычный, чтобы курсор не обещал драг, который не сработает */
  ${({ $draggable }) =>
    $draggable &&
    css`
      cursor: grab;

      [data-no-drag],
      [data-no-drag] * {
        cursor: auto;
      }
    `}

  ${({ $dragActive }) =>
    $dragActive &&
    css`
      cursor: grabbing;
      user-select: none;
    `}
`;
