import{j as n}from"./react-D2T61mpp.js";import{c6 as i,c7 as o,c0 as c}from"./vendor-D0k-bL4H.js";import{T as l}from"./TableCanvas.sorting.stories-DruDMY_A.js";import"./react-is-Clcustum.js";import"./styled-components-D8vUpZ79.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-EGzZCWcK.js";import"./FiltersActions-DFYvS86u.js";import"./IconButton-BwsXIhiD.js";import"./@salutejs/plasma-icons-B2gARaIt.js";import"./@salutejs/sdds-finai-9f2Z3gSc.js";import"./@salutejs/sdds-themes-DJNx_lJj.js";import"./utils-BsIKPznQ.js";import"./constants-OzzdGdGS.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-oT8vEc87.js";import"./TextField-D9SAbnRq.js";import"./sharedUtilsInputs-BpFlkwj3.js";import"./AnalyticalWidget-C_YOIqNy.js";import"./Collapse-DGqYHNo_.js";import"./Table-Bo3uZOST.js";import"./react-data-grid-p-wBMMSv.js";import"./TableTabs-bchgDMaK.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-WI14EhMn.js";import"./ListOfFilters-CTJFIH40.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C94N8voO.js";import"./EmptyState-CzQ_YjnV.js";import"./MassActions-D1nnBd7w.js";import"./Autocomplete-B7lvUJkZ.js";import"./TableGlide-DzeiQf28.js";import"./@glideappsfinal/glide-data-grid-uBYBN4Je.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BnEFvPen.js";function s(r){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l,name:"Docs"}),`
`,n.jsx(e.h1,{id:"sorting",children:"Sorting"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"tableConfig.sorting + columnConfig.sortingType"})}),`
`,n.jsx(e.p,{children:"Сортировка данных по колонкам."}),`
`,n.jsx(e.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,n.jsx(e.p,{children:"Для включения сортировки необходимо:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Передать ",n.jsx(e.code,{children:"sorting"})," в ",n.jsx(e.code,{children:"tableConfig"})]}),`
`,n.jsxs(e.li,{children:["Указать ",n.jsx(e.code,{children:"sortingType"})," в конфигурации колонок"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const sortingState = useState<readonly SortColumn[]>([]);

<TableCanvas
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
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"'stringSort'"})})," — текстовые поля, названия, описания. Пример: ",n.jsx(e.code,{children:'"Яблоко"'}),", ",n.jsx(e.code,{children:'"Apple"'}),", ",n.jsx(e.code,{children:'"100 дней"'})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"'numberSort'"})})," — числа, ID, коды (даже строковые). Пример: ",n.jsx(e.code,{children:'"42"'}),", ",n.jsx(e.code,{children:'"1 000"'}),", ",n.jsx(e.code,{children:'"3,14"'})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"Comparator<Row>"})})," — кастомная логика (enum-приоритеты, даты, и т.д.). Пример: ",n.jsx(e.code,{children:"Critical → High → Medium → Low"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"stringsort",children:"stringSort"}),`
`,n.jsx(e.p,{children:"Строковое сравнение с учётом русской локали."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Строковые числа сортируются как числа: ",n.jsx(e.code,{children:'"2" < "10"'})," (не посимвольно)"]}),`
`,n.jsxs(e.li,{children:["Регистр не влияет: ",n.jsx(e.code,{children:'"яблоко"'})," = ",n.jsx(e.code,{children:'"Яблоко"'})]}),`
`,n.jsx(e.li,{children:"Пустые значения всегда внизу"}),`
`]}),`
`,n.jsxs(e.p,{children:["Порядок символов при ASC (локаль ",n.jsx(e.code,{children:"'ru'"}),"):"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Спецсимволы — ",n.jsx(e.code,{children:'"#tag"'}),", ",n.jsx(e.code,{children:'"@user"'}),", ",n.jsx(e.code,{children:'"-"'})]}),`
`,n.jsxs(e.li,{children:["Цифры — ",n.jsx(e.code,{children:'"31.10"'}),", ",n.jsx(e.code,{children:'"100"'})]}),`
`,n.jsxs(e.li,{children:["Кириллица — ",n.jsx(e.code,{children:'"Авто"'}),", ",n.jsx(e.code,{children:'"Яблоко"'})]}),`
`,n.jsxs(e.li,{children:["Латиница — ",n.jsx(e.code,{children:'"Apple"'}),", ",n.jsx(e.code,{children:'"MYCHANGE"'})]}),`
`,n.jsx(e.li,{children:"Пустые — всегда внизу"}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Порядок между кириллицей и латиницей определяется русской локалью браузера — кириллица идёт первой."}),`
`]}),`
`,n.jsx(e.h3,{id:"numbersort",children:"numberSort"}),`
`,n.jsx(e.p,{children:"Числовое сравнение с поддержкой локальных форматов."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'"42"'})," → ",n.jsx(e.code,{children:"42"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'"1 000"'})," → ",n.jsx(e.code,{children:"1000"})," (пробелы-разделители)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'"3,14"'})," → ",n.jsx(e.code,{children:"3.14"})," (запятая как десятичный)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:'"abc"'}),", ",n.jsx(e.code,{children:'""'})," → уходят вниз"]}),`
`]}),`
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
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"↓ ASC"})," — по возрастанию (от меньшего к большему)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"↑ DESC"})," — по убыванию (от большего к меньшему)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"↕"})," — сортировка не активна"]}),`
`]}),`
`,n.jsxs(e.p,{children:["Пустые значения (",n.jsx(e.code,{children:"null"}),", ",n.jsx(e.code,{children:"undefined"}),", ",n.jsx(e.code,{children:'""'}),", строка из пробелов) всегда остаются внизу, независимо от направления."]}),`
`,n.jsx(e.h2,{id:"серверная-сортировка",children:"Серверная сортировка"}),`
`,n.jsxs(e.p,{children:["Если сортировка выполняется на бэкенде, включите ",n.jsx(e.code,{children:"manualSorting"}),". Таблица не будет сортировать данные сама, но будет обновлять ",n.jsx(e.code,{children:"state"})," при кликах по заголовкам."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

// Реагируем на изменение sortColumns и делаем запрос на сервер
useEffect(() => {
  fetchData({ sort: sortColumns });
}, [sortColumns]);

<TableCanvas
  tableConfig={{
    sorting: {
      state: [sortColumns, setSortColumns],
      manualSorting: true,
    },
  }}
  ...
/>
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Подробнее о типах — ",n.jsx(e.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-sorting-api--docs",children:"Sorting API"})]}),`
`]}),`
`,n.jsx(c,{})]})}function J(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{J as default};
