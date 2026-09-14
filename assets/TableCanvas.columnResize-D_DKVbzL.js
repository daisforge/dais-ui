import{j as n}from"./react-D2T61mpp.js";import{cg as o,ch as t,ca as r}from"./vendor-Bjazpsej.js";import{C as h}from"./TableCanvas.columnResize.stories-BPcnaRQF.js";import"./react-is-Clcustum.js";import"./styled-components-CcFBncWN.js";import"./@tanstack/react-virtual-CjXe7f87.js";import"./tslib-DoU9Jm1N.js";import"./tableData-UCfjiBCh.js";import"./DocStoryTemplate-Ct7n8Z2-.js";import"./storySourceDoc-tVKyHcEN.js";import"./TableCanvas-D2ooqkxM.js";import"./FiltersActions-CrVXuaPL.js";import"./IconButton-zjaR6XE8.js";import"./@salutejs/plasma-icons-C2g29ePN.js";import"./@salutejs/sdds-finai-BWvk-VXZ.js";import"./@salutejs/sdds-themes-p9DCXULv.js";import"./utils-Cc5cl8nn.js";import"./constants-Ci5uyz-N.js";import"./sharedUtilsDebug-BX_KjCjW.js";import"./Box-1AoeLGbB.js";import"./TextField-ChmPcxhj.js";import"./sharedUtilsInputs-B_qH41VT.js";import"./AnalyticalWidget-D4iV3LDf.js";import"./Collapse-BlBc-Od7.js";import"./Table-CfO5bG1x.js";import"./react-data-grid-CVHCJ5d_.js";import"./TableTabs-DNI1kDhd.js";import"./TableCanvasSharedConstants-B2qJZwC8.js";import"./sharedUiSearch-Ja8yvnfy.js";import"./ListOfFilters-DyFPVz6p.js";import"./lodash.isequal-DD0Lfcik.js";import"./NumberFormat-C2i8gTJC.js";import"./EmptyState-CogiwdGD.js";import"./MassActions-Dme6CKUh.js";import"./Autocomplete-CXBWXJEC.js";import"./TableGlide-C6jIQFbH.js";import"./@glideappsfinal/glide-data-grid-e4No6FST.js";import"./canvas-hypertxt-DsokSIOX.js";import"./ErrorPage-BkQ_JA0a.js";function e(d){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:h,name:"Docs"}),`
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
`,n.jsx(r,{})]})}function O(d={}){const{wrapper:i}={...o(),...d.components};return i?n.jsx(i,{...d,children:n.jsx(e,{...d})}):e(d)}export{O as default};
