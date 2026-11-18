import{j as n}from"./react-B60MRyL7.js";import{ck as s}from"./vendor-ABAm7dM9.js";import{M as o,S as c}from"./WithTooltip-KJL26V4Q-DVjM17Xc.js";import{T as l}from"./TableCanvas.sorting.stories-Dl59TXZ6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./preload-helper-Bmf6XQY_.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";import"./tableData-DKA5H0bF.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-B3cC69aE.js";import"./@sddsjs/sdds_finai-DkwmD3gE.js";import"./utils-CWW6sPYd.js";import"./constants-DHlp9b4t.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./@salutejs/sdds-finai-D8wK5fGe.js";import"./sharedUtilsCopy-CGH-mx0N.js";import"./index-DtotkDJi.js";import"./Box-bkXdsxp1.js";import"./Collapse-BC9SztdT.js";import"./TableCanvasSharedConstants-CqGDn8zL.js";import"./TableGlide-D04a4cW3.js";import"./@glideappsfinal/glide-data-grid-IkMVqKbI.js";import"./canvas-hypertxt-DsokSIOX.js";import"./countWhile-blgVacgU.js";import"./Dropdown-OQAgfOXP.js";import"./TableTabs-BBnsWNxR.js";import"./sharedUiSearch-BTGm-BQU.js";import"./TextField-Bk21xWxf.js";import"./sharedUtilsInputs-DX1n1p66.js";import"./TypographyWithAutoTooltip-uQsFtynq.js";import"./Typography-DHR5p_-g.js";import"./ListOfFilters-DcXGWY5G.js";import"./Table-CkwJZquQ.js";import"./react-data-grid-a6lPhyw4.js";import"./lodash.isequal-mFNAsUE8.js";import"./Combobox-BgS9GVK7.js";import"./NumberFormat-D7THTU7Y.js";import"./EmptyState-ClfQAY0j.js";import"./unidentified@3x-DeqHr2sH.js";import"./MassActions-DgIb8YVo.js";import"./Autocomplete-D4Dg924L.js";import"./FiltersActions-BgotVPhI.js";import"./IconButton-CWgrxfM1.js";import"./TooltipList-CdTlGXww.js";import"./ErrorPage-C-8swpRG.js";function i(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l,name:"Docs"}),`
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
`,n.jsx(c,{})]})}function ln(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{ln as default};
