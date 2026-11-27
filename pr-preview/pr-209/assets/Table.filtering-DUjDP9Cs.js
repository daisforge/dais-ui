import{j as i}from"./react-UEdzNlUe.js";import{df as o}from"./vendor-BjJ6Dniq.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-C3cIqsfP.js";import{T as l}from"./Table.filtering.stories-hFjJ6ZrG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-DjLIBw6y.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-Bp_65ajo.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-Dgmteq0e.js";import"./index-BFB8ouFt.js";import"./DatePicker-D1FFODAg.js";import"./@salutejs/sdds-finai-CrHyedOo.js";import"./@sddsjs/sdds_finai-Bv0LRYjs.js";import"./@salutejs/plasma-icons-BvdYvZ49.js";import"./ModalDF--MCRAtAI.js";import"./constants-YnncqoDz.js";import"./Container-CcSXm98R.js";import"./utils-JpoKTq_4.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CnSr-EOZ.js";import"./Table-KMuF8lNi.js";import"./Switch-qQzmLoyi.js";import"./Collapse-dO_AAhkR.js";import"./react-data-grid-DOd4FWtH.js";import"./TableTabs-Bz53VcLG.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableStateColors-CGhRd5g5.js";import"./sharedUiSearch-CT4kO1iM.js";import"./TextField-BA0K4a8D.js";import"./sharedUtilsInputs-B7_g1dSr.js";import"./Typography-CBjtlY1k.js";import"./ListOfFilters-B9gozdZD.js";import"./FiltersActions-Njv8EAhW.js";import"./IconButton-CK254hgH.js";import"./Tooltip-s8-CWCyN.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-B8bYU2ET.js";import"./NumberFormat-BJ91g7o5.js";import"./EmptyState-DBsaH2wj.js";import"./unidentified@3x-BWP3gjky.js";import"./MassActions-CP8egG5c.js";import"./Autocomplete-UkORg-1h.js";function t(n){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(e,{of:l,name:"Docs"}),`
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
`,i.jsx(s,{})]})}function oi(n={}){const{wrapper:r}={...o(),...n.components};return r?i.jsx(r,{...n,children:i.jsx(t,{...n})}):t(n)}export{oi as default};
