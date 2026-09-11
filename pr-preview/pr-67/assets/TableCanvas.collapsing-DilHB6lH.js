import{j as e}from"./react-D2T61mpp.js";import{cc as i,cd as s,c6 as r}from"./vendor-BSh-q9Ou.js";import{T as c}from"./TableCanvas.collapsing.stories-9pCFAwkj.js";import"./react-is-Clcustum.js";import"./styled-components-CbgoXU45.js";import"./@tanstack/react-virtual-D4DYTxIh.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CavNiRmo.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D9NWFDEQ.js";import"./FiltersActions-DWCdugaM.js";import"./IconButton-CJw7yEkJ.js";import"./@salutejs/plasma-icons-BrsFlXba.js";import"./@salutejs/sdds-finai-BkbdvS5g.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CnArmH7g.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Bg7shm0b.js";import"./TextField-VB4WAPL1.js";import"./sharedUtilsInputs-COjFvFwZ.js";import"./AnalyticalWidget-BTQ0VNFn.js";import"./Collapse-DJBsDA9p.js";import"./Table-rHnSGp-o.js";import"./react-data-grid-CC8ALFI1.js";import"./TableTabs-RalHP3o0.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-Col2MVTv.js";import"./ListOfFilters-D8GazY7Y.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-v4lYr5cP.js";import"./EmptyState-G7_pvWiP.js";import"./MassActions-DJUm5kFh.js";import"./Autocomplete-C0nsjXn5.js";import"./TableGlide-BcKEiC_p.js";import"./@glideappsfinal/glide-data-grid-XDUil1-6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DWE_MJAa.js";function l(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
`,e.jsx(o.h1,{id:"collapsing-tablecanvas",children:"Collapsing (TableCanvas)"}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"tableConfig.collapsing"})}),`
`,e.jsx(o.p,{children:"Сворачивание/разворачивание тела таблицы. Кнопка управления отображается в controlBlock."}),`
`,e.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["Активация через ",e.jsx(o.code,{children:"enableCollapse: true"})]}),`
`,e.jsxs(o.li,{children:["Внешнее управление состоянием через ",e.jsx(o.code,{children:"collapsedState"})]}),`
`,e.jsxs(o.li,{children:["Два варианта размещения кнопки: ",e.jsx(o.code,{children:"'inside'"})," (в controlBlock, участвует в компрессии) и ",e.jsx(o.code,{children:"'above'"})," (отдельный блок сверху)"]}),`
`,e.jsxs(o.li,{children:["Кастомный слот справа от кнопки при ",e.jsx(o.code,{children:"collapseButtonPlacement: 'above'"})]}),`
`]}),`
`,e.jsx(o.h2,{id:"конфигурация",children:"Конфигурация"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"enableCollapse"})})," ",e.jsx(o.code,{children:"boolean"})," — активация фичи (default: ",e.jsx(o.code,{children:"false"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"defaultCollapsed"})})," ",e.jsx(o.code,{children:"boolean"})," — начальное состояние (default: ",e.jsx(o.code,{children:"false"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"collapseText"})})," ",e.jsx(o.code,{children:"string"})," — текст кнопки при раскрытом состоянии (default: ",e.jsx(o.code,{children:"'Свернуть'"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"expandText"})})," ",e.jsx(o.code,{children:"string"})," — текст кнопки при закрытом состоянии (default: ",e.jsx(o.code,{children:"'Развернуть'"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"onToggleCollapse"})})," ",e.jsx(o.code,{children:"(isCollapsed: boolean) => void"})," — callback при изменении состояния"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"collapsedState"})})," ",e.jsx(o.code,{children:"[boolean, setState]"})," — внешний стейт"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"collapseButtonPlacement"})})," ",e.jsx(o.code,{children:"'inside' | 'above'"})," — размещение кнопки (default: ",e.jsx(o.code,{children:"'inside'"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:e.jsx(o.code,{children:"collapseButtonAboveRightSlot"})})," ",e.jsx(o.code,{children:"ReactNode"})," — кастомный слот справа (только при ",e.jsx(o.code,{children:"'above'"}),")"]}),`
`]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["Подробнее о типах — ",e.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-collapsing-api--docs",children:"Collapsing API"})]}),`
`]}),`
`,e.jsx(r,{})]})}function Q(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{Q as default};
