import { IconDisclosureDownOutline } from '@ui-kit/icons';

import { Canvas } from '../../TableGlide';
import { CanvasContent, isCanvasString } from '../TableGlideInstance';
import type { RowSize } from './rowIconConfig';
import { getSelectArrowBox } from './rowIconConfig';

type SelectCellVisual = {
  rowSize: RowSize;
  cellPaddingInline: number;
  cellVerticalPadding: number;
  // Куда прижать триггер (текст со стрелкой) в объединённом блоке. Пусто = ячейка не объединена.
  mergedVerticalAlign?: 'top' | 'center' | 'bottom';
  mergedHorizontalAlign?: 'left' | 'center' | 'right';
};

const openSelectEditorInteraction = {
  editor: 'open-on-click',
} as const;

// Верх / центр / низ блока -> justifyContent внешней колонки (двигает триггер).
const SELECT_CONTENT_VERTICAL_ALIGN = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
} as const;

// Лево / центр / право -> justifyContent зоны текста внутри триггера.
const SELECT_CONTENT_HORIZONTAL_ALIGN = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
} as const;

// Одна иконка на всех размерах строки, размер берётся из getSelectArrowBox.
const SelectArrowIcon = IconDisclosureDownOutline;

export const withSelectIcon = (
  content: CanvasContent,
  {
    isSelect,
    editModeEnabled,
    textInCanvasText,
    visual,
  }: {
    isSelect: boolean;
    editModeEnabled: boolean;
    textInCanvasText?: 'textInCanvasText';
    visual: SelectCellVisual;
  },
): CanvasContent => {
  if (isSelect) {
    const changedContent = isCanvasString(content) ? (
      <Canvas.Text overflow="hidden" textOverflow="ellipsis" autoTooltip>
        {content}
      </Canvas.Text>
    ) : (
      content
    );

    const {
      rowSize,
      cellPaddingInline,
      cellVerticalPadding,
      mergedVerticalAlign,
      mergedHorizontalAlign,
    } = visual;
    const { squareSize, iconSize, gapToText } = getSelectArrowBox(rowSize);

    // Отступы темы нужны только когда триггер прижат к верху или низу
    // слитого блока. При центрировании они мешают: в низкой строке квадрат
    // кнопки выше зазора между отступами, и раскладка прижимает его к
    // верхнему отступу вместо центра.
    const insetFromEdges =
      mergedVerticalAlign === 'top' || mergedVerticalAlign === 'bottom';

    // Внешняя колонка на всю высоту блока: justifyContent двигает триггер
    // вверх/центр/вниз.
    return (
      <Canvas.Container
        direction="column"
        justifyContent={
          mergedVerticalAlign
            ? SELECT_CONTENT_VERTICAL_ALIGN[mergedVerticalAlign]
            : 'center'
        }
        padding={
          insetFromEdges
            ? { top: cellVerticalPadding, bottom: cellVerticalPadding }
            : undefined
        }
        style={{ width: '100%', height: '100%' }}
      >
        {/* Триггер: текст и шеврон одной строкой, едут вместе. Шеврон справа
            резервирует место, поэтому текст под него не залезает. */}
        <Canvas.Container
          alignItems="center"
          gap={gapToText}
          padding={{ right: cellPaddingInline }}
          style={{ width: '100%' }}
        >
          <Canvas.Container
            justifyContent={
              mergedHorizontalAlign
                ? SELECT_CONTENT_HORIZONTAL_ALIGN[mergedHorizontalAlign]
                : undefined
            }
            style={{ flexGrow: 1, flexShrink: 1 }}
          >
            {changedContent}
          </Canvas.Container>

          {editModeEnabled && (
            <Canvas.EmbedIconButton
              icon={<SelectArrowIcon />}
              view="secondary"
              interaction={openSelectEditorInteraction}
              overrideSquareSize={squareSize}
              overrideIconSize={iconSize}
              style={{ cursor: 'pointer', flexShrink: 0 }}
            />
          )}
        </Canvas.Container>
      </Canvas.Container>
    );
  }

  if (textInCanvasText && isCanvasString(content)) {
    return <Canvas.Text>{content}</Canvas.Text>;
  }

  return content;
};
