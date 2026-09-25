import{j as i}from"./react-D2T61mpp.js";import{cg as o,ch as c,ca as s}from"./vendor-C4kmGUJR.js";import{T as l}from"./TableCanvas.rowHeight.stories-DXM3hoKd.js";import"./react-is-Clcustum.js";import"./styled-components-igVELayG.js";import"./@tanstack/react-virtual-tAdAmKr0.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-esiRsg12.js";import"./storySourceDoc-tVKyHcEN.js";import"./StoriesUtils-CRIEQivg.js";import"./TableCanvas-BSYyoJd-.js";import"./FiltersActions-C_evAAdS.js";import"./IconButton-D8PVEJQe.js";import"./@salutejs/plasma-icons-BG9F5Vsk.js";import"./@salutejs/sdds-finai-Cxh_KERn.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-BaEbit5C.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BwA95D7K.js";import"./TextField-D671LMS4.js";import"./sharedUtilsInputs-CBKMiSSI.js";import"./AnalyticalWidget-CINlP-vL.js";import"./Collapse-CBcJKqhO.js";import"./Table-B_NO3wa_.js";import"./react-data-grid-DWBn58W3.js";import"./TableTabs-fBjSvvm5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CVp-9zib.js";import"./ListOfFilters-DnTP6NK4.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BauwXdbL.js";import"./EmptyState-B2DNV60C.js";import"./MassActions-aIR-BycS.js";import"./Autocomplete-B057UQHf.js";import"./TableGlide-Dzjzr1D6.js";import"./@glideappsfinal/glide-data-grid-D-RliWZ9.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Yx_UlywC.js";function r(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(c,{of:l,name:"Docs"}),`
`,i.jsx(e.h1,{id:"rowheight-tablecanvas",children:"RowHeight (TableCanvas)"}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"tableConfig.rowHeight + tableConfig.rowSize"})}),`
`,i.jsx(e.p,{children:"Настройка высоты строк таблицы. Поддерживает фиксированную высоту, динамическое вычисление и переключение размера через UI."}),`
`,i.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:["Фиксированная высота строки (",i.jsx(e.code,{children:"number"}),")"]}),`
`,i.jsxs(e.li,{children:["Динамическая высота через функцию (",i.jsx(e.code,{children:"RowHeightFunc"}),")"]}),`
`,i.jsxs(e.li,{children:["Доступ к данным строки и текущему размеру (",i.jsx(e.code,{children:"currentRowSize"}),")"]}),`
`,i.jsxs(e.li,{children:["Переключатель размера строк в controlBlock (",i.jsx(e.code,{children:"rowSize"}),")"]}),`
`]}),`
`,i.jsx(e.h2,{id:"tableconfigrowheight",children:"tableConfig.rowHeight"}),`
`,i.jsx(e.p,{children:"Определяет высоту каждой строки:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"number"})})," — фиксированная высота в пикселях для всех строк"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"RowHeightFunc"})})," — функция, вычисляющая высоту на основе ",i.jsx(e.code,{children:"row"}),", ",i.jsx(e.code,{children:"currentRowSize"})," и ",i.jsx(e.code,{children:"rowIndex"})]}),`
`]}),`
`,i.jsx(e.h2,{id:"tableconfigrowsize",children:"tableConfig.rowSize"}),`
`,i.jsx(e.p,{children:"Переключатель размера строк в controlBlock (кнопка с выпадающим списком):"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"showInControl"})})," — показывать ли кнопку в controlBlock"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"default"})})," — размер по умолчанию (",i.jsx(e.code,{children:"'s'"}),", ",i.jsx(e.code,{children:"'m'"}),", ",i.jsx(e.code,{children:"'l'"}),")"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"available"})})," — список доступных размеров"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:i.jsx(e.code,{children:"onRowSizeChange"})})," — callback при смене размера"]}),`
`]}),`
`,i.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.code,{children:"RowHeightFunc"})," получает ",i.jsx(e.code,{children:"currentRowSize"})," — объект с ",i.jsx(e.code,{children:"rowSizeName"})," и ",i.jsx(e.code,{children:"rowSizeValue"}),", что позволяет адаптировать высоту к текущему выбранному размеру"]}),`
`,i.jsxs(e.li,{children:["При использовании ",i.jsx(e.code,{children:"rowHeight"})," как функции, рекомендуется мемоизировать её для производительности"]}),`
`]}),`
`,i.jsxs(e.blockquote,{children:[`
`,i.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",i.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowheight-api--docs",children:"RowHeight API"})]}),`
`]}),`
`,i.jsx(s,{})]})}function O(n={}){const{wrapper:e}={...o(),...n.components};return e?i.jsx(e,{...n,children:i.jsx(r,{...n})}):r(n)}export{O as default};
