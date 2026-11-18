import{j as i}from"./react-B60MRyL7.js";import{ck as o}from"./vendor-ABAm7dM9.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-DVjM17Xc.js";import{T as c}from"./Table.filtering.stories-DmIMXD-x.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./preload-helper-Bmf6XQY_.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-D6aow9No.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-BdcmQ601.js";import"./index-BFB8ouFt.js";import"./DatePicker-C4Mgh0U5.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./ModalDF-ousclo-O.js";import"./constants-DHlp9b4t.js";import"./Dropdown-OQAgfOXP.js";import"./Container-Cl-Luge2.js";import"./utils-CWW6sPYd.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-bkXdsxp1.js";import"./Table-CkwJZquQ.js";import"./index-DtotkDJi.js";import"./Collapse-BC9SztdT.js";import"./react-data-grid-a6lPhyw4.js";import"./TableTabs-BBnsWNxR.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D04a4cW3.js";import"./@glideappsfinal/glide-data-grid-IkMVqKbI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-uQsFtynq.js";import"./Typography-DHR5p_-g.js";import"./ListOfFilters-DcXGWY5G.js";import"./FiltersActions-BgotVPhI.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-ClfQAY0j.js";import"./unidentified@3x-DeqHr2sH.js";import"./MassActions-DgIb8YVo.js";import"./Autocomplete-D4Dg924L.js";function n(t){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(e,{of:c,name:"Docs"}),`
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
`,i.jsx(s,{})]})}function mi(t={}){const{wrapper:r}={...o(),...t.components};return r?i.jsx(r,{...t,children:i.jsx(n,{...t})}):n(t)}export{mi as default};
