import{j as o}from"./react-CAOzMBF_.js";import{cf as e,cg as i,c9 as c}from"./vendor-DmWczWMC.js";import{T as m}from"./TableCanvas.formatCellContent.stories-CmbSAncC.js";import"./react-is-vVGXX3JE.js";import"./styled-components-DCFsnh-i.js";import"./@tanstack/react-virtual-vLM_tzFQ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Cf946dgV.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CXslNPgb.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./utils-BRhO4Lv3.js";import"./constants-BTEQz0S6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-Bupqgw5V.js";import"./@salutejs/plasma-icons-Do5ggeDI.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DC5OcLmm.js";import"./IconButton-DrFnI92n.js";import"./Box-DvvYTz20.js";import"./TextField-DIWm63dp.js";import"./sharedUtilsInputs-BEaEboVP.js";import"./AiAgentPopup-1SjAhyCf.js";import"./TextArea-XMbR00Hf.js";import"./sharedUtilsResizable-CmwXdA8D.js";import"./Table-IHr9AgFh.js";import"./Collapse-BWM9xDkM.js";import"./react-data-grid-BKw4Q-W8.js";import"./TableTabs-BoRZJG4K.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B5SQpGfi.js";import"./@glideappsfinal/glide-data-grid-B6Bq93xZ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-B_fYt99y.js";import"./ListOfFilters-fm7QmTqx.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-CfsVK-wQ.js";import"./EmptyState-B4-5g1DV.js";import"./MassActions-BM0rVr1a.js";import"./Autocomplete-MjUZ7zQX.js";import"./ErrorPage-CBLM2yRR.js";function r(n){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:m,name:"Docs"}),`
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
