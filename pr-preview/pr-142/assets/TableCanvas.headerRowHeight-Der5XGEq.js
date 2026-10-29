import{j as r}from"./react-D2T61mpp.js";import{cf as n,cg as t,c9 as s}from"./vendor-BA2uJqm3.js";import{T as c}from"./TableCanvas.headerRowHeight.stories-A-TcRTYv.js";import"./react-is-Clcustum.js";import"./styled-components-DI0RiSri.js";import"./@tanstack/react-virtual-DMW_htbC.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-BZYLyq8m.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-nkyIoJxu.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./utils-BjrMZFsU.js";import"./constants-DatVHdkd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-HGBzAa3l.js";import"./@salutejs/plasma-icons-DwAv7YrD.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-BFxbiunB.js";import"./IconButton-BybKUD7Y.js";import"./Box-ZOkrcsKi.js";import"./TextField-BhHQ_c3D.js";import"./sharedUtilsInputs-B953_C7v.js";import"./AiAgentPopup-Cw7HKRMY.js";import"./TextArea-CcAmAIga.js";import"./sharedUtilsResizable-B9o-tffI.js";import"./Table-D0rDi7UV.js";import"./Collapse-CKc8B8rW.js";import"./react-data-grid-6LdYXpuk.js";import"./TableTabs-D2zw3-Ob.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-UkPryztf.js";import"./@glideappsfinal/glide-data-grid-3eF0LrAd.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BXANifqR.js";import"./ListOfFilters-CQuej5c0.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C2UguQEJ.js";import"./EmptyState-BdGb02jX.js";import"./MassActions-BpFWYOKs.js";import"./Autocomplete-BmZVv4Ed.js";import"./ErrorPage-DO6GKstf.js";function o(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:c,name:"Docs"}),`
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
