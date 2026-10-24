import{j as r}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-CYEt32i_.js";import{T as c}from"./TableCanvas.headerRowHeight.stories-Ca6ilnBj.js";import"./react-is-Clcustum.js";import"./styled-components-IqzAKK_s.js";import"./@tanstack/react-virtual-DRRuFJr3.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BYdnpZCY.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BRHIaJL_.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-CFRnpb77.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-32zwYo9C.js";import"./@salutejs/plasma-icons-pfD28j8D.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BR16IwQj.js";import"./IconButton-Dl8SMmMk.js";import"./Box-DrYQVeV7.js";import"./TextField-BSD0wz2P.js";import"./sharedUtilsInputs-BJDRWV8U.js";import"./AiAgentPopup-Do25XZz-.js";import"./TextArea-B9d14RRB.js";import"./sharedUtilsResizable-CPQ8HWoD.js";import"./Table-kya4Xv3o.js";import"./Collapse-_6Pq7MeZ.js";import"./react-data-grid-Bx1mSA4W.js";import"./TableTabs-BMjqrlPg.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BjF36j5z.js";import"./@glideappsfinal/glide-data-grid-HMBxXGeW.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BqRjtV6A.js";import"./ListOfFilters-Cis1z3PW.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-Bu7o2kss.js";import"./EmptyState-IqPSeUL3.js";import"./MassActions-DPpZGZqq.js";import"./Autocomplete-C8FwLa6a.js";import"./ErrorPage-DSmgNDIA.js";function o(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:c,name:"Docs"}),`
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
`,r.jsx(s,{})]})}function W(e={}){const{wrapper:i}={...n(),...e.components};return i?r.jsx(i,{...e,children:r.jsx(o,{...e})}):o(e)}export{W as default};
