import{j as e}from"./react-D2T61mpp.js";import{c4 as i,c5 as t,b_ as s}from"./vendor-CwjClrU-.js";import{T as c}from"./Table.customRenderCell.stories-Cyp30Aw_.js";import"./react-is-Clcustum.js";import"./styled-components-CdU5JEL5.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CASIwyN3.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-BsCGp3nZ.js";import"./Table-D4FiL9uw.js";import"./FiltersActions-C1KnNl62.js";import"./IconButton-BWb4-hTc.js";import"./@salutejs/plasma-icons-BiMarbkF.js";import"./@salutejs/sdds-finai-rsluPq8z.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-ej044pNs.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-BjchXmIO.js";import"./sharedUtilsInputs-OrYDzNkd.js";import"./AnalyticalWidget-DXitH16m.js";import"./Collapse-Bk3Aw7RD.js";import"./react-data-grid-Bz6X0iFV.js";import"./TableTabs-Cnsv9M3T.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-HAgP6vQw.js";import"./ListOfFilters-jbhMBUr4.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BwSN8a7K.js";import"./EmptyState-xJTZH32N.js";import"./MassActions-CfPUUjsO.js";import"./Autocomplete-CW-ZTvVz.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function v(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{v as default};
