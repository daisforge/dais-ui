import{j as e}from"./react-D2T61mpp.js";import{cg as t,ch as o}from"./vendor-DwzXrIa_.js";import{T as r}from"./TypeSourceViewer-tu3tX35W.js";import"./react-is-Clcustum.js";import"./styled-components-C4HVP9Bu.js";import"./@tanstack/react-virtual-B5rjj9YJ.js";import"./tslib-DoU9Jm1N.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Локальные компоненты/TableCanvas/GridLines/API"}),`
`,e.jsx(n.h1,{id:"gridlines-api",children:"GridLines API"}),`
`,e.jsx(n.h2,{id:"tableconfiggridlines",children:"tableConfig.gridLines"}),`
`,e.jsx(n.p,{children:`Точка входа для управления линиями сетки. Только включение и выключение линий
на четырёх уровнях; кастомные цвета наружу не отдаются. Все поля опциональны.`}),`
`,e.jsx(r,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"GridLinesConfig"}),`
`,e.jsx(n.h2,{id:"cellbordervisibility",children:"CellBorderVisibility"}),`
`,e.jsxs(n.p,{children:["Стороны рамки одной ячейки, которые возвращает ",e.jsx(n.code,{children:"getCellBorder"}),`. Каждая сторона:
`,e.jsx(n.code,{children:"true"})," рисовать, ",e.jsx(n.code,{children:"false"}),` не рисовать, не задано работает уровень ниже (колонка,
строка или общая настройка).`]}),`
`,e.jsx(r,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"CellBorderVisibility"}),`
`,e.jsx(n.h2,{id:"columnconfigverticalborder",children:"columnConfig[].verticalBorder"}),`
`,e.jsxs(n.p,{children:["Вертикальная линия справа от колонки: ",e.jsx(n.code,{children:"verticalBorder: false"}),` убирает разделитель
после этой колонки. Перекрывает общую настройку `,e.jsx(n.code,{children:"gridLines.vertical"}),`. Поле живёт
на колонке, а не в `,e.jsx(n.code,{children:"gridLines"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`columnConfig={[
  { key: 'priority', verticalBorder: false },
]}
`})})]})}function g(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{g as default};
