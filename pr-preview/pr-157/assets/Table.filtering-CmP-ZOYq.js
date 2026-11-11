import{j as i}from"./react-D2T61mpp.js";import{cg as t,ch as o,ca as s}from"./vendor-8LkLf-EW.js";import{T as c}from"./Table.filtering.stories--uQcSSOB.js";import"./react-is-Clcustum.js";import"./styled-components-977JO8e_.js";import"./@tanstack/react-virtual-DFitcOyT.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DC97wo5K.js";import"./storySourceDoc-tVKyHcEN.js";import"./DatePicker-e0MAp6ig.js";import"./@salutejs/sdds-finai-B1oBtYhP.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/plasma-icons-BdpyX49f.js";import"./ModalDF-Zib66Gx0.js";import"./constants-ChwOYBdp.js";import"./IconButton-F7tjg1RO.js";import"./utils-Bz10k1I6.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-kyMLzOlr.js";import"./Container-D6Gp9TIc.js";import"./Table-ILp9g_js.js";import"./FiltersActions-C8zJtQCS.js";import"./TextField-CqanmeIn.js";import"./sharedUtilsInputs-Dhx-TaFa.js";import"./AiAgentPopup-DI4jXySu.js";import"./TextArea-B9dO1dvT.js";import"./sharedUtilsResizable-0LtnTkr-.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-sIF2WGK9.js";import"./react-data-grid-DeoNXEWJ.js";import"./TableTabs-BTy1FtUr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-B09rarZh.js";import"./@glideappsfinal/glide-data-grid-DyEz4IEh.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-DSpqG_CO.js";import"./ListOfFilters-LyTm63hj.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-G9s9w3SE.js";import"./EmptyState-DB9rzJCX.js";import"./MassActions-CkFKx0e4.js";import"./Autocomplete-K1up5yCj.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
`,i.jsx(s,{})]})}function Y(n={}){const{wrapper:r}={...t(),...n.components};return r?i.jsx(r,{...n,children:i.jsx(e,{...n})}):e(n)}export{Y as default};
