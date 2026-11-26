import{j as i}from"./react-DYHuXpTF.js";import{dd as s}from"./vendor-BpmB3NYD.js";import{M as e,S as t}from"./WithTooltip-KJL26V4Q-D-_6HSfR.js";import{T as l}from"./Table.pagination.stories-Dws0kYs5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-BADHLMuD.js";import"./@tanstack/react-virtual-uAYy1xUY.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-BUhspFdO.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-CN0PPLJ2.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-Da0nMm5b.js";import"./Switch-yg_3Nt0z.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-DJh4O7Qc.js";import"./Box-Juih1CKQ.js";import"./Collapse-Cm4Vf7gU.js";import"./utils-Cdl8HW_v.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-CbqEe6UO.js";import"./react-data-grid-BzGHn5KJ.js";import"./TableTabs-CmYboMCL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-yAwhXllS.js";import"./@daisforge/glide-data-grid-Y_60-FtF.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-DOQDSS1t.js";import"./TextField-CNv1rZv2.js";import"./sharedUtilsInputs-BcOwa6yM.js";import"./TypographyWithAutoTooltip-DoRVGUsc.js";import"./Typography-DrjV5Wmt.js";import"./ListOfFilters-DBouarlG.js";import"./FiltersActions-BfFXA-oM.js";import"./IconButton-D0PB5P2c.js";import"./TooltipList-CSPnrynf.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-Ds_J4bAC.js";import"./NumberFormat-M1V5HNNz.js";import"./EmptyState-B787XssQ.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-BKOQQDDW.js";import"./Autocomplete-DCmEDwiz.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(e,{of:l,name:"Docs"}),`
`,i.jsx(n.h1,{id:"table-pagination",children:"Table Pagination"}),`
`,i.jsx(n.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Клиентская и ручная пагинация"}),`
`,i.jsx(n.li,{children:"Контроль страницы и размера страницы"}),`
`,i.jsx(n.li,{children:"Отключение дефолтного поиска, сортировки и фильтрации при активной пагинации"}),`
`]}),`
`,i.jsx(n.p,{children:i.jsx(n.strong,{children:"tableConfig.pagination"})}),`
`,i.jsxs(n.p,{children:["Таблица поддерживает пагинацию. Для активации функционала в ",i.jsx(n.code,{children:"tableConfig"})," заполняется ",i.jsx(n.code,{children:"pagination"}),"."]}),`
`,i.jsx(n.h2,{id:"особенности-работы-с-пагинацией",children:"Особенности работы с пагинацией:"}),`
`,i.jsx(n.h3,{id:"отключение-дефолтной-сортировки-и-фильтрации",children:"Отключение дефолтной сортировки и фильтрации"}),`
`,i.jsxs(n.p,{children:["При активации ",i.jsx(n.code,{children:"pagination"}),` отключается дефолтная сортировка и фильтрация.
Нужно использовать версии данных фичей с ручным управлением. Например, для отправки на бэкенд выбранных фильтров и сортировки.`]}),`
`,i.jsxs(n.p,{children:[i.jsx(n.strong,{children:"Причина:"}),` Предполагается, что если есть pagination, то в таблице представлен не весь объем данных,
по этой причине дефолтная сортировка и фильтрация не подходят и будут отображать некорректные данные.`]}),`
`,i.jsx(n.h3,{id:"адаптивные-slots",children:"Адаптивные slots"}),`
`,i.jsxs(n.p,{children:["По умолчанию ВЫКЛЮЧЕНА умная адаптация количества slots пагинации в зависимости от ширины контейнера таблицы и размера пагинации (",i.jsx(n.code,{children:"size"}),")."]}),`
`,i.jsx(n.p,{children:"Принцип работы:"}),`
`,i.jsxs(n.p,{children:["При достижении минимальной ширины контейнера, когда остается только 1 slot под номер текущей страницы, автоматически отображаются навигационные стрелки в ",i.jsx(n.code,{children:"leftContent"})," и ",i.jsx(n.code,{children:"rightContent"})," для переключения между страницами."]}),`
`,i.jsxs(n.p,{children:["Эту функциональность можно включить, установив ",i.jsx(n.code,{children:"responsiveSlots: true"}),", тогда количество slots будет фиксированным (задавать ",i.jsx(n.code,{children:"slots"})," в props в таком случае не нужно), важно будет указать ",i.jsx(n.code,{children:"value"})," в props для пагинации, как значение текущей выбранной страницы, все будет работать под капотом."]}),`
`,i.jsx(n.h2,{id:"основная-информация",children:"Основная информация"}),`
`,i.jsxs(n.p,{children:["С основной информацией по компоненту Пагинации можно ознакомиться по ",i.jsx(n.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/pagination/",rel:"nofollow",children:"ссылке на SDDS Pagination"})]}),`
`,i.jsx(n.h2,{id:"изменения-в-api-относительно-sdds-pagination",children:"Изменения в API относительно SDDS Pagination:"}),`
`,i.jsx(n.h3,{id:"1-измененные-пропсы",children:"1. Измененные пропсы:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:i.jsx(n.code,{children:"onChangePageValue"})})," - добавлен параметр ",i.jsx(n.code,{children:"scrollToTop: () => void"})," для автоматического скролла к началу новой страницы"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:i.jsx(n.code,{children:"onChange"})})," - добавлен параметр ",i.jsx(n.code,{children:"scrollToTop: () => void"})," для автоматического скролла к началу новой страницы"]}),`
`]}),`
`,i.jsx(n.h3,{id:"2-дополнительные-пропсы",children:"2. Дополнительные пропсы:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:i.jsx(n.code,{children:"responsiveSlots"})})," - включение/выключение умной адаптации slots (по умолчанию ",i.jsx(n.code,{children:"true"}),")"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:i.jsx(n.code,{children:"onResize"})})," - callback при изменении ширины контейнера пагинации"]}),`
`]}),`
`,i.jsxs(n.p,{children:["Описание типов - в разделе ",i.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-pagination-api--docs",children:"API"}),"."]}),`
`,i.jsx(t,{})]})}function ri(o={}){const{wrapper:n}={...s(),...o.components};return n?i.jsx(n,{...o,children:i.jsx(r,{...o})}):r(o)}export{ri as default};
