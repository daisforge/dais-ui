import{j as e}from"./react-CAOzMBF_.js";import{cg as n,ch as t,ca as s}from"./vendor-Dh4d6dCz.js";import{T as c}from"./Table.customRenderCell.stories-CY518D-X.js";import"./react-is-vVGXX3JE.js";import"./styled-components-BD-2WP2k.js";import"./@tanstack/react-virtual-4Nv0GpZT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-B68YIrJ_.js";import"./storySourceDoc-tVKyHcEN.js";import"./Box-V-E_7_e1.js";import"./Table-Df8TShI7.js";import"./FiltersActions-C1cIIXAL.js";import"./IconButton-BY5jSHYi.js";import"./@salutejs/plasma-icons-CkR551sF.js";import"./@salutejs/sdds-finai-Yd8FRL4L.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-I85SwEfQ.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./TextField-DU1R_gtM.js";import"./sharedUtilsInputs-C3919g4u.js";import"./AiAgentPopup-GQs-IAp5.js";import"./TextArea-CeV4EuOw.js";import"./sharedUtilsResizable-CBJT9eg4.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-CcEN_5QW.js";import"./react-data-grid-BG41yzHd.js";import"./TableTabs-BC4rHx7P.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-zZ1mupmy.js";import"./@glideappsfinal/glide-data-grid-gV_BbKzF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BDOhBaAU.js";import"./ListOfFilters-DuG7GQT_.js";import"./lodash.isequal-DxetvuAY.js";import"./NumberFormat-C_muNst-.js";import"./EmptyState-DS3f5Djm.js";import"./MassActions-nvob83TA.js";import"./Autocomplete-Ce-yJoLc.js";function i(o){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
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
