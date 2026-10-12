import{j as r}from"./react-D2T61mpp.js";import{cf as i,cg as t,c9 as s}from"./vendor-Dyxex4G2.js";import{T as l}from"./TableCanvas.customRenderCell.stories-BeGhlhI7.js";import"./react-is-Clcustum.js";import"./styled-components-6RO4idrj.js";import"./@tanstack/react-virtual-1rhIG8s3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CRhVkSSa.js";import"./getFuncAsString-BeVJ3j7w.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CzLXmGKw.js";import"./FiltersActions-fVDuaCL0.js";import"./IconButton-Ddh-5EVO.js";import"./@salutejs/plasma-icons-BD2BLRHB.js";import"./@salutejs/sdds-finai-BYfzdLjN.js";import"./@salutejs/sdds-themes-CBoev_d5.js";import"./utils-BljJKfDf.js";import"./constants-CUAU9RhA.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-C_u9fLc1.js";import"./TextField-BHN1wQJv.js";import"./sharedUtilsInputs-DWNMqfjd.js";import"./AiAgentPopup-CA7ltgC_.js";import"./TextArea-B5ga9leA.js";import"./sharedUtilsResizable-B3T8qHbg.js";import"./Table-DMsl_asr.js";import"./Collapse-Bfwy5CbO.js";import"./react-data-grid-BxN3VegY.js";import"./TableTabs-DiK6S-8p.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Cq7o-sTL.js";import"./@glideappsfinal/glide-data-grid-CXZvspA6.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DtgT8M4N.js";import"./ListOfFilters-CzZyLocN.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DeYAKL_F.js";import"./EmptyState-Jp9ecwfB.js";import"./MassActions-CtXp3uUT.js";import"./Autocomplete-8jMU0-ZO.js";import"./ErrorPage-CZler-gG.js";function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:l,name:"Docs"}),`
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
