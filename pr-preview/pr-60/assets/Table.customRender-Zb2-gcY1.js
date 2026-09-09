import{j as e}from"./react-D2T61mpp.js";import{cc as i,cd as t,c6 as s}from"./vendor-BdLrx4xP.js";import{T as c}from"./Table.customRenderCell.stories-CbH_wiZi.js";import"./react-is-Clcustum.js";import"./styled-components-CTUN0MzM.js";import"./@tanstack/react-virtual-fAMsGsuS.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-i_n4MzU0.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-67kQGb5v.js";import"./Table-C0Bl8Oc4.js";import"./FiltersActions-C-x6J_Wr.js";import"./IconButton-DDIaO14-.js";import"./@salutejs/plasma-icons-Cg4Kk8KP.js";import"./@salutejs/sdds-finai-B7AZSacY.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-C6ISqs0d.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-kBSu_94L.js";import"./sharedUtilsInputs-DkVfFsXj.js";import"./AnalyticalWidget-B7Nm-duK.js";import"./Collapse-DOEQGpdO.js";import"./react-data-grid-D-KN0ef4.js";import"./TableTabs-Mn1sla0h.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CISvImOT.js";import"./ListOfFilters-YHHkpvhm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C5Gr1eRd.js";import"./EmptyState-gJMnoHHF.js";import"./MassActions-nuCwql0J.js";import"./Autocomplete-D8CIOflW.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
