/**
 * Подсистема выделения и подсветки TableGlide.
 *
 * Слои:
 *  - STATE: `useNativeGridSelection` (нативное glide-выделение),
 *    `useTableSelectionSystem` (оркестратор осей колонок/строк/активной строки,
 *    композит `useColumnAxisSelection` + `useRowAxisSelection` +
 *    `useActiveRowHighlight`).
 *  - GEOMETRY: `useSelectionGeometry` (+ примитивы `rectGeometry`).
 *  - REGIONS: `useColoringLayers` — единая точка сборки: порядок слоёв описан
 *    в нём, внутри `useBaseHighlightRegions` и `useColumnRowHighlightRegions`
 *    (наружу не экспортируются).
 */
export { rectContainsCell } from './rectGeometry';
export { useColoringLayers } from './useColoringLayers';
export { useNativeGridSelection } from './useNativeGridSelection';
export { useSelectionGeometry } from './useSelectionGeometry';
export { useTableSelectionSystem } from './useTableSelectionSystem';
