import{j as i}from"./react-D2T61mpp.js";import{cf as o,cg as c,c9 as s}from"./vendor-BA2uJqm3.js";import{T as t}from"./TableCanvas.rowHeight.stories-BtMgViIl.js";import"./react-is-Clcustum.js";import"./styled-components-DI0RiSri.js";import"./@tanstack/react-virtual-DMW_htbC.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BZYLyq8m.js";import"./storySourceDoc-tVKyHcEN.js";import"./StoriesUtils-Bovcsymw.js";import"./TableCanvas-Cnk4HLGu.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjrMZFsU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-HGBzAa3l.js";import"./@salutejs/plasma-icons-DwAv7YrD.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-CqtjD7fq.js";import"./IconButton-BybKUD7Y.js";import"./Box-ZOkrcsKi.js";import"./TextField-DZKR2GVq.js";import"./sharedUtilsInputs-CnW24mU9.js";import"./AiAgentPopup-ByfmyI4w.js";import"./TextArea-BI7NPZWg.js";import"./sharedUtilsResizable-B9o-tffI.js";import"./Table-C6ylUQN9.js";import"./Collapse-CKc8B8rW.js";import"./react-data-grid-6LdYXpuk.js";import"./TableTabs-EpzcYvI8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DKhcFH5P.js";import"./@glideappsfinal/glide-data-grid-3eF0LrAd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DC9JYQJ1.js";import"./ListOfFilters-BaD6Bsow.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B0gQLxCm.js";import"./EmptyState-BKK3EFcw.js";import"./MassActions-CHP0YYiG.js";import"./Autocomplete-CeKUjrvz.js";import"./ErrorPage-4f41r735.js";function n(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(c,{of:t,name:"Docs"}),`
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
