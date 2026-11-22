import type {
  TableConfigDropdown,
  TableConfigPopover,
} from '../../../types/table-config.type';
import type { ResolvedCanvasDropdownConfig } from '../dropdown';
import type { ResolvedCanvasPopoverConfig } from '../popover';

/**
 * Что открывается на canvas-элементе: Popover (проп `popover`) или Dropdown
 * (проп `dropdown`). Открытие, привязка к элементу и закрытие у них общие,
 * отличается только компонент, который рисует содержимое.
 */
export type ResolvedCanvasOverlay =
  | { kind: 'popover'; config: ResolvedCanvasPopoverConfig }
  | { kind: 'dropdown'; config: ResolvedCanvasDropdownConfig };

/**
 * Значения по умолчанию из tableConfig для Popover и Dropdown. Ключ строки
 * сюда не входит: его читает только CanvasOverlayListener.
 */
export interface CanvasOverlayDefaults {
  popover?: Omit<TableConfigPopover, 'rowKeyGetter'>;
  dropdown?: Omit<TableConfigDropdown, 'rowKeyGetter'>;
}

/** Данные открытого Popover или Dropdown в TablePopoverState.contentData. */
export interface CanvasOverlayContentData {
  kind: 'canvas-overlay';
  overlay: ResolvedCanvasOverlay;
  /**
   * Строка, на которой открыли. Если на её месте окажется другая строка
   * (сортировка, новые данные), содержимое устарело и Popover закрывается.
   */
  anchorRow?: { rowInd: number; row: unknown };
}
