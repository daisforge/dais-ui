import{j as r}from"./react-UEdzNlUe.js";import{df as t}from"./vendor-DTHFTCxs.js";import{M as n,S as s}from"./WithTooltip-KJL26V4Q-C3x9tCBM.js";import{T as d}from"./Table.customRenderCell.stories-Cp45qH6N.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-BDqbx52B.js";import"./@tanstack/react-virtual-Cc6cMCGC.js";import"./preload-helper-BOyu4uG3.js";import"./index-Cu4lwwaE.js";import"./index-D2sVbA6U.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-DUafcp_1.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-CAVr5OBu.js";import"./Table-Do0uqgzu.js";import"./Switch-DUic9P4N.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/sdds-finai-Jb2Onqi_.js";import"./Collapse-CKKPV_S6.js";import"./utils-Cc8UerBz.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-C6iRh3Pq.js";import"./react-data-grid-DERmyBhN.js";import"./TableTabs-GaaUELLw.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiAnimatedCounter-CRwlCkPt.js";import"./sharedUiSearch-Br8C3RCh.js";import"./TextField-Cu6HokJS.js";import"./sharedUtilsInputs-t7ShkDmK.js";import"./Typography-D4wO0shv.js";import"./ListOfFilters-CaFybgEu.js";import"./FiltersActions-BQ_4x4XD.js";import"./IconButton-s9L26CSR.js";import"./Tooltip-DNh4Yts8.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-uBgqq2ir.js";import"./NumberFormat-DF3lboLZ.js";import"./EmptyState-CwC_Yow0.js";import"./unidentified@3x-9d_s2m7N.js";import"./MassActions-CwsklfLY.js";import"./Autocomplete-zKBYUNFR.js";function i(o){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...t(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(n,{of:d,name:"Docs"}),`
`,r.jsx(e.h1,{id:"custom-render",children:"Custom Render"}),`
`,r.jsx(e.p,{children:"Кастомный рендеринг ячеек таблицы."}),`
`,r.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"renderCell"})," — кастомный рендер ячеек данных (доступны ",r.jsx(e.code,{children:"row"}),", ",r.jsx(e.code,{children:"rowIdx"}),", ",r.jsx(e.code,{children:"column"}),")"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"renderHeaderCell"})," — кастомный рендер заголовков (",r.jsx(e.code,{children:"name"})," принимает ",r.jsx(e.code,{children:"string | ReactElement"}),")"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"renderSummaryCell"})," — кастомный рендер итоговых строк"]}),`
`,r.jsxs(e.li,{children:["Контексты: ",r.jsx(e.code,{children:"useRowContext"})," и ",r.jsx(e.code,{children:"useHeaderContext"})," для передачи состояния без лишних ре-рендеров"]}),`
`]}),`
`,r.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["Контейнер ячейки должен использовать ",r.jsx(e.code,{children:"width: '100%'"})," и ",r.jsx(e.code,{children:"height: '100%'"})]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"headerContextValue"})," предоставляет доступ к состоянию фильтров, сортировки и размера строк"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"rowContextValue"})," позволяет передавать кастомное состояние в ячейки без перерисовки таблицы"]}),`
`]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-customrender-api--docs",children:"Custom Render API"})]}),`
`]}),`
`,r.jsx(s,{})]})}function rr(o={}){const{wrapper:e}={...t(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(i,{...o})}):i(o)}export{rr as default};
