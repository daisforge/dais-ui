import{j as n}from"./react-D2T61mpp.js";import{cg as r,ch as e,ca as t}from"./vendor-B33akBqD.js";import{T as l}from"./Table.pagination.stories-bgbTg29_.js";import"./react-is-Clcustum.js";import"./styled-components-2LxXxey2.js";import"./@tanstack/react-virtual-DwIFtfPb.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-XIWPSzMt.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-BExlm46n.js";import"./FiltersActions-C8-77odU.js";import"./IconButton-wLWGohZE.js";import"./@salutejs/plasma-icons-DqspQf5c.js";import"./@salutejs/sdds-finai-Ci2UNlq-.js";import"./@sddsjs/sdds_finai-Clnx3I02.js";import"./utils-srMa-YXa.js";import"./constants-ChwOYBdp.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-4jpQtsZP.js";import"./TextField-VAW0du4Z.js";import"./sharedUtilsInputs-qz6l_5Rz.js";import"./AiAgentPopup-B4T1wGky.js";import"./TextArea-BmaW7lR3.js";import"./sharedUtilsResizable-C9oirFbH.js";import"./@salutejs/sdds-themes-xIOWIAKk.js";import"./Collapse-DzXRiLil.js";import"./react-data-grid-CR290E7g.js";import"./TableTabs-DlfHPhi2.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide--uu2FiPY.js";import"./@glideappsfinal/glide-data-grid-CPHih2Cw.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-Cel3Zadq.js";import"./ListOfFilters-BZnzyo_x.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CFTYKpem.js";import"./EmptyState-BWfkRvB5.js";import"./MassActions-DtyT_v2Y.js";import"./Autocomplete-BKC5mPtm.js";function s(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{of:l,name:"Docs"}),`
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
`,n.jsx(t,{})]})}function Q(o={}){const{wrapper:i}={...r(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(s,{...o})}):s(o)}export{Q as default};
