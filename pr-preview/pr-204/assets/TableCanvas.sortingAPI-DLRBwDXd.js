import{j as n}from"./react-UEdzNlUe.js";import{df as s}from"./vendor-BjJ6Dniq.js";import{M as i}from"./WithTooltip-KJL26V4Q-EsghDtie.js";import{T as o}from"./TypeSourceViewer-ZUvglUxv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-CJ4CjPIR.js";import"./styled-components-DEOLQzLG.js";import"./@tanstack/react-virtual-CarK5-pf.js";import"./preload-helper-Cro6n4mv.js";import"./index-Cu4lwwaE.js";import"./index-BWFFZcAS.js";import"./types.string-CieBX609.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Локальные компоненты/TableCanvas/Sorting/API"}),`
`,n.jsx(e.h1,{id:"sorting-api",children:"Sorting API"}),`
`,n.jsx(e.h2,{id:"sortcolumn",children:"SortColumn"}),`
`,n.jsx(o,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-sorting/types.ts",typeName:"SortColumn"}),`
`,n.jsx(e.h2,{id:"sortdirection",children:"SortDirection"}),`
`,n.jsx(o,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-sorting/types.ts",typeName:"SortDirection"}),`
`,n.jsx(e.h2,{id:"comparator",children:"Comparator"}),`
`,n.jsx(o,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/column-config.type.ts",typeName:"Comparator"}),`
`,n.jsx(e.h2,{id:"sortingtype-в-columnconfig",children:"sortingType (в ColumnConfig)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`sortingType?: 'stringSort' | 'numberSort' | Comparator<Row>;
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"'stringSort'"})})," — строковый компаратор. Локаль ",n.jsx(e.code,{children:"'ru'"}),", ",n.jsx(e.code,{children:"numeric: true"}),", ",n.jsx(e.code,{children:"sensitivity: 'base'"}),". Пустые значения — внизу"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"'numberSort'"})})," — числовой компаратор. Поддержка запятых, пробелов-разделителей тысяч. Невалидные и пустые значения — внизу"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"Comparator<Row>"})})," — кастомная функция ",n.jsx(e.code,{children:"(a: Row, b: Row) => number"}),". Направление (ASC/DESC) применяется автоматически"]}),`
`]}),`
`,n.jsx(e.h2,{id:"sorting-в-tableconfig",children:"sorting (в TableConfig)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`sorting?: {
  state: [
    readonly SortColumn[],
    React.Dispatch<React.SetStateAction<readonly SortColumn[]>>
  ];
  manualSorting?: boolean;
};
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"state"})})," — стейт сортировки. Передать ",n.jsx(e.code,{children:"useState<readonly SortColumn[]>([])"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"manualSorting"})})," ",n.jsx(e.code,{children:"boolean"})," — если ",n.jsx(e.code,{children:"true"}),", таблица не сортирует данные — ожидается серверная сортировка (default: ",n.jsx(e.code,{children:"false"}),")"]}),`
`]})]})}function y(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(t,{...r})}):t(r)}export{y as default};
