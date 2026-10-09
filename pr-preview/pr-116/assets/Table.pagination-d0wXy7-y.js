import{j as n}from"./react-D2T61mpp.js";import{cg as r,ch as e,ca as t}from"./vendor-Cerwdjts.js";import{T as l}from"./Table.pagination.stories-nMVnksCv.js";import"./react-is-Clcustum.js";import"./styled-components-DhAJwv5z.js";import"./@tanstack/react-virtual-_irdOaea.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CrvtEn2a.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-CcZ0ds_H.js";import"./FiltersActions-g6L0vwIk.js";import"./IconButton-DFMykKti.js";import"./@salutejs/plasma-icons-Dhq832vT.js";import"./@salutejs/sdds-finai-DztqpKP7.js";import"./@salutejs/sdds-themes-DL6tmVfr.js";import"./utils-BElZzUmp.js";import"./constants-rCJTDDk_.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DV_u0Ftj.js";import"./TextField-HUZgltLn.js";import"./sharedUtilsInputs-0JObiuav.js";import"./AiAgentPopup-D3kyWGJG.js";import"./TextArea-D2LyAITr.js";import"./sharedUtilsResizable-B0q5Zavu.js";import"./Collapse-CcsxObAw.js";import"./react-data-grid-BzvGL-VS.js";import"./TableTabs-B3ToYV3h.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CBLdPq7f.js";import"./ListOfFilters-BHHIPZib.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-QJCyNH_R.js";import"./EmptyState-BMpkaTQs.js";import"./MassActions-SmVYtLju.js";import"./Autocomplete-D1xCL2Jp.js";function o(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{of:l,name:"Docs"}),`
`,n.jsx(i.h1,{id:"table-pagination",children:"Table Pagination"}),`
`,n.jsx(i.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Клиентская и ручная пагинация"}),`
`,n.jsx(i.li,{children:"Контроль страницы и размера страницы"}),`
`,n.jsx(i.li,{children:"Отключение дефолтного поиска, сортировки и фильтрации при активной пагинации"}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"tableConfig.pagination"})}),`
`,n.jsxs(i.p,{children:["Таблица поддерживает пагинацию. Для активации функционала в ",n.jsx(i.code,{children:"tableConfig"})," заполняется ",n.jsx(i.code,{children:"pagination"}),"."]}),`
`,n.jsx(i.h2,{id:"особенности-работы-с-пагинацией",children:"Особенности работы с пагинацией:"}),`
`,n.jsx(i.h3,{id:"отключение-дефолтной-сортировки-и-фильтрации",children:"Отключение дефолтной сортировки и фильтрации"}),`
`,n.jsxs(i.p,{children:["При активации ",n.jsx(i.code,{children:"pagination"}),` отключается дефолтная сортировка и фильтрация.
Нужно использовать версии данных фичей с ручным управлением. Например, для отправки на бэкенд выбранных фильтров и сортировки.`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Причина:"}),` Предполагается, что если есть pagination, то в таблице представлен не весь объем данных,
по этой причине дефолтная сортировка и фильтрация не подходят и будут отображать некорректные данные.`]}),`
`,n.jsx(i.h3,{id:"адаптивные-slots",children:"Адаптивные slots"}),`
`,n.jsxs(i.p,{children:["По умолчанию ВЫКЛЮЧЕНА умная адаптация количества slots пагинации в зависимости от ширины контейнера таблицы и размера пагинации (",n.jsx(i.code,{children:"size"}),")."]}),`
`,n.jsx(i.p,{children:"Принцип работы:"}),`
`,n.jsxs(i.p,{children:["При достижении минимальной ширины контейнера, когда остается только 1 slot под номер текущей страницы, автоматически отображаются навигационные стрелки в ",n.jsx(i.code,{children:"leftContent"})," и ",n.jsx(i.code,{children:"rightContent"})," для переключения между страницами."]}),`
`,n.jsxs(i.p,{children:["Эту функциональность можно включить, установив ",n.jsx(i.code,{children:"responsiveSlots: true"}),", тогда количество slots будет фиксированным (задавать ",n.jsx(i.code,{children:"slots"})," в props в таком случае не нужно), важно будет указать ",n.jsx(i.code,{children:"value"})," в props для пагинации, как значение текущей выбранной страницы, все будет работать под капотом."]}),`
`,n.jsx(i.h2,{id:"основная-информация",children:"Основная информация"}),`
`,n.jsxs(i.p,{children:["С основной информацией по компоненту Пагинации можно ознакомиться по ",n.jsx(i.a,{href:"https://plasma.sberdevices.ru/sdds-finai/components/pagination/",rel:"nofollow",children:"ссылке на SDDS Pagination"})]}),`
`,n.jsx(i.h2,{id:"изменения-в-api-относительно-sdds-pagination",children:"Изменения в API относительно SDDS Pagination:"}),`
`,n.jsx(i.h3,{id:"1-измененные-пропсы",children:"1. Измененные пропсы:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"onChangePageValue"})})," - добавлен параметр ",n.jsx(i.code,{children:"scrollToTop: () => void"})," для автоматического скролла к началу новой страницы"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"onChange"})})," - добавлен параметр ",n.jsx(i.code,{children:"scrollToTop: () => void"})," для автоматического скролла к началу новой страницы"]}),`
`]}),`
`,n.jsx(i.h3,{id:"2-дополнительные-пропсы",children:"2. Дополнительные пропсы:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"responsiveSlots"})})," - включение/выключение умной адаптации slots (по умолчанию ",n.jsx(i.code,{children:"true"}),")"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.code,{children:"onResize"})})," - callback при изменении ширины контейнера пагинации"]}),`
`]}),`
`,n.jsxs(i.p,{children:["Описание типов - в разделе ",n.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-pagination-api--docs",children:"API"}),"."]}),`
`,n.jsx(t,{})]})}function J(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(o,{...s})}):o(s)}export{J as default};
