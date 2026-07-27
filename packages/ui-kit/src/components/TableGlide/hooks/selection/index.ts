/**
 * Подсистема выделения и подсветки TableGlide.
 *
 * Слои:
 *  - STATE: `useNativeGridSelection` (нативное glide-выделение),
 *    `useTableSelectionSystem` (оркестратор осей колонок/строк/активной строки,
 *    композит `useColumnAxisSelection` + `useRowAxisSelection` +
 *    `useActiveRowHighlight`).
 *  - GEOMETRY: `useSelectionGeometry` (+ примитивы `rectGeometry`).
 *  - REGIONS: `useBaseHighlightRegions` → `useColumnRowHighlightRegions`.
 */
export { rectContainsCell } from './rectGeometry';
export { useBaseHighlightRegions } from './useBaseHighlightRegions';
export { useColumnRowHighlightRegions } from './useColumnRowHighlightRegions';
export { useNativeGridSelection } from './useNativeGridSelection';
export { useSelectionGeometry } from './useSelectionGeometry';
export { useTableSelectionSystem } from './useTableSelectionSystem';
