import{j as r}from"./react-UEdzNlUe.js";import{df as n}from"./vendor-BS4HA21f.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-DGSPfzzr.js";import{T as d}from"./TableCanvas.headerRowHeight.stories-D47iJPdF.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-i6nmInMm.js";import"./@tanstack/react-virtual-Do9j7-rI.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-Dp_h01wN.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-dlps2y2w.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-za7fZn21.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./utils-BHv61rGQ.js";import"./constants-YnncqoDz.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CQUafN5B.js";import"./@salutejs/plasma-icons-CXvNxvo1.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./Switch-BuolD6i3.js";import"./Box-BL0rBjAw.js";import"./Collapse-CC7IlkPv.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./TableGlide-Bf8CaiU-.js";import"./@daisforge/glide-data-grid-BO6IHgky.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUtilsSearch-blgVacgU.js";import"./TableTabs-xSJydO6T.js";import"./sharedUiSearch-D3tdf9Ln.js";import"./TextField-kUI-NAJ6.js";import"./sharedUtilsInputs-BnPXibK3.js";import"./Typography-COUeQAIi.js";import"./ListOfFilters-X2JO-7Cv.js";import"./FiltersActions-BFYsTofB.js";import"./IconButton-CfYF5BDV.js";import"./Tooltip-Cv5b2n02.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-CX_cVg0L.js";import"./NumberFormat-DoznmbgT.js";import"./EmptyState-BQvIQUz-.js";import"./unidentified@3x-B3LEnvq5.js";import"./ErrorPage-CkAVwNCu.js";import"./Autocomplete-DXJoRD1w.js";function o(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:d,name:"Docs"}),`
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
`,r.jsx(s,{})]})}function or(i={}){const{wrapper:e}={...n(),...i.components};return e?r.jsx(e,{...i,children:r.jsx(o,{...i})}):o(i)}export{or as default};
