import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-CYVD37V9.js";import{T as c}from"./Table.customRenderCell.stories-DIodw3P1.js";import"./react-is-Clcustum.js";import"./styled-components-C94YjM-8.js";import"./@tanstack/react-virtual-DYxCMooD.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DvUM61Pg.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-BDjyaOfr.js";import"./Table-lyC942h-.js";import"./FiltersActions-B0S9lToY.js";import"./IconButton-Bl9eVzQ1.js";import"./@salutejs/plasma-icons-Di_vIjuB.js";import"./@salutejs/sdds-finai-BT4-yN4n.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-OTWlClTX.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DJ8wqApr.js";import"./sharedUtilsInputs-O8EZTBuY.js";import"./AiAgentPopup-CS0gDDq9.js";import"./TextArea-Er2Rljvl.js";import"./sharedUtilsResizable-CQuiSWfk.js";import"./Collapse-CXaAgnpP.js";import"./react-data-grid-9BbtrEpY.js";import"./TableTabs-Bc0SII-y.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-DpiyFBdU.js";import"./@glideappsfinal/glide-data-grid-Pr7m0T0T.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BE-fJFxc.js";import"./ListOfFilters-C94OnlYQ.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DQK6oHzg.js";import"./EmptyState-DN6TMa0i.js";import"./MassActions-CJNv5QLV.js";import"./Autocomplete-C-gIuhgS.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
