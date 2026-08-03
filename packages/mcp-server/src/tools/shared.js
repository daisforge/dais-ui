/** Точное совпадение имени, а с фолбеком на регистронезависимое — компонентов мало кто угадывает точно по регистру. */
export function findComponent(index, name) {
  if (!name) return undefined;
  const direct = index.components[name];
  if (direct) return direct;

  const lower = name.toLowerCase();
  return Object.values(index.components).find((c) => c.name.toLowerCase() === lower);
}

/**
 * Резолв фичи — регистронезависимый, с поддержкой вложенных путей
 * (CanvasElements/CanvasText у TableCanvas против filtering/Filtering
 * разного регистра у Table/TableCanvas).
 */
export function findFeature(index, component, feature) {
  if (!component || !feature) return undefined;
  const componentLower = component.toLowerCase();
  const featureLower = feature.toLowerCase();

  return index.features.find(
    (f) =>
      f.component.toLowerCase() === componentLower &&
      f.feature.toLowerCase() === featureLower,
  );
}

export function listComponentFeatures(index, component) {
  const componentLower = component.toLowerCase();
  return index.features.filter((f) => f.component.toLowerCase() === componentLower);
}

/** Компактная сводка пропса — без description, для "лёгких" списков (get_component). */
export function summarizeProp(prop) {
  return `${prop.name}${prop.required ? '' : '?'}: ${prop.type}`;
}
