import{j as n}from"./react-UEdzNlUe.js";import{dd as d}from"./vendor-DnY5x8t2.js";import{M as i,S as c}from"./WithTooltip-KJL26V4Q-Cluo7wsc.js";import{T as t}from"./Table.sorting.stories-AMviq70e.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-C2sulCCv.js";import"./@tanstack/react-virtual-BA3RmMS7.js";import"./preload-helper-j-yXN3k7.js";import"./index-Cu4lwwaE.js";import"./index-BS0iAW2I.js";import"./tableData-DKA5H0bF.js";import"./DocStoryTemplate-BT387RgP.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-BppiMsXu.js";import"./index-BX5D65Tl.js";import"./@sddsjs/sdds_finai-D-xd8Ig6.js";import"./@salutejs/sdds-finai-2QW4XiOx.js";import"./Box-CmkBCCp8.js";import"./Collapse-cxu7l_pA.js";import"./utils-NDBGknB_.js";import"./constants-DTh3jAtl.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/plasma-icons-67FHeKcG.js";import"./react-data-grid-gn-LnSw-.js";import"./TableTabs-CfJtCWr8.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-Dc6dleod.js";import"./@glideappsfinal/glide-data-grid-2J2Wx1jC.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-D5RtHXQZ.js";import"./sharedUiSearch-CoeTfsOr.js";import"./TextField-DXOe7TwE.js";import"./sharedUtilsInputs-BEEVjYrl.js";import"./TypographyWithAutoTooltip-DyfRXyRD.js";import"./Typography-CTBLgXaA.js";import"./ListOfFilters-CClYEnvR.js";import"./FiltersActions-41lXv-ok.js";import"./IconButton-pD4wRJBG.js";import"./TooltipList-DyLslyRz.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-DkYs5ioR.js";import"./NumberFormat-KGmYOFb9.js";import"./EmptyState-Clcxu70W.js";import"./unidentified@3x-DP8hWoDe.js";import"./MassActions-BUdib6KL.js";import"./Autocomplete-BHfvRrfM.js";function s(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:t,name:"Docs"}),`
`,n.jsx(r.h1,{id:"sorting",children:"Sorting"}),`
`,n.jsx(r.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Сортировка по колонкам"}),`
`,n.jsx(r.li,{children:"Строковый, числовой и кастомный компаратор"}),`
`,n.jsx(r.li,{children:"Ручная сортировка для серверных сценариев"}),`
`]}),`
`,n.jsxs(r.p,{children:["Компонент ",n.jsx(r.code,{children:"Table"})," поддерживает сортировку данных по колонкам."]}),`
`,n.jsx(r.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,n.jsx(r.p,{children:"Для включения сортировки необходимо:"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:["Передать ",n.jsx(r.code,{children:"sorting"})," в ",n.jsx(r.code,{children:"tableConfig"})]}),`
`,n.jsxs(r.li,{children:["Указать ",n.jsx(r.code,{children:"sortingType"})," в конфигурации колонок"]}),`
`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const sortingState = useState<readonly SortColumn[]>([]);

<Table
  tableConfig={{
    sorting: {
      state: sortingState,
    },
  }}
  columnConfig={[
    { key: 'name', name: 'Название', sortingType: 'stringSort' },
    { key: 'amount', name: 'Сумма', sortingType: 'numberSort' },
  ]}
  rows={rows}
/>;
`})}),`
`,n.jsx(r.h2,{id:"стратегии-сортировки",children:"Стратегии сортировки"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"sortingType"}),n.jsx("th",{children:"Когда использовать"}),n.jsx("th",{children:"Пример данных"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"stringSort"})}),n.jsx("td",{children:"Текстовые поля, названия, описания"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:'"Яблоко"'}),", ",n.jsx("code",{children:'"Apple"'}),", ",n.jsx("code",{children:'"100 дней"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"numberSort"})}),n.jsx("td",{children:"Числа, ID, коды (даже строковые)"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:'"42"'}),", ",n.jsx("code",{children:'"1 000"'}),", ",n.jsx("code",{children:'"3,14"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Comparator<Row>"})}),n.jsx("td",{children:"Кастомная логика (enum-приоритеты, даты, и т.д.)"}),n.jsx("td",{children:n.jsx("code",{children:"Critical → High → Medium → Low"})})]})]})]}),`
`,n.jsx(r.h3,{id:"stringsort",children:"stringSort"}),`
`,n.jsx(r.p,{children:"Строковое сравнение с учётом русской локали."}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Строковые числа сортируются как числа: ",n.jsx(r.code,{children:'"2" < "10"'})," (не посимвольно)"]}),`
`,n.jsxs(r.li,{children:["Регистр не влияет: ",n.jsx(r.code,{children:'"яблоко"'})," = ",n.jsx(r.code,{children:'"Яблоко"'})]}),`
`,n.jsx(r.li,{children:"Пустые значения всегда внизу"}),`
`]}),`
`,n.jsxs(r.p,{children:["Порядок символов при ASC (локаль ",n.jsx(r.code,{children:"'ru'"}),"):"]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Порядок"}),n.jsx("th",{children:"Категория"}),n.jsx("th",{children:"Пример"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"1"}),n.jsx("td",{children:"Спецсимволы"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:'"#tag"'}),", ",n.jsx("code",{children:'"@user"'}),", ",n.jsx("code",{children:'"-"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"2"}),n.jsx("td",{children:"Цифры"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:'"31.10"'}),", ",n.jsx("code",{children:'"100"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"3"}),n.jsx("td",{children:"Кириллица"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:'"Авто"'}),", ",n.jsx("code",{children:'"Яблоко"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"4"}),n.jsx("td",{children:"Латиница"}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:'"Apple"'}),", ",n.jsx("code",{children:'"MYCHANGE"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"—"}),n.jsx("td",{children:"Пустые"}),n.jsx("td",{children:"Всегда внизу"})]})]})]}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsx(r.p,{children:`Порядок между кириллицей и латиницей определяется русской локалью браузера — кириллица
идёт первой.`}),`
`]}),`
`,n.jsx(r.h3,{id:"numbersort",children:"numberSort"}),`
`,n.jsx(r.p,{children:"Числовое сравнение с поддержкой локальных форматов."}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Входное значение"}),n.jsx("th",{children:"Результат"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'"42"'})}),n.jsx("td",{children:n.jsx("code",{children:"42"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'"1 000"'})}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:"1000"})," (пробелы-разделители)"]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'"3,14"'})}),n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:"3.14"})," (запятая как десятичный)"]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(r.p,{children:[n.jsx("code",{children:'"abc"'}),", ",n.jsx("code",{children:'""'})]})}),n.jsx("td",{children:"Уходят вниз"})]})]})]}),`
`,n.jsx(r.h3,{id:"кастомный-компаратор",children:"Кастомный компаратор"}),`
`,n.jsxs(r.p,{children:["Функция ",n.jsx(r.code,{children:"(a: Row, b: Row) => number"}),". Направление (ASC/DESC) применяется автоматически."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`{
  key: 'priority',
  name: 'Приоритет',
  sortingType: (a, b) => {
    const order = { Critical: 0, High: 1, Medium: 2, Low: 3 };
    return (order[a.priority] ?? 99) - (order[b.priority] ?? 99);
  },
}
`})}),`
`,n.jsx(r.h2,{id:"направление-сортировки",children:"Направление сортировки"}),`
`,n.jsx(r.p,{children:"Клик по заголовку переключает направление циклически:"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"нет сортировки → ASC (↓) → DESC (↑) → нет сортировки"})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Иконка"}),n.jsx("th",{children:"Направление"}),n.jsx("th",{children:"Описание"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"↓"}),n.jsx("td",{children:"ASC"}),n.jsx("td",{children:"По возрастанию (от меньшего к большему)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"↑"}),n.jsx("td",{children:"DESC"}),n.jsx("td",{children:"По убыванию (от большего к меньшему)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"↕"}),n.jsx("td",{children:"—"}),n.jsx("td",{children:"Сортировка не активна"})]})]})]}),`
`,n.jsxs(r.p,{children:["Пустые значения (",n.jsx(r.code,{children:"null"}),", ",n.jsx(r.code,{children:"undefined"}),", ",n.jsx(r.code,{children:'""'}),", строка из пробелов) всегда остаются внизу, независимо от направления."]}),`
`,n.jsx(r.h2,{id:"серверная-сортировка",children:"Серверная сортировка"}),`
`,n.jsxs(r.p,{children:["Если сортировка выполняется на бэкенде, включите ",n.jsx(r.code,{children:"manualSorting"}),". Таблица не будет сортировать данные сама, но будет обновлять ",n.jsx(r.code,{children:"state"})," при кликах по заголовкам."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

// Реагируем на изменение sortColumns и делаем запрос на сервер
useEffect(() => {
  fetchData({ sort: sortColumns });
}, [sortColumns]);

<Table
  tableConfig={{
    sorting: {
      state: [sortColumns, setSortColumns],
      manualSorting: true,
    },
  }}
  ...
/>
`})}),`
`,n.jsx(r.h2,{id:"api",children:"API"}),`
`,n.jsxs(r.p,{children:["Подробное описание типов доступно в разделе ",n.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-sorting-api--docs",children:"API"}),"."]}),`
`,n.jsx(c,{})]})}function dn(e={}){const{wrapper:r}={...d(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{dn as default};
