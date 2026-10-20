import{j as e}from"./react-D2T61mpp.js";import{cf as o,cg as c,c9 as s}from"./vendor-D_V-7t_a.js";import{T as l}from"./TableCanvas.rowHeight.stories-YmrHKpjH.js";import"./react-is-Clcustum.js";import"./styled-components-Dq-tdBjG.js";import"./@tanstack/react-virtual-CQCncR_5.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BBdkpFVI.js";import"./storySourceDoc-tVKyHcEN.js";import"./StoriesUtils-4zUHzzYS.js";import"./TableCanvas-dSeoqcn-.js";import"./FiltersActions-HkTjSAr8.js";import"./IconButton-Ccn4UksK.js";import"./@salutejs/plasma-icons-B2MmBGK5.js";import"./@salutejs/sdds-finai-CCVgly2E.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DRPdSg45.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CYTaRxTD.js";import"./TextField-1tiUIhRw.js";import"./sharedUtilsInputs-CjCot3Kv.js";import"./AiAgentPopup-BaInsmnj.js";import"./TextArea-DaZBl3_t.js";import"./sharedUtilsResizable-CZBz5p8e.js";import"./Table-DT5LyPRu.js";import"./Collapse-D8NryjXw.js";import"./react-data-grid-DTQWprzh.js";import"./TableTabs-DxadsATc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DM-7xkOX.js";import"./@glideappsfinal/glide-data-grid-C-fLDB5h.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-lHetejzp.js";import"./ListOfFilters-UOj9_xA6.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bfbbctir.js";import"./EmptyState-zxDobyZ4.js";import"./MassActions-KfImpKme.js";import"./Autocomplete-B9-NR3rI.js";import"./ErrorPage-B4KGxaHC.js";function r(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l,name:"Docs"}),`
`,e.jsx(i.h1,{id:"rowheight-tablecanvas",children:"RowHeight (TableCanvas)"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"tableConfig.rowHeight + tableConfig.rowSize"})}),`
`,e.jsx(i.p,{children:"Настройка высоты строк таблицы. Поддерживает фиксированную высоту, динамическое вычисление и переключение размера через UI."}),`
`,e.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Фиксированная высота строки (",e.jsx(i.code,{children:"number"}),")"]}),`
`,e.jsxs(i.li,{children:["Динамическая высота через функцию (",e.jsx(i.code,{children:"RowHeightFunc"}),")"]}),`
`,e.jsxs(i.li,{children:["Высота по содержимому ячеек (",e.jsx(i.code,{children:"'auto'"}),"): перенос текста растит строку"]}),`
`,e.jsxs(i.li,{children:["Доступ к данным строки и текущему размеру (",e.jsx(i.code,{children:"currentRowSize"}),")"]}),`
`,e.jsxs(i.li,{children:["Переключатель размера строк в controlBlock (",e.jsx(i.code,{children:"rowSize"}),")"]}),`
`]}),`
`,e.jsx(i.h2,{id:"tableconfigrowheight",children:"tableConfig.rowHeight"}),`
`,e.jsx(i.p,{children:"Определяет высоту каждой строки:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"number"})})," — фиксированная высота в пикселях для всех строк"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"RowHeightFunc"})})," — функция, вычисляющая высоту на основе ",e.jsx(i.code,{children:"row"}),", ",e.jsx(i.code,{children:"currentRowSize"})," и ",e.jsx(i.code,{children:"rowIndex"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"'auto'"})})," — высота по содержимому: ui-kit измеряет дерево Canvas каждой ячейки при ширине колонки (",e.jsx(i.code,{children:"Canvas.Text wordWrap"})," переносит слова и растит строку), но не ниже высоты по ",e.jsx(i.code,{children:"rowSize"}),". Видимые строки измеряются точно, остальные получают оценку. Вертикальные отступы ячейки добавляет ui-kit, в дереве ячейки их задавать не нужно. Подсветку фрагментов текста с переносом по строкам делает ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-canvaselements-canvasmark--docs",children:e.jsx(i.code,{children:"Canvas.Mark"})})," внутри ",e.jsx(i.code,{children:"Canvas.Text"})]}),`
`]}),`
`,e.jsx(i.h2,{id:"tableconfigrowsize",children:"tableConfig.rowSize"}),`
`,e.jsx(i.p,{children:"Переключатель размера строк в controlBlock (кнопка с выпадающим списком):"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"showInControl"})})," — показывать ли кнопку в controlBlock"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"default"})})," — размер по умолчанию (",e.jsx(i.code,{children:"'s'"}),", ",e.jsx(i.code,{children:"'m'"}),", ",e.jsx(i.code,{children:"'l'"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"available"})})," — список доступных размеров"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.code,{children:"onRowSizeChange"})})," — callback при смене размера"]}),`
`]}),`
`,e.jsx(i.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"RowHeightFunc"})," получает ",e.jsx(i.code,{children:"currentRowSize"})," — объект с ",e.jsx(i.code,{children:"rowSizeName"})," и ",e.jsx(i.code,{children:"rowSizeValue"}),", что позволяет адаптировать высоту к текущему выбранному размеру"]}),`
`,e.jsxs(i.li,{children:["При использовании ",e.jsx(i.code,{children:"rowHeight"})," как функции, рекомендуется мемоизировать её для производительности"]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Подробнее о типах и пропсах — ",e.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight-api--docs",children:"RowHeight API"})]}),`
`]}),`
`,e.jsx(s,{})]})}function Q(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{Q as default};
