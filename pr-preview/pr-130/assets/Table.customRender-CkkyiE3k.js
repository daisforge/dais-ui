import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-BjkZKBJ9.js";import{T as c}from"./Table.customRenderCell.stories-Di9auwg1.js";import"./react-is-Clcustum.js";import"./styled-components-DWPxO3a9.js";import"./@tanstack/react-virtual-CIOHzlHP.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DCysDipa.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-BL5k83Qv.js";import"./Table-CW1POAcS.js";import"./FiltersActions-BoC-8SOr.js";import"./IconButton-rY8Us0ma.js";import"./@salutejs/plasma-icons-DcAgON_Z.js";import"./@salutejs/sdds-finai-C9g5nEPG.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjufAae2.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-erzztdsv.js";import"./sharedUtilsInputs-DPzVM0xx.js";import"./AiAgentPopup-GUmh_M4X.js";import"./TextArea-B8QDmYJe.js";import"./sharedUtilsResizable-CFLK8Unr.js";import"./Collapse-B0_nnnDs.js";import"./react-data-grid-vaUsH3Yu.js";import"./TableTabs-CrHSD7Vb.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-B7c2Dg7-.js";import"./@glideappsfinal/glide-data-grid-COzVhdar.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BMT36f3p.js";import"./ListOfFilters-B_inEgG7.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CPepKp-_.js";import"./EmptyState-DCJJR-3o.js";import"./MassActions-BDtqJn10.js";import"./Autocomplete-BkUDz7Uo.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
