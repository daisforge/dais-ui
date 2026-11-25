import{j as e}from"./react-UEdzNlUe.js";import{dd as o}from"./vendor-DKFmtNka.js";import{M as c}from"./WithTooltip-KJL26V4Q-D7QdvFrX.js";import{T as l}from"./TypeSourceViewer-Dd8WUR6F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-CDfPITHT.js";import"./@tanstack/react-virtual-0hY7ij6n.js";import"./preload-helper-DY3st4ya.js";import"./index-Cu4lwwaE.js";import"./index-CLqcrFDJ.js";import"./types.string-BR8eQOO_.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Локальные компоненты/TableCanvas/CellsSelection/API"}),`
`,e.jsx(n.h1,{id:"cellsselection-api",children:"CellsSelection API"}),`
`,e.jsx(n.h2,{id:"cellsselectionmode",children:"CellsSelectionMode"}),`
`,e.jsxs(n.p,{children:["Режим фактического (нативного) выделения ячеек — ",e.jsx(n.code,{children:"tableConfig.cellsSelection.mode"}),"."]}),`
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableGlide/types.ts",typeName:"CellsSelectionMode"}),`
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
`,e.jsx(l,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"CellsSelectionConfig"})]})}function y(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{y as default};
