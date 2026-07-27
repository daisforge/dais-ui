import { ControlBlockButtonProps } from './control-block-button.types';
import { FeatureItem } from './types';

export function isFeatureItem(
  button: ControlBlockButtonProps | FeatureItem
): button is FeatureItem {
  // FeatureItem всегда имеет поле value
  if (!('value' in button)) return false;

  // Определяем по наличию details или других уникальных полей FeatureItem
  return (
    'details' in button ||
    ('CustomIconRender' in button &&
      typeof button.CustomIconRender === 'function')
  );
}
