import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as s,ca as r}from"./vendor-Cerwdjts.js";import{T as c}from"./TableCanvas.collapsing.stories-DOOTuPhS.js";import"./react-is-Clcustum.js";import"./styled-components-DhAJwv5z.js";import"./@tanstack/react-virtual-_irdOaea.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CrvtEn2a.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CbxnH8Dx.js";import"./FiltersActions-g6L0vwIk.js";import"./IconButton-DFMykKti.js";import"./@salutejs/plasma-icons-Dhq832vT.js";import"./@salutejs/sdds-finai-DztqpKP7.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-BElZzUmp.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DV_u0Ftj.js";import"./TextField-HUZgltLn.js";import"./sharedUtilsInputs-0JObiuav.js";import"./AiAgentPopup-D3kyWGJG.js";import"./TextArea-D2LyAITr.js";import"./sharedUtilsResizable-B0q5Zavu.js";import"./Table-CcZ0ds_H.js";import"./Collapse-CcsxObAw.js";import"./react-data-grid-BzvGL-VS.js";import"./TableTabs-B3ToYV3h.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CBLdPq7f.js";import"./ListOfFilters-BHHIPZib.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-QJCyNH_R.js";import"./EmptyState-BMpkaTQs.js";import"./MassActions-SmVYtLju.js";import"./Autocomplete-D1xCL2Jp.js";import"./TableGlide-axQxnQ-R.js";import"./@glideappsfinal/glide-data-grid-CAExT0AM.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Cz0XyVd9.js";function l(n){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
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
`,e.jsx(r,{})]})}function V(n={}){const{wrapper:o}={...i(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(l,{...n})}):l(n)}export{V as default};
