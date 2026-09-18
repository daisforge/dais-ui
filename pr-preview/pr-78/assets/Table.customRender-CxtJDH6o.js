import{j as e}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-Cn_w75H7.js";import{T as c}from"./Table.customRenderCell.stories-DN1Y3Vdk.js";import"./react-is-Clcustum.js";import"./styled-components-WMyamcfa.js";import"./@tanstack/react-virtual-BQEO76G2.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CI86uvbI.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-BWZ52CnR.js";import"./Table-BmFqbDFe.js";import"./FiltersActions-8fPslQ6R.js";import"./IconButton-DtUJUCzT.js";import"./@salutejs/plasma-icons-BtZKC4fq.js";import"./@salutejs/sdds-finai-fsSIzTFQ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-WrAxOZfo.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-D3rlTnaG.js";import"./sharedUtilsInputs-CneW2Pp3.js";import"./AnalyticalWidget-DTDser7a.js";import"./Collapse-os_VNpzX.js";import"./react-data-grid-BrzwM-Bw.js";import"./TableTabs-5M5jD2V-.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-C_jvyESM.js";import"./ListOfFilters-Bvs_x8Bx.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BS3fnBr4.js";import"./EmptyState-CP10X8-N.js";import"./MassActions-DgXhg-c-.js";import"./Autocomplete-CKYux7G7.js";function n(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
