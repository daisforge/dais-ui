import{j as e}from"./react-D2T61mpp.js";import{cg as o,ch as l,ca as d}from"./vendor-DwzXrIa_.js";import{T as c}from"./TableCanvas.themeOverride.stories-MF4aYxMu.js";import"./react-is-Clcustum.js";import"./styled-components-C4HVP9Bu.js";import"./@tanstack/react-virtual-B5rjj9YJ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-D1KCoccP.js";import"./TableCanvas-DjK-kjvb.js";import"./FiltersActions-B9s5M6cr.js";import"./IconButton-BdMspFUd.js";import"./@salutejs/plasma-icons-ByXz74TC.js";import"./@salutejs/sdds-finai-CLAU31SQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-Cam_MtZy.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C2zw6gNX.js";import"./TextField-BKiYQwUB.js";import"./sharedUtilsInputs-Bi3qGV92.js";import"./AnalyticalWidget-pSEUAb11.js";import"./Collapse-DWYGfMp3.js";import"./Table-Br3Prpk9.js";import"./react-data-grid-BhThHQcM.js";import"./TableTabs-_rcOlpWb.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-DQvbKNpP.js";import"./ListOfFilters-Da26yZqP.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cqbr1Qf0.js";import"./EmptyState-CQ1IYHsU.js";import"./MassActions-Cr5KFfS2.js";import"./Autocomplete-kr3RqShP.js";import"./TableGlide-BYfZcBKw.js";import"./@glideappsfinal/glide-data-grid-DqglgFH5.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DX7EcwBX.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c,name:"Docs"}),`
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
`,e.jsxs(r.p,{children:["Для колонок с ",e.jsx(r.code,{children:"subRow.isColumnWithArrow: true"})," левый край ячейки рассчитывается формулой ",e.jsx(r.code,{children:"cellHorizontalPadding + step * lvl"}),", где шаг зависит от размера строки: ",e.jsx(r.code,{children:"big"})," — 50 (16 → 66 → 116 → 166 px), ",e.jsx(r.code,{children:"medium"})," — 36 (6 → 42 → 78 → 114 px), ",e.jsx(r.code,{children:"small"})," — 28 (4 → 32 → 60 → 88 px). Отступ зависит только от уровня вложенности и не зависит от наличия шеврона, поэтому текст дочерней строки всегда правее текста родителя. Шеврон рисуется иконкой без пустого места слева: раскрытый ",e.jsx(r.code,{children:"∨"})," начинается ровно на линии уровня (там же, где текст соседнего листа), у свёрнутого ",e.jsx(r.code,{children:">"})," небольшой отступ, чтобы при раскрытии не было скачка. Справа от шеврона места столько же, сколько у исходной иконки, поэтому расстояние до текста прежнее. Двойной шеврон в шапке (",e.jsx(r.code,{children:"раскрыть/скрыть все строки"}),") построен так же и стоит на линии свёрнутого шеврона строки, а заголовок колонки — над текстом строк верхнего уровня. Override влияет на левый край, но итоговое значение ",e.jsx(r.code,{children:"= override + offsets"}),", а не ровно значение override. Правый край и ",e.jsx(r.code,{children:"bgCell"})," для tree-колонок работают как обычно."]}),`
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
`,e.jsx(d,{})]})}function G(i={}){const{wrapper:r}={...o(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}export{G as default};
