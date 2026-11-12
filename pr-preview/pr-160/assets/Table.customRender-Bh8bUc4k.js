import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-Bj2v5t-1.js";import{T as c}from"./Table.customRenderCell.stories-BIpvATL-.js";import"./react-is-Clcustum.js";import"./styled-components-BEgCOoGB.js";import"./@tanstack/react-virtual-yw1-e5aS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DAm853Tp.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-C9EwcKwe.js";import"./Table-DqL3ZX5a.js";import"./FiltersActions-B1-KfjyU.js";import"./IconButton-DWk4OQ99.js";import"./@salutejs/plasma-icons-BuZssI3i.js";import"./@salutejs/sdds-finai-B-p3Wrf5.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-DFbuG0jD.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DnwOLnGX.js";import"./sharedUtilsInputs-CkoGZrw1.js";import"./AiAgentPopup-Bhi3oPd5.js";import"./TextArea-BmM4XOV0.js";import"./sharedUtilsResizable-BQnAsbRf.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DlAIrW7d.js";import"./react-data-grid-BZL5sWps.js";import"./TableTabs-PIOj-Q1-.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BnGvs3Pt.js";import"./@glideappsfinal/glide-data-grid-DWF6JhMs.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-CgwtTRVe.js";import"./ListOfFilters-MUVqCEoo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CyMh_gjQ.js";import"./EmptyState-ACl1wB-h.js";import"./MassActions-D0l9arEw.js";import"./Autocomplete-CSua9LHj.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function Q(o={}){const{wrapper:r}={...n(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(i,{...o})}):i(o)}export{Q as default};
