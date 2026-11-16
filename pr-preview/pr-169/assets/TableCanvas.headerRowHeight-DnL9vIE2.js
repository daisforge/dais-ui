import{j as r}from"./react-B60MRyL7.js";import{ck as n}from"./vendor-ABAm7dM9.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-DVjM17Xc.js";import{T as h}from"./TableCanvas.headerRowHeight.stories-CiLgee0W.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./preload-helper-Bmf6XQY_.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-D6aow9No.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BYM9F2cJ.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./utils-CWW6sPYd.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DtotkDJi.js";import"./Box-bkXdsxp1.js";import"./Collapse-BC9SztdT.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BEGSzIOP.js";import"./@glideappsfinal/glide-data-grid-CC2fJ8Kz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-OQAgfOXP.js";import"./TableTabs-BBnsWNxR.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-D5mVbAIF.js";import"./Typography-DnOGykbx.js";import"./ListOfFilters-Bm_cdHcX.js";import"./Table-Vzg6nvOG.js";import"./react-data-grid-a6lPhyw4.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-ClfQAY0j.js";import"./unidentified@3x-DeqHr2sH.js";import"./MassActions-xI-YnWfo.js";import"./Autocomplete-D4Dg924L.js";import"./FiltersActions-BbYrJGvd.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./ErrorPage-C-8swpRG.js";function o(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:h,name:"Docs"}),`
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
`,r.jsx(s,{})]})}function hr(i={}){const{wrapper:e}={...n(),...i.components};return e?r.jsx(e,{...i,children:r.jsx(o,{...i})}):o(i)}export{hr as default};
