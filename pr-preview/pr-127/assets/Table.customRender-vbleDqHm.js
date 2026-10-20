import{j as e}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-DIjqEUEl.js";import{T as c}from"./Table.customRenderCell.stories-BBJPQOGG.js";import"./react-is-Clcustum.js";import"./styled-components-C6nqWEvq.js";import"./@tanstack/react-virtual-BrusU8ao.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CnJlkrRG.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-B7h5WACJ.js";import"./Table-D65jDz5I.js";import"./FiltersActions-BxQ5k0W-.js";import"./IconButton-C_G_MJwv.js";import"./@salutejs/plasma-icons-lvaNTfmN.js";import"./@salutejs/sdds-finai-D2uJuLxf.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-CYIszD-q.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-B9wzf2KE.js";import"./sharedUtilsInputs-moM0aqRU.js";import"./AiAgentPopup-DbX97dZ5.js";import"./TextArea-DBARJAd1.js";import"./sharedUtilsResizable-Cr_4F3EA.js";import"./Collapse--jNNTe4L.js";import"./react-data-grid-sYi6Azdk.js";import"./TableTabs-BANCnS2V.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Ca_uoAGP.js";import"./@glideappsfinal/glide-data-grid-CX_t3Cwn.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DpgdcT8x.js";import"./ListOfFilters-r7eLo8kc.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-ZL7weso3.js";import"./EmptyState-C2OU92Fy.js";import"./MassActions-Dh3qvSru.js";import"./Autocomplete-BCWyvAOv.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
