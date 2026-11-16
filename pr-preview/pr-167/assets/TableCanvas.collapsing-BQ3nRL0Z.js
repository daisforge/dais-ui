import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as r}from"./vendor-DwW8LqKs.js";import{T as c}from"./TableCanvas.collapsing.stories-ibbDc9iT.js";import"./react-is-Clcustum.js";import"./styled-components-1frum_Yc.js";import"./@tanstack/react-virtual-CthE9Oqn.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DuWZhT7s.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D7QRUhKc.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-C5maJ9G-.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-BwFSsjRU.js";import"./@salutejs/plasma-icons-DWunODz3.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-SGZYFAOX.js";import"./IconButton-Dmz8Yv99.js";import"./Box-B3cJI3Bx.js";import"./TextField-CaI32qtw.js";import"./sharedUtilsInputs-4zeFszBE.js";import"./AiAgentPopup-B22-q1kn.js";import"./TextArea-DnUBSOiL.js";import"./sharedUtilsResizable-CCQdmhhl.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DfxjG4uH.js";import"./Collapse-CIjdbheU.js";import"./react-data-grid-SqQm33Cs.js";import"./TableTabs-BOG9ojUr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DMHF3_fQ.js";import"./@glideappsfinal/glide-data-grid-CflI70pl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CvXKm-7P.js";import"./ListOfFilters-mvmBUHke.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CZ94oSen.js";import"./EmptyState-B3kzHRdp.js";import"./MassActions-CcFLK7st.js";import"./Autocomplete-CblrzfQ7.js";import"./ErrorPage-OzNFkeR6.js";function l(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
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
`,e.jsx(r,{})]})}function Y(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{Y as default};
