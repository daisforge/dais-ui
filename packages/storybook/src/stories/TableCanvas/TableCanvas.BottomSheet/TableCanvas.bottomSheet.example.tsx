import { Button } from '@ui-kit/components/Button';
import { IconButton } from '@ui-kit/components/IconButton';
import { Switch } from '@ui-kit/components/Switch';
import {
  Canvas,
  type CellsSelectionMode,
  type ColumnConfig,
  type ColumnOrColumnGroupConfig,
  CompactSelection,
  type ControlBlockSize,
  type GridSelection,
  type RowsChangeData,
  type SortColumn,
  TableCanvas,
  type TableConfig,
} from '@ui-kit/components/TableCanvas';
import { TextFieldSearch } from '@ui-kit/components/TextField';
import { BodyS, BodyXS, H5 } from '@ui-kit/components/Typography';
import {
  IconBookOpenOutline,
  IconChevronDown,
  IconChevronUp,
  IconDocumentOutline,
  IconInfoCircleOutline,
  IconRefresh,
  IconStar,
} from '@ui-kit/icons';
import {
  outlineSolidPrimary,
  surfaceInfoMinor,
  textNegative,
  textSecondary,
} from '@ui-kit/tokens';
import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  applyBottomSheetRowChanges,
  type BottomSheetFilters,
  type BottomSheetRow,
  type BottomSheetSummary,
  cloneBottomSheetRows,
  createBottomSheetRows,
  prepareBottomSheetRows,
  selectBottomSheetRows,
  summarizeBottomSheetRows,
} from './TableCanvas.bottomSheet.data';

export type AllFeaturesExampleProps = {
  refTable?: React.ComponentProps<typeof TableCanvas>['refTable'];
  initialCollapsed?: boolean;
  placement?: 'inside' | 'above';
  controlBlockSize?: ControlBlockSize;
  adaptive?: boolean;
  initialError?: boolean;
  initialEmpty?: boolean;
  initialLogHeight?: string | number;
};

export type AllFeaturesSettings = {
  structure:
    | 'flat'
    | 'group-tree'
    | 'group-merged'
    | 'subrows-tree'
    | 'subrows-merged';
  dataMode: 'all' | 'pagination' | 'infinity';
  selectionMode: CellsSelectionMode;
  axisSelection: boolean;
  highlight: boolean;
  hover: boolean;
  groupedHeaders: boolean;
  squash: boolean;
  merge: 'none' | 'values' | 'region';
  renderers: boolean;
  tooltips: boolean;
  preview: boolean;
  formats: boolean;
  theme: boolean;
  borders: 'all' | 'horizontal' | 'none' | 'custom';
  variableHeight: boolean;
  headerHeight: '33' | '48';
  unstickyHeader: boolean;
  controlBlockShow: boolean;
  controlBlockSize: ControlBlockSize;
  adaptive: boolean;
  placement: 'inside' | 'above';
  searchOnType: boolean;
  autocomplete: boolean;
  transferEnabled: boolean;
  pasteReadonly: 'skip' | 'abort';
  pasteOverflow: 'truncate' | 'abort';
  pasteValidation: 'none' | 'type-check';
  pasteBroadcast: boolean;
  fillEnabled: boolean;
  fillDirections: 'horizontal' | 'vertical' | 'orthogonal' | 'any';
  allowSubRows: boolean;
};

export type AllFeaturesEvent = {
  id: number;
  message: string;
  level: 'info' | 'warning' | 'error';
};
export type AllFeaturesChoiceProps = {
  label: string;
  value: string;
  items: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
  disabled?: boolean;
};
export type AllFeaturesToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};
export type AllFeaturesSettingsPanelProps = {
  settings: AllFeaturesSettings;
  onChange: (patch: Partial<AllFeaturesSettings>) => void;
};
export type AllFeaturesLogProps = {
  expanded: boolean;
  events: AllFeaturesEvent[];
  onToggle: () => void;
  onClear: () => void;
};
export type AllFeaturesNavigationProps = {
  rows: BottomSheetRow[];
  onSelect: (row: BottomSheetRow) => void;
};

