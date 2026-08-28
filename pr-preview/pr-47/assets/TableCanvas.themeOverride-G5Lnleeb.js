import{j as e}from"./react-D2T61mpp.js";import{c6 as o,c7 as l,c0 as d}from"./vendor-D0k-bL4H.js";import{T as s}from"./TableCanvas.themeOverride.stories-I-FTh1bf.js";import"./react-is-Clcustum.js";import"./styled-components-D8vUpZ79.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-C_wGLEtM.js";import"./TableCanvas-EGzZCWcK.js";import"./FiltersActions-DFYvS86u.js";import"./IconButton-BwsXIhiD.js";import"./@salutejs/plasma-icons-B2gARaIt.js";import"./@salutejs/sdds-finai-9f2Z3gSc.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-BsIKPznQ.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-oT8vEc87.js";import"./TextField-D9SAbnRq.js";import"./sharedUtilsInputs-BpFlkwj3.js";import"./AnalyticalWidget-C_YOIqNy.js";import"./Collapse-DGqYHNo_.js";import"./Table-Bo3uZOST.js";import"./react-data-grid-p-wBMMSv.js";import"./TableTabs-bchgDMaK.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-WI14EhMn.js";import"./ListOfFilters-CTJFIH40.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C94N8voO.js";import"./EmptyState-CzQ_YjnV.js";import"./MassActions-D1nnBd7w.js";import"./Autocomplete-B7lvUJkZ.js";import"./TableGlide-DzeiQf28.js";import"./@glideappsfinal/glide-data-grid-uBYBN4Je.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BnEFvPen.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s,name:"Docs"}),`
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
