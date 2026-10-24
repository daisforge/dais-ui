import{j as i}from"./react-D2T61mpp.js";import{cf as t,cg as o,c9 as s}from"./vendor-DKgVyX2L.js";import{T as c}from"./Table.filtering.stories-C9yDaW2x.js";import"./react-is-Clcustum.js";import"./styled-components-QcKq8yyO.js";import"./@tanstack/react-virtual-DeJ2XhRM.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CDRG2fMx.js";import"./storySourceDoc-tVKyHcEN.js";import"./DatePicker-DZEzozyd.js";import"./@salutejs/sdds-finai-MgJxvWJH.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./@salutejs/plasma-icons-B-uWCUvG.js";import"./ModalDF-rt5R9qS5.js";import"./constants-DatVHdkd.js";import"./Container-BwMBZ6do.js";import"./utils-BaaPIBp8.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Chi_dMtZ.js";import"./Table-YzRJBPMf.js";import"./FiltersActions-yJ24-sMA.js";import"./IconButton-DzGtIrYh.js";import"./TextField-C6dAK4iF.js";import"./sharedUtilsInputs-CTCmk_Eq.js";import"./AiAgentPopup-bCdyYi9W.js";import"./TextArea-DKagOhFu.js";import"./sharedUtilsResizable-_GDHoPjT.js";import"./Collapse-IBBAdzJy.js";import"./react-data-grid-Dag3u3m7.js";import"./TableTabs-hoMdNnWG.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-DRRkL-9u.js";import"./@glideappsfinal/glide-data-grid-DYI0fUTl.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-SCYYfULM.js";import"./ListOfFilters-ASzZ-zYH.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CAG3C_Yq.js";import"./EmptyState-isgyqG0r.js";import"./MassActions-cfj1yS0P.js";import"./Autocomplete-DIS1VcM6.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
`,i.jsx(s,{})]})}function V(n={}){const{wrapper:r}={...t(),...n.components};return r?i.jsx(r,{...n,children:i.jsx(e,{...n})}):e(n)}export{V as default};
