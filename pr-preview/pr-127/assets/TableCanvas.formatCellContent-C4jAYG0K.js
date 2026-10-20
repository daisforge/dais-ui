import{j as o}from"./react-D2T61mpp.js";import{cf as e,cg as i,c9 as c}from"./vendor-DIjqEUEl.js";import{T as l}from"./TableCanvas.formatCellContent.stories-BAOi-ebd.js";import"./react-is-Clcustum.js";import"./styled-components-C6nqWEvq.js";import"./@tanstack/react-virtual-BrusU8ao.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CnJlkrRG.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DDL9mtrd.js";import"./FiltersActions-BxQ5k0W-.js";import"./IconButton-C_G_MJwv.js";import"./@salutejs/plasma-icons-lvaNTfmN.js";import"./@salutejs/sdds-finai-D2uJuLxf.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-CYIszD-q.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B7h5WACJ.js";import"./TextField-B9wzf2KE.js";import"./sharedUtilsInputs-moM0aqRU.js";import"./AiAgentPopup-DbX97dZ5.js";import"./TextArea-DBARJAd1.js";import"./sharedUtilsResizable-Cr_4F3EA.js";import"./Table-D65jDz5I.js";import"./Collapse--jNNTe4L.js";import"./react-data-grid-sYi6Azdk.js";import"./TableTabs-BANCnS2V.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Ca_uoAGP.js";import"./@glideappsfinal/glide-data-grid-CX_t3Cwn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DpgdcT8x.js";import"./ListOfFilters-r7eLo8kc.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ZL7weso3.js";import"./EmptyState-C2OU92Fy.js";import"./MassActions-Dh3qvSru.js";import"./Autocomplete-BCWyvAOv.js";import"./ErrorPage-wU8_wQ5Q.js";function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:l,name:"Docs"}),`
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
