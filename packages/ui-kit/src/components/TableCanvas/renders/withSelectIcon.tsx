import { IconChevronDown, IconDisclosureDownOutline } from '@ui-kit/icons';

import { Canvas } from '../../TableGlide';
import { CanvasContent, isCanvasString } from '../TableGlideInstance';
import type { RowSize } from './rowIconConfig';
import { ROW_ICON_BUTTON_CONFIG } from './rowIconConfig';

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

// Зазор между текстом и шевроном внутри триггера.
const SELECT_TRIGGER_GAP = 8;

const SELECT_ARROW_ICON_BY_ROW_SIZE = {
  big: IconDisclosureDownOutline,
  medium: IconChevronDown,
  small: IconChevronDown,
} as const;

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
      <Canvas.Text>{content}</Canvas.Text>
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
    const { overrideSquareSize, overrideIconSize } =
      ROW_ICON_BUTTON_CONFIG[rowSize];
    const SelectArrowIcon = SELECT_ARROW_ICON_BY_ROW_SIZE[rowSize];

    // Внешняя колонка на всю высоту блока: justifyContent двигает триггер
    // вверх/центр/вниз. Вертикальные паддинги темы держат отступ от краёв блока.
    return (
      <Canvas.Container
        direction="column"
        justifyContent={
          mergedVerticalAlign
            ? SELECT_CONTENT_VERTICAL_ALIGN[mergedVerticalAlign]
            : 'center'
        }
        padding={{ top: cellVerticalPadding, bottom: cellVerticalPadding }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Триггер: текст и шеврон одной строкой, едут вместе. Шеврон справа
            резервирует место, поэтому текст под него не залезает. */}
        <Canvas.Container
          alignItems="center"
          gap={SELECT_TRIGGER_GAP}
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
              overrideSquareSize={overrideSquareSize}
              overrideIconSize={overrideIconSize}
              style={{ cursor: 'pointer' }}
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