export function AllFeaturesChoice(props: AllFeaturesChoiceProps) {
  const { label, value, items, disabled, onChange } = props;
  const id = useId();
  return (
    <label
      htmlFor={id}
      style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
    >
      <BodyXS>{label}</BodyXS>
      <select
        id={id}
        aria-label={label}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        style={{
          font: 'inherit',
          padding: '7px 10px',
          borderRadius: 6,
          border: `1px solid ${outlineSolidPrimary}`,
          background: 'transparent',
          color: 'inherit',
        }}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function AllFeaturesToggle(props: AllFeaturesToggleProps) {
  const { label, checked, onChange } = props;
  return (
    <Switch
      label={label}
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
  );
}

export function AllFeaturesSettingsPanel(props: AllFeaturesSettingsPanelProps) {
  const { settings, onChange: update } = props;
  return (
    <details style={{ marginBottom: 12 }}>
      <summary style={{ cursor: 'pointer', padding: '8px 0' }}>
        Настройки всех возможностей
      </summary>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
          padding: '12px 0',
        }}
      >
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderColor: outlineSolidPrimary,
          }}
        >
          <legend>Выделение и поиск</legend>
          <AllFeaturesChoice
            label="Режим выделения"
            value={settings.selectionMode}
            items={['cell', 'range-cell', 'multi-range-cell', 'disabled'].map(
              (value) => ({ value, label: value }),
            )}
            onChange={(selectionMode) =>
              update({ selectionMode: selectionMode as CellsSelectionMode })
            }
          />
          <AllFeaturesToggle
            label="Выделение строк и колонок диапазоном"
            checked={settings.axisSelection}
            onChange={(axisSelection) => update({ axisSelection })}
          />
          <AllFeaturesToggle
            label="Подсветка активной строки"
            checked={settings.highlight}
            onChange={(highlight) => update({ highlight })}
          />
          <AllFeaturesToggle
            label="Подсветка при наведении"
            checked={settings.hover}
            onChange={(hover) => update({ hover })}
          />
          <AllFeaturesToggle
            label="Поиск при вводе"
            checked={settings.searchOnType}
            onChange={(searchOnType) => update({ searchOnType })}
          />
          <AllFeaturesToggle
            label="Подсказки поиска"
            checked={settings.autocomplete}
            onChange={(autocomplete) => update({ autocomplete })}
          />
        </fieldset>
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderColor: outlineSolidPrimary,
          }}
        >
          <legend>Колонки и ячейки</legend>
          <AllFeaturesToggle
            label="Групповая шапка"
            checked={settings.groupedHeaders}
            onChange={(groupedHeaders) => update({ groupedHeaders })}
          />
          <AllFeaturesToggle
            label="Объединение пустых ячеек шапки"
            checked={settings.squash}
            onChange={(squash) => update({ squash })}
          />
          <AllFeaturesChoice
            label="Объединение ячеек тела"
            value={settings.merge}
            items={[
              { value: 'none', label: 'Без объединения' },
              { value: 'values', label: 'По одинаковому приоритету' },
              { value: 'region', label: 'Регион первых двух типов задач' },
            ]}
            onChange={(merge) =>
              update({ merge: merge as AllFeaturesSettings['merge'] })
            }
          />
          <AllFeaturesToggle
            label="Canvas-элементы в ячейках"
            checked={settings.renderers}
            onChange={(renderers) => update({ renderers })}
          />
          <AllFeaturesToggle
            label="Числовое форматирование"
            checked={settings.formats}
            onChange={(formats) => update({ formats })}
          />
          <AllFeaturesToggle
            label="Тултипы"
            checked={settings.tooltips}
            onChange={(tooltips) => update({ tooltips })}
          />
          <AllFeaturesToggle
            label="Превью readonly-ячеек"
            checked={settings.preview}
            onChange={(preview) => update({ preview })}
          />
        </fieldset>
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderColor: outlineSolidPrimary,
          }}
        >
          <legend>Буфер обмена и протяжка</legend>
          <AllFeaturesToggle
            label="Copy / paste / fill"
            checked={settings.transferEnabled}
            onChange={(transferEnabled) => update({ transferEnabled })}
          />
          <AllFeaturesChoice
            label="Readonly-ячейки"
            value={settings.pasteReadonly}
            items={[
              { value: 'skip', label: 'Пропустить' },
              { value: 'abort', label: 'Отменить операцию' },
            ]}
            onChange={(pasteReadonly) =>
              update({
                pasteReadonly:
                  pasteReadonly as AllFeaturesSettings['pasteReadonly'],
              })
            }
          />
          <AllFeaturesChoice
            label="Вставка за границами"
            value={settings.pasteOverflow}
            items={[
              { value: 'truncate', label: 'Обрезать' },
              { value: 'abort', label: 'Отменить операцию' },
            ]}
            onChange={(pasteOverflow) =>
              update({
                pasteOverflow:
                  pasteOverflow as AllFeaturesSettings['pasteOverflow'],
              })
            }
          />
          <AllFeaturesChoice
            label="Проверка значений"
            value={settings.pasteValidation}
            items={[
              { value: 'type-check', label: 'Проверять тип' },
              { value: 'none', label: 'Без проверки' },
            ]}
            onChange={(pasteValidation) =>
              update({
                pasteValidation:
                  pasteValidation as AllFeaturesSettings['pasteValidation'],
              })
            }
          />
          <AllFeaturesToggle
            label="Тиражировать вставку на выделение"
            checked={settings.pasteBroadcast}
            onChange={(pasteBroadcast) => update({ pasteBroadcast })}
          />
          <AllFeaturesToggle
            label="Протяжка ячеек"
            checked={settings.fillEnabled}
            onChange={(fillEnabled) => update({ fillEnabled })}
          />
          <AllFeaturesChoice
            label="Направления протяжки"
            value={settings.fillDirections}
            items={['orthogonal', 'horizontal', 'vertical', 'any'].map(
              (value) => ({ value, label: value }),
            )}
            onChange={(fillDirections) =>
              update({
                fillDirections:
                  fillDirections as AllFeaturesSettings['fillDirections'],
              })
            }
          />
          <AllFeaturesToggle
            label="Вставка и протяжка в дочерние строки"
            checked={settings.allowSubRows}
            onChange={(allowSubRows) => update({ allowSubRows })}
          />
        </fieldset>
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderColor: outlineSolidPrimary,
          }}
        >
          <legend>Размеры и оформление</legend>
          <AllFeaturesToggle
            label="Переменная высота строк"
            checked={settings.variableHeight}
            onChange={(variableHeight) => update({ variableHeight })}
          />
          <AllFeaturesChoice
            label="Высота ряда шапки"
            value={settings.headerHeight}
            items={[
              { value: '33', label: '33 px' },
              { value: '48', label: '48 px' },
            ]}
            onChange={(headerHeight) =>
              update({
                headerHeight:
                  headerHeight as AllFeaturesSettings['headerHeight'],
              })
            }
          />
          <AllFeaturesToggle
            label="Открепить шапку"
            checked={settings.unstickyHeader}
            onChange={(unstickyHeader) => update({ unstickyHeader })}
          />
          <AllFeaturesChoice
            label="Линии сетки"
            value={settings.borders}
            items={[
              { value: 'all', label: 'Все линии' },
              { value: 'horizontal', label: 'Только горизонтальные' },
              { value: 'none', label: 'Без линий' },
              { value: 'custom', label: 'По строке, колонке и ячейке' },
            ]}
            onChange={(borders) =>
              update({ borders: borders as AllFeaturesSettings['borders'] })
            }
          />
          <AllFeaturesToggle
            label="Выделить ячейки с высоким приоритетом"
            checked={settings.theme}
            onChange={(theme) => update({ theme })}
          />
          <AllFeaturesToggle
            label="Блок управления"
            checked={settings.controlBlockShow}
            onChange={(controlBlockShow) => update({ controlBlockShow })}
          />
          <AllFeaturesChoice
            label="Размер блока управления"
            value={settings.controlBlockSize}
            items={['m', 's', 'xs'].map((value) => ({ value, label: value }))}
            onChange={(controlBlockSize) =>
              update({ controlBlockSize: controlBlockSize as ControlBlockSize })
            }
          />
          <AllFeaturesToggle
            label="Адаптивное сжатие"
            checked={settings.adaptive}
            onChange={(adaptive) => update({ adaptive })}
          />
          <AllFeaturesChoice
            label="Кнопка сворачивания"
            value={settings.placement}
            items={[
              { value: 'inside', label: 'В блоке управления' },
              { value: 'above', label: 'Над таблицей' },
            ]}
            onChange={(placement) =>
              update({
                placement: placement as AllFeaturesSettings['placement'],
              })
            }
          />
        </fieldset>
      </div>
    </details>
  );
}

