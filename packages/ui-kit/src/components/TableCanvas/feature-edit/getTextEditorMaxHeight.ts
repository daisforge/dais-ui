/** Редактор текста растёт до этой доли высоты окна, дальше прокрутка в поле. */
const MAX_WINDOW_HEIGHT_SHARE = 0.25;

/** Запас до низа окна, такой же у оверлея Glide. */
const WINDOW_BOTTOM_GAP = 10;

/**
 * Предел высоты редактора текста.
 * Объединённый блок, у которого виден низ, редактор может заполнить до низа, даже
 * если блок выше четверти окна, иначе поле было бы меньше ячейки. У блока, низ
 * которого за областью данных, и у одиночной ячейки предел четверть окна.
 */
export const getTextEditorMaxHeight = ({
  cellHeight,
  editorTop,
  windowHeight,
  blockBottom,
}: {
  cellHeight: number;
  editorTop: number;
  windowHeight: number;
  /** Низ объединённого блока в координатах окна, если он виден. */
  blockBottom?: number | undefined;
}) =>
  Math.max(
    cellHeight,
    Math.min(
      Math.max(
        windowHeight * MAX_WINDOW_HEIGHT_SHARE,
        blockBottom !== undefined ? blockBottom - editorTop : 0,
      ),
      windowHeight - editorTop - WINDOW_BOTTOM_GAP,
    ),
  );
