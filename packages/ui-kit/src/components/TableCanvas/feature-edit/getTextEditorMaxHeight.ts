/** Редактор текста растёт до этой доли высоты окна, дальше прокрутка в поле. */
const MAX_WINDOW_HEIGHT_SHARE = 0.25;

/** Запас до низа окна, такой же у оверлея Glide. */
const WINDOW_BOTTOM_GAP = 10;

export const getTextEditorMaxHeight = ({
  cellHeight,
  editorTop,
  windowHeight,
}: {
  cellHeight: number;
  editorTop: number;
  windowHeight: number;
}) =>
  Math.max(
    cellHeight,
    Math.min(
      windowHeight * MAX_WINDOW_HEIGHT_SHARE,
      windowHeight - editorTop - WINDOW_BOTTOM_GAP,
    ),
  );
