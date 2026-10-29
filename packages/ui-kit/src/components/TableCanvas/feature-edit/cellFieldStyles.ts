import { css } from 'styled-components';

import { ROW_SIZE_TOKENS } from '../../TableGlide/theming/size-tokens';
import {
  ROW_ICON_BUTTON_CONFIG,
  SELECT_TRIGGER_GAP,
} from '../renders/rowIconConfig';
import { type SIZE, SIZES } from '../styles';

export type CellFieldGeometry = {
  rowSize: SIZE;
  cellWidth: number;
  cellHeight: number;
  paddingInline?: number | undefined;
  paddingBlock?: number | undefined;
  disableLeftOffset?: boolean | undefined;
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

/**
 * Поле SDDS (TextField внутри Combobox и NumberFormat) в геометрии ячейки:
 * ширина и высота ячейки, отступы и шрифт строки, без скруглений, тени и
 * своего фона. Рамку и фон рисует оверлей редактора.
 */
export const cellFieldStyles = (geometry: CellFieldGeometry) => {
  const { inline, block } = resolveCellFieldPadding(geometry);
  const { rowSize, cellWidth, cellHeight, disableLeftOffset } = geometry;

  return css`
    && {
      width: ${cellWidth}px;
      max-width: none;

      .input-wrapper {
        box-sizing: border-box;
        height: ${cellHeight}px;
        min-height: 0;
        padding: ${block}px ${inline}px;
        ${disableLeftOffset && 'padding-left: 0;'}
        border-radius: 0;
        box-shadow: none;
        background-color: transparent;
      }

      .input-wrapper input {
        ${css(SIZES[rowSize].font())}
      }
    }
  `;
};

/**
 * Стрелка селекта там же, где на canvas: тот же размер иконки, тот же зазор
 * от текста и тот же отступ от правого края ячейки.
 */
export const selectArrowStyles = (rowSize: SIZE) => {
  const { overrideSquareSize, overrideIconSize } =
    ROW_ICON_BUTTON_CONFIG[rowSize];
  const edge = (overrideSquareSize - overrideIconSize) / 2;

  return css`
    && {
      --plasma-select-disclosure-icon-size: ${overrideIconSize}px;
      --plasma-select-disclosure-icon-margin: 0;
      --plasma-textfield__right-content-margin: 0 ${edge}px 0
        ${SELECT_TRIGGER_GAP}px;
      --plasma-textfield-content-right-wrapper-margin: 0;
      --plasma-textfield-content-right-wrapper-gap: 0;
    }
  `;
};
