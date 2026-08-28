import{j as e}from"./react-D2T61mpp.js";import{c6 as s,c7 as o,c0 as c}from"./vendor-BCtyWDpp.js";import{T as i}from"./TableCanvas.CopyPasteFill.stories-9ZUblYPs.js";import"./react-is-Clcustum.js";import"./styled-components-DX8vlra3.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BCVoxXef.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CUwNeYa8.js";import"./FiltersActions-CAcs8-fI.js";import"./IconButton-tXGbBwdv.js";import"./@salutejs/plasma-icons-CT3auX7M.js";import"./@salutejs/sdds-finai-CtB5qeOi.js";import"./@salutejs/sdds-themes-CUTvIVmO.js";import"./utils-CHCHZ6kC.js";import"./constants-BudGGuoE.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BRgSb72-.js";import"./TextField-BT0br7pC.js";import"./sharedUtilsInputs-E3hguDnU.js";import"./AnalyticalWidget-CRwLcQHW.js";import"./Collapse-Hqsw_Qk2.js";import"./Table-HqrONhn0.js";import"./react-data-grid-DVnoNyqM.js";import"./TableTabs-D7jLgkKo.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-cSTo0M2f.js";import"./ListOfFilters-DOe2tHhf.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-TOeAMrkU.js";import"./EmptyState-CLM_-0Gi.js";import"./MassActions-Czk_6hpW.js";import"./Autocomplete-QU_N67Il.js";import"./TableGlide-CrT4EX5A.js";import"./@glideappsfinal/glide-data-grid-BPbG-oNI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-dbEkQXep.js";function r(l){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:i,name:"Docs"}),`
`,e.jsx(n.h1,{id:"clipboard--копирование-вставка-fill-handle",children:"Clipboard — копирование, вставка, fill handle"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"tableConfig.cellTransfer"})}),`
`,e.jsx(n.p,{children:"Фича реализует Copy (Ctrl+C), Paste (Ctrl+V) и Fill Handle (drag-to-fill) для TableCanvas."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"формат-данных",children:"Формат данных"}),`
`,e.jsxs(n.p,{children:["Данные копируются и вставляются в формате ",e.jsx(n.strong,{children:"TSV (Tab-Separated Values)"}),` — тот же
формат, который использует Excel и Google Sheets. Значения разделяются `,e.jsx(n.code,{children:"\\t"}),` (tab)
между колонками и `,e.jsx(n.code,{children:"\\n"})," между строками."]}),`
`,e.jsx(n.p,{children:"Благодаря этому:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Скопированное из TableCanvas можно вставить в Excel / Google Sheets"}),`
`,e.jsx(n.li,{children:"Скопированное из Excel можно вставить в TableCanvas"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"copy-ctrlc--cmdc",children:"Copy (Ctrl+C / Cmd+C)"}),`
`,e.jsxs(n.p,{children:[`Копирование работает всегда — и в режиме редактирования, и без него.
Отключить можно только явно через `,e.jsx(n.code,{children:"cellTransfer: { enabled: false }"}),"."]}),`
`,e.jsxs(n.p,{children:["Копируется ровно то, что сейчас выделено в таблице (",e.jsx(n.code,{children:"selection.current.range"}),`).
Фича не привязана к `,e.jsx(n.code,{children:"highlightActiveType"}),` — она работает с фактическим
выделением, а не с тем, как оно визуально подсвечивается.`]}),`
`,e.jsx(n.h3,{id:"что-копируется-из-ячейки",children:"Что копируется из ячейки"}),`
`,e.jsxs(n.p,{children:["Для обычной ячейки: ",e.jsx(n.code,{children:"row[column.key]?.toString()"}),"."]}),`
`,e.jsxs(n.p,{children:[`Для кастомной canvas-ячейки (Canvas.Badge, Canvas.Text и т.д.) текст из canvas
автоматически извлечь нельзя. Поэтому используется `,e.jsx(n.code,{children:"copyData"}),` в конфиге
колонки:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{
  key: 'status',
  renderCell: ({ row }) => (
    <Canvas.Badge text={row.status} view="positive" size="s" />
  ),
  // Указываем, что копировать — текстовое значение из row
  copyData: (row) => row.status ?? '',
}
`})}),`
`,e.jsxs(n.p,{children:["Если ",e.jsx(n.code,{children:"copyData"})," не указан, используется fallback на ",e.jsx(n.code,{children:"row[column.key]?.toString()"}),`.
Для canvas-ячеек это может дать пустую строку или `,e.jsx(n.code,{children:"[object Object]"}),`, поэтому
`,e.jsx(n.code,{children:"copyData"})," рекомендуется всегда указывать для кастомных рендеров."]}),`
`,e.jsx(n.h3,{id:"subrows-при-копировании",children:"SubRows при копировании"}),`
`,e.jsxs(n.p,{children:["Для колонок с ",e.jsx(n.code,{children:"subRow.keyOfColumnInSubRow"}),` данные subrow-ячеек автоматически
извлекаются из нужного поля:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`{
  key: 'block',
  subRow: {
    keyOfColumnInSubRow: (lvl) => {
      switch (lvl) {
        case 1: return 'tribe';
        case 2: return 'product';
        default: return 'block';
      }
    },
  },
}
// Для parent (lvl=0): копирует row.block
// Для subrow lvl=1: копирует row.tribe
// Для subrow lvl=2: копирует row.product
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"paste-ctrlv--cmdv",children:"Paste (Ctrl+V / Cmd+V)"}),`
`,e.jsxs(n.p,{children:["Вставка работает только в режиме редактирования (",e.jsx(n.code,{children:"editing"})," активен)."]}),`
`,e.jsx(n.p,{children:"Порядок действий при вставке:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Чтение TSV из clipboard (",e.jsx(n.code,{children:"navigator.clipboard.readText"}),")"]}),`
`,e.jsx(n.li,{children:"Парсинг в 2D-массив строк"}),`
`,e.jsx(n.li,{children:"Определение целевой ячейки (из текущего selection)"}),`
`,e.jsx(n.li,{children:"Применение значений начиная от целевой ячейки вправо и вниз"}),`
`]}),`
`,e.jsx(n.h3,{id:"валидация-типов-при-вставке-type-check",children:"Валидация типов при вставке (type-check)"}),`
`,e.jsxs(n.p,{children:["По умолчанию включена проверка ",e.jsx(n.code,{children:"paste.validation: 'type-check'"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"inputNumber"})," / ",e.jsx(n.code,{children:"contentFormat: 'number'"})]})," — значение должно парситься в число. Если нет, ячейка пропускается."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"select"})," (ComboBox)"]})," — значение должно совпадать с одной из ",e.jsx(n.code,{children:"options"})," (по ",e.jsx(n.code,{children:"value"})," или ",e.jsx(n.code,{children:"text"}),"). Если нет, ячейка пропускается."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"inputString"})})," — всегда валидно, строка вставляется как есть."]}),`
`]}),`
`,e.jsx(n.p,{children:"Невалидные ячейки пропускаются, остальные вставляются нормально."}),`
`,e.jsxs(n.p,{children:["Отключить: ",e.jsx(n.code,{children:"paste: { validation: 'none' }"}),"."]}),`
`,e.jsxs(n.p,{children:["Разделители для парсинга чисел берутся из ",e.jsx(n.code,{children:"column.contentFormat"}),`
(`,e.jsx(n.code,{children:"decimalSeparator"}),", ",e.jsx(n.code,{children:"thousandSeparator"}),"), а не из локали."]}),`
`,e.jsx(n.h3,{id:"readonly-ячейки",children:"Readonly-ячейки"}),`
`,e.jsxs(n.p,{children:["По умолчанию (",e.jsx(n.code,{children:"readonlyBehavior: 'skip'"}),`) readonly-ячейки пропускаются,
остальные вставляются нормально.`]}),`
`,e.jsxs(n.p,{children:["При ",e.jsx(n.code,{children:"readonlyBehavior: 'abort'"}),` любая readonly-ячейка в зоне вставки отменяет
всю вставку целиком (поведение Excel).`]}),`
`,e.jsx(n.h3,{id:"выход-за-границы",children:"Выход за границы"}),`
`,e.jsxs(n.p,{children:["По умолчанию (",e.jsx(n.code,{children:"overflowBehavior: 'truncate'"}),`) данные обрезаются по границе
таблицы. То, что не влезло, теряется.`]}),`
`,e.jsxs(n.p,{children:["При ",e.jsx(n.code,{children:"overflowBehavior: 'abort'"})," вставка отменяется, если данные не влезают."]}),`
`,e.jsx(n.h3,{id:"вставка-в-кастомные-ячейки-canvasbadge-и-тд",children:"Вставка в кастомные ячейки (Canvas.Badge и т.д.)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"writeCellValue"})," пишет строку в ",e.jsx(n.code,{children:"row[column.key]"}),`. Кастомный рендер на следующем
цикле получает обновлённый `,e.jsx(n.code,{children:"row"})," и отрисовывает новое значение."]}),`
`,e.jsxs(n.p,{children:["Если ",e.jsx(n.code,{children:"renderCell"})," ожидает в ",e.jsx(n.code,{children:"row[key]"}),` не строку, а объект, вставка строки
сломает рендер. В этом случае используйте `,e.jsx(n.code,{children:"onBeforePaste"})," для трансформации:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`cellTransfer: {
  onBeforePaste: (data, meta) => {
    // Трансформировать строки в нужные объекты
    return data.map((row, y) =>
      row.map((value, x) => {
        const cell = meta.targetCells[y]?.[x];
        if (cell?.column.key === 'complexField') {
          return JSON.stringify({ label: value, color: 'default' });
        }
        return value;
      })
    );
  },
}
`})}),`
`,e.jsx(n.h3,{id:"subrows-при-вставке",children:"SubRows при вставке"}),`
`,e.jsxs(n.p,{children:["Работает аналогично копированию — через ",e.jsx(n.code,{children:"keyOfColumnInSubRow"}),`. Если у subrow
данные в другом поле, `,e.jsx(n.code,{children:"writeCellValue"})," запишет в правильный ключ."]}),`
`,e.jsxs(n.p,{children:["Отключить вставку в subrows: ",e.jsx(n.code,{children:"paste: { allowSubRows: false }"}),"."]}),`
`,e.jsx(n.h3,{id:"поток-данных-при-вставке-pipeline",children:"Поток данных при вставке (pipeline)"}),`
`,e.jsx(n.p,{children:`При Ctrl+V значения проходят через цепочку проверок. Каждый шаг может отменить
операцию или пропустить отдельную ячейку:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Ctrl+V
  │
  ▼
1. editModeEnabled?
   └─ нет → СТОП (вставка только в editing)
  │
  ▼
2. navigator.clipboard.readText() → parseTsv() → string[][]
   └─ пустой clipboard → СТОП
  │
  ▼
3. onBeforePaste(data, meta)?
   └─ вернул false -> СТОП (пользователь отменил)
   └─ вернул модифицированный data → используем его
  │
  ▼
4. overflowBehavior: данные выходят за границы?
   └─ 'abort' → СТОП
   └─ 'truncate' → обрезаем (default)
  │
  ▼
5. readonlyBehavior: есть readonly-ячейки в зоне вставки?
   └─ 'abort' → СТОП (первый проход, до записи)
   └─ 'skip' → пропускаем эти ячейки (default)
  │
  ▼
6. Для каждой ячейки:
   │
   ├─ shouldSkipCell?
   │  ├─ no-row / нет колонки → skip
   │  ├─ service-column → skip
   │  ├─ subrow + !allowSubRows → skip
   │  └─ not-editable → skip
   │
   ├─ validation: 'type-check'?
   │  ├─ inputNumber: не парсится в число → skip
   │  ├─ select: значения нет в options → skip
   │  └─ inputString: OK
   │
   └─ writeCellValue(row, column, lvl, value) → запись
  │
  ▼
7. onRowsChange(newRows, { column, indexes })
   tree update → setRows → re-render
`})}),`
`,e.jsxs(n.p,{children:[`Fill handle проходит тот же pipeline начиная с шага 6 (без clipboard, без
overflow — TableCanvas сам ограничивает destination range). Перед записью вызывается
`,e.jsx(n.code,{children:"onBeforeFill(data, meta)"})," — аналог ",e.jsx(n.code,{children:"onBeforePaste"})," для fill handle."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"нотификации-об-ошибках",children:"Нотификации об ошибках"}),`
`,e.jsxs(n.p,{children:[`Ошибки copy / paste / fill дополнительно сообщаются во внешний модуль
`,e.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-notifications--docs",children:"Notifications"}),`
через `,e.jsx(n.code,{children:"tableConfig.notifications.onNotification"}),` — таблица UI не рисует, тост
показывает потребитель (`,e.jsx(n.code,{children:"type"})," = операция):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"paste"})," / ",e.jsx(n.code,{children:"readonly-abort"})," — при ",e.jsx(n.code,{children:"readonlyBehavior: 'abort'"}),` в зоне вставки
есть readonly-ячейка;`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"paste"})," / ",e.jsx(n.code,{children:"overflow-abort"})," — при ",e.jsx(n.code,{children:"overflowBehavior: 'abort'"})," данные не влезли;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"paste"})," / ",e.jsx(n.code,{children:"validation-skipped"})," (",e.jsx(n.code,{children:"warning"}),`) — часть значений пропущена
type-check валидацией;`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fill"})," / ",e.jsx(n.code,{children:"readonly-abort"})," и ",e.jsx(n.code,{children:"fill"})," / ",e.jsx(n.code,{children:"validation-skipped"}),` — то же для
автозаполнения (fill handle);`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"copy"})," / ",e.jsx(n.code,{children:"paste"})," с code ",e.jsx(n.code,{children:"multi-range-scattered"}),` — 2D-разброс в
`,e.jsx(n.code,{children:"multi-range-cell"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"перехват-данных--onbeforecopy--onbeforepaste",children:"Перехват данных — onBeforeCopy / onBeforePaste"}),`
`,e.jsx(n.p,{children:"Колбэки вызываются перед операцией. Получают:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Первый аргумент: ",e.jsx(n.code,{children:"data: string[][]"})," — 2D-массив значений (TSV-формат)"]}),`
`,e.jsxs(n.li,{children:["Второй аргумент: ",e.jsx(n.code,{children:"meta"})," — информация о ячейках"]}),`
`]}),`
`,e.jsx(n.h3,{id:"onbeforecopy",children:"onBeforeCopy"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`cellTransfer: {
  onBeforeCopy: (data, meta) => {
    // data — string[][] (что будет в clipboard)
    // meta.range — Rectangle выделения
    // meta.cells — CellTransferCellInfo[][] (row, column, lvl, rawValue, formattedValue)

    console.log('Копируем:', data);
    console.log('Колонки:', meta.cells[0]?.map(c => c.column.key));

    // Модифицировать данные:
    return data.map(row => row.map(val => val.toUpperCase()));

    // Или отменить копирование:
    return false;
  },
}
`})}),`
`,e.jsx(n.h3,{id:"onbeforepaste",children:"onBeforePaste"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`cellTransfer: {
  onBeforePaste: (data, meta) => {
    // data — string[][] (что из clipboard)
    // meta.target — { col, row } верхний-левый угол вставки
    // meta.targetCells — CellTransferCellInfo[][] (инфа о ЦЕЛЕВЫХ ячейках)
    // meta.selection — GridSelection

    // Пример: ограничить кол-во строк
    if (data.length > 100) {
      alert('Слишком много строк для вставки');
      return false;
    }

    // Пример: трансформировать данные
    return data;
  },
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"fill-handle-drag-to-fill",children:"Fill Handle (drag-to-fill)"}),`
`,e.jsx(n.p,{children:`В правом-нижнем углу выделения появляется квадратик. Перетаскивая его мышью,
можно размножить значения (как в Excel / Google Sheets).`}),`
`,e.jsx(n.p,{children:`Квадратик и preview-рамку таблица рисует нативно — фича только применяет
значения source range в destination range.`}),`
`,e.jsx(n.h3,{id:"поведение",children:"Поведение"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Одна ячейка"})," — значение дублируется во все target-ячейки"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Диапазон N×M"})," — значения повторяются циклически"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type-check валидация"})," — та же, что при paste (числа, select-опции)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Readonly-ячейки"})," в destination пропускаются"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Квадратик скрывается"}),", если source-ячейка non-editable"]}),`
`]}),`
`,e.jsx(n.h3,{id:"направления",children:"Направления"}),`
`,e.jsxs(n.p,{children:["По умолчанию ",e.jsx(n.code,{children:"allowedDirections: 'orthogonal'"}),` — snap к ближайшей оси
(только строки или только колонки, не диагональ).`]}),`
`,e.jsxs(n.p,{children:["Варианты: ",e.jsx(n.code,{children:"'horizontal'"}),", ",e.jsx(n.code,{children:"'vertical'"}),", ",e.jsx(n.code,{children:"'orthogonal'"}),", ",e.jsx(n.code,{children:"'any'"}),"."]}),`
`,e.jsx(n.h3,{id:"перехват--onbeforefill",children:"Перехват — onBeforeFill"}),`
`,e.jsxs(n.p,{children:["Колбэк ",e.jsx(n.code,{children:"onBeforeFill"}),` вызывается перед применением значений при fill handle.
Получает `,e.jsx(n.code,{children:"data: string[][]"})," и ",e.jsx(n.code,{children:"meta: FillMeta"}),` (см. API — структура meta
отличается от `,e.jsx(n.code,{children:"CopyMeta"})," / ",e.jsx(n.code,{children:"PasteMeta"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`cellTransfer: {
  fillHandle: true,
  onBeforeFill: (data, meta) => {
    // data — string[][] (значения, которые будут вставлены)
    // meta.sourceRange — Rectangle источника
    // meta.destinationRange — Rectangle назначения
    // meta.sourceCells — CellTransferCellInfo[][] (исходные ячейки, включая row)
    // meta.targetCells — CellTransferCellInfo[][] (целевые ячейки до заполнения)

    const sourceRow = meta.sourceCells[0]?.[0]?.row;
    console.log('Исходная строка:', sourceRow);

    // Модифицировать данные:
    return data;

    // Или отменить:
    return false;
  },
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Типичный сценарий:"}),` при перетаскивании одной колонки нужно скопировать
и соседние колонки из исходной строки. Source row доступен через
`,e.jsx(n.code,{children:"meta.sourceCells[rowIndex][colIndex].row"}),"."]}),`
`,e.jsx(n.h3,{id:"type-в-onrowschange",children:"type в onRowsChange"}),`
`,e.jsxs(n.p,{children:["Второй аргумент ",e.jsx(n.code,{children:"onRowsChange"})," содержит поле ",e.jsx(n.code,{children:"type"})," (",e.jsx(n.code,{children:"'edit'"})," | ",e.jsx(n.code,{children:"'paste'"})," | ",e.jsx(n.code,{children:"'fill'"}),`),
указывающее источник изменения строк. При `,e.jsx(n.code,{children:"type === 'fill'"}),` дополнительно
передаются `,e.jsx(n.code,{children:"fillMeta"})," (FillMeta) и ",e.jsx(n.code,{children:"fillResult"})," (результат ",e.jsx(n.code,{children:"onBeforeFill"}),`,
если он задан).`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"кастомные-хоткеи",children:"Кастомные хоткеи"}),`
`,e.jsx(n.p,{children:"По умолчанию: Ctrl+C (copy), Ctrl+V (paste). На Mac — Cmd вместо Ctrl."}),`
`,e.jsxs(n.p,{children:["Хоткеи работают независимо от раскладки (RU/EN) — используется ",e.jsx(n.code,{children:"event.code"}),`
(`,e.jsx(n.code,{children:"'KeyC'"}),", ",e.jsx(n.code,{children:"'KeyV'"}),"), а не ",e.jsx(n.code,{children:"event.key"})," (",e.jsx(n.code,{children:"'c'"}),", ",e.jsx(n.code,{children:"'с'"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`cellTransfer: {
  hotkeys: {
    copy: { code: 'KeyC', ctrl: true, alt: true },   // Ctrl+Alt+C
    paste: [
      { code: 'KeyV', ctrl: true },                   // Ctrl+V (дефолт сохраняем)
      { code: 'Insert', shift: true },                // Shift+Insert (альтернатива)
    ],
  },
}
`})}),`
`,e.jsxs(n.p,{children:[`Если задать только кастомный хоткей (без массива), дефолтный Ctrl+C / Ctrl+V
перестаёт работать (replace-семантика). Чтобы сохранить оба варианта,
передавайте массив, как в примере для `,e.jsx(n.code,{children:"paste"})," выше."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`tableConfig={{
  cellTransfer: {
    // Явно включить/выключить (copy работает всегда по умолчанию)
    enabled: true,

    // Хоткеи
    hotkeys: { copy: ..., paste: ... },

    // Настройки paste
    paste: {
      readonlyBehavior: 'skip' | 'abort',     // default: 'skip'
      allowSubRows: true | false,             // default: true
      overflowBehavior: 'truncate' | 'abort', // default: 'truncate'
      broadcast: true | false,                // default: false
      validation: 'none' | 'type-check',      // default: 'type-check'
    },

    // Fill handle
    fillHandle: true | false | {
      shape: 'square' | 'circle',
      size: number,
      allowedDirections: 'horizontal' | 'vertical' | 'orthogonal' | 'any',
      readonlyBehavior: 'skip' | 'abort',
      allowSubRows: boolean,
    },

    // Перехваты
    onBeforeCopy: (data, meta) => data | false,
    onBeforePaste: (data, meta) => data | false,
    onBeforeFill: (data, meta) => data | false,
  },
}}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"debug",children:"Debug"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`window.__TABLE_CANVAS_CLIPBOARD_DEBUG__ = true;
`})}),`
`,e.jsx(n.p,{children:'Включите уровень "Verbose" в DevTools. Префиксы логов:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[TableCanvas/cellTransfer]"})," — перехват хоткеев"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[TableCanvas/copy]"})," — копирование"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[TableCanvas/paste]"})," — вставка (включая skipped by validation)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"[TableCanvas/fillHandle]"})," — fill handle (source, dest, affected rows)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Полное описание API типов см. на странице ",e.jsx(n.strong,{children:"Clipboard / API"}),"."]}),`
`,e.jsx(c,{})]})}function X(l={}){const{wrapper:n}={...s(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(r,{...l})}):r(l)}export{X as default};
