import styled, { css } from 'styled-components';

import { GLIDE_EDITOR_TARGET_EXTRA } from '../../TableGlide/constants';
import { ROW_SIZE_TOKENS } from '../../TableGlide/theming/size-tokens';
import { getSelectArrowBox } from '../renders/rowIconConfig';
import { type SIZE, SIZES } from '../styles';

export type CellFieldGeometry = {
  rowSize: SIZE;
  cellWidth: number;
  cellHeight: number;
  paddingInline?: number | undefined;
  paddingBlock?: number | undefined;
  disableLeftOffset?: boolean | undefined;
};

export type FieldVerticalAlign = 'top' | 'center' | 'bottom';

const FIELD_ALIGN_ITEMS = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
} as const;

/** Высота поля: одна строка по размеру строк, даже если ячейка выше. */
const getFieldHeight = (rowSize: SIZE, cellHeight: number) =>
  Math.min(cellHeight, ROW_SIZE_TOKENS[rowSize].rowHeight + 1);

/**
 * Отступы поля такие же, как у ячейки.
 * Берутся из темы, а если редактор их не получил, из токенов размера строки.
 */
export const resolveCellFieldPadding = ({
  rowSize,
  paddingInline,
  paddingBlock,
}: Pick<CellFieldGeometry, 'rowSize' | 'paddingInline' | 'paddingBlock'>) => ({
  inline: paddingInline ?? ROW_SIZE_TOKENS[rowSize].cellHorizontalPadding,
  block: paddingBlock ?? ROW_SIZE_TOKENS[rowSize].cellVerticalPadding,
});

/**
 * Обёртка поля шириной с ячейку.
 * Рядом с шевроном дерева или кнопкой деталей она берёт оставшуюся ширину.
 * Нужна потому, что класс styled у Combobox попадает на внутренний TextField,
 * а не на внешний блок, и ширину через него не задать.
 * В ячейке выше обычной строки поле встаёт по выравниванию блока, иначе по центру.
 */
export const FieldBox = styled.div<{
  $cellWidth: number;
  $cellHeight: number;
  $verticalAlign?: FieldVerticalAlign | undefined;
}>`
  display: flex;
  align-items: ${({ $verticalAlign }) =>
    FIELD_ALIGN_ITEMS[$verticalAlign ?? 'center']};
  width: ${({ $cellWidth }) => $cellWidth}px;
  min-height: ${({ $cellHeight }) => $cellHeight}px;
  flex: 1 1 0;
  min-width: 0;

  > * {
    flex: 1 1 0;
    min-width: 0;
  }
`;

/**
 * Поле ввода выглядит как ячейка в просмотре.
 * Высота, отступы и шрифт как у ячейки, без скруглений, тени и своего фона.
 * Касается TextField SDDS внутри Combobox и NumberFormat.
 * Рамку и фон рисует оверлей редактора, ширину задаёт FieldBox.
 */
export const cellFieldStyles = (geometry: CellFieldGeometry) => {
  const { inline, block } = resolveCellFieldPadding(geometry);
  const { rowSize, cellHeight, disableLeftOffset } = geometry;

  return css`
    && {
      width: 100%;
      max-width: none;
      min-width: 0;

      .input-wrapper {
        height: ${getFieldHeight(rowSize, cellHeight)}px;
        min-height: 0;
        padding: ${block}px ${inline}px;
        border-radius: 0;
        box-shadow: none;
        background-color: transparent;
        align-items: center;
        ${disableLeftOffset &&
        css`
          padding-left: 0;
        `}
      }

      /* Canvas рисует буквы без сжатия из токена шрифта. */
      .input-wrapper input {
        ${css(SIZES[rowSize].font())}
        letter-spacing: normal;
      }
    }
  `;
};

/**
 * Стрелка селекта в редакторе того же размера и на том же месте, что на canvas.
 * Размер иконки задаём через переменную Plasma.
 * Отступ справа: половина разницы между квадратом кнопки и иконкой
 * (на canvas иконка стоит по центру квадрата) плюс лишний пиксель Glide,
 * иначе стрелка сдвигается на пиксель вправо.
 * Переменные с двойным подчёркиванием внутренние у TextField Plasma,
 * проверено на версии @salutejs/sdds-finai из package.json пакета.
 */
export const selectArrowStyles = (rowSize: SIZE) => {
  const { iconSize, edgeInset, gapToText } = getSelectArrowBox(rowSize);

  return css`
    && {
      --plasma-select-disclosure-icon-size: ${iconSize}px;
      --plasma-select-disclosure-icon-margin: 0;
      --plasma-textfield__right-content-margin: 0
        ${edgeInset + GLIDE_EDITOR_TARGET_EXTRA}px 0 ${gapToText}px;
      --plasma-textfield-content-right-wrapper-margin: 0;
      --plasma-textfield-content-right-wrapper-gap: 0;
    }
  `;
};
