import{j as o}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as c}from"./vendor-DsJm5J9r.js";import{T as m}from"./TableCanvas.formatCellContent.stories-VQzuJ7_c.js";import"./react-is-Clcustum.js";import"./styled-components-CdOoB4R7.js";import"./@tanstack/react-virtual-BBPhu5yM.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DLqtHX-Y.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DqJmlAkH.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CRlWCL2r.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BCIh097j.js";import"./@salutejs/plasma-icons-BLyieaPl.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-o7Dj69L1.js";import"./IconButton-DCmVIxR1.js";import"./Box-DcXSiQMW.js";import"./TextField-DlliMlb0.js";import"./sharedUtilsInputs-wjdCuRkj.js";import"./AiAgentPopup-BJ59xZDz.js";import"./TextArea-BKKyyb49.js";import"./sharedUtilsResizable-BoQDxoHn.js";import"./Table-ZJt8loOl.js";import"./Collapse-Cm8bDoVu.js";import"./react-data-grid-BhaJNV-A.js";import"./TableTabs-Dn6cREH4.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-vE6vm-5r.js";import"./@glideappsfinal/glide-data-grid-CG3lFAfU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-qGSWt9RK.js";import"./ListOfFilters-DsIa8YUA.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B6twWRwI.js";import"./EmptyState--zCuzU-c.js";import"./MassActions-BpT6S0G3.js";import"./Autocomplete-DPfSp2TP.js";import"./ErrorPage-Bjz13wWr.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
`,o.jsx(t.h1,{id:"formatcellcontent-tablecanvas",children:"FormatCellContent (TableCanvas)"}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"columnConfig.contentFormat"})}),`
`,o.jsxs(t.p,{children:["Параметр ",o.jsx(t.code,{children:"contentFormat"})," позволяет гибко настраивать отображение данных в ячейках таблицы. Поддерживается как на уровне колонки, так и для subRow (дочерних строк)."]}),`
`,o.jsx(t.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsx(t.li,{children:"Числовое форматирование с настройкой разделителей, локали, дробной части"}),`
`,o.jsxs(t.li,{children:["Кастомное форматирование через ",o.jsx(t.code,{children:"customFormat"})]}),`
`,o.jsxs(t.li,{children:["Выравнивание содержимого (",o.jsx(t.code,{children:"alignContent"}),": ",o.jsx(t.code,{children:"'left' | 'center' | 'right'"}),"); только выравнивание, без форматирования — ",o.jsx(t.code,{children:"contentFormat: { alignContent: 'center' }"})]}),`
`,o.jsxs(t.li,{children:["Приоритет формата: ",o.jsx(t.code,{children:"subRow.contentFormat"})," → родительский ",o.jsx(t.code,{children:"contentFormat"})," → ",o.jsx(t.code,{children:"column.contentFormat"})]}),`
`]}),`
`,o.jsx(t.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(t.ul,{children:[`
`,o.jsxs(t.li,{children:["Если используется ",o.jsx(t.code,{children:"renderCell"})," или ",o.jsx(t.code,{children:"renderSubRowCell"}),", кастомное форматирование не применяется"]}),`
`,o.jsxs(t.li,{children:["При редактировании с ",o.jsx(t.code,{children:"component: inputNumber"})," параметры сепараторов и min/max дробной части берутся из ",o.jsx(t.code,{children:"contentFormat"})]}),`
`]}),`
`,o.jsxs(t.blockquote,{children:[`
`,o.jsxs(t.p,{children:["Подробнее о типах и пропсах — ",o.jsx(t.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-formatcellcontent-api--docs",children:"FormatCellContent API"})]}),`
`]}),`
`,o.jsx(c,{})]})}function W(n={}){const{wrapper:t}={...e(),...n.components};return t?o.jsx(t,{...n,children:o.jsx(r,{...n})}):r(n)}export{W as default};
