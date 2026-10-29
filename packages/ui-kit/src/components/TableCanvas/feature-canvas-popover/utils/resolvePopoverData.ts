import { normalizeDropdownConfig } from '../../feature-canvas-dropdown/utils';
import type { CanvasPortalClickDetail } from '../../TableGlideInstance';
import type { CanvasOverlayDefaults, ResolvedCanvasOverlay } from '../types';
import { normalizePopoverConfig } from './normalizePopoverConfig';

/**
 * Что открыть по событию клика или наведения на canvas-якорь: поповер (проп
 * `popover` на Canvas-элементе) или дропдаун (проп `dropdown`), уже с
 * наложенными дефолтами из tableConfig. Если на элементе заданы оба,
 * открывается поповер. Событие без конфига (нода без поповера, ячейка или
 * шапка целиком) ничего не открывает.
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
