import{j as n}from"./react-D2T61mpp.js";import{cg as e,ch as r,ca as t}from"./vendor-DnzZ9UTZ.js";import{T as l}from"./Table.pagination.stories-BwNESKoS.js";import"./react-is-Clcustum.js";import"./styled-components-Duv-lZes.js";import"./@tanstack/react-virtual-DuiQXsFz.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-JszTZfrB.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-CDbQJOTu.js";import"./FiltersActions-5QPc72Dp.js";import"./IconButton-BB0DmyOh.js";import"./@salutejs/plasma-icons-CBo6sATl.js";import"./@salutejs/sdds-finai-BZdsFt-V.js";import"./@salutejs/sdds-themes-BWS17lsS.js";import"./utils-Cd1k1OL_.js";import"./constants-BEafpjqR.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-B2j6LtZn.js";import"./TextField-COf2WnW_.js";import"./sharedUtilsInputs-ahqf-2wM.js";import"./AnalyticalWidget-BcLvzPBA.js";import"./Collapse-DVtw0dkZ.js";import"./react-data-grid-C4_2LtGD.js";import"./TableTabs-nBzQgXom.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-CdoM9SkI.js";import"./ListOfFilters-iWnI-MJ6.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-MJ7xUvix.js";import"./EmptyState-T6Y8UEI6.js";import"./MassActions-BJnMTdqe.js";import"./Autocomplete-BFOXp6vh.js";function o(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...e(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l,name:"Docs"}),`
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
`,n.jsx(t,{})]})}function G(s={}){const{wrapper:i}={...e(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(o,{...s})}):o(s)}export{G as default};
