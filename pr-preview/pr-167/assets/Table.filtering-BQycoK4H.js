import{j as i}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-BjyhLeYF.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-D-zwhmkZ.js";import{T as c}from"./Table.filtering.stories-Ytv0O4c-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-C1kqrpYx.js";import"./@tanstack/react-virtual-CKGQbmPB.js";import"./preload-helper-BUAZWbk6.js";import"./index-Cu4lwwaE.js";import"./index-TL0b5yJv.js";import"./@salutejs/plasma-icons-B_5a5nWb.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CP6YPNYf.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-BdcmQ601.js";import"./index-BFB8ouFt.js";import"./DatePicker-DzarxjRC.js";import"./@salutejs/sdds-finai-NC4lN6Af.js";import"./@sddsjs/sdds_finai-QK2Yc4fI.js";import"./ModalDF-CDrUEBJn.js";import"./constants-v491TRlQ.js";import"./Container-BLCXmXGx.js";import"./utils-DU2v-Kn3.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box--F0xJqmw.js";import"./Table-BsATGSzR.js";import"./index-DENfdpz2.js";import"./Collapse-CvmNuHeJ.js";import"./react-data-grid-uMNe3011.js";import"./TableTabs-CeiuIDe5.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B-sUn46p.js";import"./@glideappsfinal/glide-data-grid-CKeaAZno.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-BwgHAUTB.js";import"./TextField-CGTh6kAa.js";import"./sharedUtilsInputs-B878LDVL.js";import"./TypographyWithAutoTooltip-DZRMakA4.js";import"./Typography-DEV1YILe.js";import"./ListOfFilters-DnpjyhAh.js";import"./FiltersActions-Cp5W4vvP.js";import"./IconButton-SVhgWQko.js";import"./TooltipList-BlFBxf18.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BrIt19Sz.js";import"./NumberFormat-0Wv51lwB.js";import"./EmptyState-B_7W5YtK.js";import"./unidentified@3x-CJfTaq4R.js";import"./MassActions-RRA17cRW.js";import"./Autocomplete-CE19l179.js";function n(t){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(e,{of:c,name:"Docs"}),`
`,i.jsx(r.h1,{id:"filtering",children:"Filtering"}),`
`,i.jsx(r.p,{children:i.jsx(r.strong,{children:"tableConfig.filtering"})}),`
`,i.jsx(r.p,{children:"Фильтрация данных таблицы с поддержкой автоматического и ручного режимов."}),`
`,i.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:["Три типа фильтров: ",i.jsx(r.code,{children:"input"}),", ",i.jsx(r.code,{children:"select"}),", ",i.jsx(r.code,{children:"custom"})]}),`
`,i.jsxs(r.li,{children:["Автоматическая фильтрация по умолчанию, ручная через ",i.jsx(r.code,{children:"manualFiltering: true"})]}),`
`,i.jsx(r.li,{children:"Отображение активных фильтров в виде chip-элементов"}),`
`,i.jsx(r.li,{children:"Фильтрация через sidebar с настройкой порядка и глобальных фильтров"}),`
`]}),`
`,i.jsx(r.h2,{id:"типы-фильтров",children:"Типы фильтров"}),`
`,i.jsx(r.h3,{id:"input",children:"Input"}),`
`,i.jsxs(r.p,{children:["Текстовый фильтр с режимами: ",i.jsx(r.code,{children:"'includes'"}),", ",i.jsx(r.code,{children:"'startWith'"}),", ",i.jsx(r.code,{children:"'equal'"})," или кастомная функция."]}),`
`,i.jsx(r.h3,{id:"select",children:"Select"}),`
`,i.jsx(r.p,{children:"Фильтр выбором из списка. Поддержка одиночного и множественного выбора."}),`
`,i.jsx(r.h3,{id:"custom",children:"Custom"}),`
`,i.jsxs(r.p,{children:["Полностью кастомный компонент фильтра через ",i.jsx(r.code,{children:"customRender"}),"."]}),`
`,i.jsx(r.h2,{id:"особенности",children:"Особенности"}),`
`,i.jsxs(r.ul,{children:[`
`,i.jsxs(r.li,{children:["При ",i.jsx(r.code,{children:"manualFiltering: true"})," таблица не фильтрует данные — ожидается внешняя логика"]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.code,{children:"sidebarConfig"})," позволяет добавлять глобальные фильтры, не привязанные к колонкам"]}),`
`,i.jsxs(r.li,{children:[i.jsx(r.code,{children:"filtersInfo"})," задаёт лейблы и значения по умолчанию для каждого фильтра"]}),`
`]}),`
`,i.jsxs(r.blockquote,{children:[`
`,i.jsxs(r.p,{children:["Подробнее о типах и пропсах — ",i.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-filtering-api--docs",children:"Filtering API"})]}),`
`]}),`
`,i.jsx(s,{})]})}function li(t={}){const{wrapper:r}={...o(),...t.components};return r?i.jsx(r,{...t,children:i.jsx(n,{...t})}):n(t)}export{li as default};
