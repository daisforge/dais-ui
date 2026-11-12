import{j as e}from"./react-D2T61mpp.js";import{cg as n,ch as t,ca as s}from"./vendor-DEnmvFjy.js";import{T as h}from"./TableCanvas.headerRowHeight.stories-BV8k70J6.js";import"./react-is-Clcustum.js";import"./styled-components-DldTWSFz.js";import"./@tanstack/react-virtual-D3zFBQki.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CtDXjnoY.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-DjwcEHD5.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-BgMYkZVs.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-C2nSo9ZF.js";import"./@salutejs/plasma-icons-B_9bJsfG.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./FiltersActions-xvgmZCri.js";import"./IconButton-DRI4VSmJ.js";import"./Box-B9JbqPS8.js";import"./TextField-DgPaIDCQ.js";import"./sharedUtilsInputs-B5WE-YkK.js";import"./AiAgentPopup-DfNbinHF.js";import"./TextArea-q3jTH-k_.js";import"./sharedUtilsResizable-kirulsbM.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Table-BZZLu_Wb.js";import"./Collapse-DPbYvhfL.js";import"./react-data-grid-q0eEcsXm.js";import"./TableTabs-SoiJtRGl.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BWh11llH.js";import"./@glideappsfinal/glide-data-grid-DyCN0Ui8.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-MuKV54Ye.js";import"./ListOfFilters-aoR5D-rr.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C_9_ZZbe.js";import"./EmptyState-CsbytIUe.js";import"./MassActions-ButHqY0O.js";import"./Autocomplete-B5mT052q.js";import"./ErrorPage-8XC1D-bd.js";function o(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:h,name:"Docs"}),`
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
