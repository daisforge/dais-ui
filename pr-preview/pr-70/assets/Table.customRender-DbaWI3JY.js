import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-CYHm0xTY.js";import{T as c}from"./Table.customRenderCell.stories-CwtpzFIj.js";import"./react-is-Clcustum.js";import"./styled-components-BWtOdjTE.js";import"./@tanstack/react-virtual-BjNtAbBb.js";import"./tslib-DoU9Jm1N.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BD2nrPlG.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-ClaHdN1D.js";import"./Table-DRZE3HJ3.js";import"./FiltersActions-C6q5sjLG.js";import"./IconButton-CFmO41QC.js";import"./@salutejs/plasma-icons-vixsVvyv.js";import"./@salutejs/sdds-finai-C1lVayv6.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-CU8LqNHm.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-C-bNdhkQ.js";import"./sharedUtilsInputs-CDcD5T7J.js";import"./AnalyticalWidget-Dl3WE3Fw.js";import"./Collapse-BmoNbCIK.js";import"./react-data-grid-DVPf5BeR.js";import"./TableTabs-BtH2jWnH.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-BoXvHP0K.js";import"./ListOfFilters-BBZ-6ePn.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CYwM5SYf.js";import"./EmptyState-DqumhEZj.js";import"./MassActions-Do23I3Kw.js";import"./Autocomplete-DCIYoLi1.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function z(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{z as default};
