import{j as i}from"./react-DYHuXpTF.js";import{dd as s}from"./vendor-DQaMhftP.js";import{M as e,S as t}from"./WithTooltip-KJL26V4Q-1FXogNTQ.js";import{T as l}from"./Table.pagination.stories-BnWT9_9G.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CT-rZfBU.js";import"./styled-components-C3-Vg48S.js";import"./@tanstack/react-virtual-EEUi7wi6.js";import"./preload-helper-DeA7wft2.js";import"./index-Cu4lwwaE.js";import"./index-HOiRhji7.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BHnLMKCH.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-YGbaAyPa.js";import"./Switch-BJtGJ7E8.js";import"./@sddsjs/sdds_finai-CcsTvjys.js";import"./@salutejs/sdds-finai-BHH5Fs72.js";import"./Box-DwiKSnnX.js";import"./Collapse-mn0OPShb.js";import"./utils-DbMTrPCQ.js";import"./constants-Des9Datc.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-DAdkqmmH.js";import"./react-data-grid-BAmL3Ore.js";import"./TableTabs-xg-axVyL.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-ZuQdWAms.js";import"./@daisforge/glide-data-grid-DEmeTUkH.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./sharedUiSearch-D9vvmgmn.js";import"./TextField-CpM1ruNd.js";import"./sharedUtilsInputs-Cpm75s12.js";import"./TypographyWithAutoTooltip-ibNnqeyt.js";import"./Typography-BW5h57NG.js";import"./ListOfFilters-DwBbogbq.js";import"./FiltersActions-qpgDCeB9.js";import"./IconButton-DBKuef6W.js";import"./TooltipList-BajRDP8T.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BxkYMH6M.js";import"./NumberFormat-C5OZsM5x.js";import"./EmptyState-5aZv2zr1.js";import"./unidentified@3x-iHLYaSSf.js";import"./MassActions-BiGv-ZJd.js";import"./Autocomplete-C64AwXFK.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(e,{of:l,name:"Docs"}),`
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
