import{j as i}from"./react-D2T61mpp.js";import{cg as o,ch as t,ca as r}from"./vendor-noKLAXN_.js";import{C as h}from"./TableCanvas.columnResize.stories-BN8OMXlu.js";import"./react-is-Clcustum.js";import"./styled-components-DsU3CkJN.js";import"./@tanstack/react-virtual-ig-F83uS.js";import"./tslib-DoU9Jm1N.js";import"./tableData-DVJFoYoT.js";import"./DocStoryTemplate-CDaExnrR.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-qmwDAGV3.js";import"./FiltersActions-DYZGbHuA.js";import"./IconButton-C85mx186.js";import"./@salutejs/plasma-icons-QFvtg1-5.js";import"./@salutejs/sdds-finai-Clok5FAG.js";import"./@salutejs/sdds-themes-Cf5iJiw2.js";import"./utils-DLtG-Te-.js";import"./constants-BMyuY-FV.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-CN128sBO.js";import"./TextField-C3fWSe6C.js";import"./sharedUtilsInputs-C_Cv9hqb.js";import"./AiAgentPopup-CYN8WGkp.js";import"./TextArea-pBQSvsEG.js";import"./sharedUtilsResizable-D10n0Xmq.js";import"./Table-Dd0lYFQC.js";import"./Collapse-H2XGdmeX.js";import"./react-data-grid-CmKMVQyO.js";import"./TableTabs-CLaHsbx8.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./TableGlide-D7XH6J8Z.js";import"./@glideappsfinal/glide-data-grid-DMPhaI5m.js";import"./canvas-hypertxt-DsokSIOX.js";import"./sharedUiSearch-hs83Lol-.js";import"./ListOfFilters-DMj5O6Fm.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-GhC7b36o.js";import"./EmptyState-CraKoVrH.js";import"./MassActions-Cybk3zsC.js";import"./Autocomplete-DKHt-6T2.js";import"./ErrorPage-BLLO5pKv.js";function e(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...d.components};return i.jsxs(i.Fragment,{children:[i.jsx(t,{of:h,name:"Docs"}),`
`,i.jsx(n.h1,{id:"column-resize-minwidth--maxwidth--maxautowidth",children:"Column Resize (minWidth / maxWidth / maxAutoWidth)"}),`
`,i.jsxs(n.p,{children:["Ограничения ширины колонок. Задаются на уровне колонки (",i.jsx(n.code,{children:"columnConfig"}),") или глобально в ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h2,{id:"быстрый-старт",children:"Быстрый старт"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`const columnConfig: ColumnConfig<Row>[] = [
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
`,i.jsx(n.h2,{id:"поля-колонки",children:"Поля колонки"}),`
`,i.jsx(n.h3,{id:"minwidth",children:"minWidth"}),`
`,i.jsx(n.p,{children:"Минимальная ширина колонки (px). Колонка не может стать уже этого значения — ни при ресайзе мышкой, ни при автоматическом расчёте ширины."}),`
`,i.jsxs(n.p,{children:["Если не задан — берётся глобальный ",i.jsx(n.code,{children:"minColumnWidth"})," из ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h3,{id:"maxwidth",children:"maxWidth"}),`
`,i.jsxs(n.p,{children:["Максимальная ширина колонки (px). ",i.jsx(n.strong,{children:"Жёсткий потолок"})," — ограничивает всё: и автоматический расчёт ширины, и ручной ресайз мышкой. Колонка никогда не станет шире ",i.jsx(n.code,{children:"maxWidth"}),"."]}),`
`,i.jsxs(n.p,{children:["Если не задан — берётся глобальный ",i.jsx(n.code,{children:"maxColumnWidth"})," из ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h3,{id:"maxautowidth",children:"maxAutoWidth"}),`
`,i.jsxs(n.p,{children:["Максимальная ширина колонки при ",i.jsx(n.strong,{children:"автоматическом расчёте"})," (px). ",i.jsx(n.strong,{children:"Мягкий потолок"})," — колонка стремится не превышать это значение при автоматическом распределении ширин, но ",i.jsx(n.strong,{children:"пользователь может растянуть её шире"})," вручную."]}),`
`,i.jsxs(n.p,{children:["Если не задан — берётся глобальный ",i.jsx(n.code,{children:"maxColumnAutoWidth"})," из ",i.jsx(n.code,{children:"tableConfig"}),"."]}),`
`,i.jsx(n.h4,{id:"отличие-maxautowidth-от-maxwidth",children:"Отличие maxAutoWidth от maxWidth"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxWidth"})," — жёсткий потолок. Ограничивает и автоматическую ширину, и ручной ресайз."]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxAutoWidth"})," — мягкий потолок. Ограничивает только автоматическую ширину. Ручной ресайз не ограничен."]}),`
`]}),`
`,i.jsxs(n.p,{children:["Если заданы оба — при автоматическом расчёте берётся ",i.jsx(n.strong,{children:"меньшее"})," из двух значений. При ручном ресайзе действует только ",i.jsx(n.code,{children:"maxWidth"}),"."]}),`
`,i.jsx(n.h2,{id:"начальная-ширина",children:"Начальная ширина"}),`
`,i.jsxs(n.p,{children:["Если у колонки задан ",i.jsx(n.code,{children:"width"}),", она рендерится с этой шириной (клампится в диапазон ",i.jsx(n.code,{children:"minWidth"}),"..",i.jsx(n.code,{children:"maxWidth"}),")."]}),`
`,i.jsxs(n.p,{children:["Если ",i.jsx(n.code,{children:"width"})," не задан — начальная ширина вычисляется автоматически. Колонки без фиксированной ширины заполняют свободное место в контейнере. При этом ",i.jsx(n.code,{children:"maxAutoWidth"})," ограничивает, насколько широко колонка может автоматически растянуться."]}),`
`,i.jsx(n.h2,{id:"глобальные-ограничения",children:"Глобальные ограничения"}),`
`,i.jsxs(n.p,{children:["В ",i.jsx(n.code,{children:"tableConfig"})," можно задать ограничения по умолчанию для всех колонок:"]}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    minColumnWidth: 80,
    maxColumnWidth: 600,
    maxColumnAutoWidth: 400,
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,i.jsxs(n.p,{children:["Если у конкретной колонки задано своё значение (",i.jsx(n.code,{children:"minWidth"}),", ",i.jsx(n.code,{children:"maxWidth"}),", ",i.jsx(n.code,{children:"maxAutoWidth"}),"), оно перебивает глобальное."]}),`
`,i.jsx(n.h2,{id:"приоритеты",children:"Приоритеты"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:["Колоночные значения (",i.jsx(n.code,{children:"minWidth"}),", ",i.jsx(n.code,{children:"maxWidth"}),", ",i.jsx(n.code,{children:"maxAutoWidth"}),") приоритетнее глобальных из ",i.jsx(n.code,{children:"tableConfig"})]}),`
`,i.jsxs(n.li,{children:["Если ",i.jsx(n.code,{children:"minWidth"})," больше ",i.jsx(n.code,{children:"maxWidth"}),", приоритет у ",i.jsx(n.code,{children:"minWidth"})]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.code,{children:"maxAutoWidth"})," не влияет на ручной ресайз — пользователь всегда может растянуть колонку шире"]}),`
`]}),`
`,i.jsxs(n.p,{children:["Полная типизация колонок: ",i.jsx(n.a,{href:"?path=/docs/%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B-tablecanvas-api-columnconfig--docs",children:"columnConfig API"}),"."]}),`
`,i.jsx(r,{})]})}function U(d={}){const{wrapper:n}={...o(),...d.components};return n?i.jsx(n,{...d,children:i.jsx(e,{...d})}):e(d)}export{U as default};
