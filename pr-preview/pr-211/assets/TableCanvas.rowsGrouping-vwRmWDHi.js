import{j as o}from"./react-UEdzNlUe.js";import{df as e}from"./vendor-BjJ6Dniq.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-8sW6qWBN.js";import{T as p}from"./TableCanvas.rowsGrouping.stories-CNBQCRdE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-DihHaBn_.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./DocStoryTemplate-NeoOpigq.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-Dgmteq0e.js";import"./index-BFB8ouFt.js";import"./TableCanvas-za5dS4Cx.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-JpoKTq_4.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./@salutejs/plasma-icons-DO9zHrCT.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-qQzmLoyi.js";import"./Box-CnSr-EOZ.js";import"./Collapse-dO_AAhkR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-D9ZKcnee.js";import"./@daisforge/glide-data-grid-CA67jk5O.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-JT5O_jSL.js";import"./sharedUiSearch-wESeMURt.js";import"./TextField-CdmN3rBr.js";import"./sharedUtilsInputs-CC6DzjXV.js";import"./Typography-KGvcb-tR.js";import"./ListOfFilters-CiQi80_Y.js";import"./FiltersActions-C5ReeHxe.js";import"./IconButton-Bi2q2X3M.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-BBffWV7O.js";import"./EmptyState-PRAp0Uli.js";import"./unidentified@3x-p-1UhR3r.js";import"./ErrorPage-K5smkMSZ.js";import"./Autocomplete-Bypm81CP.js";import"./visual-helpers-CpY530oS.js";import"./tableData-DKA5H0bF.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{of:p,name:"Docs"}),`
`,o.jsx(r.h1,{id:"rowsgrouping-tablecanvas",children:"RowsGrouping (TableCanvas)"}),`
`,o.jsx(r.p,{children:o.jsx(r.strong,{children:"tableConfig.rowsGrouping + columnConfig.rowsGrouping"})}),`
`,o.jsx(r.p,{children:"Группировка строк таблицы по значениям колонок с поддержкой вложенных группировок."}),`
`,o.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:["Управляемое состояние группировки через ",o.jsx(r.code,{children:"groupByState"})]}),`
`,o.jsx(r.li,{children:"Кнопка с выпадающим списком для выбора группировок в controlBlock"}),`
`,o.jsxs(r.li,{children:["Кастомный рендер сгруппированных строк через ",o.jsx(r.code,{children:"renderGroupCell"})]}),`
`,o.jsxs(r.li,{children:["Кастомные элементы в выпадающем списке через ",o.jsx(r.code,{children:"groupButton.defaultCustomItems"})]}),`
`,o.jsxs(r.li,{children:["Возможность замены данных группированных строк через ",o.jsx(r.code,{children:"groupRowReplaceTo"})]}),`
`]}),`
`,o.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"rowKeyGetter"})," должен возвращать уникальный идентификатор строки"]}),`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"groupedColumnProps"})," позволяет настроить колонку с группировкой (ширину, рендер и т.д.)"]}),`
`,o.jsxs(r.li,{children:["В ",o.jsx(r.code,{children:"columnConfig.rowsGrouping"})," можно указать ",o.jsx(r.code,{children:"groupByColumn: false"})," для исключения колонки из группировки"]}),`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"columnGroupLabel"})," переопределяет лейбл в выпадающем списке (default: ",o.jsx(r.code,{children:"columnConfig.key"}),")"]}),`
`]}),`
`,o.jsx(r.p,{children:"Высота списка «Группировать» ограничена 360 px или половиной высоты окна, если она меньше. При большом числе столбцов список прокручивается."}),`
`,o.jsx(r.p,{children:"В истории «Простая группировка» включите «24 дополнительных столбца» в Controls и нажмите «Группировать». Чтобы открыть тот же список на узкой панели, включите «Узкая панель» и нажмите «… → Группировать». Прокрутите список до «Золотые медали за 2023 год» и выберите этот пункт. Его чекбокс отметится."}),`
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:["Подробнее о типах — ",o.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowsgrouping-api--docs",children:"RowsGrouping API"})]}),`
`]}),`
`,o.jsx(r.h2,{id:"применение-группировки",children:"Применение группировки"}),`
`,o.jsxs(r.p,{children:["По умолчанию каждый выбор сразу обновляет ",o.jsx(r.code,{children:"groupByState"}),". Задайте ",o.jsx(r.code,{children:"rowsGrouping.groupButton.applyMode: 'confirm'"}),", чтобы собрать несколько столбцов и передать их setter одним вызовом. Порядок выбора задаёт порядок уровней. «Сбросить все» очищает черновик, Escape и закрытие меню отбрасывают его. В этом режиме ",o.jsx(r.code,{children:"groupButton.onItemSelect"})," получает setter черновика."]}),`
`,o.jsx(r.p,{children:"На широкой панели «Применить» находится под списком. На узкой панели откройте «Дополнительные действия» → «Группировать» и выберите последний пункт «Применить»."}),`
`,o.jsx(s,{})]})}function so(i={}){const{wrapper:r}={...e(),...i.components};return r?o.jsx(r,{...i,children:o.jsx(n,{...i})}):n(i)}export{so as default};
