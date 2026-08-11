import{j as n}from"./react-D2T61mpp.js";import{c2 as i,c3 as s,bY as c}from"./vendor-CiLFOTMj.js";import{T as l}from"./TableCanvas.columnsGrouping.stories-CvVS9zzi.js";import"./react-is-Clcustum.js";import"./styled-components-BkMlLbXT.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-DwKiq8z4.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-CqlmicUJ.js";import"./FiltersActions-Baf-nSCT.js";import"./IconButton-BQnj4hIh.js";import"./@salutejs/plasma-icons-B9bLUA95.js";import"./@salutejs/sdds-finai-DFCsnlGS.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-e9PhU-mi.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-BQOKPHGZ.js";import"./TextField-4aECB1-5.js";import"./sharedUtilsInputs-Cc8vg9HD.js";import"./AnalyticalWidget-NZ7Isn7N.js";import"./Collapse-CCEpHUe-.js";import"./Table-BJl-y612.js";import"./react-data-grid-nfJfsrYQ.js";import"./TableTabs-DaXqU_0-.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-CZf_rwiQ.js";import"./ListOfFilters-yMRJj4PI.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-DbYna8Fz.js";import"./EmptyState-CEUeuAnB.js";import"./MassActions-DFdQ9OsE.js";import"./Autocomplete-hIwgDXeB.js";import"./TableGlide-D8FsPyUL.js";import"./@glideappsfinal/glide-data-grid-BgrWNZKz.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-DlTLutJx.js";function r(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,name:"Docs"}),`
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
