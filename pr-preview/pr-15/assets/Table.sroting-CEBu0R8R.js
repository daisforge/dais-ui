import{j as n}from"./react-D2T61mpp.js";import{c2 as d,c3 as i,bY as c}from"./vendor-CV0MVVDJ.js";import{T as l}from"./Table.sorting.stories-BBL3_DAx.js";import"./react-is-Clcustum.js";import"./styled-components-hCehVAWp.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-CiJvtnff.js";import"./storySourceDoc-tVKyHcEN.js";import"./Table-DNt0LgGn.js";import"./FiltersActions-DAuoKCPb.js";import"./IconButton-CODpfw5D.js";import"./@salutejs/plasma-icons-DZ_o-Gth.js";import"./@salutejs/sdds-finai-B-0ptCmf.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C0WMdwDu.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-DsmSYh_i.js";import"./TextField--fwN14Bg.js";import"./sharedUtilsInputs-GU7HwQ4Q.js";import"./AnalyticalWidget-D-6CFbtI.js";import"./Collapse-DhcWvyuO.js";import"./react-data-grid-D7tRzmcy.js";import"./TableTabs-CIYAJ1UT.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-B7Cebhwz.js";import"./ListOfFilters-C27o4A3x.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CusDtrAa.js";import"./EmptyState-DhMxOtV6.js";import"./MassActions-B3g5ldSI.js";import"./Autocomplete-BQFFOFMH.js";function s(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:l,name:"Docs"}),`
`,n.jsx(e.h1,{id:"sorting",children:"Sorting"}),`
`,n.jsx(e.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Сортировка по колонкам"}),`
`,n.jsx(e.li,{children:"Строковый, числовой и кастомный компаратор"}),`
`,n.jsx(e.li,{children:"Ручная сортировка для серверных сценариев"}),`
`]}),`
`,n.jsxs(e.p,{children:["Компонент ",n.jsx(e.code,{children:"Table"})," поддерживает сортировку данных по колонкам."]}),`
`,n.jsx(e.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,n.jsx(e.p,{children:"Для включения сортировки необходимо:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Передать ",n.jsx(e.code,{children:"sorting"})," в ",n.jsx(e.code,{children:"tableConfig"})]}),`
`,n.jsxs(e.li,{children:["Указать ",n.jsx(e.code,{children:"sortingType"})," в конфигурации колонок"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const sortingState = useState<readonly SortColumn[]>([]);

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
`,n.jsx(e.h2,{id:"стратегии-сортировки",children:"Стратегии сортировки"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"sortingType"}),n.jsx("th",{children:"Когда использовать"}),n.jsx("th",{children:"Пример данных"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"stringSort"})}),n.jsx("td",{children:"Текстовые поля, названия, описания"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:'"Яблоко"'}),", ",n.jsx("code",{children:'"Apple"'}),", ",n.jsx("code",{children:'"100 дней"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"numberSort"})}),n.jsx("td",{children:"Числа, ID, коды (даже строковые)"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:'"42"'}),", ",n.jsx("code",{children:'"1 000"'}),", ",n.jsx("code",{children:'"3,14"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"Comparator<Row>"})}),n.jsx("td",{children:"Кастомная логика (enum-приоритеты, даты, и т.д.)"}),n.jsx("td",{children:n.jsx("code",{children:"Critical → High → Medium → Low"})})]})]})]}),`
`,n.jsx(e.h3,{id:"stringsort",children:"stringSort"}),`
`,n.jsx(e.p,{children:"Строковое сравнение с учётом русской локали."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Строковые числа сортируются как числа: ",n.jsx(e.code,{children:'"2" < "10"'})," (не посимвольно)"]}),`
`,n.jsxs(e.li,{children:["Регистр не влияет: ",n.jsx(e.code,{children:'"яблоко"'})," = ",n.jsx(e.code,{children:'"Яблоко"'})]}),`
`,n.jsx(e.li,{children:"Пустые значения всегда внизу"}),`
`]}),`
`,n.jsxs(e.p,{children:["Порядок символов при ASC (локаль ",n.jsx(e.code,{children:"'ru'"}),"):"]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Порядок"}),n.jsx("th",{children:"Категория"}),n.jsx("th",{children:"Пример"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"1"}),n.jsx("td",{children:"Спецсимволы"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:'"#tag"'}),", ",n.jsx("code",{children:'"@user"'}),", ",n.jsx("code",{children:'"-"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"2"}),n.jsx("td",{children:"Цифры"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:'"31.10"'}),", ",n.jsx("code",{children:'"100"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"3"}),n.jsx("td",{children:"Кириллица"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:'"Авто"'}),", ",n.jsx("code",{children:'"Яблоко"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"4"}),n.jsx("td",{children:"Латиница"}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:'"Apple"'}),", ",n.jsx("code",{children:'"MYCHANGE"'})]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"—"}),n.jsx("td",{children:"Пустые"}),n.jsx("td",{children:"Всегда внизу"})]})]})]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`Порядок между кириллицей и латиницей определяется русской локалью браузера — кириллица
идёт первой.`}),`
`]}),`
`,n.jsx(e.h3,{id:"numbersort",children:"numberSort"}),`
`,n.jsx(e.p,{children:"Числовое сравнение с поддержкой локальных форматов."}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Входное значение"}),n.jsx("th",{children:"Результат"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'"42"'})}),n.jsx("td",{children:n.jsx("code",{children:"42"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'"1 000"'})}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:"1000"})," (пробелы-разделители)"]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'"3,14"'})}),n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:"3.14"})," (запятая как десятичный)"]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs(e.p,{children:[n.jsx("code",{children:'"abc"'}),", ",n.jsx("code",{children:'""'})]})}),n.jsx("td",{children:"Уходят вниз"})]})]})]}),`
`,n.jsx(e.h3,{id:"кастомный-компаратор",children:"Кастомный компаратор"}),`
`,n.jsxs(e.p,{children:["Функция ",n.jsx(e.code,{children:"(a: Row, b: Row) => number"}),". Направление (ASC/DESC) применяется автоматически."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`{
  key: 'priority',
  name: 'Приоритет',
  sortingType: (a, b) => {
    const order = { Critical: 0, High: 1, Medium: 2, Low: 3 };
    return (order[a.priority] ?? 99) - (order[b.priority] ?? 99);
  },
}
`})}),`
`,n.jsx(e.h2,{id:"направление-сортировки",children:"Направление сортировки"}),`
`,n.jsx(e.p,{children:"Клик по заголовку переключает направление циклически:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"нет сортировки → ASC (↓) → DESC (↑) → нет сортировки"})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Иконка"}),n.jsx("th",{children:"Направление"}),n.jsx("th",{children:"Описание"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"↓"}),n.jsx("td",{children:"ASC"}),n.jsx("td",{children:"По возрастанию (от меньшего к большему)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"↑"}),n.jsx("td",{children:"DESC"}),n.jsx("td",{children:"По убыванию (от большего к меньшему)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"↕"}),n.jsx("td",{children:"—"}),n.jsx("td",{children:"Сортировка не активна"})]})]})]}),`
`,n.jsxs(e.p,{children:["Пустые значения (",n.jsx(e.code,{children:"null"}),", ",n.jsx(e.code,{children:"undefined"}),", ",n.jsx(e.code,{children:'""'}),", строка из пробелов) всегда остаются внизу, независимо от направления."]}),`
`,n.jsx(e.h2,{id:"серверная-сортировка",children:"Серверная сортировка"}),`
`,n.jsxs(e.p,{children:["Если сортировка выполняется на бэкенде, включите ",n.jsx(e.code,{children:"manualSorting"}),". Таблица не будет сортировать данные сама, но будет обновлять ",n.jsx(e.code,{children:"state"})," при кликах по заголовкам."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

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
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsxs(e.p,{children:["Подробное описание типов доступно в разделе ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-table-sorting-api--docs",children:"API"}),"."]}),`
`,n.jsx(c,{})]})}function _(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{_ as default};
