import{j as i}from"./react-D2T61mpp.js";import{cg as t,ch as o,ca as s}from"./vendor-BpYDKG4n.js";import{T as c}from"./Table.filtering.stories-CGbQG7r4.js";import"./react-is-Clcustum.js";import"./styled-components-DoLkMUbn.js";import"./@tanstack/react-virtual-BCRPiWoz.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DT1JghrX.js";import"./storySourceDoc-tVKyHcEN.js";import"./DatePicker-Dc1aZDce.js";import"./@salutejs/sdds-finai-6F9DEH-V.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./@salutejs/plasma-icons-CCpJlipa.js";import"./ModalDF-MOo5V47w.js";import"./constants-AGfDpPJ5.js";import"./IconButton-Cu2Clmji.js";import"./utils-BKBI1opo.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D3BKxi68.js";import"./Container-BLswbZSh.js";import"./Table-C4D8nmgx.js";import"./FiltersActions-DwlL9_H6.js";import"./TextField-DtvLo0En.js";import"./sharedUtilsInputs-an_FQIzY.js";import"./AiAgentPopup-DQuqtzZB.js";import"./TextArea-EnKVK4dZ.js";import"./sharedUtilsResizable-D4u6IOJ7.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-B9KRoJ99.js";import"./react-data-grid-KDgsHIfr.js";import"./TableTabs-vepz_FX5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-BKuIyFHK.js";import"./@glideappsfinal/glide-data-grid-c2LD31R4.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Chn46L6k.js";import"./ListOfFilters-3lSVcv4m.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CzurVsOn.js";import"./EmptyState-CDCPy-J5.js";import"./MassActions-D4DbcX3z.js";import"./Autocomplete-BFBmUiQ9.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
