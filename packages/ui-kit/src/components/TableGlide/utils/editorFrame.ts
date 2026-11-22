import {
  EDITOR_BLOCK_BOTTOM_VAR,
  EDITOR_BLOCK_TOP_VAR,
  EDITOR_BOTTOM_LINE_VAR,
  EDITOR_FRAME_CHANGE_EVENT,
  EDITOR_TOP_LINE_VAR,
} from '../constants';

/** Края объединённого блока под редактором и область данных при открытии, в координатах окна. */
export type EditorFrame = {
  blockTop: number;
  blockBottom: number;
  dataTop: number;
  dataBottom: number;
  scrollTop: number;
};

/**
 * Переменные рамки редактора (styled.ts): рамка обводит весь блок, поэтому края
 * обрезаем по области данных, а линию у обрезанного края не рисуем. shift: на
 * сколько блок уехал прокруткой с открытия.
 */
export const getEditorFrameVars = (
  frame: EditorFrame,
  shift: number,
): Record<string, string> => {
  const blockTop = frame.blockTop - shift;
  const blockBottom = frame.blockBottom - shift;
  return {
    [EDITOR_BLOCK_TOP_VAR]: `${Math.max(blockTop, frame.dataTop)}px`,
    [EDITOR_BLOCK_BOTTOM_VAR]: `${Math.min(blockBottom, frame.dataBottom)}px`,
    [EDITOR_TOP_LINE_VAR]: blockTop >= frame.dataTop ? '1px' : '0px',
    [EDITOR_BOTTOM_LINE_VAR]: blockBottom <= frame.dataBottom ? '1px' : '0px',
  };
};

/**
 * При прокрутке оверлей Glide остаётся на месте, а блок уезжает ровно на
 * величину прокрутки: сдвигаем края, замеренные при открытии. Пока блок и
 * редактор пересекаются, рамка обводит их вместе; разошлись, переменные снимаем
 * и рамка только вокруг редактора. Редактор узнаёт о сдвиге по событию.
 */
export const syncEditorFrame = (
  overlay: HTMLElement,
  frame: EditorFrame,
  scrollTop: number,
) => {
  const shift = scrollTop - frame.scrollTop;
  const rect = overlay.getBoundingClientRect();
  const keep =
    frame.blockBottom - shift >= rect.top &&
    frame.blockTop - shift <= rect.bottom;
  const vars = getEditorFrameVars(frame, shift);
  for (const name of Object.keys(vars)) {
    overlay.style.setProperty(name, keep ? vars[name] ?? null : null);
  }
  overlay.dispatchEvent(new Event(EDITOR_FRAME_CHANGE_EVENT));
};
