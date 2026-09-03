import{j as e}from"./react-D2T61mpp.js";import{c6 as i,c7 as t,c0 as s}from"./vendor-1keUuV-j.js";import{T as c}from"./Table.customRenderCell.stories-BIup_02B.js";import"./react-is-Clcustum.js";import"./styled-components-D2iiFT0j.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-oNxBpJHV.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-Bi5p42cU.js";import"./Table-BYXdvXsQ.js";import"./FiltersActions-inYvTkD-.js";import"./IconButton-D6ggN2iN.js";import"./@salutejs/plasma-icons-D474VlMi.js";import"./@salutejs/sdds-finai-BMyiwTu5.js";import"./@salutejs/sdds-themes-CZ516YZq.js";import"./utils-DoTa2cHi.js";import"./constants-DM2G2kGu.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-C9X8-N4F.js";import"./sharedUtilsInputs-DQXDwK8i.js";import"./AnalyticalWidget-xcazQVK9.js";import"./Collapse-Cx6Ggb5H.js";import"./react-data-grid-CWRwsFQN.js";import"./TableTabs-CsckxbMh.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-D18FMvKW.js";import"./ListOfFilters-BmB8RmdR.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Cz2KhdJb.js";import"./EmptyState-DZsb6oHt.js";import"./MassActions-BIWwB_ad.js";import"./Autocomplete-Bh_Nhfcc.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