export function AllFeaturesLog(props: AllFeaturesLogProps) {
  const { expanded, events, onToggle, onClear } = props;
  const contentId = useId();
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          minHeight: 30,
          flexShrink: 0,
          padding: '0 8px',
          borderBottom: `1px solid ${outlineSolidPrimary}`,
          whiteSpace: 'nowrap',
        }}
      >
        <IconButton
          size="xxs"
          view="clear"
          aria-label={expanded ? 'Закрыть лог' : 'Открыть лог'}
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={onToggle}
        >
          {expanded ? (
            <IconChevronDown size="xs" />
          ) : (
            <IconChevronUp size="xs" />
          )}
        </IconButton>
        <BodyS
          style={{
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Журнал событий ({events.length})
        </BodyS>
        <Button size="xxs" view="clear" onClick={onClear}>
          Очистить журнал
        </Button>
      </div>
      <div
        id={contentId}
        aria-hidden={!expanded}
        {...(!expanded ? { inert: '' } : {})}
        style={{ overflow: 'auto', minHeight: 0 }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              padding: '12px 16px',
              borderBottom: `1px solid ${outlineSolidPrimary}`,
            }}
          >
            <IconInfoCircleOutline
              size="s"
              color={event.level === 'error' ? textNegative : textSecondary}
            />
            <BodyS>{event.message}</BodyS>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AllFeaturesNavigation(props: AllFeaturesNavigationProps) {
  const { rows, onSelect } = props;
  const [query, setQuery] = useState('');
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 16 }}
    >
      <TextFieldSearch
        size="xs"
        aria-label="Поиск отчёта"
        placeholder="Поиск отчёта"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onClear={() => setQuery('')}
      />
      <BodyXS style={{ color: textSecondary }}>Последние отчёты</BodyXS>
      {rows
        .filter((row) => row.task.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 8)
        .map((row) => (
          <Button
            key={row.id}
            view="clear"
            size="xs"
            style={{ justifyContent: 'flex-start' }}
            onClick={() => onSelect(row)}
          >
            {row.task}
          </Button>
        ))}
    </div>
  );
}

export function createAllFeaturesSettings(options: AllFeaturesExampleProps) {
  const settings: AllFeaturesSettings = {
    structure: 'flat',
    dataMode: 'pagination',
    selectionMode: 'range-cell',
    axisSelection: true,
    highlight: true,
    hover: true,
    groupedHeaders: false,
    squash: true,
    merge: 'none',
    renderers: true,
    tooltips: true,
    preview: true,
    formats: true,
    theme: false,
    borders: 'all',
    variableHeight: false,
    headerHeight: '33',
    unstickyHeader: false,
    controlBlockShow: true,
    controlBlockSize: options.controlBlockSize ?? 'm',
    adaptive: options.adaptive ?? true,
    placement: options.placement ?? 'inside',
    searchOnType: true,
    autocomplete: false,
    transferEnabled: true,
    pasteReadonly: 'skip',
    pasteOverflow: 'truncate',
    pasteValidation: 'type-check',
    pasteBroadcast: false,
    fillEnabled: true,
    fillDirections: 'orthogonal',
    allowSubRows: true,
  };
  return settings;
}

export function createAllFeaturesSelection(): GridSelection {
  return { rows: CompactSelection.empty(), columns: CompactSelection.empty() };
}

export function getBottomSheetRowId(row: BottomSheetRow) {
  return row.id;
}

export function getBottomSheetChildren(row: BottomSheetRow) {
  return row.subRows;
}

export function findBottomSheetRow(
  rows: BottomSheetRow[],
  id: string | number,
): BottomSheetRow | undefined {
  if (!rows.length) return undefined;
  const direct = rows.find((row) => row.id === id);
  return (
    direct ??
    findBottomSheetRow(
      rows.flatMap((row) => row.subRows ?? []),
      id,
    )
  );
}

