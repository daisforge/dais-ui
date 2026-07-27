import type { CanvasNodeTooltipConfig } from '../../TableGlideInstance';

/** Строка или объект с полем text. */
export function isTooltipConfigFromNode(
  value: unknown
): value is CanvasNodeTooltipConfig {
  if (value == null) return false;
  if (typeof value === 'string') return true;
  return (
    typeof value === 'object' &&
    'text' in value &&
    typeof (value as { text: unknown }).text === 'string'
  );
}
