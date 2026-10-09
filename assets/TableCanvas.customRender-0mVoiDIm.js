import{j as r}from"./react-D2T61mpp.js";import{cg as i,ch as t,ca as s}from"./vendor-DhPQnvNP.js";import{T as l}from"./TableCanvas.customRenderCell.stories-CHfa04pC.js";import"./react-is-Clcustum.js";import"./styled-components-D2iYy2uM.js";import"./@tanstack/react-virtual-DonijgCh.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-C8MKfFxP.js";import"./getFuncAsString-BOOvOnSb.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CtDXR6sM.js";import"./FiltersActions-CLe33RcG.js";import"./IconButton-DbjMdgRP.js";import"./@salutejs/plasma-icons-Duq7ysyN.js";import"./@salutejs/sdds-finai-BD5fhF9i.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-CEczJKOt.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C5xCp2yD.js";import"./TextField-CsSlqUbx.js";import"./sharedUtilsInputs-5r9tslRT.js";import"./AiAgentPopup-C62dlwE-.js";import"./TextArea-CB5TA1ke.js";import"./sharedUtilsResizable-4btFEOm_.js";import"./Table-DSX9J23j.js";import"./Collapse-CeSlpnVB.js";import"./react-data-grid-CrmilZIk.js";import"./TableTabs-DJtpo5Ax.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CpRVk69d.js";import"./ListOfFilters-Bk0Z2nOk.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Capqp8AZ.js";import"./EmptyState-DwNB7vmB.js";import"./MassActions-CyL5s2MM.js";import"./Autocomplete-DvLjjVr2.js";import"./TableGlide-B9U6X1Yz.js";import"./@glideappsfinal/glide-data-grid-DawffSjL.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-Dw7x_35p.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:l,name:"Docs"}),`
`,r.jsx(e.h1,{id:"custom-render",children:"Custom Render"}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"columnConfig.renderCell / renderHeaderCell / renderSummaryCell"})}),`
`,r.jsx(e.p,{children:"Кастомный рендеринг ячеек таблицы через Canvas-компоненты."}),`
`,r.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"renderCell"})," — кастомный рендер ячеек данных"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"renderHeaderCell"})," — кастомный рендер заголовков колонок"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"renderSummaryCell"})," — кастомный рендер итоговых строк"]}),`
`,r.jsxs(e.li,{children:["Доступ к ",r.jsx(e.code,{children:"theme"}),", ",r.jsx(e.code,{children:"column"}),", ",r.jsx(e.code,{children:"row"})," и ",r.jsx(e.code,{children:"ctxs"})," внутри рендер-функций"]}),`
`]}),`
`,r.jsx(e.h2,{id:"особенности",children:"Особенности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["Каждая ячейка должна учитывать ",r.jsx(e.code,{children:"theme.cellHorizontalPadding"})," для корректных отступов"]}),`
`,r.jsxs(e.li,{children:["В качестве ",r.jsx(e.code,{children:"name"})," колонки можно передать ",r.jsx(e.code,{children:"Canvas.Element"})," для кастомного заголовка"]}),`
`,r.jsx(e.li,{children:"Доступны все Canvas-компоненты: Badge, Button, Text, Container и др."}),`
`]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["Подробнее о типах и пропсах — ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-customrender-api--docs",children:"Custom Render API"})]}),`
`]}),`
`,r.jsx(s,{})]})}function W(n={}){const{wrapper:e}={...i(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}export{W as default};
