import { normalizeDropdownConfig } from '../../feature-canvas-dropdown/utils';
import type { CanvasPortalClickDetail } from '../../TableGlideInstance';
import type { CanvasOverlayDefaults, ResolvedCanvasOverlay } from '../types';
import { normalizePopoverConfig } from './normalizePopoverConfig';

/**
 * Что открыть по клику или наведению на canvas-элемент: Popover (проп `popover`)
 * или Dropdown (проп `dropdown`) со значениями по умолчанию из tableConfig.
 * Если заданы оба, открывается Popover. Без них ничего не открывается.
 */
export function resolveCanvasOverlay(
  detail: Pick<CanvasPortalClickDetail, 'popoverFromNode' | 'dropdownFromNode'>,
  defaults?: CanvasOverlayDefaults,
): ResolvedCanvasOverlay | null {
  if (detail.popoverFromNode) {
    return {
      kind: 'popover',
      config: normalizePopoverConfig(detail.popoverFromNode, defaults?.popover),
    };
  }
  if (detail.dropdownFromNode) {
    return {
      kind: 'dropdown',
      config: normalizeDropdownConfig(
        detail.dropdownFromNode,
        defaults?.dropdown,
      ),
    };
  }
  return null;
}
