import {
  EDITOR_BLOCK_BOTTOM_VAR,
  EDITOR_BOTTOM_LINE_VAR,
} from '../../TableGlide/constants';

export const getEditorOverlay = (el: HTMLElement | null) =>
  el?.closest<HTMLElement>("[id^='gdg-overlay-']") ?? null;

/**
 * Где низ объединённого блока, в котором открыт редактор:
 * - `noFrame`: редактор не в блоке или при прокрутке разошёлся с ним;
 * - `beyondData`: низ блока ушёл за область данных;
 * - `visible`: низ блока виден, `bottom` в координатах окна.
 */
export type BlockBottom =
  | { kind: 'noFrame' }
  | { kind: 'beyondData' }
  | { kind: 'visible'; bottom: number };

/**
 * Края блока TableGlide кладёт в переменные оверлея для рамки и снимает их, когда
 * редактор и блок расходятся. Нижняя линия есть, только когда низ блока не ушёл за
 * область данных. Верх блока не важен: он может уйти под шапку, редактор всё равно ниже.
 */
export const getBlockBottom = (el: HTMLElement | null): BlockBottom => {
  const style = getEditorOverlay(el)?.style;
  const bottomLine = style?.getPropertyValue(EDITOR_BOTTOM_LINE_VAR) ?? '';
  if (!style || bottomLine === '') return { kind: 'noFrame' };
  const bottom = parseFloat(style.getPropertyValue(EDITOR_BLOCK_BOTTOM_VAR));
  return bottomLine === '1px' && Number.isFinite(bottom)
    ? { kind: 'visible', bottom }
    : { kind: 'beyondData' };
};
