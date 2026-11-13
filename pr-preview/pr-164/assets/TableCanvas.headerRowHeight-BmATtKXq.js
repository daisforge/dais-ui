import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-DeJLDLpI.js";import{T as h}from"./TableCanvas.headerRowHeight.stories-x1z-tJr2.js";import"./react-is-Clcustum.js";import"./styled-components-Dk50_reo.js";import"./@tanstack/react-virtual-R2Y3giEb.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-koMU_8fG.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DX9syi3I.js";import"./@sddsjs/sdds_finai-DdXz3JHO.js";import"./utils-KF4aT_9e.js";import"./constants-BxGpUxiJ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-DA9CWr9W.js";import"./@salutejs/plasma-icons-zWvvayCa.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-pcu2ILcE.js";import"./IconButton-BJbUR_O5.js";import"./Box-DQw8sL1c.js";import"./TextField-DgZBo79-.js";import"./sharedUtilsInputs-B0UumBSH.js";import"./AiAgentPopup-CCB3HuGW.js";import"./TextArea-CJZBRqEK.js";import"./sharedUtilsResizable-B5rzIJUb.js";import"./Table-DWwGSlgB.js";import"./Collapse-BYKzEpcd.js";import"./react-data-grid-D_il26Se.js";import"./TableTabs-CGBNm4pI.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-CiF1kpzB.js";import"./@glideappsfinal/glide-data-grid-D451MRqO.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-QfwbiFJn.js";import"./ListOfFilters-CZyGXKMT.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CFOx7ut3.js";import"./EmptyState-BoglVMQ1.js";import"./MassActions-DUQYkSY-.js";import"./Autocomplete-lTM2MhNu.js";import"./ErrorPage-DE5c_5Tz.js";function o(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h,name:"Docs"}),`
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
`,e.jsx(s,{})]})}function W(i={}){const{wrapper:r}={...n(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(o,{...i})}):o(i)}export{W as default};
