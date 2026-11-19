import{j as r}from"./react-B60MRyL7.js";import{ck as n}from"./vendor-qSGXd1Us.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-Bf1S2iVs.js";import{T as h}from"./TableCanvas.headerRowHeight.stories-DDCJDdGw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BH12kIqh.js";import"./@tanstack/react-virtual-CQvpRoFv.js";import"./preload-helper-Rbr_SUQB.js";import"./index-Cu4lwwaE.js";import"./index-Cth5UJp1.js";import"./@salutejs/plasma-icons-Bl-ri76g.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-DmnAHCX7.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-LG8a45_7.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./utils-B7_zEzfW.js";import"./constants-v491TRlQ.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-B4W7VlQo.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-D3ChpMdG.js";import"./Box-UVnFPpqO.js";import"./Collapse-D79jXGjm.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D1AUYKr0.js";import"./@glideappsfinal/glide-data-grid-DdEoqChm.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-PtysdENq.js";import"./sharedUiSearch-C_u5ZF-c.js";import"./TextField-X5vkWZJa.js";import"./sharedUtilsInputs-D3YGUQmt.js";import"./TypographyWithAutoTooltip-BNo6cJUf.js";import"./Typography-CJsT5EYe.js";import"./ListOfFilters-DV6d6SbJ.js";import"./Table-CegbLRas.js";import"./react-data-grid-DdOkLnO5.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C_H9aUMK.js";import"./NumberFormat-C79yXn_p.js";import"./EmptyState-BiVcrQEz.js";import"./unidentified@3x-DpaHf-Py.js";import"./MassActions-CiDaeXFw.js";import"./Autocomplete-CAO9LeTB.js";import"./FiltersActions-D_gtSzeF.js";import"./IconButton-D064SFCb.js";import"./TooltipList-Ur2omvrs.js";import"./ErrorPage-D6omyk4P.js";function o(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:h,name:"Docs"}),`
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
