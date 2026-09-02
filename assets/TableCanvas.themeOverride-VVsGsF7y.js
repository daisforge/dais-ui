import{j as e}from"./react-D2T61mpp.js";import{c6 as o,c7 as l,c0 as d}from"./vendor-DV2KdZ5r.js";import{T as s}from"./TableCanvas.themeOverride.stories-BDFvV6PO.js";import"./react-is-Clcustum.js";import"./styled-components-B-oogN2m.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-ote7_b2_.js";import"./TableCanvas-DnL3tdXj.js";import"./FiltersActions-BiNqI_iV.js";import"./IconButton-BG1jP3Ty.js";import"./@salutejs/plasma-icons-BcApNSC-.js";import"./@salutejs/sdds-finai-Bp-ifuS6.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-DLEIaJN_.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C4aqnFI9.js";import"./TextField-CVQkYUe1.js";import"./sharedUtilsInputs-Cd0a1lTf.js";import"./AnalyticalWidget-fFIEFTtN.js";import"./Collapse-v3xqndDb.js";import"./Table-C5U8j0VY.js";import"./react-data-grid-5SLMzt16.js";import"./TableTabs-D160CwiY.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CJKCVs_u.js";import"./ListOfFilters-DWl5cU2P.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C1dFiEaP.js";import"./EmptyState-Dw-u5Z14.js";import"./MassActions-uEA8Hwwa.js";import"./Autocomplete-3jB_S9Tb.js";import"./TableGlide-DbZTI3Lu.js";import"./@glideappsfinal/glide-data-grid-C5jg3NuH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-pVqDPs_F.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s,name:"Docs"}),`
`,e.jsx(r.h1,{id:"theme-override",children:"Theme Override"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"columnConfig.themeOverride"})}),`
`,e.jsxs(r.p,{children:["Переопределение визуальных свойств ячейки на уровне колоночного конфига. Колбэк вызывается для каждой ячейки колонки и возвращает частичный override темы (",e.jsx(r.code,{children:"Partial<Theme>"}),"), либо ",e.jsx(r.code,{children:"undefined"}),", если для ячейки переопределение не нужно."]}),`
`,e.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"bgCell"})," — цвет фона ячейки (рисуется нативно, закрашивает всю площадь ячейки, включая паддинги)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"cellHorizontalPadding"})," — горизонтальные отступы контента ячейки"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"cellVerticalPadding"})," — вертикальные отступы контента ячейки"]}),`
`,e.jsxs(r.li,{children:["Колбэк получает ",e.jsx(r.code,{children:"cellInfo"})," (row, column, ctxs, theme) и ",e.jsx(r.code,{children:"lvl"})," — уровень вложенности subRow (0 для корневых строк, 1+ для дочерних)"]}),`
`,e.jsx(r.li,{children:"Условное поведение: можно менять стили в зависимости от данных строки или уровня вложенности"}),`
`]}),`
`,e.jsx(r.h2,{id:"сигнатура",children:"Сигнатура"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`themeOverride?: (
  cellInfo: CellInfo<Row, SummRow, CustomCtxs>,
  lvl: number
) => CellThemeOverrideResult | undefined;
`})}),`
`,e.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsx(r.h3,{id:"обычные-колонки",children:"Обычные колонки"}),`
`,e.jsxs(r.p,{children:["Для колонок без ",e.jsx(r.code,{children:"subRow.isColumnWithArrow"})," ",e.jsx(r.code,{children:"cellHorizontalPadding"})," через ",e.jsx(r.code,{children:"themeOverride"})," применяется напрямую и одинаково на всех уровнях вложенности (root и subRows). Левый и правый паддинги получают точное значение из override."]}),`
`,e.jsx(r.h3,{id:"tree-колонки-с-шевроном-раскрытия",children:"Tree-колонки (с шевроном раскрытия)"}),`
`,e.jsxs(r.p,{children:["Для колонок с ",e.jsx(r.code,{children:"subRow.isColumnWithArrow: true"})," левый край ячейки рассчитывается формулой ",e.jsx(r.code,{children:"getPaddingLeftFinal(padding, lvl, hasChildrenAndArrow, isExpandable)"}),". Формула берёт ",e.jsx(r.code,{children:"cellHorizontalPadding"})," как базу и прибавляет к нему отступ под шеврон + offset на уровень вложенности. Override влияет на левый край, но итоговое значение ",e.jsx(r.code,{children:"= override + offsets"}),", а не ровно значение override. Правый край и ",e.jsx(r.code,{children:"bgCell"})," для tree-колонок работают как обычно."]}),`
`,e.jsx(r.h3,{id:"кастомный-rendercell",children:"Кастомный renderCell"}),`
`,e.jsxs(r.p,{children:["Для колонок с ",e.jsx(r.code,{children:"renderCell"})," системная обёртка с паддингом не добавляется. Разработчик сам управляет отступами через ",e.jsx(r.code,{children:"theme.cellHorizontalPadding"})," внутри своего renderCell."]}),`
`,e.jsx(r.h3,{id:"bgcell",children:"bgCell"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"bgCell"})," рисуется нативно на уровне самой таблицы. Фон закрашивает всю ячейку целиком, включая области паддингов и любых обёрток."]}),`
`,e.jsx(r.h2,{id:"см-также",children:"См. также"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"getRowThemeOverride"})," — нативный API таблицы для переопределения темы ",e.jsx(r.strong,{children:"строки целиком"}),' (по индексу строки, без cellInfo). Используется для подсветки summary-строк и selected-строк. Если нужен row-level эффект (например, "выделенная строка целиком") — используйте этот механизм, а не ',e.jsx(r.code,{children:"themeOverride"})," на каждой ячейке."]}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["Подробнее о типах — ",e.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-themeoverride-api--docs",children:"Theme Override API"})]}),`
`]}),`
`,e.jsx(d,{})]})}function V(i={}){const{wrapper:r}={...o(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}export{V as default};
