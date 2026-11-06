import{j as i}from"./react-D2T61mpp.js";import{cg as t,ch as o,ca as s}from"./vendor-OMIM6ypg.js";import{T as c}from"./Table.filtering.stories-aT79O6S5.js";import"./react-is-Clcustum.js";import"./styled-components-C7d6cAn3.js";import"./@tanstack/react-virtual-CgyeR3FS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DZsWkZ-A.js";import"./storySourceDoc-tVKyHcEN.js";import"./DatePicker--xiY0_hx.js";import"./@salutejs/sdds-finai-Bon1pPd2.js";import"./@sddsjs/sdds_finai-DNELm_9o.js";import"./@salutejs/plasma-icons-4hohajim.js";import"./ModalDF-BfyTiOoz.js";import"./constants-AGfDpPJ5.js";import"./IconButton-DtoSl8Bw.js";import"./utils-Bu2A5x6d.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D3IwMqIN.js";import"./Container-BDDgPuMO.js";import"./Table-DeGjIAjL.js";import"./FiltersActions-DhvOppJl.js";import"./TextField-X1gOdWS9.js";import"./sharedUtilsInputs-CzqRv-X_.js";import"./AiAgentPopup-BTKgTZx9.js";import"./TextArea-BXsaEElA.js";import"./sharedUtilsResizable-451amboB.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-D9TBSft0.js";import"./react-data-grid-asFtuhvm.js";import"./TableTabs-GjFYQ1yc.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-Boy_gxo4.js";import"./@glideappsfinal/glide-data-grid-Cun82X6B.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cl3VzNM-.js";import"./ListOfFilters-ClSxBvCe.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DFgdTL6D.js";import"./EmptyState-UY_vm-Yh.js";import"./MassActions-C4WNK7LE.js";import"./Autocomplete-CGdJJ2BB.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
