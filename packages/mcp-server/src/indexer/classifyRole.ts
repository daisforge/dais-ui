export type ComponentRole = 'primary' | 'part' | 'internal';

/**
 * Точные имена внутренних примитивов, случайно удовлетворяющих критериям
 * discoverComponents (PascalCase value-экспорт) наравне с настоящими
 * компонентами, но в прикладном коде никогда не используемых напрямую —
 * см. TASKS.md T11. Отдельно от EXCLUDED_NAMES в discoverComponents.ts: там
 * список для полностью НЕиндексируемых имён, здесь — для тех, что остаются
 * в индексе (доступны через search_components), но не должны засорять
 * дефолтный `list_components`.
 */
const INTERNAL_EXACT_NAMES = new Set([
  'RootBridge',
  'DrawBatcher',
  'NoRowsFallback',
  'ControlBlockSwitch',
  'TableFilterSelectListItem',
  'RedDot',
  'SplitIconButton',
]);

const INTERNAL_NAME_PATTERNS = [
  /Styled$/,
  /^Canvas/,
  /^CellEditor/,
  /^TextCellEntry/,
];

function isInternalName(name: string): boolean {
  return (
    INTERNAL_EXACT_NAMES.has(name) ||
    INTERNAL_NAME_PATTERNS.some((re) => re.test(name))
  );
}

/**
 * Структурные слоты compound-компонентов (DrawerDF.Header, ModalDF.Footer,
 * FiltersActions.DotsIconButton...) — суффикс после имени папки, по
 * которому распознаём "часть", а не самостоятельный компонент.
 */
const STRUCTURAL_SLOT_RE =
  /^(Header|Footer|Content|Body|Divider|ServiceButtons|Left|Main|Bullets?|BackIconButton|DotsIconButton|IconButtonBack|IconButtonDots|Preview|ListOfFilters|FiltersButton|ToggleButton)$/;

/**
 * Классифицирует найденный экспорт компонента: `primary` — самостоятельная
 * единица выбора (то, что должно попадать в дефолтный list_components),
 * `part` — слот/подкомпонент внутри primary (`ModalDFHeader` у `ModalDF`),
 * `internal` — служебный примитив, который в прикладном коде не встречается.
 *
 * Правило "оставить только name === folderName" — НЕВЕРНОЕ: оно вырезало бы
 * легитимные `Col`, `Row`, компоненты типографики (`BodyM`...), `AccordionItem`,
 * `DatePickerRange`, `ToastProvider`. Проверенная трёхролевая эвристика: см.
 * TASKS.md T11.
 */
export function classifyRole(name: string, folderName: string): ComponentRole {
  if (name === folderName) return 'primary';
  if (isInternalName(name)) return 'internal';

  if (name.startsWith(folderName)) {
    const suffix = name.slice(folderName.length);
    if (STRUCTURAL_SLOT_RE.test(suffix)) return 'part';
  }

  return 'primary';
}
