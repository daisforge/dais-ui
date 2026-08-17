import{j as n}from"./react-D2T61mpp.js";import{c2 as i,c3 as s,bY as c}from"./vendor-B0ELcGbr.js";import{T as l}from"./TableCanvas.columnsGrouping.stories-BgGcyViz.js";import"./react-is-Clcustum.js";import"./styled-components-C8vPRKee.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BaRLMcEi.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Cq6xg2aP.js";import"./FiltersActions-lNO92UYd.js";import"./IconButton-BnBbpqAh.js";import"./@salutejs/plasma-icons-Dn1uY4zn.js";import"./@salutejs/sdds-finai-CPdoK_07.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C6gzzOja.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Db5QYZwL.js";import"./TextField-EjbsL6Ht.js";import"./sharedUtilsInputs-DhWslEZM.js";import"./AnalyticalWidget-CP0ef4Ug.js";import"./Collapse-BXK8FQgS.js";import"./Table-C79Ltqdg.js";import"./react-data-grid-CqwhRDqe.js";import"./TableTabs-IUQeYtHj.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BmRgBXs_.js";import"./ListOfFilters-PfZMQBIO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CFcQOBcw.js";import"./EmptyState-Bje4uzUs.js";import"./MassActions-BCAaO-mU.js";import"./Autocomplete-d47Nck00.js";import"./TableGlide-Y7I_zAB7.js";import"./@glideappsfinal/glide-data-grid-AxJ6xNbQ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-C1mBF_U8.js";function r(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,name:"Docs"}),`
`,n.jsx(o.h1,{id:"columnsgrouping-tablecanvas",children:"ColumnsGrouping (TableCanvas)"}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"columnConfig.children"})}),`
`,n.jsx(o.p,{children:"Группировка колонок — вложенная структура шапки таблицы. Позволяет объединять несколько колонок под одним общим заголовком, создавая иерархию в шапке."}),`
`,n.jsx(o.h2,{id:"ключевые-особенности",children:"Ключевые особенности"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Поддержка многоуровневой вложенности (2, 3+ уровня)"}),`
`,n.jsxs(o.li,{children:["Совместимость с ",n.jsx(o.code,{children:"columnsControl"}),", ",n.jsx(o.code,{children:"resizableColumn"})]}),`
`,n.jsxs(o.li,{children:["Кастомизация ",n.jsx(o.code,{children:"name"})," через ",n.jsx(o.code,{children:"ReactNode"})]}),`
`]}),`
`,n.jsx(o.h2,{id:"как-работает",children:"Как работает"}),`
`,n.jsxs(o.p,{children:["Для создания группы колонок используется ",n.jsx(o.code,{children:"ColumnGroupConfig"})," вместо обычного ",n.jsx(o.code,{children:"ColumnConfig"}),". Группа определяется наличием ключа ",n.jsx(o.code,{children:"children"}),", в котором перечисляются дочерние колонки или вложенные группы."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`const columnConfig = [
  {
    name: 'Основные данные',
    children: [
      { key: 'name', name: 'Имя' },
      { key: 'age', name: 'Возраст' },
    ],
  },
  {
    name: 'Статистика',
    children: [
      { key: 'score', name: 'Баллы' },
      { key: 'rank', name: 'Ранг' },
    ],
  },
];
`})}),`
`,n.jsx(o.h2,{id:"особенности",children:"Особенности"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["Группа не имеет собственного ",n.jsx(o.code,{children:"key"})," — это чисто визуальный элемент шапки"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"name"})," группы может быть строкой или ",n.jsx(o.code,{children:"ReactNode"})," для кастомного рендера"]}),`
`,n.jsxs(o.li,{children:["При использовании с ",n.jsx(o.code,{children:"columnsControl"})," скрытие/показ работает на уровне дочерних колонок, не на уровне группы"]}),`
`,n.jsxs(o.li,{children:["При ",n.jsx(o.code,{children:"resizableColumn"})," ресайз работает на уровне дочерних колонок"]}),`
`]}),`
`,n.jsxs(o.blockquote,{children:[`
`,n.jsxs(o.p,{children:["Подробнее о типах и пропсах — ",n.jsx(o.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-columnsgrouping-api--docs",children:"ColumnsGrouping API"})]}),`
`]}),`
`,n.jsx(c,{})]})}function K(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r(e)}export{K as default};
