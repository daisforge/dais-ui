import{j as n}from"./react-D2T61mpp.js";import{cg as i,ch as o,ca as c}from"./vendor-BKzBKp-G.js";import{T as l}from"./TableCanvas.sorting.stories-BRevBktz.js";import"./react-is-Clcustum.js";import"./styled-components-B0QSSFGC.js";import"./@tanstack/react-virtual-yxDq1gd0.js";import"./tslib-DoU9Jm1N.js";import"./tableData-UCfjiBCh.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D9DtTkJK.js";import"./FiltersActions-D8H2yrCS.js";import"./IconButton-D7rFhGwi.js";import"./@salutejs/plasma-icons-CASXnT9E.js";import"./@salutejs/sdds-finai-Dt-uBSnb.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-DryTuyeA.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-cM6oiJLU.js";import"./TextField-DLx88NRH.js";import"./sharedUtilsInputs-CydhYski.js";import"./AnalyticalWidget-D639izQ-.js";import"./Collapse-VP6s-DVe.js";import"./Table-Dc-6FW5x.js";import"./react-data-grid-at35Z1Ou.js";import"./TableTabs-CnwRaqs5.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-C6t7MqEJ.js";import"./ListOfFilters-BKVXVFhf.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-BTyZAsLJ.js";import"./EmptyState-BIS3MJyj.js";import"./MassActions-B5B7bNv0.js";import"./Autocomplete-BccisocP.js";import"./TableGlide-Co5jR8u9.js";import"./@glideappsfinal/glide-data-grid-KFwAmo6D.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-D1gpeagH.js";function s(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l,name:"Docs"}),`
`,n.jsx(r.h1,{id:"sorting",children:"Sorting"}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"tableConfig.sorting + columnConfig.sortingType"})}),`
`,n.jsx(r.p,{children:"Сортировка данных по колонкам."}),`
`,n.jsx(r.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,n.jsx(r.p,{children:"Для включения сортировки необходимо:"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:["Передать ",n.jsx(r.code,{children:"sorting"})," в ",n.jsx(r.code,{children:"tableConfig"})]}),`
`,n.jsxs(r.li,{children:["Указать ",n.jsx(r.code,{children:"sortingType"})," в конфигурации колонок"]}),`
`]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const sortingState = useState<readonly SortColumn[]>([]);

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
`,n.jsx(r.h2,{id:"стратегии-сортировки",children:"Стратегии сортировки"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:n.jsx(r.code,{children:"'stringSort'"})})," — текстовые поля, названия, описания. Пример: ",n.jsx(r.code,{children:'"Яблоко"'}),", ",n.jsx(r.code,{children:'"Apple"'}),", ",n.jsx(r.code,{children:'"100 дней"'})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:n.jsx(r.code,{children:"'numberSort'"})})," — числа, ID, коды (даже строковые). Пример: ",n.jsx(r.code,{children:'"42"'}),", ",n.jsx(r.code,{children:'"1 000"'}),", ",n.jsx(r.code,{children:'"3,14"'})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:n.jsx(r.code,{children:"Comparator<Row>"})})," — кастомная логика (enum-приоритеты, даты, и т.д.). Пример: ",n.jsx(r.code,{children:"Critical → High → Medium → Low"})]}),`
`]}),`
`,n.jsx(r.h3,{id:"stringsort",children:"stringSort"}),`
`,n.jsx(r.p,{children:"Строковое сравнение с учётом русской локали."}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Строковые числа сортируются как числа: ",n.jsx(r.code,{children:'"2" < "10"'})," (не посимвольно)"]}),`
`,n.jsxs(r.li,{children:["Регистр не влияет: ",n.jsx(r.code,{children:'"яблоко"'})," = ",n.jsx(r.code,{children:'"Яблоко"'})]}),`
`,n.jsx(r.li,{children:"Пустые значения всегда внизу"}),`
`]}),`
`,n.jsxs(r.p,{children:["Порядок символов при ASC (локаль ",n.jsx(r.code,{children:"'ru'"}),"):"]}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:["Спецсимволы — ",n.jsx(r.code,{children:'"#tag"'}),", ",n.jsx(r.code,{children:'"@user"'}),", ",n.jsx(r.code,{children:'"-"'})]}),`
`,n.jsxs(r.li,{children:["Цифры — ",n.jsx(r.code,{children:'"31.10"'}),", ",n.jsx(r.code,{children:'"100"'})]}),`
`,n.jsxs(r.li,{children:["Кириллица — ",n.jsx(r.code,{children:'"Авто"'}),", ",n.jsx(r.code,{children:'"Яблоко"'})]}),`
`,n.jsxs(r.li,{children:["Латиница — ",n.jsx(r.code,{children:'"Apple"'}),", ",n.jsx(r.code,{children:'"MYCHANGE"'})]}),`
`,n.jsx(r.li,{children:"Пустые — всегда внизу"}),`
`]}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsx(r.p,{children:"Порядок между кириллицей и латиницей определяется русской локалью браузера — кириллица идёт первой."}),`
`]}),`
`,n.jsx(r.h3,{id:"numbersort",children:"numberSort"}),`
`,n.jsx(r.p,{children:"Числовое сравнение с поддержкой локальных форматов."}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:'"42"'})," → ",n.jsx(r.code,{children:"42"})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:'"1 000"'})," → ",n.jsx(r.code,{children:"1000"})," (пробелы-разделители)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:'"3,14"'})," → ",n.jsx(r.code,{children:"3.14"})," (запятая как десятичный)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:'"abc"'}),", ",n.jsx(r.code,{children:'""'})," → уходят вниз"]}),`
`]}),`
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
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"↓ ASC"})," — по возрастанию (от меньшего к большему)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"↑ DESC"})," — по убыванию (от большего к меньшему)"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"↕"})," — сортировка не активна"]}),`
`]}),`
`,n.jsxs(r.p,{children:["Пустые значения (",n.jsx(r.code,{children:"null"}),", ",n.jsx(r.code,{children:"undefined"}),", ",n.jsx(r.code,{children:'""'}),", строка из пробелов) всегда остаются внизу, независимо от направления."]}),`
`,n.jsx(r.h2,{id:"серверная-сортировка",children:"Серверная сортировка"}),`
`,n.jsxs(r.p,{children:["Если сортировка выполняется на бэкенде, включите ",n.jsx(r.code,{children:"manualSorting"}),". Таблица не будет сортировать данные сама, но будет обновлять ",n.jsx(r.code,{children:"state"})," при кликах по заголовкам."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

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
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:["Подробнее о типах — ",n.jsx(r.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-sorting-api--docs",children:"Sorting API"})]}),`
`]}),`
`,n.jsx(c,{})]})}function K(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{K as default};
