import{j as e}from"./react-D2T61mpp.js";import{c6 as i,c7 as t,c0 as s}from"./vendor-Ypy2gq2s.js";import{T as c}from"./Table.customRenderCell.stories-BaErZy8G.js";import"./react-is-Clcustum.js";import"./styled-components-CYsj_fkL.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Ch8Ys4K9.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-BLx8jCVW.js";import"./Table-DiZTK8vW.js";import"./FiltersActions-BfQRxBrO.js";import"./IconButton-CbD3YLCU.js";import"./@salutejs/plasma-icons-DVXBUOYV.js";import"./@salutejs/sdds-finai-vQ-sjrqe.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-Br1gGEiI.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-BST07fwN.js";import"./sharedUtilsInputs-Cz3vbSor.js";import"./AnalyticalWidget-CJOC3EI5.js";import"./Collapse-CBmK7-8Z.js";import"./react-data-grid-BW5xANyX.js";import"./TableTabs-DyahmA2h.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BxCMG2Ni.js";import"./ListOfFilters-DXgIForT.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-D27L1Hl9.js";import"./EmptyState-TDZLcdeB.js";import"./MassActions-MZvu7lQb.js";import"./Autocomplete-wxUkMkak.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
