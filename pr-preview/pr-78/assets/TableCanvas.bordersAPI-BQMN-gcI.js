import{j as e}from"./react-D2T61mpp.js";import{cg as o,ch as t}from"./vendor-DhWFcJyQ.js";import{T as i}from"./TypeSourceViewer-DcTYU8D4.js";import"./react-is-Clcustum.js";import"./styled-components-Cejviklg.js";import"./@tanstack/react-virtual-DeRSQr4k.js";import"./tslib-DoU9Jm1N.js";function s(n){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Локальные компоненты/TableCanvas/Borders/API"}),`
`,e.jsx(r.h1,{id:"borders-api",children:"Borders API"}),`
`,e.jsx(r.h2,{id:"tableconfigborders",children:"tableConfig.borders"}),`
`,e.jsx(r.p,{children:`Точка входа для управления линиями сетки. Только включение и выключение линий
на четырёх уровнях; кастомные цвета наружу не отдаются. Все поля опциональны.`}),`
`,e.jsx(i,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"BordersConfig"}),`
`,e.jsx(r.h2,{id:"cellbordervisibility",children:"CellBorderVisibility"}),`
`,e.jsxs(r.p,{children:["Стороны рамки одной ячейки, которые возвращает ",e.jsx(r.code,{children:"getCellBorder"}),`. Каждая сторона:
`,e.jsx(r.code,{children:"true"})," рисовать, ",e.jsx(r.code,{children:"false"}),` не рисовать, не задано работает уровень ниже (колонка,
строка или общая настройка).`]}),`
`,e.jsx(i,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"CellBorderVisibility"}),`
`,e.jsx(r.h2,{id:"columnconfigverticalborder",children:"columnConfig[].verticalBorder"}),`
`,e.jsxs(r.p,{children:["Вертикальная линия справа от колонки: ",e.jsx(r.code,{children:"verticalBorder: false"}),` убирает разделитель
после этой колонки. Перекрывает общую настройку `,e.jsx(r.code,{children:"borders.vertical"}),`. Поле живёт
на колонке, а не в `,e.jsx(r.code,{children:"borders"}),"."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`columnConfig={[
  { key: 'priority', verticalBorder: false },
]}
`})})]})}function m(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{m as default};
