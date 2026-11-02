import{j as o}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as c}from"./vendor-af4H1Khz.js";import{T as m}from"./TableCanvas.formatCellContent.stories-W7dC99RO.js";import"./react-is-Clcustum.js";import"./styled-components-cxPSmI4v.js";import"./@tanstack/react-virtual-BRMCaKA7.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BJYKC5Gb.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BR82TFCE.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-D5lelgp6.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BvUK3AZp.js";import"./@salutejs/plasma-icons-BvYWJbfI.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DcDYCbxn.js";import"./IconButton-DScE8jH8.js";import"./Box-Tzc9IyP5.js";import"./TextField-BfEBHK7r.js";import"./sharedUtilsInputs-yJDewjCo.js";import"./AiAgentPopup-C5VXRr-a.js";import"./TextArea-CA5KWdb8.js";import"./sharedUtilsResizable-CzdjlV46.js";import"./Table-CaDwFBWF.js";import"./Collapse-Cok_ChCq.js";import"./react-data-grid-DyFn7V8H.js";import"./TableTabs-BmgUT5sN.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DoC9QqkY.js";import"./@glideappsfinal/glide-data-grid-Cc-v43VA.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CWODhH2X.js";import"./ListOfFilters-BzwsOWvp.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-86oIHKy1.js";import"./EmptyState-WdUpfxwI.js";import"./MassActions-8V0URAHP.js";import"./Autocomplete-Yvu_n9sy.js";import"./ErrorPage-uO6lSITB.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
