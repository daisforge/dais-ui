import{j as n}from"./react-D2T61mpp.js";import{c2 as o,c3 as t,bY as r}from"./vendor-B0ELcGbr.js";import{C as h}from"./TableCanvas.columnResize.stories-BfUoJHbI.js";import"./react-is-Clcustum.js";import"./styled-components-C8vPRKee.js";import"./tslib-De9GV7Vy.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-BaRLMcEi.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-Cq6xg2aP.js";import"./FiltersActions-lNO92UYd.js";import"./IconButton-BnBbpqAh.js";import"./@salutejs/plasma-icons-Dn1uY4zn.js";import"./@salutejs/sdds-finai-CPdoK_07.js";import"./@salutejs/sdds-themes-DMMPng_c.js";import"./utils-C6gzzOja.js";import"./constants-B3b49qmU.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-Db5QYZwL.js";import"./TextField-EjbsL6Ht.js";import"./sharedUtilsInputs-DhWslEZM.js";import"./AnalyticalWidget-CP0ef4Ug.js";import"./Collapse-BXK8FQgS.js";import"./Table-C79Ltqdg.js";import"./react-data-grid-CqwhRDqe.js";import"./TableTabs-IUQeYtHj.js";import"./TableCanvasSharedConstants-D5ZJAqGq.js";import"./sharedUiSearch-BmRgBXs_.js";import"./ListOfFilters-PfZMQBIO.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-CFcQOBcw.js";import"./EmptyState-Bje4uzUs.js";import"./MassActions-BCAaO-mU.js";import"./Autocomplete-d47Nck00.js";import"./TableGlide-Y7I_zAB7.js";import"./@glideappsfinal/glide-data-grid-AxJ6xNbQ.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-C1mBF_U8.js";function e(d){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:h,name:"Docs"}),`
`,n.jsx(i.h1,{id:"column-resize-minwidth--maxwidth--maxautowidth",children:"Column Resize (minWidth / maxWidth / maxAutoWidth)"}),`
`,n.jsxs(i.p,{children:["Ограничения ширины колонок. Задаются на уровне колонки (",n.jsx(i.code,{children:"columnConfig"}),") или глобально в ",n.jsx(i.code,{children:"tableConfig"}),"."]}),`
`,n.jsx(i.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`const columnConfig: ColumnConfig<Row>[] = [
  {
    key: 'name',
    name: 'Название',
    width: 250,
    minWidth: 150,
    maxWidth: 400,
  },
  {
    key: 'description',
    name: 'Описание',
    maxAutoWidth: 500,
  },
];
`})}),`
`,n.jsx(i.h2,{id:"поля-колонки",children:"Поля колонки"}),`
`,n.jsx(i.h3,{id:"minwidth",children:"minWidth"}),`
`,n.jsx(i.p,{children:"Минимальная ширина колонки (px). Колонка не может стать уже этого значения — ни при ресайзе мышкой, ни при автоматическом расчёте ширины."}),`
`,n.jsxs(i.p,{children:["Если не задан — берётся глобальный ",n.jsx(i.code,{children:"minColumnWidth"})," из ",n.jsx(i.code,{children:"tableConfig"}),"."]}),`
`,n.jsx(i.h3,{id:"maxwidth",children:"maxWidth"}),`
`,n.jsxs(i.p,{children:["Максимальная ширина колонки (px). ",n.jsx(i.strong,{children:"Жёсткий потолок"})," — ограничивает всё: и автоматический расчёт ширины, и ручной ресайз мышкой. Колонка никогда не станет шире ",n.jsx(i.code,{children:"maxWidth"}),"."]}),`
`,n.jsxs(i.p,{children:["Если не задан — берётся глобальный ",n.jsx(i.code,{children:"maxColumnWidth"})," из ",n.jsx(i.code,{children:"tableConfig"}),"."]}),`
`,n.jsx(i.h3,{id:"maxautowidth",children:"maxAutoWidth"}),`
`,n.jsxs(i.p,{children:["Максимальная ширина колонки при ",n.jsx(i.strong,{children:"автоматическом расчёте"})," (px). ",n.jsx(i.strong,{children:"Мягкий потолок"})," — колонка стремится не превышать это значение при автоматическом распределении ширин, но ",n.jsx(i.strong,{children:"пользователь может растянуть её шире"})," вручную."]}),`
`,n.jsxs(i.p,{children:["Если не задан — берётся глобальный ",n.jsx(i.code,{children:"maxColumnAutoWidth"})," из ",n.jsx(i.code,{children:"tableConfig"}),"."]}),`
`,n.jsx(i.h4,{id:"отличие-maxautowidth-от-maxwidth",children:"Отличие maxAutoWidth от maxWidth"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"maxWidth"})," — жёсткий потолок. Ограничивает и автоматическую ширину, и ручной ресайз."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"maxAutoWidth"})," — мягкий потолок. Ограничивает только автоматическую ширину. Ручной ресайз не ограничен."]}),`
`]}),`
`,n.jsxs(i.p,{children:["Если заданы оба — при автоматическом расчёте берётся ",n.jsx(i.strong,{children:"меньшее"})," из двух значений. При ручном ресайзе действует только ",n.jsx(i.code,{children:"maxWidth"}),"."]}),`
`,n.jsx(i.h2,{id:"начальная-ширина",children:"Начальная ширина"}),`
`,n.jsxs(i.p,{children:["Если у колонки задан ",n.jsx(i.code,{children:"width"}),", она рендерится с этой шириной (клампится в диапазон ",n.jsx(i.code,{children:"minWidth"}),"..",n.jsx(i.code,{children:"maxWidth"}),")."]}),`
`,n.jsxs(i.p,{children:["Если ",n.jsx(i.code,{children:"width"})," не задан — начальная ширина вычисляется автоматически. Колонки без фиксированной ширины заполняют свободное место в контейнере. При этом ",n.jsx(i.code,{children:"maxAutoWidth"})," ограничивает, насколько широко колонка может автоматически растянуться."]}),`
`,n.jsx(i.h2,{id:"глобальные-ограничения",children:"Глобальные ограничения"}),`
`,n.jsxs(i.p,{children:["В ",n.jsx(i.code,{children:"tableConfig"})," можно задать ограничения по умолчанию для всех колонок:"]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    minColumnWidth: 80,
    maxColumnWidth: 600,
    maxColumnAutoWidth: 400,
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,n.jsxs(i.p,{children:["Если у конкретной колонки задано своё значение (",n.jsx(i.code,{children:"minWidth"}),", ",n.jsx(i.code,{children:"maxWidth"}),", ",n.jsx(i.code,{children:"maxAutoWidth"}),"), оно перебивает глобальное."]}),`
`,n.jsx(i.h2,{id:"приоритеты",children:"Приоритеты"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Колоночные значения (",n.jsx(i.code,{children:"minWidth"}),", ",n.jsx(i.code,{children:"maxWidth"}),", ",n.jsx(i.code,{children:"maxAutoWidth"}),") приоритетнее глобальных из ",n.jsx(i.code,{children:"tableConfig"})]}),`
`,n.jsxs(i.li,{children:["Если ",n.jsx(i.code,{children:"minWidth"})," больше ",n.jsx(i.code,{children:"maxWidth"}),", приоритет у ",n.jsx(i.code,{children:"minWidth"})]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"maxAutoWidth"})," не влияет на ручной ресайз — пользователь всегда может растянуть колонку шире"]}),`
`]}),`
`,n.jsxs(i.p,{children:["Полная типизация колонок: ",n.jsx(i.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-api-columnconfig--docs",children:"columnConfig API"}),"."]}),`
`,n.jsx(r,{})]})}function J(d={}){const{wrapper:i}={...o(),...d.components};return i?n.jsx(i,{...d,children:n.jsx(e,{...d})}):e(d)}export{J as default};
