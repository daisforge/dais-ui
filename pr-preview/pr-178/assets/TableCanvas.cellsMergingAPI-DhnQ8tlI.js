import{j as e}from"./react-B60MRyL7.js";import{ck as i}from"./vendor-OPtbd1lp.js";import{M as o}from"./WithTooltip-KJL26V4Q-D2QxBZA4.js";import{T as s}from"./TypeSourceViewer-C-P16r5y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-BRw6YPBr.js";import"./@tanstack/react-virtual-EFiood7F.js";import"./preload-helper-BnDtJV8M.js";import"./index-Cu4lwwaE.js";import"./index-B1pIjx6t.js";import"./@salutejs/plasma-icons-ByrhRzX2.js";import"./types.string-CtO2sHsM.js";function l(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Локальные компоненты/TableCanvas/CellsMerging/API"}),`
`,e.jsx(n.h1,{id:"cellsmerging-api",children:"CellsMerging API"}),`
`,e.jsx(n.h2,{id:"tableconfigmergecells",children:"tableConfig.mergeCells"}),`
`,e.jsx(n.p,{children:"Точка входа для объединения ячеек тела. Все поля опциональны:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`mergeCells?: {
  /** Колонки, объединяемые по подряд идущим одинаковым значениям. */
  mergeByCellValues?: Array<string | { colKey: string; value: (row) => unknown }>;
  /** Управляемый список объединений по ключам строк и колонок. */
  mergedCellsRegions?: MergedCellsRegion[];
  /** Нужен для mergedCellsRegions: сопоставляет rowKeys со строками. */
  rowKeyGetter?: (row) => string | number;
  /** Общий (табличный) дефолт выравнивания контента в блоках. */
  mergedCellsAlign?: MergedCellsAlign;
};
`})}),`
`,e.jsx(n.h2,{id:"mergedcellsregion",children:"MergedCellsRegion"}),`
`,e.jsx(n.p,{children:"Один управляемый регион: ключи строк, ключи колонок и точечное выравнивание."}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/table-config.type.ts",typeName:"MergedCellsRegion"}),`
`,e.jsx(n.h2,{id:"mergedcellsalign",children:"MergedCellsAlign"}),`
`,e.jsxs(n.p,{children:["Выравнивание контента в блоке. Задаётся на трёх уровнях: ",e.jsx(n.code,{children:"mergedCellsAlign"}),` региона,
`,e.jsx(n.code,{children:"columnConfig[].mergedCellsAlign"})," (колонка), ",e.jsx(n.code,{children:"mergeCells.mergedCellsAlign"}),` или
`,e.jsx(n.code,{children:"rowsGrouping.mergedCellsAlign"})," (дефолт). Точечное важнее общего."]}),`
`,e.jsxs(n.p,{children:["Колоночный ",e.jsx(n.code,{children:"mergedCellsAlign"})," — это ",e.jsx(n.code,{children:"MergedCellsAlign"}),` (одно на все блоки колонки) или
функция `,e.jsx(n.code,{children:"(row) => MergedCellsAlign | undefined"}),` по данным верхней строки блока. Функция
даёт разное выравнивание разным блокам, включая merged-виды группировки/subRows, где
границы блоков решает таблица.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`columnConfig={[
  { key: 'dept', mergedCellsAlign: (row) =>
      row.critical ? { vertical: 'top' } : { vertical: 'center' } },
]}
`})}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/types/merged-cells.type.ts",typeName:"MergedCellsAlign"}),`
`,e.jsx(n.h2,{id:"rowsgrouping-merged-вид",children:"rowsGrouping (merged-вид)"}),`
`,e.jsxs(n.p,{children:["Поля группировки, относящиеся к merged-виду: ",e.jsx(n.code,{children:"view: 'merged'"}),`,
`,e.jsx(n.code,{children:"mergedCellsAlign"}),", ",e.jsx(n.code,{children:"disableGroupColumnsSort"}),"."]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-rows-grouping/types.ts",typeName:"RowsGrouping"}),`
`,e.jsx(n.h2,{id:"subrows-merged-вид",children:"subRows (merged-вид)"}),`
`,e.jsxs(n.p,{children:["Поля subRows, относящиеся к merged-виду: ",e.jsx(n.code,{children:"view: 'merged'"})," и ",e.jsx(n.code,{children:"mergedColumns"}),`
(упорядоченный список колонок-предков, индекс = глубина уровня дерева).`]}),`
`,e.jsx(s,{language:"ts",filePath:"packages/ui-kit/src/components/TableCanvas/feature-tree/types.ts",typeName:"SubRows"})]})}function A(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{A as default};
