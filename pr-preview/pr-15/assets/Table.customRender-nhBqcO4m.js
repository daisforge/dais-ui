import{j as e}from"./react-D2T61mpp.js";import{c2 as i,c3 as t,bY as s}from"./vendor-CV0MVVDJ.js";import{T as c}from"./Table.customRenderCell.stories-jrjrasnx.js";import"./react-is-Clcustum.js";import"./styled-components-hCehVAWp.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CiJvtnff.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-DsmSYh_i.js";import"./Table-DNt0LgGn.js";import"./FiltersActions-DAuoKCPb.js";import"./IconButton-CODpfw5D.js";import"./@salutejs/plasma-icons-DZ_o-Gth.js";import"./@salutejs/sdds-finai-B-0ptCmf.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C0WMdwDu.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField--fwN14Bg.js";import"./sharedUtilsInputs-GU7HwQ4Q.js";import"./AnalyticalWidget-D-6CFbtI.js";import"./Collapse-DhcWvyuO.js";import"./react-data-grid-D7tRzmcy.js";import"./TableTabs-CIYAJ1UT.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-B7Cebhwz.js";import"./ListOfFilters-C27o4A3x.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CusDtrAa.js";import"./EmptyState-DhMxOtV6.js";import"./MassActions-B3g5ldSI.js";import"./Autocomplete-BQFFOFMH.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function Y(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{Y as default};
