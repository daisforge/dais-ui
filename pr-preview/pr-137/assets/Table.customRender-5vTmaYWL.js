import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-DyX3yqNp.js";import{T as c}from"./Table.customRenderCell.stories-Dnfi1qEf.js";import"./react-is-Clcustum.js";import"./styled-components-ccjJug2H.js";import"./@tanstack/react-virtual-DAUINi0H.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-zj6qwwHt.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-D-OropPv.js";import"./Table-ADpVvBF2.js";import"./FiltersActions-DwxP21jw.js";import"./IconButton-IMgmuP0-.js";import"./@salutejs/plasma-icons-Cw8ohz1I.js";import"./@salutejs/sdds-finai-DBprQOML.js";import"./@salutejs/sdds-themes-BhHTXq_6.js";import"./utils-DOeoUM6j.js";import"./constants-BTEQz0S6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-Blnwydxe.js";import"./sharedUtilsInputs-7lPQoJXt.js";import"./AiAgentPopup-0HZjtI8N.js";import"./TextArea-3DhZxyRu.js";import"./sharedUtilsResizable-DkJ72x9Z.js";import"./Collapse-DpRGCvPc.js";import"./react-data-grid-CgHW3sHZ.js";import"./TableTabs-BooKMiPM.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D7GwC_SN.js";import"./@glideappsfinal/glide-data-grid-BHR2byug.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-YaM-nsvn.js";import"./ListOfFilters-DAEkd2sy.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C9YMQrYW.js";import"./EmptyState-D4IOo0DM.js";import"./MassActions-CV6LXeD9.js";import"./Autocomplete-hBM7UrUA.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
