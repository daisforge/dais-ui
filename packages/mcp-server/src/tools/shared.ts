import type {
  FeatureRecord,
  IndexedComponent,
  PropRecord,
  RuntimeIndex,
} from '../types.js';

/** Точное совпадение имени, а с фолбеком на регистронезависимое — компонентов мало кто угадывает точно по регистру. */
export function findComponent(
  index: RuntimeIndex,
  name: string | undefined,
): IndexedComponent | undefined {
  if (!name) return undefined;
  const direct = index.components[name];
  if (direct) return direct;

  const lower = name.toLowerCase();
  return Object.values(index.components).find(
    (c) => c.name.toLowerCase() === lower,
  );
}

/**
 * Резолв фичи — регистронезависимый, с поддержкой вложенных путей
 * (CanvasElements/CanvasText у TableCanvas против filtering/Filtering
 * разного регистра у Table/TableCanvas).
 */
export function findFeature(
  index: RuntimeIndex,
  component: string | undefined,
  feature: string | undefined,
): FeatureRecord | undefined {
  if (!component || !feature) return undefined;
  const componentLower = component.toLowerCase();
  const featureLower = feature.toLowerCase();

  return index.features.find(
    (f) =>
      f.component.toLowerCase() === componentLower &&
      f.feature.toLowerCase() === featureLower,
  );
}

export function listComponentFeatures(
  index: RuntimeIndex,
  component: string,
): FeatureRecord[] {
  const componentLower = component.toLowerCase();
  return index.features.filter(
    (f) => f.component.toLowerCase() === componentLower,
  );
}

/** Текст типа в компактных списках не должен весить как get_component_props — длинные union-литералы там не нужны. */
const COMPACT_PROP_TYPE_MAX_CHARS = 80;

function clipType(type: string): string {
  return type.length > COMPACT_PROP_TYPE_MAX_CHARS
    ? `${type.slice(0, COMPACT_PROP_TYPE_MAX_CHARS)}…`
    : type;
}

/** Компактная сводка пропса — без description, для "лёгких" списков (get_component). */
export function summarizeProp(prop: PropRecord): string {
  return `${prop.name}${prop.required ? '' : '?'}: ${clipType(prop.type)}`;
}
