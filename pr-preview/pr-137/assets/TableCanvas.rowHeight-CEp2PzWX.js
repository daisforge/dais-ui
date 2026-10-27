import{j as i}from"./react-D2T61mpp.js";import{cf as o,cg as c,c9 as s}from"./vendor-DyX3yqNp.js";import{T as t}from"./TableCanvas.rowHeight.stories-B6zCm3Z-.js";import"./react-is-Clcustum.js";import"./styled-components-ccjJug2H.js";import"./@tanstack/react-virtual-DAUINi0H.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-zj6qwwHt.js";import"./storySourceDoc-tVKyHcEN.js";import"./StoriesUtils-D_DQdVN_.js";import"./TableCanvas-qFvlagp3.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-DQxdQErP.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BZMI6rrq.js";import"./@salutejs/plasma-icons-Cw8ohz1I.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BrG0hbPK.js";import"./IconButton-B6fBl0RH.js";import"./Box-D-OropPv.js";import"./TextField--CPz6SHF.js";import"./sharedUtilsInputs-Cm96x1-i.js";import"./AiAgentPopup-BZFXxb1c.js";import"./TextArea-Di4Qtf2V.js";import"./sharedUtilsResizable-Blk5Lffw.js";import"./Table-D6q5spYj.js";import"./Collapse-CRdO4IOl.js";import"./react-data-grid-CgHW3sHZ.js";import"./TableTabs-9JF0xyYS.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-D3oESuGS.js";import"./@glideappsfinal/glide-data-grid-DnsAjn7G.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BUz5u9gE.js";import"./ListOfFilters-BuClPu4W.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BelZyhKZ.js";import"./EmptyState-HtYn0o0B.js";import"./MassActions-wjCN4VmP.js";import"./Autocomplete-D4kazqKR.js";import"./ErrorPage--JsKV23W.js";function n(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(c,{of:t,name:"Docs"}),`
`,i.jsx(r.h1,{id:"rowheight-tablecanvas",children:"RowHeight (TableCanvas)"}),`
`,i.jsx(r.p,{children:i.jsx(r.strong,{children:"tableConfig.rowHeight + tableConfig.rowSize"})}),`
`,i.jsx(r.p,{children:"Настройка высоты строк таблицы. Поддерживает фиксированную высоту, динамическое вычисление и переключение размера через UI."}),`
`,i.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:["Фиксированная высота строки (",i.jsx(r.code,{children:"number"}),")"]}),`
`,i.jsxs(r.li,{children:["Динамическая высота через функцию (",i.jsx(r.code,{children:"RowHeightFunc"}),")"]}),`
`,i.jsxs(r.li,{children:["Доступ к данным строки и текущему размеру (",i.jsx(r.code,{children:"currentRowSize"}),")"]}),`
`,i.jsxs(r.li,{children:["Переключатель размера строк в controlBlock (",i.jsx(r.code,{children:"rowSize"}),")"]}),`
`]}),`
`,i.jsx(r.h2,{id:"tableconfigrowheight",children:"tableConfig.rowHeight"}),`
`,i.jsx(r.p,{children:"Определяет высоту каждой строки:"}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"number"})})," — фиксированная высота в пикселях для всех строк"]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"RowHeightFunc"})})," — функция, вычисляющая высоту на основе ",i.jsx(r.code,{children:"row"}),", ",i.jsx(r.code,{children:"currentRowSize"})," и ",i.jsx(r.code,{children:"rowIndex"})]}),`
`]}),`
`,i.jsx(r.h2,{id:"tableconfigrowsize",children:"tableConfig.rowSize"}),`
`,i.jsx(r.p,{children:"Переключатель размера строк в controlBlock (кнопка с выпадающим списком):"}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"showInControl"})})," — показывать ли кнопку в controlBlock"]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"default"})})," — размер по умолчанию (",i.jsx(r.code,{children:"'s'"}),", ",i.jsx(r.code,{children:"'m'"}),", ",i.jsx(r.code,{children:"'l'"}),")"]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"available"})})," — список доступных размеров"]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.strong,{children:i.jsx(r.code,{children:"onRowSizeChange"})})," — callback при смене размера"]}),`
`]}),`
`,i.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:[i.jsx(r.code,{children:"RowHeightFunc"})," получает ",i.jsx(r.code,{children:"currentRowSize"})," — объект с ",i.jsx(r.code,{children:"rowSizeName"})," и ",i.jsx(r.code,{children:"rowSizeValue"}),", что позволяет адаптировать высоту к текущему выбранному размеру"]}),`
`,i.jsxs(r.li,{children:["При использовании ",i.jsx(r.code,{children:"rowHeight"})," как функции, рекомендуется мемоизировать её для производительности"]}),`
`]}),`
`,i.jsxs(r.blockquote,{children:[`
`,i.jsxs(r.p,{children:["Подробнее о типах и пропсах — ",i.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight-api--docs",children:"RowHeight API"})]}),`
`]}),`
`,i.jsx(s,{})]})}function Y(e={}){const{wrapper:r}={...o(),...e.components};return r?i.jsx(r,{...e,children:i.jsx(n,{...e})}):n(e)}export{Y as default};
