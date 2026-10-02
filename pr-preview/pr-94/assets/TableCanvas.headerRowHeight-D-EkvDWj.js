import{j as r}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-9g8l4WhJ.js";import{T as c}from"./TableCanvas.headerRowHeight.stories-BJhRktzq.js";import"./react-is-Clcustum.js";import"./styled-components-5_LCUbRt.js";import"./@tanstack/react-virtual-DUbrwqLU.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DbolCT1d.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BPb6aGiT.js";import"./FiltersActions-OhjgOaQE.js";import"./IconButton-CjjdXsHW.js";import"./@salutejs/plasma-icons-CsO0Zluk.js";import"./@salutejs/sdds-finai-DGclA7qp.js";import"./@salutejs/sdds-themes-fAtV8uGh.js";import"./utils-qLOjzm3a.js";import"./constants-BPUyiI8r.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D4caT0cR.js";import"./TextField-CXEKdY4_.js";import"./sharedUtilsInputs-Apa70Kd8.js";import"./AiAgentPopup-DiO3EcTT.js";import"./TextArea-D0nS5Pa8.js";import"./sharedUtilsResizable-IZRdYnaY.js";import"./Table-BprcWVG0.js";import"./Collapse-Bl3cgujD.js";import"./react-data-grid-DMDMtxY8.js";import"./TableTabs-E4wEsguE.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Tv7MIVte.js";import"./ListOfFilters-MtpkxgTe.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DcDEUhsz.js";import"./EmptyState-5jNbQ3Mz.js";import"./MassActions-74nVTl5z.js";import"./Autocomplete-DTtKA_4Z.js";import"./TableGlide-CWG6HOaO.js";import"./@glideappsfinal/glide-data-grid-IzI_d_pL.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DO5-N1oS.js";function o(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:c,name:"Docs"}),`
`,r.jsx(i.h1,{id:"headerrowheight-tablecanvas",children:"HeaderRowHeight (TableCanvas)"}),`
`,r.jsx(i.p,{children:r.jsx(i.strong,{children:"tableConfig.headerRowHeight"})}),`
`,r.jsxs(i.p,{children:["Настройка высоты ряда шапки таблицы. Одно число задаёт высоту заголовков. По умолчанию ",r.jsx(i.code,{children:"33"}),"."]}),`
`,r.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(i.ul,{children:[`
`,r.jsxs(i.li,{children:["Фиксированная высота ряда шапки (",r.jsx(i.code,{children:"number"}),")"]}),`
`,r.jsxs(i.li,{children:["Значение задаётся один раз в ",r.jsx(i.code,{children:"tableConfig"})]}),`
`,r.jsx(i.li,{children:"Применяется ко всем уровням объединённой (групповой) шапки одинаково"}),`
`]}),`
`,r.jsx(i.h2,{id:"tableconfigheaderrowheight",children:"tableConfig.headerRowHeight"}),`
`,r.jsxs(i.ul,{children:[`
`,r.jsxs(i.li,{children:[r.jsx(i.strong,{children:r.jsx(i.code,{children:"number"})})," — высота одного ряда шапки в пикселях"]}),`
`,r.jsxs(i.li,{children:[r.jsx(i.strong,{children:"по умолчанию"})," — ",r.jsx(i.code,{children:"33"})]}),`
`]}),`
`,r.jsx(i.h2,{id:"поведение-с-объединёнными-шапками",children:"Поведение с объединёнными шапками"}),`
`,r.jsxs(i.p,{children:["Значение применяется к ",r.jsx(i.strong,{children:"каждому"}),` уровню шапки: и к листовому (нижнему) ряду
колонок, и к каждому уровню объединённых заголовков. Поэтому при `,r.jsx(i.code,{children:"N"}),` уровнях
группировки итоговая высота шапки считается так:`]}),`
`,r.jsx(i.pre,{children:r.jsx(i.code,{children:`итоговая высота = headerRowHeight * (1 + число уровней групп)
`})}),`
`,r.jsxs(i.blockquote,{children:[`
`,r.jsxs(i.p,{children:["Подробнее о пропсах — ",r.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-api-tableconfig--api",children:"API tableConfig"})]}),`
`]}),`
`,r.jsx(s,{})]})}function V(e={}){const{wrapper:i}={...n(),...e.components};return i?r.jsx(i,{...e,children:r.jsx(o,{...e})}):o(e)}export{V as default};
