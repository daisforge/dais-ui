import { IconChevronDown, IconDisclosureDownOutline } from '@ui-kit/icons';

import { Canvas } from '../../TableGlide';
import { CanvasContent, isCanvasString } from '../TableGlideInstance';
import type { RowSize } from './rowIconConfig';
import { ROW_HEIGHT_BY_SIZE, ROW_ICON_BUTTON_CONFIG } from './rowIconConfig';

type SelectCellVisual = {
  rowSize: RowSize;
  cellPaddingInline: number;
  overlayRightOffset: number;
};

const openSelectEditorInteraction = {
  editor: 'open-on-click'
} as const;

const SELECT_TRIGGER_LEFT_GAP_BY_SIZE: Record<RowSize, number> = {
  big: 10,
  medium: 8,
  small: 6
};

const SELECT_TRIGGER_VERTICAL_INSET = 1;

const selectOverlayBackgroundProps = {
  // Цвет выбранной/активной ячейки появляется только в draw-фазе как cellFillColor.
  // Поэтому select overlay использует приватный resolver, не расширяя публичный backgroundColor API.
  __backgroundColorResolver: (theme: { bgCell: string }) => theme.bgCell
};

const SELECT_ARROW_ICON_BY_ROW_SIZE = {
  big: IconDisclosureDownOutline,
  medium: IconChevronDown,
  small: IconChevronDown
} as const;

export const withSelectIcon = (
  content: CanvasContent,
  {
    isSelect,
    editModeEnabled,
    textInCanvasText,
    visual
  }: {
    isSelect: boolean;
    editModeEnabled: boolean;
    textInCanvasText?: 'textInCanvasText';
    visual: SelectCellVisual;
  }
): CanvasContent => {
  if (isSelect) {
    const changedContent = isCanvasString(content) ? (
      <Canvas.Text>{content}</Canvas.Text>
    ) : (
      content
    );

    const { rowSize, cellPaddingInline, overlayRightOffset } = visual;
    const { overrideSquareSize, overrideIconSize } =
      ROW_ICON_BUTTON_CONFIG[rowSize];
    const triggerLeftGap = SELECT_TRIGGER_LEFT_GAP_BY_SIZE[rowSize];
    const triggerWidth =
      triggerLeftGap + overrideSquareSize + cellPaddingInline;
    const triggerHeight =
      ROW_HEIGHT_BY_SIZE[rowSize] - SELECT_TRIGGER_VERTICAL_INSET * 2;
    const iconTopInsideTrigger = (triggerHeight - overrideSquareSize) / 2;
    const overlayRight = -overlayRightOffset;
    const SelectArrowIcon = SELECT_ARROW_ICON_BY_ROW_SIZE[rowSize];

    return (
      <Canvas.Container
        alignItems="center"
        position="relative"
        style={{ width: '100%', height: '100%' }}
      >
        {changedContent}

        {editModeEnabled && (
          <Canvas.Container
            key="select-trigger"
            position="absolute"
            top={SELECT_TRIGGER_VERTICAL_INSET}
            right={overlayRight}
            bottom={SELECT_TRIGGER_VERTICAL_INSET}
            zIndex={1}
            {...selectOverlayBackgroundProps}
            onClick={(event) => {
              event.stopPropagation();
            }}
            style={{
              width: triggerWidth
            }}
          >
            <Canvas.EmbedIconButton
              icon={<SelectArrowIcon />}
              view="secondary"
              position="absolute"
              top={iconTopInsideTrigger}
              right={cellPaddingInline}
              interaction={openSelectEditorInteraction}
              overrideSquareSize={overrideSquareSize}
              overrideIconSize={overrideIconSize}
              style={{ cursor: 'pointer' }}
            />
          </Canvas.Container>
        )}
      </Canvas.Container>
    );
  }

  if (textInCanvasText && isCanvasString(content)) {
    return <Canvas.Text>{content}</Canvas.Text>;
  }

  return content;
};
