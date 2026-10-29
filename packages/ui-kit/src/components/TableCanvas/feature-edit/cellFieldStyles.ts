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
  /** Куда прижат текст объединённого блока. Пусто или center: по центру. */
  verticalAlign?: 'top' | 'center' | 'bottom' | undefined;
};

/**
 * Отступы поля: из темы ячейки, если редактор их получил, иначе из токенов
 * размера строки.
 */
export const resolveCellFieldPadding = ({
  rowSize,
  paddingInline,
  paddingBlock,
}: Pick<CellFieldGeometry, 'rowSize' | 'paddingInline' | 'paddingBlock'>) => ({
  inline: paddingInline ?? ROW_SIZE_TOKENS[rowSize].cellHorizontalPadding,
  block: paddingBlock ?? ROW_SIZE_TOKENS[rowSize].cellVerticalPadding,
});

const FIELD_ALIGN_ITEMS = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
} as const;

/**
 * Коробка поля в оверлее: шириной с ячейку, а рядом с шевроном дерева или
 * кнопкой деталей строки берёт остаток ширины контейнера. Класс styled у
 * Combobox уходит на внутренний TextField, поэтому ширину держит эта коробка.
 */
export const FieldBox = styled.div<{ $cellWidth: number }>`
  display: flex;
  width: ${({ $cellWidth }) => $cellWidth}px;
  flex: 1 1 0;
  min-width: 0;

  > * {
    flex: 1 1 0;
    min-width: 0;
  }
`;

/**
 * Поле SDDS (TextField внутри Combobox и NumberFormat) в геометрии ячейки:
 * ширина и высота ячейки, отступы и шрифт строки, без скруглений, тени и
 * своего фона. Рамку и фон рисует оверлей редактора, ширину задаёт FieldBox.
 */
export const cellFieldStyles = (geometry: CellFieldGeometry) => {
  const { inline, block } = resolveCellFieldPadding(geometry);
  const { rowSize, cellHeight, disableLeftOffset, verticalAlign } = geometry;

  return css`
    && {
      width: 100%;
      max-width: none;
      min-width: 0;

      .input-wrapper {
        box-sizing: border-box;
        height: ${cellHeight}px;
        min-height: 0;
        padding: ${block}px ${inline}px;
        border-radius: 0;
        box-shadow: none;
        background-color: transparent;
        align-items: ${FIELD_ALIGN_ITEMS[verticalAlign ?? 'center']};
        ${disableLeftOffset &&
        css`
          padding-left: 0;
        `}
      }

      .input-wrapper input {
        ${css(SIZES[rowSize].font())}
      }
    }
  `;
};

/**
 * Стрелка селекта как на canvas: иконка того же размера (через переменную
 * Plasma), тот же зазор от текста и тот же отступ от правого края. На canvas
 * иконка стоит по центру квадрата кнопки, поэтому справа добавляется половина
 * разницы квадрата и иконки, плюс запас ширины оверлея Glide: поле тянется на
 * всю ширину оверлея, и без этого стрелка уезжает на пиксель вправо.
 * Переменные с двойным подчёркиванием внутренние у TextField Plasma, проверено
 * на @salutejs/sdds-finai из package.json этого пакета.
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
