import{j as i}from"./react-D2T61mpp.js";import{cf as t,cg as o,c9 as s}from"./vendor-DsJm5J9r.js";import{T as c}from"./Table.filtering.stories-DV3ThSES.js";import"./react-is-Clcustum.js";import"./styled-components-CdOoB4R7.js";import"./@tanstack/react-virtual-BBPhu5yM.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-DLqtHX-Y.js";import"./storySourceDoc-tVKyHcEN.js";import"./DatePicker-CblXv0kd.js";import"./@salutejs/sdds-finai-BCIh097j.js";import"./@salutejs/sdds-themes-DPwMcFh9.js";import"./@salutejs/plasma-icons-BLyieaPl.js";import"./ModalDF--kaY1-Jp.js";import"./constants-DatVHdkd.js";import"./Container-UmjjZPQU.js";import"./utils-CRlWCL2r.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DcXSiQMW.js";import"./Table-ZJt8loOl.js";import"./FiltersActions-o7Dj69L1.js";import"./IconButton-DCmVIxR1.js";import"./TextField-DlliMlb0.js";import"./sharedUtilsInputs-wjdCuRkj.js";import"./AiAgentPopup-BJ59xZDz.js";import"./TextArea-BKKyyb49.js";import"./sharedUtilsResizable-BoQDxoHn.js";import"./Collapse-Cm8bDoVu.js";import"./react-data-grid-BhaJNV-A.js";import"./TableTabs-Dn6cREH4.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-vE6vm-5r.js";import"./@glideappsfinal/glide-data-grid-CG3lFAfU.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-qGSWt9RK.js";import"./ListOfFilters-DsIa8YUA.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-B6twWRwI.js";import"./EmptyState--zCuzU-c.js";import"./MassActions-BpT6S0G3.js";import"./Autocomplete-DPfSp2TP.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
