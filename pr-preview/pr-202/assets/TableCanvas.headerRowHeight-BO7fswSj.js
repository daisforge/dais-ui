import{j as r}from"./react-UEdzNlUe.js";import{dd as n}from"./vendor-DKFmtNka.js";import{M as t,S as s}from"./WithTooltip-KJL26V4Q-mcHqMig3.js";import{T as d}from"./TableCanvas.headerRowHeight.stories-BCPc3cqt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-KkJ3rXAN.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BFTIsucg.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-BqbYcg90.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./utils-Booj3GAg.js";import"./constants-3UB8ZrMK.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-CkM2RoIx.js";import"./@salutejs/plasma-icons-BPl9HMYM.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-By_8dfga.js";import"./Box-CZ_ZQ2uM.js";import"./Collapse-je_wNoe6.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-9pGS80-9.js";import"./@daisforge/glide-data-grid-DAsmNUnq.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./TableTabs-HvjNq9qy.js";import"./sharedUiSearch-S6VmH8Up.js";import"./TextField-_kp-5o4i.js";import"./sharedUtilsInputs-DKhoD9kx.js";import"./TypographyWithAutoTooltip-DQtPK5Qj.js";import"./Typography-BA5qaSRD.js";import"./ListOfFilters-c3v_yIQj.js";import"./Table-XtziPUZ1.js";import"./react-data-grid-zJbN7yQ-.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-C6JBaB8n.js";import"./NumberFormat-DkWjZssr.js";import"./EmptyState-CJBToD3S.js";import"./unidentified@3x-DnyuMWBO.js";import"./MassActions-D9w9KKFY.js";import"./Autocomplete-BbyjSCwg.js";import"./FiltersActions-HZMp5NsN.js";import"./IconButton-DE-9S934.js";import"./TooltipList--BueJEoS.js";import"./ErrorPage-CrkInk-I.js";function o(i){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return r.jsxs(r.Fragment,{children:[r.jsx(t,{of:d,name:"Docs"}),`
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
