import{j as r}from"./react-B60MRyL7.js";import{ck as n}from"./vendor-BjyhLeYF.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-D-zwhmkZ.js";import{T as h}from"./TableCanvas.headerRowHeight.stories-B5Rnvxmh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-C1kqrpYx.js";import"./@tanstack/react-virtual-CKGQbmPB.js";import"./preload-helper-BUAZWbk6.js";import"./index-Cu4lwwaE.js";import"./index-TL0b5yJv.js";import"./@salutejs/plasma-icons-B_5a5nWb.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CP6YPNYf.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D4qQYiRN.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-DU2v-Kn3.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-NC4lN6Af.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DENfdpz2.js";import"./Box--F0xJqmw.js";import"./Collapse-CvmNuHeJ.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B-sUn46p.js";import"./@glideappsfinal/glide-data-grid-CKeaAZno.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-CeiuIDe5.js";import"./sharedUiSearch-BwgHAUTB.js";import"./TextField-CGTh6kAa.js";import"./sharedUtilsInputs-B878LDVL.js";import"./TypographyWithAutoTooltip-DZRMakA4.js";import"./Typography-DEV1YILe.js";import"./ListOfFilters-DnpjyhAh.js";import"./Table-BsATGSzR.js";import"./react-data-grid-uMNe3011.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrIt19Sz.js";import"./NumberFormat-0Wv51lwB.js";import"./EmptyState-B_7W5YtK.js";import"./unidentified@3x-CJfTaq4R.js";import"./MassActions-RRA17cRW.js";import"./Autocomplete-CE19l179.js";import"./FiltersActions-Cp5W4vvP.js";import"./IconButton-SVhgWQko.js";import"./TooltipList-BlFBxf18.js";import"./ErrorPage-DSEhV8br.js";function o(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:h,name:"Docs"}),`
`,r.jsx(e.h1,{id:"headerrowheight-tablecanvas",children:"HeaderRowHeight (TableCanvas)"}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"tableConfig.headerRowHeight"})}),`
`,r.jsxs(e.p,{children:["Настройка высоты ряда шапки таблицы. Одно число задаёт высоту заголовков. По умолчанию ",r.jsx(e.code,{children:"33"}),"."]}),`
`,r.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["Фиксированная высота ряда шапки (",r.jsx(e.code,{children:"number"}),")"]}),`
`,r.jsxs(e.li,{children:["Значение задаётся один раз в ",r.jsx(e.code,{children:"tableConfig"})]}),`
`,r.jsxs(e.li,{children:["Применяется ко всем уровням объединённой (групповой) шапки одинаково; свою высоту уровням групп задаёт ",r.jsx(e.code,{children:"groupHeaderRowHeight"})]}),`
`]}),`
`,r.jsx(e.h2,{id:"tableconfigheaderrowheight",children:"tableConfig.headerRowHeight"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:r.jsx(e.code,{children:"number"})})," — высота одного ряда шапки в пикселях"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"по умолчанию"})," — ",r.jsx(e.code,{children:"33"})]}),`
`]}),`
`,r.jsx(e.h2,{id:"поведение-с-объединёнными-шапками",children:"Поведение с объединёнными шапками"}),`
`,r.jsxs(e.p,{children:["Без ",r.jsx(e.code,{children:"groupHeaderRowHeight"})," значение применяется к ",r.jsx(e.strong,{children:"каждому"}),` уровню шапки: и к листовому (нижнему) ряду
колонок, и к каждому уровню объединённых заголовков. Поэтому при `,r.jsx(e.code,{children:"N"}),` уровнях
группировки итоговая высота шапки считается так:`]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{children:`итоговая высота = headerRowHeight * (1 + число уровней групп)
`})}),`
`,r.jsx(e.h2,{id:"tableconfiggroupheaderrowheight",children:"tableConfig.groupHeaderRowHeight"}),`
`,r.jsxs(e.p,{children:["Высота ",r.jsx(e.strong,{children:"каждого уровня"}),` объединённых (групповых) заголовков. По умолчанию равна
`,r.jsx(e.code,{children:"headerRowHeight"}),`. Нужна, когда нижний ряд шапки выше уровней групп, например при
переносе названий колонок на несколько строк:`]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{children:`итоговая высота = headerRowHeight + groupHeaderRowHeight * число уровней групп
`})}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["Подробнее о пропсах — ",r.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-api-tableconfig--api",children:"API tableConfig"})]}),`
`]}),`
`,r.jsx(s,{})]})}function sr(i={}){const{wrapper:e}={...n(),...i.components};return e?r.jsx(e,{...i,children:r.jsx(o,{...i})}):o(i)}export{sr as default};
