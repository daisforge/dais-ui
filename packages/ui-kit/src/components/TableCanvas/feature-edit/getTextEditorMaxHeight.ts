/** Редактор текста растёт до этой доли высоты таблицы, дальше прокрутка в поле. */
const MAX_TABLE_HEIGHT_SHARE = 0.25;

/** Запас до низа окна, такой же у оверлея Glide. */
const WINDOW_BOTTOM_GAP = 10;

export const getTextEditorMaxHeight = ({
  cellHeight,
  tableHeight,
  editorTop,
  windowHeight,
}: {
  cellHeight: number;
  tableHeight: number | undefined;
  editorTop: number;
  windowHeight: number;
}) =>
  Math.max(
    cellHeight,
    Math.min(
      (tableHeight ?? Infinity) * MAX_TABLE_HEIGHT_SHARE,
      windowHeight - editorTop - WINDOW_BOTTOM_GAP,
    ),
  );
