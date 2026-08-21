import{j as e}from"./react-D2T61mpp.js";import{c2 as s,c3 as i}from"./vendor-B0ELcGbr.js";import{T as t}from"./TypeSourceViewer-RXb7QuNQ.js";import"./react-is-Clcustum.js";import"./styled-components-C8vPRKee.js";import"./tslib-De9GV7Vy.js";function c(l){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Локальные компоненты/TableCanvas/CellsSelection/API"}),`
`,e.jsx(n.h1,{id:"cellsselection-api",children:"CellsSelection API"}),`
`,e.jsx(n.h2,{id:"cellsselectionmode",children:"CellsSelectionMode"}),`
`,e.jsxs(n.p,{children:["Режим фактического (нативного) выделения ячеек — ",e.jsx(n.code,{children:"tableConfig.cellsSelection.mode"}),"."]}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/TableGlide/types.ts",typeName:"CellsSelectionMode"}),`
`,e.jsx(n.h2,{id:"controlled-режим",children:"Controlled-режим"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"tableConfig.cellsSelection.state"}),` — внешний (controlled) контроль нативного выделения,
`,e.jsx(n.code,{children:"state"}),"-кортеж ",e.jsx(n.code,{children:"[GridSelection, setter]"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`cellsSelection?: {
  state?: [
    GridSelection,
    React.Dispatch<React.SetStateAction<GridSelection>>
  ];
};
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Сброс: ",e.jsx(n.code,{children:"setter({ current: undefined, rows: CompactSelection.empty(), columns: CompactSelection.empty() })"}),"."]}),`
`,e.jsx(n.li,{children:`Контролирует нативное выделение (ячейки/диапазон/смежные строки и колонки).
Несмежный Ctrl-выбор колонок/строк — внутренний.`}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"CompactSelection"})," (значение) и ",e.jsx(n.code,{children:"GridSelection"}),` (тип) реэкспортируются из
`,e.jsx(n.code,{children:"@daisforge/ui/components/TableCanvas"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"cellsselectionconfig",children:"CellsSelectionConfig"}),`
`,e.jsxs(n.p,{children:["Конфиг выделения колонок (",e.jsx(n.code,{children:"tableConfig.cellsSelection"}),")."]}),`
`,e.jsx(t,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"CellsSelectionConfig"})]})}function x(l={}){const{wrapper:n}={...s(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}export{x as default};
