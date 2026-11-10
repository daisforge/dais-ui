import{j as i}from"./react-D2T61mpp.js";import{cg as t,ch as o,ca as s}from"./vendor-DQE_v-3P.js";import{T as c}from"./Table.filtering.stories-CMgb6eJg.js";import"./react-is-Clcustum.js";import"./styled-components-CnJDq8_Y.js";import"./@tanstack/react-virtual-COmxIx-H.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CCVtLeWJ.js";import"./storySourceDoc-tVKyHcEN.js";import"./DatePicker-mAUfIfag.js";import"./@salutejs/sdds-finai-DEVB1MHB.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./@salutejs/plasma-icons-C5hAfewY.js";import"./ModalDF-CBPeEhJe.js";import"./constants-ChwOYBdp.js";import"./IconButton-BFdcKLV4.js";import"./utils-sHkSbqrk.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-D70Wu-J-.js";import"./Container-D0gD-mN3.js";import"./Table-DPC7iENO.js";import"./FiltersActions-DtLTpvlb.js";import"./TextField-C1W7ideM.js";import"./sharedUtilsInputs-CyoADmmX.js";import"./AiAgentPopup-BhPpY7Pz.js";import"./TextArea-iDWuvbHG.js";import"./sharedUtilsResizable-L-WgumPX.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-Bzr6KiQY.js";import"./react-data-grid-C31jW-aJ.js";import"./TableTabs-CdEhKw9I.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-BWQx89lK.js";import"./@glideappsfinal/glide-data-grid-DOgxh6RK.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-BgqBx9fg.js";import"./ListOfFilters-B_De42vo.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-vI2bNhRH.js";import"./EmptyState-0MO4Rorb.js";import"./MassActions-BMR7CY7i.js";import"./Autocomplete-A4RSkvAu.js";function e(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(o,{of:c,name:"Docs"}),`
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
