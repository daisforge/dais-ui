import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-DsJm5J9r.js";import{T as c}from"./Table.customRenderCell.stories-CAvVKQsP.js";import"./react-is-Clcustum.js";import"./styled-components-CdOoB4R7.js";import"./@tanstack/react-virtual-BBPhu5yM.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DLqtHX-Y.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-DcXSiQMW.js";import"./Table-ZJt8loOl.js";import"./FiltersActions-o7Dj69L1.js";import"./IconButton-DCmVIxR1.js";import"./@salutejs/plasma-icons-BLyieaPl.js";import"./@salutejs/sdds-finai-BCIh097j.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CRlWCL2r.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DlliMlb0.js";import"./sharedUtilsInputs-wjdCuRkj.js";import"./AiAgentPopup-BJ59xZDz.js";import"./TextArea-BKKyyb49.js";import"./sharedUtilsResizable-BoQDxoHn.js";import"./Collapse-Cm8bDoVu.js";import"./react-data-grid-BhaJNV-A.js";import"./TableTabs-Dn6cREH4.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-vE6vm-5r.js";import"./@glideappsfinal/glide-data-grid-CG3lFAfU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-qGSWt9RK.js";import"./ListOfFilters-DsIa8YUA.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B6twWRwI.js";import"./EmptyState--zCuzU-c.js";import"./MassActions-BpT6S0G3.js";import"./Autocomplete-DPfSp2TP.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
`,e.jsx(r.h1,{id:"custom-render",children:"Custom Render"}),`
`,e.jsx(r.p,{children:"Кастомный рендеринг ячеек таблицы."}),`
`,e.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"renderCell"})," — кастомный рендер ячеек данных (доступны ",e.jsx(r.code,{children:"row"}),", ",e.jsx(r.code,{children:"rowIdx"}),", ",e.jsx(r.code,{children:"column"}),")"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"renderHeaderCell"})," — кастомный рендер заголовков (",e.jsx(r.code,{children:"name"})," принимает ",e.jsx(r.code,{children:"string | ReactElement"}),")"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"renderSummaryCell"})," — кастомный рендер итоговых строк"]}),`
`,e.jsxs(r.li,{children:["Контексты: ",e.jsx(r.code,{children:"useRowContext"})," и ",e.jsx(r.code,{children:"useHeaderContext"})," для передачи состояния без лишних ре-рендеров"]}),`
`]}),`
`,e.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Контейнер ячейки должен использовать ",e.jsx(r.code,{children:"width: '100%'"})," и ",e.jsx(r.code,{children:"height: '100%'"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"headerContextValue"})," предоставляет доступ к состоянию фильтров, сортировки и размера строк"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"rowContextValue"})," позволяет передавать кастомное состояние в ячейки без перерисовки таблицы"]}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["Подробнее о типах и пропсах — ",e.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-customrender-api--docs",children:"Custom Render API"})]}),`
`]}),`
`,e.jsx(s,{})]})}function O(o={}){const{wrapper:r}={...n(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(i,{...o})}):i(o)}export{O as default};
