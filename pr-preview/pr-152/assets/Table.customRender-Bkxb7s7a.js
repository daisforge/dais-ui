import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-6eBWuSjz.js";import{T as c}from"./Table.customRenderCell.stories-CUxl7HPw.js";import"./react-is-Clcustum.js";import"./styled-components-BMGTmUgW.js";import"./@tanstack/react-virtual-MDtUeDVT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BVrHFT75.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-RIpr-WH3.js";import"./Table-8ttIOhBE.js";import"./FiltersActions-Ri48jA_6.js";import"./IconButton-DjHe0k2a.js";import"./@salutejs/plasma-icons-DDZ7vpYp.js";import"./@salutejs/sdds-finai-CzrWquGL.js";import"./utils-DU5KWPNh.js";import"./constants-Ce09UD7b.js";import"./@sddsjs/sdds_finai-CivTlObr.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-C3tynTn2.js";import"./sharedUtilsInputs-DrGWIBzn.js";import"./AiAgentPopup-BZq9S3Sj.js";import"./TextArea-B3sedkTe.js";import"./sharedUtilsResizable-Cn6q_yyS.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CtHSzFur.js";import"./react-data-grid-C5E-kGD5.js";import"./TableTabs-U12wlBFW.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-NtXrLmwu.js";import"./@glideappsfinal/glide-data-grid-BR6y2PD1.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BXFDM773.js";import"./ListOfFilters-C2Lukcbf.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bb1agHpJ.js";import"./EmptyState-BzsT5sKM.js";import"./MassActions-BafpmG2m.js";import"./Autocomplete-B9Fnn-vk.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
