import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-nSnuiptw.js";import{T as c}from"./Table.customRenderCell.stories-BvBKIJph.js";import"./react-is-Clcustum.js";import"./styled-components-DsZNNs-w.js";import"./@tanstack/react-virtual-CAA0jjtQ.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-fXsRFEYa.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-JCo3npGg.js";import"./Table-S7696BPp.js";import"./FiltersActions-nBCTBnD3.js";import"./IconButton-CbPE_gWK.js";import"./@salutejs/plasma-icons-B_eXmh7u.js";import"./@salutejs/sdds-finai-CSFR0wVB.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CHPzWAFN.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-D7ZIctgB.js";import"./sharedUtilsInputs-DXjvF4h5.js";import"./AiAgentPopup-BuoscS2N.js";import"./TextArea-9kPq7Mwk.js";import"./sharedUtilsResizable-D3z9f6ge.js";import"./Collapse-dtWSPupa.js";import"./react-data-grid-C6hzsMmi.js";import"./TableTabs-BgUcvYrN.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-CWOrlegB.js";import"./@glideappsfinal/glide-data-grid-CdjXxGhJ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BefrI-5j.js";import"./ListOfFilters-BQ0OPniP.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-8FbLn3N1.js";import"./EmptyState-CvzOjQ3o.js";import"./MassActions-RUCSa28k.js";import"./Autocomplete-CtDF64kr.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