export function AllFeaturesExample(options: AllFeaturesExampleProps = {}) {
  const [masterRows, setMasterRows] = useState(createBottomSheetRows);
  const savedRows = useRef(masterRows);
  const [settings, setSettings] = useState(() =>
    createAllFeaturesSettings(options),
  );
  const [filters, setFilters] = useState<BottomSheetFilters>({
    priority: 'All',
    issueType: [],
    developer: '',
    complete: '',
    globalFilter: '',
  });
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [loadedCount, setLoadedCount] = useState(20);
  const [loadingMore, setLoadingMore] = useState(false);
  const loadTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [groupBy, setGroupBy] = useState<string[]>(['priority', 'issueType']);
  const [expandedIds, setExpandedIds] = useState<Set<string | number>>(
    new Set(),
  );
  const [selectedRows, setSelectedRows] = useState<
    ReadonlySet<string | number>
  >(new Set([1, 2]));
  const [cellsSelection, setCellsSelection] = useState(
    createAllFeaturesSelection,
  );
  const [editMode, setEditMode] = useState(false);
  const [selectedRow, setSelectedRow] = useState<BottomSheetRow | null>(null);
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);
  const [leftTab, setLeftTab] = useState<string | null>('reports');
  const [rightTab, setRightTab] = useState<string | null>(null);
  const [leftWidth, setLeftWidth] = useState<string | number>(300);
  const [rightWidth, setRightWidth] = useState<string | number>(400);
  const [height, setHeight] = useState<string | number>(
    options.initialLogHeight ?? 32,
  );
  const [sheetEnabled, setSheetEnabled] = useState(true);
  const [showReports, setShowReports] = useState(true);
  const [collapsed, setCollapsed] = useState(options.initialCollapsed ?? false);
  const [containerHeight, setContainerHeight] = useState(620);
  const [containerWidth, setContainerWidth] = useState('100%');
  const [status, setStatus] = useState<
    'normal' | 'skeleton' | 'overlay' | 'error' | 'empty'
  >(() => {
    if (options.initialError) return 'error';
    if (options.initialEmpty) return 'empty';
    return 'normal';
  });
  const [favorite, setFavorite] = useState(true);
  const [customStatus, setCustomStatus] = useState('active');
  const nextEventId = useRef(3);
  const [events, setEvents] = useState<AllFeaturesEvent[]>([
    { id: 0, message: 'Данные обновлены', level: 'info' },
    { id: 1, message: 'Отчёт сохранён', level: 'info' },
    {
      id: 2,
      message:
        'Выберите строки, измените ячейки или откройте контекстное меню: события появятся здесь.',
      level: 'info',
    },
  ]);
  const log = useCallback(
    (message: string, level: AllFeaturesEvent['level'] = 'info') => {
      const event = { id: nextEventId.current, message, level };
      nextEventId.current += 1;
      setEvents((previous) => [event, ...previous].slice(0, 100));
    },
    [],
  );
  const isGrouping = settings.structure.startsWith('group-');
  const isTree = settings.structure.startsWith('subrows-');
  const canEdit =
    settings.structure !== 'group-tree' &&
    settings.structure !== 'subrows-merged';
  const effectiveDataMode = isGrouping ? 'all' : settings.dataMode;
  const filteredRows = useMemo(
    () =>
      prepareBottomSheetRows(masterRows, query, filters, sortColumns, isTree),
    [masterRows, query, filters, sortColumns, isTree],
  );
  const effectivePage = Math.max(
    1,
    Math.min(page, Math.ceil(filteredRows.length / pageSize) || 1),
  );
  const visibleRows = useMemo(
    () =>
      selectBottomSheetRows(
        filteredRows,
        effectiveDataMode,
        effectivePage,
        pageSize,
        loadedCount,
      ),
    [filteredRows, effectiveDataMode, effectivePage, pageSize, loadedCount],
  );
  const summaryRows = useMemo(
    () => summarizeBottomSheetRows(filteredRows, isTree),
    [filteredRows, isTree],
  );
  const rowsForTable = status === 'empty' ? [] : visibleRows;
  const selectedDetails = selectedRow
    ? findBottomSheetRow(masterRows, selectedRow.id) ?? selectedRow
    : null;
  const loadMore = useCallback(() => {
    if (
      loadTimer.current ||
      effectiveDataMode !== 'infinity' ||
      loadedCount >= filteredRows.length
    )
      return;
    setLoadingMore(true);
    log('Начата подгрузка следующей порции');
    loadTimer.current = setTimeout(() => {
      setLoadedCount((value) => value + 20);
      setLoadingMore(false);
      loadTimer.current = null;
      log('Подгружено ещё 20 верхних строк');
    }, 500);
  }, [effectiveDataMode, loadedCount, filteredRows.length, log]);
  const onLeftTabChange = useCallback(
    (id: string | null) => log(`Левая панель: ${id ?? 'закрыта'}`),
    [log],
  );
  const onRightTabChange = useCallback(
    (id: string | null) => log(`Правая панель: ${id ?? 'закрыта'}`),
    [log],
  );
  const onHighlightedRowChange = useCallback(
    (info: { row: BottomSheetRow | undefined; index: number | undefined }) => {
      setSelectedRow(info.row ?? null);
      if (info.row) log(`Активная строка: ${info.row.task ?? 'группа'}`);
    },
    [log],
  );
  const updateSettings = useCallback(
    (patch: Partial<AllFeaturesSettings>) => {
      setSettings((previous) => ({ ...previous, ...patch }));
      if (patch.structure || patch.dataMode) {
        setPage(1);
        setLoadedCount(20);
        setExpandedIds(new Set());
        setCellsSelection(createAllFeaturesSelection());
        if (loadTimer.current) clearTimeout(loadTimer.current);
        loadTimer.current = null;
        setLoadingMore(false);
      }
      log(`Настройки изменены: ${Object.keys(patch).join(', ')}`);
    },
    [log],
  );
  useEffect(() => {
    setPage(1);
    setLoadedCount(20);
    if (loadTimer.current) clearTimeout(loadTimer.current);
    loadTimer.current = null;
    setLoadingMore(false);
  }, [query, filters, sortColumns]);
  useEffect(
    () => () => {
      if (loadTimer.current) clearTimeout(loadTimer.current);
    },
    [],
  );
  useEffect(() => {
    if (page !== effectivePage) setPage(effectivePage);
  }, [page, effectivePage]);
  const previousControls = useRef({
    filters,
    sortColumns,
    selectedRows,
    cellsSelection,
    collapsed,
  });
  useEffect(() => {
    const previous = previousControls.current;
    if (previous.collapsed !== collapsed)
      log(`Таблица ${collapsed ? 'свёрнута' : 'развёрнута'}`);
    if (previous.filters !== filters)
      log(`Фильтры: ${JSON.stringify(filters)}`);
    if (previous.sortColumns !== sortColumns)
      log(
        `Сортировка: ${
          sortColumns
            .map((column) => `${column.columnKey} ${column.direction}`)
            .join(', ') || 'сброшена'
        }`,
      );
    if (previous.selectedRows !== selectedRows)
      log(`Выбрано задач: ${selectedRows.size}`);
    if (previous.cellsSelection !== cellsSelection)
      log(
        cellsSelection.current
          ? `Выделение ячеек: ${cellsSelection.current.range.width} × ${cellsSelection.current.range.height}`
          : 'Выделение ячеек сброшено',
      );
    previousControls.current = {
      filters,
      sortColumns,
      selectedRows,
      cellsSelection,
      collapsed,
    };
  }, [filters, sortColumns, selectedRows, cellsSelection, collapsed, log]);

  const onRowsChange = useCallback(
    (
      _rows: BottomSheetRow[],
      data: RowsChangeData<BottomSheetRow, BottomSheetSummary>,
    ) => {
      setMasterRows((previous) =>
        applyBottomSheetRowChanges(
          previous,
          data.rows.map((change) => change.after),
        ),
      );
      log(
        `${data.type}: изменено строк ${data.rows.length}, колонка ${data.column.key}`,
      );
    },
    [log],
  );
  const markSelectedComplete = useCallback(() => {
    const changes: BottomSheetRow[] = [];
    function collect(rows: BottomSheetRow[]) {
      rows.forEach((row) => {
        if (selectedRows.has(row.id)) changes.push({ ...row, complete: 100 });
        if (row.subRows) collect(row.subRows);
      });
    }
    collect(masterRows);
    setMasterRows((previous) => applyBottomSheetRowChanges(previous, changes));
    log(`Обработать: завершено задач ${changes.length}`);
  }, [masterRows, selectedRows, log]);

  const columns = useMemo<
    readonly ColumnOrColumnGroupConfig<BottomSheetRow, BottomSheetSummary>[]
  >(() => {
    const renderSummary: NonNullable<
      ColumnConfig<BottomSheetRow, BottomSheetSummary>['renderSummaryCell']
    > = (props) =>
      props.row.values.find((value) => value.columnId === props.column.key)
        ?.value ?? '';
    const leafColumns: ColumnConfig<BottomSheetRow, BottomSheetSummary>[] = [
      {
        key: 'id',
        name: 'ID (readonly)',
        width: 100,
        sortingType: 'numberSort',
        renderSummaryCell: renderSummary,
        renderCellPreview: settings.preview ? 'cellEditorAsPreview' : 'none',
        keyText: {
          key: 'idKey',
          name: 'Ключ ID',
          renderCell: (props) => `KEY-${props.row.id}`,
        },
        rowsGrouping: { groupByColumn: false },
      },
      {
        key: 'task',
        name: 'Задача',
        width: 280,
        sortingType: 'stringSort',
        editingCell: { component: 'inputString' },
        renderSummaryCell: renderSummary,
        headerCellTooltip: settings.tooltips
          ? 'Название задачи; двойной клик открывает редактор.'
          : undefined,
        cellTooltip: settings.tooltips
          ? (props) => `${props.row.task}\nID: ${props.row.id}`
          : undefined,
        rowsGrouping: { groupByColumn: false },
        subRow: {
          keyOfColumnInSubRow: 'task',
          isColumnWithArrow: settings.structure === 'subrows-tree',
          editingCell: { component: 'inputString' },
        },
      },
      {
        key: 'priority',
        name: 'Приоритет',
        width: 160,
        sortingType: 'stringSort',
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: ['Critical', 'High', 'Medium', 'Low'].map((value) => ({
              value,
              text: value,
            })),
          },
        },
        renderSummaryCell: renderSummary,
        filtering: {
          component: 'select',
          keyInFilterState: 'priority',
          selectOptions: {
            type: 'constant',
            options: ['All', 'Critical', 'High', 'Medium', 'Low'].map(
              (value) => ({ value, text: value }),
            ),
          },
          valueInRow: (row) => row.priority,
          filter: {
            typeOfValue: 'single',
            filteringType: (value, rowValue) =>
              value === 'All' || value === rowValue,
          },
        },
        rowsGrouping: { columnGroupLabel: 'Приоритет' },
        renderCell: settings.renderers
          ? (props) => (
              <Canvas.Container
                padding={{
                  left: props.theme.cellHorizontalPadding,
                  right: props.theme.cellHorizontalPadding,
                }}
              >
                <Canvas.Badge text={props.row.priority ?? ''} size="s" />
              </Canvas.Container>
            )
          : undefined,
        copyData: (row) => row.priority,
        renderCellPreview: settings.preview ? 'cellEditorAsPreview' : 'none',
        themeOverride: settings.theme
          ? (props) =>
              props.row.priority === 'Critical'
                ? { bgCell: surfaceInfoMinor }
                : undefined
          : undefined,
        subRow: {
          keyOfColumnInSubRow: 'priority',
          parentKeyAsDefault: true,
          editingCell: { component: 'inputString' },
        },
      },
      {
        key: 'issueType',
        name: 'Тип задачи',
        width: 180,
        sortingType: 'stringSort',
        editingCell: {
          component: 'select',
          options: {
            type: 'constant',
            options: ['Bug', 'Improvement', 'Epic', 'Story'].map((value) => ({
              value,
              text: value,
            })),
          },
        },
        renderSummaryCell: renderSummary,
        filtering: {
          component: 'select',
          keyInFilterState: 'issueType',
          selectOptions: {
            type: 'stateInHeaderContext',
            optionsKeyInHeaderContext: 'issueTypeOptions',
          },
          valueInRow: (row) => row.issueType,
          filter: {
            typeOfValue: 'multiple',
            filteringType: (values, rowValue) =>
              !values.length || values.includes(rowValue),
          },
        },
        rowsGrouping: { columnGroupLabel: 'Тип задачи' },
        subRow: {
          keyOfColumnInSubRow: 'issueType',
          parentKeyAsDefault: true,
          editingCell: { component: 'inputString' },
        },
      },
      {
        key: 'developer',
        name: 'Исполнитель',
        width: 220,
        sortingType: 'stringSort',
        editingCell: { component: 'inputString' },
        renderSummaryCell: renderSummary,
        filtering: {
          component: 'input',
          keyInFilterState: 'developer',
          valueInRow: (row) => row.developer,
          filter: 'startWith',
        },
        rowsGrouping: { groupByColumn: false },
        cellTooltip: settings.tooltips
          ? (props) => `Исполнитель: ${props.row.developer}`
          : undefined,
        subRow: {
          keyOfColumnInSubRow: 'developer',
          editingCell: { component: 'inputString' },
        },
      },
      {
        key: 'complete',
        name: 'Выполнено, %',
        width: 160,
        sortingType: 'numberSort',
        editingCell: { component: 'inputNumber' },
        renderSummaryCell: renderSummary,
        filtering: {
          component: 'input',
          keyInFilterState: 'complete',
          valueInRow: (row) => row.complete,
          filter: (value, rowValue) => Number(rowValue) >= Number(value || 0),
        },
        rowsGrouping: { groupByColumn: false },
        contentFormat: settings.formats
          ? {
              type: 'number',
              decimalSeparator: ',',
              thousandSeparator: ' ',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              alignContent: 'right',
            }
          : undefined,
        subRow: {
          keyOfColumnInSubRow: 'complete',
          contentFormat: settings.formats ? 'number' : undefined,
          editingCell: { component: 'inputNumber' },
        },
      },
    ];
    const [idColumn] = leafColumns;
    if (!settings.groupedHeaders || !idColumn) return leafColumns;
    return [
      idColumn,
      {
        key: 'taskDetails',
        name: 'Задача и классификация',
        children: leafColumns.slice(1, 4),
      },
      {
        key: 'taskProgress',
        name: 'Исполнение',
        children: leafColumns.slice(4),
      },
    ];
  }, [settings]);

  let mergeCells: TableConfig<
    BottomSheetRow,
    BottomSheetSummary,
    string | number,
    BottomSheetFilters
  >['mergeCells'];
  if (settings.merge === 'values')
    mergeCells = { mergeByCellValues: ['priority'] };
  if (settings.merge === 'region') {
    const [first, second] = masterRows;
    mergeCells = {
      rowKeyGetter: getBottomSheetRowId,
      mergedCellsRegions:
        first && second
          ? [{ rowKeys: [first.id, second.id], colKeys: ['issueType'] }]
          : [],
    };
  }

  const tableConfig: TableConfig<
    BottomSheetRow,
    BottomSheetSummary,
    string | number,
    BottomSheetFilters
  > = {
    containerStyle: { height: containerHeight },
    fullScreenEnabled: {
      domMetadata: {
        dataAttributes: { 'data-testid': 'bottom-sheet-fullscreen' },
      },
    },
    resizableColumn: true,
    columnsGrouping: { squashEmptyCells: settings.squash },
    columnsControl: {
      enable: true,
      hiding: true,
      pinning: true,
      reorderingAside: true,
      reorderingHeader: true,
      disableHiding: ['id'],
      pinnedDefault: ['id'],
      hiddenColumnsIndicator: true,
      onReorderingHeader: (info) =>
        log(`Порядок колонок: ${info.newOrder.join(', ')}`),
      onHiddenColumnsIndicatorExpand: (info) =>
        log(`Показаны колонки: ${info.keys.join(', ')}`),
      onConfirm: (info) =>
        log(
          `Настройки колонок: закреплено ${info.pinned.length}, скрыто ${info.hidden.length}`,
        ),
      pinDomMetadata: {
        onClick: (_event, info) =>
          log(`Колонки: ${info?.action ?? 'закрепление'}`),
      },
      switchDomMetadata: {
        onClick: (_event, info) =>
          log(`Колонки: ${info?.action ?? 'видимость'}`),
      },
    },
    rowSize: {
      default: 'big',
      showInControl: true,
      onRowSizeChange: (size) => log(`Размер строк: ${size}`),
    },
    rowHeight: settings.variableHeight
      ? (row, size) => size.rowSizeValue + (Number(row.id) % 3 === 0 ? 24 : 0)
      : undefined,
    headerRowHeight: Number(settings.headerHeight),
    unstickyHeader: settings.unstickyHeader,
    rowMarkers: {
      startIndex:
        effectiveDataMode === 'pagination'
          ? (effectivePage - 1) * pageSize + 1
          : 1,
    },
    hoverEffects: settings.hover ? { row: true } : undefined,
    highlightActiveType: settings.highlight ? 'row' : 'disabled',
    highlightActiveRow: { onChange: onHighlightedRowChange },
    cellsSelection: {
      mode: settings.selectionMode,
      state: [cellsSelection, setCellsSelection],
      enableColumnSelection: settings.axisSelection,
      enableRowSelection: settings.axisSelection,
      enableSelectAll: settings.axisSelection,
    },
    selecting: {
      state: [selectedRows, setSelectedRows],
      rowKeyGetter: getBottomSheetRowId,
      showDefault: true,
    },
    editing: {
      onRowsChange,
      rowKeyGetter: getBottomSheetRowId,
      subRowsKey: 'subRows',
      deepCloneRows: true,
      enabled: canEdit ? [editMode, setEditMode] : false,
      showButtons: canEdit,
      onEnableEditing: (enable) => {
        savedRows.current = cloneBottomSheetRows(masterRows);
        log('Редактирование включено');
        enable();
      },
      onSave: (disable) => {
        savedRows.current = cloneBottomSheetRows(masterRows);
        log('Изменения сохранены');
        disable();
      },
      onCancel: (disable) => {
        setMasterRows(cloneBottomSheetRows(savedRows.current));
        log('Изменения отменены');
        disable();
      },
      editModeLeftSlot: (
        <BodyXS style={{ color: textSecondary }}>
          Copy / paste / fill доступны в режиме редактирования
        </BodyXS>
      ),
    },
    cellTransfer: {
      enabled: settings.transferEnabled ? undefined : false,
      paste: {
        readonlyBehavior: settings.pasteReadonly,
        overflowBehavior: settings.pasteOverflow,
        validation: settings.pasteValidation,
        broadcast: settings.pasteBroadcast,
        allowSubRows: settings.allowSubRows,
      },
      fillHandle: {
        enabled: canEdit && editMode && settings.fillEnabled,
        allowedDirections: settings.fillDirections,
        readonlyBehavior: settings.pasteReadonly,
        allowSubRows: settings.allowSubRows,
      },
      onBeforeCopy: (data) => {
        log(`Копирование: ${data.length} строк`);
        return data;
      },
      onBeforePaste: (data) => {
        if (!canEdit || !editMode) return false;
        log(`Вставка: ${data.length} строк`);
        return data;
      },
      onBeforeFill: (data) => {
        if (!canEdit || !editMode) return false;
        log(`Протяжка: ${data.length} строк`);
        return data;
      },
    },
    notifications: {
      onNotification: (event) =>
        log(`${event.type} / ${event.code}: ${event.message}`, event.level),
    },
    searching: {
      enabled: true,
      manualSearching: true,
      searchQueryState: [query, setQuery],
      debounceDelay: 300,
      searchOnType: settings.searchOnType,
      onDebouncedChange: (value) => log(`Поиск: ${value || 'все задачи'}`),
      ...(settings.autocomplete
        ? {
            autocomplete: {
              suggestions: masterRows
                .slice(0, 10)
                .map((row) => ({ label: row.task })),
              onSuggestionSelect: (value) => {
                setQuery(value.label);
                log(`Подсказка поиска: ${value.label}`);
              },
            },
          }
        : {}),
    },
    sorting: { state: [sortColumns, setSortColumns], manualSorting: true },
    filtering: {
      state: [filters, setFilters],
      manualFiltering: true,
      filtersInfo: {
        priority: { label: 'Приоритет', clearedValue: 'All' },
        issueType: { label: 'Тип задачи', clearedValue: [] },
        developer: { label: 'Исполнитель', clearedValue: '' },
        complete: { label: 'Выполнено, %', clearedValue: '' },
        globalFilter: { label: 'Общий фильтр', clearedValue: '' },
      },
    },
    summaryRows: {
      showDefault: true,
      showInControl: true,
      onChange: (enabled) =>
        log(`Итоговые строки: ${enabled ? 'показаны' : 'скрыты'}`),
    },
    keyText: { showInControl: true, controlBlock: {}, sidebar: {} },
    ...(isGrouping
      ? {
          rowsGrouping: {
            groupByState: [groupBy, setGroupBy],
            rowKeyGetter: getBottomSheetRowId,
            view: settings.structure === 'group-merged' ? 'merged' : 'tree',
            groupedColumnProps: { name: 'Группировка', width: 240 },
          },
        }
      : {}),
    ...(isTree
      ? {
          subRows: {
            getSubRows: getBottomSheetChildren,
            rowKeyGetter: getBottomSheetRowId,
            expandedIdsState: [expandedIds, setExpandedIds],
            view: settings.structure === 'subrows-merged' ? 'merged' : 'tree',
            ...(settings.structure === 'subrows-merged'
              ? { mergedColumns: ['task'] }
              : {}),
          },
        }
      : {}),
    mergeCells,
    tooltip: { enabled: settings.tooltips },
    borders: {
      vertical: settings.borders === 'all' || settings.borders === 'custom',
      horizontal: settings.borders !== 'none',
      ...(settings.borders === 'custom'
        ? {
            getVerticalBorder: (info) =>
              info.columnKey === 'developer' ? false : undefined,
            getHorizontalBorder: (info) =>
              Number(info.row.id) % 2 === 0 ? false : undefined,
            getCellBorder: (info) =>
              info.columnKey === 'complete' && info.row.complete === 100
                ? { bottom: true, top: true, left: true, right: true }
                : undefined,
          }
        : {}),
    },
    isLoading:
      status === 'skeleton' ? { boolean: true, skeletonRowsCount: 5 } : false,
    loadingOverlay: {
      active: status === 'overlay',
      title: 'Загрузка отчётов',
      subtitle: 'Подготавливаем структуру таблицы',
      showSubtitleDelay: 1000,
    },
    errorState: {
      enabled: status === 'error',
      size: 's',
      statusCode: 503,
      customStatuses: {
        503: {
          title: 'Не удалось загрузить отчёты',
          description: 'Проверьте подключение и повторите попытку.',
          button: { label: 'Повторить', view: 'accent' },
        },
      },
      buttonHandler: () => {
        setStatus('normal');
        log('Повторная загрузка завершена');
      },
    },
    emptyState: {
      enabled: true,
      size: 's',
      variant: 'no-content',
      title: 'Отчётов пока нет',
      subtitle: 'Измените поиск или создайте первый отчёт.',
      buttons: [
        {
          type: 'button',
          props: {
            children: 'Создать отчёт',
            view: 'accent',
            onClick: () => {
              setStatus('normal');
              setQuery('');
              setFilters({
                priority: 'All',
                issueType: [],
                developer: '',
                complete: '',
                globalFilter: '',
              });
              log('Данные восстановлены');
            },
          },
        },
      ],
    },
    collapsing: {
      enableCollapse: true,
      collapsedState: [collapsed, setCollapsed],
      collapseButtonPlacement: settings.placement,
      titleText: 'Отчёты',
      collapseButtonAboveRightSlot: (
        <BodyXS>Все возможности с BottomSheet</BodyXS>
      ),
    },
    leftSidebarConfig: {
      width: leftWidth,
      openState: [leftOpen, setLeftOpen],
      activeTabState: [leftTab, setLeftTab],
      onActiveTabChange: onLeftTabChange,
      customTabs: [
        ...(showReports
          ? [
              {
                id: 'reports',
                label: 'Навигация по отчётам',
                icon: <IconDocumentOutline size="s" />,
                content: (
                  <AllFeaturesNavigation
                    rows={masterRows}
                    onSelect={(row) => {
                      setSelectedRow(row);
                      setRightOpen(true);
                      setRightTab('details');
                      log(`Открыты сведения: ${row.task}`);
                    }}
                  />
                ),
              },
            ]
          : []),
        {
          id: 'books',
          label: 'Книги',
          icon: <IconBookOpenOutline size="s" />,
          content: (
            <div style={{ padding: 16 }}>
              <H5>Книги отчётов</H5>
              <Button
                size="xs"
                view="secondary"
                style={{ marginTop: 16 }}
                onClick={() => log('Открыта книга Отчётность 2026')}
              >
                Отчётность 2026
              </Button>
            </div>
          ),
        },
      ],
    },
    rightSidebarConfig: {
      width: rightWidth,
      openState: [rightOpen, setRightOpen],
      activeTabState: [rightTab, setRightTab],
      onActiveTabChange: onRightTabChange,
      defaultTabs: [
        {
          id: 'tableSettings',
          customGeneralSettingsSlot: (
            <BodyXS style={{ color: textSecondary }}>
              Выбрано задач: {selectedRows.size}. Все действия записываются в
              журнал.
            </BodyXS>
          ),
        },
      ],
      customTabs: [
        {
          id: 'details',
          label: 'Сведения',
          icon: <IconDocumentOutline size="s" />,
          titleRightSlot: <BodyXS>{selectedRows.size} выбрано</BodyXS>,
          content: (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: 16,
              }}
            >
              <H5>{selectedDetails?.task ?? 'Финансовый отчёт'}</H5>
              <BodyS>
                {selectedDetails
                  ? `Исполнитель: ${selectedDetails.developer}`
                  : 'Выберите задачу в таблице или навигации.'}
              </BodyS>
              <BodyXS style={{ color: textSecondary }}>
                Строк в выборке: {filteredRows.length}. Выбрано:{' '}
                {selectedRows.size}.
              </BodyXS>
              <Button
                size="xs"
                view="secondary"
                onClick={() =>
                  setRightWidth((value) => (value === 400 ? '35%' : 400))
                }
              >
                Изменить ширину правой панели
              </Button>
            </div>
          ),
        },
      ],
    },
    bottomSheetConfig: {
      enabled: sheetEnabled,
      height,
      minHeight: 32,
      content: (
        <AllFeaturesLog
          expanded={height !== 32}
          events={events}
          onToggle={() => setHeight((value) => (value === 32 ? 220 : 32))}
          onClear={() => setEvents([])}
        />
      ),
    },
    controlBlock: {
      show: settings.controlBlockShow,
      size: settings.controlBlockSize,
      enableAdaptiveCompress: settings.adaptive,
      rightSideInner: [
        {
          text: 'Обновить',
          contentLeft: <IconRefresh />,
          onClick: () => log('Данные обновлены вручную'),
        },
      ],
      customFeatures: [
        {
          value: 'favorite',
          label: 'В избранном',
          Icon: IconStar,
          onClick: () => {
            setFavorite((value) => !value);
            log('Избранное переключено');
          },
          details: {
            type: 'switch',
            label: 'В избранном',
            checked: favorite,
            onChange: (event) => {
              setFavorite(event.target.checked);
              log('Избранное переключено');
            },
          },
        },
        {
          value: 'refreshLog',
          label: 'Записать событие',
          Icon: IconRefresh,
          onClick: () => log('Данные обновлены через пользовательскую фичу'),
          details: {
            type: 'button',
            label: 'Записать событие',
            icon: <IconRefresh />,
            onClick: () => log('Данные обновлены через настройки'),
          },
        },
        {
          value: 'reportStatus',
          label: 'Статус',
          Icon: IconInfoCircleOutline,
          onClick: () => {
            setCustomStatus((value) =>
              value === 'active' ? 'inactive' : 'active',
            );
            log('Статус переключён');
          },
          details: {
            type: 'select',
            label: 'Статус отчёта',
            icon: <IconInfoCircleOutline />,
            value: customStatus,
            options: [
              { value: 'active', label: 'Активный' },
              { value: 'inactive', label: 'Неактивный' },
            ],
            onChange: (value) => {
              setCustomStatus(value);
              log(`Статус отчёта: ${value}`);
            },
          },
        },
      ],
      massActionPanel: {
        buttons: [
          {
            type: 'button',
            children: 'Обработать',
            onClick: markSelectedComplete,
          },
          {
            type: 'button',
            children: 'Снять выбор',
            view: 'secondary',
            onClick: () => {
              setSelectedRows(new Set());
              log('Выбор строк снят');
            },
          },
        ],
      },
    },
    onHeaderContextMenuDropdown: {
      type: 'dropdown',
      getDropdownItems: (info) => [
        { value: 'info', label: `Колонка: ${info.column.name}` },
        {
          value: 'sort',
          label: 'Сортировка',
          items: [
            { value: 'asc', label: 'По возрастанию' },
            { value: 'desc', label: 'По убыванию' },
          ],
        },
      ],
      onItemSelect: (item, info) => {
        if (item.value === 'asc' || item.value === 'desc')
          setSortColumns([
            {
              columnKey: info.column.key,
              direction: item.value === 'asc' ? 'ASC' : 'DESC',
            },
          ]);
        log(`Меню заголовка: ${item.label}`);
      },
    },
    onCellContextMenuDropdown: {
      type: 'dropdown',
      getDropdownItems: () => [
        { value: 'details', label: 'Открыть сведения' },
        {
          value: 'complete',
          label: 'Отметить выполненной',
          disabled: !canEdit,
        },
      ],
      onItemSelect: (item, info) => {
        if (item.value === 'details') {
          setSelectedRow(info.row);
          setRightOpen(true);
          setRightTab('details');
        } else if (canEdit) {
          const original = findBottomSheetRow(masterRows, info.row.id);
          if (original)
            setMasterRows((previous) =>
              applyBottomSheetRowChanges(previous, [
                { ...original, complete: 100 },
              ]),
            );
        }
        log(`Меню ячейки: ${item.label} (${info.row.task})`);
      },
    },
    onCellClicked: (_cell, info) => {
      if ('row' in info) setSelectedRow(info.row);
    },
    ...(effectiveDataMode === 'pagination'
      ? {
          pagination: {
            value: effectivePage,
            count: filteredRows.length,
            perPage: pageSize,
            perPageList: isTree ? [5, 10, 20] : [20, 50, 100],
            responsiveSlots: true,
            onChange: (nextPage, nextPageSize, scrollToTop) => {
              if (
                typeof nextPageSize === 'number' &&
                nextPageSize !== pageSize
              ) {
                setPageSize(nextPageSize);
                setPage(1);
              } else if (typeof nextPage === 'number') setPage(nextPage);
              scrollToTop?.();
              log(
                `Пагинация: страница ${nextPage ?? page}, по ${
                  nextPageSize ?? pageSize
                }`,
              );
            },
          },
        }
      : {}),
    ...(effectiveDataMode === 'infinity'
      ? {
          infinityScroll: {
            isLoading: loadingMore,
            hasMore: loadedCount < filteredRows.length,
            rowThreshold: 5,
            onTrigger: loadMore,
          },
        }
      : {}),
  };

  return (
    <div
      style={{ padding: 16 }}
      data-testid="bottom-sheet-all-features"
      data-total-rows={masterRows.length}
      data-filtered-rows={filteredRows.length}
      data-visible-rows={visibleRows.length}
      data-structure={settings.structure}
      data-data-mode={effectiveDataMode}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
          marginBottom: 12,
        }}
      >
        <AllFeaturesChoice
          label="Структура данных"
          value={settings.structure}
          items={[
            { value: 'flat', label: 'Плоские строки' },
            { value: 'group-tree', label: 'Группировка деревом' },
            { value: 'group-merged', label: 'Группировка объединением' },
            { value: 'subrows-tree', label: 'Дерево дочерних строк' },
            { value: 'subrows-merged', label: 'Дерево объединением' },
          ]}
          onChange={(structure) =>
            updateSettings({
              structure: structure as AllFeaturesSettings['structure'],
            })
          }
        />
        <AllFeaturesChoice
          label="Получение данных"
          value={effectiveDataMode}
          disabled={isGrouping}
          items={[
            { value: 'all', label: 'Все данные' },
            { value: 'pagination', label: 'Пагинация' },
            { value: 'infinity', label: 'Бесконечный скролл' },
          ]}
          onChange={(dataMode) =>
            updateSettings({
              dataMode: dataMode as AllFeaturesSettings['dataMode'],
            })
          }
        />
        <AllFeaturesChoice
          label="Состояние таблицы"
          value={status}
          items={[
            { value: 'normal', label: 'Обычное' },
            { value: 'skeleton', label: 'Скелетоны' },
            { value: 'overlay', label: 'Загрузка структуры' },
            { value: 'error', label: 'Ошибка' },
            { value: 'empty', label: 'Нет данных' },
          ]}
          onChange={(value) => {
            setStatus(value as typeof status);
            log(`Состояние таблицы: ${value}`);
          }}
        />
      </div>
      <AllFeaturesSettingsPanel settings={settings} onChange={updateSettings} />
      <div
        style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}
      >
        <Button size="xs" view="secondary" onClick={() => setLeftWidth(360)}>
          Ширина 360
        </Button>
        <Button size="xs" view="secondary" onClick={() => setLeftWidth('25%')}>
          Ширина 25%
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setLeftWidth('calc(20% + 40px)')}
        >
          Ширина calc
        </Button>
        <Button size="xs" view="secondary" onClick={() => setHeight('35%')}>
          Лог 35%
        </Button>
        <Button size="xs" view="secondary" onClick={() => setHeight(1000)}>
          Большой лог
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setCollapsed((value) => !value)}
        >
          Collapse
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() =>
            setStatus((value) => (value === 'error' ? 'normal' : 'error'))
          }
        >
          Error state
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() =>
            setStatus((value) => (value === 'empty' ? 'normal' : 'empty'))
          }
        >
          Empty state
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setSheetEnabled((value) => !value)}
        >
          Нижний слот
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setShowReports((value) => !value)}
        >
          Удалить вкладку
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setLeftOpen((value) => !value)}
        >
          Открытие извне
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() =>
            setContainerHeight((value) => (value === 620 ? 350 : 620))
          }
        >
          Высота контейнера
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() =>
            setContainerWidth((value) => (value === '100%' ? '80%' : '100%'))
          }
        >
          Ширина контейнера
        </Button>
        <Button
          size="xs"
          view="secondary"
          onClick={() => setRightOpen((value) => !value)}
        >
          Правая панель
        </Button>
      </div>
      {effectiveDataMode === 'infinity' && (
        <Button
          size="xs"
          view="secondary"
          style={{ marginBottom: 12 }}
          disabled={loadingMore || loadedCount >= filteredRows.length}
          onClick={loadMore}
        >
          Загрузить ещё 20 строк
        </Button>
      )}
      <div style={{ width: containerWidth }}>
        <TableCanvas
          refTable={options.refTable}
          rows={rowsForTable}
          columnConfig={columns}
          tableConfig={tableConfig}
          bottomSummaryRows={summaryRows}
          headerContextValue={{
            issueTypeOptions: ['Bug', 'Improvement', 'Epic', 'Story'].map(
              (value) => ({ value, text: value }),
            ),
          }}
        />
      </div>
    </div>
  );
}
