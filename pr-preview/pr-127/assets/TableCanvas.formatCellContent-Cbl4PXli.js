import{j as o}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as c}from"./vendor-D_V-7t_a.js";import{T as l}from"./TableCanvas.formatCellContent.stories-BoOvenfM.js";import"./react-is-Clcustum.js";import"./styled-components-Dq-tdBjG.js";import"./@tanstack/react-virtual-CQCncR_5.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BBdkpFVI.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-dSeoqcn-.js";import"./FiltersActions-HkTjSAr8.js";import"./IconButton-Ccn4UksK.js";import"./@salutejs/plasma-icons-B2MmBGK5.js";import"./@salutejs/sdds-finai-CCVgly2E.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-DRPdSg45.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CYTaRxTD.js";import"./TextField-1tiUIhRw.js";import"./sharedUtilsInputs-CjCot3Kv.js";import"./AiAgentPopup-BaInsmnj.js";import"./TextArea-DaZBl3_t.js";import"./sharedUtilsResizable-CZBz5p8e.js";import"./Table-DT5LyPRu.js";import"./Collapse-D8NryjXw.js";import"./react-data-grid-DTQWprzh.js";import"./TableTabs-DxadsATc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DM-7xkOX.js";import"./@glideappsfinal/glide-data-grid-C-fLDB5h.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-lHetejzp.js";import"./ListOfFilters-UOj9_xA6.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bfbbctir.js";import"./EmptyState-zxDobyZ4.js";import"./MassActions-KfImpKme.js";import"./Autocomplete-B9-NR3rI.js";import"./ErrorPage-B4KGxaHC.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:l,name:"Docs"}),`
`,o.jsx(n.h1,{id:"formatcellcontent-tablecanvas",children:"FormatCellContent (TableCanvas)"}),`
`,o.jsx(n.p,{children:o.jsx(n.strong,{children:"columnConfig.contentFormat"})}),`
`,o.jsxs(n.p,{children:["Параметр ",o.jsx(n.code,{children:"contentFormat"})," позволяет гибко настраивать отображение данных в ячейках таблицы. Поддерживается как на уровне колонки, так и для subRow (дочерних строк)."]}),`
`,o.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:"Числовое форматирование с настройкой разделителей, локали, дробной части"}),`
`,o.jsxs(n.li,{children:["Кастомное форматирование через ",o.jsx(n.code,{children:"customFormat"})]}),`
`,o.jsxs(n.li,{children:["Выравнивание содержимого (",o.jsx(n.code,{children:"alignContent"}),"); явное выравнивание колонки ",o.jsx(n.code,{children:"column.contentAlign"})," (",o.jsx(n.code,{children:"'left' | 'center' | 'right'"}),") приоритетнее ",o.jsx(n.code,{children:"contentFormat"})]}),`
`,o.jsxs(n.li,{children:["Приоритет формата: ",o.jsx(n.code,{children:"subRow.contentFormat"})," → родительский ",o.jsx(n.code,{children:"contentFormat"})," → ",o.jsx(n.code,{children:"column.contentFormat"})]}),`
`]}),`
`,o.jsx(n.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsxs(n.li,{children:["Если используется ",o.jsx(n.code,{children:"renderCell"})," или ",o.jsx(n.code,{children:"renderSubRowCell"}),", кастомное форматирование не применяется"]}),`
`,o.jsxs(n.li,{children:["При редактировании с ",o.jsx(n.code,{children:"component: inputNumber"})," параметры сепараторов и min/max дробной части берутся из ",o.jsx(n.code,{children:"contentFormat"})]}),`
`]}),`
`,o.jsxs(n.blockquote,{children:[`
`,o.jsxs(n.p,{children:["Подробнее о типах и пропсах — ",o.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-formatcellcontent-api--docs",children:"FormatCellContent API"})]}),`
`]}),`
`,o.jsx(c,{})]})}function V(t={}){const{wrapper:n}={...e(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(r,{...t})}):r(t)}export{V as default};
