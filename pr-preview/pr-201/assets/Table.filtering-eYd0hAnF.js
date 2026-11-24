import{j as i}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-D2r4jgZf.js";import{M as e,S as s}from"./WithTooltip-KJL26V4Q-IEHRjStb.js";import{T as l}from"./Table.filtering.stories-RCvGw22N.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C6Uw7ovB.js";import"./@tanstack/react-virtual-CK8aghAq.js";import"./preload-helper-EhFzO87Y.js";import"./index-Cu4lwwaE.js";import"./index-Bo2kqA7A.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BLHqlU9I.js";import"./storySourceDoc-tVKyHcEN.js";import"./index-Dgmteq0e.js";import"./index-BFB8ouFt.js";import"./DatePicker-Dbx8Bo5_.js";import"./@salutejs/sdds-finai-mlEHigyJ.js";import"./@sddsjs/sdds_finai-CqI1dsZV.js";import"./@salutejs/plasma-icons-BK9u4OsI.js";import"./ModalDF-YMHkqtk-.js";import"./constants-3UB8ZrMK.js";import"./Container-C4TfLmb5.js";import"./utils-DSJLiokB.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Dwqy9xB3.js";import"./Table-Dh4WhBRb.js";import"./index-DNoHAM3Q.js";import"./Collapse-CfxT3MfK.js";import"./react-data-grid-CAmlt0FZ.js";import"./TableTabs-CaS3OwY8.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Bl6Z-hgY.js";import"./@daisforge/glide-data-grid-CPiQfy7c.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-GpWNLaaY.js";import"./TextField-BfAQjvwj.js";import"./sharedUtilsInputs-Ci-3PswP.js";import"./TypographyWithAutoTooltip-XFgqIeb_.js";import"./Typography-BcqUTUcc.js";import"./ListOfFilters-B7oPCT0L.js";import"./FiltersActions-C8MpG-P2.js";import"./IconButton-DFZQ5013.js";import"./TooltipList-CeWvqtLg.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DpIc9uqy.js";import"./NumberFormat-GaGamDYK.js";import"./EmptyState-BqLoOUWF.js";import"./unidentified@3x-BjiX_gDg.js";import"./MassActions-BOok6sKA.js";import"./Autocomplete-C5ijr1ap.js";function n(t){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(e,{of:l,name:"Docs"}),`
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
`,i.jsx(s,{})]})}function ci(t={}){const{wrapper:r}={...o(),...t.components};return r?i.jsx(r,{...t,children:i.jsx(n,{...t})}):n(t)}export{ci as default};
