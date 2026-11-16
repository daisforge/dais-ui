import{j as n}from"./react-B60MRyL7.js";import{ck as t}from"./vendor-ABAm7dM9.js";import{M as r}from"./WithTooltip-KJL26V4Q-DVjM17Xc.js";import{T as o}from"./TypeSourceViewer-Dow11Lrw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./tslib-DoU9Jm1N.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./react-is-Clcustum.js";import"./styled-components-JDoewyqD.js";import"./@tanstack/react-virtual-aXadwhme.js";import"./preload-helper-Bmf6XQY_.js";import"./index-Cu4lwwaE.js";import"./index-OE46t0bk.js";import"./@salutejs/plasma-icons-BjqIpdkS.js";function s(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...t(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Локальные компоненты/TableCanvas/Searching/API"}),`
`,n.jsx(e.h1,{id:"searching-api",children:"Searching API"}),`
`,n.jsx(e.h2,{id:"searchingprops",children:"SearchingProps"}),`
`,n.jsx(o,{filePath:"packages/ui-kit/src/components/TableCanvas/feature-searching/types.ts",typeName:"SearchingProps",language:"ts"}),`
`,n.jsx(e.h2,{id:"searchautocompleteconfig",children:"SearchAutocompleteConfig"}),`
`,n.jsx(o,{filePath:"packages/ui-kit/src/components/TableCanvas/feature-searching/types.ts",typeName:"SearchAutocompleteConfig",language:"ts"}),`
`,n.jsx(e.h2,{id:"примеры-конфигурации",children:"Примеры конфигурации"}),`
`,n.jsx(e.h3,{id:"базовый-поиск",children:"Базовый поиск"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    searching: {
      enabled: true,
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,n.jsx(e.h3,{id:"серверный-поиск",children:"Серверный поиск"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    searching: {
      enabled: true,
      manualSearching: true,
      onDebouncedChange: (value) => fetchData({ search: value }),
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})}),`
`,n.jsx(e.h3,{id:"автокомплит-с-историей",children:"Автокомплит с историей"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<TableCanvas
  tableConfig={{
    searching: {
      enabled: true,
      autocomplete: {
        suggestions: [{ label: 'Запрос 1' }, { label: 'Запрос 2' }],
        threshold: 0,
        listMaxHeight: '200px',
        onSuggestionSelect: (item) => console.log(item.label),
      },
    },
  }}
  columnConfig={columnConfig}
  rows={rows}
/>
`})})]})}function S(a={}){const{wrapper:e}={...t(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(s,{...a})}):s(a)}export{S as default};
