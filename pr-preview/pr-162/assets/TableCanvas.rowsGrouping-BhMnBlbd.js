import{j as o}from"./react-D2T61mpp.js";import{cg as e,ch as t,ca as s}from"./vendor-CVMKgdDh.js";import{T as l}from"./TableCanvas.rowsGrouping.stories-Dql-qXXw.js";import"./react-is-Clcustum.js";import"./styled-components-CwOMMRg3.js";import"./@tanstack/react-virtual-z_N2zvua.js";import"./tslib-DoU9Jm1N.js";import"./DocStoryTemplate-BR6j66HK.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-C2VUpGcZ.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-C8PgCSKo.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-R41yApkS.js";import"./@salutejs/plasma-icons-D_1o7NsP.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-Bg9BaLXJ.js";import"./IconButton-BuxkyNh1.js";import"./Box-7LHf_LaS.js";import"./TextField-DC-k6U3f.js";import"./sharedUtilsInputs-D-pVOLaP.js";import"./AiAgentPopup-xnLrr0ZX.js";import"./TextArea-DTfy2aDO.js";import"./sharedUtilsResizable-BpgOMr3m.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DPdSGxvk.js";import"./Collapse-qVisV3-p.js";import"./react-data-grid-Du1mPBV9.js";import"./TableTabs-COSYENPy.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DPwqu_gq.js";import"./@glideappsfinal/glide-data-grid-BxUIQMdn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BfpkSLfw.js";import"./ListOfFilters-Bro5b20G.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B59TZBuU.js";import"./EmptyState-BrIpfyZO.js";import"./MassActions--yO2Ag9n.js";import"./Autocomplete-BfAxXuRc.js";import"./ErrorPage-BkjrIg2q.js";import"./tableData-DVJFoYoT.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(t,{of:l,name:"Docs"}),`
`,o.jsx(r.h1,{id:"rowsgrouping-tablecanvas",children:"RowsGrouping (TableCanvas)"}),`
`,o.jsx(r.p,{children:o.jsx(r.strong,{children:"tableConfig.rowsGrouping + columnConfig.rowsGrouping"})}),`
`,o.jsx(r.p,{children:"Группировка строк таблицы по значениям колонок с поддержкой вложенных группировок."}),`
`,o.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:["Управляемое состояние группировки через ",o.jsx(r.code,{children:"groupByState"})]}),`
`,o.jsx(r.li,{children:"Кнопка с выпадающим списком для выбора группировок в controlBlock"}),`
`,o.jsxs(r.li,{children:["Кастомный рендер сгруппированных строк через ",o.jsx(r.code,{children:"renderGroupCell"})]}),`
`,o.jsxs(r.li,{children:["Кастомные элементы в выпадающем списке через ",o.jsx(r.code,{children:"groupButton.defaultCustomItems"})]}),`
`,o.jsxs(r.li,{children:["Возможность замены данных группированных строк через ",o.jsx(r.code,{children:"groupRowReplaceTo"})]}),`
`]}),`
`,o.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,o.jsxs(r.ul,{children:[`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"rowKeyGetter"})," должен возвращать уникальный идентификатор строки"]}),`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"groupedColumnProps"})," позволяет настроить колонку с группировкой (ширину, рендер и т.д.)"]}),`
`,o.jsxs(r.li,{children:["В ",o.jsx(r.code,{children:"columnConfig.rowsGrouping"})," можно указать ",o.jsx(r.code,{children:"groupByColumn: false"})," для исключения колонки из группировки"]}),`
`,o.jsxs(r.li,{children:[o.jsx(r.code,{children:"columnGroupLabel"})," переопределяет лейбл в выпадающем списке (default: ",o.jsx(r.code,{children:"columnConfig.key"}),")"]}),`
`]}),`
`,o.jsxs(r.blockquote,{children:[`
`,o.jsxs(r.p,{children:["Подробнее о типах — ",o.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-rowsgrouping-api--docs",children:"RowsGrouping API"})]}),`
`]}),`
`,o.jsx(s,{})]})}function Y(i={}){const{wrapper:r}={...e(),...i.components};return r?o.jsx(r,{...i,children:o.jsx(n,{...i})}):n(i)}export{Y as default};
