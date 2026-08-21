import{j as e}from"./react-D2T61mpp.js";import{c2 as i,c3 as t,bY as s}from"./vendor-DG1Nfd5B.js";import{T as c}from"./Table.customRenderCell.stories-Cn6C8w4k.js";import"./react-is-Clcustum.js";import"./styled-components-x9oWcUfp.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-V_vgHsyI.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-Bqm0FbJf.js";import"./Table-CvH-zgvm.js";import"./FiltersActions-CN5FblRQ.js";import"./IconButton-CRz6j5bQ.js";import"./@salutejs/plasma-icons-DpE4jfhX.js";import"./@salutejs/sdds-finai-CkJgI8zM.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C21E4wye.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-D7BtsgxF.js";import"./sharedUtilsInputs-D3I4M9I3.js";import"./AnalyticalWidget-Db1EOyQG.js";import"./Collapse-QYkJJTr0.js";import"./react-data-grid-BijCZ9Is.js";import"./TableTabs-DEtGOO4u.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-DeQHqsSU.js";import"./ListOfFilters-RfW5tcV0.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CH1_1C1-.js";import"./EmptyState-1a-qKTqY.js";import"./MassActions-e-6ko0hO.js";import"./Autocomplete-BVM_vGZK.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function Y(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{Y as default};
