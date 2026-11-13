import{j as o}from"./react-D2T61mpp.js";import{cg as e,ch as i,ca as c}from"./vendor-DeJLDLpI.js";import{T as m}from"./TableCanvas.formatCellContent.stories-CpA7NF6B.js";import"./react-is-Clcustum.js";import"./styled-components-Dk50_reo.js";import"./@tanstack/react-virtual-R2Y3giEb.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-koMU_8fG.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DX9syi3I.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-KF4aT_9e.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DA9CWr9W.js";import"./@salutejs/plasma-icons-zWvvayCa.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-pcu2ILcE.js";import"./IconButton-BJbUR_O5.js";import"./Box-DQw8sL1c.js";import"./TextField-DgZBo79-.js";import"./sharedUtilsInputs-B0UumBSH.js";import"./AiAgentPopup-CCB3HuGW.js";import"./TextArea-CJZBRqEK.js";import"./sharedUtilsResizable-B5rzIJUb.js";import"./Table-DWwGSlgB.js";import"./Collapse-BYKzEpcd.js";import"./react-data-grid-D_il26Se.js";import"./TableTabs-CGBNm4pI.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CiF1kpzB.js";import"./@glideappsfinal/glide-data-grid-D451MRqO.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-QfwbiFJn.js";import"./ListOfFilters-CZyGXKMT.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CFOx7ut3.js";import"./EmptyState-BoglVMQ1.js";import"./MassActions-DUQYkSY-.js";import"./Autocomplete-lTM2MhNu.js";import"./ErrorPage-DE5c_5Tz.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
