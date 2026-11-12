import{j as i}from"./react-D2T61mpp.js";import{cg as t,ch as o,ca as s}from"./vendor-aFf5tYwy.js";import{T as c}from"./Table.filtering.stories-CAYbYajq.js";import"./react-is-Clcustum.js";import"./styled-components-CGUvt02A.js";import"./@tanstack/react-virtual-k3-5pk8r.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-Doo9CTuq.js";import"./storySourceDoc-tVKyHcEN.js";import"./DatePicker-D17Iao2i.js";import"./@salutejs/sdds-finai-DHWxFeH-.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/plasma-icons-CfbkFxsV.js";import"./ModalDF-Dzl6UhNL.js";import"./constants-ChwOYBdp.js";import"./IconButton-B-B3AQC6.js";import"./utils-DYFUycLF.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DMGTp91_.js";import"./Container-BpedCT-V.js";import"./Table-BRR9bTnx.js";import"./FiltersActions-DwDDAJkd.js";import"./TextField-g4cwrqhr.js";import"./sharedUtilsInputs-8wkUDZmN.js";import"./AiAgentPopup-B-jiqUix.js";import"./TextArea-DMLD6qSb.js";import"./sharedUtilsResizable-DkclOuAT.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DM9OG5Il.js";import"./react-data-grid-BEGNQ37d.js";import"./TableTabs-CPZeQ2kr.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D7GQIjcj.js";import"./@glideappsfinal/glide-data-grid-B49w_JG0.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-D7cGCjU0.js";import"./ListOfFilters-3PoACkO-.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BjkaFfzc.js";import"./EmptyState-C_McVLBd.js";import"./MassActions-CBsiKmsj.js";import"./Autocomplete-RKbmfr3_.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
