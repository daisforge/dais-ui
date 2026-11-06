import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-BpYDKG4n.js";import{T as h}from"./TableCanvas.headerRowHeight.stories-BXkJL45o.js";import"./react-is-Clcustum.js";import"./styled-components-DoLkMUbn.js";import"./@tanstack/react-virtual-BCRPiWoz.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DT1JghrX.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BwnhogBa.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./utils-BKBI1opo.js";import"./constants-AGfDpPJ5.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-6F9DEH-V.js";import"./@salutejs/plasma-icons-CCpJlipa.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-DwlL9_H6.js";import"./IconButton-Cu2Clmji.js";import"./Box-D3BKxi68.js";import"./TextField-DtvLo0En.js";import"./sharedUtilsInputs-an_FQIzY.js";import"./AiAgentPopup-DQuqtzZB.js";import"./TextArea-EnKVK4dZ.js";import"./sharedUtilsResizable-D4u6IOJ7.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-C4D8nmgx.js";import"./Collapse-B9KRoJ99.js";import"./react-data-grid-KDgsHIfr.js";import"./TableTabs-vepz_FX5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BKuIyFHK.js";import"./@glideappsfinal/glide-data-grid-c2LD31R4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Chn46L6k.js";import"./ListOfFilters-3lSVcv4m.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CzurVsOn.js";import"./EmptyState-CDCPy-J5.js";import"./MassActions-D4DbcX3z.js";import"./Autocomplete-BFBmUiQ9.js";import"./ErrorPage-BJ0d_UyX.js";function o(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h,name:"Docs"}),`
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
