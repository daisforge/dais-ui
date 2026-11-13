import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-BrHBSlJK.js";import{T as h}from"./TableCanvas.headerRowHeight.stories-U8X8_Bxy.js";import"./react-is-Clcustum.js";import"./styled-components-VQhqWv3H.js";import"./@tanstack/react-virtual-VaQu0THI.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DMKGmJ6t.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-_sty7KIl.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-ClMPg-JA.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-QR_WCRdF.js";import"./@salutejs/plasma-icons-DKlbVZSX.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DkaFXLQ9.js";import"./IconButton-BD7PJEK-.js";import"./Box-CAphnu1o.js";import"./TextField-DwCSXYU-.js";import"./sharedUtilsInputs-BVZR2bw_.js";import"./AiAgentPopup-C-8AU68g.js";import"./TextArea-CET7FF04.js";import"./sharedUtilsResizable-C5_x6ZS8.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-DJc_4ENL.js";import"./Collapse-xVOKAYjw.js";import"./react-data-grid-BRVMtBW9.js";import"./TableTabs-DDTQKVAd.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CZ6Un4G1.js";import"./@glideappsfinal/glide-data-grid-Diog_OOt.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-D7mcEM-B.js";import"./ListOfFilters-DXa-ZfXv.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-FmU7LToq.js";import"./EmptyState-DsCjVhNT.js";import"./MassActions-C2WHcwI6.js";import"./Autocomplete-DE8EekWl.js";import"./ErrorPage-Cx1wXFt9.js";function o(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h,name:"Docs"}),`
`,e.jsx(r.h1,{id:"headerrowheight-tablecanvas",children:"HeaderRowHeight (TableCanvas)"}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"tableConfig.headerRowHeight"})}),`
`,e.jsxs(r.p,{children:["Настройка высоты ряда шапки таблицы. Одно число задаёт высоту заголовков. По умолчанию ",e.jsx(r.code,{children:"33"}),"."]}),`
`,e.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Фиксированная высота ряда шапки (",e.jsx(r.code,{children:"number"}),")"]}),`
`,e.jsxs(r.li,{children:["Значение задаётся один раз в ",e.jsx(r.code,{children:"tableConfig"})]}),`
`,e.jsxs(r.li,{children:["Применяется ко всем уровням объединённой (групповой) шапки одинаково; свою высоту уровням групп задаёт ",e.jsx(r.code,{children:"groupHeaderRowHeight"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"tableconfigheaderrowheight",children:"tableConfig.headerRowHeight"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.code,{children:"number"})})," — высота одного ряда шапки в пикселях"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"по умолчанию"})," — ",e.jsx(r.code,{children:"33"})]}),`
`]}),`
`,e.jsx(r.h2,{id:"поведение-с-объединёнными-шапками",children:"Поведение с объединёнными шапками"}),`
`,e.jsxs(r.p,{children:["Без ",e.jsx(r.code,{children:"groupHeaderRowHeight"})," значение применяется к ",e.jsx(r.strong,{children:"каждому"}),` уровню шапки: и к листовому (нижнему) ряду
колонок, и к каждому уровню объединённых заголовков. Поэтому при `,e.jsx(r.code,{children:"N"}),` уровнях
группировки итоговая высота шапки считается так:`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`итоговая высота = headerRowHeight * (1 + число уровней групп)
`})}),`
`,e.jsx(r.h2,{id:"tableconfiggroupheaderrowheight",children:"tableConfig.groupHeaderRowHeight"}),`
`,e.jsxs(r.p,{children:["Высота ",e.jsx(r.strong,{children:"каждого уровня"}),` объединённых (групповых) заголовков. По умолчанию равна
`,e.jsx(r.code,{children:"headerRowHeight"}),`. Нужна, когда нижний ряд шапки выше уровней групп, например при
переносе названий колонок на несколько строк:`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`итоговая высота = headerRowHeight + groupHeaderRowHeight * число уровней групп
`})}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["Подробнее о пропсах — ",e.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-api-tableconfig--api",children:"API tableConfig"})]}),`
`]}),`
`,e.jsx(s,{})]})}function Y(i={}){const{wrapper:r}={...n(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(o,{...i})}):o(i)}export{Y as default};
